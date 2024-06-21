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

/**
 * Retrieves the message from the input field and displays it in the output field.
 * After displaying the message, it clears the input field.
 */
function getMessage() {
  // Get the value of the input field and display it in the output field
  messageOut.textContent = messageIn.value;

  // Clear the input field
  messageIn.value = "";
}
