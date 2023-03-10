---
marp: true
theme: custom-theme-roboto
paginate: true
size: 16:9
math: mathjax
---
<style>
/**
 * @theme enable-all-auto-scaling
 * @auto-scaling true
 */

/* @import 'default'; */
/* @import url('user-theme2.css'); */
</style>



<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files data_graphs.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- data_graphs.md -->



# Foundations of Semantic Knowledge Graphs

#### Prof. Dr. Stefan Linus Zander 

Data Graphs {.lightgreen .Big .skip}


---
<!-- header: Overview -->
<!-- footer: Foundations of Semantic Knowledge Graphs | Data Graphs | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->

## What you will learn in this Lecture


We first discuss a __selection of graph-structured data models__ that are commonly used in practice to represent data graphs. 

We then discuss the primitives that form the basis of __graph query languages__ used to interrogate such data graphs.



---
## Didactical Model

- At the core, we start with a mathematical definition and representation of graphs
- we then use extend these definition towards a graph-based model in CS
- We introduce data graphs and discuss different types and models
- We then add schema, identity, and context to transform data graphs into knowledge graphs
- We add semantics and ontologies to build semantic knowledge graphs and introduce a representation framework for SKGs

:::: bluebox center marg2
**Didactical Model**
This lecture uses a continuum of _increasing "intelligence"_ as a didactical model to explain the the additions needed for the transition of simple data graphs towards semantic knowledge graphs. 
::::


---
## A Graph-based Data Representation provides a number of Advantages over other, traditional Data Models

Why there is a need for data graphs

::::: columns
:::: single
- Requirements and peculiarities of domains of interest are often not fully known at the beginning
- Additional features might needed
  - multi-language support
  - multiple names and descriptions
  - multiple types
  - incomplete or missing information might harm schema compliance
- Schemas might evolve over time as the complexity of the domain of interest increases
- Schema adaptations are expensive and require lots of testing and validation
  - remodelling, reloading, and reindexing of data needed
- Diversity 

::::
:::: single
**Example**

Initial schema for an event database (table with 5 columns)
$$
Event(\underline{name}, venue, type, \underline{start}, end)
$$
A more flexible and elaborated schema solution

$$
EventName(id,name), EventStart(id,start), EventEnd(id,end), EventVenue(id,venue), EventType(id,type) 
$$

$$
f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi
$$

Remodelling often results in binary relations between entities --> close to modelling a graph

::: bluebox center small
Using a data-graph model removes the necessity of an upfront schema and facilitates refinements
:::
::::
:::::



---
## Overview of the different Types of Data Graphs

1. Directed Edge-Labelled Graphs
2. Heterogeneous Graphs
3. Property Graphs
4. Graph Datasets
5. Other Graph Data Models
6. Graph Stores



---
## Directed Edge-Labelled Graphs

::: definition
A ==directed edge-labelled graph== is a tuple $G = (V, E, L)$, where $V \subseteq \mathbf{Con}$ is a set of nodes, $L \subseteq \mathbf{Con}$ is a set of edge labels, and $E = V \times L \times V$ is a set of edges with $\mathbf{Con}$ being a countable infinite set of constants.

Source: https://kgbook.org/
:::


::::: columns
:::: single 
**Remarks**
- $V$ and $L$ are not disjoint, ie., a node can also serve as an edge-label.
- Nodes and edge labels can be present without any associated edge.
- The above definition can be extended by the previous restrictions if necessary 
  - some graph databases implement these restrictions
::::
:::: single
**Characteristics**
- _nodes_ are used to represent entities
- _edges_ are used to represent binary relations between those entities.
- A directed edge-labelled graph is sometimes known as a _multi-relational graph_
- Adding information typically involves adding new nodes and edges
- Incomplete information is expressed by omitting a particular edge (eg. start- and/or end-time)
::::
:::::



---
## Example

::: center
![width:1000px](figures/directed_labelled_graph_example.svg)
:::


---
## Advantages compared to the Relational Model

::::: columns
:::: single
**Advantages**
- Modelling data as a graph in this way offers more flexibility for integrating new data sources, compared to the standard relational model, where a schema must be defined upfront and followed at each step. 
- While other structured data models such as trees (XML, JSON, etc.) would offer similar flexibility, graphs do _not require organising the data hierarchically_. 
- Graphs also allow _cycles_ to be represented and queried (e.g., note the directed cycle in the routes between Santiago, Arica, and Viña del Mar).
::::
:::: single
**Representation Framework**
- The ==Resource Description Framework (RDF)==^1^ is a standardized data model and based on the directed edge-labelled graph model
- RDF defines different types of nodes and uses IRIs for the global identification of entities across the Web
- Literals allow for the representation of strings and other datatype values
- blank nodes can be used to represent n-ary relationships
::::
:::::

::: footnotes
^1^ Link to RDF
:::


---
## The foundation of any knowledge graphs rests on the principle of first applying a graph abstraction to data

...


---
## Heterogeneous Graphs

::: definition
A ==heterogeneous graph== is a tuple $G = (V, E, L, l)$, where $V \subseteq \mathbf{Con}$ is a set of nodes, $L \subseteq \mathbf{Con}$ is a set of edge/node labels, and $E = V \times L \times V$ is a set of edges with $\mathbf{Con}$ being a countable infinite set of constants, and $l : V \rightarrow L$ maps each node to a label.

Source: https://kgbook.org/
:::


**Additional Remarks**
- A ==heterogeneous graph== is a _directed graph_ where _each node and each edge is assigned one type_
- They are sometimes called __heterogeneous information network__
- In heterogeneous graphs, _edge_ and _node labels_ are often called ==types==.
- Heterogeneous graphs allow for _partitioning nodes_ according to their type to facilitate machine learning tasks
- By rather defining edges with labels (as in directed edge-labelled graphs) – rather than separately labelling edges with $l$ – two nodes can be related by $n$ edges with $n$ different labels;


---
## Example and further Characteristics

::::: columns
:::: single
::: bluebox
**Characteristics**
- Edge labels correspond to ==edge types==
  - The node type forms part of the graph model itself rather than being expressed with a relation
- An edge is called ==homogeneous==, if it is between two nodes of the same type
  - e.g., (City:Munich) partner_town_of (City:Edinburgh)
- If the **type** between two adjacent nodes is different, the edge is called ==heterogeneous==
- Such graphs typically only support **many-to-one relations** between nodes and types 
  - as opposed to directed edge-labelled graphs which can contain untyped nodes
:::
::::
:::: single
**Examples**
::: center
![](figures/heterogeneous_graph.png)
:::
::::
:::::



---
## Property Graphs

::: definition
A ==property graph== is a tuple $G = (V, E, L, P, U, e, l, p)$, where 
- $V \subseteq \mathbf{Con}$ is a set of ==node ids==, 
- $L \subseteq \mathbf{Con}$ is a set of ==labels==, 
- $P \subseteq \mathbf{Con}$ is a set of ==properties==, 
- $U \subseteq \mathbf{Con}$ is a set of ==values==,
- $e = E \rightarrow V \times V$ maps an edge id to a pair of node ids,
- $l = V \cup E \rightarrow 2^{L}$ maps a node or edge id to a set of labels,
- and $p = V \cup E \rightarrow 2^{P \times U}$ maps a node or edge id to a set of property-value pairs.

Source: https://kgbook.org/
:::

**Additional Remarks**
- Property graphs constitute an _alternative graph model_ that offers _additional flexibility_ when modelling more complex relations. 
  - In the previous graph models, it is not possible to add additional information to relation, e.g., to state the price of a connection between towns
- A property graph allows a set of **property–value pairs** and a **label** to be associated with both nodes and edges.
- According to the above state defintion, a node or edge can have several values for a given property. In practice, systems like Neo4j may rather support this by allowing a single array (i.e., list) of values.



---
## Example

::::: columns-center
:::: single
::: bluebox small
**Summary**

- In summary, directed edge-labelled graphs offer a more minimal model, while property graphs offer a more flexible one. 
- Often the choice of model will be secondary to other practical factors, such as the implementations available for different models, etc.
- Property graphs are prominently used in graph databases, such as Neo4j.
- Property graphs can be converted to/from directed edge-labelled graphs
:::
::::
:::: double
::: center
![width:600px](figures/property_graphs.png)
::::
