class Node {

    constructor(props) {
        this._data = props?.data || null;
        this._next =  props?.next || null;
    }

    get data () {
        return this._data;
    }

    set data (data) {
        this._data = data;
    }

    get next() {
        return this._next;
    }

    set next(data) {
        this._next = data;
    }
}

module.exports = Node
