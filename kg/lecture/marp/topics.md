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



<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files topics.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- topics.md -->



# Foundations of Semantic Knowledge Graphs

#### Prof. Dr. Stefan Linus Zander 

Topics for the Student Lectures {.lightgreen .Big .skip}


---
<!-- header: Topics -->
<!-- footer: Foundations of Semantic Knowledge Graphs | Topics for the Student Lectures | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->

<!-- ## Preamble / Instructions

- The topics for the student lectures (aka semester project) are listed on the following slides
- Students should form groups of 2-3 people and 
 -->


## An Introduction to the Shapes Constraint Language (SHACL) 

SHACL is a language for validating RDF graphs against a set of conditions. These conditions are provided as shapes and other constructs expressed in the form of an RDF graph. SHACL shape graphs may be used for a variety of purposes beside validation, including user interface building, code generation and data integration.


**Resources**:
- https://www.w3.org/TR/shacl/
- https://book.validatingrdf.com/bookHtml011.html
- https://shacl.org/playground/
- https://www.ida.liu.se/~robke04/SHACLTutorial/Introduction%20to%20SHACL.pdf
- Chapter 7 of the Book: Aiden Hogan (2020). "The Web of Data", Springer (available in Moodle)




---
## Shape Expressions (ShEx)

Shape Expressions (ShEx) is a schema language for describing RDF graphs structures. ShEx was originally developed in late 2013 to provide a human-readable syntax for OSLC Resource Shapes. It added disjunctions, so it was more expressive than Resource Shapes. Strictly speaking, a ShEx schema defines a set of graphs. This can be used for many purposes, including communicating data structures associated with some process or interface, generating or validating data, or driving user interface generation and navigation. At the core of all of these use cases is the notion of conformance with schema. Even one is using ShEx to create forms, the goal is to accept and present data which is valid with respect to a schema.

**Resources**
- https://shex.io/
- https://book.validatingrdf.com/bookHtml010.html
- Chapter 7 of the Book: Aiden Hogan (2020). "The Web of Data", Springer (available in Moodle)
- https://github.com/shexSpec/shex/wiki/ShEx 



---
## Popular KG-Systems (e.g. Neo4J)

Neo4j is a graph database management system designed for storing and managing connected data. It is an open-source NoSQL database that uses graph structures to represent and store data. Neo4j supports ACID (Atomicity, Consistency, Isolation, Durability) transactions and provides a powerful query language called Cypher, which allows users to query and manipulate data stored in the graph. Neo4j is commonly used in applications where relationships between data are important, such as social networks, recommendation engines, and fraud detection systems. It is widely used in industries such as finance, healthcare, retail, and transportation.

**Resources**
- https://neo4j.com/
- https://github.com/neo4j/neo4j
- https://www.tutorialspoint.com/neo4j/neo4j_overview.htm
- A Brief Introduction to Graph Data Platforms: https://neo4j.com/blog/graph-data-platforms-a-brief-introduction/
- https://technology2544.rssing.com/chan-20379715/latest.php
  


---
## In-Depth Cypher-Tutorial

Cypher is a query language designed specifically for Neo4j graph databases. It is a declarative language that allows users to query, manipulate, and update data stored in a graph. Cypher uses a pattern-matching syntax that makes it easy to express complex graph queries in a simple and intuitive way. Cypher is a powerful and expressive language that can be used for a wide range of graph-related tasks, such as pattern matching, data aggregation, and graph traversal.

**Resources**
- https://neo4j.com/developer/cypher/
- https://neo4j.com/docs/getting-started/current/cypher-intro/
- https://opencypher.org/



---
## Knowledge Graphs and Natural Language Processing (NLP)

Present and discuss the role, application, and use cases of KGs in NLP. 

**Resources**
- Language Models are Open Knowledge Graphs: https://arxiv.org/abs/2010.11967
- https://www.youtube.com/watch?v=NAJOZTNkhlI&ab_channel=YannicKilcher
- Building a Knowledge Base from Texts: a Full Practical Example
  https://medium.com/nlplanet/building-a-knowledge-base-from-texts-a-full-practical-example-8dbbffb912fa
- A collection of many materials about KGs and related areas:
  https://github.com/heathersherry/Knowledge-Graph-Tutorials-and-Papers
- Mining Knowledge Graphs from Text
  https://kgtutorial.github.io/




---
## Knowledge Graph Question Answering (KGQA)

KGQA systems convert a natural language question into a query to a particular Knowledge Graph, thus allowing the user to access “knowledge” without having to learn a query language (e.g. SPARQL).

**Resources**
- https://github.com/heathersherry/Knowledge-Graph-Tutorials-and-Papers/blob/master/topics/Knowledge%20Graph%20Question%20Answering%20(KGQA).md
- Word Senses and WordNet: https://web.stanford.edu/~jurafsky/slp3/23.pdf
- https://web.stanford.edu/~jurafsky/slp3/
- https://towardsdatascience.com/the-new-benchmark-for-question-answering-over-knowledge-graphs-qald-9-plus-da37b227c995
  


---
## Knowledge Graphs and Machine Learning

Knowledge Graphs (KGs) and their underlying semantic technologies are the modern implementation of symbolic AI. While being less flexible and robust to noise compared to deep learning models, KGs are natively developed to be explainable. Discuss and present areas and case studies in which KGs can be used to improve or enhance machine learning tasks.

**Resources**
- On the Integration of Knowledge Graphs into Deep Learning Models for a More Comprehensible AI—Three Challenges for Future Research: https://www.mdpi.com/2078-2489/11/2/122/htm
- https://neo4j.com/blog/future-ai-machine-learning-knowledge-graphs/




---
## Choose a Topic of your own and discuss it with your lecturer

e.g. Utilization of KGs for Chatbots