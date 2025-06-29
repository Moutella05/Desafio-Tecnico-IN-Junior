n = parseInt(prompt("Quantos numeros tera a sequencia de Fibonacci: "))
let f, f0=0, f1=1
console.log(`Fibonacci(0) = 0`) 
console.log(`Fibonacci(1) = 1`)
let i = 2
while (i != n){
    f = f1 + f0
    console.log(`Fibonacci(${i}) = ${f}`)
    f0 = f1
    f1 = f
    i++
}
