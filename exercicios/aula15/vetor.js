var num = [5, 8, 2, 9, 3]
/*
for (var c = 0; c<num.length; c++) {
    console.log(`Posição ${c} - Valor ${num[c]}`)
}
*/

for (var c in num) {
    console.log(`Posição ${c} - Valor ${num[c]}`)
}
