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

<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files 2021WS_PSE_Kick-Off.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- 2021WS_PSE_Kick-Off.md -->

# Projekt Systementwicklung / Projekt Multimedia <br /> im WiSe 2021/2022 

#### Prof. Dr. Stefan Linus Zander in Kooperation mit der BBC Group International GmbH

Kick-Off-Meeting – 05.11.2021  {.lightgreen .Big .skip}


---
<!-- header: Überblick -->
<!-- footer: Projekt Systementwicklung / Projekt Multimedia – Kick-Off-Meeting, 05.11.2021 -->

# Agenda

1. Gemeinsame Kennenlernrunde zu Beginn (alle)
2. Allgemeine Informationen zum Modul (S. Zander)
3. Vorstellung der BCC Group International GmbH (M. I. González Evans)
4. Vorstellung der ONE-Plattform (M. I. González Evans)
5. Vorstellung der Projekte und Arbeitspakete (BCC Group & S. Zander)
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
# Allgemeine Informationen zum Modul


---
# Beteiligte Personen (1/2)


**Hochschule Darmstadt**
- **Prof. Dr. Stefan Linus Zander** (Modulverantwortlicher) – stefan.zander@h-da.de



**BCC Group International GmbH**^1^ {.Bigskip}
- **Mauricio I. González Evans** (Geschäftsführer) – mauricio.gonzalez.evans@bccgi.com
- **Alexander González Evans** (Business Development Manager) – alexander.gonzalez.evans@bccgi.com
- **Valentino Di Leonardo** (Lead Developer) – valentino.dileonardo@bccgi.com
- **Rittik Wystub** (Lead Developer) – rittik.wystup@bccgi.com

::: footnotes
^1^ <https://bccgi.eu/>
:::

<!-- Von seiten der BCC Group International GmbH
: Mauricio I. González Evans (Geschäftsführer)
: Alexander González Evans (Business Development Manager)
: Valentino Di Leonardo (Lead Developer)
: Rittik Wystub (Lead Developer) -->



---
# Beteiligte Personen (2/2)

**Hochschule Darmstadt – Studierende**

:::: columns
::: single
- Breiter Alexander	– Alexander.Breiter@stud.h-da.de
- Gotha	Etienne – Etienne.Gotha@stud.h-da.de
- Krüger Dorian – Dorian.Krueger@stud.h-da.de
- Schandl Lukas – Lukas.Schandl@stud.h-da.de
:::
::: single
- Bäuerlein Robin – Robin.Baeuerlein@stud.h-da.de
- Hofmann Jonathan – Jonathan.Hofmann@stud.h-da.de
- Klinger Jonathan – Jonathan.Klinger@stud.h-da.de
- Mauß Erik – Erik.Mauss@stud.h-da.de
- Pham Minh Thanh – Minh.T.Pham@stud.h-da.de
- Sauter Arno – Arno.Sauter@stud.h-da.de
- Yacoub Joseph – Joseph.Yacoub@stud.h-da.de
:::
::::


---
# Aufteilung in Projektteams

:::: columns
::: single
**Projektteam #1**
- Gotha	Etienne – Etienne.Gotha@stud.h-da.de
- Mauß Erik – Erik.Mauss@stud.h-da.de
- Sauter Arno – Arno.Sauter@stud.h-da.de
- Yacoub Joseph – Joseph.Yacoub@stud.h-da.de
:::
::: single
**Projektteam #2**
- Bäuerlein Robin – Robin.Baeuerlein@stud.h-da.de
- Breiter Alexander	– Alexander.Breiter@stud.h-da.de
- Hofmann Jonathan – Jonathan.Hofmann@stud.h-da.de
- Klinger Jonathan – Jonathan.Klinger@stud.h-da.de
- Krüger Dorian – Dorian.Krueger@stud.h-da.de
- Pham Minh Thanh – Minh.T.Pham@stud.h-da.de
- Schandl Lukas – Lukas.Schandl@stud.h-da.de
:::
::::


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

---
# Vorbereitung

- Aufteilung der Studierenden in **2 Projektteams** analog den beiden Projekten
- Jedes Projektteam bildet eigenverantwortlich **Dev.-/Research-Teams** (=2-3er Teams), die selbständig und eigenverantwortlich an den verschiedenen Arbeitspaketen arbeiten
  - so lassen sich Arbeitspakete (=Sprints) parallel bearbeiten^1^
- Jedes Projektteam bestimmt **2 Projektverantwortliche**^2^, die ...
  - ... den *Projektfortschritt* kontrolliert
  - ... *Arbeitsergebnisse* einfordert
  - ... als *Ansprechpartner* des Projektteams fungieren
  - ... *Arbeitspakete* und Sprints koordinieren
  - ... für die *Qualitätskontrolle* verantwortlich sind
  - ... mitarbeiten, aber auch Aufgaben *delegieren* können
- Projektdurchführung analog dem Scrum- oder Design-Thinking Vorgehensmodell

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
- via **Discord**: <https://discord.com/invite/3dY8gFp7ay>
  - für die Kommunikation der Projektteams untereinander
  - für die Kommunikation mit den Stakeholdern zu technischen Fragen
- oder **Email** bei wichtigen und/oder offiziellen Dingen
  - achten sie auf einen aussagekräftigen Betreff
  - bitte alle Verantwortlichen in cc mit aufnehmen
- wöchentliche **Jour fixe** (ca. 30-45 Min pro Projektteam) mit den Stakeholdern
  - Durchführung mittels geeigneter Online-Tools (bspw. Microsoft Teams, BBB)
  - genaues Tool wird noch bekannt gegeben


---
# Entwicklungsplattform und Dokumentation

**GitLab**
- jede Gruppe erhält ein **GitLab-Repository**
- dort werden Programmcode und Dokumentation (Deliverables) gehostet
<!-- - Unternehmensseitig werden notwendige APIs etc. zur Verfügung gestellt – mehr Informationen dazu in der Projektvorstellung -->

**Moodle**
- Link zum Moodlekurs: <https://lernen.h-da.de/course/view.php?id=16702>
- offizielle Dokumentationen werden über **Moodle** bereit gestellt
- ebenso wie ergänzende Materialien
- und die **APIs** zum Zugriff auf das ONE-Backend


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
# Fragen ?