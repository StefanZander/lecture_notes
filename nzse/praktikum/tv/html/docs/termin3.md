# Entwurf

!!! abstract
    **Lernziele**

    - [x] Sie können eine Benutzungsschnittstelle mit geeigneten Diagrammen beschreiben
    - [x] Sie können Papier-Prototypen erstellen
    - [x] Sie können die UI Prototypen testen und Verbesserungen identifizieren
    - [x] Sie verstehen das Vorgehensmodell zum Entwurf einer Benutzungsschnittstelle im Kontext von OOAD/SWE

!!! warning
    **Hinweis:** Die Fernbedienung muss mindestens die im Kapitel Vorbemerkung aufgezählten Funktionen beinhalten.

## Aufgaben

### UI Entwurf (Paper Prototyping)
1. Entwerfen Sie die **Benutzungsoberfläche** der neuen Fernbedienung in Form von konkreten skizzierten Screen-Diagrammen als **Papier-Prototypen** (*bitte groß und gut erkennbar!*). 

    Hinweise:

    - Achten Sie auf Vollständigkeit der benötigten Bedienelemente. 
    - Berücksichtigen Sie Platzierung, Größe, Anordnung, Beschriftung. 
    - Skizzieren Sie von **Icons** die Rohform so, dass man deren bildlich-inhaltliche Aussage versteht.
    - Nutzen Sie **abstrakte Screen-Diagramme** um **Entwurfsalternativen** zu erkennen, die Sie wiederum konkret skizzieren. Wählen Sie die **beste Entwurfsalternative** aus und verfolgen Sie diese weiter.


### Analyseklasse
1. Entwerfen Sie parallel zu den abstrakten / konkreten Screen-Diagrammen **eine(!) Analyseklasse**, in die Sie die Hauptfunktionen der Benutzungsoberfläche als Methoden eintragen.
2. Nutzen Sie die Analyseklasse um auf **Vollständigkeit** hinsichtlich der verwendeten **UI-Elemente**, als auch auf Vollstädnigkeit hinsichtlich der eingetragenen **Methoden** zu prüfen.

    !!! note

        **Hinweis:** Auch wenn **Membervariablen** per Default nicht eingetragen werden müssen, so sollten Sie dies tun und diese dann als Grundlage für den Entwurf des **Datenmodells** hernehmen.

### Navigationsübersicht
1. Zeichnen Sie die **abstrakte Navigationsübersicht** zu Ihrem Entwurf inkl. aller **Aktionen**, die einen Übergang von einem Screen zu einem Anderen initieren. Denken Sie auch an **Bedingungen**, die für einen Screenwechsel erfüllt sein müssen bzw. an deren Evaluierung die Ausführung einer Aktion gekoppelt ist.

    !!! note
        **Wohlgemerkt:** Eine Navigationsübersicht hat Screens als Knoten, nicht Bedienelemente! (beliebtes Missverständnis)


### UI Test
Testen Sie Ihre Entwürfe mit Ihren Stakeholdern (Ihrer Peer-Gruppe) und identifizieren Sie Ungereimtheiten und/oder Inkonsistenzen und Verbesserungen. Überlegen Sie, ob es gut und richtig ist, wenn Sie keine Verbesserungen identifizieren. Gehen Sie nach folgendem Schema vor:

1. **Zur Vorbereitung**: Überlegenen Sie sich zu jeder im Abschnitt [Vorbemerkung](vorbemerkung.md) genannten Funktion des TVs einen kurzen **Use Case**, in dem die Funktion nachgefragt wird; nutzen Sie diesen Use Case um zu überprüfen, ob die Interaktionsmetaphern zum Ausführen des Use Case (Aufrufen der Funktion) intuitiv von den Testnutzern erkannt werden. Notieren Sie die Use Cases und nutzen Sie dies als **Leitfaden** für die Moderation des UI Tests.

1. Notieren Sie sich Auffälligkeiten / Ungereimtheiten / etc. zu jedem Use Case und leiten Sie daraus Verbesserungen für Ihre Entwürfe ab.


## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Testierung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Paper Prototype ihrer Applikation
    - [ ] Analyseklasse
    - [ ] Navigationsübersicht
    - [ ] Liste der Use Cases + Testprotokoll