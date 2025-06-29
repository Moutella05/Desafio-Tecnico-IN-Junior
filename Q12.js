let numeros = [];
let i
let j
encontraELementoUnico(numeros)
function encontraELementoUnico(numeros){
    for(i=0 ;i<numeros.length; i++){
        for(j=0 ;j<numeros.length; j++){
            if(numeros[i] === numeros[j] && i !== j)
                break
        }
        if(j === numeros.length)
            console.log(`O numero unico e: ${numeros[i]}`);
    }
}