function tocaSom(seletorAudio) {
    const selector = document.querySelector(seletorAudio);

    if (selector === null) {
        alert('yameroooo')
    }
    else if (selector != null && selector.localName === "audio"){

        selector.play();
    }
    else {
        console.log('deu ruim');
    }

}

const lista = document.querySelectorAll('.tecla');


for (let cont = 0; cont < lista.length; cont++) {

    const tecla = lista[cont];
    const instrumento = tecla.classList[1]; // nome da tecla
    const idAudio = `#som_${instrumento}`; //texto dinamico , template


    tecla.onclick = function () {
        tocaSom(idAudio)
    }

    tecla.onkeydown = function (evento) {

        console.log(evento.code ==='Space')
        if (evento.code ==='Space' || evento.code ==='Enter') {
            tecla.classList.add('ativa')
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }

}
