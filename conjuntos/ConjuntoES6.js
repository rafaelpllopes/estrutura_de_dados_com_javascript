let set = new Set();
set.add(1);
console.log(set.values());
console.log(set.has(1));
console.log(set.size);
set.delete(1);

let setA = new Set();
let setB = new Set();
setA.add(1);
setA.add(2);
setA.add(3);

setB.add(2);
setB.add(3);
setB.add(4);

console.log('união');

let unionAB = new Set();
for (let x of setA) unionAB.add(x);
for (let x of setB) unionAB.add(x);

console.log(unionAB.values());

console.log('intersecção')

let intersection = (setA, setB) => {
    let intersectionSet = new Set();
    for (let x of setA) {
        if (setB.has(x)) {
            intersectionSet.add(x);
        }
    }
    return intersectionSet;
};

//Sintaxe simples para intersection
/*
    intersectionAB = new Set([x for (x of setA) if (setB.has(x))]);
*/

let intersectionAB = intersection(setA, setB);
console.log(intersectionAB.values());

console.log('diferença');

let difference = (setA, setB) => {
    let differenceSet = new Set();
    for (let x of setA) {
        if (!setB.has(x)) {
            differenceSet.add(x);
        }
    }
    return differenceSet;
}

//Sintaxe simples para intersection
/*
    differenceAB = new Set([x for (x of setA) if (!setB.has(x))]);
*/

let differenceAB = difference(setA, setB);
console.log(differenceAB.values());