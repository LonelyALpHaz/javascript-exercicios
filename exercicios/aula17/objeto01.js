var amigo = {nome: 'José', sexo: 'M', peso: 85.4, engordar(p=0){this.peso += p}}

amigo.engordar(2)
console.log(`${amigo.nome} é do sexo ${amigo.sexo} e pesa ${amigo.peso} kg`)