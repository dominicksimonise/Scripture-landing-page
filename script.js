// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Function to generate a random color
    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Function to change the background color on hover
    function addHoverEffect(element) {
        element.addEventListener("mouseenter", function () {
            element.style.backgroundColor = getRandomColor();
        });

        element.addEventListener("mouseleave", function () {
            element.style.backgroundColor = "";
        });
    }

    // Add hover effect to all mood sections
    const moodSections = document.querySelectorAll(".mood-section");
    moodSections.forEach(addHoverEffect);
});
