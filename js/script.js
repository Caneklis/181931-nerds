var link = document.querySelector(".writeus-btn");
var popup = document.querySelector(".feedback");
var close = document.querySelector(".close-btn");
var form = document.querySelector(".feedback-form");
var fullname = document.querySelector("[name=fullname]");
var email = document.querySelector("[name=email]");
var message = document.querySelector("[name=message]");
var storage = localStorage.getItem("fullname");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("feedback-show");

  if (storage) {
    fullname.value = storage;
    message.focus();
  } else {
    fullname.focus();
  }
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("feedback-show");
  popup.classList.remove("error");
});

form.addEventListener("submit", function(event) {
  fullname.classList.remove("error");
  email.classList.remove("error");
  if(!fullname.value || !email.value) {
    event.preventDefault();
    popup.classList.add("error");
    if(!fullname.value) fullname.classList.add("error");
    if(!email.value) email.classList.add("error");
  } else {
    localStorage.setItem("fullname", fullname.value);
  }
});
