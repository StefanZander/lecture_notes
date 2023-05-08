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

**Individuals**
- Individuals represent objects in the domain of interest
- OWL does not use the UNA, ie., two different names could refer to the same individual
- In OWL, we must clearly specify for individuals whether they are the same or different from each other

**Properties** 
- Properties represent binary relations on individuals $\leadsto$ properties link two individuals together
- Properties can have different characteristics (being inverse, functional, inverse functional, symetric etc)
- Properties are calles roles in description logics or slots in Protégé

**Classes**
- OWL interprets classes as sets that contain individuals
- Classes are described using precise formal descriptions that state precisely the requirements for membership
- Classes can be organized in a super-subclass-hierarchies called a taxonomy
- Classes are sometimes denoted as concepts – but classes are concrete representations of concepts


---
## Components of OWL Ontologies

- **Individuals**
  - Individuals represent objects in the domain of interest
  - OWL does not use the UNA, ie., two different names could refer to the same individual
  - In OWL, we must clearly specify for individuals whether they are the same or different from each other
- **Properties** 
  - Properties represent binary relations on individuals $\leadsto$ properties link two individuals together
  - Properties can have different characteristics (being inverse, functional, inverse functional, symetric etc)
  - Properties are calles roles in description logics or slots in Protégé
- **Classes**
  - OWL interprets classes as sets that contain individuals
  - Classes are described using precise formal descriptions that state precisely the requirements for membership
  - Classes can be organized in a super-subclass-hierarchies called a taxonomy
  - Classes are sometimes denoted as concepts – but classes are concrete representations of concepts


---
## Components of OWL Ontologies


:::: columns
::: single
**Individuals** :fa-person:
- Individuals represent objects in the domain of interest
- Individuals are also known as *instances of classes*
- OWL does not use the *Unique Name Assumption* $\leadsto$ two different names could refer to the same individual
- In OWL, we must clearly specify for individuals whether they are the same or different from each other
:::
::: single
**Properties** :fa-timeline: <!-- :fa-diagram-project: -->
- Properties represent binary relations on individuals $\leadsto$ properties link two individuals together
- Properties can have different characteristics (being inverse, functional, inverse functional, symetric etc)
- Properties are called *roles* in description logics or *slots* in Protégé
:::
::: single
**Classes** :fa-people-roof:
- OWL interprets classes as sets that contain individuals
- Classes are described using formal descriptions that precisely state the requirements for membership
- Classes can be organized in a super-subclass-hierarchies called a _taxonomy_
- Classes are sometimes denoted as *concepts* – but classes are concrete representations of concepts
:::
::::


---
## Classes in OWL

In OWL classes are built up of descriptions that specify the conditions that must be satisfied by an individual for it to be a member of the class.





---
![bg right:42% width:70%](figures/owl_property_types.png)
## OWL Property Types

OWL distinguishes between 3 types of properties
- Object Properties
  - represent relationships between individuals, i.e., they link one individual to another
- Datatype Properties
  - ...
- Annotation Properties
  - allow to add additional information to classes, individuals, and object/datatype properties




---
## OWL Naming Recommendations :fa-pencil:

Although there is no strict naming convention for classes, properties and individuals, it is recommended to use the following rules

::::: columns
:::: single
::: graybox small
**Naming Convention for Properties**

Property naming should use ==lower camel case notation==: 
- start with a **lower case letter**, 
- have **no spaces**, 
- and have the **remaining words capitalised**. 
- are **prefixed** with the word '**has**', or the word '**is**' 

Example: `hasPart`, `isPartOf`, `hasManufacturer`, `isProducerOf`

Not only does this convention help make the intent of the property clearer to humans, it is also taken advantage of by the ‘English Prose Tooltip Generator’, which uses this naming convention where possible to generate more human readable expressions for class descriptions.
:::
::::
:::: single
::: graybox small
**Naming Convention for Classes**

Classes should be named using a ==upper camel case notation==:
- start with a **capital letter** 
- should **not contain spaces**. 
 
Examples: `Pizza`, `PizzaTopping`, `MargheritaPizza`. 

Alternatively, underscores ('`_`') can be used to join words; for example `Pizza_Topping`. 

Which ever convention is used, it is important to be **consistent**.
:::
::::
:::::

::: footnotes
Source: OWL Pizza Tutorial der University of Manchester
:::




---
# Ontology Features 
![bg right:50%](figures/ontology_ancient_greek.webp)



---
<!-- header: Property Restrictions -->
## Property Restrictions

::: orangebox spaceafter
:fa-key: **Key idea** 
A **restriction** describes a **class of individuals** based on the **relationships** that members of the class participate in. The key idea is that a **class of individuals** is described or defined by the **relationships** that these individuals **participate in**. The annonymous class contains all individuals that satisfy the restriction.
:::

OWL distinguishes between the following **types** of restrictions

- *Quantifier Restrictions*
  - *Existential Restrictions* – denoted by the existential quantifier $\exists$ and formulated as `someValuesFrom` in OWL.
  - *Universal Restrictions* – denoted by the universal quantifier $\forall$ and read as 'only'. The formulation in OWL is `allValuesFrom`.
- *(Qualified) Cardinality Restrictions*
- *hasValue Restrictions*



---
## Existential Restrictions ($\exists$)

Existential restrictions are by far the most common type of restrictions in OWL ontologies. 

An ==existential restriction== describes a class of individuals that have **at least one** (some) **relationship** along a **specified property** to an **individual** that is a member of a **specified class**. 

For example, `hasBase some PizzaBase` describes all of the individuals that have at least one relationship along the `hasBase` property to an individual that is a member of the class `PizzaBase` — in more natural English, all of the individuals that have at least one pizza base.







---
## Excursus: How to make URIs function as an unambiguous entity name

::::: graybox smaller
**Q**: Given the URI: https://example.com/people/albert_einstein, what are the implementation mechanics for ensuring that it functions as an unambiguous entity name?

To ensure that a URI, like https://example.com/people/albert_einstein, functions as an unambiguous entity name, you need to follow these implementation mechanics:

- **Unique identifier**: Make sure the URI is unique and doesn’t refer to multiple entities. This prevents confusion and ensures that the URI unambiguously identifies a single entity. In this example, "albert_einstein" should only refer to one person, and not be reused for different entities.
  
- **Persistent and stable**: Ensure that the URI remains stable and persistent over time. Avoid changing the URI structure or removing the resource, as this may lead to broken links and loss of information. Use a domain and hosting service that you can maintain for a long period.

- **Content negotiation**: Implement content negotiation on the server hosting the resource. This allows the server to return different representations of the resource based on the client’s preferences (e.g., RDF, JSON-LD, or HTML). This way, both humans and machines can access the information associated with the URI.

- **Structured data**: Provide a machine-readable description of the entity using a structured data format like RDF, JSON-LD, or Microdata. Include the URI as the subject, and use standardized vocabularies, like schema.org or Dublin Core, to describe the entity’s properties and relationships.

- **Linking related entities**: Within the entity’s description, link to other related entities using their URIs. This helps create a web of interconnected data that improves machine understanding and discoverability.

By following these implementation mechanics, you can ensure that the URI https://example.com/people/albert_einstein functions as an unambiguous entity name, in line with the Linked Data Principles.
:::::

::: footnotes
Source: Extracted from a post to the linked data mailinglist by Kingsley Idehen from May 5th, 2023.
:::