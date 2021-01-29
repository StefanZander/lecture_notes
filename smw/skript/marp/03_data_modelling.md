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

Kapitel 3.2: Datenmodellierung mit Semantic MediaWiki {.lightgreen .big .skip}

---
<!-- header: Chapter 1: Fundamentals -->
<!-- footer: Prof. Dr. Stefan Zander -->

# Vorbemerkung

Ein Großteil unseres menschlichen Daseins und Wirken definiert sich über _Beziehungen_ zu anderen "Dingen" (hier im weitest möglichen Sinne zu verstehen). Möchte man diese Gegenstandsbereiche in technischen Systemen möglichst präzise und “naturgetreu” abbilden, so braucht es _ausdrucksmächtige Beschreibungsformate_ und _Datenstrukturmodelle_. Viele bekannte Datenstrukturmodelle und Formate sind zwar sehr effizient in ihrer maschinellen Verarbeitung, ihnen fehlt es aber an der notwendigen Ausdrucksmächtigkeit, d.h., diese sind nicht in der Lage, die komplexen Beziehungen zwischen Dingen präzise und widerspruchsfrei (=unambiguitiv) abzubilden.

{.smallskip}

:::: example
**Beispiel** 
Versuchen Sie nachfolgend beschriebenen Sachverhalt in einem Datenmodell ihrer Wahl möglichst widerspruchsfrei und eindeutig abzubilden.
::: kursiv
“In seiner konstituierenden Sitzung vom 25.06.2019 beschloss der Fachbereichsrat in Bezug auf Berichtspunkt Nr. 5 des Protokolls vom 17.05.2019 mit 10 ‘Ja’-Stimmen, 0 Enthaltungen und keiner Gegenstimme:
Prof. Dr. Kai Renz wird zum kommenden Sommersemester neues Mitglied des Stundenplanerteams.“
:::
::::


---
# Überlegungen zum Datenmodell

Bei der Durchführung des vorherigen Beispiels werden Sie sehr schnell feststellen, dass die Repräsentation in Form eines ==konzeptuellen Graphen== mit _Knoten_ und _Kanten_ die Beziehungen zwischen den “Dingen” in einer natürlichen Darstellung am nächsten kommt2.

Mit den Informationen aus Kapitel 2: Technologische Grundlagen können wir diesen Graphen weiter verfeinern.

<!-- Was wissen wir bisher aus Kapitel 2: Technologische Grundlagen -->

::: twocolumns
- Ausschnitte aus Gegenstandsbereichen lassen sich am besten unter Reduzierung struktureller Heterogenität als _konzeptueller Graph_ darstellen
- Beziehungen sollten als _First-Class Elemente_ behandelt werden
- ==URIs/IRIs== ermöglichen die eindeutige Identifizierung von “Dingen”
- Zusammen mit dem Konzept der ==Content Negotiation== ermöglichen sie eine Unterscheidung zwischen technischen- und realweltlichen Repräsentationen
- Maschinen-verarbeitbare Semantik bedeutet: _Definitions have Consequences_ – d.h., die Semantik eines Elements ist definiert durch die sich aus der Anwendung des mit dem Element assozierten Regelsatzes ergebenden Konsequenzen.
:::

---
# Wie werden Informationen in SMW kodiert ?

Semantic MediaWiki encodes information in the form of ==facts==

::: blue center
**Example**: Berlin has a population of 3,520,031 people
:::

{.skip}
::::: equalcolumns
:::: 1st-column
A ==fact== can be represented in a __triple-based lingusitic structure__:
1. The ==subject== of a sentence, e.g., "Berlin"
2. The ==predicate==, e.g., "has a population"
3. The ==object==, e.g., "3,520,031 people"

These three parts can be split into a ==relation== and a ==statement==:
- **Relation** ~> Berlin has a population.
- **Statement** ~> The population is “3,520,031”.
::::
:::: 2nd-column
This ==triple== can be expressed with elements from SMW's KRF:
1. Subject is always a Wikipage
   - e.g. Page `Berlin` in the main namespace
2. Predicates are pages in the `Property` namespace
   - e.g., Page `Property:has Population`  
3. Objects are represented as **literals** or other **wiki pages**
   - e.g., value “3,520,031” in case the object is a literal
   - e.g., Page named "Germany" in case object is another Wikipage 
   <!-- - **Literals** embedded in the Wikipage with the annotation, e.g., “3,520,031” -->
   <!-- - other **Wiki pages** in the main namespace, e.g, "Klaus Wowerit"  -->
::::
:::::



---
# Encoding Information as Facts

Semantic MediaWiki encodes information in the form of ==facts==

::: blue center
**Example**: Berlin has a population of 3,520,031 people
:::

{.skip}
::::: equalcolumns
:::: 1st-column
A ==fact== can be represented in a __triple-based lingusitic structure__:
1. The ==subject== of a sentence, e.g., "Berlin"
2. The ==predicate==, e.g., "has a population"
3. The ==object==, e.g., "3,520,031 people"

These three parts can be split into a ==relation== and a ==statement==:
- **Relation** ~> Berlin has a population.
- **Statement** ~> The population is “3,520,031”.
::::
:::: 2nd-column


A statement consists of a ==property== and its ==value==:
- **Property** (i.e. predicate), e.g. “Has population”
- **Value** (i.e. object or literal), e.g. “3,520,031”

Adding a statement (property-value pair) to a page (the subject) is called ==annotation==.
::::
:::::

::: warning centerbox center
As a consequence, facts are encoded as **property-value pairs** on wiki pages.
:::


---
# Encoding Property-Value-Pairs

<!-- Semantic MediaWiki encodes facts in form of a triple-base

::: blue center
**Example**: Berlin has a population of 3,520,031 people
:::

{.skip} -->
::::: equalcolumns
:::: 1st-column
This ==triple== can be expressed with elements from SMW's KRF:
1. __Subject__ is always a wiki page 
   - e.g. a wiki page named `Berlin` in the main namespace
2. ==Predicates== are wiki pages in the `Property` namespace
   - e.g., a wiki page named `has Population` in the `Property` namespace
3. ==Objects== are represented as **literals** or other **wiki pages**
   - e.g., value “3,520,031” in case the object is a literal
   - e.g., Page named "Germany" in case the statement's object is another Wikipage 
   <!-- - **Literals** embedded in the Wikipage with the annotation, e.g., “3,520,031” -->
   <!-- - other **Wiki pages** in the main namespace, e.g, "Klaus Wowerit"  -->
::::
:::: 2nd-column
**Examples**

(page – property – value):

```
Cologne   has population   1.017.155
Germany   has capital      Berlin
Spinoza   born on          24 Nov 1632
```
::::
:::::