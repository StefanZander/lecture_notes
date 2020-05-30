# Vervollständigung der Implementierung


!!! abstract 
    **Lernziele**

    - [X] Sie verstehen die Architektur einer App mit Datenmodell und Zugriff auf einen Server
    - [X] Sie verstehen die Realisierung von Dateizugriff und Serialisierung in Java
    - [X] Sie verstehen den Sinn der Aufteilung in UI Thread und Worker Threads bei GUI Systemen
    - [X] Sie können mit JSON Objekten und Java Collections umgehen
    - [X] Sie verstehen den Lebenszyklus von Activities und die Problematik des Instance State

## Aufgaben

### Datenmodell

1. Implementieren und ggf. verfeinern Sie das in [Aufgabe 1](termin1.md) dargelegte **Datenmodell** und binden Sie es in die App ein
2. Machen Sie das Datenmodell **persistent**, indem Sie es in `:::js onPause()` jeder relevanten Activity serialisiert in einer Datei speichern und beim `:::js onCreate()` aus dieser Datei einlesen und deserialisieren
    
    !!! question
        **Frage:** Erzeugen Sie dabei ein neues Modell-Objekt oder füllen Sie lieber das alte mit neuen Inhalten? Müssen/dürfen Activities eigene Referenzen auf das Datenmodell halten?

### Benutzeroberfläche
1. Implementieren Sie Benutzerführung durch **Zeigen/Verbergen** bzw. **Aktivieren/Deaktivieren** von Views und Widgets
2. Geben Sie **(Fehler-)Meldungen** in geeigneter Form als `AlertDialog`, `Toast`, `Snackbar` oder via Log aus (was wofür?)
<!-- 3. Übernehmen Sie das Ergebnis des **Kanalscans** aus dem JSON-Ergebnis von `HttpRequest.execute` und speichern Sie es im **Datenmodell**. Binden Sie die betroffenen Views über Adapter an die Kanalliste an. -->
1. Machen Sie Ihre App "**drehbar**", d.h. sorgen Sie dafür, dass der Neustart der Activity beim Drehen des Smartphones (Hochformat/Querformat) keine sichtbaren Folgen hat. Implementieren Sie dazu ggf. die Methode `:::js onSaveInstanceState()` und werten Sie dann den Parameter von `:::js onCreate()` entsprechend aus.


### AsyncTask
Eigentlich sollten Zugriffe aufs Netzwerk nicht im UI Thread gemacht werden (warum?). 

1. Schreiben Sie daher eine Klasse `:::js HttpRequestAsync extends AsyncTask` und verlagern Sie die `HttpRequest`-Aufrufe in deren Methode `:::js doInBackground()`.


### Testen, Debuggen, komplett Fertigstellen
1. Vergewissern Sie sich, dass alle in [Termin #1](termin2.md) geplanten Use Cases und Anwendungsszenarien von Ihrer Anwendung tatsächlich unterstützt werden. Testen Sie auch das Verhalten bei Erstinbetriebnahme (d.h. der persistente Speicher ist leer: Einstellungen, existierende Daten etc). <!--: Einstellungen, Apps, Fernbedienung, Daten löschen) -->


### Videoaufzeichnung der App




## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Testierung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    1. [ ] Persistiertes Datenmodell
    2. [ ] Darlegung des fertigen Datenmodells
    3. [ ] Darlegung der Persistierungsstrategie
    4. [ ] Umsetzung der in [Termin 2: UI Entwurf](termin3.md) genannten sowie im Rahmen der Benutzerforschung erarbeiteten Funktionen
    5. [ ] (_Optional_) Umsetzung von Begeisterungsfaktoren

<!-- 2. [ ] Layout für Hoch- und Querformat -->
