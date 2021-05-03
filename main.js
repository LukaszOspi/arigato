const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav-links");
const navLinks = document.querySelectorAll(".nav-links li");

function toggleNav() {
  // to toggle or click the navigation
  nav.classList.toggle("nav-active");
  // to sexyly animate the sliding in of menu items:
  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      // so that animation doesn't stop after we open menu for first time
      link.style.animation = "";
    } else {
      // navbar links come in with slight delay after one another and that's waht we need the index for
      link.style.animation = `navLinkFade 0.5s ease forwards ${
        index / 7 + 0.5
      }s`;
    }
  });
  burger.classList.toggle("menu-icon");
}

burger.addEventListener("click", toggleNav);
navLinks.forEach((link) => {
  link.addEventListener("click", toggleNav);
});

window.onscroll = function () {
  myFunction();
};

// Get the header
let header = document.querySelector("nav");

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

var Email = {
  send: function (a) {
    return new Promise(function (n, e) {
      (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
      var t = JSON.stringify(a);
      Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
        n(e);
      });
    });
  },
  ajaxPost: function (e, n, t) {
    var a = Email.createCORSRequest("POST", e);
    a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      (a.onload = function () {
        var e = a.responseText;
        null != t && t(e);
      }),
      a.send(n);
  },
  ajax: function (e, n) {
    var t = Email.createCORSRequest("GET", e);
    (t.onload = function () {
      var e = t.responseText;
      null != n && n(e);
    }),
      t.send();
  },
  createCORSRequest: function (e, n) {
    var t = new XMLHttpRequest();
    return (
      "withCredentials" in t
        ? t.open(e, n, !0)
        : "undefined" != typeof XDomainRequest
        ? (t = new XDomainRequest()).open(e, n)
        : (t = null),
      t
    );
  },
};

const message = "Your email has been successfully sent!";
function sendEmail() {
  alert(message);
  Email.send({
    SecureToken: "38e0ba7f-75eb-48d1-95a5-bac6682e8258",
    From: "studiosach.mail@gmail.com",
    To: "contactstudiosach@gmail.com",
    Subject: "Studiosach.art contact form",
    Body:
      document.querySelector("#mail-content").value +
      ` Customer Email: ${document.querySelector("#mail").value}`,
  });
  // .then((message) => alert(message));
}
