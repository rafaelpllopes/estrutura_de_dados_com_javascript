class FilaElemento {
    constructor(_elemento, _prioridade) {
        Object.assign(this, { _elemento, _prioridade });
        Object.freeze(this);
    }

    get elemento() {
        return this._elemento;
    }

    get prioridade() {
        return this._prioridade;
    }
}

class FilaPrioritaria {
    constructor() {
        this._itens = [];
        Object.freeze(this);
    }

    entrar(item, prioridade) {
        let elemento = new FilaElemento(item, prioridade);
        let adicionada = false;

        for(let i=0; i<this._itens.length; i++) {
            if(elemento.prioridade < this._itens[i].prioridade) {
                this._itens.splice(i, 0, elemento);
                adicionada = true;
                break;
            }
        }

        if(!adicionada) {
            this._itens.push(elemento);
        }
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
        for (let i = 0; i < this._itens.length; i++) {
            console.log(`${this._itens[i].elemento} ${this._itens[i].prioridade}`);
        }
    }
}