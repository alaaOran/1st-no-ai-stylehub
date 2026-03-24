const form = document.getElementById("feedbackForm");
const input = document.getElementById("feedbackInput");
const message = document.getElementById("message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (input.value.trim() !== "") {
    message.textContent = "Feedback sent successfully!";
    message.classList.add("show");
    message.style.color = "green"; 
    input.value = "";
  } else {
    message.textContent = "Please enter something!";
    message.classList.add("show");
    message.style.color = "red";
  }
});
