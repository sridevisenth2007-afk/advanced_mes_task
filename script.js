/* =========================================
   MOBILE MENU
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {

    if (navLinks.style.display === "flex") {

        navLinks.style.display = "none";

    } else {

        navLinks.style.display = "flex";

        navLinks.style.flexDirection = "column";

        navLinks.style.position = "absolute";

        navLinks.style.top = "70px";

        navLinks.style.left = "0";

        navLinks.style.width = "100%";

        navLinks.style.padding = "25px";

        navLinks.style.background =
            "var(--card-color)";

        navLinks.style.borderBottom =
            "1px solid var(--border-color)";
    }

});


/* =========================================
   CLOSE MOBILE MENU
========================================= */

const navItems =
    document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        if (window.innerWidth < 850) {

            navLinks.style.display = "none";

        }

    });

});


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeBtn =
    document.getElementById("themeBtn");


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeBtn.textContent = "☀️";

} else {

    themeBtn.textContent = "🌙";

}


themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark");


    if (document.body.classList.contains("dark")) {

        localStorage.setItem("theme", "dark");

        themeBtn.textContent = "☀️";

    } else {

        localStorage.setItem("theme", "light");

        themeBtn.textContent = "🌙";

    }

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");

const sendBtn =
    document.getElementById("sendBtn");

const formStatus =
    document.getElementById("formStatus");


contactForm.addEventListener("submit", async function (event) {

    event.preventDefault();


    sendBtn.disabled = true;

    sendBtn.textContent = "Sending...";

    formStatus.textContent = "";


    const formData =
        new FormData(contactForm);


    try {

        const response = await fetch(
            contactForm.action,
            {
                method: "POST",

                body: formData,

                headers: {
                    "Accept": "application/json"
                }
            }
        );


        if (response.ok) {

            formStatus.textContent =
                "✓ Message sent successfully!";

            formStatus.style.color =
                "#16a34a";

            contactForm.reset();

        } else {

            formStatus.textContent =
                "✕ Something went wrong. Please try again.";

            formStatus.style.color =
                "#dc2626";
        }

    } catch (error) {

        formStatus.textContent =
            "✕ Unable to send message. Check your internet connection.";

        formStatus.style.color =
            "#dc2626";
    }


    sendBtn.disabled = false;

    sendBtn.textContent = "Send Message";

});

