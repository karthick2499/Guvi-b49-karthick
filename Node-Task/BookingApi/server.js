const express = require("express");

const app = express();

app.use(express.json());

const port = 3000;

const rooms = [
  {
    name: "Elite",
    seats: 50,
    amenities: "wifi,projection screen,AC",
    price: 1500,
    roomId: "2525",
    bookingDetails: [
      {
        customerName: "Guvi",
        date: new Date("2023-01-04"),
        start: "07:00",
        end: "10:00",
        status: "confirmed",
      },
    ],
  },
  {
    name: "Premium",
    seats: 100,
    amenities: "wifi,projection screen,AC",
    price: 2500,
    roomId: "5252",
    bookingDetails: [
      {
        customerName: "zen",
        date: new Date("2023-01-05"),
        start: "15:00",
        end: "17:00",
        status: "Payment Pending",
      },
    ],
  },
  {
    name: "Semi Class",
    seats: 120,
    amenities: "wifi,projection screen,AC,Food",
    price: 2500,
    roomId: "2255",
    bookingDetails: [
      {
        customerName: "GEEK",
        date: new Date("2023-1-06"),
        start: "15:00",
        end: "17:00",
        status: "Payment Pending",
      },
    ],
  },
];


app.post("/createRoom", (req, res) => {
  rooms.push({
    name: req.body.name,
    seats: req.body.seats,
    amenities: req.body.amenities,
    price: req.body.price,
    roomId: "001",
    bookingDetails: [{}],
  });
  res.status(200).send("Room Created");
});


app.post("/bookRoom", (req, res, next) => {
  for (let i = 0; i < rooms.length; i++) {
    console.log("Book");
    if (!(rooms[i].roomId === req.body.roomId)) {
      return res.status(400).send({ error: "Invalid" });
    } else {
      let booking = {
        customerName: req.body.name,
        date: new Date(req.body.date),
        start: req.body.start,
        end: req.body.end,
        status: "confirmed",
      };
      let result = undefined;
      rooms[i].bookingDetails.forEach((book) => {
        if (
          book.date.getTime() == booking.date.getTime() &&
          book.start === booking.start
        ) {
          result = 0;
          console.log("in booking");
        } else {
          result = 1;
          rooms[i].bookingDetails.push(booking);
        }
      });
      if (result) return res.status(200).send("Booking confirmed");
      else
        return res
          .status(400)
          .send({ error: "Please select different time slot" });
    }
  }
});

app.get("/listCustomer", (req, res) => {
  let customerArray = [];

  rooms.forEach((room) => {
    let customerObj = { roomName: room.name };

    room.bookingDetails.forEach((customer) => {
      customerObj.customerName = customer.customerName;
      customerObj.date = customer.date;
      customerObj.start = customer.start;
      customerObj.end = customer.end;

      customerArray.push(customerObj);
    });
  });

  res.send(customerArray);
});



app.get("/listRooms", (req, res) => {
  res.status(200).send(rooms);
});


app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});


