# Definitionen 



### Conceptual Graphs

Conceptual Graphs (dt. Konzeptuelle Graphen) helfen uns bestimmte Sachverhalte in einer einfachen grafischen Notation darzustellen, d.h., diese zu abstrahieren. 

Konzeptuelle Graphen erlauben für den Gegenstandsbereich relevante Entitäten voneinander zu unterscheiden sowie deren Zusammenhänge grafische darzustellen. 

Beziehungen werden in konzeptuellen Graphen häufig als eigenständige Entitäten (=_first-class citizen_) dargestellt.

Auch kann je nach Gegenstandsbereich eine Unterscheidung zwischen Entitätstypen (Instanzen vs. Klassen // terminologische vs. assertionale Elemente) hilfreich und wichtig sein. 
Entitytypen können bspw. durch stereotypische Annotationen gekennzeichnet werden (vgl. UML `<<Category>>`, `<<Abstract>>` etc).

Konzeptuelle Notationsformen werden häufig zur Darstellung von semantischen Wissensgraphen verwendet, wenn die Darstellung von Sachzusammenhängen im Vordergrund steht und nicht die technische Umsetzung in einer speziellen Notationsform.

--> TODO: Beispiel hinzufügen


### Semantics in Computer Science

!!! warning
    **SEMANTICS in CS mean DEFINITIONS HAVE CONSEQUENCES**

What does that mean?

The semantics of an element is determined by the consequences that emerge by executing the rules that apply to it.

Deutsch:
Die Bedeutung eines Elements definiert sich durch die Konsequenzen, die sich aus der Anwendung des dahinter stehenden Regelsatzes ergeben.


- A reasoner can assess whether a new instance is properly defined (meanging: comply with the axioms that constitute a knowledge base)
- ...

The semantics of a language precisely define how to interpret a (complex) expression in it

Semantics remove ambiguities in the interpretation of descriptions
i.e., all tools agree on their behaviour/give the same results & answers
 ~> semantics acts as partial specification for tool developers
