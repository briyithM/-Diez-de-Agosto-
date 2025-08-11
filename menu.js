document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const submenuLinks = document.querySelectorAll(".submenu > a");

    // Abrir/cerrar menú principal
    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    submenuLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            if (window.innerWidth <= 768) {
                e.preventDefault(); 
                link.parentElement.classList.toggle("open");
            }
        });
    });
});
