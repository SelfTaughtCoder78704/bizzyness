let accountHeader = document.querySelector('#navbarMem');
let dropdown = document.querySelector('.nav-menu');

accountHeader.addEventListener('mouseenter', function(){
    dropdown.style.display = 'grid'
})

accountHeader.addEventListener('mouseleave', function(){
    dropdown.style.display = 'none'
})

