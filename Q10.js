let fila = []
let ch = 0
while (ch != 3){
    console.log("1. Novo Cliente")
    console.log("2. Atender Cliente")
    console.log("3. Sair")
    ch = parseInt(prompt("Escolha uma opção: "))
    switch (ch){
        case 1:
            let nome = prompt("Digite o nome: ")
            fila.push(nome)
            break
        case 2:
            let atendido = fila.shift()
            console.log("Atendendo cliente:", atendido)
            break
        case 3:
            console.log("Fim")
            break
    }
}