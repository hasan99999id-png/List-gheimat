// ===============================
// دکمه بازگشت به بالا
// ===============================

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===============================
// منوی موبایل
// ===============================

const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    if (nav.style.display === "flex") {

        nav.style.display = "none";

    } else {

        nav.style.display = "flex";

        nav.style.flexDirection = "column";

        nav.style.position = "absolute";

        nav.style.top = "70px";

        nav.style.right = "0";

        nav.style.width = "100%";

        nav.style.background = "#d50000";

        nav.style.padding = "20px";

        nav.style.gap = "15px";

    }

});

// ===============================
// سال فوتر
// ===============================

const footer = document.querySelector("footer div");

if (footer) {

    footer.innerHTML =
        "© " + new Date().getFullYear() +
        " تمامی حقوق محفوظ است.";

}

// ===============================
// افکت نمایش کارت‌ها
// ===============================

function animateCards() {

    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {

        card.style.opacity = "0";

        card.style.transform = "translateY(30px)";

        setTimeout(() => {

            card.style.transition = ".5s";

            card.style.opacity = "1";

            card.style.transform = "translateY(0)";

        }, index * 100);

    });

}
