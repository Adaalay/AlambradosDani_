document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;
    const intervalTime = 3000;

    function showNextSlide() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length;
        carouselItems[currentIndex].classList.add('active');
    }

    if (carouselItems.length > 0) {
        setInterval(showNextSlide, intervalTime);
    }
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
    const inputs = this.querySelectorAll("input[required], textarea[required], select[required]");
    let valid = true;

    inputs.forEach(function (i) {
        if (!i.value.trim()) {
            valid = false;
            i.style.border = "2px solid red";
        } else {
            i.style.border = "";
        }
    });

    if (!valid) {
        e.preventDefault();
        alert("Por favor completa todos los campos obligatorios.");
    }
});

