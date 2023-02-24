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



<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files intro.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- intro.md -->



# Foundations of Semantic Knowledge Graphs

#### Prof. Dr. Stefan Linus Zander 

A Framework for Encoding Semantic Knowledge Graphs – The Resource Description Framework (aka RDF){.lightgreen .Big .skip}


---
<!-- header: Overview -->
<!-- footer: Foundations of Semantic Knowledge Graphs | A Formal Introduction to Graphs | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->

# Outline

- ...


---
## RDF – The Lingua Franca for Data Integration

- RDF is **simple**
- RDF enables a **data-model-agnostic integration** ~> it **encodes and combines all kinds of data models** (relational, taxonomic, graphs, object-oriented, hierarchical, schema-driven, etc...) 
- RDF supports **distributed data** and **schemas**
- RDF allows to **seamlessly evolve** simple semantic representations (e.g. vocabularies) into more complex and expressive ones (e.g. ontologies)
- Small **representational units** (URIs / IRIs / triples) facilitate mixing and mashing
- RDF can be viewed from **many perspectives**: facts, graphs, ER, logical axioms, objects, frames etc.
- RDF **integrates well with other formalisms** such as *HTML* (RDFa), *XML* (RDF/XML), *JSON* (JSON-LD), *CSV*, .... 
- Linking and referencing between different knowlegde bases, systems, and platforms facilitates the creation of **sustainable data ecosystems** (e.g. Web of Data, DBpedia, etc.)
- RDF can be used to create **meta data annotation frameworks** for Web resources

::: footnotes
Source: Adapted and complemented from https://www.slideshare.net/soeren1611/knowledge-graph-introduction (use this source for additional slide content)
:::