---
marp: true
theme: custom-theme-roboto
paginate: true
---
<style>
/**
 * @theme enable-all-auto-scaling
 * @auto-scaling true
 */

/* @import 'default'; */
/* @import url('user-theme2.css'); */



</style>

<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files 2022_SS_PSE_Kick-Off.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- 2022_SS_PSE_Kick-Off.md -->

# Projekt Systementwicklung / Projekt Multimedia <br /> im SoSe 2022 

#### Prof. Dr. Stefan Linus Zander 

Kick-Off-Meeting – 19.04.2022  {.lightgreen .Big .skip}


---
<!-- header: Überblick -->
<!-- footer: Projekt Systementwicklung / Projekt Multimedia – Kick-Off-Meeting, 19.04.2022 -->

# Agenda

1. Gemeinsame Kennenlernrunde zu Beginn (alle)
2. Allgemeine Informationen zum Modul (S. Zander)
5. Vorstellung der Projekte und Arbeitspakete (S. Zander)
6. Projektassignments (alle)
7. Gemeinsame Q&A-Session (alle)
8. Nächste Schritte (alle)

---
# Gemeinsames Kennenlernen

<!-- In einer kurzen gemeinsamen Kennenlernrunde soll sich bitte jeder kurz vorstellen -->

Damit wir uns einander besser kennen lernen, stellt sich bitte jeder kurz vor

Für *Studierende*, sagen Sie bitte kurz ...
- ...in welchem Studienabschnitt sie sich befinden
- ...wo Ihre persönlichen **Interessen** liegen
- ...wo Ihre **Stärken** liegen
- ...welche **Erfahrungen** Sie mitbringen
- ...mit welchen **Erwartungen** Sie in das Modul gehen


---
# Beteiligte Personen (1/2)


**Hochschule Darmstadt**
- **Prof. Dr. Stefan Linus Zander** (Modulverantwortlicher) – stefan.zander@h-da.de



---
# Beteiligte Personen (2/2)

**Hochschule Darmstadt – Studierende**

:::: columns
::: single
- TBA
:::
::: single
- TBA
:::
::::


---
# Aufteilung in Projektteams

:::: columns
::: single
**Projektteam Elektromobilität**
- TBA
:::
::: single
**Projektteam Gutachtenerzeugung**
- TBA
:::
::::




---
<!-- header: Allgemeine Informationen zum Modul -->
# Allgemeine Informationen zum Modul


---
# Lernziele

::::: columns
:::: triple 
- Die Studierenden können eine Fragestellung in einem Teilgebiet der Informatik in einem ==Projektteam== *selbständig*, *eigenverantwortlich* und *professionell* bearbeiten. 
- Sie erlernen eine ==strukturierte== und ==professionelle Herangehensweise== und können ihre Ergebnisse in geeigneter Form _dokumentieren_, _präsentieren_, und _reflektieren_.
- Sie wenden ihre bis dahin erworbenen Kenntnisse an und erweitern und vertiefen ...
  - ihre *fachlichen Kompetenzen* in mindestens einem Teilgebiet der Informatik,
  - ihre Kompetenzen im Bereich *Software-Engineering* und *Projektmanagement*,
  - Schlüsselkompetenzen wie *Kooperations-* und *Teamfähigkeit*, _Problemlösungskompetenz_, *Kommunikations-* und *Moderationskompetenz*,
  - ==Strategien des Wissenserwerbs==
::::
:::: double
::: center
![](./figures/brain.jpg)
:::
::::
:::::

::: footnotes
Quelle: Modulhandbuch des Fachbereichs Informatik mit individuellen Ergänzungen und Anpassungen
:::



---
# Vorbereitung

- Aufteilung der Studierenden in **2 Projektteams** analog den beiden Projekten
- Jedes Projektteam bildet eigenverantwortlich **Dev.-/Research-Teams** (=2-3er Teams), die selbständig und eigenverantwortlich an den verschiedenen Arbeitspaketen arbeiten
  - so lassen sich Arbeitspakete (=Sprints) parallel bearbeiten^1^
- Jedes Projektteam bestimmt **1-2 Projektverantwortliche (=Product Owner)**^2^, die ...
  - ... den *Projektfortschritt* kontrolliert
  - ... *Arbeitsergebnisse* einfordert
  - ... als *Ansprechpartner* des Projektteams fungieren
  - ... *Arbeitspakete* und Sprints koordinieren
  - ... für die *Qualitätskontrolle* verantwortlich sind
  - ... mitarbeiten, aber auch Aufgaben *delegieren* können
- Projektdurchführung analog dem Scrum- und Design-Thinking Vorgehensmodell

::: footnotes
^1^ Durchführung analog dem Scrum-Modell (vgl. <https://scrumguides.org/docs/scrumguide/v1/Scrum-Guide-DE.pdf>)

^2^ Idealerweise aus unterschiedlichen Dev.-/Research-Teams
:::



---
# Zeitliches Engagement
Projekt Systementwicklung / Projekt Multimedia ist ein **7,5 CP Modul**.
- Zeitlicher Aufwand von **10,5h** wöchentliche Arbeitszeit (ohne Pausen) über **13 Wochen** hinweg
- das ist das zeitliche Engagement, das wir von Ihnen einfordern
- den zeitlichen Aufwand dürfen Sie frei einteilen



---
# Kommunikation
- via **Discord**: _Link folgt_
  - für die Kommunikation der Projektteams untereinander
  - für die Kommunikation mit den Stakeholdern zu technischen Fragen
- oder **Email** bei wichtigen und/oder offiziellen Dingen
  - achten sie auf einen aussagekräftigen Betreff
  - bitte alle Verantwortlichen in cc mit aufnehmen
- wöchentliche **Jour fixe** (ca. 30-45 Min pro Projektteam) mit den Stakeholdern
  - Durchführung mittels geeigneter Online-Tools (bspw. BBB etc.)
  - Pflichttermin für alle Beteiligte



---
# Entwicklungsplattform und Dokumentation

**GitLab**
- jede Gruppe benutzt ein eigenes **GitLab-Repository** 
- dort werden Programmcode und Dokumentation (Deliverables) gehostet
- bitte direkt selbst erstellen und die Teammitglieder hinzufühgen
<!-- - Unternehmensseitig werden notwendige APIs etc. zur Verfügung gestellt – mehr Informationen dazu in der Projektvorstellung -->

**Moodle**
- Link zum Moodlekurs: <https://lernen.h-da.de/course/view.php?id=17896> 
- offizielle Dokumentationen werden über **Moodle** bereit gestellt
- ebenso wie ergänzende Materialien



---
# Bewertungskriterien

:::: columns
::: single
In die **Gesamtbewertung** fließt ein
- ... das von Ihnen gezeigte *Engagement*
- ... die von Ihnen erbrachten *Ergebnissartefakte*
- ... *Qualität* und *Umfang* der erbrachten Ergebnisartefakte
- ... Ausfüllen besonderer *Rollen* im Projekt
- ... Ihre *Sichtbarkeit*
- ... die Rückmeldungen der *Stakeholder*
- ... die individuelle Gewichtung der *Beteiligungsmatrix*
:::
::: single
Die **Beteiligungsmatrix**
- ... ist von jedem Projektteam verplichtend zu führen
- ... beziffert den *%-tualen Beitrag* eines Teammitglieds
  - d.h., sie beziffert den Beitragsumfang, den ein Teammitglied zu einem Ergebnisartefarkt geleistet hat
- ... ist in Form einer *Matrix* zu dokumentieren
  - bspw. in den jeweiligen Deliverables
- ... wird von den Projektgruppen *eigenverantwortlich* erstellt
:::
::::



---
<!-- header: Projektübersicht -->
# Projekt #1: Car-Sharing-App für Elektromobilität


---
## Projekt #1: Car-Sharing-App für Elektromobilität

::: blue 
**Ziel**: Entwicklung einer einfach nutzbaren Car-Sharing-App auf Basis moderner Web-Technologien.
:::

{.HugeSkip}

**Allgemeine Anforderungen** 
- Lauffähig im Web und auf mobilen Endgeräten
- Verwaltung von NutzerInnen und Fahrzeugen
- Individualisierbares Dashboard mit div. Übersichten (Buchungen / Nutzung / gefahren Kilometer / Auslastung / etc.)
- Einfache und vielfältige Reservierungsmöglichkeiten (bspw. über einen gem. Kalender / via Email etc.)
- Schnittstelle zur Integration von Ladezustand und anderen technischen Merkmalen
- Einfachste Nutzung und Administration
- Hohe Code- und Dokumentationsqualität

::: warning
Die konkreten Anforderungen müssen in Stakeholder-Interviews mittels User-Research und Requirements Engineering Methoden erforscht und erarbeitet werden.
:::



---
<!-- header: Projektplanung -->
## Workpackage 1: User Research

- **Ziel**: _Benutzungsgruppenspezifische Nutzungsszenarien und -Anforderungen erforschen_
- **Task-Liste**:
  - Task 1: Stakeholderanalyse
  - Task 2: Erarbeitung von Interviewleitfäden für die teilstandardisierten Interviews mit den Stakeholdern (=Stereotypen)
  - Task 3: Durchführung und Auswertung der teilstandardisierten Interviews 
  - Task 4: Erarbeitung von Anwendungsszenarien und Anwendungsfällen
  - Task 5: Erarbeitung eines Anforderungkatalogs
  - Task 6: Aufteilung der Anforderungen analog dem KANO-Modell und Finden von Begeisterungsfaktoren
- **Milestones**:
  - ==Deliverable 1: User Research== mit
    - Dokumentation aller relevanter Artefakte des User Research 
      - Dokumentation der Stereotypenanalyse, 
      - Stakeholder-Interviews
      - Anwendungsszenarien und Use-Cases, 
      - Anforderungsspezifikation mit Begeisterungsfaktoren 
  - Anforderungkatalog inkl. Begeisterungsfaktoren
  
::: footnotes
Hinweis: Die notwendigen Informationen zur Durchführung des User-Research finden sich in den Unterlagen des [Moduls "NZSE"](https://projects.fbi.h-da.de/~s.zander/#nutzer-zentrierte-softwareentwicklung-nzse) von Prof. Dr. Stefan Zander (siehe [Moodle](https://lernen.h-da.de/course/view.php?id=6802))
:::


---
## Workpackage 2: UI-Entwurf & Prototyping

- **Ziel**: _Aus den Erkenntnissen des User Research erste UI-Prototypen erarbeiten und mit den Stakeholdern testen um zu einem finalen, akzeptierten Design zu kommen._
- **Task-Liste**:
  - Task 1: Erarbeitung der GUIs 
  - Task 2: Konzeption von User-Tests anhand der aus dem User-Research gewonnenen Erkenntnissen
  - Task 3: Durchführung der User-Tests mit den Steretypen
  - Task 4: Ableitung von Verbesserungen und Überarbeitung des Designs
- **Milestones**:
  - finaler Entwurf der Benutzungsschnittstellen (GUIs)
  - ==Deliverable 2: UI-Entwurf (=Designkonzept)==
    - Dokumentation des Designkonzepts für die User-Tests
    - Dokumentation der durchgeführten User-Tests
    - Dokumentation der gewonnenen Erkenntnisse
    - Dokumentation des finalen UI-Entwurfs


---
## Workpackage 3: Technologie-Research

- **Ziel**: _Evaluierung der technologischen und architektonischen Umsetzungsmöglichkeiten; System-Grob- und -feinentwurf._
- **Task-Liste**:
  - Task 1: Sichtung aktueller Technologien bzw. Analyse technologischer- und architektonischer Umsetzungsmöglichkeiten auf Basis der Anforderungsspezifikation
  - Task 2: Systemarchitekturentwurf
  - Task 3: Vorbereitung der Implementierungsphase
- **Milestones**:
  - ==Deliverable 3: Technologie-Research==
    - Evaluation der technologischen und architektonischen Umsetzungsmöglichkeiten
    - Dokumentation des System-Grob- und -feinentwurfs
  - Auswahl des Technologie-Stacks
  - Festlegung des Systemdesigns 


---
## Workpackage 4: Implementierung, Usability-Evaluation, Deployment

- **Ziel**: _Implementierung der Anwendung (Frontend & Backend), Testing,  Durchführung von Usability-Evaluierungsmethoden und Fertigstellung der Dokumentation._
- **Task-Liste**:
  - Task 1: Implementierung
  - Task 2: Usability Testing mittels heuristischer und empirischer Evaluationsmethoden 
  - Task 3: Code- und Doc-Reviews
  - Task 4: Deployment
  - Task 5: Abschluss (Vervollständigung) von Implementierung und Dokumentation
- **Milestones**
  - ==Deliverable 4: Usability-Tests==
    - Dokumentation der Usability-Test inkl. Testfällen
    - Dokumentation der Erkenntnisse aus der Usability-Evaluation (=Auswertung)
    - Dokumentation der Verbesserungen
  - Abgeschlossene Implementierung sowie Deployment des Systems
  - Übergabe des Systems sowie der Dokumentation



---
# Projekt 2: Automatisierte Gutachtenerzeugung mittels Semantic MediaWiki


---
## Zielsetzung

::::: columns
:::: single center
![](./figures/gutachten_optionen.png)

::: blue small bigskip
**Ziel**: Entwicklung einer Funktion zur benutzerfreundlichen Erstellung von Gutachten und zur Bewertung von akademischen Abschlussarbeiten auf Basis der Software Semantic MediaWiki.
:::
::::
:::: single center
![height:500px](./figures/gutachten_printed.png)
::::
:::::


---
## Workpackage 1: Einarbeitung

- **Ziel**: _Auseinandersetzung und Einarbeitung in die Software Semantic MediaWiki und der vorhandenen relvanten Extensions._
- **Task-Liste**
  - Task 1: Aufsetzen eines Testsystems
  - Task 2: Einarbeitung und Auseinandersetzung mit der Software und den zugrunde liegenden Konzepten
- **Milestones**
  - Grundlagen der Ontologie-Entwicklung mittels Semantic MediaWiki sind bekannt
  - Verständnis der Modellierungsprimitive
  - Eigene Wissensgraphmodelle mittels RDF modellieren und erklären können


::: footnotes
Hinweis: Eine Vielzahl an relevanten Informationen findet sich im [Moodle-Kurs](https://lernen.h-da.de/course/view.php?id=11623) zur Lehrveranstaltung ["Semantisches Wissensmanagement im Unternehmen: Konzepte, Technologien, Anwendungen"](https://obs.fbi.h-da.de/mhb/modul.php?nr=30.2646&sem=20212)
:::

---
## Workpackage 2: Konzeption

- **Ziel**: _Konzeption und Ersprobung von verschiedenen Umsetzungsmöglichkeiten und Auswahl des besten Ansatzes._
- **Task-Liste**
  - Task 1: User Research und Anforderungsspezifikation (siehe WP1 von Projekt #1) 
  - Task 2: Sammlung der entspr. Beurteilungskriterien und deren Ausprägungen
  - Task 3: Untersuchung der verschiedenen Umsetzungsmöglichkeiten
  - Task 4: Konzeption der Ablauflogik
  - Task 5: Vorbereitung der Umsetzung
- **Milestones**
  - ==Deliverable 1: Anforderungs- und Ablaufspezifikation==
    - Dokumentation des User Research und dessen Ergebnisse / Erkenntnisse
    - Anforderungsspezifikation
    - Ablaufspezifikation (formalisierte Darstellung des Prozesses aus techn. Sicht)
  - ==Deliverable 2: Beurteilungskriterien==
    - Katalog der Beurteilungskriterien und deren jew. Ausprägungsmerkmale
  




---
## Workpackage 3: Umsetzung und Integration in das bestehende Semantic MediaWiki

- **Ziel**: _Implementierung, Testen, Refinement und Integration in das bestehende Semantic MediaWiki-System des Fachbereichs._
- **Task-Liste**
  - Task 1: Implementierung
  - Task 2: Testing und Refinement
  - Task 3: Integration in bestehendes Semantic MediaWiki-System
- **Milestones**
  - ==Deliverable 3: System- und Anwendungsdokumentation==
    - Technische Dokumentation
    - Beschreibung der Funktionalität aus Anwendersicht
  - Abgeschlossene Implementierung
  - Abgeschlossene Integration 


---
# Fragen ?



---
<!-- header: Projektmanagement -->
# Projektmanagement

---
# Projektmanagement – Teil 1

::: blue centerbox small
Da wir analog dem **Agilen Manifesto** vorgehen wollen, anbei ein paar Gedanken zum strategischen und operativen Projektmanagement und der Projektdurchführung. Die folgenden Informationen dienen gleichzeitig als Vorbereitung für die wöchentlichen **Jour fixes**.
:::

{.Skip}
- Grundsätzlich: die Projektaufgaben (=Tasks der jeweiligen WPs) werden in wöchentlichen **Sprints** abgearbeitet^1^
- Die **Detailarbeiten** pro Sprint (Research / Development / etc) legt jedes Team individuell fest
- Jedes Projekt führt ein **Sprint**- und ein **Produkt-Backlog**. 
  - Das Sprint-Backlog dokumentiert die einzelnen Aufgaben und Ziele eines Sprints für jedes Team. 
  - Im Produkt-Backlog werden die Anforderungen der APs und der zugehörigen Tasks definiert und dokumentiert.
- Die Sprint- und Produkt-Backlogs werden in den **Git-Repositories** der jeweiligen Projekte geführt.
- Vor jedem Sprint steht die **Planung**; hier werden die Tasks der Arbeitspakete (=APs) aus der Projektbeschreibung in Teilaufgaben zerlegt und in das Sprint-Backlog übertragen (siehe vorheriger Punkt). 
- Jeder Sprint wird im **Sprint-Backlog** dokumentiert (Planung & Review).

::: footnotes
^1^ Nach dem SCRUM Guide sollen Sprints eine zeitliche Dauer von 2-3 Wochen haben; da wir jedoch einen vergleichsweise kurzen und fest-definierten Zeitrahmen haben werden wir wöchentliche Sprints abhalten.
:::



---
# Projektmanagement – Teil 2

- Das **Produkt-Backlog** dient als Basis für das Sprint-Review und ist “Richtschnur” für die Planung des nä. Sprints 
- Die MO-JFs sind also **Planungs**- und **Review-Meetings** zugleich. 
- Zusätzlich kann dort in von den Teams und Stakeholdern definierten Zeitpunkten eine **Retrospektive** durchgeführt werden. 
  - Spätestens nach der Erfüllung eines WPs soll eine Retrospektive stattfinden. 
- Zusätzlich bzw. ergänzend zu den JFs finden Zwischenpräsentationen statt – idR. bei der Erreichung eines Meilensteins. Die Präsentationstermine werden durch die Stakeholder festgelegt.

::: centerbox warning
Wichtig: Agiles Vorgehen bedeutet, dass sich die Projektdurchführung den aktuellen Anforderungen und vorherrschenden Gegebenheiten anpasst. Sollte sich im Verlauf des Projektes herausstellen, dass eine Nachjustierung sinnvoll ist, dann werden wir diese gemeinsam besprechen und durchführen.
:::


---
# Aufteilung in Projektteams


