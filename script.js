// Inicio função carrossel de imagens
let contador = 1;
let input = document.getElementsByClassName('input')

let intervalo = setInterval( function(){
    document.getElementById('slide' + contador).checked = true;
    contador++;

    if(contador > 4 ) {
        contador = 1;
    }
}, 4000 );

document.addEventListener("click", e => {
    el = e .target

    if(el.classList.contains('input')){
        let num = (el.id.slice(-1))
        contador = num
    }
})

//Fim função carrossel de imagens

//Função para menu responsivo
function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let bloco1 = document.getElementById('bloco1')

    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        //bloco1.style.marginTop = '35px'
    } else {
        menuMobile.classList.add('open');
        //bloco1.style.marginTop = '270px'
    }
}