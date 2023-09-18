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
    } else {
        menuMobile.classList.add('open');
    }
}
//Fim função para menu responsivo

//Função faq
const mostrarResposta = () => {
    const identElementClick = el.dataset.ident

    const identElementResp = 
        document.querySelector(`[data-paragraph="${identElementClick}"]`)

    const arrayIdentElementResp = 
        Array.from(document.querySelectorAll('.selectJs'))

    identElementResp.classList.toggle('action')

}

document.addEventListener('click', e => {
    el = e.target

    if(el.classList.contains('btn') || 
       el.classList.contains('span') || 
       el.classList.contains('fas')){
        mostrarResposta()
       }

})

//Fim função faq