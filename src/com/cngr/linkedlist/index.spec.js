const LinkedList = require("./LinkedList");
const Node = require("./Node");

describe('Test Suite', () => {
  describe('LinkedList', () => {
    describe('#constructor', () => {
      test('with out props to have head and tail null', () => {
        const ll = new LinkedList();
        expect(ll.getHead()).toBeNull()
        expect(ll.getTail()).toBeNull()
      })
      test('constructor with props to have head and tail equal', () => {
        const n = new Node({data: 'A'})
        const ll = new LinkedList(n);
        // make sure the hed and tail are set.
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getTail()).not.toBeNull()
        // make sure the head and tail are equal by looking at the data
        expect(ll.getHead().getData()).toEqual(ll.getTail().getData())
        // make sure the head next and prev are null
        expect(ll.getHead().getNext()).toBeNull()
        expect(ll.getHead().getPrev()).toBeNull()
        // make sure the tail next and prev are null ( this is redundant )
        expect(ll.getTail().getNext()).toBeNull()
        expect(ll.getTail().getPrev()).toBeNull()
      })
    })
    describe('#clear', () => {
      test('without initialization to clear', () => {
        const ll = new LinkedList();
        ll.clear();
        expect(ll.getHead()).toBeNull()
        expect(ll.getTail()).toBeNull()
      })
      test('constructor with props to have head and tail equal', () => {
        const n = new Node({data: 'A'})
        const ll = new LinkedList(n);
        ll.clear();
        expect(ll.getHead()).toBeNull()
        expect(ll.getTail()).toBeNull()
      })
    })
    describe('#get head', () => {
      test('without initialization, head to be null', () => {
        const ll = new LinkedList();
        expect(ll.getHead()).toBeNull()
      })
      test('constructor with initialization to have head', () => {
        const n = new Node({data: 'A'})
        const ll = new LinkedList(n);
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual(n.getData())
      })
    })
    describe('#set head', () => {
      test('without initialization, call set head with a node, will set head and tail', () => {
        const nn = new Node({data: 'A'});
        const ll = new LinkedList();
        ll.setHead(nn);
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual(nn.getData());
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getTail().getData()).toEqual(nn.getData());
        expect(ll.getHead()).toBeInstanceOf(Node);
        expect(ll.getTail()).toBeInstanceOf(Node);
      })
      test('without initialization, call set head with data, will set head and tail', () => {
        const ll = new LinkedList();
        ll.setHead('A');
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual('A');
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getTail().getData()).toEqual('A');
        expect(ll.getHead()).toBeInstanceOf(Node);
        expect(ll.getTail()).toBeInstanceOf(Node);
      })
      test('constructor initialization w/head and tail, call set head with data', () => {
        const n = new Node({data: 'A'})
        const ll = new LinkedList(n);
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual(n.getData())
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getTail().getData()).toEqual(n.getData())
        expect(ll.getHead()).toBeInstanceOf(Node);
        expect(ll.getTail()).toBeInstanceOf(Node);
        ll.setHead('B');
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual('B');
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getTail().getData()).toEqual('A');
        expect(ll.getHead()).toBeInstanceOf(Node);
        expect(ll.getTail()).toBeInstanceOf(Node);
      })
      test('constructor initialization w/head and tail, call set head with node', () => {
        const n = new Node({data: 'A'})
        const ll = new LinkedList(n);
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual(n.getData())
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getTail().getData()).toEqual(n.getData())
        expect(ll.getHead()).toBeInstanceOf(Node);
        expect(ll.getTail()).toBeInstanceOf(Node);
        const nn = new Node({data: 'B'})
        ll.setHead(nn);
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual(nn.getData());
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getTail().getData()).toEqual(n.getData());
        expect(ll.getHead()).toBeInstanceOf(Node);
        expect(ll.getTail()).toBeInstanceOf(Node);
      })
      test('setting null, clears', () => {
        const ll = new LinkedList('A');
        expect(ll.getHead()).not.toBeNull();
        expect(ll.getHead().getData()).toEqual('A');
        expect(ll.getTail()).not.toBeNull();
        expect(ll.getTail().getData()).toEqual('A');
        expect(ll.getHead()).toBeInstanceOf(Node);
        expect(ll.getTail()).toBeInstanceOf(Node);
        ll.setHead(null);
        expect(ll.getHead()).toBeNull();
        expect(ll.getTail()).toBeNull();
      })
    })
    describe('#get tail', () => {
      test('without initialization, tail to be null', () => {
        const ll = new LinkedList();
        expect(ll.getTail()).toBeNull()
      })
      test('constructor with initialization to have tail', () => {
        const n = new Node({data: 'A'})
        const ll = new LinkedList(n);
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getTail().getData()).toEqual(n.getData())
      })
    })
    describe('#set tail', () => {
      test('without initialization, call set tail with a node, will set head and tail', () => {
        const nn = new Node({data: 'A'});
        const ll = new LinkedList();
        ll.setTail(nn);
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual(nn.getData());
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getTail().getData()).toEqual(nn.getData());
        expect(ll.getHead()).toBeInstanceOf(Node);
        expect(ll.getTail()).toBeInstanceOf(Node);
      })
      test('without initialization, call set head with data, will set head and tail', () => {
        const ll = new LinkedList();
        ll.setTail('A');
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual('A');
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getTail().getData()).toEqual('A');
        expect(ll.getHead()).toBeInstanceOf(Node);
        expect(ll.getTail()).toBeInstanceOf(Node);
      })
      test('constructor initialization w/head and tail, call set head with data', () => {
        const ll = new LinkedList('A');
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual('A')
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getTail().getData()).toEqual('A')
        expect(ll.getHead()).toBeInstanceOf(Node);
        expect(ll.getTail()).toBeInstanceOf(Node);
        ll.setTail('B');
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual('A');
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getTail().getData()).toEqual('B');
        expect(ll.getHead()).toBeInstanceOf(Node);
        expect(ll.getTail()).toBeInstanceOf(Node);
      })
      test('constructor initialization w/head and tail, call set head with node', () => {
        const n = new Node({data: 'A'})
        const ll = new LinkedList(n);
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual(n.getData())
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getTail().getData()).toEqual(n.getData())
        expect(ll.getHead()).toBeInstanceOf(Node);
        expect(ll.getTail()).toBeInstanceOf(Node);
        const nn = new Node({data: 'B'})
        ll.setTail(nn);
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual(n.getData());
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getTail().getData()).toEqual(nn.getData());
        expect(ll.getHead()).toBeInstanceOf(Node);
        expect(ll.getTail()).toBeInstanceOf(Node);
      })
      test('setting null, clears', () => {
        const ll = new LinkedList('A');
        expect(ll.getHead()).not.toBeNull();
        expect(ll.getHead().getData()).toEqual('A');
        expect(ll.getTail()).not.toBeNull();
        expect(ll.getTail().getData()).toEqual('A');
        expect(ll.getHead()).toBeInstanceOf(Node);
        expect(ll.getTail()).toBeInstanceOf(Node);
        ll.setTail(null);
        expect(ll.getHead()).toBeNull();
        expect(ll.getTail()).toBeNull();
      })
    })
    describe('#length', () => {
      test('nothing set', () => {
        const ll = new LinkedList();
        expect(ll.length).toEqual(0)
      })
      test('one value set on Head', () => {
        const ll = new LinkedList();
        ll.setHead('A')
        expect(ll.length).toEqual(1)
      })
      test('one value set on Tail', () => {
        const ll = new LinkedList();
        ll.setTail('A')
        expect(ll.length).toEqual(1)
      })
      test('ten values set in the linkedList', () => {
        const ll = new LinkedList();
        for (let i = 1; i <= 10; i++) {
          ll.setHead(`${i}`)
        }
        expect(ll.length).toEqual(10)
      })
    })
    describe('#append', () => {
      test('just once on a brand new', () => {
        const ll = new LinkedList();
        ll.append('A')
        expect(ll.length).toEqual(1);
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual('A')
        expect(ll.getTail().getData()).toEqual('A')
      })
      test('subsequent calls, a builder pattern', () => {
        const ll = new LinkedList();
        ll.append('A').append('B').append('C')
        expect(ll.length).toEqual(3);
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual('A')
        expect(ll.getTail().getData()).toEqual('C')
      })
    })
    describe('#appendAll', () => {
      test('just once on a brand new', () => {
        const ll = new LinkedList();
        ll.appendAll(['A'])
        expect(ll.length).toEqual(1);
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual('A')
        expect(ll.getTail().getData()).toEqual('A')
      })
      test('subsequent calls, a builder pattern', () => {
        const ll = new LinkedList();
        ll.appendAll(['A', 'B', 'C']).appendAll(['D'])
        expect(ll.length).toEqual(4);
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual('A')
        expect(ll.getTail().getData()).toEqual('D')
      })
      test('passing [], null or undefined, does nothing', () => {
        const ll = new LinkedList();
        ll.appendAll([])
        expect(ll.length).toEqual(0);
        expect(ll.getHead()).toBeNull()
        expect(ll.getTail()).toBeNull()
        ll.appendAll(null)
        expect(ll.length).toEqual(0);
        expect(ll.getHead()).toBeNull()
        expect(ll.getTail()).toBeNull()
        ll.appendAll(undefined)
        expect(ll.length).toEqual(0);
        expect(ll.getHead()).toBeNull()
        expect(ll.getTail()).toBeNull()
      })
    })
    describe('#prepend', () => {
      test('just once on a brand new', () => {
        const ll = new LinkedList();
        ll.prepend('A')
        expect(ll.length).toEqual(1);
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual('A')
        expect(ll.getTail().getData()).toEqual('A')
      })
      test('subsequent calls, a builder pattern', () => {
        const ll = new LinkedList();
        ll.prepend('C').prepend('B').prepend('A')
        expect(ll.length).toEqual(3);
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual('A')
        expect(ll.getTail().getData()).toEqual('C')
      })
    })
    describe('#prependAll', () => {
      test('just once on a brand new', () => {
        const ll = new LinkedList();
        ll.prependAll(['A'])
        expect(ll.length).toEqual(1);
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual('A')
        expect(ll.getTail().getData()).toEqual('A')
      })
      test('subsequent calls, a builder pattern', () => {
        const ll = new LinkedList();
        ll.prependAll(['A', 'B', 'C']).prependAll(['D'])
        expect(ll.length).toEqual(4);
        expect(ll.getHead()).not.toBeNull()
        expect(ll.getTail()).not.toBeNull()
        expect(ll.getHead().getData()).toEqual('D')
        expect(ll.getTail().getData()).toEqual('A')
      })
      test('passing [], null or undefined, does nothing', () => {
        const ll = new LinkedList();
        ll.prependAll([])
        expect(ll.length).toEqual(0);
        expect(ll.getHead()).toBeNull()
        expect(ll.getTail()).toBeNull()
        ll.prependAll(null)
        expect(ll.length).toEqual(0);
        expect(ll.getHead()).toBeNull()
        expect(ll.getTail()).toBeNull()
        ll.prependAll(undefined)
        expect(ll.length).toEqual(0);
        expect(ll.getHead()).toBeNull()
        expect(ll.getTail()).toBeNull()
      })
    })
    describe('#iterate',()=>{
      test('forward', () => {
        expect.assertions(6)
        const cntMap = {};
        const values = ['A', 'B', 'C', 'D']
        const ll = new LinkedList();
        ll.appendAll(values)
        expect([...ll.forward].length).toEqual(4);
        let cnt = 0;
        for (let node of ll.forward) {
          expect(node.getData()).toEqual(values[cnt++])
          cntMap[node.getData()] = true;
        }
        expect(Object.keys(cntMap)).toEqual(
          expect.arrayContaining(values),
        )
      })
      test('reverse', () => {
        expect.assertions(6)
        const cntMap = {};
        const values = ['A', 'B', 'C', 'D']
        const ll = new LinkedList();
        ll.appendAll(values)
        expect([...ll.reverse].length).toEqual(4);
        let cnt = 3;
        for (let node of ll.reverse) {
          expect(node.getData()).toEqual(values[cnt--])
          cntMap[node.getData()] = true;
        }
        expect(Object.keys(cntMap)).toEqual(
          expect.arrayContaining(values),
        )
      })
    })
    describe('#find',()=>{
      test('Callback should execute on all nodes',()=>{
        const ll = new LinkedList();
        const evenCallBack = jest.fn((cn,pn,nn,iteration,hitCount,linkedList) => cn.getData() % 2 === 0);
        ll.appendAll([1,2,3,4])
        const results = ll.find(evenCallBack,{once:false}).map(({currentNode})=>currentNode?.getData());
        expect(evenCallBack.mock.calls.length).toBe(4);
      })
      test('Callback should stop after the first passing value',()=>{
        const ll = new LinkedList();
        const evenCallBack = jest.fn((cn,pn,nn,iteration,hitCount,linkedList) => cn.getData() % 2 === 0);
        ll.appendAll([1,2,3,4])
        const results = ll.find(evenCallBack,{once:true}).map(({currentNode})=>currentNode?.getData());
        expect(evenCallBack.mock.calls.length).toBe(2);
      })
      test('test forward and reverse as options',()=>{
        const ll = new LinkedList();
        const callBack = (cn,pn,nn,iteration,hitCount,linkedList) => true;
        ll.appendAll([1,2,3,4])
        const forward = ll.find(callBack,{iterator: ll.forward, once:false}).map(({currentNode})=>currentNode?.getData());
        const reverse = ll.find(callBack,{iterator: ll.reverse, once:false}).map(({currentNode})=>currentNode?.getData());
        reverse.reverse();
        expect(forward[0]).toEqual(reverse[0]);
        expect(forward[1]).toEqual(reverse[1]);
        expect(forward[2]).toEqual(reverse[2]);
        expect(forward[3]).toEqual(reverse[3]);
      })
    })
  })
  describe('Node', () => {
    test('#constructor empty', () => {
      const nn = new Node();
      expect(nn.getData()).toBeNull()
      expect(nn.getNext()).toBeNull()
      expect(nn.getPrev()).toBeNull()
    })
    test('#constructor set', () => {
      const nn = new Node({data: 'A', next: 'B', prev: 'C'});
      expect(nn.getData()).toEqual('A')
      expect(nn.getNext()).toEqual('B')
      expect(nn.getPrev()).toEqual('C')
    })
    test('#setData', () => {
      const nn = new Node({data: 'A', next: 'B', prev: 'C'});
      nn.setData('Z')
      expect(nn.getData()).toEqual('Z')
      expect(nn.getNext()).toEqual('B')
      expect(nn.getPrev()).toEqual('C')
    })
    test('#setNext', () => {
      const nn = new Node({data: 'A', next: 'B', prev: 'C'});
      nn.setNext('Z')
      expect(nn.getData()).toEqual('A')
      expect(nn.getNext()).toEqual('Z')
      expect(nn.getPrev()).toEqual('C')
    })
    test('#setPrev', () => {
      const nn = new Node({data: 'A', next: 'B', prev: 'C'});
      nn.setPrev('Z')
      expect(nn.getData()).toEqual('A')
      expect(nn.getNext()).toEqual('B')
      expect(nn.getPrev()).toEqual('Z')
    })
  })
})