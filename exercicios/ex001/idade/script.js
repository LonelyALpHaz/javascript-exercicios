function analisar() {
    // DADOS ADICIONAIS
    var label = document.getElementById('label')
    var img = document.getElementById('img')
    var sec = document.getElementById('sec')
    // IDADE ANALISADA
    var ano_atual = new Date()
    var nasc = document.getElementById('nasc')
    var idade = ano_atual.getFullYear() - nasc.value
    // VERIFICADOR DE IDADE
    if (nasc.value.length == 0 || nasc.value > ano_atual.getFullYear()) {
        label.innerText = 'Por favor, preencha os campos adequadamente.'
    } else {
        var sexo = document.getElementsByName('sexrad')
        var gen = ''
        if (sexo[0].checked) {
            gen = 'HOMEM'
            if (idade >= 0 && idade <= 13) {
                // CRIANÇA
                sec.style.height = '650px'
                img.style.display = 'block'
                img.src = 'assets/menino.jpg'
            } else if (idade > 13 && idade <= 18) {
                // JOVEM
                sec.style.height = '650px'
                img.style.display = 'block'
                img.src = 'assets/hjovem.jpg'
            } else if (idade > 18 && idade < 60) {
                // ADULTO
                sec.style.height = '650px'
                img.style.display = 'block'
                img.src = 'assets/hadulto.jpg'
            } else if (idade > 60) {
                // IDOSO
                sec.style.height = '650px'
                img.style.display = 'block'
                img.src = 'assets/hvelho.jpg'
            }
        } else {
            gen = 'MULHER'
            if (idade >= 0 && idade <= 13) {
                // CRIANÇA
                sec.style.height = '650px'
                img.style.display = 'block'
                img.src = 'assets/menina.jpg'
            } else if (idade > 13 && idade <= 18) {
                // JOVEM
                sec.style.height = '650px'
                img.style.display = 'block'
                img.src = 'assets/mjovem.jpg'
            } else if (idade > 18 && idade < 60) {
                // ADULTA
                sec.style.height = '650px'
                img.style.display = 'block'
                img.src = 'assets/madulta.jpg'
            } else if (idade > 60) {
                // IDOSA
                sec.style.height = '650px'
                img.style.display = 'block'
                img.src = 'assets/mvelha.jpg'
            }
        }
    } 
    label.innerText = `De acordo com a análise você é ${gen} e tem ${idade} anos.`
}
