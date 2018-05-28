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

1. Implementieren Sie das in [Aufgabe 1](termin1.md) dargelegte **Datenmodell** und binden Sie es in die App ein
2. Machen Sie das Datenmodell **persistent**, indem Sie es in `onPause` jeder relevanten Activity serialisiert in einer Datei speichern und beim `onCreate` aus dieser Datei einlesen und deserialisieren
    
    !!! question
        **Frage:** Erzeugen Sie dabei ein neues Model-Objekt oder füllen Sie lieber das alte mit neuen Inhalten? Müssen/dürfen Activities eigene Referenzen auf das Datenmodell halten?

### Benutzeroberfläche
1. Implementieren Sie Benutzerführung durch **Zeigen/Verbergen** bzw. **Aktivieren/Deaktivieren** von Views und Widgets
2. Geben Sie **(Fehler-)Meldungen** in geeigneter Form als `AlertDialog`, `Toast`, `Snackbar` oder via Log aus (was wofür?)
3. Übernehmen Sie das Ergebnis des **Kanalscans** aus dem JSON-Ergebnis von `HttpRequest.execute` und
speichern Sie es im **Datenmodell**. Binden Sie die betroffenen Views über Adapter an die Kanalliste an.
1. Machen Sie Ihre App "**drehbar**", d.h. sorgen Sie dafür, dass der Neustart der Activity beim Drehen des Smartphones (Hochformat/Querformat) keine sichtbaren Folgen hat. Implementieren Sie dazu ggf. die Methode `onSaveInstanceState` und werten Sie dann den Parameter von `onCreate` entsprechend aus.


### AsyncTask
Eigentlich sollten Zugriffe aufs Netzwerk nicht im UI Thread gemacht werden (warum?). 

1. Schreiben Sie daher eine Klasse `HttpRequestAsync extends AsyncTask` und verlagern Sie die `HttpRequest`-Aufrufe in deren Methode `doInBackground`.


### Testen, Debuggen, komplett Fertigstellen
1. Vergewissern Sie sich, dass alle in Aufgabe 2 geplanten Use Cases und Anwendungsszenarien von Ihrer Anwendung tatsächlich unterstützt werden. Testen Sie auch das Verhalten bei Erstinbetriebnahme (d.h. der persistente Speicher ist leer: Einstellungen, Apps, Fernbedienung, Daten löschen)

## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Testierung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    1. [ ] Persistiertes Datenmodell
    2. [ ] Layout für Hoch- und Querformat
    3. [ ] Umsetzung der im [Kapitel Vorbemerkung](vorbemerkung.md) genannten Funktionen