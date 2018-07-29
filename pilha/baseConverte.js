baseConverte = (decimalNum, base) => {
    let pilha = new Pilha();
    let numero;
    let baseString = '';
    let digits = "0123456789ABCDEF";

    while(decimalNum > 0) {
        numero = Math.floor(decimalNum % base);
        pilha.push(numero);
        decimalNum = Math.floor(decimalNum / base);
    }

    while(!pilha.isEmpty()) {
        baseString += digits[pilha.pop()];
    }

    return baseString;
}