# Gestaltung intuitiver Benutzungsschnittstellen

:material-clock-outline: Geschätzte Bearbeitungszeit: 2-3 Stunden

!!! abstract "In diesem Kapitel geht es um folgende Themen"
    - Grundlagen des **Visual Design** und warum es viel mehr mit **Kommunikation** als mit visueller Ästhetik zu tun hat
    - Maßnahmen welche die Effizienz und Effektivität von **Selektions- und Verarbeitungsprozesse** digitaler Inhalte verbessern
    - Das Konzept der **Content Usability** sowie gestaltungs- und wahrnehmungspsychologische Elemente kennen- und verstehen lernen, die einer guten Content Usability zuträglich sind
    - **Content Comprehension** – warum dieses Konzept nicht nur für das Design intuitiver Benutzungsschnittstellen sondern auch für viele andere Dinge wie bspw. Präsentationen oder ihre Abschlussarbeit ungemein wichtig ist 
    - Wie Menschen Informationen wahrnehmen und welche Muster es aktuell hierzu gibt
    - Welche gestaltungs- und wahrnehmungspsychologischen Aspekte intuitive Benutzungsschnittstellen aufweisen
    - Kennenlernen von Gestaltungsprinzipien, welche die Benutzbarkeit von Softwaresystemen (und ihrer App) verbessern


!!! success "Voraussetzungen"
    - Sie haben die Einheiten zum [Prototyping](./5_prototyping.md) und [Modellbildung](4_models.md) abgeschlossen und im Rahmen des Semesterprojektes erste Entwürfe der Screens ihrer App und möglicher Navigationspfade konzipiert
    - Sie haben in ihrem Semesterprojekt den Meilenstein "User Research" vollständig abgeschlossen
    - Gedanklich sollten sie sich von der falschen(!) Vorstellung lösen, dass Design nur etwas für "Designer:innen" ist und dass Informatiker:innen keine guten "Designer" sind. 

!!! warning "Warum diese Themen wichtig sind"
    - Ein Verständnis für die Gestaltung **intuitiver Nutzungsschnittstellen** ist hilfreich, da **empirische Studien** zeigen, dass intuitive Interaktionen die Lernkurve verkürzen und Fehlerraten reduzieren, was die Effizienz von Softwareanwendungen signifikant steigert (Norman, 2013)[^5].
    - Informatiker:innen profitieren von Kenntnissen der **Gestaltungspsychologie** (z. B. Gestaltgesetze), da diese Prinzipien empirisch fundiert erklären, wie Menschen Muster, Nähe und Ähnlichkeit wahrnehmen, und so helfen, Benutzeroberflächen klar und effizient zu strukturieren (Wertheimer, 1923[^7]; Wickens et al., 2015[^8]).
    - Kenntnisse im **Visual Design** verbessern die Nutzbarkeit von digitalen Benutzungsschnittstellen, da **visuelle Gestaltungsprinzipien** wie Konsistenz, Kontrast und Hierarchie nachweislich die **kognitive Verarbeitung** und Orientierung der Nutzer:innen erleichtern (Ware, 2013[^6]; Lidwell et al., 2010[^3]).
    - Kenntnisse in **Content Usability** sind hochgradig praxisrelevant, da verständliche und gut strukturierte Inhalte nachweislich die Informationsaufnahme und Entscheidungsfindung unterstützen und gleichzeitig die Verweildauer und Zufriedenheit der Nutzer:innen erhöhen (Nielsen, 2000)[^4].
    - Ein Verständnis von **Wahrnehmungsprozessen** wie Aufmerksamkeit und Arbeitsgedächtnis ist wichtig, da Software-Interfaces, die diese berücksichtigen, Überlastung vermeiden und die kognitive Effizienz steigern (Baddeley, 1992[^1]; Wickens et al., 2015[^8]).
    - In der Softwareentwicklungspraxis führen die Integration von **Design- und Wahrnehmungsprinzipien** zu höherer Produktivität, geringeren Fehlerquoten und größerer Nutzerzufriedenheit, was nicht nur die Akzeptanz, sondern auch die Marktchancen von Softwareprodukten erhöht (ISO 9241-210, 2019)[^2].
<!--
        !!! refs "Quellenverzeichnis"
            1. Baddeley, A. D. (1992). Working Memory. Science, 255(5044), 556–559.
            2. ISO 9241-210 (2019). Ergonomics of human-system interaction – Part 210: Human-centred design for interactive systems. International Organization for Standardization.
            3. Lidwell, W., Holden, K., & Butler, J. (2010). Universal Principles of Design (2nd ed.). Rockport.
            4. Nielsen, J. (2000). Designing Web Usability: The Practice of Simplicity. New Riders.
            5. Norman, D. A. (2013). The Design of Everyday Things (Revised and Expanded Edition). Basic Books.
            6. Ware, C. (2013). Information Visualization: Perception for Design (3rd ed.). Morgan Kaufmann.
            7. Wertheimer, M. (1923). Untersuchungen zur Lehre von der Gestalt II. Psychologische Forschung, 4, 301–350.
            8. Wickens, C. D., Hollands, J. G., Banbury, S., & Parasuraman, R. (2015). Engineering Psychology and Human Performance (4th ed.). Psychology Press.
-->
    
[^1]: Baddeley, A. D. (1992). Working Memory. Science, 255(5044), 556–559.
[^2]: ISO 9241-210 (2019). Ergonomics of human-system interaction – Part 210: Human-centred design for interactive systems. International Organization for Standardization.
[^3]: Lidwell, W., Holden, K., & Butler, J. (2010). Universal Principles of Design (2nd ed.). Rockport.
[^4]: Nielsen, J. (2000). Designing Web Usability: The Practice of Simplicity. New Riders.
[^5]: Norman, D. A. (2013). The Design of Everyday Things (Revised and Expanded Edition). Basic Books.
[^6]: Ware, C. (2013). Information Visualization: Perception for Design (3rd ed.). Morgan Kaufmann.
[^7]: Wertheimer, M. (1923). Untersuchungen zur Lehre von der Gestalt II. Psychologische Forschung, 4, 301–350.
[^8]: Wickens, C. D., Hollands, J. G., Banbury, S., & Parasuraman, R. (2015). Engineering Psychology and Human Performance (4th ed.). Psychology Press.


## Inhalte

- :material-file-pdf-box: [Einführung](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/6_visual_design/01_intro.pdf?ref_type=heads&inline=true)
- :material-file-pdf-box: [(engl.) Der Aesthetics Usability Effect](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/6_visual_design/02_aesthetics_effect.pdf?ref_type=heads&inline=true)
- :material-file-pdf-box: [(engl.) UI vs. UX: User Interface und User Experience](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/6_visual_design/03_ui_ux.pdf?ref_type=heads&inline=true)
- :material-file-pdf-box: [(engl.) Principles of Intuitive User Interfaces](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/6_visual_design/04_intuitive_uis.pdf?ref_type=heads&inline=true)
- :material-file-pdf-box: [(engl.) Content Comprehension](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/6_visual_design/05_comprehension.pdf?ref_type=heads&inline=true)
- :material-file-pdf-box: [(engl.) Content Usability](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/6_visual_design/06_usability.pdf?ref_type=heads&inline=true)
- :material-file-pdf-box: [(engl./dt.) Icon Design](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/6_visual_design/08_icons.pdf?ref_type=heads&inline=true)

## Ergänzende Materialien

- :material-video: [Ein sehr schönes "pecha-kucha"-Video zu emotional intelligenter Kommunikation bei Design von Schildern](https://youtu.be/x7HMR0t7Qfw?si=CGMkZHsSPdgZRvMy). Viele der dort gezeigten Dinge lassen sich auch auf das Design von Benutzungsschnittstellen übertragen.
- :material-web: [7 Rules for Creating Gorgeous UI – Part 1](https://www.learnui.design/blog/7-rules-for-creating-gorgeous-ui-part-1.html)
- :material-web: [7 Rules for Creating Gorgeous UI – Part 2](https://www.learnui.design/blog/7-rules-for-creating-gorgeous-ui-part-2.html)
- :material-file-pdf-box: [Pixel Perfect Precision Handbook (mit vielen guten und schlechten Design-Beispielen) Datei ](https://lernen.h-da.de/mod/resource/view.php?id=236893)
- [Sehr schöner Artikel über häufige UI-Design-Fehler in mobilen Applikationen und deren Behebung](https://lernen.h-da.de/mod/url/view.php?id=775441)

## Übungsaufgaben

- :material-file-pdf-box: [Fallstudien](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/6_visual_design/07_case_studies.pdf?ref_type=heads&inline=true)
- :material-file-pdf-box: [UI-Dialog-Design](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/6_visual_design/09_task.pdf?ref_type=heads&inline=true)

## Lernzielkontrolle

!!! question "Fragen zur Reflexion des Lernstoffes"
    - **Verständnisfragen**
        1. Legen Sie kurz dar, warum die weitläufige Annahme, “InformatikerInnen seien keine guten IU/Content Designer” falsch ist
        2. Erläutern Sie, warum das Konzept der Affordance im Rahmen der User Experience eine wichtige Rolle spielt; gehen Sie hierbei auch auf potentielle Gefahren/Probleme ein.
        3. Erläutern Sie den Zusammenhang zwischen Skeuomorphic Design und Affordance 
        4. Stellen Sie anhand eines selbstgewählten Beispiels dar, warum UX und Visual Design zusammenhängen bzw. nicht separat voneinander betrachtet werden sollten; legen Sie insbesondere die Gründe hierfür dar.
        5. Welche Besonderheiten existieren in der Wahrnehmung und Verarbeitung von Online-Inhalten? Nennen Sie geeignete Maßnahmen zur Erhöhung der Effektivität und Effizienz.
        6. Erläutern Sie kurz die Rolle des “natural mapping” im Bereich der Affordance.
        7. Welchen grundsätzlichen Ansatz sollten Sie bei der Wahl potentieller UI-Elemente in Betracht ziehen? <!-- a) Auswahl der Elemente anhand dessen, was sie kommunizieren und was ihr Beitrag zur Zielerfüllung ist; b) hinterfragen, was ist das zugrunde liegende Kommunikations- / Entscheidungsmodell -->
    ---
    - **Anwendungsfragen**
        1. Im Rahmen der Neuentwicklung eines Web-basierten Tabellenkalkulationsprogramm erhalten Sie von ihrer Vorgesetzten den Auftrag, sich bzgl. des Designs an etablierten Tools zu orientieren. Wie beurteilen Sie diese Anweisung? Halten Sie dies für gut bzw. sinnvoll? Bitte begründen Sie Ihre Antwort.
        2. Stellen Sie dar, wie sie die Informationsverarbeitung von Onlineinhalten unterstützen können; 
    ---
    - **Reflexionsfragen**
        1. Erläutern Sie kurz, warum dem Design des visuellen Erscheinungsbildes einer Software dieselbe Aufmerksamkeit zuteil werden sollte, wie einem korrekten Softwareentwurf. Welches Problem kann hierbei jedoch auftreten? <!-- a) Visual Design beeinflusst die individuelle Wahrnehmung der Qualität eines Produktes b) Schlechtes Design führt zu einer subjektiv geringeren Beurteilung der Produktqualität c) Users are more tolerated towards minor usability flaws (see Aesthetics Usability Effect) -->
        2. Nehmen Sie Stellung zu folgenden Thesen: 
            1. _"Skeuomorphic Design und Affordance sind zwei völlig unterschiedliche und voneinander unabhängige Konzepte."_
            2. _"Bei der Gestaltung von Benutzungsoberflächen steht die Konzeption des visuellen Erscheinungsbildes (Farben / Schriften / Abstände / Layout ) an erster Stelle."_
            3. _"Für eine erfolgreiche Adaption bestehender Benutzungs- und Interaktionskonzepte muss dem Aspekt der External Consistency die größte Aufmerksamkeit zuteilwerden."_



---

## Quellenangaben

- Baddeley, A. D. (1992). Working Memory. Science, 255(5044), 556–559.
- ISO 9241-210 (2019). Ergonomics of human-system interaction – Part 210: Human-centred design for interactive systems. International Organization for Standardization.
- Lidwell, W., Holden, K., & Butler, J. (2010). Universal Principles of Design (2nd ed.). Rockport.
- Nielsen, J. (2000). Designing Web Usability: The Practice of Simplicity. New Riders.
- Norman, D. A. (2013). The Design of Everyday Things (Revised and Expanded Edition). Basic Books.
- Ware, C. (2013). Information Visualization: Perception for Design (3rd ed.). Morgan Kaufmann.
- Wertheimer, M. (1923). Untersuchungen zur Lehre von der Gestalt II. Psychologische Forschung, 4, 301–350.
- Wickens, C. D., Hollands, J. G., Banbury, S., & Parasuraman, R. (2015). Engineering Psychology and Human Performance (4th ed.). Psychology Press.

<!--
Prompt:
Bitte erstelle mit eine Auflistung mit je einem Satz pro Punkt, warum es für Informatikstudierende wichtig ist, Kenntnisse zu Visual Design, den Grundlagen von intuitiven Nutzungsschnittstellen bzw. User Interaces, Content Usability usw. zu haben. Gehe hierbei bitte auch auf die Relevanz von gestaltungs- und wahrnehmungspsychologischen Aspekten ein. Benutze für die Formulierung einen wissenschaftlichen, faktenstarken Stil und gebe auch vollständige Quellen an. Berücksichtige bitte auch einen hohen Praxisbezug.
-->

<!--
Prompt:
Bitte erstelle mir ein paar Fragen zur Lernzielkontrolle für Informatikstudierende im Bachelor 4. Semester zum Thema Prototyping im Kontext von User-centered Design. Gehe bitte auch auf das Paper Prototyping und User Tests ein.
-->