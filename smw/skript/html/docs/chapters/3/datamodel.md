# Datamodel


### Vorbemerkungen

Ein Großteil unserem menschlichen Daseins und Wirken definiert sich über Beziehungen zu anderen "Dingen" (_hier im weitest möglichen Sinne zu verstehen_). 
Möchte man diese Gegenstandsbereiche in technischen Systemen möglichst präzise und "naturgetreu" abbilden, so braucht es ausdrucksmächtige Beschreibungsformate und Datenstrukturmodelle.
Viele bekannte Datenstrukturmodelle und Formate sind zwar sehr effizient in ihrer maschinellen Verarbeitung, ihnen fehlt es aber an der notwendigen Ausdrucksmächtigkeit, d.h., diese sind nicht in der Lage, die komplexen Beziehungen zwischen Dingen präzise und widerspruchsfrei (=*unambiguitiv*[^1]) abzubilden.

[^1]: Frei von Mehrdeutigkeiten; Dinge mit singulärem Verständnis

!!! example
    **Beispiel**  
    Versuchen Sie nachfolgend beschriebenen Sachverhalt in einem Datenmodell ihrer Wahl möglichst widerspruchsfrei und eindeutig abzubilden.
    
    "_In seiner konstituierenden Sitzung vom 25.06.2019 beschloss der Fachbereichsrat in Bezug auf Berichtspunkt Nr. 5 des Protokolls vom 17.05.2019 mit 10 'Ja'-Stimmen, 0 Enthaltungen und keinen Gegenstimmen:  
    Prof. Dr. Kai Renz wird zum kommenden Sommersemester neues Mitglied des Stundenplanerteams._"

Bei der Durchführung des obigen Beispiels werden Sie sehr schnell feststellen, dass die Repräsentation in Form eines **konzeptuellen Graphen** mit Knoten und Kanten die Beziehungen zwischen den "Dingen" in einer natürlichen Darstellung am nächsten kommt[^2].

[^2]: Selbstverständlich könnte man die Beziehungen auch als Assoziationen in einem UML Klassendiagramm abbilden; hierbei verliert man allerdings die Möglichkeit, die Beziehungen näher zu spezifizieren (bspw. Typ einer Beziehung, Beziehungen zwischen Beziehungstypen, and die Beziehung geknüpfte logische Bedingungen, etc).

Was wissen wir bisher aus Kapitel 2: Technologische Grundlagen

* Ausschnitte aus Gegenstandsbereichen lassen sich am besten unter Reduzierung struktureller Heterogenität als konzeptueller Graph darstellen
* Beziehungen sollten als First-Class Elemente behandelt werden
* URIs/IRIs ermöglichen die eindeutige Identifizierung von "Dingen"
* Zusammen mit dem Konzept der Content Negotiation ermöglichen sie eine Unterscheidung zwischen technischen- und realweltlichen Repräsentationen
* Maschinen-verarbeitbare Semantik bedeutet: Definitions have Consequences  – d.h., die Semantik eines Elements ist definiert durch die sich aus der Anwendung des mit dem Element assozierten Regelsatzes ergebenden Konsequenzen.

  
### Wie werden Informationen in Semantic MediaWiki kodiert ?

<!-- Informationen in SWM is encoded in form of **property-value pairs** on pages. -->

<!-- TODO: Data in SMW is always encoded as property-value pairs on pages (Categories / Subobjects / concepts / results of #ask queries can also be "data"...) -->

Semantic MediaWiki allows to encode information in the form of **facts**
: ~> _"Berlin has a population of 3,520,031 people"_

A fact consists of of three parts:
: 1) **Wikipage** (subject), e.g. "Berlin"
: 2) **Property** (predicate), e.g. "Has population"
: 3) **Value** (object or literal), e.g. "3,520,031"

These three parts can be split into a **relation** and a **statement**:
: Relation ~> _Berlin has a population._
: Statement ~> _The population is “3,520,031”._

A statement consists of a **property** and its **value**:
: Property (ie. _predicate_), e.g. “Has population” 
: Value (ie. _object_ or _literal_), e.g. “3,520,031”

Facts are encoded as **property-value pairs** on wiki pages.

!!! example
    **Example**  
    (page – property – value):
    ``` diff
    Cologne   has population   1.017.155
    Germany   has capital      Berlin
    Spinoza   born on          24 Nov 1632
    ```

Such property-value pairs are called **facts**.

Adding a statement (property-value pair) to a page (_the subject_) is called **annotation**.

---

### Datamodel 

From the previous section, we see that SMW employs a **triple-based data model** similar to **RDF**, consisting of
: *subject* -- the "thing" an assertion is about
: *predicate* -- the property or relation between a subject and object
: *object* -- the "value" in the statement, which could be another page or a literal 

In SMW terms, 
: the **subject** is always a page or an subobject (being a Blank node in RDF terms)
: the **predicate** always resembles the property
: the **object** can either be a page or a data type (string/number/telephone/etc.)

The triple-based model employed by Semantic MediaWiki is inherited from W3Cs Resource Description Framework (RDF) specification.

A *page*-*property*-*value* triple resembles the *subject*-*predicate*-*object* triples of RDF and is called a **statement** or **assertion** in RDF terms[^1].


Pages can be related to pages via properties. 
That way, the object in the first statement becomes the subject of the second statement (in RDF-terms) (--> see has capital).