// elements
const inputDiv = document.querySelectorAll(".input-div");
const form = document.getElementById("form");
const btnSubmit = document.getElementById("btn-submit");

const fNameEl = document.getElementById("fname");
const lNameEl = document.getElementById("lname");
const emailEl = document.getElementById("mail");
const passwordEl = document.getElementById("pw");
const errormsgEl = document.querySelectorAll(".err-msg");

// global variables
let firstName, lastName, email, password;

// functions
const checkValidity = () => {
  firstName = fNameEl.value.trim();
  lastName = lNameEl.value.trim();
  email = emailEl.value.trim();
  password = passwordEl.value.trim();

  // regax for email
  const regaxEl = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (firstName === "") {
    fNameEl.classList.add("error-bg");
  } else {
    fNameEl.classList.remove("error-bg");
  }
  if (lastName === "") {
    lNameEl.classList.add("error-bg");
  } else {
    lNameEl.classList.remove("error-bg");
  }
  if (email.match(regaxEl)) {
    passwordEl.classList.remove("error-bg");
  } else {
    emailEl.classList.add("error-bg");
  }
  if (password === "") {
    passwordEl.classList.add("error-bg");
  } else {
    passwordEl.classList.remove("error-bg");
  }
};

// event listneres
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  checkValidity();
});

// initial setting
