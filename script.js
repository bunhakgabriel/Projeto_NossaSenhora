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
