# Entwurf

!!! success "Lernziele"
    - [x] Sie können eine Benutzungsschnittstelle mit geeigneten Diagrammen beschreiben
    - [x] Sie können Papier-Prototypen erstellen
    - [x] Sie können die UI Prototypen testen und Verbesserungen identifizieren
    - [x] Sie verstehen das Vorgehensmodell zum Entwurf einer Benutzungsschnittstelle im Kontext von OOAD/SWE



## Aufgaben

### UI Entwurf (Paper Prototyping)

<!--
!!! warning
    **Corona-Update**:  
    Anstelle eines Paper-Prototypen können Sie auch Mock-ups oder eine Wireframe-basierte Konzeption der Oberflächen Ihrer Applikation erstellen (_mit allen Nachteilen gegenüber einer Paper-Prototyp-basierten Lösung_). 
-->

1. Entwerfen Sie auf Basis der Erkenntnisse aus dem User Research die :fontawesome-solid-mobile-screen-button: **Benutzungsoberfläche** der mobilen Applikationen als **low-fidelty Prototyp** zum Testen der Benutzungskonzepte und zum Finden von Entwurfsalternativen. Setzen Sie hierfür bevorzugt auf :fontawesome-regular-paper-plane: **Paper-Prototyping**. 
2. Alternativ können Sie ein interaktives (low-fidelity-) prototyping Tool ihrer Wahl einsetzen. 

    !!! info "Hinweise"
          - Achten Sie auf Vollständigkeit der benötigten Bedienelemente. 
          - Berücksichtigen Sie Platzierung, Größe, Anordnung, Beschriftung. 
          - Skizzieren Sie von **Icons** die Rohform so, dass man deren bildlich-inhaltliche Aussage versteht.
          - Nutzen Sie **abstrakte Screen-Diagramme** um **Entwurfsalternativen** zu erkennen. Wählen Sie die **beste Entwurfsalternative** aus und verfolgen Sie diese in Form konkreter Screen-Diagramme weiter.

3. Dokumentieren Sie die Entwürfe und Entwurfsentscheidungen ausführlich in der Projektmappe.
<!-- in Form von konkreten Screen-Diagrammen als **Papier-Prototypen** (*bitte groß und gut erkennbar!*).  -->


### Analyseklasse
1. Entwerfen Sie parallel zu Ihrem Paper Prototypen eine **Analyseklasse**, in die Sie die Hauptfunktionen der Benutzungsoberfläche als Methoden eintragen.
2. Nutzen Sie die Analyseklasse um auf **Vollständigkeit** hinsichtlich der verwendeten **UI-Elemente**, als auch auf Vollständigkeit hinsichtlich der eingetragenen **Methoden** zu prüfen.

    !!! info "Hinweis"
        Auch wenn **Membervariablen** per Default nicht eingetragen werden müssen, so sollten Sie dies tun und diese dann als Grundlage für den Entwurf des **Datenmodells** hernehmen.

### Navigationsübersicht
3. Zeichnen Sie die **abstrakte Navigationsübersicht** zu Ihrem Entwurf inkl. aller **Aktionen**, die einen Übergang von einem Screen zu einem Anderen initieren. Denken Sie auch an **Bedingungen**, die für einen Screenwechsel erfüllt sein müssen bzw. an deren Evaluierung die Ausführung einer Aktion gekoppelt ist.

    !!! info "Hinweis"
        Eine Navigationsübersicht hat Screens als Knoten, nicht Bedienelemente! (~> beliebtes Missverständnis)


### Testen

<!--
!!! warning
    **Corona-Update**:  
    Bitten Sie ein Familienmitglied oder eine andere externe Person die konzipierten Oberflächen aus Sicht des Stereotypen zu begutachten. Spielen Sie einige typische Anwendungsfälle mit Ihrem Stereotypen durch und beobachten Sie sehr genau, wie sie/er mit den Oberflächen interagiert.
-->

1. Entwickeln Sie eine Reihe von **repräsentativen Testfällen**, um eine erste Validierung der in ihrem Prototypen umgesetzten Entwurfsentscheidungen vornehmen zu können. So finden Sie heraus, ob das von Ihnen entwickelte Benutzungskonzept für ihre Stereotypen intuitiv nutzbar ist.

2. **Testen** Sie Ihre Entwürfe mit Ihren Steretypen (bspw. verkörpert durch Ihre Peer-Gruppe oder Freunde/Verwandte/etc.) und identifizieren Sie Ungereimtheiten und/oder Inkonsistenzen und Verbesserungen. Überlegen Sie, ob es gut und richtig ist, wenn Sie keine Verbesserungen identifizieren.

    !!! warning "Wichtiges zur Durchführung der Tests"
        Die Entwürfe sind aus **Sicht der/des :fontawesome-solid-user-doctor: Stereotypen** sowie seiner/ihrer spezifischen Anforderungen zu testen!

        1. Überlegen Sie im Vorfeld, wie Sie Ihre Entwürfe sinnvoll testen (--> *funktionsorientiert vs. anwendungsfallorientiert*) 
        2. Entwickeln Sie eine Handvoll **repräsentativer Anwendungsfälle**, die Ihre Stereotypen durchspielen sollen.
        3. Geben Sie in :fontawesome-regular-thumbs-down: **KEINEM FALL HINWEISE** oder Tipps, dies **verfälscht** Ihre Tests enorm. ==:fontawesome-solid-triangle-exclamation: Wir wollen herausfinden, ob die getroffenen Designentscheidungen den mentalen Modellen des/der Stereotypen entsprechen und ob die UI für diese/n intuitiv benutzbar ist.==
        <!-- 4. Den Test können Sie auch zu Beginn der nächsten Einheit durchführen. -->


## Ergebnisse

Ihre Praktikumsmappe muss folgende ausgearbeitete Artefakte enthalten: 

!!! success "Ergebnisse"
    - [x] Paper Prototypen ihrer Applikation mit begründeten Entwurfsentscheidungen
    - [x] Analyseklasse(n)
    - [x] Navigationsübersicht
    - [x] Beschreibung der Testfälle
    - [x] Zusammenfassung der wesentlichen Erkenntnisse und Anpassungen (_~> Reflexion des User Tests_)
    