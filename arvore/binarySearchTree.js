class Node {

    constructor(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    
    constructor() {
        this.root = null;
    }

    insert(key) {
        let newNode = new Node(key);
        if(this.root === null) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(node,  newNode) {
        if(newNode.key < node.key) {
            if(node.left === null) {
                node.left = newNode;
            } else {
                this._insertNode(node.left, newNode);
            }
        } else {
            if(node.right === null) {
                node.right = newNode;
            } else {
                this._insertNode(node.right, newNode);
            }
        }
    }

    inOrderTraverse(callback) {
        this._inOrderTraverseNode(this.root, callback);
    }

    _inOrderTraverseNode(node, callback) {
        if(node !== null) {
            this._inOrderTraverseNode(node.left, callback);
            callback(node.key);
            this._inOrderTraverseNode(node.right, callback);
        }
    }

    preOrderTraverse(callback) {
        this._preOrderTraverseNode(this.root, callback);
    }

    _preOrderTraverseNode(node, callback) {
        if(node !== null) {
            callback(node.key);
            this._preOrderTraverseNode(node.left, callback);
            this._preOrderTraverseNode(node.right, callback);

        }
    }



    postOrderTraverse(callback) {
        this._postOrderTraverseeNode(this.root, callback);
    }

    _postOrderTraverseeNode(node, callback) {
        if(node !== null) {
            this._postOrderTraverseeNode(node.left, callback);
            this._postOrderTraverseeNode(node.right, callback);
            callback(node.key);

        }
    }

    min() {
        return this._minNode(this.root);
    }

    _minNode(node) {
        if(node) {
            while(node && node.left !== null) {
                node = node.left;
            }
            return node.key;
        }
        return null;
    }

    max() {
        return this._maxNode(this.root);
    }

    _maxNode(node) {
        if(node) {
            while(node && node.right !== null) {
                node = node.right;
            }
            return node.key;
        }
        return null;
    }

    search(key) {
        return this._searchNode(this.root, key);
    }

    _searchNode(node, key) {
        if(node === null) {
            return null;
        }

        if(key < node.key) {
            return this._searchNode(node.left, key);
        } else if(key < node.key) {
            return this._searchNode(node.right, key);
        } else {
            return true;
        }
    }

    remove(key) {
        this.root = this._removeNode(this.root, key);
    }

    _removeNode(node, key) {
        if(node === null) {
            return null
        }

        if (key < node.key) {
            node.left = this._removeNode(node.left, key);
            return node;
        } else if(key > node.key) {
            node.right = this._removeNode(node.right, key);
            return node;
        } else {
            if(node.left === null && node.right === null) {
                node = null;
                return node;
            }

            if(node.left === null) {
                node = node.right;
                return node;
            } else if(node.right === null) {
                node = node.left;
                return node;
            }
            let aux = this._findMinNode(node.right);
            node.key = aux.key;
            node.right = this._removeNode(node.right, aux.key);
            return node;
        }
    }

    _findMinNode(node) {
        while(node && node.left !== null) {
            node = node.left;
        }
        return node;
    }
}

console.log('Inicio');
let tree = new BinarySearchTree();
console.log('Inserindo')
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);
tree.insert(6);

let printNode = value => {
    console.log(value);
}

console.log('Percursor em ordem');
tree.inOrderTraverse(printNode);

console.log('Percursor pré-ordem');
tree.preOrderTraverse(printNode);

console.log('Percursor pos-ordem');
tree.postOrderTraverse(printNode);

console.log('Valor menor "min"');
console.log(tree.min());

console.log('Valor maior "max"');
console.log(tree.max());

console.log('pesquisa');
console.log(tree.search(1) ? 'key 1 found' : 'key 1 not found');
console.log(tree.search(8) ? 'key 8 found' : 'key 8 not found');

console.log('Remove');
tree.remove(6);
tree.remove(5);
tree.remove(15);
tree.inOrderTraverse(printNode);

console.log('Fim');