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

<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files 04_subobjects.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- 04_subobjects.md -->

# Semantisches Wissensmanagement im Unternehmen: <br />Konzepte, Technologien, Anwendungen

#### Prof. Dr. Stefan Linus Zander

Kapitel 4: Fortschrittliche Modellierungskonzepte in Semantic MediaWiki {.lightgreen .Big .skip}

---
<!-- header: Kapitel 0: Inhalte -->
<!-- footer: Prof. Dr. Stefan Zander -->
# Inhalte

1. Motivation
2. Einführendes Beispiel
3. Ein erster Lösungsansatz
4. Darstellung komplexer Sachverhalte mittels Subobjects
5. Abfrage von Subobjects
6. Tipps


---
# Leitfragen

1. Wie lassen sich komplexe Inhalte in Wissensgraphen abbilden ?
2. Wie lassen sich n-äre Beziehungen in Semantic MediaWiki umsetzen ?


---
# Einführendes Beispiel (1/2)

Nicht alle Aspekte eines Gegenstandsbereichs lassen sich durch _Property-Value-Paare_ abbilden.

:::::example
**Beispiel**
> "Meryl Streep played Margaret Thatcher in The Iron Lady"

Properties `played role` und `played in` mit folgenden Statements:
- Meryl Streep played in The Iron Lady
- Meryl Streep played role Margaret Thatcher

Allerdings existieren noch weitere Rollenbesetzungen von Meryl Streep:
- Meryl Streep played in The Devil Wears Prada
- Meryl Streep played role Miranda Priestly
:::::


---
# Einführendes Beispiel (2/2)

Daraus resultiert der folgende konzeptuelle Graph:

::: center
![height:400px](./figures/merly_streep_example.png)
:::

Frage: Welche Rolle spielte nun Merly Streep im Film The Iron Lady ? {.kursiv}


---
# Ein erster Lösungsansatz

1. Erstellung einer neuen Seite mit dem Namen `Streep's role in The Iron Lady` mit folgenden Eigenschaften:
    ```
    [[role::Margaret Thatcher]]  
    [[film::The Iron Lady]] 
    ```

2. Hinzunahme der Annotation auf der Meryl Streep Seite:
    ```
    [[played::Streep's role in The Iron Lady]]
    ```

:::: task 
**Aufgabe**:

1. Stellen Sie obigen Modellierungsansatz in einem konzeptuellen Graphen dar

2. Beurteilen Sie obigen Modellierungsansatz im Hinblick auf Flexibilität, Wartbarkeit, Datensparsamkeit. Beachten Sie insbesondere, dass Meryl Streep in Ihrer beruflichen Laufbahn in mehr als 89 Filmen (Quelle: IMDB.com) mitgewirkt hat.
::::



---
# Ein Lösungsansatz mit Subobjects

Wie Sie bereits aus Datenbanken wissen handelt es sich bei dem einführenden Beispiel modellierungstechnisch um **n-äre Beziehungen**.

Diese lassen sich in Semantic MediaWiki mittels ==Subobjects== abbilden.

:::: example
**Beispiel**:

Erstellung eines neuen Subobjects auf der Meryl Streep Seite mit den properties `movie` und `role`
```
{{#subobject:The Iron Lady 
 |role=Margaret Thatcher 
 |movie=The Iron Lady
}}
```
::::

{.Bigskip}

:::: task 
**Aufgaben**: {.nobottommargin}
1. Stellen Sie den neuen Modellierungsansatz in einem konzeptuellen Graphen dar
2. Beurteilen Sie den gerade entworfenen Modellierungsansatz erneut nach Flexibilität, Wartbarkeit, Datensparsamkeit.
::::


---
# Grafische Darstellung

::: center
![height:500px](./figures/merly_streep_subobject.png)
:::



---
# Tipp

Um die **Abfragekomplexität** zu verringern kann es gelegentlich sinnvoll sein, innerhalb eines Subobjects Informationen zu hinterlegen, _auf welcher Seite es eingebettet ist_ (in RDF: zu welchem Subject es gehört). Dies kann mit einem zusätzlichen frei zu definierenden _Property_ realisiert werden, ==dessen Wert dem Namen der Seite entspricht, auf der das Subobject eingebettet ist==.

::::: columns
:::: double
::: example
**Beispiel**

Stating that the subobject `The Iron Lady` was embedded on the `Meryl Streep` page
```
{{#subobject:The Iron Lady 
 ...
 |played by=Meryl Streep 
}}
```
:::
::::
:::: single
**Hinweis**:
Falls das Subobject mittels einem Template transkludiert wird, so kann für die Angabe des Seitennamens das Magic Word `{{PAGENAME}}` verwendet werden.
::::
:::::

{.skip}

::::: columns 
:::: double
**Explizit benannte Subobjects** können von überall aus in einem Semantic MediaWiki adressiert und in Annotationen genutzt werden:
```
[[played::Meryl Streep#The Iron Lady]]
```
::::
:::: single
Bei **anonymen Subobjects** ist dies nicht möglich, da ein interner Bezeichner als Identifier vergeben wird, der im Sourcecode der wiki Seite nicht zu sehen ist.
::::
:::::


---
## Beispiel: Speicherung des Seitennamens im Subobject

```
<noinclude>
This is the "Project member with role" subobject template.
It should be called in the following format:
<pre>
    {{Project member with role
     |project= #filled with {{PAGENAME}}
     |role=
     |start_date=
     |end_date=
     |member=
    }}
</pre>
Edit the page to see the template text.
</noinclude><includeonly>
{{#subobject:
 |Refers to project={{PAGENAME}} <!-- refers to name of parent page -->
 |Has role={{{role|}}}
 |Has start date={{{start_date|}}}
 |Has end date={{{end_date|}}}
 |Has member={{{member|}}}
 |type=project_membership
}}
</includeonly>
```




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


