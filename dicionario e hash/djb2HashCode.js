class HashTable {
    constructor() {
        this._table = [];
    }

    djb2HashCode(key) {
        let hash = 5381;
        for (let i = 0; i < key.length; i++) {
            hash = hash * 33 + key.charCodeAt(i);
        }

        return hash % 1013;
    }

    put(key, value) {
        let position = this.djb2HashCode(key);

        console.log(position + '-' + key);

        this._table[position] = value;
    }

    remove(key) {
        this._table[this.djb2HashCode(key)] = undefined;        
    }

    get(key) {
        return this._table[this.djb2HashCode(key)];
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