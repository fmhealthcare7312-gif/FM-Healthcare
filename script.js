// FM Healthcare Website

console.log("FM Healthcare Website Loaded");

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Welcome Message
window.onload = function () {
    console.log("Welcome to FM Healthcare");
};
