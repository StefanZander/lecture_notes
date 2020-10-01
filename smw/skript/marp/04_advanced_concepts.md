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

::::: equalcolumns
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
