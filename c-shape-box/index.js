let boxContainer = document.getElementById("box-container");
let box = document.querySelectorAll(".box");
let queue = [];

boxContainer.addEventListener("click", function (e) {
  let index = e.target.dataset.index;

  if (index != undefined) {
    queue.push(index);
    box[index].classList.add("green-color");
  }

  if (queue.length == 7) {
    let cnt = 0;
    while (queue.length > 0) {
      let ind = queue.shift();
      cnt++;
      setTimeout(() => {
        box[ind].classList.remove("green-color");
      }, cnt * 1000);
    }
  }
});
