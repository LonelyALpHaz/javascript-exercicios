var real = new Date()
var hora = real.getHours()
var min = real.getMinutes()

var back = window.document.getElementById('bg')
var subtitle = window.document.getElementById('subtitle')
var imagem = window.document.getElementById('img')

subtitle.innerText = `Agora são exatamente ${hora}:${min}`

function change_img(imagem) {
    if (hora > 6 && hora < 12) {
        imagem.src = 'assets/dia.jpg'
    } else if (hora > 12 && hora < 18) {
        imagem.src = 'assets/tarde.jpg'
    } else {
        imagem.src = 'assets/noite.jpg'
    }
}

change_img(imagem);
