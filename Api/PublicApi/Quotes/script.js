const quote = document.querySelector(".quote");
const btn = document.querySelector(".quotebtn");
function getdata() {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = " ";
      quote.innerHTML = `<h2 class="bg-success bg-gradient text-white text-center">Quote</h2>
        <p class="ms-2 fs-4">${data.quote}</p>`;
    })
    .catch((error) => {
      console.log(error);
    });
}
btn.addEventListener("click", getdata);