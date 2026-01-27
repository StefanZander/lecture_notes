# User-Centered Design: Grundlagen und Entwicklungsprozess

:material-clock-outline: Geschätzte Bearbeitungszeit: 2-3 Stunden

<!-- Worum geht es in diesem Kapitel... -->
!!! abstract "In diesem Kapitel geht es um folgende Themen:"
    - Sie lernen die Grundlagen von **User-Centeren Design** kennen
    - Sie sehen anhand von Beispielen, wie wichtig Nutzendenzentrierung ist
    - Sie lernen das Zusammenspiel von Design und Nutzendenzentrierung anhand einiger Beispiele kennen
    - Wir reflektieren die wesentlichen Fehler bzw. **Fehlannahmen**, die häufig zu schlechten Ergebnissen bzw. gescheiterten Systemen etc. führen
    - Wir lernen eine **umfassende Definition** von User-Centered Design
    - Anhand von **Experimenten** beweisen wir, warum Nutzendenzentrierung nicht prognostiziert oder simuliert werden kann
    - Wir lernen elementare Konzepte eines **Nutzenden-zentrierten Entwicklungsprozesses** kennen
    - Wir versuchen zu verdeutlichen, warum Nutzendenzentrierung bzw. User-Centered Design eine **wichtige Rolle** in der Informatik spielt

!!! success "Voraussetzungen"
    - Interesse am Thema und Aufmerksamkeit
    - Bereitschaft mitbringen zu akzeptieren, dass eigene Annahmen teilweise falsch und/oder unzureichend sind
    - Mut haben zu erkennen, dass eigene Erfahrungen keine verlässlichen und universell gültigen Rückschlüsse auf das Verhalten oder das Erleben anderer Menschen zulassen

!!! warning "Warum ist es wichtig das zu kennen..."
    - Kenntnisse in nutzendenzentrierter Softwareentwicklung sind essenziell, da empirische Studien zeigen, dass die frühzeitige und kontinuierliche Einbindung von Nutzer:innen die Produktqualität, Akzeptanz und Gebrauchstauglichkeit signifikant erhöht (ISO 9241-210, 2019)[^5].
    - Ein fundiertes Verständnis von User-Centered Design ist wichtig, weil systematische Analysen der Nutzerbedürfnisse nachweislich zu geringeren Fehlerquoten, höherer Produktivität und erhöhter Zufriedenheit in der Nutzung führen (Mao et al., 2005)[^6].
    - UCD-Methoden wie Prototyping und iterative Evaluation sind für Informatiker:innen praxisrelevant, da sie helfen, Entwicklungsrisiken zu reduzieren und kostspielige Nachbesserungen in späten Entwicklungsphasen zu vermeiden (Gulliksen et al., 2003)[^4].
    - Kenntnisse im Design Thinking sind wertvoll, da empirische Untersuchungen belegen, dass interdisziplinäre, kreative Problemlösungsansätze Innovationen fördern und die Entwicklung von Softwarelösungen mit hoher Nutzerorientierung unterstützen (Brown, 2009[^2]; Beckman & Barry, 2007[^1]).
    - Die Anwendung von Design Thinking in der Softwareentwicklung hat sich in der Praxis bewährt, da Unternehmen wie SAP, IBM oder Google durch diese Ansätze messbare Erfolge in Form von verbesserten Entwicklungsprozessen und innovativen Produkten erzielen (Carlgren et al., 2016)[^3].
    - Insgesamt profitieren Informatiker:innen von diesen Kenntnissen, weil nutzendenzentrierte Methoden in der Praxis zunehmend als Standard angesehen werden und somit die berufliche Anschlussfähigkeit sowie die Wettbewerbsfähigkeit auf dem Arbeitsmarkt erhöhen (Norman, 2013)[^7].
<!--
    !!! refs "Literaturangaben"
        1. Beckman, S. L., & Barry, M. (2007). Innovation as a Learning Process: Embedding Design Thinking. California Management Review, 50(1), 25–56.
        2. Brown, T. (2009). Change by Design: How Design Thinking Creates New Alternatives for Business and Society. Harper Business.
        3. Carlgren, L., Rauth, I., & Elmquist, M. (2016). Framing Design Thinking: The Concept in Idea and Enactment. Creativity and Innovation Management, 25(1), 38–57.
        4. Gulliksen, J., Göransson, B., Boivie, I., Blomkvist, S., Persson, J., & Cajander, Å. (2003). Key principles for user-centred systems design. Behaviour & Information Technology, 22(6), 397–409.
        5. ISO 9241-210 (2019). Ergonomics of human-system interaction – Part 210: Human-centred design for interactive systems. International Organization for Standardization.
        6. Mao, J.-Y., Vredenburg, K., Smith, P. W., & Carey, T. (2005). User-Centered Design Methods in Practice: A Survey of the State of the Art. Proceedings of HCI International 2005.
        7. Norman, D. A. (2013). The Design of Everyday Things (Revised and Expanded Edition). Basic Books.
-->
[^1]: Beckman, S. L., & Barry, M. (2007). Innovation as a Learning Process: Embedding Design Thinking. California Management Review, 50(1), 25–56.
[^2]: Brown, T. (2009). Change by Design: How Design Thinking Creates New Alternatives for Business and Society. Harper Business.
[^3]: Carlgren, L., Rauth, I., & Elmquist, M. (2016). Framing Design Thinking: The Concept in Idea and Enactment. Creativity and Innovation Management, 25(1), 38–57.
[^4]: Gulliksen, J., Göransson, B., Boivie, I., Blomkvist, S., Persson, J., & Cajander, Å. (2003). Key principles for user-centred systems design. Behaviour & Information Technology, 22(6), 397–409.
[^5]: ISO 9241-210 (2019). Ergonomics of human-system interaction – Part 210: Human-centred design for interactive systems. International Organization for Standardization.
[^6]: Mao, J.-Y., Vredenburg, K., Smith, P. W., & Carey, T. (2005). User-Centered Design Methods in Practice: A Survey of the State of the Art. Proceedings of HCI International 2005.
[^7]: Norman, D. A. (2013). The Design of Everyday Things (Revised and Expanded Edition). Basic Books.

<!--
    - Projekte scheitern häufig aufgrund folgenschwerer Fehlannahmen und fehlender Nutzendenzentrierung
    - Eine Nutzendenzentrierung ist elementar und führt zu besseren / erfolgreicheren Projekten
    - Im User-Centered Design geht es nicht um ein möglichst schnelles Erreichen eines Projektzieles sondern um die Berücksichtigung aller relevanter Aspekte, die ein erfolgreiches System beeinhalten muss
    - Exzellente technische Expertise ist kein Garant für ein erfolgreiches System oder eine erfolgreiche Projektdurchführung; wichtig ist eine Einbettung in einen Nutzenden-zentrierten Entwicklungsprozess
-->

## Inhalte

* :material-file-pdf-box: [Lektion 1: Warum Nutzendenzentrierung mitunter Menschenleben rettet](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/1_user-centered_design/01_examples.pdf?ref_type=heads)
* :material-file-pdf-box: [Lektion 2: Warum gutes Design eine wichtige Rolle in der Nutzendenzentrierung spielt](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/1_user-centered_design/02_good_design.pdf?inline=true)
* :material-file-pdf-box: [Lektion 3: Warum die Informatik Nutzendenzentrierung benötigt](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/1_user-centered_design/03_ucd_in_cs.pdf?ref_type=heads&inline=false)
* :material-file-pdf-box: [Lektion 4: Wie ist Nutzendenzentrierung definiert](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/1_user-centered_design/04_definition.pdf?ref_type=heads&inline=false)
* :material-file-pdf-box: [Lektion 5: Warum Nutzendenzentrierung nicht prognostiziert oder simuliert werden kann](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/1_user-centered_design/05_errors.pdf?ref_type=heads&inline=false)
* :material-file-pdf-box: [Lektion 6: Der User-Centered Design Prozess](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/1_user-centered_design/06_process.pdf?ref_type=heads&inline=false)
* :material-video: [Die Summo-Fallstudie (Video)](https://lernen.h-da.de/mod/resource/view.php?id=359759)


## Ergänzende Materialien
- :octicons-book-16: [Foundations for Designing User-Centered Systems: What System Designers Need to Know about People](https://link.springer.com/book/10.1007/978-1-4471-5134-0) – sehr gutes Buch mit vielen relevanten und interessanten Themen; aufrufbar aus dem Hochschulnetz
- :material-file-pdf-box: Lesenswerter Spiegel-Artikel der darlegt, wie IKEA durch User-Research-Methoden und Nutzendenzentrierung zur Weltmarke und dem weltweit erfolgreichsten Möbelproduzenten wurde: [IKEA – Die Welt-Raumausstatter (Artikel im Spiegel von 2012) mit Textmarkierungen](https://lernen.h-da.de/mod/resource/view.php?id=232278)
- :material-file-pdf-box: Tolles und umfassendes [Skriptum zu Human-Computer-Interaction](https://lernen.h-da.de/mod/resource/view.php?id=213473) von Prof. Dr. Keith Andrews (TU Graz)
- :material-video: Dieses [Video](https://www.youtube.com/watch?v=dln9xDsmCoY) zeigt auf amüsante Art und Weise wesentliche Merkmale von User-Centered Design.
<!--
## Übungen
* ...
* 
-->

## Lernzielkontrolle

!!! question "Fragen zur Reflexion des Lernstoffes"

    Nach dem Durcharbeiten der o.g. Lektionen sollten sie folgende Fragen beantworten können:

    1. Wie würden sie den UCD-Entwicklungsprozess klassifizieren (sequentiell, iterativ, inkrementell, zyklisch, etc.)? Bitte begründen sie ihre Einschätzung.
    2. Erklären Sie kurz und in Stichpunkten, wie und wodurch sich HCI von der Objekt-orientierten Analyse und Design unterscheidet.
    3. Warum gilt die frühzeitige und kontinuierliche Einbeziehung von Nutzer:innen als Schlüsselfaktor für den Erfolg nutzenden-zentrierter Softwareentwicklung?  
    4. Welches Ziel verfolgt nutzenden-zentrierte Softwareentwicklung in erster Linie?  
        - A) Maximale Code-Effizienz und Performanz  
        - B) Reduktion der Projektlaufzeit unabhängig von den Anforderungen  
        - C) Entwicklung von Systemen, die die Bedürfnisse, Fähigkeiten und Kontexte der Nutzer:innen erfüllen  <!-- x -->
        - D) Vollständige Automatisierung aller Entwicklungsschritte
    5. Stellen Sie sich vor, Sie entwickeln eine mobile Banking-App. Beschreiben Sie, wie Sie den Ansatz des User-Centered Design konkret auf die Gestaltung der Login-Funktion anwenden würden.  
    6. Diskutieren Sie die Rolle von Usability-Tests und Prototyping im Rahmen nutzenden-zentrierter Softwareentwicklung. Warum sind beide Methoden für den Entwicklungsprozess unverzichtbar?  
    7. Welche Vorteile ergeben sich für Unternehmen, wenn sie User-Centered Design als festen Bestandteil ihrer Entwicklungsprozesse etablieren?  
    8. Bitte nehmen Sie Stellung zu folgenden Thesen und begründen Sie Ihre Antwort
        - _Eine Nutzendenzentrierung ist elementar und führt zu besseren und erfolgreicheren Projekten._
        - _Im User-Centered Design geht es nicht um ein möglichst schnelles Erreichen eines Projektzieles sondern um die Berücksichtigung aller relevanter Aspekte, die ein erfolgreiches System beeinhalten muss._
        - _Exzellente technische Expertise ist kein Garant für ein erfolgreiches System oder eine erfolgreiche Projektdurchführung; wichtig ist eine Einbettung in einen Nutzenden-zentrierten Entwicklungsprozess._
        - _User-Centered Design eignet sich eher für physische Produkte und weniger für Software._



## Zusammenfassung

!!! success "Das haben sie in dieser Einheit gelernt"
    - [x] Sie kennen die grundlegenden Fehler, die DesignerInnen und EntwicklerInnen beim Design und der Entwicklung von Systemen und Produkten häufig machen
    - [x] Sie können begründen, warum diese Fehler zu schlechten Entwürfen führen
    - [x] Sie kennen die grundlegenden Prinzipen eines Nutzenden-zentrierten Entwicklungsansatzes
    - [x] Sie können die Unterschiede eines Nutzenden-zentrierten Entwurfs gegenüber anderen Entwicklungsansätzen benennen
    - [x] Sie kennen die einzelnen Entwicklungsphasen und können die unterschiedlichen Aktivitäten diesen zuordnen


<!--
Prompt:
Bitte erstelle mir eine Auflistung mit je einem Satz pro Punkt, warum es für Informatikstudierende wichtig ist, Kenntnisse zur nutzendenzentrierten Softwareentwicklung und insbesonder zu user-centered design und design thinking zu haben. Benutze für die Formulierung einen wissenschaftlichen, faktenstarken Stil und gebe auch vollständige Quellen an. Berücksichtige bitte auch einen hohen Praxisbezug.
-->