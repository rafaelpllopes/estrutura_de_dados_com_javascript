class ListaLigada {
    constructor() {
        this._lenght = 0;
        this._head = null;
    }

    append(elemento) {
        let noh = new Noh(elemento);
        let atual;

        if(this._head === null) {
            this._head = noh;
        } else {
            atual = this._head;
            while(atual.proximo) {
                atual = atual.proximo;
            }
            atual.proximo = noh;
        }
        this._lenght++;
    }

    removeAt(posicao) {
        if(posicao > -1 && posicao < this._lenght) {
            let atual = this._head;
            let anterior;
            let index = 0;

            if(posicao === 0) {
                this._head = atual.proximo;
            } else {
                while (index++ < posicao) {
                    anterior = atual;
                    atual = atual.proximo;
                }

                anterior.proximo = atual.proximo;
            }

            this._lenght--;

            return atual.elemento;
        } else {
            return null;
        }
    }

    insert(posicao, elemento) {
        if(posicao >= 0 && posicao <= this._lenght){
            let noh = new Noh(elemento);
            let atual = this._head;
            let anterior;
            let index = 0;

            if(posicao === 0) {
                noh.proximo = atual;
                this._head = noh;
            } else {
                while(index++ < posicao) {
                    anterior = atual;
                    atual = atual.proximo;
                }
                noh.proximo = atual;
                anterior.proximo = noh;
            }
            this._lenght++;
            return true;
        } else {
            return false;
        }
    }

    toString() {
        let atual = this._head;
        let string = '';

        while(atual) {
            string += atual.elemento + (atual.proximo ? 'n' : '');
            atual = atual.proximo;
        }

        return string;
    }

    indexOf(elemento) {
        let atual = this._head;
        let index = -1;

        while(atual) {
            if(elemento === atual.elemento) {
                return index;
            }

            index++;
            atual = atual.proximo;
        }
        return -1;
    }

    remove(elemento) {
        let index = this.indexOf(elemento);
        return this.removeAt(index);
    }

    isEmpty() {
        return this._lenght === 0;
    }

    size() {
        return this._lenght;
    }

    get head() {
        return this._head;
    }
}

class Noh {
    constructor(elemento) {
        this.elemento  = elemento;
        this.proximo = null;
    }
}