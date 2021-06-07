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
<script src="https://kit.fontawesome.com/8b20b734d0.js" crossorigin="anonymous"></script>

<!-- marp --engine ./engine.js --html --watch --theme-set custom-theme-roboto.css -- --allow-local-files forschungssemester.md -->
<!-- marp --pdf --html --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- forschungssemester.md -->

# Vortrag zum Forschungssemester 

#### Prof. Dr. Stefan Linus Zander

Eine Übersicht der Forschungsaktivitäten und Tätigkeiten im WiSe 2020/2021 {.lightgreen .Big .skip}



---
<!-- header: Übersicht -->
<!-- footer: Prof. Dr. Stefan Zander -->
# Tätigkeiten 

- Markdown in der Lehre
- Wissensgraph-basiertes Tool zur Verwaltung von Abschlussarbeiten
- Umbau des WPF "Semantisches Wissensmanagement im Unternehmen"
- sonstiges 



---
# Tätigkeiten 

- ==Markdown in der Lehre== {.big}
- ==Wissensgraph-basiertes Tool zur Verwaltung von Abschlussarbeiten== {.big}
- Umbau des WPF "Semantisches Wissensmanagement im Unternehmen"
- sonstiges 

---
# Teil 1: Markdown für die Lehre


---
<!-- header: Motivation -->
## Warum Markdown-basierte Präsentationsframeworks für Lehrinhalte ?

{.Bigskip}
::::: columns
:::: single
- Trennung von Inhalt von Darstellung und Layout
- Zielformat-unabhängige Beschreibung von Inhalten
- Gemeinsame Erstellen von Lehrunterlagen 
- Versionierung
- Weniger "sperrig" als LaTeX Beamer
- Template-basierte Darstellung 
- Viele Tools frei verfügbar und Open Source
- Nutzung von offenen Formaten und Standards
- Automatisierte Generierungsworkflows und Deployment  
::::
:::: single
::: center
![height:300px](./figures/markdown.jpg)
:::
::::
:::::

::: footnotes
Bildquelle: https://css-tricks.com/wp-content/uploads/2016/01/choose-markdown.jpg
:::



---
<!-- header: Vorgehensweise -->
# Methodology :fa-diagnoses:
<!-- Note: Stufenweises Vorgehen: 1. Vor-Selektion in Frage kommender Ansätze -->

::::: columns
:::: single
**Betrachtete Ansätze**
- Marp – (https://marp.app/) :fa-eye: :fa-diagnoses: 
- Slideas – (https://www.slideas.app/) :fa-eye: 
- R Markdown – (https://rmarkdown.rstudio.com/) :fa-eye: 
- Slidev – (https://sli.dev/) :fa-eye: 

**Forschungsfragen** {.Bigskip}
- Ist eine Erhöhung der _Produktivität_ feststellbar?
- Sind aktuelle Ansätze "ready" für einen Einsatz in der _Lehre_?

<!-- Note: Führt die Trennung von Inhalt und Darstellung zu einer erhöhten Produktivität bei der Erstellung von Lehrmaterialien ? -->
<!-- **Erwartungen** {.Bigskip}
- Schnellere Erzeugung von VO-Inhalten
- Konzentration auf Inhalt und weniger auf Darstellung
- trotzdem Flexibilität bei der Darstellung
- Ansprechende Präsentation -->

**Proof of Concept** {.Bigskip}
- Umbau der Unterlagen meines Moduls _"Semantisches Wissensmanagement im Unternehmen"^1^_ (> 200 Slides) 
::::
:::: single
::: center
![height:480px](./figures/marp2.png)
:::
::::
:::::

::: footnotes
Online abrufbar unter: https://projects.fbi.h-da.de/~s.zander/smw/html/
:::


---
# Wie sieht der Quellcode einer Markdown-Slide aus ?


---
# Wissensarten
<!-- header: Beispiele -->

Grundsätzlich lassen sich ==2 Wissensarten== unterscheiden^1^:

:::: twocolumns
::: blue
**Explicit Knowledge** (=_Disembodied Knowledge_)
- ... kann kommuniziert werden
- ... kann auf verschiedenen Ebenen formalisiert werden 
- ... kann in verschiedenen Formaten abgespeichert werden
:::

::: green
**Tacit / Implicit Knowledge** (=_Embodied Knowledge_)
- ... im Gehirn gespeichert 
- ... schwer zu kommunizieren
- ... nicht/kaum zu formalisieren
:::
::::

_Explizites Wissen_
...ist Faktenwissen, eindeutig kodifizierbar und mittels Sprache eindeutig kommunizierbar.{.skip}

_Implizites bzw. verborgenes Wissen_
...ist Erfahrungs- und Handlungswissen, das an Personen gebunden ist; 
...es ist nur schwer und nicht vollständig explizierbar (d.h., in Worte zu fassen)

::: footnotes
^1^ nach Michael Polanyi (1966), “The Tacit Dimension”, University of Chicago,  Press: Chicago
:::


---
## Quellcode

```md
---
# Wissensarten

Grundsätzlich lassen sich ==2 Wissensarten== unterscheiden^1^:

:::: twocolumns
::: blue
**Explicit Knowledge** (=_Disembodied Knowledge_)
- ... kann kommuniziert werden
- ... kann auf verschiedenen Ebenen formalisiert werden 
- ... kann in verschiedenen Formaten abgespeichert werden
:::

::: green
**Tacit / Implicit Knowledge** (=_Embodied Knowledge_)
- ... im Gehirn gespeichert 
- ... schwer zu kommunizieren
- ... nicht/kaum zu formalisieren
:::
::::

_Explizites Wissen_
...ist Faktenwissen, eindeutig kodifizierbar und mittels Sprache eindeutig kommunizierbar.{.skip}

_Implizites bzw. verborgenes Wissen_
...ist Erfahrungs- und Handlungswissen, das an Personen gebunden ist; 
...es ist nur schwer und nicht vollständig explizierbar (d.h., in Worte zu fassen)

::: footnotes
^1^ nach Michael Polanyi (1966), “The Tacit Dimension”, University of Chicago, Chigago Press
:::
```

---
# Weitere Beispiele

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
Die am häufigsten verwendeten _Komponenten_ sind

- Datenbank
- Versionsverwaltung
- Suchfunktion
::::
:::: 2nd-column
### MediaWiki

_MediaWiki_ ist die bedeutenste und weitverbreiteste Implementierung eines Wiki-Systems

- Open-source Wiki-Software
- Technische Basisplattform der Wikipedia
- Genutzt von zehntausenden Webseiten und Organisationen^1^
::::
:::::

::: footnotes
^1^ Quelle: https://www.mediawiki.org/wiki/MediaWiki/de
:::


---
# Beispiel: Definition von eigenen Annotationen

```md
::: definition
Ein ==Wiki== ist ein ==webbasiertes Hypertext-System== mit einer eigenen
Markup-Sprache, das es Benutzenden ermöglicht, Webseiten direkt (d.h. ohne
Programmierung) und online in einem Web-Browser zu erzeugen, zu lesen, zu
verknüpfen und zu ändern.

Quelle: Angelehnt an Karin Haenelt, "Semantik im Wiki am Beispiel des MediaWiki und Semantic MediaWik", Fraunhofer, 2011.
:::
```




---
# Lernzielkontrolle

::: green
**Aufgaben**

Beantworten Sie folgende Fragen:
- Wie lässt sich Wissen messen oder bewerten?
    > Überlegen Sie sich Ansätze und Möglichkeiten dies zu tun und diskutieren Sie diese. 

- Lässt sich Wissen überhaupt managen? Falls ja, wie bzw. durch welche Maßnahmen?
    > Denken Sie kritisch über diese Frage nach; lässt sich Wissen wirklich managen und falls ja, in welcher Form und Ausprägung? Welche Ansätze (technisch / organisatorisch / personell / etc.) halten Sie hierfür für geeignet? Sammeln Sie eine Reihe von Ansatzpunkten und diskutieren Sie diese innerhalb ihrer Gruppe

- Warum ist Wissensmanagement mehr als eine technische Plattform?
- Überlegen Sie sich eine Reihe von organisationalen Maßnahmen zur Erhöhung der Informationsqualität
- Wie lässt sich Information Overload reduzieren?
:::


---
# MediaWiki: The Structure of Page Names

==Page names== consist of _3 different parts_
::::: columns
:::: single
``` 
Namespace:Title/Subpagetitle
```
::::
:::: single
```
Example:   "User:Denny/Tests"
```
:::
::::
:::::

::::: equalcolumns small
:::: 1st-column
### 1. Namespace
- Prefixes, separated from title by colon `:`
- Not all prefixes that end in `:` are namespaces!
    - Available prefixes provided by MW, more can be added in configuration
    - Default: `Main` (empty), `User`, `Category`, `Template`, `Help`, `MediaWiki`, `File`, `Special`, `Project` (sitename)
- Purpose: distinguish _basic "content types"_
- Can have aliases (e.g. `File:` and `Image:`) 
<!-- - Every namespace has a talk version: Talk, User talk, ... -->
::::
:::: 2nd-column
### 2. Pagetitle
- Defined during page creation
- MediaWiki determines whether page already exists
    - For *existing page*s, the page's content will be displayed
    - For *non-existend pages*, the edit view will be displayed
    ::: warning small skip
    **Page names are case-sensitive**
    MediaWiki distinguishes between upper- and lower-case letters in page names!
    :::
::::
:::: 3rd-column
### 3. Subpagetitle
- Postfixes, separated from title by slash `/`
- Not all postfixes after `/` are subpages!
    - Enabled for certain namespaces
    - By default only for User and all Talk pages 
- Often not appropriate for organising pages (rigid, hierarchical content structure)
- Small difference to pages with `/` in title
    - For example when moving pages
- Used in Wikipedia for multilingual page content
::::
:::::



---
# Silent Annotations using #set

The `#set` ==parser function== allows to annotate data, i.e. assign values to a property, _silently_ and avoid the `[[Property::value]]` syntax.

**Example** {.skip}
::::: columns
:::: double
```python
{{#set:
 Has population=2,229,621
 |Located in country=France
}}
```
::::
:::: double
```python
Equivalent Property Notation:

[[Has population::2,229,621| ]] 
[[Located in country::France| ]]
```
::::
:::: single small
<!-- Please note: -->
The `set` parser function does _not display_ anything, but saves the very same properties as data.
::::
:::::

It is also possible to set ==multiple values== to the same property: {.skip}
::::: columns
:::: single
```python
{{#set:
 Has postcode=75001
 |Has postcode=75002
 ...
}}
```
::::
:::: double
```c
{{#set:
 |Has text=fc00:123:8000::/%6;2001:db8::1428:57ab;2001:db8:0:8d3:0:8a2e:70:7344
 |+sep=;
}}
```
For full compatibility use the _separator_ `|+sep=...` function to separate multiple values
::::
:::::


::: footnotes
Sources: (1) https://www.semantic-mediawiki.org/wiki/Help:Setting_values/Working_with_the_separator_parameter and (2) https://www.semantic-mediawiki.org/wiki/Help:Setting_values
:::



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
# Annotation von Codefragmenten

```java 
package org.java.examples.singleton;

/**
 * Thread-safe implementation of a singleton
 * Does not require explicit synchronization
 * Uses the initialization-on-demand holder idiom that
 * makes uses of the class loader's own synchronisation mechanism
 * @author stefan zander
 *
 */
public class ThreadSafeSingleton {

    private ThreadSafeSingleton(){ }        

    private static class Holder {
       private static final ThreadSafeSingleton INSTANCE = new ThreadSafeSingleton();
    }

    public static ThreadSafeSingleton getInstance() {
        return Holder.INSTANCE;
    }

    // Aufruf wie gehabt mit ThreadSafeSingleton instance = ThreadSafeSingleton.getInstance()
}
```



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
  - a `has_full_name`-property the value of which is a Literal (datatype: `Text`)
  - a `works_in`-property the value of which is the wiki page representing Prof. Studer's research group
::::
:::::


---
# Resumé


---
<!-- header: Zusammenfassung -->
# Resumé 

::::: columns
:::: single
:far-thumbs-up: **Wann ist der Einsatz von Markdown-basierten Präsentationsframeworks sinnvoll ?**

- Folien mit vielen Codebeispielen
- Mischung von Text und mathematischen Formeln
- Standardisierte Darstellung durch Stilregeln
- Nutzung der eigenen Toolchain
- Inhalte mit erhöhtem Änderungsaufwand
- Gemeinsames Erstellen von Lehr- und Lerninhalten
- Integration von unterschiedlichen Medientypen 
  - Youtube, Codepen, etc.
::::
:::: single
:far-thumbs-down: **Welche Nachteile gibt es ?** 
- Frameworks teiw. noch unausgereift
  -  viele "Hacks"
  -  Dinge funktionieren nicht wie erwartet
- Kein bzw. nur rudimentäres "progressive disclosure" 
- Weniger Designflexibilität
- teilw. ungewünschte Seiteneffekte
- Verlust der Übersichtlichkeit bei größeren Foliensätzen (mMn > 40 Folien)
- Präsentations-Modus abhängig vom Framework und 
  - u.U. reduzierter Toolumfang
::::
:::::


---
# Beantwortung der Forschungsfragen

**Forschungsfrage 1**: _Ist eine Erhöhung der Produktivität feststellbar ?_ ==--> teilweise== {.Bigskip}
- Hohes Ausmaß an "Ramp-up"-Arbeit notwendig (Erstellung von Stilregeln / Austesten von Erweiterungen / etc.)
<!-- - Verständnis der Funktions- und Arbeitsweise eines Frameworks notwendig -->
- Man geht doch gelegentlich dazu über, die Darstellungsweise zu optimieren
- In jedem Fall aber zusätzliche Motivation durch Freude bei der Erstellung 
<!-- 
- War ich wirklich schneller: nein
- habe das nicht gemessen, wegen fehlender Vergleichbarkeit; nur qual. erforschbar
- Geschwindigkeit steigt mit Erfahrung
- Natürlich eine stark individuell geprägte Meinung
-->


**Forschungsfrage 2**: _Sind aktuelle Ansätze "ready" für einen Einsatz in der Lehre ?_ ==--> unter best. Voraussetzungen und Exp.-Freudigkeit ja== {.Bigskip}
- Für techn.-mathematische Inhalte in jedem Fall
- Schnelles Deployment auf untersch. Zielmedien und bessere Änderungsnachvollziehbarkeit für Lehrende und Studierende
- Abhängig vom fachlichen / technischen Hintergrund der jew. Person
<!-- - Eine Option für das gem. Weiterentwickeln von Lehrinhalten -->
<!-- - Wenn man unterschiedliche Zielmedien bedienen möchte -->




---
# Teil 2: (Live-Demo)<br/>Wissensgraph-basiertes Tool zur Verwaltung von Praxisphasen und Abschlussarbeiten


---
<!-- header: <br/> -->

# Last but least...

---
![](./figures/haus0.jpeg)


---
![](./figures/haus1.jpeg)


---
# Vielen Dank!


---
# Playground: Vorteile (persönliche Meinung) :fa-flag:

::::: columns
:::: single
- Konzentration auf Inhalte nicht auf deren Darstellung {color:green}:fa-check:{color}
- Schnelle Generierung von neuen Lehrmaterialien <span style="color: orange">:fas-star: :fas-star: :fas-star: </span>
- Einheitliche Darstellung durch Verwendung von Tempaltes und definierten Stilregeln *:fa-check:*{.red}
- Einfache Syntax ohne {color:red}umfangreiches{color} Tagging (vgl. LaTeX-Beamer)
- [Attraktive]{.red} Darstellung von `Programmcode`
- Einfache Einbindung von *Web-basierten*{.red} Inhalten und Formaten
::::
:::: single
```md
- Konzentration auf Inhalte nicht auf deren Darstellung 
  {color:green}:fa-check:{color}
- Schnelle Generierung von neuen Lehrmaterialien 
  <span style="color: orange">
    :fas-star: :fas-star: :fas-star: 
  </span>
- Einheitliche Darstellung durch Verwendung von Tempaltes 
  und definierten Stilregeln *:fa-check:*{.red}
- Einfache Syntax ohne {color:red}umfangreiches{color} 
  Tagging (vgl. LaTeX-Beamer)
- [Attraktive]{.red} Darstellung von `Programmcode`
- Einfache Einbindung von *Web-basierten*{.red} 
  Inhalten und Formaten
```
::::
:::::


