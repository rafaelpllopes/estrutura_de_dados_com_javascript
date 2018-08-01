class Conjunto {
    constructor() {
        this._items = {};
    }

    has(value) {
        //return value in this._items;
        return this._items.hasOwnProperty(value);
    }

    add(value) {
        if(!this.has(value)) {
            this._items[value] = value;
            return true;
        }
        return false;
    }

    delete(value) {
        if(this.has(value)) {
            delete this._items[value];
            return true;
        }
        return false;
    }

    clear() {
        this._items = {};
    }

    size() {
        return Object.keys(this._items).length;
    }

    sizeLegacy() {
        let count = 0;
        for(let key in this._items) {
            if(this._items.hasOwnProperty(key)){
                ++count;
            }
            return count;
        }
    }

    values() {
        let values = [];
        for(let i =0, keys=Object.keys(this._items); i < keys.length; i++) {
            values.push(this._items[keys[i]]);
        }
        return values;
    }

    valuesLegacy() {
        let values = [];
        for (let key in this._items) {
            if(this._items.hasOwnProperty(key)) {
                values.push(this._items[key]);
            }
        }
        return values;
    }

    union(outroConjunto) {
        let uniaoConjunto = new Conjunto();

        let values = this.values();

        for(let i=0; i < values.length; i++) {
            uniaoConjunto.add(values[i]);
        }

        values = outroConjunto.values();
        for(let i=0; i < values.length; i++) {
            uniaoConjunto.add(values[i]);
        }

        return uniaoConjunto;
    }

    intersection(outroConjunto) {
        let intersectionSet = new Conjunto();

        let values = this.values();

        for(let i=0; i < values.length; i++) {
            if(outroConjunto.has(values[i])) {
                intersectionSet.add(values[i]);
            }
        }

        return intersectionSet;
    }

    difference(outroConjunto) {
        let differenceSet = new Conjunto();

        let values = this.values();

        for(let i=0; i < values.length; i++) {
            if(!outroConjunto.has(values[i])) {
                differenceSet.add(values[i]);
            }
        }

        return differenceSet;
    }

    subset(outroConjunto) {
        if(this.size() > outroConjunto.size()) {
            return false;
        } else {
            let values = this.values();

            for (let i = 0; i < values.length; i++) {
                if(!outroConjunto.has(values[i])) {
                    return false;
                }
            }
        }

        return true;
    }
}

console.log('Teste de conjuntos');

let conjunto = new Conjunto();
conjunto.add(1);
console.log(conjunto.values());
console.log(conjunto.has(1));
console.log(conjunto.size());

conjunto.add(2);
console.log(conjunto.values());
console.log(conjunto.has(2));
console.log(conjunto.size());

conjunto.delete(1);
console.log(conjunto.values());

conjunto.delete(2);
console.log(conjunto.values());

console.log('Teste de união de conjuntos');
let conjuntoA = new Conjunto();
conjuntoA.add(1);
conjuntoA.add(2);
conjuntoA.add(3);
let conjuntoB = new Conjunto();
conjuntoB.add(3);
conjuntoB.add(4);
conjuntoB.add(5);
conjuntoB.add(6);

let uniaoAB = conjuntoA.union(conjuntoB);
console.log(uniaoAB.values());

console.log('Teste de intersecção de conjuntos');
conjuntoB.clear();
conjuntoB.add(2);
conjuntoB.add(3);
conjuntoB.add(4);

let intersectionAB = conjuntoA.intersection(conjuntoB);
console.log(intersectionAB.values());

console.log('Teste de diferença de conjuntos');
let differenceAB = conjuntoA.difference(conjuntoB);
console.log(differenceAB.values());

console.log('Teste de subconjunto');
conjuntoA.clear();
conjuntoB.clear();
let conjuntoC = new Conjunto();
conjuntoA.add(1);
conjuntoA.add(2);

conjuntoB.add(1);
conjuntoB.add(2);
conjuntoB.add(3);

conjuntoC.add(2);
conjuntoC.add(3);
conjuntoC.add(4);

console.log(conjuntoA.subset(conjuntoB));
console.log(conjuntoA.subset(conjuntoC));

