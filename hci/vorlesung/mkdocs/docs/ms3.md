# Meilenstein 2: UI-Entwurf

!!! success "Lernziele"
    - [x] Sie können eine Benutzungsschnittstelle mit geeigneten Diagrammen beschreiben
    - [x] Sie können Papier-Prototypen erstellen
    - [x] Sie können mittels Paper-Prototyping UI-Tests durchführen und Verbesserungen identifizieren
    - [x] Sie verstehen das Vorgehensmodell zum Entwurf von Benutzungsschnittstellen


## Vorbemerkung

Die Benutzungsoberfläche der mobilen Apps soll **intuitiv** und **komfortabel** sein und eine hohe **Usability** aufweisen. Sie soll sich an den  

- **spezifischen Bedürfnissen**, 
- **situativen Nutzungskontexten**, 
- **Erwartungen** und
- **Zielen**
    
der Benutzenden orientieren. Eine Bedienungsanleitung oder ein online Hilfesystem *MUSS* völlig überflüssig sein. Denken Sie hierbei an die Besonderheiten und spezifischen Bedürfnisse der verschiedenen Benutzendengruppen und versuchen Sie diese in einem **gemeinsamen UI-Design** abzubilden (--> vgl. die IKEA-Fallstudie). 

Konzentrieren Sie sich insbesondere auf die :fontawesome-solid-person-snowboarding: **Anwendungsfälle**, :material-office-building: **Nutzungskontexte**, :material-heart: **Bedürfnisse** und :material-target: **Ziele** der primären Personas bzw. der Stereotypen und _NICHT_ auf irgendwelche technischen Features – diese sind für die Erfüllung der Aufgabe zweitrangig (siehe auch die [Foliensätze zum User Research](2_user_research.md)).



## Aufgaben

### :material-crane: Vorbereitung

1. Tragen Sie die wichtigsten :material-brain: Erkenntnisse aus dem :material-heart-search: User Research zusammen, diskutieren und reflektieren Sie diese gemeinsam im Team. Notieren Sie diese in ihrer :material-folder-open: Projektmappe.
2. Überlegen Sie gemeinsam im Team, durch welche fachlichen :fontawesome-solid-gears: Funktionen und Features sich diese verkörpern lassen und dokumentieren Sie diese in der :material-folder-open: Projektmappe. Stellen sie die Features den Hypothesen gegenüber, d.h., notieren Sie, welche Funktionalität(en) und Eigenschaften sich aus den jeweiligen Hypothesen ableiten lassen. 
<!--
1. (neu) Gegenüberstellung der Hypothesen und der zu entwickelnden Funktionalitäten (siehe Beschreibung bei 2.)
-->


### :material-monitor-cellphone-star: Entwurf von Screen-Diagrammen

1. Entwerfen Sie die :fontawesome-solid-mobile-screen-button: Benutzungsoberfläche ihrer App in Form von konkreten skizzierten :material-draw: **Screen-Diagrammen** (_gerne auf Papier, bitte groß und gut erkennbar!_). <!-- Achten Sie auf **Vollständigkeit** der benötigten Bedienelemente. Berücksichtigen Sie Platzierung, Größe, Anordnung, Beschriftung. Skizzieren Sie von **Icons** die Rohform so, dass man deren bildlich-inhaltliche Aussage versteht. -->

    !!! info "Hinweise"
          - Achten Sie auf Vollständigkeit der benötigten Bedienelemente. 
          - Berücksichtigen Sie Platzierung, Größe, Anordnung, Beschriftung. 
          - Skizzieren Sie von **Icons** die Rohform so, dass man deren bildlich-inhaltliche Aussage versteht.
      <!--    - Nutzen Sie **abstrakte Screen-Diagramme** um **Entwurfsalternativen** zu erkennen. Wählen Sie die **beste Entwurfsalternative** aus und verfolgen Sie diese in Form konkreter Screen-Diagramme weiter. -->

2. Abstrahieren Sie die Skizzen zu :simple-uml: **abstrakten Screen-Diagrammen** aka Analyseklasse(n) (_siehe Folie "Varianten von Screendiagrammen" im [Foliensatz zu Kapitel 4: Modellbildung](./4_models.md)]_).  

    Nutzen Sie die abstrakten Screen-Diagramme um...

    - ...**Entwurfsalternativen** zu erkennen, die Sie wiederum konkret skizzieren. 
    - ...auf **Vollständigkeit** hinsichtlich der verwendeten UI-Elemente als auch der in die Analyseklassen eingetragenen Attribute und Methoden zu prüfen.  

    Übernehmen Sie die abstrakten Screen-Diagramme in ihre :material-folder-open: Projektmappe. 


3. Wählen Sie die :fontawesome-solid-trophy: **beste Entwurfsalternative** aus und verfolgen Sie diese weiter.



### :fontawesome-solid-diagram-project: Navigationsübersicht
1. Zeichnen Sie die **abstrakte Navigationsübersicht** zu Ihrem Entwurf inkl. aller **Aktionen**, die einen Übergang von einem Screen zu einem anderen Screen initieren. Denken Sie auch an **Bedingungen**, die für einen Screenwechsel erfüllt sein müssen bzw. an deren Evaluierung die Ausführung einer Aktion gekoppelt ist.

    !!! info "Hinweis"
        Eine Navigationsübersicht hat Screens als Knoten, nicht Bedienelemente! (=_beliebtes Missverständnis_)


### :fontawesome-regular-paper-plane: Prototyping

1. Entwickeln Sie auf Basis der ausgewählten Entwurfsalternative :fontawesome-regular-paper-plane: **Paper Prototypen** für _die Anwendungsfälle_, die Sie im UI-Test testen werden.
2. Dokumentieren Sie die Entwürfe und Entwurfsentscheidungen ausführlich in der :material-folder-open: Projektmappe. 

!!! info "Hinweis"
    Die Paper Prototypen müssen sie nur für _die_ Anwendungsfälle entwicklen, die sie im User-/UI-Test überprüfen. Es müssen _keine_ Paper Prototypen für die komplette App / die kompletten Screendiagramme angefertigt werden. 

### :material-flask: Testen

<!--
!!! warning
    **Corona-Update**:  
    Bitten Sie ein Familienmitglied oder eine andere externe Person die konzipierten Oberflächen aus Sicht des Stereotypen zu begutachten. Spielen Sie einige typische Anwendungsfälle mit Ihrem Stereotypen durch und beobachten Sie sehr genau, wie sie/er mit den Oberflächen interagiert.
-->

1. Entwickeln Sie eine Reihe von **repräsentativen :fontawesome-solid-user-doctor: Testfällen**, um eine erste Validierung der, in ihrem Prototypen umgesetzten Entwurfsentscheidungen vorzunehmen. So finden Sie heraus, ob das von Ihnen entwickelte Benutzungskonzept für ihre Stereotypen intuitiv nutzbar ist, d.h., ob es sich an deren mentalen Modellen orientiert.
   
    !!! tipp "Tipp"
        Beschreiben sie zu jedem Testfall das Ziel des Tests sowie das dahinterstehende Erkenntnisinteresse und gleichen sie dieses auch mit den Hypothesen aus dem User Research ab. Ein Testfall kann aus mehreren Schritten bestehen. 

2. **Testen** Sie Ihre Entwürfe mit Ihren Stereotypen (_bitte mit realen Personen_) und identifizieren Sie Ungereimtheiten, Inkonsistenzen und Verbesserungen. Überlegen Sie, ob es gut und richtig ist, wenn Sie **keine Verbesserungen** identifizieren. Gleichen sie auch hier ihre Beobachtungen mit den Zielen und dem Erkenntnisinteresse der Tests ab.

    !!! warning "Wichtiges zur Durchführung der Tests"
        Die Entwürfe sind aus **Sicht der/des :fontawesome-solid-user-doctor: Stereotypen** sowie seiner/ihrer spezifischen Anforderungen zu testen!

        1. Überlegen Sie im Vorfeld, wie Sie Ihre Entwürfe sinnvoll testen (--> *funktionsorientiert vs. anwendungsfallorientiert*) 
        2. Entwickeln Sie eine Handvoll **repräsentativer Anwendungsfälle**, die Ihre Stereotypen durchspielen sollen.
        3. Geben Sie in :fontawesome-regular-thumbs-down: **KEINEM FALL HINWEISE** oder Tipps, dies **verfälscht** Ihre Tests enorm. ==:fontawesome-solid-triangle-exclamation: Wir wollen herausfinden, ob die getroffenen Designentscheidungen den mentalen Modellen der Stereotypen entsprechen und ob das UI für diese intuitiv benutzbar ist.==



## Ergebnisse

Ihre Projektmappe muss folgende ausgearbeitete Artefakte enthalten: 

!!! success "Ergebnisse"
    - [x] User-Research Erkenntnisse und deren geplante Verkörperung in der App 
    - [x] Abstrakte und kontrete Screen Diagramme der App
    - [x] Navigationsübersicht
    - [x] Paper Prototypen ihrer Applikation mit begründeten Entwurfsentscheidungen
    - [x] Beschreibung der Testfälle und der Testdurchführung
    - [x] Zusammenfassung der wesentlichen Erkenntnisse und Anpassungen (_~> Reflexion des UI-Tests_)
    
