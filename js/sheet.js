const SHEET_ID = "1OImD12FCHFiDxzN-h8lBWox2gM2jCmaAntPI_NjfWsg";
const GID = "0";

const URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?gid=${GID}`;

let products = [];

fetch(URL)
  .then(res => res.text())
  .then(rep => {

    const data = JSON.parse(rep.substring(47).slice(0, -2));

    const rows = data.table.rows;

    rows.forEach(r => {

      products.push({
        code: r.c[0] ? r.c[0].v : "",
        name: r.c[1] ? r.c[1].v : "",
        price: r.c[2] ? r.c[2].v : ""
      });

    });

    renderProducts(products);

    document.getElementById("status").innerHTML =
      products.length + " کالا";

    document.getElementById("loader").style.display = "none";

  })
  .catch(err => {

    console.log(err);

    document.getElementById("status").innerHTML = err;

  });
