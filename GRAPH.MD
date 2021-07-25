# Graphs

## Initial State Diagrams.

```mermaid
graph LR
  subgraph Head != Tail and filled with N Nodes
  G((LinkedList)) --Head--> H((Node ^))
  G((LinkedList)) --Tail--> I((Node ^^))
  H-. N Nodes .-> I
  I-. N Nodes .-> H
  H-. prev .->J[null]
  I-. next .->K[null]
  end
  subgraph Head and Tail are null
  A((LinkedList)) --Head--> B[null]
  A((LinkedList)) --Tail--> B[null]
  end
  subgraph Both Head and Tail are the same Node
  D((LinkedList)) --Head--> E((Node))
  D((LinkedList)) --Tail--> E((Node))
  E-. prev .->V[null]
  E-. next .->W[null]
  end
```
