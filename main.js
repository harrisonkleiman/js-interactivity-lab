// Step 1
console.log("Hello World")

// Step 2

const message = document.querySelector("#message")

const addMovie = (event) => {
  event.preventDefault()
  let inputField = document.querySelector("input")
  let movie = document.createElement("li")
  const movieTitle = document.createElement("span")

  movieTitle.textContent = inputField.value
  movieTitle.addEventListener("click", crossOffMovie)
  movie.appendChild(movieTitle)

  document.querySelector("ul").appendChild(movie)

  const deleteBtn = document.createElement("button")
  deleteBtn.textContent = "X"
  deleteBtn.addEventListener("click", deleteMovie)
  movie.appendChild(deleteBtn)
}

const add = document.querySelector("form")
add.addEventListener("submit", addMovie)

const deleteMovie = (event) => {
  event.target.Node.remove()
  message.textContent = "Movie Deleted!"
}

const crossOffMovie = (event) => {
  event.target.classList.toggle("checked")
  if (event.target.classList.contains("checked") === true) {
    message.textContent = "Movie watched!"
  } else {
    message.textContent = "Movie added back!"
  }
}


