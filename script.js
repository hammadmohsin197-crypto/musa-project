// ===============================
// Floating Hearts Generator
// ===============================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = window.innerHeight + "px";
    heart.style.fontSize = (20 + Math.random() * 20) + "px";
    heart.style.pointerEvents = "none";
    heart.style.zIndex = "9999";
    heart.style.transition = "all 6s linear";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.style.transform = `translateY(-${window.innerHeight + 300}px) rotate(${360 + Math.random()*360}deg)`;
        heart.style.opacity = "0";
    }, 100);

    setTimeout(() => {
        heart.remove();
    }, 6200);
}

setInterval(createHeart, 700);


// ===============================
// Start Button
// ===============================

function startJourney() {

    document.body.style.opacity = "0";

    setTimeout(() => {

        window.location.href = "letter.html";

    }, 500);

}


// ===============================
// Fade Effect
// ===============================

window.onload = function () {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity .8s";

        document.body.style.opacity = "1";

    }, 100);

};


// ===============================
// Moving NO Button
// ===============================

function moveButton() {

    const btn = document.getElementById("noBtn");

    if (!btn) return;

    const maxX = window.innerWidth - btn.offsetWidth - 20;
    const maxY = window.innerHeight - btn.offsetHeight - 20;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    btn.style.position = "fixed";
    btn.style.left = x + "px";
    btn.style.top = y + "px";

}


// ===============================
// Enter Key Support
// ===============================

document.addEventListener("keydown", function(e){

    if(e.key === "Enter"){

        const start = document.querySelector(".start-btn");

        if(start){

            start.click();

        }

    }

});


// ===============================
// Console Message ❤️
// ===============================

console.log("❤️ Welcome to the Sorry Website ❤️");