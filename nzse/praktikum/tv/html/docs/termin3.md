# Implementierung der Benutzungsoberfläche


!!! abstract 
    **Lernziele**

    - [x] Sie können eine Android App mit einer Layoutvariante implementieren
    - [x] Sie verstehen das Zusammenspiel verschiedener Activities über Intents
    - [x] Sie verstehen das Konzept der Ereignisorientierung
    - [x] Sie haben einen ersten Eindruck von XML

## Aufgaben

### Layouts und Navigation

Legen Sie das Praktikumsprojekt an und generieren Sie alle Activities (oder [Fragmente](https://developer.android.com/guide/components/fragments), falls Sie eine `BottomNavigationBar` o.Ä. zur Navigation einsetzen möchten) der Anwendung

1. Implementieren Sie die zugehörigen **Layouts** in der **Design-Ansicht** von Android Studio; bestücken Sie die
Layouts mit den benötigten Views und Widgets. 
2. Testen Sie das Layout für unterschiedliche **Displaygrößen** und **Displayauflösungen** und passen Sie es ggf. an.
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

!!! note 
    __IP-Adresse des TV-Servers beim Aufruf aus dem Emulator__:  
    Verwenden Sie die IP-Adresse `10.0.2.2` bei der Instanziierung der `HTTPRequest`-Klasse, um auf den TV-Server aus dem Emulator heraus zuzugreifen.

!!! note
    __Fehlermeldung 'Cleartext HTTP traffic not permitted' (Android 9 / API Level 28 und höher)__  
    Seit Android 9 (API Level 28) unterbindet das Android Sicherheitsmodell standardmäßig den Austausch von Klartextnachrichten über unverschlüsselte HTTP-Verbindungen.

    Um trotzdem mit dem TV- bzw. Twitch-Server zu kommunizieren gibt es folgende Möglichkeiten:

    1. Auswahl eines API Levels < 28
    2. Hinzufügen von `android:usesCleartextTraffic="true"` im `AndroidManifest.xml`
    3. Implementierung einer der Möglichkeiten in Quelle #1

    Quellen: [Quelle 1](https://stackoverflow.com/questions/45940861/android-8-cleartext-http-traffic-not-permitted), [Quelle 2](https://developer.android.com/training/articles/security-config#CleartextTrafficPermitted)


### Twitch Stream-Server

Informationen zur Kommunikation mit dem Twitch Stream-Server finden Sie auf den offiziellen Projektseiten:  
<https://stream-server.h-da.io/>


### Lebensmittelinformations-App

Nähere Informationen zur Kommunikation mit der REST-API finden Sie auf der [Projektseite](openfoodfacts.md)


## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Testierung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Fertiges Layout für Hoch- und Querformat
    - [ ] Implementierung der Navigation und Darlegung des Navigationskonzepts
    - [ ] Einbinden der Kommunikationsklassen (`HttpRequest.java` beim TV-Server; `StreamServerClient.java` beim Twitch-Server)
    - [ ] Durchführen von ersten Aufrufen und Sichtung der erhaltenen JSON-Antworten