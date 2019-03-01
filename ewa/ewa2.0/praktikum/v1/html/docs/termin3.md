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

1. Einsatzbereiche für ECMAScript im Pizzaservice/Webshop:
    - Klick auf ein Pizzabild trägt diese Pizza in den Warenkorb (Liste) ein;  
        bspw. 3 Pizzen bestellen --> 3-mal klicken
    - Möglichkeit zum Löschen der Einträge im Warenkorb 
        1. sowohl "Alle löschen" als auch 
        2. "(Mehrfach-)Auswahl löschen"
    - Bestellung wird nur abgeschickt, wenn eine Lieferadresse angegeben ist
    - Deaktivierung des Bestellknopfes bei unvollständigen Daten
    - Berechnung des Preises
    - bei Bäcker und Fahrer: Klick auf Radio-Button in der Statusliste sendet Statusänderung

    !!! note
        **Hinweise**:

        - Verwenden Sie nur DOM-konforme Attribute und Funktionen und keine browserspezifischen Spezialitäten (Vorsicht mit Vorlagen aus dem Netz !)
        - Verwenden Sie `"use strict";` in allen Funktionen
        - Testen Sie die Skripte mit unterschiedlichen Browsern und Lint-Tools

    !!! note
        **Bei Problemen mit DOM oder ECMAScript**:
        
        - Prüfen Sie die Browser-Konsole auf Fehlermeldungen (Aufruf mit F12)
        - Nutzen Sie den DOM-Inspector und den Befehl "Inspect" im rechten   Mausmenü um das DOM zu einem Tag anzuschauen
        - Achten Sie auf Groß-Klein-Schreibung bei DOM-Aufrufen
        - Prüfen Sie Ihr ECMAScript mit [JSLint](http://www.jslint.com) oder [ESLint für ECMAScript 6](http://eslint.org/demo/)



### Implementierung der Kundenseite mittels AJAX und JSON

!!! note
    **Hinweis**: Zur Implementierung und dem Testen des JavaScript-/AJAX-Codes von dieser Aufgabe benötigen Sie den JSON StatusController.php (--> siehe nächste Aufgabe). 
    Alternativ können Sie die Bestelldaten auch mit einem **REST-API Development Tool** wie bspw. [Postman](https://www.getpostman.com/) erzeugen (`Mocks` --> `mock server`) und die AJAX-Aufrufe damit testen.

Statusänderungen auf der Kundenseite sollen durch AJAX-Aufrufe implementiert werden.

!!! note
    **Hinweis 1**:
    Es gibt mehrere Umsetzungsmöglichkeiten für Aufgabe 2 (bspw. Polling und kompletter Neuaufbau des DOM-Bereichs mit den Statusinformtionen vs. kaskadierte AJAX-Aufrufe für Stammdaten und Statusupdates). Für die Abnahme ist die Umsetzung einer einfachen Lösung ausreichend (bspw. Polling und kompletter Neuaufbau des Status-DOM).

!!! note
    **Hinweis 2 (Alternative Lösung)**: 

    - Aufbau der Seite mittels PHP; setzen bzw. aktualisieren der Zustände mit JavaScript
    - 2 separate AJAX-Requests: (a) pollt Statusupdates, (b) fragt Controller nach neuen Bestellungen; wenn neue Bestellung, dann Redirect im AJAX-Handler auf Kunde.php, d.h., Neuaufbau der Seite mit aktueller Bestellung) 



### PHP Controller zur Versendung von Statusupdates mittels JSON

Schreiben Sie einen **PHP StatusController** (Name: `StatusController.php`), welcher in Abhängigkeit der aktuellen `BestellId` eines Kunden die jeweiligen Statusdaten der Bestellpositionen als **JSON** zurück liefert. 
   
Bitte beachten Sie folgende Hinweise:

1. Überlegen Sie sich vorab, welche Daten `StatusController.php` von der Kundenseite benötigt, um die korrekten und zugehörigen Statusinformationen zurück zu liefern.

    !!! note
        **Hinweis**: Benötigte Daten können in `data`-Attributen im Seiten-DOM gespeichert und mittels JavaScript für den AJAX-Request ausgelesen werden. 

2. Implementieren Sie den Controller auf Basis der **Seitenklassenarchitektur**. Implementieren Sie hierfür eine **eigene abstrakte Superklasse** nach dem Vorbild der `Page.php` und lagern Sie wiederverwendbaren Code darin aus. Benennen Sie diese Klasse `JSONController.php`.

3. Implementieren Sie den `StatusController.php` und passen Sie hierfür das `PageTemplate.php` entsprechend an. Teilen Sie den Code nach Zugehörigkeit bzw. Verantwortlichkeit (cf. SWT-Prinzip *"Separation of Concerns"*) auf die drei Methoden `getViewData()`, `generateView()`, `processReceivedData()` auf.

4. Nutzen Sie ein einfaches **Sessionmanagement** analog dem in [Termin 2](termin2.md#sessionmanagement-und-sicherheit) beschriebenem, um die notwendigen Daten aus der Datenbank abzufragen.  

    !!! note
        **Hinweis**: In der Sessionvariable steht die zugehörige letzte `BestellungId`; nutzen Sie diese für die Abfrage und Generierung der Statusdaten.

5. Entwerfen Sie eine geeignete JSON-Datenstruktur für die Übertragung der Statusdaten einer Bestellung. 
    1. Den serialisierten JSON-String erzeugen Sie mittels `$var = json_encode({Daten_aus_Recordset});`
    2. `echo $var`nicht vergessen, um den serialisieren JSON-String als HTTP-Response zu versenden!

6. Testen Sie die korrekte Funktionsweise des Controllers mittels einem HTTP-Request Generator bzw. einem REST-API Development Tool wie bspw. [Postman](https://www.getpostman.com/)




## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Durchführung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Vollständige Implementierung der Seite `Kunde.php`
    - [ ] Implementierung der abstrakten Superklasse `JSONController.php`
    - [ ] Implementierung des `StatusController.php`
    - [ ] 