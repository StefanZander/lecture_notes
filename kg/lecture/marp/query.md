---
marp: true
theme: custom-theme-roboto
paginate: true
---
<style>
/**
 * @theme enable-all-auto-scaling
 * @auto-scaling true
 */

/* @import 'default'; */
/* @import url('user-theme2.css'); */
</style>



<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files query.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- query.md -->



# Foundations of Semantic Knowledge Graphs

#### Prof. Dr. Stefan Linus Zander 

Searching and Querying Graphs  {.lightgreen .Big .skip}


---
<!-- header: Overview -->
<!-- footer: Foundations of Semantic Knowledge Graphs | A Formal Introduction to Graphs | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->

Contents




---
## Search and Query

Search and query operations on KGs can be reduced to ==graph navigation==. 

::: greenbox
**Example** For example, in a friendship KG, to obtain the friends of the friends of a person A, one can first navigate the graph from A to all nodes B connected to it by a relation labeled as friend. One can then recursively navigate to all nodes C connected by the friend relation to each B. 
:::


- Directed labeled graph representation and graph algorithms are effective for several classes of problems (NAME THEM). 
- They are, however, insufficient to capture all inferences of interest. 
- We will discuss this in more detail in a later section on big semantics versus little semantics.

::: footnotes
Source: https://onlinelibrary.wiley.com/doi/full/10.1002/aaai.12033
:::