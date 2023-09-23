let promObj = new Promise((resolve, reject) => {
console.log("Check stock to proceed with this order");
// resolve("Item is available");
reject("Item is out of stock");
});

console.log(promObj);

// promObj.then (
// (val) => {
//     console.log("Order status ----",val);
// },
// (err) =>{
//     console.log("Order status ----",err);
// }
// );


promObj
.then (
    (val) => {
        console.log("Order status ----",val);
    })
  .catch((err) =>{
        console.log("Order status ----",err);
    });