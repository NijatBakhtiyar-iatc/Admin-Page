import { db, set, ref, onValue, push } from "./firebase.js";

// create database branc
var branch = ref(db, `/Login`);

// add Login Info to The branch
set(branch, {
  email: "test@gmail.com",
  password: "test123",
});

$(".loginAuth").css("display", "flex");


// html page input infos
var emailVal = $(".loginAuth #email-val");
var passVal = $(".loginAuth #pass-val");

// in page load, to do input values to zero
emailVal.val("");
passVal.val("");

var loginArr = [];

var storageLogin = localStorage.getItem("Login");

// if storage has login info
if (storageLogin != null) {
  var storageLoginArr = storageLogin.split(",");

  $("h1").css("display", "block");
  $(".loginAuth").css("display", "none");
}

// if storage is null
else {
  $(".loginAuth form").on("submit", function (e) {
    e.preventDefault();

    onValue(branch, function (snap) {
      var serverData = snap.val();
      for (let value of Object.entries(serverData)) {
        loginArr.push(value[1]);
      }
    });

    if (emailVal.val() === loginArr[0] && passVal.val() === loginArr[1]) {
      $("h1").css("display", "block");
      $(".loginAuth").css("display", "none");
      localStorage.setItem("Login", [emailVal.val(), passVal.val()]);
    } else {
      $(".loginAuth").css("display", "flex");
      $(".wrongLogin p").css("display", "block");
    }

    emailVal.val("");
    passVal.val("");
  });
}

// Show Password
$(".input-pass label").on("click", function () {
  if (passVal.attr("type") === "password") {
    passVal.attr("type", "text");
  } else {
    passVal.attr("type", "password");
  }
});
