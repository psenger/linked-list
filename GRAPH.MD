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

## Note

If you are unable to view these graphs in the browser, you can install the
[github-mermaid-extension Browser Extension](https://github.com/BackMarket/github-mermaid-extension).
These graphs written in [Mermaid JS](https://mermaid-js.github.io/mermaid/#/) alternatively
simply copy and paste them into this online [Mermaid Live Editor](https://mermaid-js.github.io/mermaid-live-editor/edit)
