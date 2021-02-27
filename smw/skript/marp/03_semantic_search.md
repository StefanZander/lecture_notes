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

# Semantisches Wissensmanagement im Unternehmen: <br />Konzepte, Technologien, Anwendungen

#### Prof. Dr. Stefan Linus Zander

Kapitel 3.3: Semantische Suche {.lightgreen .bigger .skip}

---
<!-- header: Chapter 1: Motivation -->
<!-- footer: Prof. Dr. Stefan Zander -->
# Didaktischer Aufbau der Einheit

Dieses Kapitel ist _zweigeteilt_:
- Teil 1 beschäftigt sich mit dem _strukturellen Aufbau_ von Abfragen aus konzeptueller Sicht
- Teil 2 behandelt _Syntax_ und _syntaktische Beschreibung_ von Abfragen

::: centerbox warning BIGSKIP 
Warum ist eine derartige Betrachtungsweise sinnvoll ?
:::






---
# Vorbemerkungen

SMW verfügt über eine **eigene Anfragesprache**

- Anlehnung an _Wiki-Syntax_
- interne Umsetzung der Anfragen in Abfragen für den internen Speicher (z.B. SQL bei Verwendung von MySQL als internen Speicher)

**Formale Semantik** der Anfrage
- durch Abbildung in ==OWL-DL-Klassenkonstrukte== gegeben 
    _~> d.h. eine Anfrage ermittelt Instanzen einer entsprechenden OWL-Klasse_
- Nutzung der Anfragesprache auf Spezialseite oder in ==inline queries==

**Einbindung** in Wiki-Seiten
- Anzeige der _Abfrageergebnisse_ auf der Wiki-Seite stets aktuell

**Polynomielle Komplexität** der Anfragebeantwortung
- Anfragesprache unterstützt daher (wie auch OWL DL) keine _benannten Variablen_
(Beispiel: Personen, die in Stadt_x geboren wurden und in Stadt_x gestorben sind) (mindestens NP-hart)


---
# How to Formulate Query Conditions

**Example**
- The following domains are modelled in a Semantic MediaWiki

    > "A research group has a number of employees being members of it. These employees work in different project where each project has different topics it is concerned with."

**Question**:
- How can we satisfy the information need of displaying all the research topics a research group’s members are associated with through their project work on the research group’s wiki page?

…or in other words

- Which topics are a research group working on?^1^

::: centerbox warning 
How can we model and satisfy this information need in Semantic MediaWiki ?
:::
{.smallskip}

::: footnotes
^1^: Assuming that topic information is encoded on the project pages using, e.g., `has_topic::Big_Data` statements.
:::



---
# How to Formulate Query Conditions (Part 2)

::: example
**Example**
The following domain knowledge is modelled in a Semantic MediaWiki

> "A research group has a number of employees being members of it. 
> These employees work in different projects, where each project has different topics it is concerned with."
:::



**Question**: {.bigskip}

> How can we satisfy the information need of displaying all the research topics a research group’s members are associated with through their project work on the research group’s wiki page? {.italic}

...or in other words

> Which topics are a research group working on?^1^ {.italic}

{.skip}

::: centerbox warning  
How can we model and satisfy this information need in Semantic MediaWiki ?
:::
{.skip}

::: footnotes
^1^ Assuming that topic information is encoded on the project pages using, e.g., `has_topic::Smart_Data` statements.
:::




---
# Formulating Queries I

First consider the **structural composition** of the data model used to represent the universe of discourse (or an excerpt of it). 

::::: equalcolumns bigskip
:::: 1st-column
::: center
![height:380px](./figures/ask_model_simple.png) 
::: 
::::
:::: 2nd-column
This **graphical representation** serves as basis for the formulation of ==query conditions==.
- Therefore, think of query conditions as 
    ~> _graphs with conditional node values_.
- Also consider the ==structural semantics== of involved elements.

**Structural Semantics** of the knowledge graph
- `Matthias Frank` is a wiki page in the `main` namespace
- The page holds two assertions
  - a `has_full_name`-property the value of which is a Literal 
  - a `works_in`-property the value of which is the wiki page representing Prof. Studer's research group
::::
:::::


---
# Formulating Queries I (Part 2)

The structural composition of the knowledge graph can then be transformed in a ==query graph==

::::: equalcolumns bigskip
:::: 1st-column
::: center
![height:380px](./figures/ask_query_simple.png) 
::: 
::::
:::: 2nd-column
The **query graph** then helps in formulating 
- _query conditions_ and
- the _structural components_ of the universe of discourse 

<!-- **Example**: -->
<!-- How does the serialized query graph look like for retrieving the full names of all members of Prof. Studer's Group ? {.italic} -->

<!-- The following example depicts a query graph for retrieving all the full names of Porf. Studer's group members.
- Employee represents the target type of pages (ie. category) 
- Each target type page needs to hold the `works_in`-property with object `Gruppe Prof. Studer` -->

**Query Conditions** and **structural components** {.longskip}
- Retrieve all pages that are... 
  - ...of type `Employee` and 
  - ...that participate in a `works_in`-relationship to the `Gruppe Prof. Studer` wiki page.
<!-- - hold a `works_in`-property with object `Gruppe Prof. Studer` -->
- From all matching pages...
  - ...retrieve the value (object) of the `has_full_name`-property
::::
:::::


---
# Explanatory Information 

Consider the following conceptual _query graph semantics_ of the previous example:

- yellow boxes represent _properties_;
    properties need to be pre-determined in a query, i.e., you can, e.g., not ask which properties exist between two pages in the main namespace.
- the red box represents a specific wiki page in the main namespace
- the blue boxes represent _query variables_ that are to be filled with the values in the course of _evaluating_ the _query conditions_
- the green boxes are the _results_ returned by processing the query and that are being displayed.




---
# Formulating Complex Queries

Consider the following excerpt of a knowledge graph representing the group an employee works in and one project it is member of together with the topics the project is concerend with. Also note that the structural semantics (ie., how pages are linked together) are more complex.

::: center
![height:400px](./figures/ask_model_km.png) 
::: 



---
# Formulating Complex Queries (Test)

::: columns
![width:3600px](./figures/ask_model_km.png) 

- Consider the following excerpt of a knowledge graph representing the group an employee works in and one project it is member of together with the topics the project is concerend with. 
- Also note that the structural semantics (ie., how pages are linked together) are more complex.
::: 

---
# Formulating Complex Queries: The Query Graph

If we want to _retrieve all topics_, members of Prof. Studer's group are working on, the **query graph** looks as follows:

::::: equalcolumns bigskip
:::: 1st-column
::: center
![height:380px](./figures/ask_query_km.png) 
::: 
::::
:::: 2nd-column
The **query graph** consists of two variables and thus two subgraphs
- the `project` subgraph
- the `employee` subgraph

<!-- **Please note**
There is no direct linkage from employee to the project they are working in. {.smaller .blue} -->

<!-- In order to satisfy this information need, the query graph  -->
It needs to be transformed into an ==inner query== and an ==outer query==^1^
- the **inner query** represents specific employees (~> the values which participate as conditions in the outer query)
- the **outer query** the projects they are members of 

::: centerbox center warning 
When formulating queries in Semantic MediaWiki, always consider the structural semantics of pages (ie., how pages are linked together via properties).
:::

::::
:::::


::: footnotes
^1^ In order to determine the inner and outer query, interpret the query graph as projects with specific employees as members.
:::



---
# Part 2: Ask Query Language – Syntax



---
# The #ask Query Language (AQL)

SMW defines its own _query language_ called ==AQL==, which resembles the (semantic) MediaWiki syntax to some extent.

**Main Idea**
To ask for pages with some specified annotations in order to (in most cases) retrieve additional information from those pages. Those annotations in question are used as query conditions, as illustrated in the examples below:

The parser function `#ask`  allows to retrieve pages based on the information they contain; (REALLY ONLY PAGES?!)

Semantic MediaWiki allows to query for 
- ==pages== (e.g. the wiki pages of all running projects)
- ==property values== (e.g. the full names of all employees of an organisation)
- ==subobjects== (subgraphs embedded in pages ~> will be discussed later in this course)

:::: equalcolumns
::: 1st-column
**Structure**

Queries consists of four parts
1. the `#ask` parser function
2. query conditions
3. printout statements, i.e., data to be displayed
4. display options, i.e., how data are displayed
:::
::: 2nd-column
**Example**
```
{{#ask:
 [[Category:City]]          <!-- Query Conditions -->
 [[Located in::Germany]] 
 |?Population               <!-- Printout Statements -->
 |?Area#km² = Size in km²
 |format=ul                 <!-- Display Options -->
}}
```
:::
::::
