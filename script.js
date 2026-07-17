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

    searchInput.addEventListener("keyup",()=>{

        const value = searchInput.value.toLowerCase();

        const filtered = data.filter(item=>

            item.test.toLowerCase().includes(value)

        );

        render(filtered);

    });

}
console.log("Script Loaded");

document.getElementById("searchInput").addEventListener("input", function () {
    console.log("Typing:", this.value);
});
loadTestPrices();
