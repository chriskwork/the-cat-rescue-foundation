// Elementos
const menus = document.querySelectorAll(".has-drop-menu");

menus.forEach((menu) => {
    menu.addEventListener("click", (e) => {
        const subMenu = menu.querySelector(".drop-menu");
        subMenu.classList.toggle("show");
    });
});
