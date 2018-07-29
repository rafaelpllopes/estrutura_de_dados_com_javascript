batataQuente = (listaNomes, vezes) => {
    let fila = new Fila();

    for (let i = 0; i < listaNomes.length; i++) {
        fila.entrar(listaNomes[i]);
    }

    let eliminado = '';

    while (fila.tamanho() > 1) {
        for (let i = 0; i < vezes; i++) {
            fila.entrar(fila.sair());
        }
        eliminado = fila.sair();
        console.log(`${eliminado} foi eliminado no jogo batata quente.`);
    }

    return fila.sair();
};

let nomes = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
let vencedor = batataQuente(nomes, 7);
console.log(`Vencedor é ${vencedor}`);