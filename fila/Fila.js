class Fila {
    constructor() {
        this._itens = [];
        Object.freeze(this);
    }

    entrar(item) {
        this._itens.push(item);
    }

    sair() {
        return this._itens.shift();
    }

    frente() {
        return this._itens[0];
    }

    estaVazia() {
        return this._itens.length == 0;
    }

    tamanho() {
        return this._itens.length;
    }

    imprimir() {
        console.log(this._itens.toString());
    }
}