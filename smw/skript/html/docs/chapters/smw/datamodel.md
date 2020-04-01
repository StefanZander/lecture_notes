# Datamodel

TODO: Data in SMW is always encoded as property-value pairs on pages (Categories / Subobjects / concepts / results of #ask queries can also be "data"...)


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