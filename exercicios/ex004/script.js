// ARRAY
var a = []

function add() {
    // NÚMEROS
    var n = document.getElementById('num').value
    var num = Number(n)
    // TABELA
    var seclab = document.getElementById('seclab')
    // VERIFICADORES
    if (num == '') {
        window.alert('Adicione valores antes de finalizar.')
    } else if (num < 1 || num > 100) {
        window.alert('Insira valores válidos.')
    } else if (a.includes(num)) {
        window.alert('Valor inválido ou já localizado na lista.')
    } else {
        // ADICIONANDO NUM NO ARRAY
        a.push(num)
        seclab.innerText += `O valor ${num} foi adicionado.\n`
    }
}

function end() {
    if (a.length == 0) {
        window.alert('Adicione valores antes de finaliar.')
    } else {
        // ADICIONANDO ELEMENTOS DINAMICAMENTE
        var sect = document.getElementById('section')
        sect.style.height = '450px'
        var lab = document.createElement('h3')
        // TOTAL
        var textNode = document.createTextNode(`Foram adicionados ${a.length} valores.\n`)
        lab.appendChild(textNode)
        sect.appendChild(lab)
        // MAIOR
        var textNode = document.createTextNode(`O maior valor digitado foi ${Math.max(...a)}`)
        lab.appendChild(document.createElement('br'))
        lab.appendChild(textNode)
        sect.appendChild(lab)
        // MENOR
        var textNode = document.createTextNode(`O menor valor digitado foi ${Math.min(...a)}`)
        lab.appendChild(document.createElement('br'))
        lab.appendChild(textNode)
        sect.appendChild(lab)
        // SOMA
        var soma = 0
        for (var c in a) {
            soma += a[c]
            console.log(soma)
        }
        var textNode = document.createTextNode(`A soma de todos os valores é igual a ${soma}`)
        lab.appendChild(document.createElement('br'))
        lab.appendChild(textNode)
        sect.appendChild(lab)
        // MÉDIA
        var media = soma / a.length
        var textNode = document.createTextNode(`A média de todos os valores é igual a ${media}`)
        lab.appendChild(document.createElement('br'))
        lab.appendChild(textNode)
        sect.appendChild(lab)
    }
}
