let qnt = Number(prompt(`Quantos números você deseja inserir? `))
let numeros = []
let i
for (i=0 ;i<qnt; i++){
    numeros[i] = Number(prompt(`Insira o numero ${i+1}: `))
}
let maior = 0
for(i=1 ;i<qnt; i++){
    if (numeros[i]>numeros[i-1])
        maior++;
}
console.log(maior)