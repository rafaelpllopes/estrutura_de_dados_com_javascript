class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this._length = 0;
        this._head = null;
        this._tail - null;
    }

    append(elemento) {
        let node = new Node(elemento);
        let current;
        let previous;

        if(this._head === null) {
            this._head = node;
        } else {
            current = this._head;
            while(current.next) {
                current = current.next;
                previous = current.prev;
            }
            current.next = node;
            current.prev = previous;

        }

        this._length++;
    }

    insert(position, element) {
        if(position >= 0 && position <= this._length){
            let node = new Node(element);
            let current = this._head;
            let previous;
            let index = 0;

            if(position === 0) {
                if (!this._head) {
                    this._head = node;
                    this._tail = node;
                } else {
                    node.next = current;
                    current.prev = node;
                    this._head = node;
                }
            } else if(position === this._length){
                current = this._tail;
                current.next = node;
                node.prev = current;
                this._tail = node;
            } else {
                while(index++ < position) {
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
                current.prev = node;
                node.prev = previous;
            }
            this._length++;
            return true;
        } else {
            return false;
        }
    }

    toString() {
        let current = this._head;
        let string = '';

        while(current) {
            string += current.element + (current.next ? 'n' : '');
            current = current.next;
        }

        return string;
    }

    removeAt(position) {
        if(position > -1 && position < this._length) {
            let current = this._head;
            let previous;
            let index = 0;

            if(position === 0) {
                this._head = current.next;
                if (this._length === 1) {
                    this._tail = null;
                } else {
                    this._head.prev = null;
                }
            } else if(position === this._length) {
                current = this._tail;
                this._tail = current.prev;
                this._tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }

                previous.next = current.next;
                current.next = previous;
                current.prev = previous;
            }

            this._length--;

            return current.elemento;
        } else {
            return null;
        }
    }
    
    indexOf(element) {
        let current = this._head;
        let index = -1;

        while(current) {
            if(element === current.element) {
                return index;
            }

            index++;
            current = current.next;
        }
        return -1;
    }

    remove(element) {
        let index = this.indexOf(element);
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

    get tail() {
        return this._tail;
    }
}