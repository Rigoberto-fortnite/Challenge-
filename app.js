const button = document.getElementById("resizeBtn");
const image = document.getElementById("imagie");

let isLarge = false;

button.addEventListener("click", () => {
    if (isLarge) {
        image.style.width = "300px";
        image.style.height = "auto";
    } else {
        image.style.width = "500px";
        image.style.height = "400px";
    }
    isLarge = !isLarge;
});