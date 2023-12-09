let input = document.getElementById("input");
let addBtn = document.getElementById("add-btn");
let items = document.getElementById("items");

addBtn.addEventListener("click", function (e) {
  let val = input.value;

  addItem(val);
});

function addItem(text) {
  let div = document.createElement("div");
  div.classList.add("item");
  items.appendChild(div);

  let span = document.createElement("span");
  span.classList.add("text");
  span.innerText = text;
  div.appendChild(span);

  let markBtn = document.createElement("button");
  markBtn.classList.add("mark-btn");
  markBtn.innerHTML = "✅";
  div.appendChild(markBtn);

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = "🗑️";
  div.appendChild(deleteBtn);

  input.value = "";
  input.focus();
}

items.addEventListener("click", function (e) {
  let btnClicked = e.target;

  if (btnClicked.classList.contains("mark-btn")) {
    btnClicked.parentElement.firstChild.classList.toggle("completed");
  } else if (btnClicked.classList.contains("delete-btn")) {
    btnClicked.parentElement.remove();
  }
});
