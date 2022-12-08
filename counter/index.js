let increment = document.getElementById("increment");
let add = document.getElementById("add");
let subtract = document.getElementById("subtract");
let reset = document.getElementById("reset");
let incrementNumber = 1;

increment.addEventListener("change", function (e) {
  incrementNumber = parseInt(e.target.value);
});

add.addEventListener("click", function (e) {
  let currValue = document.getElementById("number");
  let total = parseInt(currValue.innerText) + incrementNumber;

  currValue.innerText = total;
});

subtract.addEventListener("click", function (e) {
  let currValue = document.getElementById("number");
  let total = parseInt(currValue.innerText) - incrementNumber;
  console.log(total, total < 0);
  if (total < 0) {
    total = 0;
  }

  currValue.innerText = total;
});

reset.addEventListener("click", function (e) {
  let currValue = document.getElementById("number");
  currValue.innerText = 0;
});
