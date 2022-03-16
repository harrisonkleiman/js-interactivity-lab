// Step 1
console.log("Hello World")

// Step 2

document.querySelector("form").addEventListener("submit", addMovie)
const message = document.querySelector("#message")

function addMovie(event) {
  event.preventDefault()
  let inputField = document.querySelector("input")
  let movie = document.createElement("li")
  const movieTitle = document.createElement("span")
  movieTitle.textContent = inputField.value
  movieTitle.addEventListener("click", crossOffMovie)
  movie.appendChild(movieTitle)
  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "X"
  deleteBtn.addEventListener("click", deleteMovie)
  movie.appendChild(deleteBtn)
}

function deleteMovie(event) {
  event.target.parentElement.remove()
  message.textContent = "Movie Deleted"
}

function crossOffMovie(event) {
  event.target.classList.toggle("checked")
  if (event.target.classList.contains("checked") === true) {
    message.textContent = "Movie watched!"
  } else {
    message.textContent = "Movie added back!"
  }
}


