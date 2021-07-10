const { LinkedList, Node } = require('./src/com/cngr/linkedlist/index');

const linkedList = 'BCD'
    .split('')
    .reduce((acc,v)=>acc.setTail(v),new LinkedList());

linkedList.setHead('A')
linkedList.setTail('E')

console.log('linkedList=', JSON.stringify(linkedList, null, 4));
console.log('size = ', linkedList.size );

for (let node of linkedList) {
    console.log('node=',JSON.stringify(node, null, 4));
}

linkedList.clear();

console.log('linkedList=', JSON.stringify(linkedList, null, 4));
console.log('size = ', linkedList.size );
