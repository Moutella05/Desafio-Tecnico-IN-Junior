let dec = `S`
while(dec===`S` || dec===`s`){
    let n = Number(prompt(`Qual fatorial voce deseja calcular?`))
    if(n<0 || n%1!=0){
        console.log(`Erro`)
        }
    else{
        let fat = n
        let valor = n
        while (n>1){
            fat *= n-1
            n--
        }
        console.log(`O fatorial de ${valor} e: ${fat}`)
        dec = prompt(`Deseja calcular outro fatorial(S ou N)?`)
    }
}