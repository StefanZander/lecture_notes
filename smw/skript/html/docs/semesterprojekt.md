# Semesterprojekt


### Allgemeines
: Durchführung in 2er Teams; Konstellation und Thema bitte in __Moodle__ hinterlegen ([-->Link](https://lernen.h-da.de/mod/data/view.php?id=357528))

: Praktische Umsetzung eines Wissensmanagementproblems mittels Semantic MediaWiki mit allen verfügbaren Sprachelementen und einschlägigen Erweiterungen

: Die Festlegung des Wissensmanagementproblems und der Domäne erfolgt in Abstimmung mit dem Betreuer

: Präsention der Umsetzung am Semesterende via BBB


### Themen

Das Anwendungsgebiet (=*Gegenstandsbereich*) für das Semesterprojekt können Sie frei wählen.

Sofern Sie kein eigenes Thema bearbeiten wollen, können Sie eines der im Folgendenen dargestellten Themen wählen:

!!! example
    __Themenliste__

    - Abbildung von Fachbereichsrats-Protokollen in Semantic MediaWiki
    - Realisierung einer Literaturbeschaffungsplattform inkl. Bestellübersichten für den Fachbereich
    - Realisierung einer Bewertungsplattform für studentische Abschlussarbeiten inkl. Studierendenverwaltung und PDF-Ausgabe des Beurteilungsbogens
    - Verwaltung von Studierendenanmeldungen für Praxisphase und Abschlussarbeiten (ggf. gekoppelt mit Bewertungsplattform)
    - ==++Neu++== Gemeinsame Plattform für Studierende zum Finden von Praktikumsstellen und Bewertung selbiger (_dieses System soll dann für alle Studierende freigeschaltet werden, so dass dies die Suche nach passenden Praktikumsstellen vereinfacht bzw. Studierende dabei unterstützt, die passende Stelle zu finden._)

_Die genaue inhaltliche Festlegung erfolgt in bilateraler Abstimmung mit dem Betreuer._


<!-- ### Inhaltliche Ausgestaltung

Für jedes Semesterprojekt sind folgende Meilensteine zu erfüllen

- Definition der Problemstellung und der Wissensmanagementfragestellungen
    - d.h., eine Darlegung, welche Informationsbedürfnisse existieren sowie
    - eine Darlegung der Anwendungsfälle, in denen diese auftreten (vgl. Anwendungszenariobeschreibungen in NZSE) 
- Erstellung eines Knowledge Representation Model
- Installation eines Semantic MediaWiki Systems mit einschlägigen Erweiterungen  
    Hinweis: Falls Sie über keine eigene Installation verfügen dann kontaktieren Sie uns bitte; wir werden IT-Services bitten, eine Instanz aufzusetzen. Auf diese Instanz kann allerdings nur mittel VPN zugegriffen werden
- Konzeption und Implementierung des zugrunde liegenden Datenmodells zur Modellierung des Gegenstandsbereichs
- Erstellung von entsprechenden Konzepten, Properties, Datatypes, Templates, Forms, Concepts, Queries etc.
- Erstellung eines Interaktionskonzepts, d.h., eine Darlegung, mit welchen technischen Mitteln (Forms etc.) die Informationsbedürfnisse befriedet werden können
- Darstellung, wie die Anwendungsfälle in SWM umgesetzt werden
- Zusammenführung aller Arbeiten und Erkenntnisse in einer Abschlusspräsentation -->

### Arbeitspakete

Für jedes Semesterprojekt sind folgende Arbeitspakete durchzuführen bzw. Meilensteine zu erfüllen.

Die Nummerierung lässt keine Rückschlüsse auf die Bearbeitungsreihenfolge zu. Mit Ausnahme von AP1 ist es vorteilhaft alle weiteren Arbeitspakete inkrementell und iterativ zu bearbeiten. 


#### AP0: Installtation Semantic MediaWiki
: Installation eines Semantic MediaWiki Systems mit einschlägigen Erweiterungen  

    !!!note 
        __Hinweis__: Falls Sie über keine eigene Installation verfügen dann kontaktieren Sie uns bitte; wir werden IT-Services bitten, eine Instanz aufzusetzen. Auf diese Instanz kann allerdings nur mittel VPN zugegriffen werden

#### AP1: Problembeschreibung und Wissensmanagementfragestellung
<!-- AP1: Problembeschreibung und Wissensmanagementfragestellung -->
: Definition der Problemstellung und der Wissensmanagementfragestellungen, d.h., eine Darlegung, welche Informationsbedürfnisse existieren sowie eine Darlegung der Anwendungsfälle, in denen diese auftreten (vgl. Anwendungszenariobeschreibungen in NZSE) auf ==1 DIN-A4-Seite==.
: Wichtig: Berücksichtigen Sie hier auch ein ==Rollenkonzept==, d.h., welche Benutzer haben in welcher Rolle welches Informationsbedürfnis und überlegen Sie auch, wie Sie dieses in geeigneter Weise adressieren können. 
: Upload der Seite in Moodle bis zum Termin #6.

#### AP2: Interaktionskonzept
: Erstellung eines ==Interaktionskonzepts==, d.h., eine Darlegung, mit welchen technischen Mitteln (Formularen / Ansichten etc.) die Informationsbedürfnisse bearbeitet bzw. befriedet werden können.
: Darlegung, welche Oberflächen für welche User (Rollen) bestimmt sind und welche Informationsbedürfnisse diese adressieren.

#### AP3: Daten- und Domänenmodelle
: Konzeption und Implementierung des zugrunde liegenden ==Datenmodells== zur Modellierung des gewählten und in AP1 beschriebenen Gegenstandsbereichs.
: Erstellung der entsprechenden ==Sprachelemente== (Kategorien, Concepts, Properties, Datatypes, Subobjects etc.) in Semantic MediaWiki

#### AP4: Semantische Infrastruktur
: Aufbau der semantischen Infrastruktur zu Daten- und Domänenmodellierung  
    - Formulare  
    - Semantische Templates  
    - QueryForms  
    - Queries  
    - Landing Pages  
    - etc.
: Identifizierte NutzerInnen sollen diese für die Erstellung neuer und Anpassung bestehender Informationen verwenden können.

#### AP5: Abschlusspräsentation
: Zusammenführung aller Arbeiten und Erkenntnisse in einer ==10-minütigen Abschlusspräsentation== inkl. Live-Demonstration.





<!-- Although the tasks are listed and numbered in a sequential order, most of them should be worked in parallel and in an iterative and incremental manner.  -->

<!-- Please note that the order of tasks is not necessarily always sequentional. For some tasks (e.g. 4 / 5 / 6) it might by useful to conduct them in parallel and in an incremental and iterative manner.  -->

<!-- * [WP #1: Defining the Problem Domain and Knowledge Management Issues](task1.md)
* [WP #2: Defining a Knowledge Representation Model](task1.md)
* [WP #3: Installing Semantic MediaWiki with Extensions](task1.md)
* [WP #4: Implementing the Knowledge Representation Model (Ontological Classes / Properties / Concepts)](task1.md)
* [WP #5: Creating the Technical Software Infrastructure (Templates / Forms / Queries)](task1.md)
* [WP #6: Defining a User Interaction Concept](task1.md)
* [WP #7: User Interaction Concept](task1.md)
* [WP #8: Implementation of Use Cases](task1.md)
* [WP #9: Preparation of Final Presentation](task1.md)

WP = Work Package -->
