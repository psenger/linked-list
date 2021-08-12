## Example Usage

```javascript
const LinkedList = require('./LinkedList');

const ll = new LinkedList();
ll.append('A').append('B').append('C')
for (let node of ll.forward) {
  console.log(node.getData());
}
console.log('head=',ll.getHead().getData());
console.log('tail=',ll.getTail().getData());
```
