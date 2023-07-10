/*
// UTILIZANDO RETURN

function parimp(n) {
    if (n%2==0) {
        return `O número ${n} é PAR!`
    } else {
        return `O número ${n} é ÍMPAR`
    }
}

console.log(parimp(5))
*/

/*
// DEFININDO PARÂMETROS PADRÕES

function soma(n1=0, n2=0) {
    return n1 + n2
}

console.log(soma(2))

/*
// VARIÁVEL QUE RECEBE UMA FUNÇÃO

var v = function(x) {
    return x*2
}

console.log(v(5))
*/

/*
// FUNÇÃO DE FATORIAL

function fat(n) {
    var fat = 1
    for (var c = n; c > 1; c--) {
        fat*=c
    }
    return fat
}

console.log(fat(5))
*/

/*
// FATORIAL COM RECURSIVIDADE

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

console.log(fatorial(5))
*/

