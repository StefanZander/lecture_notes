# Datamodel


### Vorbemerkungen

Ein Großteil unserem menschlichen Daseins und Wirken definiert sich über Beziehungen zu anderen Dingen. 
Möchte man diese Gegenstandsbereiche in technischen Systemen möglichst präzise und "naturgetreu" abbilden, so braucht es ausdrucksmächtige Beschreibungsformate und Datenstrukturmodelle.
Viele bekannte Datenstrukturmodelle und Formate sind zwar sehr effizient in ihrer maschinellen Verarbeitung, ihnen fehlt es aber an der notwendigen Ausdrucksmächtigkeit, d.h., diese sind nicht in der Lage, die komplexen Beziehungen zwischen Dingen präzise und widerspruchsfrei (=*unambiguitiv*[^1]) abzubilden.

[^1]: Frei von Mehrdeutigkeiten; Dinge mit singulärem Verständnis

!!! example
    **Beispiel**  
    Versuchen Sie nachfolgend beschriebenen Sachverhalt in einem Datenmodell ihrer Wahl möglichst widerspruchsfrei und eindeutig abzubilden.

    _..._

Bei der Durchführung des obigen Beispiels werden Sie sehr schnell feststellen, dass die Repräsentation in Form eines konzeptuellen Graphen mit Knoten und Kanten die Beziehungen zwischen den Entitäten in einer natürlichen Darstellung am nächsten kommt[^2].

[^2]: Selbstverständlich könnte man die Beziehungen auch als Assoziationen in einem UML Klassendiagramm abbilden; hierbei verliert man allerdings die Möglichkeit, die Beziehungen näher zu spezifizieren (bspw. Typ einer Beziehung, Beziehungen zwischen Beziehungstypen, logische Constraints, etc).

TODO: Data in SMW is always encoded as property-value pairs on pages (Categories / Subobjects / concepts / results of #ask queries can also be "data"...)

Semantic MediaWiki allows to encode information in the form of facts
: ~> Berlin has a population of 3,520,031 people

A cact consists of of three parts:
: Wikipage (subject), e.g. "Berlin"
: Property (predicate), e.g. "Has population"
: Value (object), e.g. "3,520,031"

These three parts can be split into a relation and a statement:
: Relation: Berlin has a population. 
: Statement: The population is “3,520,031”.

A statement consists of a property and its value:
: Property (predicate), e.g. “Has population” 
: Value (object), e.g. “3,520,031”

Adding a statement to a page (subject) is called annotation.





SMW employs a triple-based data model consisting of
: subject -- the ... an assertion is about
: predicate -- the property / relation
: object -- the "value" in the statement

The triple-based model employed by Semantic MediaWiki is inherited from W3Cs Resource Description Framework (RDF) specification.

The combination of subject – predicate – object is called a **statement** or **assertion**.

Semantic MediaWiki encodes data in the form of **property-value pairs** assigned to pages
!!! example
    **Example**  
    (page – property – value):
    ``` diff
    Cologne has population 1.017.155
    Germany has capital Berlin
    Spinoza born on 24 Nov 1632
    ```

A page-property-value triple resembles the subject-predicate-object triples of RDF and is called a **statement** or **assertion**.

In SMW terms, 
: the **subject** is always a page or an subobject (being a Blank node in RDF terms)
: the **predicate** always resembles the property
: the **object** can either be a page or a data type (string/number/telephone/etc.)


Pages can be related to pages (see has capital)