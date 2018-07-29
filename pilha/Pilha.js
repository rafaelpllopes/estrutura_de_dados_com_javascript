class Pilha {
    constructor() {
        this._itens = [];
        Object.freeze(this);
    }

    push(item) {
        this._itens.push(item);
    }

    pop() {
        return this._itens.pop();
    }

    peek() {
        return this._itens[this.itens.length - 1];
    }

    isEmpty() {
        return this._itens.length == 0;
    }

    size() {
        return this._itens.length;
    }

    clear() {
        this._itens.length = 0;
    }

    print() {
        console.log(this._itens.toString());
    }
}