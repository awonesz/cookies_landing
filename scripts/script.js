//SECTION - smooth-transition

document.getElementById("main-action-button").onclick = () => {
    document.getElementById("products-id").scrollIntoView({behavior: "smooth"});
}

const links = document.querySelectorAll(".menu-item > a");
for (let i = 0; i < links.length; i++) {
    links[i].onclick = () => {
        document.getElementById(links[i].getAttribute("data-link")).scrollIntoView({behavior: "smooth"});
    }
}

const buttons = document.querySelectorAll(".products-item .button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
        document.getElementById(("order-id")).scrollIntoView({behavior: "smooth"});
    }
}

//SECTION - smooth-transition

