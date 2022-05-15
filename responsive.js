burger = document.querySelector('.burger')
navlist = document.querySelector('.navlist')
header = document.querySelector('.header')
burger.addEventListener('click', ()=> {
    navlist.classList.toggle('v_class_resp');
    header.classList.toggle('h_class_resp');
})
