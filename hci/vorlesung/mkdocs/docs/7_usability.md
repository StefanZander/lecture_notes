# Usability Evaluation

:material-clock-outline: Geschätzte Bearbeitungszeit: 3-4 Stunden

!!! abstract "In diesem Kapitel geht es um folgende Themen:"
    - Sie erfahren, warum **Design** und **User Experience** für sich genommen unterschiedliche Dinge sind, sich aber doch wechselseitig beeinflussen. 
    - Sie lernen elementare Bestandteile von **Usability** und **Software-Ergonomie**
    - Sie erfahren, warum man zur Evaluation von Softwaresystemen im Speziellen immer zwei **unterschiedliche Evaluierungsverfahren** einsetzen sollte und welche praktische Relevanz diese mit sich bringen.
    - Sie lernen, wie man die Usability eines Softwaresystems **heuristisch** mit einer selbstentwickelten **Checkliste** evaluieren kann
    - Sie lernen das Usability Testing, eine **empirische Testmethode** mit echten Nutzenden 
    - Sie lernen, wie man einen Usability Test mit der **"Thinking Aloud"-Methode** plant, durchführt und auswertet
    - Sie erfahren, wie sie diese Methoden für die eigene **Abschlussarbeit** einsetzen können.

!!! success "Voraussetzungen"
    - Sie haben alle vorherigen Einheiten durchgearbeitet
    - Sie kennen User Research und Requirements Engineering-Methoden
    - Sie haben User-Tests im Rahmen von Prototyping durchgeführt und ausgewertet
    - Sie haben einen ersten lauffähigen Prototypen ihrer App implementiert

!!! warning "Warum ist es wichtig, dieses Themengebiet zu kennen..."
    - Studien zur **Usability** zeigen konsistent, dass benutzerfreundliche Systeme die **Akzeptanz und Zufriedenheit** von Anwender:innen signifikant erhöhen (vgl. Nielsen 1993; ISO 9241-11).
    - Empirische Untersuchungen belegen, dass gute Usability den **Schulungs- und Supportaufwand** reduziert, was insbesondere in Unternehmen zu messbaren **Kostensenkungen** führt.
    - **Usability-Evaluierungsmethoden** sind praxisrelevant, da sie bereits in frühen Entwicklungsphasen die Identifikation von **Benutzbarkeitsproblemen** ermöglichen und so Fehlerkosten reduzieren (vgl. Bias & Mayhew 2005).
    - **Iterative Evaluationsprozesse** tragen empirisch nachweisbar zu einer kontinuierlichen Verbesserung der **Softwarequalität** bei und gelten als **Best Practice** in der Softwareentwicklung.
    - **Usability-Inspections**, insbesondere **heuristische Evaluationen**, haben sich in Studien als **kosteneffiziente Verfahren** erwiesen, um bereits in **Prototyp-Phasen** wesentliche Usability-Probleme zu identifizieren (vgl. Nielsen & Molich 1990).
    - **Usability-Tests** mit realen Nutzer:innen liefern valide und **praxisnahe Rückmeldungen**, da sie tatsächliche **Interaktionsprobleme** aufdecken, die in Experteninspektionen oft übersehen werden.
    - Empirische Daten aus Usability-Tests (z. B. Fehlerraten, Bearbeitungszeiten, subjektive Zufriedenheit) dienen als belastbare **Entscheidungsgrundlage** für Design- und Entwicklungsprozesse.
    - Die Methode des **Thinking Aloud** ist durch zahlreiche Studien belegt als eine der effektivsten und zugleich kostengünstigsten Evaluierungsmethoden, da sie tiefe Einblicke in die **mentalen Modelle** der Nutzer:innen ermöglicht (vgl. Ericsson & Simon 1993).
    - **Software-Ergonomie** basiert auf etablierten Normen wie der **ISO 9241**, deren Anwendung in der Praxis die **Gesundheit**, **Effizienz** und **Leistungsfähigkeit** der Benutzer:innen nachweislich unterstützt.
    - Forschung und Praxis zeigen, dass **ergonomisch gestaltete Systeme** durch die Berücksichtigung technischer, psychologischer und physiologischer Faktoren langfristig zu nachhaltiger, gesundheitsgerechter und produktiver Software-Nutzung beitragen.

<!--
bitte nenne mir ein paar gute gründe, warum es für Informatik-Studierende sinnvoll ist, kenntnisse zu/in folgenden themengebieten zu haben: Usability, Usability Evaluierungsmethoden, Usability INspection, Usability Testing, Thinking aloud, Software-Ergonomie
 
-->


## Inhalte

### Lektion 1: Design und User Experience

Anhand zweier anschaulicher Beispiele zeigen wir, dass Design und User Experience zwar hand-in-hand-gehen, aber doch unterschiedliche Dinge sind und jeweils separat betrachtet und evaluiert werden müssen. 

:material-presentation: **Slides**

1. :material-file-pdf-box: [Design versus User Experience – veranschaulicht an zwei Beispielen](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/7_usability/01_design_vs_ux.pdf?ref_type=heads&inline=true)

:material-account-school: **Lernzielkontrolle**

!!! question "Fragen zur Reflexion des Lernstoffes"
    - **Verständnisfragen**
        1. Erklären Sie den Unterschied zwischen Design und User Experience (UX) in eigenen Worten.
        2. Warum ist es wichtig, zwischen „Sympathy“ und „Empathy“ zu unterscheiden, wenn man UX gestaltet?
        3. Welche Rolle spielt Empathie im Gestaltungsprozess interaktiver Systeme?
    - **Anwendungsfragen**
        1. Stellen Sie sich vor, Sie entwickeln eine Lernplattform für Studierende: Welche Aspekte würden Sie eher unter Design und welche unter UX einordnen?
        2. Nennen Sie ein Beispiel aus Ihrem Alltag, bei dem das Design zwar gelungen wirkt, die User Experience jedoch negativ ist (oder umgekehrt).
    - **Reflexionsfragen**
        1. Diskutieren Sie: Kann ein gutes Design eine schlechte User Experience kompensieren – oder umgekehrt?
        2. Warum ist es für Softwareentwickler:innen wichtig, Empathie für die Nutzerrolle zu entwickeln?


---

### Lektion 2: Definitionen

In dieser Lektion lernen sie die grundlegenden Eigenschaften von Usability und Software Ergonomie.

:material-presentation: **Slides**

1. :material-file-pdf-box: [Definitionen](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/7_usability/02_definitions.pdf?ref_type=heads&inline=true)

:material-account-school: **Lernzielkontrolle**

!!! question "Fragen zur Reflexion des Lernstoffes"
    - **Verständnisfragen**
        1. Wie wird Software-Ergonomie definiert und in welchem Bereich findet sie primär Anwendung?
        2. Inwiefern ist der Begriff Usability heute aktueller als der Begriff Software-Ergonomie?
        3. Welche drei Dimensionen beschreibt die ISO 9241-11 zur Definition von Usability?
    - **Anwendungsfragen**
        1. Geben Sie ein Beispiel für eine Software, die effektiv ist, aber nicht unbedingt zufriedenstellend in der Nutzung.
        2. Nennen Sie ein Szenario, in dem eine Software effizient ist, aber nicht effektiv.
        3. Welche Maßnahmen können im Usability Engineering helfen, die Gebrauchstauglichkeit einer Software systematisch zu verbessern?
    - **Reflexionsfragen**
        1. Warum ist es sinnvoll, Usability als iterativen Prozess im Produktlebenszyklus zu betrachten?
        2. Diskutieren Sie: Welche Rolle spielen Psychologie und Physiologie des Benutzers bei der Gestaltung von Software?
        3. Inwiefern lassen sich die Prinzipien der Software-Ergonomie auch auf Mobile Devices und Embedded Systems übertragen?

---

### Lektion 3: Software-Ergonomie

Diese Einheit gibt einen Überblick über die verschiedenen Normen zur Software Ergonomie. Die Berücksichtigung dieser Dinge hilft beim Design intuitiver Benutzungsschnittstellen (aka UIs).

:material-presentation: **Slides**

1. :material-file-pdf-box: [Software Ergonomie – Eine Übersicht ergonomischer Normen](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/7_usability/03_ergonomie.pdf?ref_type=heads&inline=true)

:material-account-school: **Lernzielkontrolle**

!!! question "Fragen zur Reflexion des Lernstoffes"
    - **Verständnisfragen**
        1. Was ist der Unterschied zwischen einer Norm (z. B. DIN EN ISO 9241) und einer konkreten Software-Implementierung?
        2. Nennen Sie die sieben Prinzipien der Dialoggestaltung gemäß DIN EN ISO 9241.
        3. Wie definiert sich das Prinzip Aufgabenangemessenheit und warum ist es für die Usability zentral?
        4. Worin unterscheidet sich Selbstbeschreibungsfähigkeit von einer klassischen Dokumentation?
        5. Was bedeutet Erwartungskonformität im Kontext von Software-Ergonomie?
    - **Anwendungs- & Transferfragen**
        1. Stellen Sie sich vor, Sie entwickeln ein Online-Formular für eine Bank: Wie würden Sie die Prinzipien Fehlertoleranz und Steuerbarkeit konkret umsetzen?
        2. In welcher Weise kann Individualisierbarkeit sowohl positiv zur Usability beitragen als auch negative Folgen haben?
        3. Ein Programm zeigt bei jeder Eingabe eine komplexe Fehlermeldung an, ohne Korrekturvorschläge zu machen. Gegen welches Ergonomie-Prinzip verstößt das?
        4. Wie könnte man das Prinzip Lernförderlichkeit in einer Software für Einsteiger praktisch umsetzen?
    - **Reflexionsfragen**
        1. Diskutieren Sie, ob die Einhaltung von ergonomischen Normen die Innovation in der Softwareentwicklung fördert oder hemmt.
        2. Warum ist es wichtig, dass Normen zur Software-Ergonomie nur Mindestanforderungen darstellen?
        3. Welche Rolle spielen Kontextfaktoren (z. B. Arbeitsumgebung, Benutzerrollen) bei der Umsetzung von Ergonomie-Richtlinien?

---

### Lektion 4: Usability Evaluation

Um die **Gebrauchstauglichkeit** bzw. Nutzbarkeit von von Produkten im Allgemeinen und Softwaresystemen im Speziellen zu beurteilen sind **Evaluationsverfahren** notwendig. Im Bereich der Usability Evaluation unterscheidet man zwischen der **Usability Inspection** und dem **Usability Testing**. Das erstgenannte Verfahren (Usability Inspection) zählt zu der Klasse der **heuristischen Methoden** und wird von einer Reihe von Expert:innen und anhand von Checklisten etc. durchgeführt. Das Usability Testing ist ein **empirisches Verfahren**, welches die Benutzbarkeit anhand einiger vorab definierten Aufgaben und mit echten Nutzenden evaluiert. In dieser Einheit lernen sie die Besonderheiten beider Evaluationstypen sowie entsprechende Evaluationsverfahren (Checklisten bei der Usability Inspection und Thinking aloud beim Usability Test) kennen. 

:material-presentation: **Slides**

1. :material-file-pdf-box: [Evaluierungsarten in der Veranstaltung](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/7_usability/04_types.pdf?ref_type=heads&inline=true)
2. :material-file-pdf-box: [Die Usability Inspection (heuristisch)](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/7_usability/05_inspection.pdf?ref_type=heads&inline=true)
3. :material-file-pdf-box: [Das Usability Testing (empirisch)](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/7_usability/06_testing.pdf?ref_type=heads&inline=true)
4. :material-file-pdf-box: [Die "Thinking aloud"-Methode](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/7_usability/07_thinking_aloud.pdf?ref_type=heads&inline=true)
5. :material-file-pdf-box: [Weitere Usability-Testmethoden](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/7_usability/08_additional_testing_types.pdf?ref_type=heads&inline=true)
6. :material-file-pdf-box: [Auswertung von Usability-Tests](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/7_usability/09_auswertung.pdf?ref_type=heads&inline=true)


:material-file-document-multiple-outline: **Ergänzendes Material**

 - :material-file-document-outline: [Sehr guter Artikel zu den 10 grundlegenen Usability-Heuristiken für das Design von User Interfaces](https://www.nngroup.com/articles/ten-usability-heuristics/)
 - :material-video-outline: [Video zur Erklärung der Thinking-aloud-Methode für Testuser](https://www.nngroup.com/videos/think-aloud/)
 - :material-file-document: [PSSUQ als Tool für die eigenen Abschlussarbeit; 10 Things to Know About the Post Study System Usability Questionnaire](https://measuringu.com/pssuq/)
 - :material-file-document-outline: [Vorlage & Checkliste für Usability-Evaluation](https://lernen.h-da.de/mod/resource/view.php?id=218415)

:material-account-school: **Lernzielkontrolle**

!!! question "Fragen zur Reflexion des Lernstoffes"
    - **Verständnisfragen**
        1. Ist es sinnvoll, Methoden der Usability Inspection grundsätzlich in enger zeitlicher Kopplung mit Usability Tests durchzuführen? Bitte begründen Sie Ihre Antwort.
        2. Zeichnen Sie auf einem Zeitstrahl von Entwicklungsanfang bis Rollout grob die ungefähren Zeiten ein, an denen es sich lohnt Usability Tests und/oder Usability Inspection durchzuführen.
        3. Warum ist die Einführung bei der Thinking aloud Methode bzw. beim Usability Test so wichtig?
        4. Warum ist es auch beim Usability Testing notwendig, objektivierbare Messkriterien zu finden?
        5. Warum ist es gerade für Software-Produkte ein Usability Test wichtig und notwendig?
        6. Welche Nutzergruppen / welche Nutzer wählen Sie beim Usability Test aus?
        7. Warum sollte das Co-Discovery mit Bedacht eingesetzt werden und welche Gefahren entstehen beim Co-Discovery?
        ---
    - **Anwendungs- & Transferfragen**
        1. Sie bekommen von Ihrem Vorgesetzten den Auftrag, eine fast fertige Software hinsichtlich Benutzbarkeit zu testen. Entsprechende Tests haben bisher nicht stattgefunden. Leider ist Budget und zeitlicher Rahmen sehr begrenzt. Wie gehen Sie sinnvollerweise vor? Welche Testmethoden wählen Sie?
        2. Bitte beurteilen Sie, ob es sinnvoll ist, teilstandardisierte Befragungstechniken im Rahmen des Usability Tests einzusetzen?
        3. In welchen Situationen würden Sie im Rahmen des Usability Testing zum Co-Discovery greifen? 
        ---
    - **Bitte nehmen Sie Stellung zu den folgenden Thesen**
        1. Durch gezieltes Nachfragen innerhalb der Usability Tests kann man die Auswertung der Testergebnisse beschleunigen, da man so schneller und auf direktem Wege zu den Ursachen einer Verhaltensweise vorstößt.
        2. Fragebogentechnik ist der Thinking aloud Methode grundsätzlich vorzuziehen.
        3. Da es beim Usability Test um das subjektive Empfinden von BenutzerInnen geht, ist hier eine Objektivierung bzw. Quantifizierung von Messkriterien nicht erforderlich.
        4. Bei überschaubarem Budget kann man im Zweifel auf einen Pilot-Test verzichten.
        5. Da Usability Tests idR mit sehr hohe Kosten verbunden sind, sollte man, insbesondere bei einem eng begrenzten Projektbudget, diese erst in späteren Projektphase durchführen.
        6. Usability Tests und Usability Inspection liefern idR dieselben Ergebnisse.
        7. Als Pretest für einen Usability Test kann man die eigenen Designer / SWE heranziehen
        8. Interview und Fragebogentechnik können einen Thinking aloud Test nicht ersetzen. Bitte begründen Sie Ihre Antwort.  


---


## Quellenangaben

- Bias, R. G., & Mayhew, D. J. (2005). Cost-Justifying Usability: An Update for the Internet Age. Morgan Kaufmann.
- Ericsson, K. A., & Simon, H. A. (1993). Protocol Analysis: Verbal Reports as Data (Rev. ed.). MIT Press.
- ISO 9241-11 (2018). Ergonomics of human-system interaction – Part 11: Usability: Definitions and concepts. International Organization for Standardization.
- Nielsen, J. (1993). Usability Engineering. Academic Press.
- Nielsen, J., & Molich, R. (1990). Heuristic Evaluation of User Interfaces. Proceedings of the SIGCHI Conference on Human Factors in Computing Systems (CHI '90), 249–256.
- Verschiedene empirische Arbeiten zur Wirkung ergonomischer Gestaltung im Rahmen der Bildschirmarbeitsverordnung (1996, EU-Richtlinie 90/270/EWG).