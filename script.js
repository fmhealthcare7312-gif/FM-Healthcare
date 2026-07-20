// FM Healthcare Website

console.log("FM Healthcare Website Loaded");

document.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to FM Healthcare");
});
/* ===============================
   TEST PRICE LOADER
================================ */

async function loadTestPrices() {

    const response = await fetch("data/test-price.json");

    const data = await response.json();

    const tableBody = document.getElementById("tableBody");

    const searchInput = document.getElementById("searchInput");

    function render(list){

        tableBody.innerHTML="";

        list.forEach(item=>{

            tableBody.innerHTML += `
                <tr>
                    <td>${item.test}</td>
                    <td>${item.report}</td>
                    <td>₹${item.price}</td>
                </tr>
            `;

        });

    }

    render(data);

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase().trim();

    const filtered = data.filter(item => {

        if (!item || typeof item.test !== "string") {
            return false;
        }

        return item.test.toLowerCase().includes(value);

    });

    render(filtered);

});

}

loadTestPrices();
/*=========================================
MOBILE MENU V2
=========================================*/

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if(menuToggle && nav){

        menuToggle.addEventListener("click", function(){

            nav.classList.toggle("active");

        });

    }

});
/*=========================================
MENU OVERLAY
=========================================*/

const overlay = document.querySelector(".menu-overlay");

if(menuToggle && nav && overlay){

    menuToggle.addEventListener("click", function(){

        overlay.classList.toggle("active");

    });

    overlay.addEventListener("click", function(){

        nav.classList.remove("active");

        overlay.classList.remove("active");

    });

    document.querySelectorAll("nav a").forEach(link=>{

        link.addEventListener("click", function(){

            nav.classList.remove("active");

            overlay.classList.remove("active");

        });

    });

}
/* ==========================
   MOBILE MENU
========================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if(menuBtn && nav){

        menuBtn.addEventListener("click", function(){

            nav.classList.toggle("active");

        });

    }

});
