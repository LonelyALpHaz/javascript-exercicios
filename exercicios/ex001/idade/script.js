var atual = new Date()
var ano = atual.getFullYear()
var img = window.document.getElementById('img')

function analisar() {
    var checkboxes = document.getElementsByName('sexo')
    var label = document.getElementById('label')
    var nasc = document.getElementById('nasc')
    var idade = ano - nasc.value
    var sexoSelecionado = [];
    console.log(ano)
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            sexoSelecionado.push(checkboxes[i].value);
            if (sexoSelecionado.toString() == 'HOMEM' && idade < 13) {
                label.innerText = `De acordo com nossas análise você é um ${sexoSelecionado} de ${idade} anos.`
                img.src = 'assets/menino.jpg'
            } else if (sexoSelecionado.toString() == 'HOMEM' && idade > 13 && idade < 18) {
                label.innerText = `De acordo com nossas análise você é um ${sexoSelecionado} de ${idade} anos.`
                img.src = 'assets/hjovem.jpg'
            } else if (sexoSelecionado.toString() == 'HOMEM' && idade > 18 && idade < 60) {
                label.innerText = `De acordo com nossas análise você é um ${sexoSelecionado} de ${idade} anos.`
                img.src = 'assets/hadulto.jpg'
            } else if (sexoSelecionado.toString() == 'HOMEM' && idade > 60) {
                label.innerText = `De acordo com nossas análise você é um ${sexoSelecionado} de ${idade} anos.`
                img.src = 'assets/hvelho.jpg'
            } else if (sexoSelecionado.toString() == 'MULHER' && idade < 13) {
                label.innerText = `De acordo com nossas análise você é um ${sexoSelecionado} de ${idade} anos.`
                img.src = 'assets/menina.jpg'
            } else if (sexoSelecionado.toString() == 'MULHER' && idade > 13 && idade < 18) {
                label.innerText = `De acordo com nossas análise você é um ${sexoSelecionado} de ${idade} anos.`
                img.src = 'assets/mjovem.jpg'
            } else if (sexoSelecionado.toString() == 'MULHER' && idade > 18 && idade < 60) {
                label.innerText = `De acordo com nossas análise você é um ${sexoSelecionado} de ${idade} anos.`
                img.src = 'assets/madulta.jpg'
            } else if (sexoSelecionado.toString() == 'MULHER' && idade > 60) {
                label.innerText = `De acordo com nossas análise você é um ${sexoSelecionado} de ${idade} anos.`
                img.src = 'assets/mvelha.jpg'
            } else if (sexoSelecionado.toString() == 'HOMEM' && sexoSelecionado.toString() == 'MULHER') {
                label.innerText = `Por favor, selecione apenas um sexo.`
            }
        }
    }
}