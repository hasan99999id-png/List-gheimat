// ===============================
// تنظیمات
// ===============================

// بعداً لینک Google Sheets را اینجا قرار بده
const SHEET_URL = "";

// آرایه محصولات
let products = [];

// ===============================
// دریافت اطلاعات از شیت
// ===============================

async function loadProducts() {

    if (SHEET_URL === "") {

        document.getElementById("status").innerHTML =
        "لینک Google Sheet تنظیم نشده است.";

        hideLoader();

        return;

    }

    try {

        const response = await fetch(SHEET_URL);

        const text = await response.text();

        const json = JSON.parse(
            text.substring(47).slice(0, -2)
        );

        const rows = json.table.rows;

        products = [];

        rows.forEach(row => {

            if (!row.c) return;

            products.push({

                code: row.c[0]?.v ?? "",

                name: row.c[1]?.v ?? "",

                price: row.c[2]?.v ?? ""

            });

        });

        renderProducts(products);

        document.getElementById("status").innerHTML =
        products.length + " کالا یافت شد.";

        hideLoader();

    }

    catch (err) {

        console.log(err);

        document.getElementById("status").innerHTML =
        "خطا در دریافت اطلاعات.";

        hideLoader();

    }

}

// ===============================
// نمایش محصولات
// ===============================

function renderProducts(list){

    const container =
    document.getElementById("products");

    container.innerHTML="";

    list.forEach(item=>{

        container.innerHTML += `

<div class="card">

<img
src="https://via.placeholder.com/400x250?text=Auto+Parts"
alt="${item.name}">

<div class="card-body">

<h3>${item.name}</h3>

<div class="code">

کد کالا : ${item.code}

</div>

<div class="price">

${Number(item.price).toLocaleString("fa-IR")} تومان

</div>

<a href="#" class="btn">

مشاهده

</a>

</div>

</div>

`;

    });

}

// ===============================
// مخفی کردن لودر
// ===============================

function hideLoader(){

    const loader =
    document.getElementById("loader");

    if(loader){

        loader.style.display="none";

    }

}

// ===============================
// شروع برنامه
// ===============================

window.onload=function(){

    loadProducts();

};
