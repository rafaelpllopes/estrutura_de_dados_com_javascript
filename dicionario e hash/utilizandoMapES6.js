let map = new Map();

map.set('Gandalf', 'gandalf@gmail.com');
map.set('John', 'jonh@gmail.com');
map.set('Tyrion', 'tyrion@gmail.com');

console.log(map.has('Gandalf'));
console.log(map.size);
console.log(map.keys());
console.log(map.values());
console.log(map.get('Tyrion'));

map.delete('John');

let weakMap = new WeakMap();

let ob1 = {name: 'Gandalf'};
let ob2 = {name: 'John'};
let ob3 = {name: 'Tyrion'};

weakMap.set(ob1, 'gandalf@gmail.com');
weakMap.set(ob2, 'jonh@gmail.com');
weakMap.set(ob3, 'tyrion@gmail.com');

console.log(weakMap.has(ob1));
console.log(weakMap.get(ob3));
weakMap.delete(ob2);