function gerar() {
    // NUMERO
    var num = document.getElementById('num')
    // TABELA
    var tab = document.getElementById('sec')
    var c = 1
    tab.innerHTML = ''
    while (c <= 10) {
        var n = Number(num.value)
        var item = document.createElement('option')
        item.text = `${n} x ${c} = ${n*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        c += 1
    }
}
