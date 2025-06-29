let a = Number(prompt(`Digite o valor de A`))
let b = Number(prompt(`Digite o valor de B`))
let c = Number(prompt(`Digite o valor de C`))

let delta = (b*b)-4*a*c
r1 = (-b+Math.sqrt(delta)) / (2*a)
r2 = (-b-Math.sqrt(delta)) / (2*a)

if (delta>0){
    console.log(`Raiz 1: ${r1} Raiz 2: ${r2}`)
}
else if (r1===r2){
    console.log(`Raizez iguais: ${r1}`)
}
else{
    console.log(`Nao possui raizes reais`)
}
