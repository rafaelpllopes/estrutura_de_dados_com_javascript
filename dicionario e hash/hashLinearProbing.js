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
            this._table[position] = new ValuePair(key, value);
        } else {
            let index = ++position;

            while(this._table[index] != undefined) {
                index++;
            }

            this._table[index] = new ValuePair(key, value);
        }
    }

    remove(key) {
        let position = this.loseloseHashCode(key);

        if(this._table[position] !== undefined) {
            if(this._table[position].key === key) {
                return this._table[position].value;
            } else {
                let index = ++position;

                while(this._table[index] !== undefined
                    && (this._table[index] && this._table[index].key !== key)
                ) {
                    index++;
                }

                if(this._table[index] && this._table[index].key === key) {
                    return this._table[index] = undefined;
                }
            }
        }
        return undefined;
    }

    get(key) {
        let position = this.loseloseHashCode(key);

        if(this._table[position] !== undefined) {
            if(this._table[position].key === key) {
                return this._table[position].value;
            } else {
                let index = ++position;

                while(this._table[index] !== undefined
                    && (this._table[index] && this._table[index].key !== key)
                ) {
                    index++;
                }

                if(this._table[index] && this._table[index].key === key) {
                    return this._table[index].value;
                }
            }
        }
        return undefined;
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