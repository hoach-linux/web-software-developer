// Меню бургера
const MENU = document.querySelector('.menu')
if (MENU) {
    const menuBody = document.querySelector('.menu-body')
    const allBodies = document.querySelector('.all-bodies')

    MENU.addEventListener('click', function () {
        menuBody.classList.toggle('active')
        allBodies.classList.toggle('active');
        document.body.classList.toggle('active')
    })
}