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
5. Tipps


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

