let time = []
let ch = 0
while (ch != 5){
    console.log("1 - Adicionar jogador")
    console.log("2 - Buscar por posicao")
    console.log("3 - Listar time")
    console.log("4 - Calcular pontuacao media")
    console.log("5 - Sair")
    ch = parseInt(prompt("Digite um numero: "));
    switch (ch){
        case 1:
            jogador = {}
            jogador.nome = prompt("Digite o nome do jogador: ");
            jogador.idade = parseInt(prompt("Digite a idade do jogador: "));
            jogador.posicao = prompt("Digite a posicao do jogador: ");
            jogador.pontuacao = Number(prompt("Digite a pontuacao do jogador: "));
            adicionarJogador(jogador);
            break
        case 2:
            let posicao = prompt("Digite a posicao que deseja: ");
            jogadorPosicao = buscarPorPosicao(posicao)
            if (jogadorPosicao != 0)
                console.log(jogadorPosicao)
            else
                console.log("Sem jogador nessa posicao")
            break
        case 3:
            listarTime()
            break
        case 4:
            med = calcularPontuacaoMedia()
            if (med == 0)
                console.log("Nenhum jogador cadastrado")
            else
                console.log(`A pontuacao media e: ${med}`)
            break
        case 5:
            console.log("Fim")
            break
    }
}

function adicionarJogador(jogador){
    time.push(jogador);
}

function buscarPorPosicao(posicao){
    let pos = []
    let tem = false
    for(i=0 ; i<time.length ; i++){
        if (time[i].posicao == posicao){
            pos.push(time[i].nome)
            tem = true
        }
    }
    if (!tem)
        return 0;
    return pos;
}

function listarTime(){
    if (time.length == 0){
        console.log("Nenhum jogador cadastrado");
        return 0
    }
    for(i=0 ; i<time.length ; i++){
        console.log(`Nome: ${time[i].nome}, Idade: ${time[i].idade}, Posicao: ${time[i].posicao}, Pontuacao: ${time[i].pontuacao}`);
    }
}

function calcularPontuacaoMedia(){
    let soma = 0
    for(i=0 ; i<time.length ; i++){
        soma += time[i].pontuacao
    }
    if(time.length == 0){
        return 0
    }
    else{
        let media = soma / time.length
        return media
    }
}