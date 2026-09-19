/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


/* =========================================
   CONTINUE LEARNING BUTTON
========================================= */

const continueBtn = document.getElementById("continueBtn");

continueBtn.addEventListener("click", function () {

    document.getElementById("courses").scrollIntoView({
        behavior: "smooth"
    });

});


/* =========================================
   NAVIGATION ACTIVE LINK
========================================= */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* =========================================
   COURSE BUTTONS
========================================= */

const courseButtons = document.querySelectorAll(".course-btn");

courseButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert("Course opened! Continue learning 🚀");

    });

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    alert(
        "Thank you, " +
        name +
        "! Your message has been submitted successfully."
    );

    contactForm.reset();

});