class Dicionario {
    constructor () {
        this._itens = {};
    }

    has(key) {
        return key in this._itens;
    }

    set(key, value) {
        this._itens[key] = value;
    }

    delete(key) {
        if(this.has(key)) {
            delete this._itens[key];
            return true;
        }
        return false;
    }

    get(key) {
        return this.has(key) ? this._itens[key] : undefined;
    }

    clear() {
        this._itens = {};
    }

    size() {
        return Object.keys(this._itens).length;
    }

    keys() {
        return Object.keys(this._itens);
    }

    values() {
        let values = [];

        for (let key in this._itens) {
            if(this.has(key)) {
                values.push(this._itens[key]);
            }
        }
    }

    getItens() {
        return [].concat(this._itens);
    }
}


console.log("testes");

let dicionario = new Dicionario();
dicionario.set('Gandalf', 'gandalf@email.com');
dicionario.set('John', 'jonh@email.com');
dicionario.set('Tyrion', 'tyrion@email.com');

dicionario.has('John');

console.log(dicionario.size());

console.log(dicionario.keys());
console.log(dicionario.values());
console.log(dicionario.get('Tyrion'));

dicionario.delete('John');

console.log(dicionario.keys());
console.log(dicionario.values());
console.log(dicionario.getItens());