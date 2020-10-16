---
marp: true
theme: custom-theme
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

Kapitel 3: Einführung in Semantic MediaWiki {.lightgreen .big .skip}

---
<!-- header: Kapitel 1: MediaWiki -->
<!-- footer: Prof. Dr. Stefan Zander -->

# Semantic MediaWiki (TODO: Change)

::: threecolumns small
...is a _content management software_ for
- Richly formatted hypertext documents
- Structured data

... based on the _"Wiki Way"_:
- User-governed
- Collaborative
- Easy

...is based on _MediaWiki (MW)_:
- Wiki engine for managing hypertext
- Very popular
    - Wikipedia, Wikia, >100,000 sites
- User interface in hundreds of languages
- Free, Open Source, open development
    - Some full-time developers (Wikimedia staff)
- Written in PHP and JavaScript, main DB MySQL

...is implemented as a _MediaWiki extension_:
- Modular add-on
    - Fully compatible with current and recent MW
- Free, Open Source, open development
    - Driven by volunteers: no staff
    - Integrated with MW development
    - Current maintainers: MK, Jeroen De Dauw
- Written in PHP and JavaScript, main DB MySQL
    - RDF DBs supported as secondary storage

...is _well-established_ and _stable_
- Created in 2005
- Used on hundreds of sites (impossible to count)
- Extensive documentation in many languages
    - http://semantic-mediawiki.org/
    - Current maintainer: Karsten Hoffmeyer
- Twice-yearly user conference SMWCon
- Organisational support by OSDA (charity)
- One of the biggest MW extensions
    - Code, people, commit activity, user community
:::



---

# Was ist ein Wiki ?

::: definition
Ein ==Wiki== ist ein ==webbasiertes Hypertext-System== mit einer eigenen Markup-Sprache, das es Benutzenden ermöglicht, Webseiten direkt (d.h. ohne Programmierung) und online in einem Web-Browser zu erzeugen, zu lesen, zu verknüpfen und zu ändern.

Quelle: Angelehnt an Karin Haenelt, "Semantik im Wiki am Beispiel des MediaWiki und Semantic MediaWik", Fraunhofer, 2011.
:::

::::: equalcolumns bigskip
:::: 1st-column
### Komponenten eines Wiki-Systems

Es gibt unterschiedliche Implementierungen von Wiki-Systemen; 
Die am häufigsten verwendeten Komponenten sind

- Datenbank
- Versionsverwaltung
- Suchfunktion
::::
:::: 2nd-column
### MediaWiki

MediaWiki ist die bedeutenste und weitverbreiteste Implementierung eines Wiki-Systems

- Open-source Wiki-Software
- Technische Basisplattform der Wikipedia
- Genutzt von zehntausenden Webseiten und Organisationen^1^
::::
:::::

::: footnotes
^1^ Quelle: https://www.mediawiki.org/wiki/MediaWiki/de
:::

<!-- ### Eigenschaften (1/2)

- Hypertext-System mit eigener, einfach erlernbaren **Markup-Sprache**
- Inhalte sind frei erweiter-, les- und veränderbar
- Die Wiki-Engine ist ein vereinfachtes Content-Management-System
- Ein Benutzer kann **jede Seite** eines Wikis verändern oder neue Seiten erstellen

::: footnotes
^1^ Bo Leuf, Ward Cunningham, "The Wiki Way: Quick Collaboration on the Web",	Addison-Wesley, 2001.

^2^ Angelehnt an Rick Hegewald, "Ontologien und (semantische) Wikis", Problemseminar Ontologie-Management Institut für Informatik - Universität Leipzig
::: -->



---

# Eigenschaften von Wiki-Systemen

::::: equalcolumns
:::: 1st-column
- Wiki ist ein **Hypertext-System** 
    - Seiten beinhalten Informationen zu einem Themengebiet
    - Darstellung von __thematischen Zusammenhängen__ durch Verweise zwischen Seiten^1^ 
    - Kennzeichnung ob ein Verweis existiert oder nicht^2^
- Wiki ist **frei**
    - Quelltext: Gnu General Public License
    - Jede/r kann im Rahmen der Möglichkeiten tun und lassen was sie will
- Wiki ist **kollaborativ**
    - Zusammenarbeit mit anderen
    - schnelle Informationsbereitstellung und Korrektur
::::
:::: 2nd-column
- Ein Wiki ist **niemals vollständig** oder perfekt 
    - Es unterliegt einem **ständigen Prozess** von Erschaffung und Kollaboration
    - Mit einer inkludierten **Versionsverwaltung** der Inhalte^2^
    - Organisches Wachstum mit Semantic Drift
- Wiki ist von Natur aus **demokratisch**
    - Jeder hat die gleichen Rechte
    - damit erlaubt es eine Zusammenarbeit im Netz ohne Accounts und Passwörter
- Wiki ist **erweiterbar**
    - modularer Aufbau
    - Programmierschnittstellen
::::
:::::

::: footnotes
^1^ "Wiki promotes meaningful topic associations between different pages by making page link creation almost intuitively easy". Bo Leuf, Ward Cunningham, "The Wiki Way: Quick Collaboration on the Web", Addison-Wesley, 2001.

^2^ Das sind große Vorteile gegenüber dem bestehenden Web.

^3^ Angelehnt an Rick Hegewald, "Ontologien und (semantische) Wikis", Problemseminar Ontologie-Management Institut für Informatik - Universität Leipzig
:::



---
# Sprachelemente

Wikis stellen eine Reihe von ==Sprachelementen== zur Erstellung und Verwaltung von Inhalten bereit:

- Seiten 
- Namensräume
- Kategorien 
- Vorlagen
- Magic Words
    - Parser Funktionen
    - Variablen
    - Behavior switches 
- etc.

::: warning
**Groß- und Kleinschreibung beachten!**  
MediaWiki und damit auch Semantic MediaWiki unterscheidet zwischen Groß- und Kleinschreibung bei Seitennamen etc. in der URL!
:::



---
# MediaWiki: A Tool for Managing Wikitext

::::: equalcolumns
:::: 1st-column
### Content Encoding
- Wiki pages are formatted hypertext documents 
- Content is encoded in wikitext using a _markdown-like syntax_
- Wikitext input is converted into HTML output:

``` diff
[[Link to wiki-page]]
[[Some page|link with custom text]] 
[http://example.org Link to an outside URL]
==Header 1== 
===Header 2=== (etc.)
''italics''
'''bold'''
* bulleted list
# numbered list
: indentation
```
::::
:::: 2nd-column
### Advanced Formatting Features

- Rich set of features for controlling content display 
- Many HTML-like features supported (`<sub>`, `style`, ...) 
- Advanced formatting elements:
    - Images 
    - Tables
    ::: blue
    See online documentation for details
    :::
::::
:::::



---
# MediaWiki: Page Names

::::: equalcolumns
:::: 1st-column
**Page names** consist of _multiple parts_
```
Namespace:Title/Subpagetitle
```
::::
:::: 2nd-column
Example
```
User:Denny/Tests
```
::::
:::::

::::: equalcolumns small
:::: 1st-column
### Namespaces
- Prefixes, separated from title by colon `:`
- Not all prefixes that end in ":" are namespaces!
    - Available prefixes provided by MW, more can be added in configuration
    - Default: `Main` (empty), `User`, `Category`, `Template`, `Help`, `MediaWiki`, `File`, `Special`, `Project` (sitename)
- Purpose is to distinguish basic "content types" 
- Can have aliases (e.g. `File:` and `Image:`) 
- Every namespace has a talk version: Talk, User talk, ...
::::
:::: 2nd-column
### Subpages
- Postfixes, separated from title by slash “/”
- Not all postfixes after “/” are subpages!
    - Enabled for certain namespaces
    - By default only for User and all Talk pages 
- Often not appropriate for organising pages (rigid, hierarchical content structure)
- Small difference to pages with “/” in title
    - For example when moving pages
::::
:::: 3rd-column
### Pagetitle
- Defined during page creation
- MediaWiki determines whether page already exists
    - For existing pages, the page's content will be displayed
    - For non-existend pages, the edit view will be displayed
::: warning
**Page names are case-sensitive**
MediaWiki distinguishes between upper- and lower-case letters in page names!
:::
::::
:::::


---
# Namespaces

::: definition
==Namespaces== are prefixed in a page's URL and determine both the purpose and the model-theoretic semantics of a page. Based on the given namespace, the  MediaWiki engine determines how to process the contents of a page. MediaWiki provides 18 default namespaces^1^.

Quelle: eigene Definition
:::

- Every wiki page belongs to **one specific namespace**
    - Namespaces become part of the page's title, e.g., `Help:Namespaces/de`^3^.
    - When no namespace is given during page creation, the page will be created in the **main namespace**^2^.
- Namespaces determine the **purpose** of a page, i.e., how the contents of a page are interpreted by the wiki engine.
    - Example: Datatype information in property pages determine whether the specification of property values will lead to the creation of a new wiki page (in the default namespace) or whether property values are treated as data type values.
    - The wiki engine can also assess whether a certain **value holds for a property** or not (e.g., in the case of datatype `Date` or `telephone` etc.)
    - Contents of pages defined in the `Template:` namespace will be **transcluded** in other pages.
- The `Special` namespace is reserved for pages with fixed functionality (e.g. `Special:RunQuery`); no editing is possible

::: footnotes
^1^ See <https://www.mediawiki.org/wiki/Help:Namespaces/en#Standard_namespaces> for a list of standard namespaces provided by MediaWiki

^2^ The main namespace is not displayed in a page's URL but used internally by the mediawiki engine.

^3^ Please note how subpages are used to implement _mulit-language support_ on the official MediaWiki help pages.
:::



---
# MediaWiki: Namespaces (2/2)

- Namensräume dienen der Gruppierung von Seiten
- Funktionen können auf bestimmte Namensräume eingeschränkt werden
- Mediawiki hat standardmäßig **18 Namensräume**
- Textseiten stehen standardmäßig im Namenraum `Main`



---
# Categories

::: definition
Categories are pages defined in the `Category:` namespace and allow for organizing MediaWiki pages in predefined categories.

Eigene Definition angelehnt an <https://www.mediawiki.org/wiki/Help:Categories>_  
:::

#### Category Hierarchies

Mediawiki allows to build **category hierarchies**, i.e., it employs super- and sub-category concepts to resemble the 'broader' and 'narrower' relationships between categories known from taxonomical classification systems. 

In order to make a category a sub-category of another category, add `[[Category:{Super_category}]]` to the sub-category page.

Example:  
```
On the category page 'city':
============================

[[Category:Settlement]] --> makes 'Settlement' the super category of category 'city'
```

<!-- !!! Example
    **Example**  
    Defining that city is a special form of settlement (ie., sub-category), enter
    `[[Category:Settlement]]` on the `Category:City` page to make `Settlement` the super category of `City` -->

::: blue
Please note that category hierarchy can be any graph (multi-inheritance, cycles, etc.)
:::



---
# Working with Categories

::::: equalcolumns small
:::: 1st-column
### Creating a new Category

- Create a new mediawiki page with a distinct name in the `Category` namespace  
- Example
    ```
    Category:Employee
    ```
    --> Creates a new page named 'Employee' in the 'Category' namespace
- Enter additional information about the category on its page
::::
:::: 2nd-column
### Adding Wikipages to a Category
To make a mediawiki page a member of a category, add a link to the category on the page^1^
```
[[Category:Employee]] 
```
Adds the current page to the category "Employee"

::: blue
Category links can be placed at any location at a wiki page. However, due to maintenance and consistency reasons, it is good practice to define distinct locations in wiki pages for specifying category memberships. 
:::
::::
:::: 3rd-column
### Linking to a Category
To create a link to a category, use a leading colon before the category name (without this colon, the current page would be added to the category):
```
[[:Category:Help]]
```
--> Link displays as "Category:Help"

To change the _link text_, write the text inside the link tag after a pipe:
```
[[:Category:Help|Help category]]
```
--> Link displays as "Help category"
::::
:::::



---
# Templates

---
# Templates

::: definition
A __template__ is a wikipage defined in the `Template:` namespace that defines content that can be ==transcluded== in other wiki pages.

Quelle: eigene Definition
:::

Templates {.longskip}
: ... can be created as any wiki page, but must be defined in the `Template:` namespace
: ... can contain almost any kind of wiki content
: ... can have _parameters_, the values of which will be inserted in the template's content during transclusion
: ... often used to embed _semantic properties_ or _subobjects_ in Semantic MediaWiki

- Templates allow for the inclusion of pre-defined content in wiki pages.
- This form of inclusion is called **Transclusion**


---
# Templates: Transclusion

::: definition
__Transclusion__ describes the process of embedding content defined in a template into another page. Transcluded content can be customized by ==parameters== that are set while invoking a template.  

Quelle: Eigene Definition angelehnt an 
:::

Transcluded content can be controlled by three ==distinct commands== {.skip}
- `<includeonly>`
- `<onlyinclude>`
- `<noinclude>`

::: blue skip
**Always explicitly specify transcluding content**  
It is recommended to explicitly markup the content in a template that is to be transcluded by using the provided commands and separate it from supplemental or instructional content that describes the usage of the template. 
<!-- MediaWiki provides distinct commands (`<include_only/>`, `<no_include/>`) to control the transclusion of template content and separate it from e.g. instructional content on how to use the template. -->
:::
---
# Templates: Tutorial Videos 

::: blue
**Excellent tutorial videos about templates**  
YouTube hosts some excellent videos about the basic principles and formatting of templates as well as about the transclusion process and its controlling commands
- Introduction to templates  
    <https://youtu.be/IJ4BM5MFXmc>
- Basic formatting of templates and transclusion commands 
    <https://youtu.be/SsLahlGX0Ls>
- Template Variables  
    <https://youtu.be/X0QD5HT2qgc> 
:::



---
# Templates in Semantic MediaWiki

- Templates are often used for **harmonizing**[^1] semantic data and reducing semantic drift
    - ...by using pre-defined **semantic properties** in a template page
    - ...and by setting their allowed values through template **parameters** (often in conjunction with Page Forms)
    - ~> So, every page that transcludes a template contains the same semantic data and structure

::: footnotes
^1^ Harmonizing means to make something consistent and compatible
:::



---
# Customizing Template Content 

Templates can have __parameters__ that allow for passing _individual data_ to template content that is to be transcluded.

### Specification in Templates

Parameters within templates can either be specified...
- anonymously via the ==sequence of occurrence==, i.e., ` {{{1}}}`, `{{{2}}}`, etc.
- via specific ==parameter names==, i.e., `{{{Parameter_name|default_value}}}`

In case a parameter is not set (i.e., it contains no value), a ==default value== can be specified `{{{Parameter_name|default_value}}}`, `{{{1|default_value}}}`

Please note that parameters in templates need to be specified with _three curly brackets_ `{{{Parameter_name||Parameter_number}}}` (N.B. '`||`' means 'OR' and is not part of the parameter syntax)
``` plain
Syntax:
=======
{{{Parameter_name}}}       OR       {{{Parameter_number}}}

Example:
========
{{{project}}}              OR       {{{1}}}
```



---
# Creating Templates

Every template needs to a have a **unique page name** in the `Template:` namespace; they can be created as any other wikipage.

Template URL: `{Semantic_MediaWiki_URL}\Template:Template_name`
Template Name: `Template_name`

``` 
<!-- additional content -->
...
[[property1::{{{parameter1}}}]]
[[property2::{{{parameter2}}}]]
... 
<!-- additional content -->
```

Usage on a different wiki page – without parameters specified:
```
{{Template_name}}
```

Usage – with parameters specified on the page where the template it to be transcluded
``` 
{{Template_name
|parameter1=value1
|parameter2=value2
|...
}}
```

Templates can be used in any place in a page.




---
# Templates: Syntax

<!-- The following example displays a template with named parameters for entering new research grants -->
```
<noinclude> 
Dies ist die Vorlage zum Anlegen neuer nationaler und europäischer Förderprogramme. 
Zum Anlegen eines neuen Förderprogramms einfach den folgenden Ausschnitt in den Quelltext 
der neuen Seite kopieren und die Parameter entsprechend belegen: 
<pre> 
  {{Förderprogramm 
   |Name= 
   |Akronym= 
   |Webseite= 
   |Deadline= 
   |Beschreibung= 
   |Sonstige_Informationen= 
  }} 
</pre> 
Das Template sollte im oben dargestellten Format genutzt werden. 
Bis auf das Attribut Deadline können alle Felder mit Freitext befüllt werden; 
Das Attribut Deadline erwartet Datumsangaben (nicht 'Ende September' sondern '30.09.2016'). 
</noinclude> 
<includeonly> <!-- **** Hier beginnt das eigentliche Template **** --> 
  [[Category:Förderprogramm]] 
  [[Name::{{{Name|}}}]] 
  [[Akronym::{{{Akronym|}}}]] 
  [[Webseite::{{{Webseite|}}}]] 
  [[Deadline::{{{Deadline|}}}]] 
  [[Beschreibung::{{{Beschreibung|}}}]] 
  [[Sonstiges::{{{Sonstige_Informationen|}}}]] 
</includeonly
```




---
# Concepts
---
# Concepts

::: definition
Concepts are pages in the `Concept:` namespace and allow to dynamically compute page memberships based on the evaluation of query conditions defined on the concept page.
    
Quelle: Eigene Definition angelehnt an <https://www.semantic-mediawiki.org/wiki/Help:Concepts>
:::

{.skip}
- Sometimes, it is useful to determine memberships to categories based on the occurrence of some specific property values.
- Reviewing whether membership conditions are still satisfied and manually altering categories is cumbersome and error-prone

Example
- Automatically annotate all currently running projects with a dedicated category based on the evaluation of start and end date



---
# Function

Concepts
: ... are pages defined in the `Concept:` **namespace**
: ... serve as categories with individually evaluated memberships
: ... are declared using the `#concept` parser function
: ... dynamically link pages to categories based on formulated **query conditions**
: ... conditions are specified in the form of an `#ask` query
: ... results of the `#ask` query automatically become members of the concept
: ... can be **browsed** to view the contents of some concept – similar to category pages 
: ... can be used in **semantic queries** just like categories
: ... are very useful in **Page Forms** for defining auto-completion values

Additional Remarks:
: Concept pages can have **additional content** (e.g. wikitext) – but this text does not have any effect on the definition of the concept.
: The `#concept` parser function can _only_ be used on pages in the `Concept:` namespace 



---
# Working with Concepts

<!-- Defining and using the concept named `Semantic MediaWiki Cons 2012` in an `#ask` query to display the location of all SMW conferences held in 2012: -->

::::: equalcolumns
:::: 1st-column
### Creating a Concept
```
{{#concept:
 [[Category:Event]]
 [[Has planned start::> Jan 1 2012]]
 [[Has planned finish::< Dec 31 2012]] 
 |Semantic MediaWiki Cons in the year 2012 
  that have been announced on this wiki.
}}
```
- A page with the _concept name_ has to be created in the `Concept:` namespace
- Parser function `#concept` is used to define concepts. 
    - It's first parameter is a _concept definition_ that defines the conditions for selecting pages 
    - It's second parameter is a _short text_ that describes the concept.
- A list of matching pages is printed on the concept page
::::
:::: 2nd-column
### Using a Concept
```
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

==TODO: Will concepts be displayed on wiki pages?==
::::
:::::


::: footnotes
Source: Example taken from <...>
:::



---
# Example 2: Concept for all currently running Projects

Instead of annotating all currently running projects with a specific category (that certainly will be invalid for some projects after a certain amount of time), we can define a dynamic category in form of a concept.

```
{{#concept:
 [[Category:Project]]
 [[Has planned start::< {{CURRENTYEAR}}-{{CURRENTMONTH}}-{{CURRENTDAY}}]]
 [[Has planned finish::> {{CURRENTYEAR}}-{{CURRENTMONTH}}-{{CURRENTDAY}}]]
 |All currently running projects
}}
```