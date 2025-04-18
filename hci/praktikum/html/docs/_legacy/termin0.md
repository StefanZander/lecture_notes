# Kennen lernen von Flutter (--> zu Hause)


!!! success "Lernziele"
    - [x] Sie können einfache Android Projekte mit Android Studio anlegen
    - [x] Sie verstehen die Grundstruktur einer Android App
    - [x] Sie kennen den Lebenszyklus von Activities
    - [x] Sie kennen die wichtigsten Hilfsmittel in Android Studio
    - [x] Sie verstehen die Konzepte "Datenmodell" und "Persistenz" im Kontext einer Android-Anwendung

!!! info "Debugging am eigenen Gerät"
    Wenn Sie zum Testen und Debuggen Ihr eigenes Handy verwenden wollen, bringen Sie bitte ein passendes USB-Kabel mit. Im Normalfall ist das Kabel des Ladegeräts dazu geeignet. Verbinden Sie das Handy via USB-Kabel mit dem Entwicklungs-PC (Ihr Notebook oder der Labor-PC), schalten Sie das Handy ein, aktivieren Sie Entwickleroptionen und darin USB-Debugging.

!!! info "Konfiguration der Entwicklungsumgebung"
    Vermutlich werden Sie Android Studio und den Emulator auf Ihrem eigenen Laptop installieren; Infos hierzu finden Sie unter 

    - <http://developer.android.com/sdk/index.html>
    - <http://developer.android.com/sdk/installing/adding-packages.html>

    Konfigurieren Sie den Emulator hinsichtlich der Displaygröße eher zurückhaltend – er ist (noch immer) ein Ressourcenfresser!

## Aufgaben

### Generieren einer Applikation
Legen Sie ein neues Projekt an mit einer `Empty Activity` (d.h. abgeleitet von `AppCompatActivity`). Eine Hilfe zum Einstieg finden Sie im Skript in der Datei `NZSE_4_AndroidStudio.pdf` im Moodle-Kurs zur LVA. Machen Sie sich mit den verschiedenen Ansichten von Android Studio vertraut.

### Übersetzen und Testen
* Menü `Build` --> `Make Project` 
* Menü `Run` --> `Run app`

Eventuelle Fehlermeldungen finden Sie im Fenster `0: Messages`, Laufzeitfehler und Log im Fenster `6: Android`

### Erforschen Sie das Hilfesystem
* Hilfe zur Entwicklungsumgebung Hilfe zur API --> `F1`
* Hilfe zur API --> rechter Mausklick auf Klassen- oder Methodenname --> `Search with Google`

### Debuggen
Setzen Sie ein paar **Haltepunkte** (Mausklick auf linken Rand im Java Editor). Menü `Run` --> `Debug app`. Lassen Sie das Programm von Haltepunkt zu Haltepunkt laufen; nutzen Sie auch den Einzelschrittmodus. Schauen Sie in Variable hinein.

### Java verstehen
Schauen Sie sich den **generierten Java-Code** genau an und kommentieren Sie jede halbwegs interessante Zeile. Schauen Sie sich die im Quellcode **referenzierten Ressourcen** im XML-Editor an.

Was hat es mit der Klasse `R` auf sich? Suchen Sie die Datei `R.java` im Windows Explorer / Finder / etc.

### Lebenszyklus der Activity
Fügen Sie einen parameterlosen Konstruktor zur Activity hinzu. Überschreiben Sie die Methoden `onPause`, `onStop`, `onResume` und `onSaveInstanceState`: rechter Mausklick im Quellcode der Activity --> `Generate` --> `Override Methods` --> `...`

Fügen Sie in jeder dieser Methoden und in `onCreate` eine Testausgabe ein:

``` java
Log.i ("AppName", "MethodenName");
```

Spielen Sie folgende Testfälle durch und beobachten Sie dabei die Testausgaben im Fenster `6: Android` (Sie können die Testausgaben filtern mit `Log Level = Info` und Ihrem AppName):

* App aufrufen
* Home Screen aufrufen
* App aufrufen
* App beenden mittels Zurück-Button
* App aufrufen
* Handy drehen (Hochformat / Querformat; im Emulator mit `Ctrl`+`F11` simulieren)

Untersuchen Sie mit dem Debugger und mit den Testausgaben folgende Fragen:

* Wann und in welcher Reihenfolge werden die Methoden aufgerufen?
* Wie lange lebt das Activity-Objekt?


### Ereignisbehandlung
Schreiben Sie eine Methode
``` java
public void onHelloWorldClick (View v)
```
mit einer `Log.i`-Testausgabe und ordnen Sie die Methode dem `onClick`-Ereignis der TextView `Hello World` zu. Testen Sie durch Antippen des Textes `Hello World`.



### Datenmodelle der Applikationen (optional)
Alle relevanten **Daten** und **Zustände** müssen in den mobilen Apps verwaltet werden; der Fernseher bzw. Stream-Server ist quasi ein _reines Darstellungsprogramm_. Überlegen Sie deshalb, welche Daten und Zustände innerhalb der Android-App **persistent gespeichert** werden sollen und welche nur **flüchtig**?

!!! note
    **Bedenken Sie:** 

    * Während einer Fernsehsendung oder dem Betrachten eines Streamingkanals macht man vielleicht noch andere Dinge mit dem Handy.
    * Eine andere Frage ist, welche Parameter beim Ausschalten des Fernsehers bzw. des Streaming-Servers in Grundstellung gehen sollen. 

Fassen Sie alle persistenten Daten in einer Klasse zusammen und zeichnen Sie das Klassendiagramm dieser persistenten Klasse (die Implementierung folgt in [Termin 4: Logik](termin4.md)).

!!! note
    __Tipp:__ für das Ergebnis des Kanalscans empfiehlt sich eine `:::js ArrayList<Channel>`.  
    {>>TODO: Tipp für Twitch-Streaming Server<<}



## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Testierung der Einheit vorliegen:

!!! success "Ergebnisse"
    - [ ] Verständnis, was es mit der Klasse `R.java` auf sich hat
    - [ ] Überschriebene Methoden `onPause`, `onStop`, `onResume`, `onCreate` und `onSaveInstanceState`
    - [ ] Dokumentierte Ausgabe der Testfälle
    - [ ] (*optional*) Klassendiagramm der zu persistierenden Daten