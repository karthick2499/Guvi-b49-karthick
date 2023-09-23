const form = document.getElementById("myform");
const table = document.getElementById("dataTable");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  debugger;
  const fname = document.getElementById("fname").value;
  var lastName = document.getElementById('last-name').value;
  const address = document.getElementById("address").value;
  const pincode = document.getElementById("pincode").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const foodcheckboxes = document.querySelectorAll(
    'input[name="food"]:checked'
  );
  const state = document.getElementById("state").value;
  const country = document.getElementById("country").value;

  const foodChoices = Array.from(foodcheckboxes).map(
    (checkbox) => checkbox.value
  );

  if (foodChoices.length < 2) {
    alert("Please choose at least 2 food options.");
    return;
  }

  const newRow = table.insertRow(); //document.createElement("tr");
  const fnameCol = newRow.insertCell(); //document.createElement("td");
  const lnameCol = newRow.insertCell(); //document.createElement("td");
  const addressCol = newRow.insertCell();
  const pincodeCol = newRow.insertCell();
  const genderCol = newRow.insertCell(); //document.createElement("td");
  const foodCol = newRow.insertCell(); //document.createElement("td");
  const stateCol = newRow.insertCell();
  const countryCol = newRow.insertCell();


  fnameCol.textContent = fname;
  lnameCol.textContent = lastName;
  addressCol.textContent = address;
  pincodeCol.textContent = pincode;
  genderCol.textContent = gender;
  foodCol.textContent = foodChoices.join(", ");
  stateCol.textContent = state;
  countryCol.textContent = country;


  form.reset();
});
