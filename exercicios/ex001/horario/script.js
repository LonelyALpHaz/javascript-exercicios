var real = new Date()
var hora = real.getHours()
var min = real.getMinutes().toString().padStart(2, '0')

var subtitle = window.document.getElementById('subtitle')
var imagem = window.document.getElementById('img')

subtitle.innerText = `Agora são exatamente ${hora}:${min}`

function change_img(imagem) {
    if (hora > 6 && hora < 12) {
        imagem.src = 'assets/dia.jpg'
        document.body.style.backgroundColor = 'lightskyblue'
    } else if (hora > 12 && hora < 18) {
        imagem.src = 'assets/tarde.jpg'
        document.body.style.backgroundColor = 'coral'
    } else {
        imagem.src = 'assets/noite.jpg'
        document.body.style.backgroundColor = 'midnightblue'
    }
}

change_img(imagem);
