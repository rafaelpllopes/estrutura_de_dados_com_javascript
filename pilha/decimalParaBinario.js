divideBy2 = decimalNum => {
    let pilha = new Pilha();
    let numero;
    let binariaString = '';

    while(decimalNum > 0) {
        numero = Math.floor(decimalNum % 2);
        pilha.push(numero);
        decimalNum = Math.floor(decimalNum / 2);
    }

    while(!pilha.isEmpty()) {
        binariaString += pilha.pop().toString();
    }

    return binariaString;
}