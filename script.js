// Mobile Menu Toggle
function toggleMenu() {
    const nav = document.querySelector("nav");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
}

// Typing Effect
const typedText = ["Student", "Full-Stack Developer", "Coder"];
let i = 0, j = 0;
let currentText = "";
let isDeleting = false;
const speed = 150;
const typedElement = document.getElementById("typed");

function type() {
    if (!typedElement) return;

    if (!isDeleting && j <= typedText[i].length) {
        currentText = typedText[i].substring(0, j++);
        typedElement.textContent = currentText;
        setTimeout(type, speed);
    } else if (isDeleting && j >= 0) {
        currentText = typedText[i].substring(0, j--);
        typedElement.textContent = currentText;
        setTimeout(type, speed / 2);
    } else if (!isDeleting && j > typedText[i].length) {
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && j < 0) {
        isDeleting = false;
        i = (i + 1) % typedText.length;
        setTimeout(type, 200);
    }
}

type();
