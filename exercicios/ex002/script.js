function iniciar() {
    // DADOS
    var ini = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('passo')
    var lab = document.getElementById('lab')
    // VERIFICADORES E LOOPING
    if (ini.value.lenght == 0 || fim.value.lenght == 0) {
        lab.innerHTML = 'Impossível contar!'
    } else if (pas.value.lenght == 0) {
        pas = 1
    } else {
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        lab.innerHTML = 'Contando: '
        for (i; i<=f; i+=p) {
            lab.innerHTML += `${i} &#128073`
        }
        lab.innerHTML += '&#127937'
    }
}
