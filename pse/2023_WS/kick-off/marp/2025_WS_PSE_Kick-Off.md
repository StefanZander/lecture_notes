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

<!-- <script src="https://kit.fontawesome.com/8b20b734d0.js" crossorigin="anonymous"></script>  -->
<!-- <script src="https://kit.fontawesome.com/bfb4213bb3.js" crossorigin="anonymous"></script> -->
<!-- <script src='https://kit.fontawesome.com/a076d05399.js' crossorigin='anonymous'></script> -->
 
<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files 2025_WS_PSE_Kick-Off.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- 2025_WS_PSE_Kick-Off.md -->

# Projekt-Systementwicklung im WiSe 2025/2026

#### Prof. Dr. Stefan Linus Zander

Kick-Off-Meeting – 15.10.2025  {.lightgreen .Big .skip}


---
<!-- header: Überblick -->
<!-- footer: Projekt Systementwicklung / Projekt Multimedia – Kick-Off-Meeting, 15.10.2025 -->

# Agenda

1. Gemeinsame Kennenlernrunde zu Beginn (alle)
2. Allgemeine Informationen zum Modul (S. Zander)
3. Vorstellung des Projekts und der Arbeitspakete (S. Zander)
4. Projektassignments (alle)
5. Gemeinsame Q&A-Session (alle)
6. Nächste Schritte (alle)


---
# Gemeinsames Kennenlernen :fas-people-group:

<!-- In einer kurzen gemeinsamen Kennenlernrunde soll sich bitte jeder kurz vorstellen -->

Damit wir uns einander besser kennen lernen, stellt sich bitte jede/r kurz vor

Für *Studierende*, sagen Sie bitte kurz ...
- ...in welchem Studienabschnitt sie sich befinden
- ...wo Ihre persönlichen **Interessen** liegen
- ...wo Ihre **Stärken** liegen
- ...welche **Erfahrungen** Sie mitbringen
- ...mit welchen **Erwartungen** Sie in das Modul gehen


---
# Beteiligte Personen (1/2)

**Hochschule Darmstadt** 
- **Prof. Dr. Stefan Linus Zander** (Modulverantwortung und Lehrveranstaltungsleitung) 
  - Email: stefan.zander@h-da.de 
  - Website: https://fbi.h-da.de/personen/stefan-zander

<!--
- **Lars Kleinschmidt** (Technische Projektleitung – CTO) 
  - Email: Lars.Kleinschmidt@stud.h-da.de


**Klinikon GmbH** {.Bigskip}
- **Dipl. Volkswirt Roland Trefftz** (fachliche Projektleitung und Stakeholder) 
  - Email: trefftz@klinikon.com
  - Website: https://www.klinikon.com/
-->





---
# Beteiligte Personen (2/2)

**Hochschule Darmstadt – Studierende**

::::: columns
:::: double
- Chen, Yuan – yuan.chen@stud.h-da.de
- Pintea, Filip Ioan – filipioan.pintea@stud.h-da.de
- Incze, Antonia (Niki) – antonia.incze@stud.h-da.de 
- Gligor, Sorana-Maria – soranamaria.gligor@stud.h-da.de
- Mladin, Raul Gabriel – raulgabriel.mladin@stud.h-da.de
- Marginean, Antonia-Madalina – antoniamadalina.marginean@stud.h-da.de
- Matlák, Péter-Zsolt – peterzsolt.matlak@stud.h-da.de 
- Bartus, Bíborka – 	biborka.bartus@stud.h-da.de
- Martínez Fernández, Olaya – olaya.martinezfernandez@stud.h-da.de
- Maniu, Maria-Diana – mariadiana.maniu@stud.h-da.de 
::::
:::: single
::::
:::::


<!-- ---
# Aufteilung in Projektteams

::::: columns
:::: single bluebox
**Projektteam RPN-Calculator**
- Engler Cedric – Cedric.Engler@stud.h-da.de
- Gotha Etienne – Etienne.Gotha@stud.h-da.de
- Räpple Lukas – Lukas.Raepple@stud.h-da.de^1^
- Steinrücken Niklas – Niklas.Steinruecken@stud.h-da.de
 
::::
:::: single greenbox
**Projektteam Fachbereichsratsprotokolle**
- Elsässer Dimitrij – Dimitrij.Elsaesser@stud.h-da.de^1^
- Führes Jasmin – Jasmin.Fuehres@stud.h-da.de
- Thelen Tobias – Thelen.Tobias@stud.h-da.de
- Weishäupl Daniel – Daniel.Weishaeupl@stud.h-da.de
::::
:::::

::: footnotes
^1^ Product Owner der jeweiligen Projekte
::: -->




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
# Durchführung

- Aufteilung der Studierenden auf Arbeitspakete (aka Workpackages (WP), aka Epics) (siehe Projektplan)
- Jedes Arbeitspaket hat **eine/n Verantwortliche/n**
  - Die Studierenden arbeiten selbständig und eigenverantwortlich an den gewählten Arbeitspaketen 
  - so lassen sich Arbeitspakete parallel bearbeiten^1^
- Das Projektteam bestimmt **eine/n Haupt-Projektverantwortliche/n**, die/der ...
  - ... den *Projektfortschritt* kontrolliert
  - ... *Arbeitsergebnisse* einfordert und die Erfüllung der DoD überprüft
  - ... als *Ansprechpartner* für das Projektteam und die Auftraggeber fungieren
  - ... *Arbeitspakete* und Sprints koordinieren
  - ... für die *Qualitätskontrolle* verantwortlich ist
  - ... mitarbeiten, aber vor allem Aufgaben *delegiert* 
  - ... _WP-Leader-Treffen_ organisiert und durchführt
- Projektdurchführung analog dem _Scrum-_ und _Design-Thinking_ Vorgehensmodell

::: footnotes
^1^ Durchführung analog dem Scrum-Modell (vgl. <https://scrumguides.org/docs/scrumguide/v1/Scrum-Guide-DE.pdf>)
:::


<!-- 
---
# Zeitliches Engagement 

Projekt Systementwicklung / Projekt Multimedia ist ein **7,5 CP Modul**.
- Das Bachelorstudium sieht **30 CP** an Modulen pro Semester vor
- **1 CP** entspricht **30 Arbeitsstunden** laut den gängigen Berechnungsmodellen^1,2^
- Der Arbeitunsumfang für das Modul entspricht deshalb **225 Arbeitsstunden**
- Damit ergibt sich eine wöchentliche Arbeitszeit (ohne Pause) von **ca. 17,3 h - 18,75 h**.

::: footnotes
^1^ https://www.studis-online.de/Studieren/ects.php

^2^ https://fbc.h-da.de/fileadmin/Dokumente/Pruefungsordnung/ABPO_AEnderung_2018-01-30.pdf
::: -->



---
# Zeitliches Engagement – eine realistische Betrachtung
Projekt Systementwicklung / Projekt Multimedia ist ein **7,5 CP Modul**.
- Das Bachelor-/Masterstudium sieht **30 CP** an Modulen pro Semester vor
- Bei einer wöchentlichen Arbeitszeit von **42 h** ergibt sich ein zeitlicher Aufwand von **10,5 h** (ohne Pausen) über **14 Wochen** hinweg^1^
- Dass ist das zeitliche Engagement, das wir von Ihnen einfordern
- Den zeitlichen Aufwand dürfen Sie frei einteilen
<!-- - Zeitlicher Aufwand von **10,5h** wöchentliche Arbeitszeit (ohne Pausen) über **16 Wochen** hinweg^1^ -->

::: redbox center marg20 Bigskip
In Summe veranschlagen wir pro Person ein :far-clock: **Gesamtzeitbudget** von **150h - 160h**
:::

::: footnotes
^1^ Vorlesungszeit (14 Wochen) + Lernwoche (1 Woche) + Prüfungszeit (1 Woche)
:::


<!--
---
# Zeitschiene :far-clock:

:fas-timeline: **Wichtige Deadlines**
- Laufzeit: max. 14 Wochen
- **Ende WP1 und WP2: 13.07. (EOD) (sharp!)**
- **Ende Migration: 14.07. (EOD)**
  - Projekt ist in den Master gemerged
  - Begleitung der Migration durch dediziertes Team
- **Abschluss Entwicklung Demonstrator der App: 21.07. oder 28.07. (EOD)**
  - Durchführung von User-Tests 
  - Bugfixing durch gesamte Gruppe
  - Einreichung und Bearbeitung von Features
  - Testen mit den Apple-/Android-Testtools 
- **Ende der Bearbeitungszeit: 03.07.**
  - ab jetzt nur noch "Aufräumarbeiten" und Projekt "glattziehen"
- **Offizielles Projektende: 10.07.** :fas-hourglass-end:
-->


---
# Kommunikation :fas-people-arrows:
- (optional) via :fab-discord: **Discord**:  TBA <!--<https://discord.gg/73tyXbSw>-->
  - für die Kommunikation der Projektteams untereinander
  - für die Kommunikation mit dem/den Projektverantwortlichem/na zu technischen Fragen
- :fas-envelope: **Email** bei wichtigen und/oder offiziellen Dingen
  - achten sie auf einen aussagekräftigen Betreff
  - bitte alle Verantwortliche/Betroffene in cc mit aufnehmen
- wöchentliche :fa-users-line: **Jour fixe** (ca. 60-90 Min für alle Projektteams) mit dem/den Stakeholder(n)
  - Durchführung mittels BBB (vFBI/002)
  - Pflichttermin für alle Beteiligten
- wöchentliche :fas-microchip: **WP-Leader-Treffen** untereinander
  - verpflichtend für alle WP-Leader (ggf. Ersatzmitglied bestimmen)
  - Besprechung von technischen / fachlichen Entscheidungen und/oder Problemen bei der Projektdurchführung



---
# Entwicklungsplattform und Dokumentation

**GitLab** :fab-gitlab:
- Für das Projekt existiert ein internes **GitLab-Repository**: <https://code.fbi.h-da.de/pse_zander/markdown_quizzes>
  - die Studierenden werden von uns dort eingeschrieben 
- dort werden Programmcode und Dokumentation (Deliverables, Research, Transcripts etc.) gehostet
- Die Hauptentwicklung soll in einem externen Git-Repository erfolgen bzw. nach Abschluss in selbiges überführt werden
<!-- - Unternehmensseitig werden notwendige APIs etc. zur Verfügung gestellt – mehr Informationen dazu in der Projektvorstellung -->
<!-- - jede Gruppe benutzt ein eigenes **GitLab-Repository**  -->

**Moodle** :fas-graduation-cap:
- Link zum Moodlekurs: <https://lernen.h-da.de/course/view.php?id=17896> 
- offizielle Dokumentationen werden über **Moodle** bereit gestellt
- ebenso wie ergänzende Materialien

**Taiga** :fas-list-check: 
- offizielles **Projektmanagementtool** in diesem Semester
- Bitte nutzen Sie dieses für die **Projektplanung** und **Projektdokumentation** (APs, Tasks, DoD, Backlog, Issues, Meetings etc.)
- Link: <https://taiga.fgmmgr.users.h-da.cloud/project/markdown-quizzes/>



---
# Bewertungskriterien :fas-check-double:

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
  - d.h., Sie beziffert den Beitragsumfang, den ein Teammitglied zu einem Ergebnisartefarkt geleistet hat
- ... ist in Form einer *Matrix* zu dokumentieren
  - bspw. in den jeweiligen Deliverables
- ... wird von den Projektgruppen *eigenverantwortlich* erstellt
:::
::::






---
<!-- header: "" -->
# Projektplanung :fas-list-check:

<!-- Projektdoku: <https://diy.vcd.org/projekte/we3ve> -->




---
## Ausgangssituation :fas-flag-checkered:

- Studierende :fas-graduation-cap:
  - Sie sind das beauftragte Unternehmen und müssen eigenverantwortlich und selbständig das Projekt planen und durchführen. D.h.,
    - Sie legen die Rollen innerhalb ihres Teams fest
    - sie bestimmen Ihre Organisationsstruktur, d.h., wie sie als Team das Projekt bearbeiten wollen (nach welchen Prinzipien organisieren sie sich intern)
    - Sie definieren WP-Verantwortliche und konkrete Inhalte (Detailplanung in Taiga)
    - Sie halten selbständig Meetings ab und dokumentieren diese in Taiga
    - Sie kommunizieren mit den Stakeholdern und dem Kunden bzw. Auftraggeber(!)
    - Sie stimmen notwendige Planungsschritte innerhalb des Teams und mit dem Auftraggeber ab
    - Sie überwachen den Projektfortschritt und kontrollieren die erarbeiteten Ergebnisse
    - Sie übernehmen die Qualitätskontrolle

- Professor :fas-chalkboard-user:
  - Der verantwortliche Dozierende schlüpft in die Rolle des Auftraggebers bzw. des Kunden. Er...
    - definiert das Projektziel
    - definiert Zwischen- und Endergebnisse der Arbeitspakete und des Projekts
    - überlässt die Projektplanung und -durchführung dem Auftragnehmer (=Studierende)
    - hilft und unterstützt bei Fragen / Problemen / etc.



---
## Übersicht der Arbeitspakete :fas-cubes: 

Diese sind von ihnen bis zum nächsten Jour fixe zu erstellen und dort mit dem Auftraggeber abzustimmen.

<!--
- WP: Identifikation der Stakeholder sowie deren Informationsbedürfnisse
- WP: Analyse der Fachbereichsprotokolle
- WP: Analyse gängiger Informations-Extraktions-Ansätze
- WP: Analyse von Ansätzen zur Speicherung strukturierter Datensätze
- WP: Analyse von HMI-Ansätzen für die Informationsbereitstellung
- WP: Aufbau einer Informationsverarbeitungsinfrastruktur
- WP: Prototypentwicklung / Demonstrator 
- WP: Tests (technisch/funktional + User-Tests)
- WP: Evaluierung
- WP: Präsentationsunterlagen, User-Dokumentation etc.
- WP: "Aufräumen" + Projekt "glattziehen"

::: footnotes 
Anmerkungen: Testing sowie die experimentelle Verifikation und Validierung von untersuchten Ansätzen mittels Entwicklungsprototypen sind bereits in den jeweiligen Arbeitspaketen notwendig. 
:::
-->




---
# :fas-person-digging: Aufgaben von Gesamtprojektleiter:innen

- Gesamtprojektleitung auf Seiten der Studierenden
- Gesamtzeit- und Resourcenplanung (Epics/Sprints/Tasks) in Abhängigkeit des Semesterplans
- Organisation der inhaltlichen Abstimmung mit dem Team und den Stakeholdern
- Abstimmung von Aufgaben mit den WP-Ownern und dem Team
- Delegation von Aufgaben an die WP-Owner und das Team
- Ausgestaltung der Epics / User Stories / Sprints / Tasks in Taiga
- Teilnahme an und Durchführung von WP-Owner-Treffen
- Rückmeldung an die LVA-Leiter bei Problemen etc.
- Kontrolle der Arbeiten und Arbeitsergebnisse
- Qualitätssicherung

::: bluebox center marg5
Essentiell ist ein **proaktives**, **eigenverantwortliches** und **selbstwirksames** Vorgehen!
:::


---
# :fas-person-digging: Aufgaben von WP-Owner:innen

- Definition der Anforderungen (aka User Stories) in Abstimmung mit den Stakeholdern und dem Team
- Zeit- und Resourcenplanung (Epics/Sprints/Tasks) in Abhängigkeit des Semesterplans
- Inhaltliche Abstimmung mit dem Team und den Stakeholdern
- Abstimmung von Aufgaben mit dem Team
- Delegation von Aufgaben an das Team
- Ausgestaltung der Epics / User Stories / Sprints / Tasks in Taiga
- Teilnahme an WP-Owner-Treffen
- Rückmeldung an die LVA-Leiter bei Problemen etc.
- ggf. Festlegung eines/r Stellvertreter:in (zusammen mit dem Team)
- Kontrolle der Arbeiten und Arbeitsergebnisse
- Qualitätssicherung

::: bluebox center marg5
Essentiell ist ein **proaktives**, **eigenverantwortliches** und **selbstwirksames** Vorgehen!
:::


---
# :fas-person-digging: Aufgaben der Researcher & Developer

- Definition von User Stories und Tasks
- Zuordnung zu Epics
- Eigenverantwortliche Übernahme und Bearbeitung von Tasks
- Abstimmung mit den WP-Owner:innen
- Ausgestaltung der Epics / User Stories / Sprints / Tasks in Taiga
- Inhaltliche Abstimmung mit dem Team und den Stakeholdern
- Abstimmung der Definition of Done sowie Qualitätssicherung
- Dokumentation 


::: bluebox center marg5 
Essentiell ist ein **proaktives**, **eigenverantwortliches** und **selbstwirksames** Vorgehen!
:::








<!--
---
## WP

- **Ziel**


- **Tasks**


- **Resultate / Meilensteine**
-->


---
# Nächste Schritte :fas-shoe-prints:

- Festlegung der Haupt-Projektleiter:innen
- Festlegung der WP-Leader und Eintragung in Taiga
- Registrierung in Taiga 
- Definition und Organisation der WPs 
- Entwicklung eines Zeitplans
- Definition der User Stories (Anforderungen) und Tasks durch WP-Owner + Team in Taiga
- Beginn der Anforderungsermittlung + Definition eines Pflichtenhefts
- Kontaktaufnahme mit Stakeholdern um WPs (Epics) weiter auszudefinieren
- Festlegung der Jour fixe Termine





---
# Fragen ?



---
<!-- header: Projektmanagement -->
# Projektmanagement

---
# Projektmanagement – Teil 1

::: bluebox centerbox small
Da wir analog dem **Agilen Manifesto** vorgehen wollen, anbei ein paar Gedanken zum strategischen und operativen Projektmanagement und der Projektdurchführung. Die folgenden Informationen dienen gleichzeitig als Vorbereitung für die wöchentlichen **Jour fixes**.
:::

{.Skip}
- Grundsätzlich: die Projektaufgaben (=Tasks der jeweiligen WPs bzw. User Stories) werden in wöchentlichen **Sprints** abgearbeitet^1^
- Die **Detailarbeiten** pro Sprint (Research / Development / etc) legen die WP-Leader mit dem Team individuell fest
- Das Team führt ein **Sprint**- und ein **Produkt-Backlog**. 
  - Das Sprint-Backlog dokumentiert die einzelnen Aufgaben und Ziele eines Sprints für jedes Team. 
  - Im Produkt-Backlog werden die Anforderungen in Form von User Stories und  zugehöriger Tasks definiert und dokumentiert.
- Die Sprint- und Produkt-Backlogs werden in Taiga geführt ~~den **Git-Repositories** der jeweiligen Projekte geführt.~~
- Vor jedem Sprint steht die **Planung**; hier werden die Tasks der Arbeitspakete (=APs) aus der Projektbeschreibung in Teilaufgaben (=User Stories und Tasks) zerlegt und in das Sprint-Backlog übertragen (siehe vorheriger Punkt). 
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

::: centerbox warning Bigskip
Wichtig: Agiles Vorgehen bedeutet, dass sich die Projektdurchführung den aktuellen Anforderungen und vorherrschenden Gegebenheiten anpasst. Sollte sich im Verlauf des Projektes herausstellen, dass eine Nachjustierung sinnvoll ist, dann werden wir diese gemeinsam besprechen und durchführen.
:::



---
# Projektmanagement – Grundlagen (1/2)

::::: columns
:::: single
- **Rolle von Epics**:
  - Epics sind umfangreiche, grobe Beschreibungen von Funktionen oder Anforderungen, die zu groß sind, um in einem einzelnen Sprint umgesetzt zu werden.
  - Sie dienen dazu, komplexe Projekte oder Initiativen in überschaubare Teile zu zerlegen, die dann in einzelnen Sprints bearbeitet werden können.
  - Epics helfen dabei, den Gesamtüberblick über die Vision oder die großen Ziele des Projekts zu bewahren, während die Details schrittweise entwickelt werden.
  - Sie unterstützen die Produkt-Roadmap und helfen bei der Priorisierung von Arbeitselementen im Product Backlog.
::::
:::: single
- **Rolle von Sprints**:
  - Sprints sind feste Zeitspannen, typischerweise zwei bis vier Wochen lang, in denen ein Entwicklungsteam an der Umsetzung von Aufgaben arbeitet, um ein messbares Inkrement des Produkts zu liefern.
  - Während eines Sprints arbeitet das Team an den Aufgaben, die im Sprint Backlog festgelegt wurden, und arbeitet darauf hin, die definierten Sprintziele zu erreichen.
  - Sprints bieten einen klaren Zeitrahmen und fördern die Iteration und kontinuierliche Verbesserung, indem sie eine regelmäßige Lieferung von Produktinkrementen ermöglichen.
  - Die Sprint-Zyklen erleichtern außerdem die Anpassung an sich ändernde Anforderungen oder Prioritäten, da das Team regelmäßig Feedback erhält und seine Pläne entsprechend anpassen kann.
::::
:::::



---
# Projektmanagement – Grundlagen (2/2)

::::: columns
:::: single
- **Rolle von User Stories**:
  - User Stories sind kurze, prägnante Beschreibungen von Funktionen oder Anforderungen aus der Perspektive des Benutzers.
  - Sie dienen dazu, die Bedürfnisse der Benutzer zu verstehen und zu priorisieren und den Fokus auf den Wert zu legen, den eine bestimmte Funktionalität für den Benutzer hat.
  - User Stories helfen dabei, Anforderungen in leicht verständliche Einheiten zu zerlegen, die vom Entwicklungsteam implementiert werden können.
  - Sie unterstützen die Kommunikation zwischen den Stakeholdern und dem Entwicklungsteam und helfen dabei, ein gemeinsames Verständnis der Anforderungen zu entwickeln.
::::
:::: single
- **Rolle von Tasks**:
  - Tasks sind konkrete Einheiten von Arbeit, die erforderlich sind, um eine User Story oder ein Arbeitspaket innerhalb eines Sprints abzuschließen.
  - Sie sind detaillierte Aufgaben, die vom Entwicklungsteam identifiziert und umgesetzt werden müssen, um die Funktionalität gemäß der User Story zu implementieren.
  - Tasks helfen dabei, den Arbeitsaufwand zu strukturieren und zu planen, indem sie die einzelnen Schritte für die Umsetzung einer Funktionalität aufzeigen.
  - Sie unterstützen die Zusammenarbeit im Team, indem sie die Aufgaben aufteilen und den Fortschritt verfolgen.
::::
:::::

:::  bluebox center marg2 small
Insgesamt ermöglichen User Stories und Tasks eine effektive Planung, Umsetzung und Verfolgung von Anforderungen in agilen Projekten. User Stories legen den Rahmen für die Funktionalitäten fest und betonen den Nutzen für den Benutzer, während Tasks den detaillierten Arbeitsaufwand für die Umsetzung dieser Funktionalitäten definieren und den Teammitgliedern helfen, ihre Arbeit zu organisieren.
:::



---
# Projektmanagement – Zusammenfassung

- Epic = Funktionalität (WP in Projektbeschreibung)
- Sprint = Workpackage (Bearbeitung der User Stories eines Epics)
- User Story = Anforderung aus Kundensicht 
- Task = Aufgabe (Teil einer User Story)
- Product Backlog = enthält alle User Stories
- Sprint Backlog = enthält ausgewählte User Stories aus dem Product Backlog
- Points = definierten Aufwand / Umfang / Komplexität eines Tasks




---
<!-- header: Jour fixes -->
# Jour fixes :fas-users:

- Durchführung wöchentlich zu einem festen Termin
- Protokollführung durch einen Studierenden in Taiga (wöchentliche Rotation)
- Darlegung der wichtigsten Ereignisse/Ergebnisse in der vergangenen Woche (Retrospektive)
- Darlegung der Aktivitäten in der aktuellen Woche (geplante Aktivitäten)
- Klären von offenen Fragen etc. 
- Gemeinsames Controlling / gemeinsame Reflektion der WP-Planung 
- Teilnahme für alle Studierenden verpflichtend (mit Web-Cam. :fas-video:)



<!-- 
---
# Jour fixe – MO, 31.10.2022


- Beantwortung offener Fragen zu den Projekten
- Erläuterung Vorgehensmodell
- Festlegung Product Owner
- Festlegung Dokumentation von Product Backlog und Sprint Backlog
- Festlegung Dokumentation der Deliverables
- sonstiges

::: blue centerbox center Bigskip
Im **Zielbild** wollen wir erreichen, dass Sie alle Informationen zur Verfügung haben, um den **1. Sprint** zu planen und durchzuführen.
::: 
-->



---
<!-- header: Anhang -->
# Anhang


---
<!-- header: Retrospektive -->
# Retrospektive – Infos und Durchführung


---
# Infos zur Durchführung

**Ziel**: _Subjektive Reflektion von Arbeitprozessen und Methodiken um zukünftige Sprints zu verbessern._

**Methode**: ==__4 L__^1^==

::::: bluebox 
:::: columns
::: single 
:fa-heart: What I **LOVED**
- Was lief richtig gut? 
- Was lief besser als erwartet?

:fa-graduation-cap: What I **LEARNED**
- Was habe ich gelernt? 
- Was war eine neue Erfahrung?
:::
::: single 
:fa-bolt: What I **LACKED**
- Was habe ich vermisst?
- Was hätte besser laufen können?

:fa-question: What I **LONGED** for
- Wonach habe ich mich gesehnt?
- Was hat mir gefehlt?
- Was hätte mir geholfen?
:::
::::
:::::

::: footnotes
^1^ https://nativdigital.com/retro-methoden-4l/
:::


---
# Aufgabe

::::: centerbox center greenbox
**Aufgabe**: Jede/r bereitet bitte 1 Slide mit den ausgefüllten Aspekten analog nachstehender Vorlage vor und präsentiert diese im nächsten Meeting.
:::::

{.Skip} 

Vorlage: 

::::: columns 
:::: single bluebox
::: center
What I **LOVED**
:::
- ...
- ...
- ...
- ...
<br/>
::::
:::: single bluebox
::: center
What I **LEARNED**
:::
- ...
- ...
- ...
- ...
<br/>
::::
:::: single bluebox
::: center
What I **LACKED**
:::
- ...
- ...
- ...
- ...
<br/>
::::
:::: single bluebox
::: center
What I **LONGED**
:::
- ...
- ...
- ...
- ...
<br/>
::::
:::::

{.Skip}

Anschließend werten wir die gesammelten Punkte gemeinsam aus (bspw. mit der Methode "_5X Warum_"^1^) und entwickeln Maßnahmen für die kommenden Sprints (bspw. mit der Methode "_Starfish_"^2^).

::: footnotes
^1^ https://nativdigital.com/retro-methoden-5x-warum/

^2^ https://nativdigital.com/retro-methoden-starfish/
:::