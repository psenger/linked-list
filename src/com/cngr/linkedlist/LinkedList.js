const Node = require('./Node');

class LinkedList {

    /**
     * @param [props.head] - head
     * @param [props.tail] - tail
     */
    constructor(props) {
        this._head = props?.head || null;
        this._tail = props?.tail || null;
    }

    clear() {
        this._head = null;
        this._tail = null;
    }

    get size() {
        let count = 0;
        let node = this._head;
        while (node) {
            count++;
            node = node.next
        }
        return count;
    }

    getHead() {
        return this._head;
    }

    setHead(data) {
        const node = new Node({data, next: this._head});
        this._head = node;
        this._tail = this._tail || node;
        return this;
    }

    getTail() {
        return this._tail;
    }

    setTail(data) {
        const node = new Node({ data });
        if ( this._tail !== null ) {
            this._tail.next = node;
        }
        this._tail = node;
        if ( this._head === null ) {
            this._head = node;
        }
        return this;
    }

    [Symbol.iterator] () {
        return {
            current: this._head,
            next() {
                if ( this.current === null ) {
                    return { done: true }
                }
                let value = this.current;
                this.current = this.current.next;
                return { done: false, value }
            }
        }
    }
}

module.exports = LinkedList
