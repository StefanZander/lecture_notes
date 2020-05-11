# Semantic Templates

_Source: <https://www.semantic-mediawiki.org/wiki/Help:Semantic_templates>_




!!! warning
    __Definition__: << __Semantic Templates__ >>  
    Semantic templates are a means to incorporate semantic annotations into MediaWiki pages in a standardized way through MediaWiki templates.

Semantic templates are a method of including the markup that Semantic MediaWiki introduces through MediaWiki templates.

This has several advantages:

* users can specify annotations without learning any new syntax
* annotations are used consistently, i.e. users do not have to look for the right properties or categories when editing a page
* infobox-style templates provide data structure, by defining which values belong in which pages
* infobox-style templates also often provide a nice display for the data

For these reasons, semantic templates are a very popular way of handling semantic annotations. In most wikis, semantic data is stored only via templates --- in fact, we would estimate that 99% of all SMW data that currently exists is stored via a template. 


### Infobox-style Semantic Templates

Many MediaWiki sites, SMW-based and otherwise, make use of **infobox-style templates** to present **standard information**. 

For example, Wikipedia articles on cities and villages use a standard template in which editors specify common items of information:

``` 
{{Infobox Settlement
|image_skyline        = Sandiego_skyline_at_night.JPG?
|imagesize            = 
|image_caption        = San Diego Skyline | March 31, 2007
|official_name        = City of San Diego
|settlement_type      = [[City]]
|nickname             = America's Finest City
|motto                = Semper Vigilans ([[Latin]]: Ever Vigilant)
|image_flag           = Flag of San Diego, California.svg
...
``` 

Usually the template (in this case, Infobox Settlement) displays this information in a nicely-formatted table. Such regular templatized items of information are ideal to be mapped into properties in Semantic MediaWiki, with **each field** being stored using a **separate property**.

<!-- TODO: Add example about a semantic template -->

The following example illustrates the use of semantic templates for annotating Infobox-like information to project pages:

```
<noinclude>
This is the "Project Factsheet v1" template.
It should be called in the following format:
<pre>
{{Project Factsheet v1
|title=
|acronym=
|budget=
|start_date=
|end_date=
|description=
|members= {Name der Mitglieder getrennt durch ';'}
|topics= {Forschungsfelder, mehrere Angaben durch ';' trennen}
}}
</pre>
Edit the page to see the template text.
</noinclude><includeonly>{| class="wikitable"
! Projektname
| [[title::{{{title|}}}]]
|-
! Akronym
| [[acronym::{{{acronym|}}}]]
|-
! Budget
| [[has_budget::{{{budget|}}}]]
|-
! Projektstart
| [[has_start_date::{{{start_date|}}}]]
|-
! Projektende
| [[has_end_date::{{{end_date|}}}]]
|-
! Beschreibung
| [[has_description::{{{description|}}}]]
|-
! Mitarbeiter
{{#set:
 has_member={{{members|}}}
 |+sep=;
}}
| {{#show: {{PAGENAME}} |?has_member }} 
|-
! Forschungsthemen
{{#set:
 has_topic={{{topics|}}}
 |+sep=;
}}
| {{#show: {{PAGENAME}} |?has_topic }} 
|-
|}

[[Category:Research Project]]
</includeonly>
```



### Using semantic templates correctly
While the above pattern allows you to create all kinds of semantic templates of arbitrary complexity, there are some issues to consider.

* **Automatic annotation requires strict formats**  
    You can annotate template fields automatically, but in this case the supplied values must adhere to the expected format. For example, it makes sense to store the population of a city with a property of datatype `Number`. Still, the value that users enter might not be a number --- it could be a piece of text like "Around 1 million". Wikipedia notably has many such exceptions: in the main infobox template at France, for instance, the entry supplied for population is not a single number, or even a set of numbers! Instead, there are multiple numbers and textual explanations of their meaning. Such special cases should be kept in mind when designing semantic templates.

* **Optional entries and conditionals**  
    In the normal course of operating a wiki, most pages will probably not have their infoboxes completely filled, and you might not want to show empty rows in such cases. To remove rows with blank values, you can add **conditionals** into the template code, which include a row (and its annotation) only if a non-empty value was provided.

    This can be achieved with the help of the `#if` parser function, defined by extension [ParserFunctions](https://www.mediawiki.org/wiki/Extension:ParserFunctions). Wikipedia contains many examples of parser functions in templates, as for instance in template "Taxobox". Using parser functions typically results in **difficult-to-read template code**, but the simplification for users can be substantial.



