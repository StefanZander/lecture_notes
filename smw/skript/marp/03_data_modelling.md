---
marp: true
theme: custom-theme-roboto
paginate: true
---
<style>
/**
 * @theme enable-all-auto-scaling
 * @auto-scaling true
 **/

</style>

<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files 03_data_modelling.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- 03_data_modelling.md -->



# Semantisches Wissensmanagement im Unternehmen: <br />Konzepte, Technologien, Anwendungen

#### Prof. Dr. Stefan Linus Zander

Kapitel 3.2: Datenmodellierung mit Semantic MediaWiki {.lightgreen .Big .skip}



---
<!-- header: Kapitel 1: Vorbemerkung -->
<!-- footer: Semantisches Wissensmanagement in Unternehmen | Datenmodellierung mit Semantic MediaWiki | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->

# Vorbemerkung

Ein Großteil unseres menschlichen Daseins und Wirken definiert sich über ==Beziehungen== zu anderen "Dingen" (hier im weitest möglichen Sinne zu verstehen). Möchte man diese Gegenstandsbereiche in technischen Systemen möglichst präzise und “naturgetreu” abbilden, so braucht es _ausdrucksmächtige Beschreibungsformate_ und _Datenstrukturmodelle_. Viele bekannte Datenstrukturmodelle und Formate sind zwar sehr effizient in ihrer maschinellen Verarbeitung, ihnen fehlt es aber an der notwendigen Ausdrucksmächtigkeit und Erweierbarkeit, d.h., diese sind nicht in der Lage, die komplexen Beziehungen zwischen Dingen präzise und widerspruchsfrei (=unambiguitiv) abzubilden.

{.smallskip}

:::: example
**Beispiel** 
Versuchen Sie nachfolgend beschriebenen Sachverhalt in einem Datenmodell ihrer Wahl möglichst widerspruchsfrei und eindeutig abzubilden.
::: kursiv
“In seiner konstituierenden Sitzung vom 25.03.2019 beschloss der Fachbereichsrat in Bezug auf Berichtspunkt Nr. 5 des Protokolls vom 17.02.2019 mit 10 ‘Ja’-Stimmen, 0 Enthaltungen und keiner Gegenstimme:
Prof. Dr. Kai Renz wird zum kommenden Sommersemester neues Mitglied des Stundenplanerteams.“
:::
::::


---
# Überlegungen zum Datenmodell

Bei der Durchführung des vorherigen Beispiels werden Sie sehr schnell feststellen, dass die Repräsentation in Form eines ==konzeptuellen Graphen== mit _Knoten_ und _Kanten_ die Beziehungen zwischen den “Dingen” in einer natürlichen Darstellung am nächsten kommt.

Mit den Informationen aus "Kapitel 2: Technologische Grundlagen" können wir diesen Graphen weiter verfeinern.

<!-- Was wissen wir bisher aus Kapitel 2: Technologische Grundlagen -->

::: twocolumns
- Ausschnitte aus Gegenstandsbereichen lassen sich am besten unter Reduzierung struktureller Heterogenität als _konzeptueller Graph_ darstellen
- ==URIs & IRIs== ermöglichen die eindeutige Identifizierung von “Dingen” und dienen als *Adressierungschemata*
- Dinge sind ==Information-== und ==Non-Information Resources==
- Wir unterscheiden zwischen _Designator_ und _Designatum_
- Zusammen mit dem Konzept der ==Content Negotiation== ermöglichen sie eine Unterscheidung zwischen technischen- und real-weltlichen Repräsentationen
- Zur Beschreibung der Bedeutung einer Beziehung braucht es eine _maschinen-verarbeitbare Semantik_
- Die Semantik wird durch die Terme und logische Theorie, auf der eine ==Ontologiesprache== definiert ist, festgelegt
- Beziehungen sollten durch _wohl-definierte Terme_ aus bekannten Ontologien oder Vokabularen representiert werden
- Resourcen sollten durch URIs/IRIs von bekannten ==Domänen== (bspw. DBpedia) identifiziert werden
- Beziehungen sollten als _First-Class Elemente_ behandelt werden
- Sachverhalte werden in einem _Triple-Pattern_ kodiert
:::

<!-- ---
# Wie werden Informationen in SMW kodiert ?

Semantic MediaWiki encodes information in the form of ==facts==

::: blue center
**Example**: Berlin has a population of 3,520,031 people
:::

{.skip}
::::: equalcolumns
:::: 1st-column
A ==fact== can be represented in a __triple-based lingusitic structure__:
1. The ==subject== of a sentence, e.g., "Berlin"
2. The ==predicate==, e.g., "has a population"
3. The ==object==, e.g., "3,520,031 people"

These three parts can be split into a ==relation== and a ==statement==:
- **Relation** ~> Berlin has a population.
- **Statement** ~> The population is “3,520,031”.
::::
:::: 2nd-column
This ==triple== can be expressed with elements from SMW's KRF:
1. Subject is always a Wikipage
   - e.g. Page `Berlin` in the main namespace
2. Predicates are pages in the `Property` namespace
   - e.g., Page `Property:has Population`  
3. Objects are represented as **literals** or other **wiki pages**
   - e.g., value “3,520,031” in case the object is a literal
   - e.g., Page named "Germany" in case object is another Wikipage 
::::
::::: -->



---
<!-- header: Kapitel 1: Kodierung von Informationen -->
# Wie werden Informationen in SMW kodiert ?

Semantic MediaWiki encodes information in the form of ==facts==

::: blue center
**Example**: Berlin has a population of 3,520,031 people
:::

{.skip}
::::: equalcolumns
:::: 1st-column
A ==fact== can be represented in a __triple-based lingusitic structure__:
1. The ==subject== of a sentence, e.g., "Berlin"
2. The ==predicate==, e.g., "has a population"
3. The ==object==, e.g., "3,520,031 people"

These three parts can be split into a ==relation== and a ==statement==:
- **Relation** ~> Berlin has a population.
- **Statement** ~> The population is “3,520,031”.
::::
:::: 2nd-column


A statement consists of a ==property== and its ==value==:
- **Property** (i.e. predicate), e.g. “Has population”
- **Value** (i.e. object or literal), e.g. “3,520,031”

Adding a statement (property-value pair) to a page (the subject) is called ==annotation==.
::::
:::::

::: warning centerbox center
As a consequence, facts are encoded as **property-value pairs** on wiki pages.
:::


---
# Encoding Facts in Semantic MediaWiki

<!-- Semantic MediaWiki encodes facts in form of a triple-base

::: blue center
**Example**: Berlin has a population of 3,520,031 people
:::

{.skip} -->
::::: equalcolumns
:::: 1st-column
This ==triple== can be expressed with elements from SMW's Knowledge Representation Framework^1^:
1. ==Subjects== are general **wiki pages** or **subobjects**^2^ 
   - e.g. a wiki page named `Berlin` in the main namespace
2. ==Predicates== are **wiki pages** in the `Property` namespace
   - e.g., a wiki page named `has Population` in the `Property` namespace
3. ==Objects== are **literals**, **wiki pages** or **subobjects**^2^
   - e.g., value `3,520,031` in case the object is a literal
   - e.g., a page named `Germany` in case the statement's object is another wiki page 
   - e.g., an anonymous _blank node_ in case the object is a subobject
   <!-- - **Literals** embedded in the Wikipage with the annotation, e.g., “3,520,031” -->
   <!-- - other **Wiki pages** in the main namespace, e.g, "Klaus Wowerit"  -->
::::
:::: 2nd-column
**Examples**

(page – property – value):

```
Cologne   has population   1.017.155
Germany   has capital      Berlin
Spinoza   born on          24 Nov 1632
```

The _triple-based model_ employed by Semantic MediaWiki is inherited from W3C's __Resource Description Framework (RDF)__ specification.

A _page-property-value_ triple resembles the _subject-predicate-object_ triple pattern of RDF.
::::
:::::

::: footnotes
^1^ KRF = Knowledge Representation Framework, i.e., a set of rules and description primitives for encoding information in a certain format.

^2^ We will learn about subobjects in Lecture 4.
:::


---
<!-- header: <br/> -->
# Part 2: How to Encode Information in Knowledge Graphs


---
<!-- header: Kapitel 2: Kodierung von Informationen in Wissensgraphen-->
# Motivating Example

{.bigskip}

::: italic center
Matthias Frank is an employee of the FZI Research Center for Information Technology working on the BigGIS project. 
BigGIS is an ongoing research project started at April 2016 and deals with real-time big data and semantic technologies.
:::

{.bigskip}

Steps:
1. Identify *Instances* (Resources)
2. Identify *Concepts* (Classes)
3. Identify *Properties* and *Data* (Numbers, Literals etc.)
4. Represent as *Conceptual Graph* with *Stereotypes*
5. Transform into *Serialized Graphs* using MediaWiki syntax



<!--
---
# Step 1: Identify Instances

{.bigskip}

::: italic center
Matthias Frank is an employee of the FZI Research Center for Information Technology working on the BigGIS project. 
BigGIS is an ongoing research project started at April 2016 and deals with real-time big data and semantic technologies.
:::
-->


---
# Step 1: Identify Instances

{.bigskip}

::: italic center
==Matthias Frank== is an employee of the ==FZI Research Center for Information Technology== working on the ==BigGIS== project. 
==BigGIS== is an ongoing research project started at April 2016 and deals with ==real-time big data== and ==semantic technologies==.
:::




---
# Step 2: Identify Concepts

{.bigskip}

::: italic center
Matthias Frank is an ==employee== of the FZI Research Center for Information Technology working on the BigGIS ==project==. 
BigGIS is an ongoing ==research project== started at April 2016 and deals with real-time big data and semantic technologies.
:::


---
# Step 3a: Identify Properties...

{.bigskip}

::: italic center
Matthias Frank ==is== an employee of the FZI Research Center for Information Technology ==working on== the BigGIS project. 
BigGIS ==is== an ongoing research project ==started at== April 2016 and ==deals with== real-time big data and semantic technologies.
:::


---
# Step 3b: ...and Datatypes

{.bigskip}

::: italic center
Matthias Frank is an employee of the FZI Research Center for Information Technology working on the BigGIS project. 
BigGIS is an ongoing research project started at ==April 2016== and deals with ==real-time big data== and ==semantic technologies==.
:::


---
# Instances versus Literals

::: blue  bigskip
Question: Should an entity be represented as a literal or instance ?
:::

{.bigskip}
- Sometimes it is difficult to determine whether an entity should be represented as a literal (using the `text` datatype) or as an instance 
  - e.g., should a research field be represented as a literal or as an individual page in the system?
- Since this is a **modelling issue** which depends on the situation at hand, there is no definite answer to this question
  - A _trade-off_ in terms of performance versus flexibility and extensibility is necessary.
- Representing an entity as ==instance== (datatype `page` in Semantic MediaWiki) allows for more flexibility and extensibility
  - e.g. the page of a research field can _list projects_ or works in which this research field is used.
  - It can host _additional information_ about the field that can be used in queries
- If _no additional information_ is needed for an entity, it should be represented as a ==literal==
  - This helps save space (disk and memory) and increases query performance on large knowlesge bases



---
# Step 4a: Representation as Conceptual Graph

::: italic center
Matthias Frank is an employee of the FZI Research Center for Information Technology working on the BigGIS project. 
BigGIS is an ongoing research project started at April 2016 and deals with real-time big data and semantic technologies.
 
![width:800px](./figures/data_model.png)
:::




---
# Step 4b: Conceptual Graph with Stereotypes

{.bigskip}

::: center
![width:800px](./figures/data_model_w_stereotypes.png)
:::

---
# Step 5: Transformation into Serialized Graphs


It is *important* to **separate the facts** on their respective pages and determine the **direction** of a relation.

{.skip}

Syntax on the `Matthias Frank`-Page:
::: blue
`[[Matthias Frank]]` is an employee of the `[[works_at::FZI Research Center for Information Technology]]` working on the `[[member_of::BigGIS]]` project. 

`[[Category:Employee]]`
:::

{.bigskip}

Syntax on the `BigGIS`-Page:
::: blue
`[[BigGIS]]` is an ongoing research project started at `[[start_date::April 2016]]` and deals with `[[has_topic::Real-Time Big Data]]` and `[[has_topic::Semantic Technologies]]`.

`[[Category:Project]]`
:::


---
# Important: Consider the Relationship Semantics

- SMW's Knowledge Representation Framework is a ==directed Hypergraph==
- Therefore, the direction of a relation matters
- The direction of a relation bears certain ==semantics== (_structural_ and _model-theoretic_)
- These semantics are relevant in **inline queries**
  - e.g. `has_member` versus `is_member_of` – one can be used on employee pages, the other on project pages



---
# Try for Yourself

{.bigskip}

::: center italic blue
Bayern Munich is a professional football club based in Munich, Germany, that plays in the Bundesliga. 
Bayern Munich was founded in 1900. They play at the Allianz Arena. The club has won 30 national league titles.
:::

{.bigskip}

**Tasks**
1. Identify all *instances*, *properties*, *classes*, *literals* etc.
2. Think about what *additional* classes, properties and literals are needed
3. Create the *conceptual graph*
4. Think about what **facts** will be represented on which page
5. Complement the above text using the *Semantic MediaWiki syntax* of the respective elements




---
# Future Work

Here is a list of further, more advanced **modelling problems**:

- How can we state that Bayern Munich has won 30 Bundesliga Championship titles ?
- How can we express the years in which the Bundesliga titles were won ?
- How can we express in which season + year a Bundesliga title was won ?
- How can we express in which seasons Bayern Munich finished second ?
- How can we count all national and international titles won by a German football club ?

Hint: All the above modelling problems call for the use of ==subobjects==!^1^

::: footnotes
^1^ We will learn about subobjects in _lecture 4_ of this course.
:::


---
<!-- header: Summary -->
# Summary


---
<!-- header: Summary: Why Knowledge Graphs are useful -->
# Why Knowledge Graphs are useful

::::: columns
:::: double
==Knowledge graphs== have many advantages
- Like most graph models, it more intuitively captures the way _we think about the world_ as humans (as networks, not as tables), making it easier to design, capture, and query data.
- As a data model supported by W3C standards, it allows us to create _interoperable data_ and _systems_, all using the same standard to represent and encode data while adressing _structural_, _schema_ and _semantic heterogeneities_.
::::
:::: single
![height:280px](figures/lod_graph.webp)
::::
:::::

::: example small
**RDF versus Labeled Property Graphs**:
There are many other methods that have been developed to handle this kind of complexity in RDF, including singleton properties and named graphs/quads. Additionally, an entirely different type of **non-RDF graph model**, denoted as **labeled property graphs**, allows users to attach properties directly to relationships.
However, labeled property graphs do not allow for interoperability at the same scale as RDF does – it is much harder to share and combine different data sets, and moving data from tool to tool is not as simple and straightforward.
:::

::: footnotes
Source: https://enterprise-knowledge.com/rdf-what-is-it-and-why-do-i-need-it/
:::