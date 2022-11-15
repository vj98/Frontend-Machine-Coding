let btn = document.getElementById("btn");
let modal = document.getElementById("modal");
let close = document.getElementById("close");

btn.addEventListener("click", function (e) {
  modal.style.display = "block";
});

close.addEventListener("click", function (e) {
  modal.style.display = "none";
});
