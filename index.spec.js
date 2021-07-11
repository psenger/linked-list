const { LinkedList } = require('./src/com/cngr/index');
describe('All',() => {
    describe('LinkedList',()=>{
        let linkedList;
        beforeEach(() => {
            linkedList = 'BCD'
                .split('')
                .reduce((acc,v)=>acc.setTail(v),new LinkedList());
        })
        describe('#clear', ()=>{
            test('clear should work on full linkedList',()=>{
                expect( linkedList.size ).toEqual( 3 );
                linkedList.clear();
                expect( linkedList.size ).toEqual( 0 );
            });
            test('clear should work on empty linkedList',()=>{
                const tempLinkedList = new LinkedList();
                expect( tempLinkedList.size ).toEqual( 0 );
                tempLinkedList.clear();
                expect( tempLinkedList.size ).toEqual( 0 );
            });
        })
        describe('#size', ()=>{
            test('Size should return the original value',()=>{
                expect( (new LinkedList()).size ).toEqual( 0 )
            });
            test('Size should return a modified size',()=>{
                expect(linkedList.size).toEqual(3)
                linkedList.setHead('A')
                linkedList.setTail('E')
                expect(linkedList.size).toEqual(5)
            });
            test('Size should return a cleared size',()=>{
                expect(linkedList.size).toEqual(3)
                linkedList.clear()
                expect(linkedList.size).toEqual(0)
            });
        })
        describe('@iterator',()=>{
            test('Should not fail or iterate on empty',()=>{
                const tempLinkedList = new LinkedList();
                expect(tempLinkedList.size).toEqual(0)
                let iterated = false
                for (let node of tempLinkedList) {
                    iterated = true;
                }
                expect( iterated ).toEqual( false );
            })
            test('Should iterate on all',()=>{
                expect(linkedList.size).toEqual(3)
                let count = 0
                for (let node of linkedList) {
                    count++;
                }
                expect( count ).toEqual( 3 );
            })
        })
        describe('#head',()=>{
            test('Newly created LinkedList head is null',()=>{
                const tempLinkedList = new LinkedList();
                expect(tempLinkedList.getHead()).toBeNull()
            });
            test('Head should be set',()=>{
                expect(linkedList.getHead()).not.toBeNull()
                expect(linkedList.getHead().data).toEqual('B')
            })
            test('Head should be set after addHead',()=>{
                linkedList.setHead('A')
                expect(linkedList.getHead()).not.toBeNull()
                expect(linkedList.getHead().data).toEqual('A')
            })
        })
        describe('#tail',()=>{
            test('Newly created LinkedList tail is null',()=>{
                const tempLinkedList = new LinkedList();
                expect(tempLinkedList.getTail()).toBeNull()
            });
            test('Tail should be set',()=>{
                expect(linkedList.getTail()).not.toBeNull()
                expect(linkedList.getTail().data).toEqual('D')
            });
            test('Tail should be set after setTail',()=>{
                linkedList.setTail('E')
                expect(linkedList.getTail()).not.toBeNull()
                expect(linkedList.getTail().data).toEqual('E')
            })
        })
        describe('#data',() => {
            test('get/set on the node',()=>{
                for (let node of linkedList) {
                    expect( node.data ).not.toBeNull();
                    node.data  = 100;
                }
                for (let node of linkedList) {
                    expect( node.data ).toEqual( 100 )
                }
            })
        })
    });
})
