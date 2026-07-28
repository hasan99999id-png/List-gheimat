// ===============================
// Google Sheets
// ===============================

const SHEET_ID = "1OImD12FCHFiDxzN-h8lBWox2gM2jCmaAntPI_NjfWsg";
const GID = "0";

const URL =
`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${GID}`;

let products = [];

// دریافت اطلاعات
async function loadProducts() {

    const status = document.getElementById("status");
    const loader = document.getElementById("loader");

    try {

        status.innerHTML = "در حال دریافت اطلاعات...";

        const response = await fetch(URL);

        const text = await response.text();

        const json = JSON.parse(text.substring(47).slice(0, -2));

        const rows = json.table.rows;

        products = [];

        rows.forEach(row => {

            if (!row.c) return;

            products.push({

                code: row.c[0] ? row.c[0].v : "",

                name: row.c[1] ? row.c[1].v : "",

                price: row.c[2] ? row.c[2].v : ""

            });

        });

        renderProducts(products);

        status.innerHTML = products.length + " کالا";

        if (loader)
            loader.style.display = "none";

        if (typeof animateCards === "function")
            animateCards();

    }

    catch (err) {

        console.error(err);

        status.innerHTML = "خطا در دریافت اطلاعات";

        if (loader)
            loader.style.display = "none";

    }

}

// نمایش کالاها
function renderProducts(list) {

    const box = document.getElementById("products");

    if (!box) return;

    box.innerHTML = "";

    list.forEach(item => {

        box.innerHTML += `
<div class="card">

    <img src="https://placehold.co/400x250?text=Auto+Part">

    <div class="card-body">

        <h3>${item.name}</h3>

        <div class="code">
            کد کالا: ${item.code}
        </div>

        <div class="price">
            ${Number(item.price || 0).toLocaleString("fa-IR")} تومان
        </div>

        <a href="#" class="btn">
            مشاهده
        </a>

    </div>

</div>
`;

    });

}

// شروع
document.addEventListener("DOMContentLoaded", loadProducts);
