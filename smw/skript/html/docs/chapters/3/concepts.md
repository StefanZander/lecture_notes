# Concepts


!!! abstract
    **Summary**  
    A concept is a Semantic MediaWiki page in the `Concept:` namespace that serve as a category by **dynamically linking** pages to it, _iff_ such pages satisfy the **conditions** defined as `#ask` query on the concept page. 

### Motivation

Problem

* Sometimes, it is useful to determine memberships to categories based on the occurence of some specific property values.
* Reviewing whether membership conditions are still satisfied and manually altering categories is cumbersome and error-prone

Use Case

* Automatically annotate all currently running projects with a dedicated category based on the evaluation of start and end date


### Definition

!!! warning
    **Definition**: << **Concept** >>  
    Concepts are pages in the `Concept:` namespace and allow to dynamically compute page memberships based on the evaluation of query conditions defined on the concept page.
    
    _Quelle: Eigene Definition angelehnt an <https://www.semantic-mediawiki.org/wiki/Help:Concepts>_


### Function

Concepts
: ... are pages defined in the `Concept:` **namespace**
: ... serve as categories with individually evaluated memberships
: ... are declared using the `#concept` parser function
: ... dynamically link pages to categories based on formulated **query conditions**
: ... conditions are specified in the form of an `#ask` query
: ... results of the `#ask` query automatically become members of the concept
: ... can be **browsed** to view the contents of some concept – similar to category pages 
: ... can be used in **semantic queries** just like categories
: ... are very useful in **Page Forms** for defining autocompletion values

Additional Remarks:
: Concept pages can have **additional content** (e.g. wikitext) – but this text does not have any effect on the definition of the concept.
: The `#concept` parser function can _only_ be used on pages in the `Concept:` namespace 



### Syntax



### Example

!!! example
    **Example**  
    Using the concept named `:::diff Semantic MediaWiki Cons 2012` in an `#ask` query to display the location of all SMW conferences held in 2012:

    **Syntax**
    ```diff
    {{#ask:
    [[Concept:Semantic MediaWiki Cons 2012]]
    |?Has location=Location 
    |format=table
    |headers=plain 
    |mainlabel=Event
    }}
    ```

    **Result**

    | Event              | Location          |
    |--------------------|-------------------|
    | SMWCon Fall 2012   | Cologne, Germany  |
    | SMWCon Spring 2012 | Carlsbad, CA, USA |

<!-- First Term
:   This is the definition of the first term.

**First Term**
:     This is the <<definition>> of the first term.

Usage of Categories
: Browse contents like categories
: This is another definition of the second term.

This is a "paragraph" introducing:

~~~~~~~~~~~~~~~~~~~~~
a one-line code block
~~~~~~~~~~~~~~~~~~~~~

Footnotes[^1] have a label[^@#$%] and the footnote's content.

[^1]: This is a footnote content.
[^@#$%]: A footnote on the label: "@#$%". -->




!!! example
    **Example**  
    _Instead of annotating all currently running projects with a specific category (that certainly will be invalid for some projects after a certain amount of time), we can define a dynamic category in form of a concept._

    ``` diff
    {{#concept:
    [[Category:Project]]
    [[Has planned start::< {{CURRENTYEAR}}-{{CURRENTMONTH}}-{{CURRENTDAY2}}]]
    [[Has planned finish::> {{CURRENTYEAR}}-{{CURRENTMONTH}}-{{CURRENTDAY2}}]]
    |All currently running projects
    }}
    ```






