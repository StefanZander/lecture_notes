# Implementierung der Benutzungsoberfläche


!!! abstract 
    **Lernziele**

    - [x] Sie können eine Android App mit einer Layoutvariante implementieren
    - [x] Sie verstehen das Zusammenspiel verschiedener Activities über Intents
    - [x] Sie verstehen das Konzept der Ereignisorientierung
    - [x] Sie haben einen ersten Eindruck von XML

## Aufgaben

### Layouts und Navigation

Legen Sie das Fernbedienungs-Projekt an und generieren Sie alle Activities (oder Fragmente, falls Sie eine `BottomNavigationBar` zur Navigation einsetzen möchten) der Anwendung

1. Implementieren Sie die zugehörigen **Layouts** in der **Design-Ansicht** von Android Studio; bestücken Sie die
Layouts mit den benötigten Views und Widgets. Testen Sie das Layout für unterschiedliche **Displaygrößen** und **Displayauflösungen** und passen Sie es ggf. an.
2. Schalten Sie um in die Text-Ansicht der Layouts, versuchen Sie das generierte **XML** zu verstehen und räumen Sie in der Text-Ansicht ggf. etwas auf
3. Verknüpfen Sie die Activities (oder Fragmente) indem Sie die **Navigation** (d.h. die Umschaltung zwischen Screens) implementieren
4. **Optimieren** Sie ihren Entwurf hinsichtlich **Größe**, **Platzierung** und **Beschriftung** der Views und Widgets


### TV-Server

Der "Fernseher" wird über das **HTTP-Protokoll** gesteuert, über das man normalerweise Webseiten aufruft (näheres dazu in „Entwicklung webbasierter Anwendungen“ im 4. Semester). Die Fernbedienung ist der Client (Browser) und der Fernseher ist der Server. 

Sie können den "Fernseher" provisorisch steuern:

1. Starten Sie den „Fernseher“ durch Doppelklick auf die gegebene Datei `TV.jar`
2. Notieren Sie die angezeigte IP-Adresse
3. Laden Sie die gegebene Datei `TestTVInterface.htm` herunter und rufen Sie sie lokal im Browser auf
4. Machen Sie sich mit dem Befehlssatz vertraut
5. Schauen Sie sich die Antwort auf den Befehl `scanChannels` genau an (ist JSON Format, wird noch erklärt)


### Kommunikation mit dem TV-Server

Wenn Sie später die Fernbedienung auf dem Smartphone oder im Emulator testen wollen, müssen Sie dort die IP-Adresse verwenden, die der Fernseher beim Start anzeigt (`127.0.0.1` ist der `localhost` und funktioniert nur, wenn Client und Server auf demselben PC laufen).

Das HTTP-Protokoll brauchen Sie für dieses Praktikum nicht weiter zu verstehen:

1. Binden Sie die gegebene Klasse `HttpRequest.java` in Ihr Projekt ein (passen Sie ggf. das package an)
2. Lesen und verstehen Sie die Dokumentation zur Klasse und ihren Methoden im Quellcode (Javadoc-Stil)
3. Steuern Sie den „Fernseher“ durch Aufruf der Methode `HttpRequest.execute` mit geeigneten Parametern

## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Testierung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Fertiges Layout
    - [ ] Implementierung der Navigation
    - [ ] Einbinden der `HttpRequest.java` Klasse