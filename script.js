const messageIn = document.querySelector("#message-in")
const messageOut = document.querySelector("#message-out")
const submit = document.querySelector("#submit-btn")

messageIn.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault()
    getMessage()
  }
})

submit.addEventListener("click", (event) => {
  event.preventDefault()
  getMessage()
})

function getMessage() {
  messageOut.textContent = messageIn.value
  messageIn.value = ""
}
