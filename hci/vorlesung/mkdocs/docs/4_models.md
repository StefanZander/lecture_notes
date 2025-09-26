# Modellbildung

!!! abstract "In diesem Kapitel geht es um folgende Themen:"
    - Visualisierung von **Navigationswegen** innerhalb einer App mittels Navigationsübersicht
    - Modelle als Form der **Visualisierung** der mentalen Modelle von Benutzer:innen
    - Schwierigkeiten beim Übergang der verschiedenen UCD-Entwicklungsphasen und der Modelltypen
    - Unterschied zwischen **mentalen**-, **augenscheinlichen**- und **Implementierungsmodellen**
    - Abstrakte und konkrete **Screendiagramme**
    - Einsatz von **Analyseklassen** als Hilfsmittel für abstrakte Screendiagramme

!!! success "Voraussetzungen"
    - Grundzüge der Objekt-Orientierung und Kenntnisse der verschiedenen UML-Diagrammtypen
    - OOAD

!!! warning "Warum das Kapitel wichtig ist"
    - Die Modellbildung der App ist wichtige Voraussetzung für die spätere Implementierung
    - Die modellhafte Darstellung von **Navigationspfaden** und **Navigationsstrukturen** hilft dabei, den **logischen Aufbau** der App sowie der verschiedenen Funktionen auch für nicht-technik-affine Menschen (aka Endnutzende) greifbar zu machen
    - Die Modellbildung ist ein Werkzeug um die Erkenntnisse aus dem User Research bildhaft darzustellen und diesen eine **Gestalt** zu geben
    - Modelle sind ein **wirkungsvolles Kommunikationstool** und schaffen die Voraussetzung für ein **gemeinsames Verständnis** hinsichtlich Aufbau, Struktur und Nutzbarkeit einer Software
    - Die hier vorgestellten Modelltypen schaffen den Übergang von mentalen Modellen (aus dem User Research) hin zu Implementierungsmodellen


## Inhalte
1. :material-file-pdf-box: [Visualisierungsmodelle]()


## Aufgaben
1. Zeichnen Sie ein vollständiges **abstraktes Navigationsübersichtsdiagramm** für eine Internet Radio Applikation. Berücksichtigen Sie dabei die folgenden Aspekte:
    - Nach dem Starten erscheint sofort der Hauptscreen der Anwendung; dort können Radiosender aus der Senderliste ausgewählt werden (sofern vorhanden).
    - Sind keine Sender vorhanden, kann diese über die Aktion “Senderliste abfragen” auf einem sepa- raten Screen abgerufen werden.
    - Die Applikation erlaubt auch das Anlegen einer Favoritenliste. Auf der Favoritenseite können Ra- diostationen beliebig sortiert werden.
    - Die Applikation soll von jedem Screen aus beendet werden können.

    Hinweise:

    - Treffen Sie eigene Annahmen für die Benennung der einzelnen Screens
    - Ergänzen Sie das Diagramm sinnvoll an geeigneten Stellen


## Lernzielkontrolle
!!! question "Fragen zur Reflexion des Lernstoffes"
    - **Verständnisfragen**
        1. Erklären sie in kurzen Sätzen Rolle und Zweck von Analyseklassen im Rahmen eines User-zentrierten Softwareentwurfs / des Oberflächenentwurfs. Warum sollten diese verwendet werden.
        2. Erläutern Sie kurz die grundlegende Problematik beim Screendesign; warum sollten immer mehrere Entwurfsalternativen betrachtet werden?
        3. Erläutern Sie kurz die grundlegende Problematik bei der Ableitung von Screendiagrammen aus den anderen Modelltypen.
    
    - **Thesen**
  
        Nehmen Sie Stellung zu den folgenden Thesen; erläutern Sie, warum Sie diese unterstützen oder ablehnen.
        
        1. _Beim Einsatz eines eigenen Design Teams im Entwicklungsprozess kann auf Analyseklassen idR verzichtet werden._
        2. _Selbst wenn Design und Entwicklung von Softwarekomponenten auf unterschiedliche Teams aufgeteilt werden ist der Einsatz von Analyseklassen im Rahmen des UI-Entwurfs sinnvoll_
        3. _Der Einsatz von Analyseklassen sollte eng an die Implementierungsphasen gekoppelt sein._