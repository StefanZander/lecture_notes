# Requirements Engineering

:material-clock-outline: Geschätzte Bearbeitungszeit: 4-6 Stunden

!!! abstract "In diesem Kapitel geht es um folgende Themen:"
    - Wesentliche Ursachen warum **Projekte scheitern**
    - **Requirements Engineering** als wichtiges Werkzeug zur strukturierten und systematisierten Erfassung, Dokumentation, Verwaltung und Überprüfung von Anforderungen
    - Die verschiedenen **Anforderungsarten** und ihre Besonderheiten
    - Werkzeuge zur **Analyse des Systemumfelds** und der Identifikation von relevanten Anforderungsquellen 
    - Eine clevere Methode zur **Priorisierung** und **Selektion** von zu entwickelnden Anforderungen 
    - Werkzeuge zur **korrekten Formulierung** und **Dokumentation** von Anforderungen
    - Faktoren, welche die Anforderungsermittlung und -dokumentation erschweren.


!!! success "Voraussetzungen"
    - Kapitel [User Research](2_user_research.md) vollständig durchgearbeitet
    - Im Semesterprojekt haben sie bereits erste Interviews geführt und diese ausgewertet

!!! warning "Warum es wichtig ist dieses Themengebiet zu kennen"
    - Kenntnisse im Requirements Engineering sind essenziell, da **empirische Studien** zeigen, dass **fehlerhafte** oder **unvollständige Anforderungen** eine der häufigsten Ursachen für das Scheitern von IT-Projekten sind (Standish Group, 2015[^7]; Nuseibeh & Easterbrook, 2000[^6]).
    - Anforderungen systematisch zu erheben und zu dokumentieren **reduziert** nachweislich **Projektrisiken** und verhindert **kostspielige Änderungen** in späten Entwicklungsphasen (Boehm & Papaccio, 1988)[^1].
    - Ein fundiertes Requirements Engineering verbessert die **Kommunikation** zwischen Stakeholdern und Entwickler:innen, wodurch Missverständnisse minimiert und die Projektergebnisse besser an den **tatsächlichen Bedürfnissen** ausgerichtet werden (Hofmann & Lehner, 2001)[^4].
    - Empirische Untersuchungen belegen, dass der Einsatz **strukturierter Analysemethoden** im Requirements Engineering die **Softwarequalität** und die **Benutzerzufriedenheit** signifikant erhöht (Davis, 1993[^3]; Damian & Chisan, 2006[^2]).
    - Kenntnisse im Requirements Engineering sind praxisrelevant, da sie Informatiker:innen befähigen, **komplexe Systeme planbar und effizient zu entwickeln** und somit die Erfolgsquote von Projekten messbar steigern (Zowghi & Coulin, 2005)[^8].
    - Darüber hinaus bildet RE die Grundlage für **agile** und **iterative Entwicklungsprozesse**, indem es die kontinuierliche Anpassung von Anforderungen an sich ändernde Rahmenbedingungen unterstützt (Inayat et al., 2015)[^5].

[^1]: Boehm, B. W., & Papaccio, P. N. (1988). Understanding and controlling software costs. IEEE Transactions on Software Engineering, 14(10), 1462–1477.
[^2]: Damian, D., & Chisan, J. (2006). An empirical study of the complex relationships between requirements engineering processes and other processes that lead to payoffs in productivity, quality, and risk management. IEEE Transactions on Software Engineering, 32(7), 433–453.
[^3]: Davis, A. M. (1993). Software Requirements: Objects, Functions, and States. Prentice Hall.
[^4]: Hofmann, H. F., & Lehner, F. (2001). Requirements engineering as a success factor in software projects. IEEE Software, 18(4), 58–66.
[^5]: Inayat, I., Salim, S. S., Marczak, S., Daneva, M., & Shamshirband, S. (2015). A systematic literature review on agile requirements engineering practices and challenges. Computers in Human Behavior, 51, 915–929.
[^6]: Nuseibeh, B., & Easterbrook, S. (2000). Requirements engineering: A roadmap. Proceedings of the Conference on the Future of Software Engineering, 35–46.
[^7]: Standish Group. (2015). CHAOS Report 2015. The Standish Group International.
[^8]: Zowghi, D., & Coulin, C. (2005). Requirements elicitation: A survey of techniques, approaches, and tools. In Aurum, A. & Wohlin, C. (Eds.), Engineering and Managing Software Requirements (pp. 19–46). Springer.


## Inhalte

### Lektion 1: Motivation

In dieser Lektion lernen sie, warum es wichtig und notwendig ist, Anforderungen systematisch zu erfassen und verarbeiten und welche negativen Auswirkungen entstehen, wenn dies vernachlässigt wird.

1. Slides
2. Ergänzendes Material
    - ...
    - ...
3. Lernzielkontrolle

    !!! question "Fragen zur Reflexion des Lernstoffes"
        - **Frage 1 (offen):**  
            Warum gilt Requirements Engineering (RE) als zentraler Erfolgsfaktor in Softwareentwicklungsprojekten?
        - **Frage 2 (Multiple Choice – mehrere richtige Antworten möglich):**  
            Welche der folgenden Gründe werden im *Chaos Report (2016)* als Hauptursachen für das Scheitern von Projekten genannt?  
            - A) Unvollständige Anforderungen  <!-- x -->
            - B) Fehlende Einbindung von Nutzer:innen  <!-- x -->
            - C) Zu hoher Innovationsdruck  
            - D) Wahl der falschen Programmiersprache
        - **Frage 3 (offen):**  
            Welche Rolle spielt die frühzeitige und vollständige Erhebung von Anforderungen für den Projekterfolg?  
        - **Frage 4 (Multiple Choice – eine richtige Antwort):**  
            Warum steigen die Kosten zur Fehlerkorrektur in Softwareprojekten mit zunehmender Projektphase stark an?  
            - A) Weil Entwickler:innen später weniger motiviert sind  
            - B) Weil späte Fehler keine Relevanz haben  
            - C) Weil späte Fehlerbehebungen mit höherem Aufwand (Einarbeitung, Tests, Änderungen) verbunden sind  <!-- x -->
            - D) Weil Anforderungen im Projektverlauf automatisch verschwinden  
        - **Frage 5 (Transfer):**  
            Diskutieren Sie anhand eines Beispiels, wie unzureichendes Requirements Engineering zu einem kostspieligen Projektabbruch führen kann.  
        - **Frage 6 (Multiple Choice – mehrere richtige Antworten möglich):**  
            Welche Projekterfolgsfaktoren wurden in der Kölner Studie zum IS-Projekterfolg (2010) als besonders wichtig identifiziert?  
            - A) Kundenzufriedenheit  <!-- x -->
            - B) Anforderungserfüllung  <!-- x -->
            - C) Budget- und Termintreue  <!-- x -->
            - D) Exklusive Nutzung agiler Methoden  
        - **Frage 7 (offen):**  
            Warum nimmt die Bedeutung von Requirements Engineering mit zunehmender Systemkomplexität, Individualisierung und heterogenen Benutzergruppen zu?  
        - **Frage 8 (Reflexion):**  
            Erklären Sie, warum ein ingenieursmäßiger Umgang mit Anforderungen nicht nur technische, sondern auch organisatorische und wirtschaftliche Vorteile für Softwareprojekte bringt. 


<!-- Prompt
Bitte erstelle mir ein paar Fragen zur Lernzielkontrolle für Informatikstudierende im Bachelor 4. Semester aus folgendem Foliensatz zum Thema Einführung in Requirements Engineering und warum Requirements Engineering wichtig für erfolgreiche Projekt- und Entwicklungsarbeit ist. 
-->


---

### Lektion 2: Grundlagen und Begriffsdefinitionen

In dieser Lektion lernen sie die grundlegenden Begrifflichkeiten und Hauptaktivitäten des Requirements Engineering kennen.

1. Slides
    - Begriffsdefinitionen
    - Stakeholder
2. Ergänzendes Material
    - ...
    - ...
3. Lernzielkontrolle

    !!! question "Fragen zur Reflexion des Lernstoffes"
        - **Frage 1 (offen):**  
            Definieren Sie den Begriff *Requirements Engineering*. Welche Kernaspekte sind darin enthalten?  
        - **Frage 2 (Multiple Choice – mehrere richtige Antworten möglich):**  
            Welche Tätigkeiten gehören zu den Hauptaufgaben im Requirements Engineering (nach ISO/IEC/IEEE 29148:2011)?  
            - A) Ermitteln von Anforderungen  
            - B) Dokumentieren von Anforderungen  
            - C) Prüfen und Abstimmen von Anforderungen  
            - D) Verwalten von Anforderungen  
            - E) Implementieren von Anforderungen  
        - **Frage 3 (offen):**  
            Welches Ziel verfolgt Requirements Engineering in Bezug auf die Wünsche und Bedürfnisse der Stakeholder?  
        - **Frage 4 (Multiple Choice – eine richtige Antwort):**  
            Welches Risiko soll durch systematisches Requirements Engineering minimiert werden?  
            - A) Das Risiko, dass ein Projekt zu teuer wird  
            - B) Das Risiko, dass ein System nicht den Wünschen und Bedürfnissen der Stakeholder entspricht  
            - C) Das Risiko von technischen Bugs in der Implementierung  
            - D) Das Risiko von fehlenden Testfällen  
        - **Frage 5 (offen):**  
            Nennen Sie die drei Bedeutungen des Begriffs *Anforderung* nach IEEE Std. 610.12-1990.  
        - **Frage 6 (Transfer):**  
            Erläutern Sie anhand eines selbst gewählten Beispiels eine konkrete Anforderung und zeigen Sie auf, warum deren klare Dokumentation für das Projekt entscheidend ist.  
        - **Frage 7 (Reflexion):**  
            Warum ist es wichtig, Konsens unter den Stakeholdern über die Anforderungen herzustellen, und welche Probleme können entstehen, wenn dies nicht geschieht?
        - **Weitere Fragen:**
            - Von Ihrem Vorgesetzten erhalten Sie den Auftrag, kurzzeitig in einem länger laufenden Projekt das Requirements Engineering eigenverantwortlich durchzuführen; wie beurteilen Sie diesen Auftrag? Was entgegnen Sie dem Vorgesetzten? Bitte begründen Sie ihre Argumente.
            - Welche Probleme im Software-Entwicklungsprozess ergeben sich, wenn nicht alle relevanten Stakeholder identifiziert werden? Bitte begründen Sie Ihre Antwort. 
            - Warum ist das Herstellen des Konsens zwischen Stakeholdern so wichtig?
            - Welche Maßnahmen dienen zur Herstellung des Konsens zwischen Stakeholder und Anforderungen?
            - In der Vorlesung wurde von *Stakeholdern*, *Persona* und *Stereotypen* die Rede; welche Unterschiede existieren? Wie grenzen sich die Begrifflichkeiten voneinander ab?
            - These: _"Die nachträgliche Hinzunahme von Stakeholdern in den Entwicklungsprozess eines Systems ist unproblematisch, da diese sowieso nur indirekt an der Entwicklung beteiligt sind."_
            - These: _"Stakeholder müssen nur am Anfang in das Projekt integriert werden; spätestens bei der Implementierung braucht man diese nicht mehr."_

<!-- Prompt
Bitte erstelle mir ein paar Fragen zur Lernzielkontrolle für Informatikstudierende im Bachelor 4. Semester aus folgendem Foliensatz zum Thema Requirements Engineering. 
-->

---

### Lektion 3: Anforderungsarten

Es gibt mehrere Arten von Anforderungen die wichtig und relevant für den Systementwurf sind. Hier lernen sie die wesentlichen Arten und deren Merkmale kennen, anhand derer sie diese unterscheiden können.

1. Slides
2. Ergänzendes Material
3. Lernzielkontrolle

    !!! question "Fragen zur Reflexion des Lernstoffes"
        - **Frage 1 (offen):**  
            Definieren Sie den Begriff *funktionale Anforderung*. Wodurch unterscheidet sie sich von einer Qualitätsanforderung?  
        - **Frage 2 (Multiple Choice – eine richtige Antwort):**  
            Welche Aussage beschreibt am besten eine Qualitätsanforderung?  
            - A) Sie legt fest, welche konkrete Funktion ein System bereitstellen soll.  
            - B) Sie beschreibt ein Qualitätsmerkmal wie Performanz, Zuverlässigkeit oder Usability.  <!-- x -->
            - C) Sie ist eine Vorgabe, die den Entwicklungsprozess einschränkt.  
            - D) Sie spezifiziert den Ausgangs- und Folgezustand einer Systemaktion.  
        - **Frage 3 (offen):**  
            Was versteht man unter einer *Randbedingung* im Requirements Engineering? Nennen Sie ein Beispiel.  
        - **Frage 4 (Multiple Choice – mehrere richtige Antworten möglich):**  
            Welche der folgenden Anforderungen sind typische Qualitätsanforderungen?  
            - A) Das System muss im Jahresmittel eine Verfügbarkeit von 98% haben.  <!-- x -->
            - B) Das System muss skalierbar sein und mit steigender Nutzerzahl performant bleiben.  <!-- x -->
            - C) Das System muss es ermöglichen, eine Liste der zuletzt eingeloggten Nutzer anzuzeigen.  
            - D) Das System soll bis spätestens 2024 auf dem Markt verfügbar sein.  
        - **Frage 5 (Transfer):**  
            Analysieren Sie die folgende Anforderung: *„Das System soll klein und leicht sein, damit es auch mit auf Reisen genommen werden kann.“*  
            Wie würden Sie diese Anforderung klassifizieren (funktional, Qualität, Randbedingung) und warum?  
        - **Frage 6 (Reflexion):**  
            Diskutieren Sie, warum die klare Abgrenzung zwischen funktionalen Anforderungen, Qualitätsanforderungen und Randbedingungen für den Projekterfolg wichtig ist.  
        - **Frage 7 (Übung/Anwendungsaufgabe):**  
            Lesen Sie den folgenden Auszug zu einem Radiowecker:  
            *„Die Leuchtstärke der Ziffern soll stufenlos einstellbar sein. Der Wecker soll möglichst wenig Energie verbrauchen. Es dürfen nur Batterien der Marke XYZ verwendet werden.“*  
            Klassifizieren Sie die einzelnen Anforderungen und begründen Sie Ihre Entscheidung.  

---

### Lektion 4: Verifikation

Qualitativen Anforderungen (aka Qualiätsanforderungen) kommt eine besondere Rolle zu. Diese können nicht einfach nur erfasst, d.h., dokumentiert werden, sondern diese müssen auch noch verifiziert werden. Warum das so ist und welche Methoden sich hierfür eignen erfahren sie in dieser Einheit.

1. Slides
2. Ergänzendes Material
3. Lernzielkontrolle

    !!! question "Fragen zur Reflexion des Lernstoffes"
        1. Warum müssen qualitative Anforderungen (aka Qualitätsanforderungen) verifiziert werden?
        2. Welche Verifikationsarten gibt es und wann setzt man welche Methode ein?
        3. Gibt es eine zu bevorzugende Methode und falls ja, was sind die Gründe hierfür?
        4. Welche Rolle spielt die Validierung bei der Verifikation von Anforderungen?    

---

### Lektion 5: Die Systemkontextanalyse

Bevor mit der Erfassung von Anforderungen begonnen werden kann ist es wichtig, die richtigen Anforderungsquellen zu identifizieren. Das Übersehen von relevanten Anforderungsquellen kann signifikanten negativen Einfluss auf den Projekterfolg haben (siehe Lektion 1: Motivation). Ebenso ist es wichtig, irrelevante Quellen zu kennen und vom Systementwurf / Systemkontext abzugrenzen. Hier erfahren sie, wie  man den Systemkontext erfasst und modelliert und wie man relevante von irrelevanten Anforderungsquellen unterscheidet.

1. Slides
2. Ergänzendes Material
3. Lernzielkontrolle

    !!! question "Fragen zur Reflexion des Lernstoffes"
        1. Was ist die Aufgabe der Systemkontextanalyse und warum sollte man diese durchführen?
        2. Warum ist die Systemkontextanalyse im Rahmen eines Entwicklungsprojektes so wichtig?
        3. Bitte nehmen sie Stellung zu folgenden Thesen und begründen sie ihre Entscheidung
            1. _Im Rahmen der Anforderungsermittlung kann auf eine Systemkontextanalyse verzichtet werden, da alle relevanten und wichtigen Informationen von den Stakeholdern kommen._
            2. _Die Systemkontextanalyse sollte immer und ausschließlich zu Beginn eines Entwicklungsprojektes vorgenommen werden._
            3. _Die Durchführung einer Systemkontextanalyse ist bei abgeschotteten bzw. isolierten Systemen ohne Schnittstellen nach außen (grundsätzlich) nicht notwendig._
            4. _Die Systemkontextanalayse ist ausschließlich bei Entwicklungsprojekten notwendig._
            5. _Wenn man die Stakeholder nur detailliert genug befragt ist keine separate Systemkontextanalyse notwendig._
            6. _Die Systemkontextanalyse sollte am Ende eines Projekts durchgeführt werden, da das der Zustand ist, der zählt und so die wenigsten Änderungen zu erwarten sind._
            7. _Die Systemkontextanalyse sollte mehrmals während eines Entwicklungprojekts durchgeführt werden bzw. zumindest überarbeitet werden._

---

### Lektion 6: Das KANO-Modell

Nicht immer können alle erfassten Anforderungen umgesetzt werden. Häufig ist deshalb eine Priorisierung notwendig. Aber wie bzw. nach welchen Regeln bzw. Maßstäben geht man hier vor und wie lassen sich Anforderungen unterscheiden? Das KANO-Modell hilft, diese Fragen zu beantworten und stellt eine Metrik vor, nach der Anforderungen klassifiziert und priorisiert werden können. 

1. Slides
2. Ergänzendes Material
3. Lernzielkontrolle

    !!! question "Fragen zur Reflexion des Lernstoffes"
        1. Welche Ermittlungsmethoden eignen sich für die Bestimmung der Basis-, Leistungs- und Begeisterungsfaktoren eines zu entwickelnden Produktes? 
        2. Warum ist eine Unterteilung von Anforderungen analog dem Kano-Modell sinnvoll?
        3. Besteht zwischen dem Kano-Modell und den Analyseklassen im Sinne der Nutzenden-zentrierten Softwareentwicklung eine Beziehung? Wenn ja, welche
        4. Läßt sich das Kano-Modell sinnvoll mit Analyseklassen kombinieren?
        5. Bitte nehmen sie Stellung zu folgenden Thesen und begründen sie ihre Antwort:
            1. _Die Bestimmung von Basis und Leistungsfaktoren ist unabhängig von der Systemkontextanalyse._
            2. _Stakeholder helfen insbesondere zur Findung von Basisfaktoren und Leistungsfaktoren._
            3. _Stakeholder helfen insbesondere bei der Findung von Begeisterungsfaktoren._

---

### Lektion 7: Ermittlung und Dokumentation von Anforderungen

Für die Ermittlung von Anforderungen bieten sich mehrere Möglichkeiten, Wege und Techniken an, jeweils mit unterschiedlicher Zielstellung und unterschiedlichem Anwendungskontext. Auch müssen erfasste Anforderungen korrekt und nachvollziehbar dokumentiert werden. Dabei gilt es einige Qualitätskriterien sowohl für die einzelnen Anforderungen als auch für das Anforderungsspezifikationsdokument zu beachten. Zudem ist unsere menschliche Sprache von Transformationseffekten betroffen; diese wirken sich mit unter sehr negativ auf das Verständnis und die Semantik dokumentierte Anforderungen aus. Diese Einheit stellt fünf dieser Transformationseffekte vor und diskutiert mögliche Wege zur Behebung. Außerdem wird die Satzschablone eingeführt, ein Werkzeug um Anforderungen nach einer abgestimmten und standardisierten syntaktischen Struktur zu formulieren.

1. Slides
    - Anforderungsermittlung und -dokumentation
    - Transformationseffekte
    - Die Satzschablone

2. Ergänzendes Material
3. Lernzielkontrolle

    !!! question "Fragen zur Reflexion des Lernstoffes"
        1. An welchen Stellen im Entwicklungsprozess setzen Sie Interviewtechniken ein?
        2. Wie lässt sich die Prüfbarkeit von Anforderungen sicherstellen?
        3. Formulieren Sie a) eine Anforderung an das System und b) weißen Sie die Prüfbarkeit nach
        4. Warum ist die Prüfbarkeit von Anforderungen so wichtig?
        5. Worauf sollte man bei der natürlichsprachlichen Formulierung von Anforderungen unbedingt achten?
        6. Welche Transformationseffekte finden sich in den folgenden Anforderungen? Erstellen Sie Verbesserungen
            - _"Bei der Sendersuchlaufsdurchführung werden immer alle Serverdaten aufgerufen."_
            - _"Bei allen Fehlern soll dem Benutzer immer ein Dialog angezeigt werden."_
            - weitere...
        7. Thesen:
            - *Durch den Einsatz von Satzschablonen kann das Auftreten von Transformationseffekten ausgeschlossen werden.*
            - *Durch den Einsatz von Satzschablonen ist sichergestellt, dass alle Qualitätsanforderungen an die Anforderungsdokumentation erfüllbar sind.*
            - *Durch die Eliminierung von Transformationseffekten ist sichergestellt, dass die Qualitätsanforderungen von Anforderungen erfüllt sind.*
            - *Bei der Anforderungsermittlung liefern Brainstorming-Techniken grundsätzlich die besten Anforderungen.*
            - *Eine konzeptuelle Dokumentation von Anforderungen ist der natürlichsprachlichen vorzuziehen.*
            - _Bei der Anforderungsermittlung liefern Brainstorming-Techniken grundsätzlich die besten Anforderungen._


<!--
Prompt:
Bitte erstelle mir eine Auflistung mit je einem Satz pro Punkt, warum es für Informatiker:innen wichtig ist, Kenntnisse zum Requirements Engineering zu haben. Benutze für die Formulierung einen wissenschaftlichen, faktenstarken Stil und gebe auch vollständige Quellen an. Berücksichtige bitte auch einen hohen Praxisbezug und Studien mit empirischen Erkenntnissen.
-->