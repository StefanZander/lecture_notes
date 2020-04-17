# Übung 2: Semantische Wissensgraphmodellierung

!!! abstract
    **Lernziele**

    * [x] Sie können einen Ausschnitt eines Gegenstandbereichs in einen semantischen Wissensgraphen überführen
    * [x] Sie können Wissensgraphen mittels dem Resource Description Framework (RDF) darstellen
    * [x] Sie verstehen die Rolle von Ontologien in semantischen Wissensgraphen


## Aufgaben

### Literaturrecherche 

1. Lesen Sie das **Kapitel 1 - 3** des Buchs
   
    : _"Semantic Web for the Working Ontologist – Effective Modeling in RDFS and OWL" (Second Edition)_  
    von Dean Allemang und Jim Hendler (--> [Link in Moodle](https://lernen.h-da.de/pluginfile.php/466426/mod_resource/content/1/Semantic%20Web%20for%20the%20Working%20Ontologist%202nd.pdf)) 
    
    und beantworten Sie folgende Fragen:

    1. _Welche Rolle spielen Modelle in der Mensch-Maschine-Kommunikation ?_
    2. _Erläutern Sie die Konsequenzen, welche die vier wesentlichen Grundkonzepte (AAA, Non-unique Naming Assumption, Netzwerkeffekt, Open-World Assumption) auf die Informationsqualität eines Gegenstandbereichs haben._
    3. _Erläutern Sie, wie (d.h., mit welchen Mitteln) RDF das Konzept AAA abbildet bzw. umsetzt_

<!-- 2. Lesen Sie das Paper xxx (Link in Moodle) und beantworten Sie folgende Fragen:
    1. ...
    2. ...
    3. ... -->

### Modellierung eines realen Ausschnitts eines Gegenstandbereichs

Stellen Sie den aus Übung 1 bekannten Sachverhalt mittels RDF dar. Verwenden Sie eigene URIs (mit bel. Namespace, den Sie in Ihrem Modell abkürzen können) zum Ausdruck von Resourcen und Properties in der ABox[^1].

> "_In seiner konstituierenden Sitzung vom 25.06.2019 beschloss der Fachbereichsrat in Bezug auf Berichtspunkt Nr. 5 des Protokolls vom 17.05.2019:  
    Prof. Dr. Kai Renz ist neues Mitglied des Stundenplanerteams._"

Hinweise:

- Berücksichtigen Sie in Ihrem Wissensgraphen auch etwaige Generalisierungs- und Spezialisierungsbeziehungen in der TBox. 
- Überlegen Sie, welchen Sachverhalt Sie als assertionales und welches als terminologisches Wissen ausdrücken.
- Untersuchen Sie die in Ihrem Wissensgraphen verwendeten Resourcen dahingehend, ob sie zur TBox oder ABox gehören, d.h., ob eine Resource terminologisches oder assertionales Wissen ausdrückt.
- Überlegen Sie, was Subject, Object oder Literal ist.
- Verwenden Sie zur Darstellung ein beliebiges CASE[^2]-Tool. Entscheidend ist weniger die 100%-ig korrekte Verwendung der RDF/S Sprachelemente als vielmehr eine schlüssige Konzeptualisierung, d.h., Überführung des o.g. Beispiels in einen semantischen Wissensgraphen (der mittels RDF/S formalisiert wird).


[^1]: Als Namensraum können Sie `ex:` verwenden; Beispiel: Für den Sachverhalt `nimmt an Sitzung teil` können Sie ein Property `ex:attend` verwenden.

[^2]: CASE = Computer Aided Software Engineering