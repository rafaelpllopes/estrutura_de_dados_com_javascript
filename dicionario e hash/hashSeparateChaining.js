class ListaLigada {
    constructor() {
        this._length = 0;
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
        this._length++;
    }

    removeAt(posicao) {
        if(posicao > -1 && posicao < this._length) {
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

            this._length--;

            return atual.elemento;
        } else {
            return null;
        }
    }

    insert(posicao, elemento) {
        if(posicao >= 0 && posicao <= this._length){
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
            this._length++;
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
        return this._length === 0;
    }

    size() {
        return this._length;
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

class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    toString() {
        return `[${this.key} - ${this.value}]`;
    }
}

class HashTable {
    constructor() {
        this._table = [];
    }

    loseloseHashCode(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }

        return hash % 37;
    }

    put(key, value) {
        let position = this.loseloseHashCode(key);

        if(this._table[position] == undefined) {
            this._table[position] = new ListaLigada();
        }

        this._table[position].append(new ValuePair(key, value));
    }

    remove(key) {
        let position = this.loseloseHashCode(key);

        if(this._table[position] !== undefined) {
            let current = this._table[position].head;
            while(current.next) {
                if(current.elemento.key === key) {
                    this._table[position].remove(current.elemento);
                    if(this._table[position].isEmpty()) {
                        this._table[position] = undefined;
                    }
                    return true;
                }
                current = current.next;
            }
            if (current.elemento.key === key) {
                this._table[position].remove(current.elemento);
                if(this._table[position].isEmpty()) {
                    this._table[position] = undefined;
                }
                return true;
            }
        }
        return false;
    }

    get(key) {
        let position = this.loseloseHashCode(key);

        if(this._table[position] !== undefined) {
            let current = this._table[position].head;

            while(current.next) {
                if(current.elemento.key === key) {
                    return current.elemento.value;
                }
                current = current.next;
            }

            if(current.elemento.key === key) {
                return current.elemento.value;
            }

            return undefined;
        }
    }

    print() {
        for (let i = 0; i < this._table.length; ++i) {
            if(this._table[i] !== undefined) {
                console.log(i + ': '+ this._table[i]);
            }
        }
    }
}

let hash = new HashTable();

hash.put('Gandalf', 'gandalf@gmail.com');
hash.put('Jonh', 'jonh@gmail.com');
hash.put('Tyrion', 'tyrion@gmail.com');

console.log(hash.get('Gandalf'));
console.log(hash.get('Rafael'));
hash.remove('Gandalf');
console.log(hash.get('Gandalf'));

hash.put('Gandalf', 'gandalf@gmail.com');
hash.put('Jonh', 'jonh@gmail.com');
hash.put('Tyrion', 'tyrion@gmail.com');
hash.put('Aaron', 'aaron@gmail.com');
hash.put('Donnie', 'donnie@gmail.com');
hash.put('Ana', 'ana@gmail.com');
hash.put('Jonathan', 'jonathan@gmail.com');
hash.put('Sue', 'sue@gmail.com');
hash.put('Mindy', 'mindy@gmail.com');
hash.put('Paul', 'paul@gmail.com');
hash.put('Nathan', 'nathan@gmail.com');