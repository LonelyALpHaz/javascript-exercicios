var real = new Date()
var hora = real.getHours()
var min = real.getMinutes()

if (hora > 6 && hora < 12) {
    console.log(`Agora são exatamente ${hora}:${min}. Bom dia!`)
} else if (hora > 12 && hora <= 18) {
    console.log(`Agora são exatamente ${hora}:${min}. Boa tarde!`)
} else if (hora < 6) {
    console.log(`Agora são exatamente ${hora}:${min}. Boa madrugada!`)
} else {
    console.log(`Agora são exatamente ${hora}:${min}. Boa noite!`)
}
