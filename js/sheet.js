// =========================
// تنظیمات
// =========================

// فقط این را تغییر بده
const SHEET_ID = "1OImD12FCHFiDxzN-h8lBWox2gM2jCmaAntPI_NjfWsg";

// شماره برگه
const GID = "0";

// خودکار لینک ساخته می‌شود
const SHEET_URL =
`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&gid=${GID}`;

let products = [];

async function loadProducts(){

    try{

        document.getElementById("status").innerHTML="در حال دریافت اطلاعات...";

        const res = await fetch(SHEET_URL);

        const text = await res.text();

        const json = JSON.parse(text.substr(47).slice(0,-2));

        const rows = json.table.rows;

        products=[];

        rows.forEach(row=>{

            if(!row.c) return;

            products.push({

                code:row.c[0]?.v || "",

                name:row.c[1]?.v || "",

                price:row.c[2]?.v || ""

            });

        });

        renderProducts(products);

        document.getElementById("status").innerHTML=
        products.length+" کالا";

        hideLoader();

    }

    catch(error){

        console.log(error);

        document.getElementById("status").innerHTML=
        "خطا در اتصال به Google Sheets";

        hideLoader();

    }

}

function renderProducts(list){

    const box=document.getElementById("products");

    box.innerHTML="";

    list.forEach(item=>{

        box.innerHTML+=`

<div class="card">

<img src="https://placehold.co/400x250?text=Auto+Part">

<div class="card-body">

<h3>${item.name}</h3>

<div class="code">

کد کالا :
${item.code}

</div>

<div class="price">

${Number(item.price).toLocaleString("fa-IR")} تومان

</div>

<a class="btn" href="#">

مشاهده

</a>

</div>

</div>

`;

    });

}

function hideLoader(){

    const loader=document.getElementById("loader");

    if(loader){

        loader.style.display="none";

    }

}

window.onload=()=>{

    loadProducts();

};
