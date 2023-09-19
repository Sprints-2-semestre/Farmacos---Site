html = document.querySelector('html')


function ativarMenu() {
    const nav = document.getElementById('menu-ativo-Id');
    nav.style.display = 'flex';
    nav.style.flexDirection = 'column';
    document.querySelector('html').style.overflowY = 'hidden';
};

function desativarMenu() {
    const fecharNav = document.getElementById('menu-ativo-Id');
    fecharNav.style.display = 'none';
    document.querySelector('html').style.overflowY = 'auto';
};



// function ativarMenu() {
//     var nav = document.getElementById('btn-menu');
//     nav.classList.toggle('menu-ativo');

// };

// btnMenu.addEventListener('click', toggleMenu);