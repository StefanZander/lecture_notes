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

Kapitel 4: Fortschrittliche Ontologiemodellierung mittels Semantic MediaWiki {.lightgreen .big}

---
<!-- header: Kapitel 1: Page Forms -->
<!-- footer: Prof. Dr. Stefan Zander -->

# Defining individual CSS Styles using MediaWiki:Common.css

SMW allows to change the rendering of its elements using individual CSS style rules.

1. Call the `MediaWiki:Common.css` page (e.g. ...)
2. Get the CSS selector for the elements in question using the style tab in the browser inspector  
3. Add the corresponding style rules to the `MediaWiki:Common.css`


---
# Subobjects: Querying using #ask

Using `#subobject` does not print out anything on the screen. To show the subobject data directly on the page where they are defined use an ask query `{{#ask: [[-Has subobject::{{FULLPAGENAME}}]] }}` with ==inverse property== and add it after the definition of subobjects.

::::: equalcolumns
:::: 1st-column
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
:::: 2nd-column

2. Use the #ask-query to print out the subobjects' data:{.longskip}
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
# Subobject: Show Properties of Subobject's Parent Page

In some cases one might not only want to query for subobject data but also for _properties_ that are defined on the _subobject's parent page_. 
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
**Example**
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

When you want to query for (parent) pages that have certain subobject properties (===subproperties==), you can use subqueries:

**Example**
```
{{#ask:
 [[Has subobject::<q>[[YourSubobjectProperty::Foo]]</q>]]
 |?YourParentProperty1
 |?YourParentProperty2
}}
```

- The query `[[Has subobject::]]` (without the "`-`") queries for the (parent) pages that have subpropeties. 
- With the subquery, you can then select certain subobject properties. 
- As the query asks for parent pages, you can select properties of the parent pages as printouts.

::: footnotes
Source: https://www.semantic-mediawiki.org/wiki/Help:Subobjects_and_queries
:::


---
# QueryForms: Set Yearly Time Frames

If you want to query for time frames using QueryForms, you have to define 2 things:

1. Define a field tag with `|input type=year` (or use a combo-box with pre-defined values) for the years
    ```
    '''Jahr:''' 
    {{{field|Datum|input type=combobox|property=Bestelldatum|default={{#time:Y}}
      |values=2019,2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030 }}}
    ```

2. Pass this parameter value (ie. `Datum`) to a template and use the following query conditions to set a time frame of 1 year
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
_Motivation:_ 
You want to display the items (represented as subobjects) of all book orders issued in 2020.

_Assumption:_ 
Items are represented as subobjects embedded in order pages.

_Solution:_
1. Draw a data graph of the involved entities
2. Formulate the query conditions for the parent pages
3. Insert the parent page query conditions into a subquery
4. The subquery becomes the value of a query condition using the inverse `Has subobject` property
::::
:::: 2nd-column
_Example:_
Build the subquery (i.e. the query conditions for parent pages)
```
[[Category:Buchbestellung]]
[[Bestelldatum::>1.1.2020]] [[Bestelldatum::<31.12.2020]]
```

Build the full query 
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

This can be achieved with _subqueries_ and _inverse property chaining_ in the ==properties' selection part== of inline queries.

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
# Automatische Erzeugung von Seiten mittels Page Forms

You can have the name of the page created by the form be set automatically, by adding a `page name` parameter within the form definition's `info` tag.

Beispiel^2^:
``` 
{{{info|page name=<Author[First name]> <Author[Last name]>}}}

{{{for template|Author}}}
'''First name:''' {{{field|first name}}}

'''Last name:''' {{{field|last name}}}

'''Political affiliation:''' {{{field|political affiliation|input type=combobox}}}
{{{end template}}}
```

::: footnotes
https://www.mediawiki.org/wiki/Extension:Page_Forms/Linking_to_forms

^2^ https://discoursedb.org/w/index.php?title=Form:Author&action=edit
:::


---
# Benennung von Properties in Templates

Annahme:
Sie wollen Abschlussarbeiten (BA/MA) mittels SMW verwalten. Für BAs & MAs erstellen Sie jeweils separate Templates. 

- Benutzen Sie indentische Properties für/in beiden Templates ?
- Wie bennenen Sie die Properties ? 
- Wie gelingt Ihnen die Unterscheidung der konkreten Instanzen (SWM Seiten)?



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

::: warning
The possibility of using pipes `|` for setting multiple values was deprecated starting with Semantic MediaWiki 3.0.0 and will be removed in a later version. It is strongly recommended to migrate to using the `
|+sep` parameter.
:::
::::
:::: 3rd-column
### c) Separate Values using a Named Separator
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

#### Radiobutton – Remove 'Keine Angabe' 
In order to remove the 'Keine Angabe' option from the set of selection options using radiobuttons or checkboxes, it is necessary to add the `|mandatory`-flag to the input declaration.

Optinally, set the `|default=...` parameter to a specific value to have it pre-selected.  


---
# Erstellung von Formularen

Vorsicht: Die automatische Generierung von Formularen ist fehlerhaft

Es gibt 2 Wege neue Seiten mittels Formularen zu erstellen

1. Zweistufig mit Eingabe des zu erzeugenden Seitennames vor dem Ausfüllen der Formularfelder (auf einer neuen Seite) --> The two-step process
2. Aktivierung des Formulars durch Aufruf eines Links oder Buttons --> The one-step process

Siehe Quellenverweis für eine Auflistung der Parameter und Parameterwerte

::: footnotes
https://www.mediawiki.org/wiki/Extension:Page_Forms/Linking_to_forms
:::


---
# Seitenerzeugung mittels Formularen

Es gibt 2 Wege neue Seiten mittels Formularen zu erstellen

::::: equalcolumns small
:::: 1st-column
__Zweistufiger Prozess__ _(vgl. two-step process)_

1. Separate Seite mit Eingabefeld für Seitennamen
2. Aufruf des Page Forms im 2. Schritt

```
Codebeispiel
```

::::
:::: 2nd-column
__Einstufiger Prozess__ _(vgl. one-step process)_

1. Direkter Aufruf des Formualars mittels Link oder Button 

```
Codebeispiel
```

:::::

1. Zweistufig mit Eingabe des zu erzeugenden Seitennames vor dem Ausfüllen der Formularfelder (auf einer neuen Seite) --> The two-step process
2. Aktivierung des Formulars durch Aufruf eines Links oder Buttons --> The one-step process

Siehe Quellenverweis für eine Auflistung der Parameter und Parameterwerte

::: footnotes
Quelle: <https://www.mediawiki.org/wiki/Extension:Page_Forms/Linking_to_forms>
:::



---
# Enabling Editing of Page Content via Forms

To get the _"edit with form"_ tab to appear on the page, you must use the parser function `{{#default_form:form-name}}` where form-name is the name of the form, without the namespace prefix `Form:`.

::::: equalcolumns small
:::: 1st-column
### a) Based on Category
- Recommended approach
- Requires that a page belongs to that category
- Main template that defines a page type must contain a `[[Category:...]]` tag
- `{{#default_form:form-name}}` need to be placed on the _category defintion page_
- Every page that uses a template automatically belongs to that category and uses the form
- ==TODO: What happens with sub categories?==
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
# Abfragen von Seiten auf denen ein Property NICHT gesetzt ist

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

::: definition
QueryForms ermöglichen die Abfrage von...

Quelle: Website
:::

Mittels Query Forms lassen sich die Template-Parameter über Formulareingabeelemente individuell befüllen.

Eine Spezialseite xxx bindet das Query-Form ein, überigbt deren Werte an das Template und stellt das transkludierte Template im Anschluss auf der Seite dar.  

Wichtig:
Damit das Query-Template bzw. die Query richtig funktioniert, muss bei den Parametern ein `+` als Alternative für einen leeren Wert gesetzt werden!

```
{{#ask:
 [[Category:BA_Abschlussmodul]] 
 [[BA_Betreuer::{{{Betreuer|+}}}]]
 [[BA_Co-Betreuer::{{{Co-Betreuer|+}}}]]
 [[Status_Verfahren::{{{Status|+}}}]]
 [[Abschluss_Semester::{{{Semester|+}}}]]
 ...
```



---
# Formatting of Boolean Values in Queries

By default, Boolean values will display `true` and `false` in queries. This can be changed starting with Semantic MediaWiki 2.4.0 by specifying a ==format string== to control what is displayed for the true and false values of a property.

::::: equalcolumns
:::: 1st-column
The following _formatting options_ are supported
-  `#LOCL` formatter (#LOCL to localize the output)
-  `#num` formatter (to produce 1 or 0)
-  `#tick` formatter (to display ✓ or ✕)
-  `#x` formatter (#x to output X that resembles a cross for true)
-  Custom label formatter (Using custom labels to define a boolean output and assign a true, false value display)

::: blue
Note that not all result formats may provide support for these formatters.
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

## Using the current date in an input element^1^
Using input type `datepicker`, it is possible to set the _current date_ as default value in the input element using the `#time` parser function^2^ of the `Extension:ParserFunctions`^3^

Example:
```
! Datum: 
| {{{field|Datum|input type=datepicker|property=Bestelldatum|date format=dd.mm.yy|default={{#time:d.m.Y}} }}}
|}
```

Please note: 
::: blue
Regardless of the formatting pattern set via the `date format=...` property, `datepicker` always returns the data in `yyyy/mm/dd` format.
:::

::: footnotes
^1^ https://www.mediawiki.org/wiki/Topic:Put4ygy4m0kw279f

^2^ https://www.mediawiki.org/wiki/Help:Extension:ParserFunctions##time

^3^ https://www.mediawiki.org/wiki/Help:Extension:ParserFunctions
:::


---
# Using an Individual Display Format for Date and Time

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

This parser function `#time` takes a date and/or time (in the Gregorian calendar) and formats it according to the syntax given^2,3^.

```
Format: {{#time: format string | date/time object | language code | local }}
```

::: footnotes
Source: https://www.semantic-mediawiki.org/wiki/Help:Date_formatting

^2^ A full list of parameters is available on the help page: https://www.mediawiki.org/wiki/Help:Extension:ParserFunctions##time

^3^ In case the `date/time` object is missing, the value of the magic word `{{CURRENTTIMESTAMP}}` (i.e., the time the page was last rendered into HTML) will be used.
:::

