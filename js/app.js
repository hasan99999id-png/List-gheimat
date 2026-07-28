// ===============================
// بازگشت به بالا
// ===============================

const topButton = document.getElementById("topButton");

if (topButton) {

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

}


// ===============================
// منوی موبایل
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("open");

    });

}


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
// انیمیشن کارت‌ها
// ===============================

function animateCards(){

    const cards = document.querySelectorAll(".card");

    cards.forEach((card,index)=>{

        card.style.opacity = "0";

        setTimeout(()=>{

            card.style.transition = "0.4s";

            card.style.opacity = "1";

        }, index * 80);

    });

}
