// ===============================
// MOBILE NAVIGATION
// ===============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});


// ===============================
// CURSOR GLOW
// ===============================

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    glow.style.left = event.clientX + "px";
    glow.style.top = event.clientY + "px";

});


// ===============================
// AI EXPLORER
// ===============================

const aiData = {

    education: {
        icon: "🎓",
        title: "Personalized Learning",
        description:
            "AI can analyze student performance and recommend personalized learning resources, topics and study paths."
    },

    healthcare: {
        icon: "🏥",
        title: "Smart Healthcare",
        description:
            "Machine learning can analyze medical data and support healthcare professionals with data-driven insights."
    },

    business: {
        icon: "💼",
        title: "Business Intelligence",
        description:
            "AI can analyze customer behavior, sales data and market trends to support better business decisions."
    },

    agriculture: {
        icon: "🌱",
        title: "Smart Agriculture",
        description:
            "AI can help farmers monitor crops, predict agricultural conditions and improve resource management."
    },

    transport: {
        icon: "🚗",
        title: "Intelligent Transportation",
        description:
            "AI can analyze traffic patterns, optimize routes and support smarter transportation systems."
    }

};


const industryButtons =
    document.querySelectorAll(".industry");

const resultIcon =
    document.getElementById("resultIcon");

const resultTitle =
    document.getElementById("resultTitle");

const resultDescription =
    document.getElementById("resultDescription");


industryButtons.forEach(button => {

    button.addEventListener("click", () => {

        industryButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        const industry =
            button.dataset.industry;

        const data =
            aiData[industry];

        resultIcon.textContent =
            data.icon;

        resultTitle.textContent =
            data.title;

        resultDescription.textContent =
            data.description;

    });

});


// ===============================
// CONTACT FORM
// ===============================

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    formMessage.textContent =
        `Thank you ${name}! Your AI project inquiry has been received.`;

    contactForm.reset();

});


// ===============================
// CURRENT YEAR
// ===============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
    document.querySelectorAll(
        ".solution-card, .process-item, .about-grid, .explorer"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("revealed");

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {
    observer.observe(element);
});


// ===============================
// HERO ORB PARALLAX
// ===============================

const orb =
    document.querySelector(".orb-container");

document.addEventListener("mousemove", event => {

    if (window.innerWidth < 800) return;

    const x =
        (event.clientX / window.innerWidth - 0.5) * 20;

    const y =
        (event.clientY / window.innerHeight - 0.5) * 20;

    orb.style.transform =
        `translate(${x}px, ${y}px)`;

});