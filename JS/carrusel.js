document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel-container");
    let index = 0;

    function moverCarrusel() {
        index++;
        if (index > 3) {
            index = 0;
        }
        carousel.style.transform = `translateX(-${index * 25}%)`;
    }

    setInterval(moverCarrusel, 3000);
});
