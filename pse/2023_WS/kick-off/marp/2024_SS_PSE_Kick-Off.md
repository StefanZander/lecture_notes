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
 
<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files 2024_SS_PSE_Kick-Off.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- 2024_SS_PSE_Kick-Off.md -->

# Projekt-Systementwicklung / Projekt KMI im SoSe 2024

#### Prof. Dr. Stefan Linus Zander – Dipl. Volkswirt Roland Trefftz – Lars Kleinschmidt (BSc)

Kick-Off-Meeting – 22.04.2024  {.lightgreen .Big .skip}


---
<!-- header: Überblick -->
<!-- footer: Projekt Systementwicklung / Projekt Multimedia – Kick-Off-Meeting, 22.04.2024 -->

# Agenda

1. Gemeinsame Kennenlernrunde zu Beginn (alle)
2. Allgemeine Informationen zum Modul (S. Zander)
3. Vorstellung der Projekte und Arbeitspakete (S. Zander)
4. Projektassignments (alle)
5. Gemeinsame Q&A-Session (alle)
6. Nächste Schritte (alle)


---
# Gemeinsames Kennenlernen

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

- **Lars Kleinschmidt** (Technische Projektleitung – CTO) 
  - Email: Lars.Kleinschmidt@stud.h-da.de


**Klinikon GmbH** {.Bigskip}
- **Dipl. Volkswirt Roland Trefftz** (fachliche Projektleitung und Stakeholder) 
  - Email: trefftz@klinikon.com
  - Website: https://www.klinikon.com/





---
# Beteiligte Personen (2/2)

**Hochschule Darmstadt – Studierende**

::::: columns
:::: single
- Bahammou, Ayoub	– ayoub.bahammou@stud.h-da.de
- Bibaj, Leon	– Leon.Bibaj@stud.h-da.de
- Boussaguia, Mohamed – Mohamed.Boussaguia@stud.h-da.de
- Conzen, Tobias – Tobias.Conzen@stud.h-da.de
- Gener Lopez, Teresa – teresa.generlopez@stud.h-da.de
- Noumboussi Tayon, Guirauld – Guirauld.Tayon@stud.h-da.de
- Hübner, Maximilian – Maximilian.Huebner@stud.h-da.de
::::
:::: single
- Kwasny, Marco – Marco.Kwasny@stud.h-da.de
- Lupus, Max – max.lupus@stud.h-da.de
- Nandha, Sanjeev – Sanjeev.Nandha@stud.h-da.de
- Niazi, Mina – Mina.Niazi@stud.h-da.de
- Spengler, Etienne – Etienne.Spengler@stud.h-da.de
- Tchouankam Ngansop, Paul Arnaud – Paul.A.Ngansop@stud.h-da.de
- Wolf, Samuel – Samuel.Wolf@stud.h-da.de

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

- Aufteilung der Studierenden in **Projektteams** entsprechend der Arbeitspakete (siehe Projektplan)
- Jedes Projektteam arbeitet selbständig und eigenverantwortlich an den zugehörigen Arbeitspaketen 
  - so lassen sich Arbeitspakete parallel bearbeiten^1^
- Jedes Projektteam bestimmt **1 Projektverantwortliche/n (aka WP-Owner)**, die/der ...
  - ... den *Projektfortschritt* kontrolliert
  - ... *Arbeitsergebnisse* einfordert
  - ... als *Ansprechpartner* für das Projektteam und die Auftraggeber fungieren
  - ... *Arbeitspakete* und Sprints koordinieren
  - ... für die *Qualitätskontrolle* verantwortlich ist
  - ... mitarbeiten, aber vor allem Aufgaben *delegieren* können
  - ... an den _WP-Leader-Treffen_ teilnimmt
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
^1^ Vorlesungszeit (14 Wochen) + Lernwoche (0 Woche) + Prüfungszeit (1 Woche)
:::


---
# Zeitschiene :far-clock:

:fas-timeline: **Wichtige Deadlines**
- Laufzeit: max. 14 Wochen
- **Ende WP-Bearbeitungszeit: 07.07. (EOD) (sharp!)**
- **Ende Migration: 14.07. (EOD)**
  - Projekt ist in den Master gemerged
  - Begleitung der Migration durch dediziertes Team
- **Abschluss Betatestphase der App: 21.07. oder 28.07. (EOD)**
  - Durchführung von User-Tests 
  - Bugfixing durch gesamte Gruppe
  - Einreichung und Bearbeitung von Features
  - Testen mit den Apple-/Android-Testtools 
- **Offizielles Projektende: 28.07.** :fas-hourglass-end:



---
# Kommunikation :fas-people-arrows:
- via :fab-discord: **Discord**:  https://discord.gg/35n8QnWv
  - für die Kommunikation der Projektteams untereinander
  - für die Kommunikation mit dem CTO zu technischen Fragen
- :fas-envelope: **Email** bei wichtigen und/oder offiziellen Dingen
  - achten sie auf einen aussagekräftigen Betreff
  - bitte alle Verantwortlichen in cc mit aufnehmen
- wöchentliche :fa-users-line: **Jour fixe** (ca. 60-90 Min für alle Projektteams) mit den Stakeholdern
  - Durchführung mittels BBB (vFBI/002)
  - Pflichttermin für alle Beteiligten
- wöchentliche :fas-microchip: **WP-Leader-Treffen** mit dem CTO
  - verpflichtend für alle WP-Leader (ggf. Ersatzmitglied bestimmen)
  - Besprechung von technischen / fachlichen Entscheidungen und/oder Problemen bei der Projektdurchführung



---
# Entwicklungsplattform und Dokumentation

**GitLab** :fab-gitlab:
- Das we3ve-Projekt hat **6 GitLab-Repos**; die Studierenden werden von uns dort eingeschrieben 
- dort werden Programmcode und Dokumentation (Deliverables, Research, Transcripts etc.) gehostet
- Zus. Repos bitte direkt selbst erstellen und die Teammitglieder hinzufühgen
<!-- - Unternehmensseitig werden notwendige APIs etc. zur Verfügung gestellt – mehr Informationen dazu in der Projektvorstellung -->
<!-- - jede Gruppe benutzt ein eigenes **GitLab-Repository**  -->

**Moodle** :fas-graduation-cap:
- Link zum Moodlekurs: <https://lernen.h-da.de/course/view.php?id=17896> 
- offizielle Dokumentationen werden über **Moodle** bereit gestellt
- ebenso wie ergänzende Materialien

**Taiga** :fas-list-check: 
- offizielles **Projektmanagementtool** ab diesem Semester
- Bitte nutzen Sie dieses für die **Projektplanung** und **Projektdokumentation** (APs, Tasks, DoD, Backlog, Issues, Meetings etc.)
- Link: <https://taiga.fgmmgr.users.h-da.cloud/project/we3ve/>



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
  - d.h., Sie beziffert den Beitragsumfang, den ein Teammitglied zu einem Ergebnisartefarkt geleistet hat
- ... ist in Form einer *Matrix* zu dokumentieren
  - bspw. in den jeweiligen Deliverables
- ... wird von den Projektgruppen *eigenverantwortlich* erstellt
:::
::::


<!-- 
---
## Fragen / TBD / TODOs

- Wo Docker-Container hosten (IT-Services/hda/etc)? Budget existiert
- Lade- und Lastmanagement sollte mit in die App integriert werden (Marcus)
  - Laden aus technisch- und kaufmännischer Sicht 
  - State-of-Charge (aka Ladezustand) des Fahrzeugs sollte immer sichtbar/abrufbar sein um informierte Entscheidungen treffen zu können (bspw. Einkaufsfahrt jetzt mit halb-vollem Auto vs. Fahrt in 3h mit vollem Auto aber geschlossenem Supermarkt)
- TODO (SZA): Gemeinsamer Termin mit J. Wischnat und den neuen Entwicklern finden
- TODO (RT): Bug an J. Wischnat kommunizieren
-->




---
<!-- header: "" -->
# Erweiterung der we3ve-App

Projektdoku: <https://diy.vcd.org/projekte/we3ve>

<!-- ### Betreuer: Roland Trefftz, Stefan Zander, Marcus Schül -->

---
## Übergeordnete Anforderungen an die App

::: blue 
**Ziel**: Entwicklung einer einfach nutzbaren Car-Sharing-App auf Basis moderner Web-Technologien.
:::

{.HugeSkip}

**Allgemeine Anforderungen** 
- Lauffähig im Web und auf mobilen Endgeräten
- Verwaltung von NutzerInnen, Buchungsreservierungen und Fahrzeugen
- Individualisierbares Dashboard mit div. Übersichten (Buchungen / Nutzung / gefahren Kilometer / Auslastung / etc.)
- Einfache und vielfältige Reservierungsmöglichkeiten (bspw. über einen gem. Kalender / via Email etc.)
- Erforschung von Schnittstellen zur Integration von Telemetriedaten und anderen technischen Merkmalen (Ladezustand, Kilometer etc)
- Einfachste Nutzung und Administration
- Hohe Code- und Dokumentationsqualität

::: warning center
Die konkreten Anforderungen müssen in Stakeholder-Interviews mittels User-Research und Requirements-Engineering-Methoden erforscht und erarbeitet werden.
:::


<!--
---
## Übersicht der Arbeitspakete – alt

- WP 1: Bezahl- und Abrechungsfunktion (RT) _(3-4 Personen; sofort; Prio 1)_
- WP 2: Verbesserter Kalender (RT) _(2-3 Personen; sofort; Prio 1)_
- WP 3: iOS-App (LK) _(4 Personen; sofort; Prio 1)_
- WP 4: Erforschung von Sicherheitsaspekten für das Deployment & Veröffentlichung der App (RT) (offen; später; Prio 2)
- WP 5: Erforschung (und Umsetzung) von Möglichkeiten Telemetriedaten aus Fahrzeugen auszulesen und ihres Einsatzes in der we3ve-App (RT) *(3 Personen; sofort; Prio 1)*
- WP 6: Telemetriedatenerhebung über die App-Nutzung (LK) (3-4 Personen; später; Prio 2)
- WP 7: Umsetzung der Pushbenachrichtigungen (insbesondere bei iOS) (LK) (2-4 Personen; bel.; Prio 2)
- WP 8: Design und Deployment einer Website & Darstellung im Play- und App-Store (SZ/RT) _(2-3 Personen; sofort; Prio 1)_
- WP 9: Usability-Verbesserungen + Bugfixing an der App (SZ/LK) _(3-4 Personen; sofort; Prio 1)_
-->


---
## Übersicht der Arbeitspakete :fas-cubes: – neu

- WP: Bezahl- und Abrechnungsfunktion (RT)
- WP: Erforschung von Möglichkeiten, Telemetriedaten aus Fahrzeugen auszulesen und in der we3ve-App einzusetzen (RT/LK)
- WP: Design und Deployment einer Website (SZ/RT/LK)
- WP: Guidelines für Deployment im Play- und App-Store (SZ/RT/LK)
- WP: Automatisiertes Deployment in App-Stores und auf Server (LK)
- WP: Entwicklung von automatisierten Tests für Backend und Frontend (LK)
- WP: Bugfixing und Integration (LK) :fas-medal:





---
## WP: Bezahlfunktion (RT)

::: small
Im WS23/24 wurde ein Research gemacht. Ergebnis: Einbindung von Paypal als Bezahlplattform zwischen Nutzer an Fahrzeug-Halter (keine fiskalische Einbindung von we3ve.de) empfohlen. Weitere interessante Optionen (im nachhinein entdeckt) sind secupay.com oder qwist.com – beide können auch Lastschrift-Transaktionen tätigen und sind vermutlich preiswerter als Paypal.
:::

::: twocolumns
- **Ziel**
  - Implementierung von zwei verschiedenen In-App-Bezahlmöglichkeiten durch einen zugelassenen Finanzdienstleister. Die gesamte Transaktion erfolgt dabei auf seiner Bezahlplattform. We3ve stellt nur die Transaktionsdaten (Namen, Bankdaten, Euro-Betrag) zur Verfügung.
  - Voraussetzung für die Bezahlung ist die Generierung eines Fahrtenbelegs:
    - Einzeltransaktion je Fahrt (micropayment) oder
    - Sammeltransaktion (z. B. einmal monatlich) mit Auflistung aller Fahrten. Dieser Beleg ist im WP „Abrechnungsfunktion - Fahrtenbeleg“ zu generieren. Die Anforderungen für den Beleg erstellt WP Fahrtenbeleg.
  - Opt-Out-Regelung zur Bezahlfunktion


- **Definition of Done**
  - Der Bezahlweg ist mit drei verschiedenen Usern im mock up getestet und abgestimmt worden.
  - Zwei verschiedene Bezahl-Funktionen (Paypal und noch ein weiteres) sind zur Bezahlung in der App integriert.
    - Mit Integration des WP in die finale Version können die Tester auf drei verschiedene Arten ein micropayment machen:
    - Paypal, weitere Alternative, Bezahlung außerhalb der App (Opt out-Zahlung) – diese ist auch dokumentiert.
    - Auf die jeweilige Rechtslage wird der Benutzer mit Buchung der Bezahlung hingewiesen.
    - Es gibt in der App (gern auch auf der Homepage) eine Anleitung zur Einrichtung der neuen Bezahlfunktionalität
  - Test & Dokumentation
:::



---
## WP Abrechnungsfunktion / Fahrten-Beleg (RT)
 
- **Ziel**
  - Fahrten-Beleg: Der Fahrzeug-Halter legt die Art der Bezahlung fest und damit auch, ob je Fahrt/je Abrechnungsperiode ein Fahrtenbeleg bzw. eine Sammelrechnung generiert wird.
  - Der Fahrten-Beleg ist Grundlage der Bezahltransaktion (WP Bezahlen). Eine evtl. In-App-Bezahlung ist im Reporting zu kennzeichnen.
  - Reporting-/Abrechnungsfunktionalität – Zu den gesammelten Fahrten je Fahrzeug und Halter wird eine Reporting- und Abrechnungsfunktionalität mit verschiedenen Export-Funktionen erarbeitet.

- **Tasks**
  - Verschiedene Alternativen für Fahrtenbeleg/Reporting & Controlling incl. Export erarbeiten
  - User-Research: welche Variante wollen Fahrer/Fahrzeughalter und welche Daten/Kennzahlen?
  - Mock up Testing: Mit zwei-drei Test-Nutzern wurde die UX getestet und vereinbart.
  - Umsetzung von Fahrten-Beleg und Reporting (nach Fahrer/Halter/Nachbarschaftsadmin/DSGVO)

- **Definitions of Done**
  - User-Research: Belege & Reporting für Driver und Owner
  - Umsetzung von Belege, Reportings und Export
  - Test & Dokumentation





<!--
---
## WP 2: Verbesserter Kalender (RT) (2-3 Personen; sofort; Prio 1)

- **Ausgangssituation**
  - In der Flutter-App kann über eine Monatsübersicht der Tag ausgewählt werden, in separaten Feldern können Uhrzeit und Dauer der Fahrzeugreservierung angesteuert werden.
  - Es gibt aktuell keine Möglichkeit über _Links-Rechts-Pfeile_ oder _Wischgesten_ im In-App-Kalender zu navigieren. Nutzer melden, dass sie gern à la Google- oder Apple-Calender auch direkt in der Tagesansicht das Zeitfenster der Reservierung auswählen und festlegen würden. 
  - Unpraktisch ist auch, dass es für ein/mehrere Fahrzeuge keine _Wochenübersicht_ gibt, um zu sehen, wo freie Termine sind bzw. welches meine Reservierungen (mit vor-/nachgelagerten Reservierungen) sind.
  - Aktuell gibt es keine Möglichkeit, sich seine _eigenen Reservierungstermine_ in den eigenen Desktop-/Handy-Kalender zu _exportieren_.
 
- **Anforderungen**
  - Komfortablere Kalender-Funktionalitäten, Unterstützung von Wischgesten
  - Wochenübersicht für ein/meherer Fahrzeuge der Nachbarschaft - Identifikation freier Slots
  - "Kalender-Abo" in private Kalender (Synchronisation mit privatem Kalender -> Reservierung im pers. Outlook-Kalender und Export in App (=Reservierung von Fahrzeugen über den eigenen pers. Kalender, z. B. ics-Termine exportieren o. ä.)
 -->

<!--
---
## WP 2: Verbesserter Kalender (RT) (2-3 Personen; sofort; Prio 1)

- **Tasks**
  - Durchführung einer Anforderungsanalyse (User Research etc.)
  - Implementierung der neuen Kalenderfunktionalität
  - Tests 
  - ...

- **Resultate / Meilensteine**
  - Dokumentierte Anforderungsanalyse (Deliverable 1)
  - Umsetzung des Kalenders
  - erfolgreiche Tests & Dokumentation
-->




---
## WP: Telemetrie-Daten aus Fahrzeugen auslesen und Ihr Einsatz in we3ve

Im WS 23/24 wurde ein Research zu diesem Thema gemacht: Android Auto wurde als favorisierte Telemetrie-Option festgelegt. Zu iOS gibt es außer der händischen Eingabe noch keine automatisierte Lösung.

- **Ziel**
  - Bereitstellen von Kennzahlen in we3ve:
    - km-Stand (Fahrt Anfang, Fahrt Ende, Differenz: gefahrene km)
    - Akkustand in we3ve-App, Rest-km lt. Akku
    - Falls keine Telemetrie möglich ist, dann manuelle Eingabe der km zu Beginn und Ende der Fahrt (+ gefahrene km)
  - Opt-out durch Fahrzeughalter für sein Fahrzeug möglich
  - Übergabe dieser Daten an WP Fahrten-Beleg/Abrechnungsfunktionalität

- **Tasks**
  - User-Research: mit mehreren Nutzern im Mock up die Nutzung/Führung durch diese Funktionalität gehen.
  - Umsetzung beider Alternativen
 
- **Definition of Done**
  - Umsetzung der Ergebnisse (mindestens händische Alternative)
  - Ergebnisse können in WP Fahrten-Beleg/Abrechnungsfunktion übernommen werden
  - Test & Dokumentation



---
## WP: Design und Deployment einer Website & Guidelines für Play- und App-Store Deployments (SZ/RT/LK)

- **Ausgangssituation**
  - Für die App gibt es mittlerweile eine eigene Domain <we3ve.de>. Aktuell ist dies das frontend für die web-app.
  - Ziel ist, eine Homepage zur Vorstellung des Projekts und Erläuterung der wichtigsten Funktionen/Voraussetzungen (bspw. Einrichtung einer eigenen Backend-Instanz etc.)
  - Schwerpunkt auf guter Maintenance.


- **Tasks**
  - Research der verschiedenen Web-basierten Dokumentationsalternativen (Hugo / Mkdocs / Read the Docs / weitere)
  - Research: Was benötigen wir für die Einstellung der App in App- und Playstore?
  - Implementierung und Deployment der Website
  - Erstellung der Inhalte für App- und Playstore und Einstellung der App
  - Anfertigung der Benutzungsdokumentation

- **Deliverables / Resultate**
  - Die App/das Projekt hat eine eigene. Homepage für Nutzer (Download aus dem App-Store) - für IT-Affine (Aufsetzen eines eigenen Backends).
  - Im Google Play-Store als auch im Apple App-Store ist die App und ihre Funktionalität attraktiv für den Nutzende dargestellt und lädt zum Download ein.
  - Benutzungsdokumentation (inkl. Vorgehen bei Anpassungen der Website etc.) (Deliverable 1)

<!-- Organisation nicht unterschätzen -->


---
## WP: Usability-Verbesserungen + Bugfixing + Migration (LK/SZ/RT)

- **Ziel**
  - Optimierung der Nutzbarkeit der App durch empirische und heuristische Usability-Evaluierungsmethoden
  - Eliminierung von Bugs etc.
  - Integration der Arbeitsergebnisse der anderen WPs in den `main`-Branch

- **Tasks**
  - Sammlung aktueller Ansätze aus der Usabilityforschung und Testen der App gegen diese Ansätze (=heuristische Usability-Evaluierung)
  - Erarbeitung von Verbesserungsmöglichkeiten
  - Implementierung der Verbesserungen im Abstimmung mit den Dev-Teams
  - Erforschung wie die Flutter-App weitestgehend automatisiert getestet werden kann
  - Entwicklung einer repräsentativen Menge von automatisierten Testfällen 

- **Resultate / Meilensteine**
  - Sammlung und Bewertung aktueller Usability-Evaluierungsansätze mit Verbesserungsvorschlägen für die App (Deliverable 1)
  - Dokumentiertes Interview mit den Power- und ggf. neuen Nutzenden (u.a. Jörg Kasper, Roland Trefftz) (Deliverable 2)
  - Umgesetzte Verbesserungen
  - Implementierung der abgestimmten automatisierten Testfälle





---
# Optionale Arbeitspakete

---
## WP: Erforschung von Sicherheitsaspekten für das Deployment & Veröffentlichung der App (RT) (offen; später; Prio 2)

- **Ausgangssituation**
  - Im letzten PSE-Carsharing-Projekt (SS 23) wurde das Backend von Firebase (Google) auf einen ExpressJS Server umgestellt. 
  - Die damaligen Entwickler weisen darauf hin, dass sie sich in der Entwicklung des neuen backends nicht mit möglichen intrusion/attack-Szenarien durch bösartige Dritte beschäftigt hätten. Vorteil von Firebese als backend-as-a-service ist, dass man sich um solche Funktionalitäten nicht zu kümmern braucht, da dies vom Dienstleister (hier: Google) abgedeckt wird.
  - Bei einem eigenen backend stellen sich sehr wohl Fragen nach der Absicherung ggü. Eindringen von Dritten, Schadsoftware, ransomware, etc.

- **Tasks**
  - Research: Identifiziere die eindeutigen Angriffs-/Infektionszenarien, die ein Dritter auf die frontend/backend-Kombination starten kann.
  - Mit welchem Aufwand kann ich welche Verteidigung/Abwehr betreiben, um ein Eingriff/Eindringen zu vermeiden.
  - Schätze den Aufwand ab, der mit der entsprechenden Verteidugng/Abwehr einher geht. 
  - Setze die effektivsten Verteidungs-/Abwehrmechanismen um.

- **Deliverables / Resultate**
  - Darstellung wesentlicher Bedrohungsszenarien (Research) - incl. Priorisierung und Maßnahmenkatalog
  - Die wesentlichen (und darstellbaren) Maßnahmen sind umgesetzt.



---
## WP: Telemetriedatenerhebung über die App-Nutzung (LK) (3-4 Personen; später; Prio 2)

- **Ausgangsituation**
  - Mit Erweiterung der Funktionalitäten sollte es auch interne Auswertungsmöglichkeiten zur Nutzung der unterschiedlichen Funktionalitäten, Fehlermeldungen/Abstürzen, etc. geben.
  - Beispielfragen: "Welche Funktionalitäten werden wie genutzt? Wird etwas gar nicht benutzt? Was sind die "Kernfunktionen"?" oder "Wann stürzt die App ab? (inkl. Fehlermeldung)"

- **Tasks**
  - Research der wichtigsten Kennzahlen
  - Research der technischen Möglichkeiten zur Telemetriedatenerhebung
  - Umsetzung der Telemetriedatenerhebung
  - Visualisierung der Telemetriedaten

- **Resultate / Meilensteine**
  - Dokumentation der ermittelten Grundlagen (Wichtige Kennzahlen etc.) und der technischen Möglichkeiten
  - Implementierung



---
## WP: Umsetzung der Pushbenachrichtigungen (insbesondere bei iOS) (LK) (2-4 Personen; bel.; Prio 2)

- **Voraussetzungen**
  - Entscheidung ob iOS-App-Version oder nicht
  - Umsetzung der iOS-Version + Developeraccount
  - Zum Testen der Push-Benachrichtigungen ist ein Developeraccount notwendig

- **Ausgangssituation**
  - In der 1. Version der App (Flutter-App mit Firebase als backend)  gab es die Funktion einer integrierte Push-Benachrichtigung zu verschicken. Mit Umstellung auf das neue Backend musste diese Benachrichtigung auf einen schlanken e-mail-Client umgestellt werden. Dies bedeutet einen Bruch in der Kommunikation.
  Probleme:
    
    1. Firebase nicht erwünscht
    2. Wie können fremde Nachbarschaften (mit eigenen Servern!) Push-Nachrichten senden?

- **Tasks**
  - Research: welche technischen Optionen gibt es? (Frei oder kostenpflichtige Lösungen / Welche Vor- und Nachteile gibt es)
  - Implementation der gewählten Lösung

- **Deliverables / Resultate**
  - Dokumentierung der Research-Ergebnisse
  - Gewählte Lösung ist implementiert





<!-- 
---
## Workpackage 1: Erweiterung der App um neue Funktionalität (2/2)

- **Ziel**: _Implementierung der Anwendung (Frontend & Backend), Testing, Durchführung von Usability-Evaluierungsmethoden und Fertigstellung der Dokumentation._
- **Task-Liste**:
  - Task 1: Abrechnungsfunktion
  - Task 2: State-of-Charge // automatisiertes Auslesen von Fahrtzeug-/Fahrdaten 
  - Task 3: Code- und Doc-Reviews
  - Task 4: Deployment
  - Task 5: Abschluss (Vervollständigung) von Implementierung und Dokumentation
- **Milestones**
  - ==Deliverable 5: Usability-Tests==
    - Dokumentation der Usability-Test inkl. Testfällen
    - Dokumentation der Erkenntnisse aus der Usability-Evaluation (=Auswertung)
    - Dokumentation der Verbesserungen
  - Abgeschlossene Implementierung sowie Deployment des Systems
  - Übergabe des Systems sowie der Dokumentation 
  - 
-->





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
- Die **Detailarbeiten** pro Sprint (Research / Development / etc) legt jedes Team individuell fest
- Jedes Projekt führt ein **Sprint**- und ein **Produkt-Backlog**. 
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
# Nächste Schritte :fas-shoe-prints:

- Festlegung der WP-Leader
- Anlegen der Taiga-Accounts
- Definition der User Stories (Anforderungen) und Tasks durch WP-Owner in Taiga
- Lokale Installation des we3ve-Projects
- we3ve-Projekt lokal zum Laufen bekommen
- weitere Einstieg in Flutter
- Kontaktaufnahme mit Stakeholdern um WPs (Epics) weiter auszudefinieren

---
<!-- header: Jour fixes -->
# Jour fixes :fas-users:

- Durchführung wöchentlich zu einem festen Termin
- Dokumentation der Gesprächsinhalte durch einen festgelegten Studieren in Taiga(wöchentliche Rotation)
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