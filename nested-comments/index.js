let commentContainer = document.getElementById("comment-container");

function createInputBox() {
  let div = document.createElement("div");
  div.setAttribute("class", "comment-details");

  div.innerHTML += `
    <input type="text" placeholder="add text here" class="input" />
    <button class="btn submit">Submit</button>`;

  return div;
}

function addReply(text) {
  let div = document.createElement("div");
  div.setAttribute("class", "all-comment");

  div.innerHTML += `
    <div class="card">
      <span class="text">${text}</span>
      <span id="reply" class="reply">
        Add Reply
      </span>
    </div>`;

  return div;
}

commentContainer.addEventListener("click", function (e) {
  let replyClicked = e.target.classList.contains("reply");
  let submitClicked = e.target.classList.contains("submit");
  let closestCard = e.target.closest(".all-comment");

  if (replyClicked) {
    closestCard.appendChild(createInputBox());
  }

  if (submitClicked) {
    const commentDetails = e.target.closest(".comment-details");
    if (commentDetails.children[0].value) {
      closestCard.appendChild(addReply(commentDetails.children[0].value));
      commentDetails.remove();
    }
  }
});
