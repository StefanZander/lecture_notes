# Client-seitige Interaktion mit JavaScript, AJAX und JSON

!!! abstract
    **Lernziele**

    - [x] Sie können mittels JavaScript das DOM einer Seite manipulieren
    - [x] Sie können Anwendungsszenarien (bspw. das Füllen eines Warenkorbs) in entspr. DOM-Manipulationslogik übersetzen
    - [x] Sie können AJAX-Aufrufe erzeugen und HTTP Responses mittels Handler verarbeiten
    - [x] Sie können mittels PHP JSON-Daten erzeugen 
    - [x] Sie können JSON-Daten clientseitig verarbeiten 

In dieser Einheit geht es um die Implementierung der Logik zur **Client-seitigen Interaktion** zwischen BenutzerIn und dem DOM (=Document Object Model) – bspw. zum Befüllen des Warenkorbs. Hierfür setzen wir **JavaScript** ein. Ferner steht in dieser Einheit auch die **asynchrone Kommunikation** zwischen Server und Client mittels **AJAX** und **JSON** im Vordergrund, so dass Statusänderungen auf der Kundenseite *ohne* Neuladen der Seite in "Quasi-Echtzeit" sichtbar werden. 

## Vorbereitung

1. Vergewissern Sie sich, dass die Datenbank korrekt angelegt ist und eine Bestellung fehlerfrei durchgeführt wird
2. Testen Sie, dass auf der Kundenseite nur die letzte Bestellung angezeigt wird, nicht aber Bestellungen anderer Kunden
3. Sofern noch nicht vorhanden, generieren Sie einige Bestelldaten für den im Rahmen dieser Einheit zu entwickelnden JSON StatusController



## Aufgaben


### Implementierung von Bestellfunktionalität mittels JavaScript

1. Einsatzbereiche für ECMAScript im Pizzaservice/Webshop:
    - Klick auf ein Pizzabild trägt diese Pizza in den Warenkorb (Liste) ein;  
        bspw. 3 Pizzen bestellen --> 3-mal klicken
    - Möglichkeit zum Löschen der Einträge im Warenkorb 
        1. sowohl "Alle löschen" als auch 
        2. "(Mehrfach-)Auswahl löschen"
    - Bestellung wird nur abgeschickt, wenn eine Lieferadresse angegeben ist
    - Deaktivierung des Bestellknopfes bei unvollständigen Daten
    - Berechnung des Preises
    - bei Bäcker und Fahrer: Klick auf Radio-Button in der Statusliste sendet Statusänderung

    !!! note
        **Hinweise**:

        - Verwenden Sie nur DOM-konforme Attribute und Funktionen und keine browserspezifischen Spezialitäten (Vorsicht mit Vorlagen aus dem Netz !)
        - Verwenden Sie `"use strict";` in allen Funktionen
        - Testen Sie die Skripte mit unterschiedlichen Browsern und Lint-Tools

    !!! note
        **Bei Problemen mit DOM oder ECMAScript**:
        
        - Prüfen Sie die Browser-Konsole auf Fehlermeldungen (Aufruf mit F12)
        - Nutzen Sie den DOM-Inspector und den Befehl "Inspect" im rechten   Mausmenü um das DOM zu einem Tag anzuschauen
        - Achten Sie auf Groß-Klein-Schreibung bei DOM-Aufrufen
        - Prüfen Sie Ihr ECMAScript mit [JSLint](http://www.jslint.com) oder [ESLint für ECMAScript 6](http://eslint.org/demo/)


---

### Aktualisierung der Statusdaten mittels AJAX und JSON

!!! note
    **Hinweis**: Zur Implementierung und dem Testen des JavaScript-/AJAX-Codes von dieser Aufgabe benötigen Sie den JSON `StatusController.php` (--> siehe nächste Aufgabe). 
    Alternativ können Sie die Bestelldaten auch mit einem **REST-API Development Tool** wie bspw. [Postman](https://www.getpostman.com/) erzeugen (`Mocks` --> `mock server`) und die AJAX-Aufrufe damit testen.


Ziel dieser Aufgabe ist es, dass die Kundenseite (`Kunde.php`) mittels JavaScript und AJAX den Status aller Bestellpositionen in Quasi-Echtzeit aktualisiert, ohne die Seite jeweils neu laden zu müssen. D.h., sobald sich der Status einer Bestellposition auf der Bäcker- oder Fahrer-Seite ändert, soll sich diese Änderung auch auf der Kundenseite widerspiegeln. 

#### Vorbemerkungen

- Die Zustände der Bestellpositionen sind durch Radiobuttons darzustellen (--> siehe auch [Desginskizze](anforderungen.md#designskizze)). 
- Die Initialisierung der Radiobuttons, d.h., das Setzen der Markierungen kann im PHP-Code der Seite `Kunde.php` erfolgen. Nach dem Aufbau der Seite im Browser sollen alle weiteren Statusänderungen mittels JavaScript und AJAX realisiert werden, so dass sich der Inhalt der Seite in Abhängigkeit der Statusänderungen auf Bäcker- und Fahrer-Seite dynamisch anpasst.
- Die Anfrage nach den aktuellen Zuständen der Bestellpositionen einer Bestellung erfolgt mittels zyklisch ausgeführten AJAX-Aufrufen (*=Polling*).
- Das Polling kann durch die JavaScript-Anweisung  
    `setTimeout( function , timeout_in_milliseconds , param1 , param2 , ... );`  
    ausgeführt werden. `function` repräsentiert hierbei eine JavaScript-Funktion, innerhalb welcher der AJAX-Aufruf initialisiert und durchgeführt wird.
- Berücksichtigen Sie bei der Kommunikation mit dem `StatusController.php`, dass dieser über ein Sessionmanagement verfügt, d.h., die Variable `BestellungId` steht idR in der Sessionvariable, sofern zuvor eine Bestellung durchgeführt wurde.
- Berücksichtigen Sie die folgenden beiden Situationen
    1. Die Kundenseite wurde ohne eine zuvor durchgeführte Bestellung aufgerufen
    2. Der Kunde löst noch während der Verarbeitung der aktuellen Bestellung eine neue Bestellung aus  

    Geben Sie im Fall a) eine entsprechende Nachricht auf der Seite aus;
    Initiieren Sie bei b) einen Redirect auf die Seite `Kunde.php`.

    !!! note
        **Tipp**: Um festzustellen, ob der Kunde während der Bearbeitung der akutellen Bestellung keine neue Bestellung ausgelöst hat, können Sie die BestellungID im DOM der Seite `Kunde.php` speichern und bei jedem AJAX-Aufruf mitübertragen. Serverseitig kann dann geprüft werden, ob die übertragene ID mit der in der Sessionvariable gespeicherten ID übereinstimmt.  

- Wichtig: Das Polling soll erst starten, nachdem die Seite `Kunde.php` komplett vom Browser geladen und geparst wurde. Schreiben Sie hierzu einen entspr. `onload`-Handler.

- Aus Gründen der Einfachheit können Sie die `BestellungID` als HTTP-`GET`-Parameter übertragen.


#### Aufgaben

1. Implementieren Sie die Funktion zur Erzeugung der **AJAX-Requests**. Lesen Sie ggf. die `BestellungID` aus dem Seiten-DOM aus und übertragen Sie diese als GET-Parameter im AJAX-Request.

2. Schreiben Sie eine **Handler-Funktion** für das `onload`-Event, welche zyklisch den AJAX-Request absetzt, sobald die Seite vollständig geladen und geparst wurde.

3. Implementieren Sie die Logik zur Auswertung der **JSON-Statusdaten** und der Anpassung des Seiten-DOMs (=Setzen der Markierungen in den Radiobuttons).

4. Implementieren Sie die Logik zur Behandlung der **Sonderfälle** (--> siehe [Vorbemerkungen](termin3.md#vorbemerkungen)) 
      1. Keine Bestellung vorhanden
      2. Initiierung einer neuen Bestellung trotz laufender Bestellung. 

    Insbesondere bei Fall (b) gibt es mehrere Umsetzungsmöglichkeiten

      - `StatusController.php` liefert HTTP-Statuscode `303 See Other`
      - Redirect auf `Kunde.php`, so dass die Seite mit den neuen Bestelldaten neu aufgebaut wird
      - Zweiter kaskadierter AJAX-Request der feststellt, ob eine neue Bestellung initiiert wurde

    Entscheiden Sie sich für eine Variante und implementieren Sie diese.

    **Testen** Sie diese Variante insbesondere mit den beschriebenen Sonderfällen


<!-- !!! note
    **Hinweis 1**:
    Es gibt mehrere Umsetzungsmöglichkeiten für Aufgabe 2 (bspw. Polling und kompletter Neuaufbau des DOM-Bereichs mit den Statusinformtionen vs. kaskadierte AJAX-Aufrufe für Stammdaten und Statusupdates). Für die Abnahme ist die Umsetzung einer einfachen Lösung ausreichend (bspw. Polling und kompletter Neuaufbau des Status-DOM).

!!! note
    **Hinweis 2 (Alternative Lösung)**: 

    - Aufbau der Seite mittels PHP; setzen bzw. aktualisieren der Zustände mit JavaScript
    - 2 separate AJAX-Requests: (a) pollt Statusupdates, (b) fragt Controller nach neuen Bestellungen; wenn neue Bestellung, dann Redirect im AJAX-Handler auf Kunde.php, d.h., Neuaufbau der Seite mit aktueller Bestellung)  -->


---



### PHP Controller zur Versendung von Statusupdates mittels JSON

Schreiben Sie einen **PHP StatusController** (Name: `StatusController.php`), welcher in Abhängigkeit der aktuellen `BestellungId` eines Kunden die jeweiligen Statusdaten der Bestellpositionen als **JSON** zurück liefert. 
   
Bitte beachten Sie folgende Hinweise:

1. Überlegen Sie sich vorab, welche Daten `StatusController.php` von der Kundenseite benötigt, um die korrekten und zugehörigen Statusinformationen zurück zu liefern.

    !!! note
        **Hinweis**: Benötigte Daten können in `data`-Attributen im Seiten-DOM gespeichert und mittels JavaScript für den AJAX-Request ausgelesen werden. 

2. Implementieren Sie den Controller auf Basis der **Seitenklassenarchitektur**. Implementieren Sie hierfür eine **eigene abstrakte Superklasse** nach dem Vorbild der `Page.php` und lagern Sie wiederverwendbaren Code darin aus. Benennen Sie diese Klasse `JSONController.php`.

3. Implementieren Sie den `StatusController.php` und passen Sie hierfür das `PageTemplate.php` entsprechend an. Teilen Sie den Code nach Zugehörigkeit bzw. Verantwortlichkeit (cf. SWT-Prinzip *"Separation of Concerns"*) auf die drei Methoden `getViewData()`, `generateView()`, `processReceivedData()` auf.

4. Nutzen Sie ein einfaches **Sessionmanagement** analog dem in [Termin 2](termin2.md#sessionmanagement-und-sicherheit) beschriebenem, um die notwendigen Daten aus der Datenbank abzufragen.  

    !!! note
        **Hinweis**: In der Sessionvariable steht die zugehörige letzte `BestellungId`; nutzen Sie diese für die Abfrage und Generierung der Statusdaten.

5. Entwerfen Sie eine geeignete **JSON-Datenstruktur** für die Übertragung der Statusdaten einer Bestellung. 
    1. Den serialisierten JSON-String erzeugen Sie mittels `$var = json_encode({Daten_aus_Recordset});`
    2. `echo $var`nicht vergessen, um den serialisieren JSON-String als HTTP-Response zu versenden!

6. Testen Sie die korrekte Funktionsweise des Controllers mittels einem HTTP-Request Generator bzw. einem REST-API Development Tool wie bspw. [Postman](https://www.getpostman.com/)




## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Durchführung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Vollständige Implementierung des JavaScript-Codes für die Seite `Kunde.php`
    - [ ] Implementierung der abstrakten Superklasse `JSONController.php`
    - [ ] Implementierung des `StatusController.php`
    - [ ] Aktualisierung der Statusdaten mittels AJAX
    - [ ] Implementierung der Logik zur Behandlung der Sonderfälle
    - [ ] Fehlerfreier Bestelldurchlauf (--> ausgiebiges Testen) 