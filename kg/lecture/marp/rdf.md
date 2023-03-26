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



<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files rdf.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- rdf.md -->



# Foundations of Semantic Knowledge Graphs

#### Prof. Dr. Stefan Linus Zander 

A Framework for Encoding Semantic Knowledge Graphs – The Resource Description Framework (aka RDF){.lightgreen .Big .skip}


---
<!-- header: Overview -->
<!-- footer: Foundations of Semantic Knowledge Graphs | A Formal Introduction to Graphs | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->

# Outline

- ...


---
## RDF – The Lingua Franca for Data Integration – TODO: MOVE

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



---
## The Resource Description Framework (RDF)

::::: columns
:::: quad
==RDF== is a _W3C standard for exchanging graphs_
- First proposed in 1999
- Updated in 2004 (RDF 1.0) and in 2014 (RDF 1.1)
- Originally built for Web data exchange
- Meanwhile used in many graph database applications
- Supported by many other _W3C standards_ (RDFa, SPARQL, OWL, SHACL, . . . )

In this course: **focus on graph representation features of RDF 1.1**

_W3C creates open standards_: patent-free & freely accessible
- Gentle RDF 1.1 introduction: https://www.w3.org/TR/rdf11-primer/
- Specification of graph model: https://www.w3.org/TR/rdf11-concepts/
- Specific file formats are defined in other documents, linked from those

::::
:::: single center
![width:150px](figures/rdf_logo.png)
::::
:::::

::: footnotes
W3C = World Wide Web Consortium
:::


---
## How to represent data in RDF

**RDF** allows for specifying graphs that are:
- *directed* (edges have a source and a target)
- _edge-labelled_ (edges have one label)
- a restricted form of _multi-graphs_ (multiple edges can exist between same vertices, but only if they have different labels)

**Example**
```graphviz
digraph G {
    graph [rankdir=LR];
    nodesep=1.0;
    label="A example RDF graph"; 
    //{rank=same; 1;};
    //{rank=same; 2; 4;};
    //{rank=same; 3;};
    1 [label="Greenhouse Effect"];
    2 [label="Jospeh Fourier"];
    3 [label="1824"];
    4 [label="Auxerre"];
    5 [label="1768-03-21"];
    6 [label="France"];
    1 -> 2 [label="discovered by"];
    1 -> 3 [label="discovered in"];
    2 -> 4 [label="birthplace"];
    2 -> 5 [label="birthdate"];
    4 -> 6 [label="country"];
}
```


---
## Identifiers in RDF: How should we refer to vertices?

::: definition
A ==Uniform Resource Identifier (URI)== is a sequence (string) of a subset of ASCII characters as defined in RFC 3986 (link). Every (absolute) URI consists of a string that defines a ==scheme==, followed by a colon (:) and another sequence of characters specifying an ==authority==, ==path==, ==query==, and ==fragment==, where all parts other than the path are optional.

A ==International Resource Identifier (IRI)== is a generalised form of URI that allows for an expanded range of Unicode glyphs in part of its syntax.

Source:  Adapted from Krötzsch
:::

Example
```
URI = scheme ":" ["//" authority] path ["?" query] ["#" fragment]
```

```
      |-------------------- Schema-spezifischer Teil ----------------------|
      |                                                                    |
https://maxmuster:geheim@www.example.com:8080/index.html?p1=A&p2=B#ressource
\___/   \_______/ \____/ \_____________/ \__/\_________/ \_______/ \_______/
  |         |       |           |         |       |          |         |
Schema¹ Benutzer Kennwort      Host      Port    Pfad      Query    Fragment
```


---
## RDF uses IRIs in two ways: to define resources that appear as vertices, and as edge labels

```graphviz
digraph G {
    //graph [rankdir=LR];
    node [fontname="Barlow Semi Condensed", fontsize=14];
    edge [fontname="Barlow Semi Condensed", fontsize=14];
    nodesep=1.0;
    //label="A example RDF graph"; 
    //{rank=same; 1;};
    //{rank=same; 2; 4;};
    //{rank=same; 3;};
    1 [label="<http://dbpedia.org/resource/Greenhouse_effect>"];
    2 [label="<http://dbpedia.org/resource/Joseph_Fourier>"];
    3 [label="1824"];
    4 [label="<http://dbpedia.org/resource/Auxerre>"];
    5 [label="1768-03-21"];
    6 [label="<http://dbpedia.org/resource/France>"];
    1 -> 2 [label="<http://dbpedia.org/ontology/discoverer>"];
    1 -> 3 [label="<http://dbpedia.org/ontology/discoveredIn>"];
    2 -> 4 [label="<http://dbpedia.org/ontology/birthplace>"];
    2 -> 5 [label="<http://dbpedia.org/ontology/birthdate>"];
    4 -> 6 [label="<http://dbpedia.org/ontology/country>"];
}
```


---
## Which IRIs to use in an RDF Graph?

Where do the **IRIs** that we use in graphs come from?
- _They can be newly created for an application_ ==$\leadsto$ avoid confusion with resources in other graphs :fas-bomb:==
- _They can be IRIs that are already in common use_ ==$\leadsto$ support information integration and re-use across graphs :far-thumbs-up:==

::: bluebox spacebefore
**Guidelines for creating new IRIs:**
1. Check if you could re-use an existing IRI $\leadsto$ avoid duplication if feasible
2. Use http(s) IRIs $\leadsto$ useful protocols, registries, resolution mechanisms
3. Create new IRIs based on domains that you own $\leadsto$ clear ownership; no danger of clashing with other people’s IRIs
4. Don’t use URLs of existing web pages, unless you want to store data about pages $\leadsto$ avoid confusion between pages and more abstract resources
5. Make your IRIs return some useful content via http(s) $\leadsto$ helps others to get information about your resources
:::

::: footnotes
Source: Krötzsch
:::



---
## Why IRIs?

**URIs may seem a bit complicated**
- They look a bit technical and complex
- They are hard to display or draw in a graph
- The guidelines just given may seem quite demanding to newcomers

**However, it’s not that hard**
- RDF can work with any form of IRI (most tools would probably accept any Latin-letter string with a colon inside!)
- The guidelines help sharing graphs across applications – a strength of RDF
- Internet domain name registration is a very simple way to define ownership in a global data space
- IRIs should not be shown to users (we will introduce human-readable labels soon)

::: footnotes
Source: Krötzsch
:::




---
## Content Negotiation


---
## Design Principles of RDF

::: grid2col widthauto
- RDF statements use **Uniform Resource Identifiers (URIs)** as names for things.
- RDF statements make use of **RDF properties** and **RDF classes**. 
- Properties and classes are defined in **RDF vocabularies**. 
- RDF vocabularies defined with **specific axioms** are called ==ontologies==. 
- RDF vocabularies are typically published in structured, machine-readable and resolvable schemas on the Web. 
- RDF vocabularies are published on the Web in order to encourage their **re-use**. 
- RDF is a language designed by humans for **processing by machines**. 
  - The RDF language — the grammar together with available RDF vocabularies — does not itself solve the **difficulties** of **human communication** around data and semantics. 
  - The specific strength of RDF derives from how the **triple structure** supports the process of **creating knowledge** by providing a **linguistic basis** for **expressing** and **linking data**.

![width:150px](figures/rdf_logo.png)
:::

::: footnotes
Source: Baker-Coyle-Petiya: Multi-Entity Models of Resource Description in the Semantic Web: A comparison of FRBR, RDA, and BIBFRAME. Published in: Library Hi Tech, v. 32, n. 4, 2014 pp 562-582 DOI:10.1108/LHT-08-2014-0081 (Awarded "Outstanding Paper 2015" by Emerald)
:::



---
## Design Principles of RDF

- **"Anyone can say anything about anything."**
  - RDF was designed to accommodate multiple sources of information reflecting multiple points of view. 
  - The grammar of RDF triples was designed to help merge data from multiple sources by leveraging shared URIs to align layers of information in a unified whole. 
  - The specific strength of RDF lies in how its data structure accommodates multiple sources and viewpoints.

- **Open World Assumption (OWA)**
  - As a matter of principle, the information available at any given time may be incomplete. 
  - In the Closed World Assumption, the information at hand defines the boundaries of what is known. 
  - Closed-world systems are appropriate for information environments designed to capture all known facts; Systems based on the OWA are optimized for environments in which knowledge or scholarly opinion is a moving target and expected to evolve, change, or contradict itself.

- **Non-Unique Naming Assumption (NUNA)**
  - As a matter of principle, things described in RDF data can have more than one name. Because URIs are used in RDF as names, anything may be identified by more than one URI.
  - Things are not assumed to be different because they have different names.