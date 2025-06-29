let frase = prompt (`Digite uma frase: `)
let fraseMinuscula = frase.toLowerCase()
let fraseDividida = fraseMinuscula.split('')
let fraseSemEspacos = []
let i
let j
let palindromo = true
for (i=0;i<fraseDividida.length;i++) {
    if (fraseDividida[i] != ' ') {
        fraseSemEspacos.push(fraseDividida[i])
    }
}
tamanho = fraseSemEspacos.length
metadeTamanho = tamanho / 2
for(i=0 ;i<metadeTamanho; i++) {
    if (fraseSemEspacos[i] != fraseSemEspacos[tamanho-i-1]) {
        palindromo = false
        break
    }
}
if(palindromo){
    console.log(`A frase e um palindromo`)
}
else{
    console.log(`A frase nao e um palindromo`)
}

