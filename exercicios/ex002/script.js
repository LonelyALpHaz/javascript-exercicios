function iniciar() {
    // DADOS
    var ini = document.getElementById('ini')
    var fim = document.getElementById('fim')
    var pas = document.getElementById('pas')
    // LABEL
    var lab = document.getElementById('label')
    console.log(ini.value, fim.value, pas.value)
    if (ini.value == 0 || fim.value == 0) {
        lab.innerText = 'Por favor, utilize valor válidos.'
    }
}