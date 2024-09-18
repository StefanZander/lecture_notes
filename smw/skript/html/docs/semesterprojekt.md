# Semesterprojekt


### Allgemeines
: Durchführung in **3-4er Teams**; Konstellation und Thema bitte in __Moodle__ hinterlegen ([-->Link](https://lernen.h-da.de/mod/data/view.php?id=357528))

: **Praktische Umsetzung** eines Wissensmanagementproblems mittels Semantic MediaWiki mit allen verfügbaren Sprachelementen und einschlägigen Erweiterungen

: Die Festlegung des **Wissensmanagementproblems** und der Domäne (=Anwendungsgebiet) erfolgt in Abstimmung mit dem Betreuer

: **Präsention** der Umsetzung am Semesterende


### Themen

Das **Anwendungsgebiet** (=*Gegenstandsbereich*) für das Semesterprojekt können Sie **frei wählen**.

!!! info "Hinweis: Themen dürfen mehrfach bearbeitet werden!"

Sofern Sie _kein_ eigenes Thema bearbeiten wollen, können Sie eines der im Folgendenen dargestellten Themen wählen:

!!! abstract "Themenvorschläge"

    - Analyse der [FlexForm-Extension](https://www.open-csp.org/DevOps:Doc/FlexForm) mit Umsetzung vieler Beispiele
    - Analyse der Unterschiede zwischen den Erweiterungen [PageForms](https://www.mediawiki.org/wiki/Extension:Page_Forms) and [FlexForms](https://www.mediawiki.org/wiki/Extension:FlexForm)
    - Abbildung von Fachbereichsrats-Protokollen in Semantic MediaWiki
    - ~~Realisierung einer Literaturbeschaffungsplattform inkl. Bestellübersichten für den Fachbereich~~
    - Realisierung einer einfach nutzbaren Bewertungs-/Beurteilungsseite für studentische Abschlussarbeiten, ggf. mit PDF-Ausgabe des Beurteilungsbogens
    - ~~Verwaltung von Studierendenanmeldungen für Praxisphase und Abschlussarbeiten (ggf. gekoppelt mit Bewertungsplattform)~~
    - Gemeinsame Plattform für Studierende zum Finden von Praktikumsstellen und Bewertung selbiger (_dieses System soll dann für alle Studierende freigeschaltet werden, so dass dies die Suche nach passenden Praktikumsstellen vereinfacht bzw. Studierende dabei unterstützt, die passende Stelle zu finden._)
    - Verwaltung von Schulungen und Weiterbildungsmaßnahmen mit Kompetenzbetrachtung
    - Automatisierte MitarbeiterInnenvorschläge auf Basis von angefragten Skills (bspw. bei Kundenanfragen von Personalvermittlungsagenturen). Die Skills von Mitarbeitenden ergeben sich in der Regel aus Projekteinsätzen.


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

Für jedes Semesterprojekt sind folgende **Arbeitspakete** durchzuführen bzw. Meilensteine zu erfüllen.

Die Nummerierung lässt keine Rückschlüsse auf die Bearbeitungsreihenfolge zu. Mit Ausnahme von AP1 ist es vorteilhaft, alle weiteren Arbeitspakete inkrementell und iterativ zu bearbeiten. 


#### AP0: Installtation Semantic MediaWiki

!!! warning "Dieser Schritt ist _nicht_ notwendig bei der Nutzung einer hochschuleigenen Instanz."

: Installation eines Semantic MediaWiki Systems mit einschlägigen Erweiterungen  

    !!! info "Über den Fachbereich gehostete SMW-Instanzen"
        Falls Sie über keine eigene Installation verfügen, dann __kontaktieren Sie uns bitte__; wir werden anschließend eine, über den Fachbereich **gehostete Instanz** aufsetzen. Auf diese Instanz kann allerdings *nur* mittel **VPN** zugegriffen werden und das Einspielen von Erweiterungen (=Extensions) ist nicht möglich. Die Instanz ist aber mit allen relevanten Extensions ausgestattet bzw. entsprechend vorkonfiguriert.

        _Bitte kontaktieren Sie uns wenn Sie eine solche Instanz benötigen._

#### AP1: Problembeschreibung und Wissensmanagementfragestellung
<!-- AP1: Problembeschreibung und Wissensmanagementfragestellung -->
: Definition der Problemstellung und der Wissensmanagementfragestellungen, d.h., legen Sie dar, welche ==Informationsbedürfnisse== existieren und in welchen Anwendungsfällen diese auftreten (vgl. Anwendungszenariobeschreibungen in HCI).
: Wichtig: Berücksichtigen Sie hier auch ein ==Rollenkonzept==, d.h., welche Benutzer haben in welcher Rolle welches Informationsbedürfnis und überlegen Sie auch, wie Sie dieses in geeigneter Weise adressieren können. 
: Tragen Sie diese Informationen in die entspr. Aktivität in Moodle ein.
: Verfeinern Sie die Beschreibungen ggf. mit Fortschreiten des Semesterprojektes iterativ

#### AP2: Interaktionskonzept
: Überlegen Sie sich ein ==Interaktionskonzept==, d.h., eine Darlegung, mit welchen technischen Mitteln (Formularen / Ansichten etc.) die Informationsbedürfnisse addressiert bzw. befriedet werden können.
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
: Identifizierte NutzerInnen (vgl. ==Rollenkonzept==) sollen diese für die Erstellung neuer und Anpassung bestehender Informationen verwenden können.

#### AP5: Abschlusspräsentation
: Zusammenführung aller Arbeiten und Erkenntnisse in einer ==15-20-minütigen Live-Demonstration==.


#### Beurteilungskriterien

Die folgenden Aspekte spielen eine Rolle bei der Bewertung des Semesterprojekts.

!!! success "Bewertungsaspekte des Semesterprojekts"
    - Durchgängige Verwendung einschlägiger Modellierungselemente (Categories, Properties, Subobjects, Templates, Concepts, PageForms, QueryForms, etc.)
    - Nuztung semantischer Templates an sinnvollen Stellen zur Vermeidung des _Semantic Drifts_
    - Gut ausgearbeitete und systematisch gegliederte Landingpage, die sich an den Informationsbedürfnissen und situativen Arbeitskontexten der FachanwenderInnen (Rollen) orientiert
    - FachanwenderInnen-freundliche und -komfortable Dateneingabe und Nutzung des Systems
    - Einstufiger Prozess beim Anlegen neuer Seiten mittels PageForms
    - Aufgreifen und adressieren unterschiedlichster Informations- und Nutzungsbedürfnisse
    - Intelligente und reflektierte Entwurfs- bzw. Modellierungsentscheidungen
    - Darlegung verschiedener Entwurfsalternativen und Begründung für den gewählten Modellierungsansatz
    - Systematischer und ausgewogener Research zu Informationsbedürfnissen und den zu adressierenden Wissensmanagementproblemen
    - Clevere Lösungen bzw. Umsetzungsideen die über den VO-Inhalt hinaus gehen
    - Umsetzung von allen Leistungs- und ---besonders--- Begeisterungsfaktoren (vgl. KANO-Modell)
    - Hoher Grad an Vernetzung zwischen den verschiedenen abgebildeten Domänen (=Bereichen) im System
    - Bearbeitung des Seiteninhalts mittels PageForms
    


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

