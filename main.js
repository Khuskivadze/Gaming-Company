let menuBtn = document.querySelector('.menu-bar')
document.querySelector('#bi-list').onclick  = () => {
    menuBtn.classList.toggle('active')
}
document.querySelector('#bi-x-square').onclick  = () => {
    menuBtn.classList.remove('active')
}