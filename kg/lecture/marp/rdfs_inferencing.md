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



<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files rdfs_inferencing.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- rdfs_inferencing.md -->



# Foundations of Semantic Knowledge Graphs

#### Prof. Dr. Stefan Linus Zander 

Logical Inferencing using RDF Schema {.lightgreen .Big .skip}


---
<!-- header: Overview -->
<!-- footer: Foundations of Semantic Knowledge Graphs | A Formal Introduction to Graphs | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->

# Outline

- ...



---
## Knowledge Representation Formulas: What we can express using formal semantics

::: twocolumns
Conditions on class membership
- all mammals are warm-blooded
- if you don't eat meat, you are a vegetarian

Relation between classes
- all cities are populated cities
- every class is equivalent to itself

Assertions on class membership
- Darmstadt is a city

Characteristics on properties
- hasCapital only relates to countries or cities
- partOf is a transitive property

Assertions on property relations
- hasCapital(Berlin, Germany)

Assertions on equality
- morning star = evening star = venus
:::


---
## Basic Inferencing: Class membership and hierarchy entailments

::::: columns
:::: double
- Specify that something (denoted by an IRI/URI) is a **class** (or a property)
  ```
  ex:Country          rdf:type            rdfs:Class .
  ```

- Specify that something is a **member** of a **class**
  ```
  ex:Germany          rdf:type            ex:EuropeanCountry .
  ```
- Specify that something is a **subclass** of another class
  ```
  ex:EuropeanCountry  rdfs:subClassOf     ex:Country .
  ```
::::
:::: single center
```graphviz
digraph G {
     graph [rankdir=BT];
    node [fontname="Barlow Semi Condensed", fontsize=14];
    edge [fontname="Barlow Semi Condensed", fontsize=14];
    nodesep=.5;
    //label="Example RDF graph with data values"; 
    // {rank=same; 1; 2; 3; 4;};
    //{rank=same; 2; 4;};
    //{rank=same; 3;};
    // {rank=same; 1 -> 2 -> 3 -> 4 [style="invis"]};
    1 [label="rdfs:Class"];
    2 [label="ex:Country"];
    3 [label="ex:EuropeanCountry"];
    4 [label="ex:Germany"];
    2 -> 1 [label="rdf:type"];
    3 -> 2 [label="rdfs:subClassOf"];
    4 -> 3 [label="rdf:type"];
    4 -> 2 [label="rdf:type" color="red" fontcolor="red"];
    3 -> 1 [label="rdf:type" color="red" fontcolor="red"];
}
```
::::
:::::


---
## Basic Inferencing: Another Example

::: center space
```graphviz
digraph G {
    graph [rankdir=BT];
    // label="The greenhouse effect was discovered by a scientist";
    node [fontname="Barlow Semi Condensed", fontsize=14];
    edge [fontname="Barlow Semi Condensed", fontsize=14];
    nodesep=.5;
    //label="Example RDF graph with data values"; 
    // {rank=same; 1; 2; 3; 4;};
    // {rank=same; 3;};
    {rank=same; 4; 3;};
    1 [label="dbo:Scientist"];
    2 [label="dbo:Physicist"];
    3 [label="dbr:Joseph_Fourier"];
    4 [label="dbr:Greenhouse_Effect"];
    2 -> 1 [label="rdfs:subClassOf"];
    3 -> 2 [label="rdf:type"];
    4 -> 3 [label="dbo:discoveredBy"];
    // 3 -> 1 [label="rdf:type" color="red" fontcolor="red"];
    //3 -> 1 [label="rdf:type" color="red" fontcolor="red"];
}
```
:::

Deduction of new facts from class hierarchy
::: redbox centerbox noborder padding025em
$$
\forall i, c_1, c_2: T(i, \text{rdf:type}, c_1) \wedge T(c_1, \text{rdfs:subClassOf}, c_2) \rightarrow T(i, \text{rdf:type}, c2)
$$
:::

::: center kursiv small 
$\Rightarrow$ "The greenhouse effect was discovered by a scientist."
:::



---
## Basic Inferencing: Domain and range restrictions

::: center space spacebefore
```graphviz
digraph G {
    graph [rankdir=BT];
    // label="The greenhouse effect was discovered by a scientist";
    node [fontname="Barlow Semi Condensed", fontsize=14, ordering=out];
    edge [fontname="Barlow Semi Condensed", fontsize=14];
    nodesep=1;
    //label="Example RDF graph with data values"; 
    {rank=same; 3 -> 5 -> 4 [style="invis"]};
    1 [label="rdfs:Class" pos="-1,0!"];
    2 [label="rdfs:Class" pos="1,0!"];
    3 [label="ex:Country" ];
    4 [label="ex:City"];
    5 [label="ex:containsCity" pos="0,0!"];
    6 [label="rdf:Property"];
    3 -> 1 [label="rdf:type"];
    4 -> 2 [label="rdf:type"];
    5 -> 3 [label="rdfs:domain"];
    5 -> 4 [label="rdfs:range"];
    5 -> 6 [label="rdf:type"];
}
```
:::

- Specify that some property **always** relates members of **specific classes**.
  ```
  ex:Germany      ex:containsCity     ex:Berlin .     <!-- from this statement -->
  ------------------------------------------------  
  ex:Germany      rdf:type            ex:Country .    <!-- inferred statements -->
  ex:Berlin       rdf:type            ex:City .                   ... 
  ```
- This entailment rule also propagates down to **subproperties** (see next slide)



---
## Basic Inferencing: Propagation of domain and range restrictions

::: center space spacebefore
```graphviz
digraph G {
    graph [rankdir=BT];
    // label="The greenhouse effect was discovered by a scientist";
    node [fontname="Barlow Semi Condensed", fontsize=14, ordering=out];
    edge [fontname="Barlow Semi Condensed", fontsize=14];
    nodesep=1;
    //label="Example RDF graph with data values"; 
    {rank=same; 3 -> 5 -> 4 [style="invis"]};
    {rank=same; 6 -> 7 [style="invis"]};
    3 [label="ex:Country" ];
    4 [label="ex:City"];
    5 [label="ex:containsCity" pos="0,0!"];
    6 [label="ex:hasCapital"];
    7 [label="ex:Capital"];
    5 -> 3 [label="rdfs:domain"];
    5 -> 4 [label="rdfs:range"];
    6 -> 5 [label="rdfs:subPropertyOf"];
    6 -> 7 [label="rdfs:range"];
}
```
:::

- Domain and range restrictions also propagate along **property hierarchies**.

  ```
  ex:Germany      ex:hasCapital       ex:Berlin .     <!-- from this statement -->
  ------------------------------------------------  
  ex:Berlin       rdf:type            ex:Capital .    <!-- inferred statements -->
  ex:Berlin       rdf:type            ex:City .                   ... 
  ex:Germany      ex:containsCity     ex:Berlin .
  ex:Germany      rdf:type            ex:Country .
  ```



---
## Add Overview of Entailment rules




---
## RDF Schema: Observations and Summary

- Properties are first-class citizen
  ...not part of classes as in object oriented programming (OOP/UML)
  ...domain and range restrictions are tricky and should be avoided

- No strict distinction between **schema** and **data level**

- RDF Schema entailment rules do not include **negation**

- No notion of equality  



---
## RDF Schema: Some useful information

- Specify a human readable label for terms and resources
  ```
  ex:Country        rdfs:label          "Land"@de .
  ```

- Add comments to a resource
  ```
  ex:Darmstadt      rdfs:comment        "Darmstadt is a city located in the south of the federal state Hessen" .
  ```

- Refer to another resource (central concept of Linked Open Data)
  ```
  ex:Darmstadt      rdfs:seeAlso        dbr:Darmstadt .
  ```



---
## RDF Schema: Summary

- Without **formal semantics**, the Web of Data is **meaningless**

- Distinction between **classes**, **properties**, and **instances** (schema vs. data)

- RDF Schema employes a number of **reserved symbols** (ie language terms) for defining individual vocabularies

- **Entailment rules** are expressed using reserved symbols / are computed based on the semantics of reserved symbols

- **Inferencing** denotes the application of entailment rules to formulas to produce **new facts**

- RDF Schema is **not** very **expressive**