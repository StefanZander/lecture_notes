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

<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files 03_semantic_search.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- 03_semantic_search.md -->

# Semantisches Wissensmanagement im Unternehmen: <br />Konzepte, Technologien, Anwendungen

#### Prof. Dr. Stefan Linus Zander 


Kapitel 3.3: Semantische Suche {.lightgreen .Big .skip}

---
<!-- header: Kapitel 0: Vorbemerkung -->
<!-- footer: Semantisches Wissensmanagement im Unternehmen | Semantische Suche | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->
# Didaktischer Aufbau der Einheit

Dieses Kapitel ist _zweigeteilt_:
- **Teil 1** behandelt _Syntax_ und _syntaktische Beschreibung_ von Abfragen
- **Teil 2** beschäftigt sich mit dem _strukturellen Aufbau_ von Abfragen aus konzeptueller Sicht

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

# Vorbemerkung

Wichtig: Die Abfragesprache von SMW verfügt über keine benannten Variablen vgl. SQL oder SPARQL.

Beispiel:
Die Abfrage nach Mitarbeitern einer Organisationseinheit, die als Mitglieder auf EU-Projekten gearbeitet haben mit einem Budget > 1 Mio. EUR ist NICHT in einer einzelnen Abfrage formulier- und ausführbar.

Erläuterung:
- Filterung auf 2 Ebenen: a) einmal auf Ebene der Mitarbeitenden (zugehörig zu einer OE) + b) auf Ebene der Projekte (EU + Budget > 1 Mio. EUR)
- Beide Domänen (pages) sind über ein Property (bspw. has_member) miteinander verknüpft

Abfragelogik:
- Die Abfragelogik in SMW basiert darauf, die Auswahl der in Frage kommenden Knoten (pages) durch das Setzen von zu erfüllenden Eigenschaften (bspw. in Form von Werten von Properties) zu limitieren. 
- Das bedeutet, dass entweder Seiten von einer Domäne oder einer anderen selektiert werden, nicht aber von beiden.

Einschränkung:
- Data from printout statements (result data) can not be used as input i.e., in query conditions of other queries (e.g. list for each person the EU-projects they work in together with the budget)


---
# Part 1: Syntax and Semantics


---
<!-- header: Capter 1: Syntax and Semantics -->
# The #ask Query Language (AQL)

Semantic MediaWiki includes an easy-to-use query language called ==AQL – #ask Query Language==, which enables users to access the wiki's knowledge. The _syntax_ is similar to the syntax of _annotations_. AQL can be used on the ==special page== `Special:Ask`, in ==concepts==, and in ==inline queries==.

**Semantic queries** specify two things:
1. Which *pages* or *subobjects* to select
2. What *information to display* about those pages

All queries must state some ==conditions== that describe what is asked for. 

::::: equalcolumns
:::: 1st-column
**Pages** can be selected by
- *name*, 
- *namespace*, 
- *category*, and most importantly by 
- *property values*.
::::
:::: 2nd-column
::: example Bigskip
**Example**

`[[Located in::Germany]]`

selects all pages with property `Located in` and value `Germany`.
:::
::::
:::::


---
# Anatomy of AQL

Semantic MediaWiki defines its own _query language_ called ==AQL – #ask Query Language==. It allows to _retrieve_ pages (or subobjects) based on the information they contain.

::::: columns
:::: double
AQL allows to **query** for 
- ==pages== (e.g. the wiki pages of all running projects)
- ==property values== (e.g. the full names of all employees of an organisation)
- ==subobjects== (subgraphs embedded in pages ~> will be discussed later in this course)
::::
:::: single
::: blue small
**Main Idea**
To ask for pages with some specified annotations in order to retrieve additional information from those pages. Those annotations in question are used as query conditions.
:::
::::
:::::

:::: equalcolumns
::: 1st-column
**Structure**

#ask Queries consist of _four parts_
1. The `#ask` **parser function**
2. **Query conditions**, i.e., what pages to select
3. **Printout statements**, i.e., data to be displayed
4. **Display options**, i.e., how data are displayed
:::
::: 2nd-column
**Example**
```
{{#ask:                     <!-- Parser Function -->
 [[Category:City]]          <!-- Query Conditions -->
 [[Located in::Germany]] 
 |?Population               <!-- Printout Statements -->
 |?Area#km² = Size in km²
 |format=ul                 <!-- Display Options -->
}}
```
:::
::::






---
## The Condition Syntax resembles the Annotation Syntax

<!-- Please note: -->
The _markup text_ for formulating ==query conditions== is exactly similar to the annotations embedded in wiki pages. 

::: centerbox warning skip
The syntax for asking for pages that satisfy some condition is exactly the syntax for explicitly asserting that this condition holds.
:::

The following queries show what this means: {.Bigskip}
- `[[Category:Actor]]` gives all pages directly or indirectly (through a sub-, subsub-, etc. category) in the category.
- `[[Born in::Boston]]` gives all pages annotated as being about someone born in Boston.
- `[[Height::180cm]]` gives all pages annotated as being about someone having a height of 180cm.
  

---
# Query Algebra – Conjunctions

:::: equalcolumns
::: 1st-column
Conditions can be _combined_.
```
[[Category:Actor]] [[Born in::Boston]] [[Height::180cm]]
```
:::
::: 2nd-column
Similar, more readable notation
```
[[Category:Actor]] 
[[Born in::Boston]] 
[[Height::180cm]]
```
:::
::::

When using **many conditions** in _one query_, the result is _narrowed down_ to those pages that meet ==**all** the requirements==. 
Thus we have a ==logical AND==.

::: blue 
Note that queries only return the articles that are ==positively known to satisfy the required properties== 
$\Rightarrow$ If there is no property for the height of some actor, that actor page will not be selected.
:::

::: centerbox warning Bigskip
**Lexical Peculiarities**
SMW will ignore some characters such as trailing spaces or comma in numbers depending on the datatype used. SMW also treat synonymous page names as **identical resources** $\rightarrow$ "Semantic wiki", "Semantic_wiki" and "semantic wiki" all refer to the same page.
:::


---
# Query Algebra – Disjunctions

**Disjunctions** are ==OR-conditions== that allow several _alternative conditions_ on query results. 
A _disjunction_ requires that at least one of the possible alternatives is satisfied (ie. ==logical OR==).

Semantic MediaWiki has two ways of writing _disjunctions_ in queries:
- The operator `OR` is used for taking the _union of two queries_
- The operator `||` is used for disjunctions in *property values*, *page names*, and *category names*

<!-- **Examples**
:::: equalcolumns
::: 1st-column
Describes people who were born in Boston _OR_ New York
```
[[Born in::Boston]] OR [[Born in::New York]]
```
:::
::: 2nd-colum
The same query written in a more *concise form*
```
[[Born in::Boston||New York]]
```
:::
:::: -->

:::: columns
::: 1st-column
**Examples**
:::
::: 2nd-column
`
[[Born in::Boston]] OR [[Born in::New York]]
`
Describes people who were born in Boston _OR_ New York
:::
::: 3rd-colum
`
[[Born in::Boston||New York]]
`
The same query written in a more *concise form*
:::
::::


Note that `||` does not always offer an alternative to `OR`. 
For example, `[[Born in::Boston]] OR [[Category:Actor]]` cannot be expressed with `||`.

`OR` _operates on the query_, not on a single element of the query. In the following query, the _category name_ needs to be repeated:
`
[[Category:Actor]] [[Born in::Boston]] OR [[Category:Actor]] [[Born in::New York]]
`



---
# Wildcards and Search Operators

**Wildcards** are written as `+` and allow _any value_ for a given condition^1^. 
For example, `[[Born in::+]]` returns all pages that have any value for the property `Born in`. 

**Comparators** are _special symbols_ like `<` or `>`^2^. They are placed after `::` in _property conditions_.
- `>>` and `<<`: "greater than" and "less than"
- `>` and `<`: "greater than or equal" and "less than or equal" by default
- `≥` and `≤`: "greater than or equal" and "less than or equal"
- `!`: "not" ("unequal")
- `~`: «like» comparison for texts and pages
- `!~`: «not like» comparison for texts and pages

When applying **comparators** to pages, then the _title of the page_ (without namespace prefix) is used.


::: centerbox warning
Comparators work only for **property values** and not for conditions on categories.
:::


::: footnotes bigskip
^1^ Please note that `+` can only be used by itself^1^. 

^2^ See https://www.semantic-mediawiki.org/wiki/Help:Search_operators
:::




---
# Search Features

SMW provides a number of additional search features, which we will not discuss in the lecture; details are available on the help-pages^1^:

- *Search operators* shows how to refine search conditions and criteria using operators such as comparators or wildcards.
- *Unions (OR)* of results describes how *disjunctions* (OR-conditions) can be used to combine query results on alternative conditions.
- *Single page restriction* section describes how to directly select some pages, or pages from a given namespace.
- Specify *range of pages*
- Use *namespace restrictions*
- *Subqueries* and *property chains*
- Work with *value substitutions* describes how templates and variables can be used in a query to substitute value components
- *Distance queries*


::: footnotes
See https://www.semantic-mediawiki.org/wiki/Help:Selecting_pages
:::



---
# AQL Inverse Properties

Sometimes, it is necessary to *invert the direction of properties* in queries, in particular when asking for pages that contain a _subobject_.

::: definition
==Inverse properties== do not ask for pages that contain a matching annotation but for the ==object value== of the annotation on pages, where the property is used.

Quelle: eigene Defintion angelehnt an https://www.semantic-mediawiki.org/wiki/Help:Inverse_properties
:::

**Example** {.Bigskip}
```
{{#ask: [[has capital-::Germany]] }}
```
- In this example, we do not ask for the page that contains a property with the given value but rather for the _value of the property `has capital` entered to the page_ `Germany`.
- In consequence `has capital-` has the meaning `is capital of`.

::: centerbox warning Bigskip
$\Rightarrow$ Inverse properties can be used in all SMW interfaces that take properties, but not when adding data to a page
:::



---
<!-- header: Capter 2: Formulating Queries -->
# Part 2: Formulating Query Conditions


---
# Initial Example

::: examlpe
**Initial Situation**
> A knowledge base contains the profile of all its employees in the form of wiki pages. 
> The profile pages also contain the information about the research division, an employee belongs to in form of an annotation, the object of which refers to the research division's wiki page.
:::

**Question** {.Bigskip}

> How can we find out the employees that belong to a specific research division ?

...or in other words

> How can we satisfy the information need of displaying the names of all the employees that belong to a certain research devision, e.g., to Prof. Dr. Rudi Studer's Group ?


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
The **instance graph** serves as basis for the formulation of ==query conditions==.
- Therefore, think of query conditions as 
    ~> _graphs with conditional node values_.
- Also consider the ==structural semantics== of involved elements.

**Structural Semantics** of the knowledge graph
- `Matthias Frank` is a wiki page in the `main` namespace
- The page holds two assertions
  - a `has_full_name`-property the value of which is a Literal (datatype: `Text`)
  - a `works_in`-property the value of which is the wiki page representing Prof. Studer's research group
::::
:::::


---
# Formulating Queries I (Part 2)

The structural composition of the ==instance graph== can then be transformed in a ==query graph==

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
# Formulating Queries I (Part 3)

Once the structural components of the query graph are clear, the query can be formulated using ==AQL==

::::: equalcolumns bigskip
:::: 1st-column
::: center
![height:380px](./figures/ask_query_simple.png) 
::: 
::::
:::: 2nd-column
**Example**
```
{{#ask 
 [[Category:Employee]] 
 [[works_in::Gruppe Prof. Studer]]
 |?has_full_name = Fullname
 |format=ul
}}
```

<!-- **Example**: -->
<!-- How does the serialized query graph look like for retrieving the full names of all members of Prof. Studer's Group ? {.italic} -->

<!-- The following example depicts a query graph for retrieving all the full names of Porf. Studer's group members.
- Employee represents the target type of pages (ie. category) 
- Each target type page needs to hold the `works_in`-property with object `Gruppe Prof. Studer` -->

**Description** {.longskip}
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
  - properties need to be pre-determined in a query, i.e., you can, e.g., not ask which properties exist between two pages in the main namespace.
- the red box represents a *specific wiki page* in the main namespace
- the blue boxes represent _query variables_ that are to be filled with the values in the course of _evaluating_ the _query conditions_
- the green boxes are the _results_ returned by processing the query and that are being displayed.




---
# How to Formulate Query Conditions for Complex Queries 

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
# Formulating Complex Queries

:::: columns
::: triple
![](./figures/ask_model_km.png) 
:::
::: single
- Consider the following excerpt of a **knowledge graph** representing the *group* an *employee* works in and a *project* she is member of together with the *topics* the project is concerend with. 
- Be aware of the **structural semantics** (ie., how pages are linked together) that exists between employees, projects, and topics. 
:::
::::



---
# Formulating Complex Queries: The Query Graph

If we want to retrieve _all topics_, members of Prof. Studer's group are working on, the **query graph** looks as follows:

::::: columns bigskip
:::: onehalf
![](./figures/ask_query_km.png) 
::::
:::: single
The **query graph** consists of two variables and thus two subgraphs
- the `project` subgraph
- the `employee` subgraph

<!-- **Please note**
There is no direct linkage from employee to the project they are working in. {.smaller .blue} -->

<!-- In order to satisfy this information need, the query graph  -->
It needs to be transformed into an ==inner query== and an ==outer query==^1^
- the **inner query** represents specific _employees_^2^
- the **outer query** represents _projects_ they are members of 
::::
:::::


::: footnotes
^1^ In order to determine the inner and outer query, interpret the query graph as projects with specific employees as members.

^2^ The values which participate as conditions in the outer query
:::



---
# Formulating Complex Queries: The Query

If we want to retrieve _all topics_, members of Prof. Studer's group are working on, the **query graph** looks as follows:

::::: columns bigskip
:::: onehalf
![](./figures/ask_query_km.png) 
::::
:::: single
**The #ask Query**^1,2^
```
{{#ask: [[has_member::<q>[[works_in::{{PAGENAME}}]]</q>]]
|?has_topic=
|mainlabel=-
|format=valuerank
}}
```
::: small
- The *inner query* asks for employes working in the group (cf. `works_in`) 
- The _outer query_ retrieves projects in which these employes participate (cf. `has_member`)
:::

{.BigSkip}

::: centerbox center warning small Bigskip
When formulating queries in Semantic MediaWiki, always consider the **structural semantics** of pages (ie., how pages are linked together via properties).
:::
::::
:::::

::: footnotes
^1^ Assuming, that the query is placed on the group's page; Category conditions are removed from the query for reasons of simplicity and comprehensibility.
^2^ Hint: The query can also be solved by using property chaining, i.e. `{{#ask: [[has_member.works_in::Gruppe Prof. Studer]]}}`.
:::



---
## Queries with Property Chains (1/2)

Queries can become quite complex in terms of formulating query conditions; consider the following example:

**Assumption**: There is a page that encodes memberships in form of subobjects. Each subobject represents one membership and stores a reference to the person page of each member together with additional information such as their roles (full member, subsititute, chair etc) or their entry dates. Each person page belongs to a specific category (professor, employee, student etc) that reflects their role within an organisation. 

**Question**: How can we filter members based on their organisational role?

**Solution**: Chaining properties in query conditions. 

`[[-member.Role::Ersatzmitglied||Vorsitzender]] [[Kategorie:Professor]]` returns all professors who are either substitute or chair. 

__Imporant note__: Instead of naming the subject (e.g. a page or non-anonymous subobject) directly, it is represented by a set of properties (e.g. `...Role::Ersatzmitglied`) it fulfills. 

The correct wording would be: _a subject (page or subobject) that participates in a `member` relationship to a page of category `Professor` as well as in a `Role` relationship from itself to the literal `Ersatzmitglied||Vorsitzender`._


---
## Queries with Property Chains (2/2)

::::: columns
:::: triple
:fas-pencil: Task: Image you want to display all the Persons (professors, employees, students) of an organisation that are members of a specific committee (e.g. Studienausschuss) together with their membership information plus the category (see above) they belong to.

:fas-thumbs-down: Intuitively, one would formulate the query from the perspective of the membership page (the membership of each person is encoded via single subobjects). However, this is wrong: While membership data can be easily addressed in printout statements, it is not possible to display the category a person's page belongs to. 

:fas-thumbs-up: The better solution is to start from the persons' pages and use _property chains_ with _inverse properties_ to display the membership information hosted on the membership page.
::::
:::: double
Example:
```
{{#ask:
[[Category:Person]]
[[-member.Role::+]]
[[-member.type::mitglied_studienausschuss]]
|?Has_fullname
|?Category
|?-member.role=Rolle
|?-member.start_date=Eintrittsdatum
|?-member.end_date=Austrittsdatum
|mainlabel=Name
|format=table
|sort=role
|order=desc
}}
```

TODO: add result image
::::
:::::


---
## Tipps

a) Issuing an ask-query on the current page or to query for properties stored on a specific page (Source: https://www.mediawiki.org/wiki/Topic:Ww2qdae626d3s2lq)

  ```{{#ask: [[{{PAGENAME}}]] ... }}``` inserts the current page; often used in templates

  ```{{#ask: [[Research Design]] ... }}``` uses a specific page with name `Research Design`

b) ...