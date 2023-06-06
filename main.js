const counter = document.querySelector(".counter");
const btn = document.querySelector(".click");

if (localStorage.getItem("counterValue")) {
  counter.innerText = localStorage.getItem("counterValue");
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  counter.innerText++;

  localStorage.setItem("counterValue", counter.innerText);
});
