# Sessionmanagement, Sicherheit und AJAX-Vorbereitung

!!! note
    **Lernziele**

     - [ ] Sie können ein einfaches Sessionmanagement mit PHP implementieren, um nutzerspezifische Daten zu verarbeiten
     - [ ] Sie beherrschen grundlegende Verfahren zur Absicherung einer Web-Applikation gegen Angriffe wie SQL-Injection und Cross-Site-Scripting
     - [ ] Sie können mittels PHP JSON-Daten erzeugen und ausliefern

In dieser Einheit implementieren Sie eine leichtgewichtige Form des **Sessionmanagements**. Zusätzlich sichern Sie Ihre Web-Applikation gegen grundlegende Angriffe auf eine Webseite ab.
Ferner implementieren Sie die Serverseite zur Aktualisierung der Kundenseite mit AJAX. 

##Vorbereitung

!!! abstract  
    **Erledigen Sie diese Aufgaben VOR dem Übungstermin**

       **Voraussetzung:** Die vier in [Termin 2](termin2.md) erstellten Seitenklassen implementieren die vollständige Datenbankanbindung des Webservices und erzeugen mit den Datenbankinhalten standardkonformen HTML-Code.

       1. Machen Sie sich die Funktionsweise von Sessions in PHP klar und überlegen Sie sich, wo man Sessions einsetzen muss. 
       2. Machen Sie sich vertraut mit den Angriffen und den Gegenmaßnahmen zu `Cross Site Scripting` und `SQL-Injection`.

!!! warning
     **Hinweis**:    
     Wenn Sie die Vorbereitung nicht **zu Beginn der Übung** zeigen können, erhalten Sie kein Testat für die vorherige Übung, sondern eine Verwarnung (**"gelbe Karte"**)!

## Aufgaben

### Sessionmanagement

1. Der Kunde soll auf seiner Statusseite nur diejenigen Pizzen sehen, die er selbst zuletzt bestellt hat. Implementieren Sie dieses Feature mittels **Sessionverwaltung**.  

      Tipp: Speichern Sie die letzte `BestellungID` in der Session und fragen Sie nur Pizzen mit dieser Bestellnummer aus der Datenbank ab

2. Prüfen Sie, ob die Kundenseite sich tatsächlich so verhält wie erwartet.
Was passiert, wenn keine Pizza zurückgeliefert wird?

### Sicherheit
1. Verhindern Sie **SQL-Injection** mit Hilfe von `real_escape_string`. Überlegen Sie an welchen Stellen der Anwendung ein solcher Angriff möglich wäre und verhindern Sie es.  

      Test: geben Sie `/ ' " \` als Lieferadresse ein; diese Zeichen müssen auf der Fahrerseite genau so erscheinen.

2. Verhindern Sie **Cross Site Scripting** mit Hilfe von `htmlspecialchars`. Überlegen Sie an welchen Stellen der Anwendung ein solcher Angriff möglich wäre und verhindern Sie es. 

      Test
      : geben Sie `<b>xxx</b>` als Lieferadresse ein; dies muss genau so in der Datenbank und in der Ausgabe auf der Fahrerseite erscheinen

3. Ein Hacker könnte versuchen, Ihren PHP-Code zum Absturz zu bringen, indem er beim Aufruf der Webseite unerwartete Parameter übergibt oder erwartete Parameter des Fomulars löscht.
Welche Seitenklassen kann das betreffen? Stellen Sie mit dem Befehl `isset()` sicher, dass solche Angriffe scheitern.

4. Testen und validieren Sie die generierten Seiten.

### Serverseitige Implementierung der Statusupdates der Kundenseite

In der finalen Lösung der Kundenseite sollen die Statusinformationen zu den Pizzen übertragen werden, ohne dass jedesmal die gesamte Seite neu geladen wird. Dafür muss es auf der Serverseite eine PHP-Seite geben, die genau diese Rohdaten liefert (in einem Standardformat wie `JSON`). Das *Einbauen* der vom Browser empfangenen Daten in die Kundenseite erfolgt aber erst in der nächsten Übung. 

Erstellen Sie baierend auf `PageTemplate.php` eine **neue Seitenklasse** mit Namen `KundenStatus.php`. Diese Seite soll **keine HTML-Ausgabe** erzeugen, sondern "nur" die Statusdaten der bestellten Pizzen zurückliefern. 
   
Bitte beachten Sie folgende Hinweise: {++ Geht das nicht so einfach? Mache ich einen Denkfehler? Warum hattest Du eine neue Basisklasse gefordert? ++}

1. Passen Sie die Inhalte der Standardmethoden der Seitenklassen an:
    - processReceivedData(): bleibt leer, da keine Formulardaten empfangen werden sollen
    - getViewData(): Hier können Sie wie gewohnt die Daten von der Datenbank abfragen und z.B. als Array bereitstellen
    - generateView(): Da keine HTML-Seite erzeugt werden soll, kommentieren Sie die Zeilen generatePageHeader() und generatePageFooter() aus. Stattdessen können Sie hier aber die gewünschten Daten zurückliefern (siehe unten).
  
2. Überlegen Sie sich, welche Daten `KundenStatus.php` von der Datenbank benötigt, um die korrekten Statusinformationen zurück zu liefern.
Fragen Sie diese Daten gezielt bei der Datenbank ab. Verwenden Sie analog zur Aufgabe von oben **Sessionmanagement** um die gewünschte Bestellung herauszufiltern. 
3. Die Datenbankabfrage liefert ein "Recordset", dessen Objekte nur mit den Methoden vom MySQLi abgefragt werden können. Deshalb ist es für die Übertragung an den Browser ungeeignet. Wandeln Sie das Recordset um in ein **einziges** Array, das - analog zum Recordset - ein assoziatives Array für jede Ergebniszeile enthält (also ein Array von assoziativen Arrays).
4. Das Datenformat **JSON** bietet die Möglichkeit komplexe Datenstrukturen und Objekte zu einem String zu serialisieren und anschließend wieder zusammenzusetzen. Das ist sehr praktisch, wenn man komplexe Datensätze z.B. von PHP an einen Webbrowser schicken will.

    - Den serialisierten JSON-String erzeugen Sie mittels    
    `:::js $serializedData = json_encode($Array_mit_Daten_aus_Recordset);`
    - Versenden Sie den serialisierten JSON-String als Antwort mit `:::js echo $serializedData`!

5.  Testen Sie die korrekte Funktionsweise von `KundenStatus.php` mittels eines direkten Aufrufs im Browser. Sie können in einem [Online JSON Editor](https://jsoneditoronline.org/) analysieren, ob die Antwort dem ursprünglichen Array entspricht.

## Nachbereitung
Setzen Sie noch eventuell fehlende Teile der obigen Aufgabe bis zum nächsten Praktikumstermin um. 


## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Durchführung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [x] Einsatz von Sessionmanagement auf der Kundenseite und im Kundenstatus
    - [x] Implementierung von `KundenStatus.php` basierend auf den Seitenklassen. 
    - [x] Versenden der Statusdaten durch `KundenStatus.php` mittels JSON
    - [x] Absicherung der Web-Applikation gegen SQL-Injection und Cross-Site-Scripting (XSS)
    
