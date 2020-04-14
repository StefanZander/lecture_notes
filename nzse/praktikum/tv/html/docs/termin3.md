# Entwurf

!!! abstract
    **Lernziele**

    - [x] Sie können eine Benutzungsschnittstelle mit geeigneten Diagrammen beschreiben
    - [x] Sie können Papier-Prototypen erstellen
    - [x] Sie können die UI Prototypen testen und Verbesserungen identifizieren
    - [x] Sie verstehen das Vorgehensmodell zum Entwurf einer Benutzungsschnittstelle im Kontext von OOAD/SWE

!!! warning
    **Hinweis:** Die Fernbedienungen müssen mindestens die folgenden Funktionen bieten: 
    <!-- (_siehe auch die im Kapitel [Vorbemerkung](vorbemerkung.md) aufgezählten Funktionen_).   -->

    **Fernbedienung für TV-Server**

    - Seitenverhältnis einstellen  
    - Sender auswählen
    - Zappen
    - Kanalsuchlauf
    - Favoriten anlegen und verwalten
    - Timeshift (zeitversetzte Wiedergabe aber keine allgemeinen Recorderfunktionen)
    - Lautstärkeregelung inkl. Mute
    - Picture in Picture


    **Twitch Stream-Server**

    - Picture in Picture
    - Favoriten anlegen und verwalten
    - Filterung der TopStreams nach min. _einer_ frei zu wählenden Eigenschaft (Sprache, Spiel, Kanal) ([--> Link](https://stream-server.h-da.io/reference/#twitchgettopstreams))
    - Gamessuche ([--> Link](https://stream-server.h-da.io/reference/#twitchsearchgames)) <!-- see http://criticmarkup.com/users-guide.php -->
    - Umschalten zwischen themenverwandten Streams
    - Auswahl eines Streams
    - Pausieren eines Streams


## Aufgaben

### UI Entwurf (Paper Prototyping)

!!! warning
    **Corona-Update**:  
    Anstelle eines Paper-Prototypen können Sie auch Mock-ups oder eine Wireframe-basierte Konzeption der Oberflächen Ihrer Applikation erstellen (_mit allen Nachteilen gegenüber einer Paper-Prototyp-basierten Lösung_). 

1. Entwerfen Sie die **Benutzungsoberfläche** der mobilen Applikationen in Form von konkreten Screen-Diagrammen als **Papier-Prototypen** (*bitte groß und gut erkennbar!*). 

    Hinweise:

    - Achten Sie auf Vollständigkeit der benötigten Bedienelemente. 
    - Berücksichtigen Sie Platzierung, Größe, Anordnung, Beschriftung. 
    - Skizzieren Sie von **Icons** die Rohform so, dass man deren bildlich-inhaltliche Aussage versteht.
    - Nutzen Sie **abstrakte Screen-Diagramme** um **Entwurfsalternativen** zu erkennen. Wählen Sie die **beste Entwurfsalternative** aus und verfolgen Sie diese weiter.


### Analyseklasse
1. Entwerfen Sie parallel zu Ihrem Paper Prototypen eine **Analyseklasse**, in die Sie die Hauptfunktionen der Benutzungsoberfläche als Methoden eintragen.
2. Nutzen Sie die Analyseklasse um auf **Vollständigkeit** hinsichtlich der verwendeten **UI-Elemente**, als auch auf Vollständigkeit hinsichtlich der eingetragenen **Methoden** zu prüfen.

    !!! note
        **Hinweis:**  
        Auch wenn **Membervariablen** per Default nicht eingetragen werden müssen, so sollten Sie dies tun und diese dann als Grundlage für den Entwurf des **Datenmodells** hernehmen.

<!-- ### Navigationsübersicht (_entfällt!_)
1. Zeichnen Sie die **abstrakte Navigationsübersicht** zu Ihrem Entwurf inkl. aller **Aktionen**, die einen Übergang von einem Screen zu einem Anderen initieren. Denken Sie auch an **Bedingungen**, die für einen Screenwechsel erfüllt sein müssen bzw. an deren Evaluierung die Ausführung einer Aktion gekoppelt ist.

    !!! note
        **Wohlgemerkt:** Eine Navigationsübersicht hat Screens als Knoten, nicht Bedienelemente! (beliebtes Missverständnis) -->


### Testen

!!! warning
    **Corona-Update**:  
    Bitten Sie ein Familienmitglied oder eine andere externe Person die konzipierten Oberflächen aus Sicht des Stereotypen zu begutachten. Spielen Sie einige typische Anwendungsfälle mit Ihrem Stereotypen durch und beobachten Sie sehr genau, wie sie/er mit den Oberflächen interagiert.

1. Testen Sie Ihre Entwürfe mit Ihrer Peer-Gruppe und identifizieren Sie Ungereimtheiten und/oder Inkonsistenzen und Verbesserungen. Überlegen Sie, ob es gut und richtig ist, wenn Sie keine Verbesserungen identifizieren.

    !!! note
        **Wichtig**:  
        Die Peer-Gruppe testet Ihren Entwurf aus **Sicht des Stereotypen** sowie seiner/ihrer spezifischen Anforderungen!

        1. Überlegen Sie im Vorfeld, wie Sie Ihre Entwürfe sinnvoll testen (--> *Funktion vs. Use Case*); 
        2. Entwickeln Sie **4-5 repräsentative Anwendungsfälle**, die Ihre Peer-Gruppe (in der Rolle des Stereotypen) durchspielen soll.
        3. Geben Sie **IN KEINEM FALL HINWEISE** oder Tipps, dies **verfälscht** Ihre Tests enorm. Wir wollen herausfinden, ob die getroffenen Designentscheidungen den mentalen Modellen des Stereotyps entsprechen und ob die UI intuitiv benutzbar ist. 
        4. Den Test können Sie auch zu Beginn der nächsten Einheit durchführen.


## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Testierung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Paper Prototypes ihrer Applikation (oder Mock-Ups)
    - [ ] Analyseklasse
    - [ ] Kurze Zusammenfassung der wesentlichen Anpassungen (Reflexion des User Tests)
    <!-- - [ ] Navigationsübersicht -->