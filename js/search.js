// ===============================
// جستجوی لحظه‌ای محصولات
// ===============================

const searchInput = document.getElementById("search");

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const value = this.value
            .trim()
            .toLowerCase();

        // اگر چیزی وارد نشده باشد
        if (value === "") {

            renderProducts(products);

            document.getElementById("status").innerHTML =
                products.length + " کالا یافت شد.";

            return;
        }

        // فیلتر محصولات
        const result = products.filter(item => {

            const code = String(item.code).toLowerCase();

            const name = String(item.name).toLowerCase();

            return (
                code.includes(value) ||
                name.includes(value)
            );

        });

        // نمایش نتایج
        renderProducts(result);

        if (result.length === 0) {

            document.getElementById("status").innerHTML =
                "هیچ کالایی پیدا نشد.";

        } else {

            document.getElementById("status").innerHTML =
                result.length + " کالا یافت شد.";

        }

    });

}
