function tocaSom(idElementAudio) {
    document.querySelector(idElementAudio).play();

}

const lista = document.querySelectorAll('.tecla');


for (let cont = 0; cont < lista.length; cont++) {

    const tecla = lista[cont];

    const instrumento = tecla.classList[1]; // nome da tecla

    const idAudio = `#som_${instrumento}`; //texto dinamico , template


    tecla.onclick = function () {
        tocaSom(idAudio)
    }


}
