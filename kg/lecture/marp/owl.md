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



<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files owl.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- owl.md -->



# Foundations of Semantic Knowledge Graphs

#### Prof. Dr. Stefan Linus Zander 

Integrating Ontologies and Ontology Language OWL {.lightgreen .Big .skip}


---
<!-- header: Overview -->
<!-- footer: Foundations of Semantic Knowledge Graphs | A Formal Introduction to Graphs | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->

## Preamble: What makes a data graph a knowledge graph ?

We have learned about the different types of data graphs and the elements that constitute a data graph.

In order to transform a data graph into a knowledge graph, we need additional features:
- *Identity*
- *Schema knowledge*
- *Contextual knowledge*
- *Semantics* 

...and we need a ==knowledge representation framework== in which these features can be encoded

::: redbox center spacebefore
$\leadsto$ We therefore discuss **RDF** and the __RDF Schema data-modelling vocabulary__ that allow for the creation of knowledge graphs
:::


---
## Components of OWL Ontologies

Individuals
- Individuals represent objects in the domain of interest
- OWL does not use the UNA, ie., two different names could refer to the same individual
- In OWL, we must clearly specify for individuals whether they are the same or different from each other

Properties 
- Properties represent binary relations on individuals $\leadsto$ properties link two individuals together
- Properties can have different characteristics (being inverse, functional, inverse functional, symetric etc)
- Properties are calles roles in description logics or slots in Protégé

Classes
- OWL interprets classes as sets that contain individuals
- Classes are described using precise formal descriptions that state precisely the requirements for membership
- Classes can be organized in a super-subclass-hierarchies called a taxonomy
- Classes are sometimes denoted as concepts – but classes are concrete representations of concepts



---
## Classes in OWL

In OWL classes are built up of descriptions that specify the conditions that must be satisfied by an individual for it to be a member of the class.
