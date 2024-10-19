//SECTION - validation

const product = document.getElementById("getCookies");
const name = document.getElementById("getName");
const phone = document.getElementById("getPhone");
document.getElementById("order-action").onclick = () => {
    let hasError = false;
    [product, name, phone].forEach(item => {
        if (!item.value) {
            item.style.borderColor = "red";
            hasError = true;
        } else {
            item.style.borderColor = "";
        }
    });

    if (!hasError) {
        [product, name, phone].forEach(item => {
            item.value = "";
        });
        alert("Спасибо за заказ! Ждите :)");
    }

}


//SECTION - validation