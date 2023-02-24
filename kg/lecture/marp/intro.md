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

A Formal Introduction to Graphs {.lightgreen .Big .skip}


---
<!-- header: Overview -->
<!-- footer: Foundations of Semantic Knowledge Graphs | A Formal Introduction to Graphs | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->

# Outline

- ...


---
## Preamble

This modul provides a practical insights into current state-of-the-art technologies for knowledge graph engineering, application, and utilization.

It introduces methods, technologies, and concepts 



---
<!-- header: Introduction -->
## Graph Theory :fa-bomb:

In this part of the lecture, we consider graphs from a formal, _mathematical_ perspective.




---
## What are the Goals of this Course ?

- to motivate and give a comprehensive introduction to knowledge graphs: 
- describe their foundational data models and how they can be queried; 
- discuss representations relating to schema, identity, and context;  
- discuss deductive and inductive ways to make knowledge explicit; 
- present a variety of techniques that can be used for the creation and enrichment of graph-structured data; 
- describe how the quality of knowledge graphs can be discerned and how they can be refined; to 
- discuss standards and best practices by which knowledge graphs can be published; and to 
- provide an overview of existing knowledge graphs found in practice. 

Our intended audience includes researchers and practitioners who are new to knowledge graphs. As such, we do not assume that readers have specific expertise on knowledge graphs.



---
## Knowledge Graphs in the Gartner Hype Cycle


:::: center
![height:500px](figures/gartner_hype_cycle_2020.png)
::::

::: footnotes
Source: ....
:::


---
## A Brief History of Knowledge Graphs

- The modern incarnation of the term stems from the 2012 announcement of the Google Knowledge Graph
- Now, every big company has their own knowledge graph
  - Airbnb [87], Amazon [298], eBay [417], Facebook [387], IBM [128], LinkedIn [224], Microsoft [482], Uber [214]
- The industrial uptake makes it hard for academia to ignore KGs
- The core idea of using graphs is to represent data, often enhanced with some way to explicitly represent knowledge

::: footnotes
Sources: 
https://blog.google/products/search/introducing-knowledge-graph-things-not/
https://blog.google/products/search/about-knowledge-graph-and-knowledge-panels/
:::



---
## Knowledge Graphs are Everywhere 

**Search Engine Optimization and Web Commerce**
- Schema.org used by >20% of Web sites (source)
- Mayjor search engines exploit semantic descriptions (example)

**Pharma and Lifesciences**
- Mature and comprehensive vocabularies and ontologies (examples)
- Billions of disease, drug, clinical trial descriptions

**Digital Libraries**
- Many established vocabularies (DublinCore, FRBR, EDM)
- Millions of aggregated from thousands of memory institutions on Europeana, German Digital Library

::: footnotes
Source: https://www.slideshare.net/soeren1611/knowledge-graph-introduction (Slide 34)
:::



---
##  Key Application Areas for Knowledge Graphs

Two key applications that have led to a surge in popularity of KGs are: 
1. integration and organization of information about known “entities,” either as an openly accessible resource on the web, or as a proprietary resource within an enterprise/organization; and 
2. representation of input and output information for AI/ML algorithms. These application use cases are explored further in the following sections.

::: footnotes
Source: Chaudhri, V. K., Baru, C., Chittar, N., Dong, X. L., Genesereth, M., Hendler, J., Kalyanpur, A., Lenat, D., Sequeda, J., Vrandečić, D., and Wang, K. 2022. “ Knowledge graphs: Introduction, history, and perspectives.” AI Magazine 43: 17–29. https://doi.org/10.1002/aaai.12033
:::


---
## Knowledge Graphs allow for organizing open Information


::::: columns
:::: triple
- Wikidata is a collaboratively edited open KG that provides data for Wikipedia and for other uses on the web.

- the Wikidata KG can help enhance and improve the quality of information in Wikipedia

- Semantic KGs might employ terms whose semantics are defined on the basis of logical theories
- the entailment regimes computed by inference engines allow for deriving relationships that are not inherently present
- When other open KGs use well-known vocabularies with commonly defined semantics, entities can be linked together (e.g. using schema.org)
- Annotations described using Schema.org 

- https://datacommons.org/ is another publicly available large KG that incorporates data from many different, mostly governmental sources and authorities such as 
  - demographics (US Census, Eurostat), 
  - economics (World Bank, Bureau of Labor Statistics, Bureau of Economic Analysis)
  - health (World Health Organization, Center for Disease Control)
  - climate (Intergovernmental Panel on Climate Change, National Oceanic and Atmospheric Administration) 
  - sustainability (...)
::::
:::: double 
::: graybox smaller
**Example** 
Consider the Wikipedia page for the town, Winterthur4, which includes a list of all of Winterthur's twin towns: two are in Switzerland, one in the Czech Republic, and one in Austria. Wikipedia also has an entry for the city, Ontario, in California5, which lists Winterthur as its sister city. The “sister city” and “twin city” relationships are meant to be identical as well as reciprocal. Thus, if a city A is a sister (twin) of another city B, then B must be a sister (twin) of A. In Wikipedia, “Sister cities” and “Twin towns” are simply section headings without any relationship/linkage specified between the two. Therefore, it is difficult to detect this discrepancy automatically. In contrast, the Wikidata representation of Winterthur6 includes a relationship called twinned administrative body, which includes the city of Ontario, CA. As this relationship is defined to be a symmetrical relationship in the KG, a SPARQL query engine can infer that the Wikidata page for the city of Ontario, CA is to be linked to the Wikidata page of Winterthur.
:::
::::
:::::



---
## What are the Benefits of Knowledge Graphs

A _graph-based abstraction_ of knowledge has numerous benefits in professional scenarios when compared with traditional data organisation systems such as the relational model or NoSQL alternatives.
- Graphs provide a ==concise and intuitive abstraction== for a variety of domains, where edges capture the relations between the entities inherent in the domain.
- Graphs allow maintainers to ==postpone the definition of a schema==, allowing the data and its scope to evolve in a more flexible manner than typically possible in a relational setting, particularly for capturing _incomplete knowledge_.
-  Unlike (other) NoSQL models, ==specialised graph query languages== support not only standard relational operators (joins, unions, projections, etc.), but also _navigational operators_ for recursively finding entities connected through _arbitrary-length paths_.
-  ==Standard knowledge representation formalisms== – such as _ontologies_ and _rules_ – can be employed to define and reason about the _semantics_ of the terms used to label and describe the nodes and edges in the graph.
-  ==Scalable frameworks for graph analytics== can be leveraged for computing centrality, clustering, summarisation, etc., in order to gain insights about the domain being described. 
-  Various representations have also been developed that support applying ==machine learning techniques== directly over graphs.
  
::: bluebox center
In summary, the decision to build and use a knowledge graph opens up a range of techniques that can be brought to bear for integrating and extracting value from diverse sources of data.
:::



---
## Knowledge Graphs support the Organization of Enterprise Information

Data integration is essential to the functioning of modern enterprises where corporate data typically reside across many distinct databases and unstructured sources.

Companies can create a "360-degree-view" of its customers by aggregating data from different external sources. (--> tracking user behaviour and relating it to internal data for more effective business operations)

The data integration process for creating the 360-degree view of a customer might begin with knowledge engineers working with business analysts to sketch out a schema of the key entities, events, and the relationships that they are interested in tracking (see Figure 2).

The meaning of the data stored in enterprise databases is hidden in logic embedded in queries, data models, application code, written documentation, or simply in the minds of subject matter experts requiring both human and machine effort in the mapping process.

Let us consider new and exciting aspects of the use of KGs for data integration. 
1. First, the integrated information may come from text and other unstructured sources (for example, news, social media, and others) as well as structured data sources (for example, relational databases). As many information extraction systems already output information in triples, using a generic schema of triples substantially reduces the cost of starting such data integration projects.

2. Second, it can be easier to adapt a triple-based schema in response to changes than the comparable effort required to adapt a traditional relational database. This is because a relational system is typically modeled to support the application (McComb 2018), and thus, schema changes often require database reorganization.

3. Lastly, modern KG engines are highly optimized for answering questions that require traversing the graph relationships in the data. 

Due to the relative ease of creating and visualizing the schema and the availability of built-in analytics operations, KGs are becoming a popular solution for turning data into intelligence in the enterprises.

::: footnotes
Source: https://onlinelibrary.wiley.com/doi/full/10.1002/aaai.12033
:::




---
# The Impact of Knowledge Graphs is already visible 



---
## Applications: Knowledge Graphs influence Search Behaviour

Based on Rand Fishkin’s latest study (see sources), more than 50% of searches result in no clicks.

::::: columns
:::: single
![](figures/google_search_click_study.png)
::::
::::single
![](figures/seo_knowledge_panel.jpg)
::::
:::::

The Knowledge Graph helps Google in answering queries directly using a knowldge panel; cf. the query for "what is seo" on the right picture.

::: footnotes
Sources: https://ahrefs.com/blog/google-knowledge-graph/ and https://sparktoro.com/blog/less-than-half-of-google-searches-now-result-in-a-click/
:::



---
# Attempts for Defining Knowledge Graphs


---
## Knowledge Graphs have many contentious definitions ranging from specific technical proposals to more inclusive general proposals



An inclusive definition attempt{.Large}

::::: definition
A knowledge graph can be conceived as a graph of data intended to accumulate and convey knowledge of the real world, whose nodes represent entities of interest and whose edges represent relations between these entities. 

Adapted from...
:::::

The ==graph of data== (aka data graph) conforms to a __graph-based data model__, which may be a _directed edge-labelled graph_, a _property graph_, etc.



---
<!-- ## Another Attempt for a Knowledge Graph Definition -->
## Knowledge Graphs embody a number of characteristic Properties

:::: definition
A Knowledge Graph is a data set that is:
- ==structured== (in the form of a specific data structure)
- ==normalised== (consisting of small units, such as vertices and edges)
- ==connected== (defined by the – possibly distant – connections between objects)

Moreover, knowledge graphs are typically:
- ==explicit== (created purposefully with an intended meaning)
- ==declarative== (meaningful in itself, independent of a particular implementation or algorithm)
- ==annotated== (enriched with contextual information to record additional details and meta-data)
- ==non-hierarchical== (more than just a tree-structure)
- ==large== (millions rather than hundreds of elements)

Source: Defintion taken from Knowledge Graph lecture from Prof. Dr. Markus Krötzsch, TU Dresden
::::



---
## What is the meaning of 'Knowledge' in Knowledge Graphs

By knowledge, we refer to something that is known. 

- Such knowledge may be accumulated from external sources, or extracted from the knowledge graph itself. 
- Knowledge may be composed of simple statements, such as “Santiago is the capital of Chile”, or quantified statements, such as “all capitals are cities”. 
- Simple statements can be accumulated as edges in the data graph. 
- If the knowledge graph intends to *accumulate quantified statements*, a more expressive way to represent knowledge – such as ontologies or rules – is required.
- Deductive methods can then be used to entail and accumulate further knowledge (e.g., “Santiago is a city”). 
- Additional knowledge – based on simple or quantified statements – can also be extracted from and accumulated by the knowledge graph using inductive methods.



---
##  Graph Representations in Mathematics are not sufficient for Knowledge Graph Representations in Computer Science 

We have seen that graphs can be encoded in several ways: 
- _Adjacency matrix_ (and variants)
- _Adjacency list_ (and variants)
- Other derived representations

This is enough to store and manipulate graphs in software, but it is not enough to exchange graphs across applications.

**Open questions**:
- What kind(s) of graph do we want to exchange?
- How are vertices given (numbers? strings? specific ids? . . . )?
- Are edge labels supported and what are they?
- Can the graph include values of data types (integer? float? string? times? . . . )? 
- How exactly are these things encoded in bytes in a file?



::: footnotes
Source: Compiled from Lecture Materials about Knowledge Graphs from Prof. Dr. Markus Krötzsch, TU Dresden
:::


---
## Each Graph Representation (Matrix, List) has its Pros :far-thumbs-up: and Cons :far-thumbs-down:

::::: columns
:::: single
**Matrix**
- :far-thumbs-up: space efficient for dense graphs (1 bit per edge)
- :far-thumbs-up: can be processed with matrix operations (highly parallel)
- :far-thumbs-down: space inefficient for sparse graphs
- :far-thumbs-down: not natural for _labelled multi-graphs_

Example
::::
:::: single
**List**
- :far-thumbs-up: space efficient for sparse graphs;
- :far-thumbs-up: easy to use for labelled multi-graphs;
- :far-thumbs-down: harder to process (esp. if edge order can be random)
- :far-thumbs-down: not space efficient for dense graphs

Example
::::
:::::

::: bluebox center marg15
Note: Knowledge graphs are typically sparse and labelled, but parallel processing still makes matrices attractive in some applications.
:::

::: footnotes
Source: Lecture Slides of Prof. Dr. Markus Krötzsch
:::



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