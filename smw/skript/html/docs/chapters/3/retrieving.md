# Retrieving Information

### Overview
How can we view the data we enter?

* `Special:Browse` --- view all data for a page
* `Property:Name` --- view all data for property
* `Special:Types` --- view all properties of some type 
* `Special:Properties` --- view all properties
* And various others (not quite as important)

### Factbox
The **Factbox** shows all data contained as annotations of one page

* Below edit field in editing preview
* At page bottom on some or all pages
* Can be activated with the `__SHOWFACTBOX__` magic word

### Special:Browse

The special page `Special:Browse` shows
: ... all annotations contained in a page
: ... other pages' attributes that link to the selected page 


### Embedding Data into Wiki Pages

<!-- How can we embed data into wikipages? -->
The parser function `#show` can display property values from other wiki pages

!!! example
    **Example**
    ```
    {{#show:Berlin|?has population}} – show this number 
    {{#show:Germany|?has capital}} – show this page (link)
    ```

--> Re-use data without re-entering it

### Querying Data

SMW defines its own query language called **AQL**, which resembles the (semantic) MediaWiki syntax to some extent.

The parser function `#ask` allows to retrieve pages based on the information they contain; it can answer many queries

!!! example
    **Example**  
    ```
    {{#ask: [[Category:City]]}} – show pages with category 
    {{#ask: [[has mayor::Klaus Wowereit]]}} – show pages with this data 
    {{#ask: [[Category:City]] [[has mayor::Klaus Wowereit]]}} – show pages with both
    ```

Results of ask queries are, unless otherwise specified, displayed as customizable tables.

### The #ask Query Language (AQL)

TODO: The tutorial slides ... contain a nice and descriptive illustration of the different parameters that can be used to customize the display of an `#ask` query. 

#### Main idea
To ask for a page with some annotation, use this annotation (as in the examples just seen)  

* `[[Category:City]]`
* `[[has mayor::Klaus Wowereit]]`

Some query conditions cannot work quite like this:

* `[[has population::+]]` – pages with some population 
* `[[User:+]]` – pages in namespace `User`
* `[[:Category:+]]` – pages in namespace `Category`


#### AQL Disjunction and Conjunction

Keyword `OR` can be used to allow alternatives:  

`{{#ask: [[Category:City]] OR [[Category:Town]] }}`

Default behaviour when specifing multiple conditions:  
Find pages that satisfy all given conditions (~> this would be `AND`)


#### AQL Inverse Properties

It is possible to invert the direction of SMW properties

`{{#ask: [[has capital-::Germany]] }}`

Here we do not ask for the page that contains a property with the given value but rather for the value of the property entered to the page.

In consequence `has capital-` has the meaning `is capital of`.

This can be done in all SMW interfaces that take properties, but not when adding data to a page.

#### AQL Property Values
We have already seen two types of property values

* `[[has mayor::Klaus Wowereit]]` – retrieves all pages with a concrete annotation
* `[[has population::+]]` – retrieves pages on which the given property is set regardless of its value
  
Other conditions based on comparators:

* `[[has population::>1000]]` --- greater or equal 1000 
* `[[has population::<1000]]` --- less or equal 1000
* `[[has population::!1000]]` --- inequal 1000  
    _Note: it always means "has some value for the property that is greater/less/not equal to 1000"_


#### AQL Subqueries
A more elaborate form of property values for Wikipages:  
the pages that match another query

Example:  
"Countries with small capital cities"  
`{{#ask: [[has capital::<q>[[has population::<500,000]]</q> ]]}}`

Property chains like this can be abbreviated:  
`{{#ask: [[has capital.has population::<500,000]] }}`


### Result Formats

SMW provides a number of default formats for displaying the results of `#ask` queries.

<https://www.semantic-mediawiki.org/wiki/Help:Result_formats>  
provides an overview of the standard result formats shipped with Semantic MediaWiki.

Additional result formats are available via the Extension "Semantic Result Formats"  
<https://www.semantic-mediawiki.org/wiki/Extension:Semantic_Result_Formats>