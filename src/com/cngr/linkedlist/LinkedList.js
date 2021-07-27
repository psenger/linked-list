const Node = require("./Node");

const isNill = (value) => value === null || value === undefined;
const not = (fn) => (...args) => !fn(...args)
const isSet = not(isNill);

/**
 * Linked List - Constructed with either a Data Object ( which will be wrapped with a Node ) or a
 * Node with data in it already. Alternatively, you can construct the Linked List with no
 * parameters.
 * @constructor
 * @param {Node|Object|undefined|null} [data=null] - Node, an Object as the data, undefined or null.
 */
class LinkedList {

  constructor(data) {
    this._head = null;
    this._tail = null;
    let newNode = null;
    if (isSet(data) && data instanceof Node) {
      newNode = data;
    } else if (isSet(data)) {
      newNode = new Node({data, next: this._head, prev: null});
    }
    this._head = newNode
    this._tail = newNode
    this._head?.next?.(this._tail);
    this._tail?.prev?.(this._head);
  }

  /**
   * Clear all out the values. Resetting the Linked List.
   */
  clear() {
    this._head = null;
    this._tail = null;
  }

  /**
   * Determine the length of the linked List. The Linked List can be altered by means outside
   * the control of the LinkedList Object, thereby bypassing the any functions on this object.
   * Therefore, the length is calculated by iterating over every value in the list. Which can be
   * expensive to execute if the list is large.
   * @return {number} the length
   */
  get length() {
    let count = 0;
    let node = this._head;
    while (isSet(node)) {
      count++;
      node = node.getNext()
    }
    return count;
  }

  /**
   * Set the head, to either a new value, which will be encapsulated as a new Node, or by passing a
   * Node. Either way, the Node's next and previous values will be modified and the value or
   * node that is passed becomes the new head. Consequently, passing either null or undefined,
   * will result in clearing the entire linked list.
   * @param {Object|Node|null|undefined} newHead - the new head, supporting either a Node, or data.
   */
  setHead(newHead) {
    if (isSet(newHead) && newHead instanceof Node) {
      newHead.setNext(this._head);
      newHead.setPrev(null);
      this._head?.setPrev(newHead);
      this._head = newHead;
      if (isNill(this._tail)) {
        this._tail = newHead;
      }
    } else if (isSet(newHead)) {
      const nn = new Node({data: newHead, next: this._head, prev: null});
      this._head?.setPrev(nn);
      this._head = nn;
      if (isNill(this._tail)) {
        this._tail = nn;
      }
    } else {
      this.clear();
    }
  }

  /**
   * Get the Head of this Linked List.
   * @return {null|Node} - The head, or null.
   */
  getHead() {
    return this._head;
  }

  /**
   * Set the tail, to either a new value, which will be encapsulated as a new Node, or a pass a
   * Node. Either way, the Node's next and previous values will be modified and the value or
   * node that is passed becomes the new tail. Consequently, passing either null or undefined,
   * will result in clearing the entire linked list.
   * @param {Object|Node|null|undefined} newTail - the new tail, supporting either a Node, or data.
   */
  setTail(newTail) {
    if (isSet(newTail) && newTail instanceof Node) {
      newTail.setNext(null);
      newTail.setPrev(this._tail);
      this._tail?.setNext(newTail);
      this._tail = newTail;
      if (isNill(this._head)) {
        this._head = newTail;
      }
    } else if (isSet(newTail)) {
      const nn = new Node({data: newTail, next: null, prev: this._tail});
      this._tail?.setNext(nn);
      this._tail = nn;
      if (isNill(this._head)) {
        this._head = nn;
      }
    } else {
      this.clear();
    }
  }

  /**
   * get the Tail of this Linked List
   * @return {null|Node} - The tail, or null.
   */
  getTail() {
    return this._tail;
  }

  /**
   * Prepend a new Node or Data to the head. Warning, passing null will clear the Linked List.
   * @param {Object|Node|null|undefined} data - passing either a Node or data, null will reset
   * the Linked List.
   * @return {LinkedList} A reference to this object allowing chaining.
   * @example
   * const ll = new LinkedList();
   * const nn = new Node();
   * nn.setData('C')
   * ll.prepend('A').prepend(new Node({data:'B'})).prepend(nn)
   * for ( let node of ll.forward ) {
   *   console.log(node.getData());
   * }
   * console.log( 'length =', ll.getSize() );
   * ll.append( null )
   * console.log( 'length =', ll.getSize() );
   * > C
   * > B
   * > A
   * > length = 3
   * > length = 0
   */
  prepend(data) {
    this.setHead(data);
    return this;
  }

  /**
   * Prepend all the values from left to right of the iterator passed in.
   * @param {Iterable} values - Iterable values to prepend to the tail, can be either data or a Node
   * @return {LinkedList} A reference to this object allowing chaining.
   * @example
   */
  prependAll(values) {
    for (let value of values || []) {
      this.prepend(value)
    }
    return this;
  }

  /**
   * Append a new Node or Data to the tail. Warning, passing null will clear the Linked List.
   * @param {Object|Node|null|undefined} data - passing either a Node or data, null will reset the Linked List.
   * @return {LinkedList} A reference to this object allowing chaining.
   * @example
   * const ll = new LinkedList();
   * const nn = new Node();
   * nn.setData('C')
   * ll.append('A').append(new Node({data:'B'})).append(nn)
   * for ( let node of ll.forward ) {
   *    console.log(node.getData());
   * }
   * console.log( 'length =', ll.getSize() );
   * ll.append( null )
   * console.log( 'length =', ll.getSize() );
   * > A
   * > B
   * > C
   * > length = 3
   * > length = 0
   */
  append(data) {
    this.setTail(data);
    return this;
  }

  /**
   * Append all the values from left to right of the iterator passed in.
   * @param {Iterable} values - Iterable values to append to the beginning, can be either data or a Node
   * @return {LinkedList} A reference to this object allowing chaining.
   * @example
   * const ll = new LinkedList();
   * const nn = new Node();
   * nn.setData('C')
   * ll
   * .appendAll([
   *   'A',
   *   new Node({data: 'B'})
   * ])
   * .appendAll([
   *   nn
   * ])
   * for (let node of ll.forward) {
   *   console.log(' > ', node.getData());
   * }
   * > A
   * > B
   * > C
   */
  appendAll(values) {
    for (let value of values || []) {
      this.append(value)
    }
    return this;
  }

  /**
   * A Forward iterator through the Linked List
   * @return {{next(): ({done: boolean}), current: (null|null|*)}|{done: boolean, value: null}|{[Symbol.iterator](*): {next(): ({done: boolean}), current: null|null|*}}|{done: boolean}}
   * @example
   * let ll = new LinkedList();
   * ll.appendAll(['A','B','E','F'])
   * for ( let node of ll.reverse ) {
   *    console.log(node.getData());
   * }
   * > F
   * > E
   * > B
   * > A
   * ll.clear();
   * ll.appendAll([1,2,3,4])
   * const y = Array.from( ll.forward, node => node.getData() ).filter( v => v % 2 === 0 )
   * console.log(y);
   * > [ 2, 4 ]
   */
  get forward() {
    const self = this;
    return {
      name: 'forward',
      [Symbol.iterator]() {
        return {
          current: self._head,
          next() {
            if (this.current === null) {
              return {done: true}
            }
            let value = this.current;
            this.current = this.current.getNext();
            return {done: false, value}
          }
        }
      }
    }
  }

  /**
   * A Reverse iterator through the Linked List
   * @return {{next(): ({done: boolean}), current: (null|null|*)}|{done: boolean, value: null}|{[Symbol.iterator](*): {next(): ({done: boolean}), current: null|null|*}}|{done: boolean}}
   * @example
   * const ll = new LinkedList();
   * ll.appendAll(['A','B','E','F'])
   * for ( let node of ll.reverse ) {
   *    console.log(node.getData());
   * }
   * > F
   * > E
   * > B
   * > A
   * ll.clear();
   * ll.appendAll([1,2,3,4])
   * const y = Array.from( ll.reverse, node => node.getData() ).filter( v => v % 2 === 0 )
   * console.log(y);
   * > [ 4, 2 ]
   */
  get reverse() {
    const self = this;
    return {
      name: 'reverse',
      [Symbol.iterator]() {
        return {
          current: self._tail,
          next() {
            if (this.current === null) {
              return {done: true}
            }
            let value = this.current;
            this.current = this.current.getPrev();
            return {done: false, value}
          }
        }
      }
    }
  }

  /**
   * Find provides a call back that can be used to select nodes from the Linked List.
   * @param {LinkedList~LinkedListPredicate} predicate
   * @param {Object} [options={iterator:this.forward, once: true}]
   * @param {Iterator} [options.iterator=this.forward] - The iterator to use, defaults to forward.
   * @param {Boolean} [options.once=true] - Indicates if the iteration is to halt if found once.
   * @return {LinkedList~SurroundingNodes[]} matching nodes
   * @example
   * const ll = new LinkedList();
   * const evenCallBack = (cn,pn,nn,iteration,hitCount,linkedList) => cn.getData() % 2 === 0;
   * ll.appendAll([1,2,3,4])
   * const results = ll.find(evenCallBack,{once:false}).map(({currentNode})=>currentNode?.getData());
   * console.log('Even values=', results);
   * // Even values= [ 2, 4 ]
   * ll.clear();
   * const findIt = (value) => (cn,pn,nn,iteration,hitCount,linkedList) => cn.getData() === value;
   * ll.appendAll(['A','B', 'C','D']) // insert Z between B and C
   * const [ { previousNode, currentNode, nextNode } ] = ll.find(findIt('B'),{once:true});
   * console.log('previousNode', previousNode?.getData());
   * // previousNode A
   * console.log('currentNode', currentNode?.getData());
   * // currentNode B
   * console.log('nextNode', nextNode?.getData());
   * // nextNode C
   * const newNode = new Node();
   * newNode.setData('Z');
   * currentNode?.setNext( newNode );
   * nextNode?.setPrev( newNode );
   * newNode.setPrev( currentNode );
   * newNode.setNext( nextNode );
   * console.log('---- Forward ----');
   * for ( let node of ll.forward ) {
   *    console.log(node.getData());
   * }
   * // ---- Forward ----
   * // A
   * // B
   * // Z
   * // C
   * // D
   * console.log('---- Reverse ----');
   * for ( let node of ll.reverse ) {
   *    console.log(node.getData());
   * }
   * // ---- Reverse ----
   * // D
   * // C
   * // Z
   * // B
   * // A
   */
  find(predicate,options = {iterator:this.forward, once: true}) {
    // noinspection EqualityComparisonWithCoercionJS
    const isReverse = (options) => options?.iterator?.name === 'reverse';
    // console.log('isReverse=', options?.iterator == this.reverse );
    // console.log('isForward=', options?.iterator == this.forward );
    const iterator = isReverse(options) ? this.reverse : this.forward;
    let previousNode = isReverse(options) ? this._tail : this._head;
    let currentNode = isReverse(options) ? this._tail : this._head;
    let nextNode = isReverse(options) ? this._tail : this._head;

    let iteration = 0;
    const refs = [];
    let hitCount = 0;
    for ( let node of iterator ) {
      if ( predicate(currentNode,previousNode,nextNode,iteration++,hitCount,this) ) {
        hitCount++;
        refs.push({previousNode,currentNode,nextNode});
      }
      if ( options?.once && hitCount !== 0 ) {
        return refs;
      }
      if ( isReverse(options) ) {
        previousNode = currentNode;
        currentNode = currentNode?.getPrev();
        nextNode = currentNode?.getPrev();
      } else{
        previousNode = currentNode;
        currentNode = currentNode?.getNext();
        nextNode = currentNode?.getNext();
      }
    }
    return refs
  }

}

/**
 * Callback, used by find to predicate nodes, in the Linked List.
 * @callback LinkedList~LinkedListPredicate
 * @param {null|Node} currentNode - The current Node
 * @param {null|Node} previousNode - The previous Node
 * @param {null|Node} nextNode - The next Node
 * @param {number} iteration - Iteration number
 * @param {number} hitCount - A running count of all the evaluated predicates that matched true.
 * @param {LinkedList} scope - The LinkedList Object.
 * @return {boolean} true indicates a match and will collect matching node(s)
 */

/**
 * @typedef {Object} LinkedList~SurroundingNodes
 * @property {null|Node} previousNode - previous node
 * @property {null|Node} currentNode - current node
 * @property {null|Node} nextNode - next node
 */
module.exports = LinkedList
