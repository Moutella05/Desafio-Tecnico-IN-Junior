let idade =1
let i
let pessoas = []
while(idade>0){
    idade = Number(prompt(`Digite sua idade`))
    pessoas.push(idade)
}
let verificar = verificarIdade(pessoas)
for(i=0; i<verificar.length; i++){
    console.log(`Pessoa ${i+1}: ${verificar[i]}`)
}

function verificarIdade(pessoas){
    let maiorIdade = []
    for(i=0; i<pessoas.length; i++){
        if(pessoas[i] >= 18){
            maiorIdade.push(`Maior de idade`)
        }
        else{
            maiorIdade.push(`Menor de idade`)
        }
    }
    return maiorIdade
}