// const express = require('express');

// function submitForm(event) {
//   event.preventDefault();

//   const email = document.getElementById("email").value;
//   const username = document.getElementById("username").value;
//   const password = document.getElementById("password").value;

//   const data = { email, username, password };

//   fetch("/register", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }

const express = require('express');
const userController = require('./server/controllers/userController');

const router = express.Router();

router.post('/register', userController.register);