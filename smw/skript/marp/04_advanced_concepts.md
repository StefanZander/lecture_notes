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

Kapitel 4: Fortschrittliche Ontologiemodellierung mittels Semantic MediaWiki {.lightgreen .Big}

---
<!-- header: Kapitel 1: Page Forms -->
<!-- footer: Prof. Dr. Stefan Zander -->
# Inhalte

1. Page Forms
2. Query Forms
3. Fortgeschrittene Tipps
   1. common.css
   2. ...


---
# Page Forms


---
# Ausgangsfrage

::: centerbox blue big center
Wie kann man FachanwenderInnen darin unterstützen, semantisch-konforme und als Wissensgraph verarbeitbare Inhalte zu erzeugen ?
:::


---
# Page Forms

::::: columns
:::: single
==Page Forms== (aka Semantic Forms bis 2016) ist eine _Erweiterung_ für MediaWiki-Systeme.

Sie ermöglicht NutzerInnen durch den Einsatz von **HTML5-Formularelementen**...
- _neue Inhalte_ zu erstellen
- _bestehende Inhalte_ zu modifizieren
- _Abfragen_ dynamisch zu erzeugen und auszuführen 
    (--> Query Forms)

Page Forms setzen auf _Templates_ und erlauben **Parameterwerte** _dynamisch_ und _nutzerInnenfreundlich_ festzulegen.
- Statt MediaWiki-Syntax füllen NutzerInnen Formularfelder aus, deren Werte in einen Wissensgraphen transcludiert werden.
::::
:::: single
::: center
![height:400px](./figures/PageForms.png)
:::
::::
:::::

::: footnotes
Umfangreiche Dokumentation zu Page Forms: https://www.mediawiki.org/wiki/Extension:Page_Forms
:::


---
# Hauptbestandteile


::::: columns
:::: single
- Hauptbestandteil sind sog. ==Form Definition Pages== im `Form:` Namesraum.

- Der Markup-Code dieser Seiten wird geparst sobald eine NutzerIn eine solche Seite aufruft und in eine HTML5-konforme, Formularelement-basierte Seite überführt.

- Form Definitions können sich auf ganze Seiten oder Seitenbereiche (engl. Sections) beziehen, abhängig vom zugrunde liegenden Template
::::
:::: single
::: center
here comes a picture
:::
::::
:::::



---
# Getting Started

In order to use **Page Forms** in a (Semantic) MediaWiki system, the following steps need to be taken:

::::: columns small
:::: single
1. **Create Properties**
    Properties are the basic building blocks and data connectors in a SMW system. Every property should be defined.

2. **Create Templates**
    Templates hold semantic markup (properties, categories and subobjects). While every page type is usually represented by a single template, pages could also transclude content from many templates.

3. **Create Forms**
    With Properties and Templates in place, the form definition pages can be created using manual markup code or the built-in creator tool (`Special:CreateForm`). Usually, there should by one form per page type. 
::::
:::: single
4. **Create or Modify Categories**
    One template in each form should tag each article that the form creates as being part of a certain category. Categories can have a default form annotation so that every article that belongs to this category is editable by a form.

5. **Enable Links to Forms**
    Besides defining default forms for categories, it is possible to create links that directly links to forms using the `#formlink` and `#forminput` Parser functions. See ^1^ for more information on form linking. 


{.skip}

::: centerbox warning center 
Consult the man pages for detailed instructions
:::
::::
:::::

::: footnotes
Source: Instructions taken and revised from https://www.mediawiki.org/wiki/Extension:Page_Forms/Quick_start_guide

^1^ https://www.mediawiki.org/wiki/Extension:Page_Forms/Linking_to_forms
:::


---
# Other Tipps

- CSC Styles for MediaWiki

---
# Defining individual CSS Styles using MediaWiki:Common.css

SMW allows to change the ==rendering== of its elements using individual CSS style rules.

1. Call the `MediaWiki:Common.css` page (e.g. `https://smw-demo.fbi.h-da.de/index.php/MediaWiki:Common.css`)
2. Get the ==CSS selector== for the elements in question using the _style tab_ in the browser inspector  
3. Add the corresponding ==style rules== to the `MediaWiki:Common.css`


---
# Subobjects: Querying using #ask

Using `#subobject` does not print out anything on the screen. To show the subobject data directly on the page where they are defined use an _ask query_ `{{#ask: [[-Has subobject::{{FULLPAGENAME}}]] }}` with ==inverse property== and add it after the definition of the subobjects.


::::: columns
:::: single 
**Example**
1. Define two subobjects with identifiers "first" and "second":
    ```
    {{#subobject:first
    |property1=value1
    |property2=value2
    }}

    {{#subobject:second
    |property1=value3
    |property2=value4
    }}
    ```
::::
:::: single bigskip
2. Use the `#ask`-query to print out the subobjects' data:
    ```
    {{#ask:
     [[-Has subobject::{{FULLPAGENAME}}]] 
     |?property1
     |?property2
    }}
    ```

    ::: blue 
    Please note that the `Has subobject` property need to be specified as ==inverse property== (note the '`-`' in front of the property) in order to make the query work.
    :::
::::
:::::

::: footnotes
Source: https://www.semantic-mediawiki.org/wiki/Help:Subobjects_and_queries
:::



---
## Subobjects: Show Properties of the Subobject's Parent Page

In some cases it is necessary to query for ==properties== that are defined on the ==subobject's parent page==. 
<!-- The process to do that contains the following steps: -->

::::: equalcolumns small
:::: 1st-column
### a) Using Property Chains

**Example**
```
{{#ask:
 [[-Has subobject::{{FULLPAGENAME}}]] 
 |?-has subobject.YourParentProperty1
 |?-has subobject.YourParentProperty2
 |?YourSubobjectProperty1
 |?YourSubobjectProperty2
}}
```
- Chain members must be of type _page_ 
- Last member can be of _any type_
- Chaining _depth_ is not limited by default
::::
:::: 2nd-column
### b) Using Templates
1. Query for a property of a subobject.
2. Use `format=template`.
3. Add another query in this template where you ask for `[[Has subobject::{{{1}}}]]`. Has subobject returns the parent page of a subobject. The subobject is queried in the first query and passed on to the template as `{{{1}}}`.
::::
:::: 3rd-column
Example {.skip}
```
{{#ask:
 [[YourSubobjectProperty::Foo]]
 |?YourSubobjectProperty1
 |?YourSubobjectProperty2
 |format=template 
 |template=YourTemplate
}}
```
In `Template:YourTemplate` add the following:
```
{{#ask:
 [[Has subobject::{{{1}}}]]
 |?YourParentProperty1
 |?YourParentProperty2
}}
```
::::
:::::

::: footnotes
See https://www.semantic-mediawiki.org/wiki/Help:Property_chains_and_paths
:::


---
# Searching for Pages with certain Subobject Properties

<!-- Motivation: _Displaying properties of a specific subobject's parent page_ -->

<!-- Solution: _Use ==subqueries== to query for certain, characteristic subobject properties (=subproperties)_ -->

In some business cases, it is necessary to search for pages with certain subobject properties and display their properties.
The solution is to use ==subqueries== to query for certain subobject properties (e.g. a type property) – so called ==subproperties==.
<!-- When you want to query for (parent) pages that have certain subobject properties (===subproperties==), you can use subqueries: -->

**Example**
```
{{#ask:
 [[Has subobject::<q>[[YourSubobjectProperty::Foo]]</q>]]
 |?YourParentProperty1
 |?YourParentProperty2
}}
```

- The query `[[Has subobject::]]` (without the "`-`") queries for the (parent) pages that have certain **subproperties**. 
- With the subquery, you can then select certain subobject properties. 
- As the query asks for parent pages, you can select properties of the parent pages as printouts.

::: footnotes
Source: https://www.semantic-mediawiki.org/wiki/Help:Subobjects_and_queries
:::


---
# QueryForms: Define Yearly Time Frames

If you want to use for specific (e.g. yearly) ==time frames== using **QueryForms**, you have to define 2 things:

1. Define a _field tag_ with `|input type=year` (or use a combo-box with pre-defined values) for the years
    ```
    '''Jahr:''' 
    {{{field|Datum|input type=combobox|property=Bestelldatum|default={{#time:Y}}
      |values=2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030 }}}
    ```

2. Pass the field parameter value (ie. `Datum`) to a _template_ and use the following _query conditions_ to set a time frame of, e.g., 1 year
    ```
    {{#ask: 
     [[Category:Buchbestellung]]
     [[Besteller::{{{Besteller|+}}}]]
     [[Bestelldatum::>1.1.{{{Datum|1970}}}]]
     [[Bestelldatum::<31.12.{{{Datum|2100}}}]]
    ...
    ```
::: footnotes
cf. https://www.semantic-mediawiki.org/wiki/Help:Date_parsing
:::



---
# Query for Subobject Data on specific Parent Pages 

::::: equalcolumns
:::: 1st-column
**_Motivation:_**
Display the items (represented as subobjects) of all book orders issued in 2020.

___Assumption:___ 
Items are represented as subobjects embedded in order pages.

___Solution:___ {.noskip}
1. Draw a data graph of the involved entities
2. Formulate the query conditions for the parent pages
3. Insert the parent page query conditions into a subquery
4. The subquery becomes the value of a query condition using the inverse `Has subobject` property
::::
:::: 2nd-column
___Example:___
Build the _subquery_ (i.e. the query conditions for parent pages)
```
[[Category:Buchbestellung]]
[[Bestelldatum::>1.1.2020]] [[Bestelldatum::<31.12.2020]]
```

Build the _full query_ and embed the subquery 
```
{{#ask:
 [[-Has subobject::<q>[[Category:Buchbestellung]]
 [[Bestelldatum::>1.1.2020]] [[Bestelldatum::<31.12.2020]]</q>]]
 |?Verfasser
 |?Buchtitel
 ...
}}
```
::::
:::::



---
# Combining Parent Page and Subobject Data in Queries

This can be achieved with ==subqueries== and ==inverse property chaining== in the _properties' selection part_ of inline queries.

**Example**
``` 
{{#ask:
 [[-Has subobject::<q>[[Category:Buchbestellung]]
 [[Bestelldatum::>1.1.2020]] [[Bestelldatum::<31.12.2020]]</q>]]
 |?-Has subobject.Besteller         <!-- selecting parent page property via inverse property chaining -->
 |?-Has subobject.Kostenstelle      <!-- selecting parent page property via inverse property chaining -->
 |?Verfasser
 |?Buchtitel=Titel
 |?Erscheinungsjahr=Jahr |+align=center
 |mainlabel=-
 |format=broadtable
 |class=smwtable-clean sortable
 |headers=plain
}}
```


---
# Automatically Setting Page Names in Page Forms

The name of the page created by a form can be set _automatically_ by adding a `page name` parameter within the form definition's `info` tag^1^.

**Example**^2^:
``` 
{{{info|page name=<Author[First name]> <Author[Last name]>}}}

{{{for template|Author}}}
'''First name:''' {{{field|first name}}}

'''Last name:''' {{{field|last name}}}

'''Political affiliation:''' {{{field|political affiliation|input type=combobox}}}
{{{end template}}}
```

::: footnotes
^1^ https://www.mediawiki.org/wiki/Extension:Page_Forms/Linking_to_forms

^2^ Example is taken from https://discoursedb.org/w/index.php?title=Form:Author&action=edit
:::


---
# Benennung von Properties in Templates

Annahme:
Sie wollen Abschlussarbeiten (BAs/MAs) mittels SMW verwalten. Für BAs & MAs erstellen Sie jeweils separate Templates. 

Im Verlauf der Arbeit stellen sich hierbei folgende Fragen:
- Benutzen Sie identische Properties für/in beiden Templates ?
- Wie benennen Sie die Properties ? 
- Wie gelingt Ihnen die Unterscheidung der konkreten Instanzen (SWM Seiten) ?



---
# Multiple Values for the same Subobject Property 

::::: equalcolumns small
:::: 1st-column
### a) Add Multiple Lines
```
{{#subobject:mysubobject
 |Has property 1=value1
 |Has property 1=value2
 |Has property 3=value1
 ...
}}
```
==TODO: Check if it works==
::::
:::: 2nd-column
### b) Separate Values using a Pipe
```
{{#subobject:mysubobject
 |Has property=value1|value2
 ...
}}
```
- Separate values using `|` as delimiter

::: warning small
The possibility of using pipes `|` for setting multiple values was deprecated starting with Semantic MediaWiki 3.0.0 and will be removed in a later version. It is strongly recommended to migrate to using the `
|+sep` parameter.
:::
::::
:::: 3rd-column
### c) Separate Values using Named Separator
```
{{#subobject:mysubobject
 |Has property 1=Value 1;Value 2;Value 3|+sep=;
 |Has property 2=12+22+3+4+5+6+7+8+9+10|+sep=+
 |Has property 3=123,1234,12345,|+sep=,
 |Has property 4=One,or,two,more,values|+sep
 ...
}}
```
- Semantic MediaWiki 1.9.0 introduces `|+sep=...` to identify the separator
- Provides greates flexibility and can be combined with PageForms
- Preferred method in most cases
::::
:::::

::: skip 
:::
Alternatively, the `{{#arraymap:...` parser function can be used to separate multiple values for one subobject property.

::: footnotes
Source: https://www.semantic-mediawiki.org/wiki/Help:Adding_subobjects#Specifying_multiple_values_for_the_same_property
:::



---
# How to Query for Subobject Data in Pages



---
# Tipps for Working with Forms

### Remove 'Keine Angabe' in selection fields (radiobuttons or checkboxes)
- In order to remove the `Keine Angabe` option from the set of selection options in radiobuttons or checkboxes, it is necessary to add the `|mandatory`-flag to the input declaration.
- Optinally, set the `|default=...` parameter to a specific value to have it pre-selected.  





---
# Seitenerzeugung mittels Formularen

Es gibt 2 Wege neue Seiten mittels Formularen zu erstellen oder zu editieren:

::::: columns small
:::: single
__Einstufiger Prozess__ _(vgl. one-step process)_

1. Direkter Aufruf des Formulars mittels Link oder Button 

    ```
    {{#formlink:form=Project Factsheet v2
     |link text=Projektdaten bearbeiten
     |link type=button
     |target={{PAGENAME}} 
    }}
    ```
    
    Die `#formlink` Parserfunktion kann auf bel. Seiten verwendet werden, bspw. als Bestandteil des in die Zielseite transkludierten Templates (siehe Screenshot auf Folgeseite).

    Beispiel:
    ![](./figures/forms_1step_link.png)

::::
:::: single
__Zweistufiger Prozess__ _(vgl. two-step process)_

1. Separate Seite mit Eingabefeld für Seitennamen
2. Aufruf des Page Forms im 2. Schritt

    ```
    {{#forminput:form=Project Factsheet v2}}
    ```

    Eingebettet am Beginn der Form Definition Page

    ![](./figures/forms_2step.png)

::::
:::::

::: footnotes
Quelle: <https://www.mediawiki.org/wiki/Extension:Page_Forms/Linking_to_forms>
:::


---
## Beispiel des Einstufigen Prozesses

::: center
![height:540px](figures/forms_1step.png)
:::


---
# Enabling Editing of Page Content via Forms

To get the _"edit with form"_ tab to appear on the page, you must use the parser function `{{#default_form:form-name}}` where `form-name` is the name of the form (without the namespace prefix `Form:`).

::::: equalcolumns small
:::: 1st-column
### a) Based on Category
- Requires that page belongs to the category
- Main template that defines a page type must contain a `[[Category:...]]` tag
- `{{#default_form:form-name}}` need to be placed on the _category defintion page_
- Every page that uses the template automatically belongs to the category and can call the form
- Recommended approach
<!-- - Best used in conjunction with a template that defines the category -->
<!-- - ==TODO: What happens with sub categories?== -->
::::
:::: 2nd-column
### b) Based on Namespace
- Every page in a namespace is editable via the specified form
- `{{#default_form:form-name}}` needs to be placed on the _page defining the namespace_, e.g. `Project:User`^2^ for the 'User' namespace
- Categories take precedence over namespaces 
::::
:::: 3rd-column
### c) Within the Page
- Directly associate a form with a page
- Usefull when pages belong to multiple categories with different default forms 
- Place the default form parser function  
    `{{#default_form:form-name}}`  
    _directly_ on the page
- Could be combined with templates
::::
:::::

::: footnotes
Source: https://www.mediawiki.org/wiki/Extension:Page_Forms/The_%22edit_with_form%22_tab

^2^ Create the page if it does not exist. The page for the main-namespace is `Project:Main`.
:::



---
## Abfragen von Seiten auf denen ein Property NICHT gesetzt ist

Die `#ask` Abfragealgebra von SMW erlaubt es nicht, Seiten abzufragen, auf denen ein Property _nicht_ gesetzt ist, d.h., keinen Wert hat^1^.

Hierzu muss man sich eines Tricks mittels `#if` und `#set` behelfen^2^:

::::: equalcolumns
:::: 1st-column
```
{{#if: {{{Competitor}}} | | {{#set:Competitor provided=No}} }}
```

Das Property `Competitor provided` muss vom Datentyp `Boolean` sein. Nicht notwendigerweise
::::
:::: 2nd-column
::: blue smaller
Erklärung:
`#if` evaluiert, ob ein übergebener String leer ist oder nicht. Im obigen Beispiel wird der Parameter nicht übergeben, er ist also leer da ihm kein Wert zugeordnet ist, und so wird der `else`-Teil der `#if` Parser function ausgeführt und ein Property mit dem angegebenen Wert auf der Zielseite gesetzt.
:::
::::
:::::

Jetzt kann mittels einer Query nach Seiten mit dem gesetzten Wert des Properties (im o.g. Beispiel `Competitor provided` und `No`) gesucht werden. 

```
{{#if: test string | value if test string is not empty | value if test string is empty (or only white space) }}
```

::: footnotes
^1^ Quelle: https://www.semantic-mediawiki.org/wiki/Thread:Semantic-mediawiki.org:Community_portal/Querying_for_non-empty_values

^2^ Dieser Trick funktioniert nur in Zusammenhang mit Templates und Parametern.

^3^ https://www.mediawiki.org/wiki/Help:Extension:ParserFunctions##if
:::



---
# Query Forms


---
# Query Forms

::: definition
==Query forms== are a specific type of page forms and allow to pass individually entered input form data as parameters to query templates. A query form requires a query template, ie., a template with an inline query plus a special page that displays both form data and transcluded template on one wiki page.

Quelle: Individual Definition
:::


::::: equalcolumns small
:::: 1st-column
### 1) A Query Form
- Defined as a regular page form
- Displays a "Run Query" button
- Tag `{{{standard input|run query|label=...}}}` allows to customize the "Run Query" button
::::
:::: 2nd-column
### 2) A Query Template
- Defines an inline query together with a set of parameters that serve a query conditions
- Parameter values are passed to the query
- Displays the executed query as result 
::::
:::: 3rd-column
### 3) The `Special:RunQuery` Page
- Displays query form and results
- Passes the query form input data to the template and displays the transcluded  content on top or below the form
::::
:::::

Link to the query form via `[[Special:RunQuery/query form name]]` or `{{#queryformlink:form=query form name}}`.
The parser function is the preferred method as it provides to greatest flexibility.
<!-- Once the query form has been created, you can link to it via  -->


::: footnotes
Source: https://www.mediawiki.org/wiki/Extension:Page_Forms/Creating_query_forms
:::


---
# Query Forms: Implementation

::::: equalcolumns small
:::: 1st-column
**Query Form**
```
<includeonly>
{{{info|query form at top}}}
{{{for template|Query_Buchbestellungen}}}
{|
! Besteller*in:
| {{{field|Besteller|input type=tokens|property=Besteller
    |max values=1|values from category=Professor}}}
! Jahr: 
|{{{field|Datum|input type=combobox|property=Bestelldatum
    |default={{#time:Y}}
    |values=2019,2020,2021,2022,2023,2024,2025,2026,2027}}}
|}
{{{end template}}}
</includeonly>
```
::::
:::: 2nd-column
**Query Template** 
```
{{#ask: 
 [[Category:Buchbestellung]]
 [[Besteller::{{{Besteller|+}}}]]
 [[Bestelldatum::>1.1.{{{Datum|1970}}}]]
 [[Bestelldatum::<31.12.{{{Datum|2100}}}]]
 |?Besteller 
 |?Kostenstelle |+align=center
 |?Bestellstatus=Status |+align=center
 |?Bestelldatum=Datum |+align=right
 |mainlabel=-
 |format=broadtable
 |class=smwtable-clean sortable
 |headers=plain
}}</includeonly>
```
::::
:::::

**"Special:RunQuery"-Link** {.small}
```
[[Special:RunQuery/Query_Buchbestellungen|Meine bisherigen Buchbestellungen aufrufen]]
```

TODO: Add Screenshot





---
# Query Forms – Teil 2
Query Forms kombinieren Formulare mit Templates, in denen eine `#ask`-Query enthalten ist. 
Die Template Parameter werden mit den Formular-Werten belegt und über eine Spezialseite transkludiert.  

Mittels Query Forms lassen sich die Template-Parameter über Formulareingabeelemente individuell befüllen.

Eine Spezialseite xxx bindet das Query-Form ein, überigbt deren Werte an das Template und stellt das transkludierte Template im Anschluss auf der Seite dar.  


::::: columns
:::: double
```
{{#ask:
 [[Category:BA_Abschlussmodul]] 
 [[BA_Betreuer::{{{Betreuer|+}}}]]
 [[BA_Co-Betreuer::{{{Co-Betreuer|+}}}]]
 [[Status_Verfahren::{{{Status|+}}}]]
 [[Abschluss_Semester::{{{Semester|+}}}]]
 ...
```
::::
:::: single
::: warning small
**Wichtig**:
Damit das Query-Template bzw. die Query richtig funktioniert, muss bei den Parametern ein `+` als Alternative für einen leeren Wert gesetzt werden!
:::
::::
:::::


---
# Formatting of Boolean Values in Queries

By default, __Boolean values__ will display as `true` and `false` in queries. This can be changed in Semantic MediaWiki >= 2.4.0 by specifying a ==format string== to control what is displayed for the true and false values of a property.

::::: equalcolumns
:::: 1st-column
The following _formatting options_ are supported
-  `#LOCL` formatter (#LOCL to localize the output)
-  `#num` formatter (to produce 1 or 0)
-  `#tick` formatter (to display ✓ or ✕)
-  `#x` formatter (#x to output X that resembles a cross for true)
-  Custom label formatter (Using custom labels to define a boolean output and assign a true, false value display)

::: blue small
**Note** 
Not all result formats may provide support for these formatters.
:::
::::
:::: 2nd-column
**Syntax**
```
{{#ask:
 [[Category:Project]]
 |?Has boolean#<FORMATTER>
}}
```

**Examples**
```
|?Has boolean#LOCL

|?Praxisphase_absolviert#tick=Fertig
```
::::
:::::

::: footnotes
Source: https://www.semantic-mediawiki.org/wiki/Help:Type_Boolean
:::


---
# Multiple Values for the same Field

Use `\s` as new delimiter to insert a space between the single values.

::: footnotes
Source: https://www.mediawiki.org/wiki/Extension:Page_Forms/Page_Forms_and_templates#Multiple_values_for_the_same_field
:::


---
# Tipps for Working with Dates and Page Forms

### Using the current date in an input element^1^
Using input type `datepicker`, it is possible to set the _current date_ as default value in the input element using the `#time` parser function^2^ of the `Extension:ParserFunctions`^3^

Example:
```
! Datum: 
| {{{field|Datum|input type=datepicker|property=Bestelldatum|date format=dd.mm.yy|default={{#time:d.m.Y}} }}}
|}
```


::: blue
**Please note**:  
Regardless of the formatting pattern set via the `date format=...` property, `datepicker` always returns the data in `yyyy/mm/dd` format.
:::

::: footnotes
^1^ https://www.mediawiki.org/wiki/Topic:Put4ygy4m0kw279f

^2^ https://www.mediawiki.org/wiki/Help:Extension:ParserFunctions##time

^3^ https://www.mediawiki.org/wiki/Help:Extension:ParserFunctions
:::


---
## Using an Individual Display Format for Date and Time

This tip helps you to _reformat_ the output of dates which is by default `YEAR/MONTH/DAY` (e.g. 2017/06/27) and still keep a proper annotation for it.

Prerequisite is that you have the extension `ParserFunctions` installed on your wiki. 

::::: equalcolumns
:::: 1st-column
### 1.) ISO-Style
```
[[Startdate::{{{startdate|}}}|{{#time:Y-m-d|{{{startdate}}}}}]]
```
--> 2011-06-27
::::
:::: 2nd-column
### 2.) German-Style
```
[[Startdate::{{{startdate|}}}|{{#time:d.m.Y|{{{startdate}}}}}]]
```
--> 27.06.2011
::::
:::::

The ==parser function== `#time` takes a date and/or time (in the Gregorian calendar) and formats it according to the syntax given^2,3^.

```
Format: {{#time: format string | date/time object | language code | local }}
```

::: footnotes
Source: https://www.semantic-mediawiki.org/wiki/Help:Date_formatting

^2^ A full list of parameters is available on the help page: https://www.mediawiki.org/wiki/Help:Extension:ParserFunctions##time

^3^ In case the `date/time object` parameter is missing, the value of the magic word `{{CURRENTTIMESTAMP}}` (i.e., the time the page was last rendered into HTML) will be used.
:::

