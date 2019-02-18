# Client-seitige Interaktion mit JavaScript, AJAX und JSON

!!! abstract
    **Lernziele**

    - [x] Sie können mittels JavaScript das DOM einer Seite manipulieren
    - [x] Sie können Anwendungsszenarien (bspw. das Füllen eines Warenkorbs) in entspr. DOM-Manipulationslogik übersetzen
    - [x] Sie können AJAX-Aufrufe erzeugen und HTTP Responses mittels Handler verarbeiten
    - [x] Sie können mittels PHP JSON-Daten erzeugen 
    - [x] Sie können JSON-Daten clientseitig verarbeiten 

In dieser Einheit geht es um die Implementierung der Logik zur Client-seitige Interaktion zwischen BenutzerIn und dem DOM (=Document Object Model). Hierfür setzen wir **JavaScript** ein. Ferner steht in dieser Einheit auch die Kommunikation zwischen Server und Client mittels **JSON** und **AJAX** im Vordergrund, so dass sich die Web-Applikation wie eine Desktop-Applikation "anfühlt". 


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
    **Hinweis 1**:
    Es gibt mehrere Umsetzungsmöglichkeiten für Aufgabe 2 (bspw. Polling und kompletter Neuaufbau des DOM-Bereichs mit den Statusinformtionen vs. kaskadierte AJAX-Aufrufe für Stammdaten und Statusupdates). Für die Abnahme ist die Umsetzung einer einfachen Lösung ausreichend (bspw. Polling und kompletter Neuaufbau des Status-DOM).

!!! note
    **Hinweis 2 (Alternative Lösung)**: 

    - Aufbau der Seite mittels PHP; setzen bzw. aktualisieren der Zustände mit JavaScript
    - 2 separate AJAX-Requests: (a) pollt Statusupdates, (b) fragt Controller nach neuen Bestellungen; wenn neue Bestellung, dann Redirect im AJAX-Handler auf Kunde.php, d.h., Neuaufbau der Seite mit aktueller Bestellung) 



### PHP Controller zur Versendung von Statusupdates mittels JSON

Schreiben Sie einen **PHP StatusController**, welcher in Abhängigkeit der aktuellen Auftragsummer eines Kunden die aktuellen Status der Bestellpositionen als JSON zurück liefert. 
   
Bitte beachten Sie folgende Hinweise:

1. Überlegen Sie sich vorab, welche Daten der Controller von der Kundenseite benötigt, um die korrekten und zugehörigen Statusinformationen zurück zu liefern.

2. Implementieren Sie den Controller auf Basis der **Seitenklassenarchitektur**. Implementieren Sie hierfür eine **eigene abstrakte Superklasse** nach dem Vorbild der `Page.php`. Benennen Sie diese Klasse `JSONController.php`.

3. Passen Sie für den konkreten PHP StatusController das `PageTemplate.php` entsprechend an. Teilen Sie den Code nach Zugehörigkeit / Verantwortlichkeit (cf. SWT-Prinzip *Separation of Concerns*) auf die drei Methoden auf. Benennen Sie den Controller `StatusController.php`.

4. Testen Sie die korrekte Funktionsweise des Controllers mittels einem HTTP-Request Generator bzw. einem API Development Tool wie bspw. [Postman](https://www.getpostman.com/)



## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Testierung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Vollständige Implementierung der Seite `Bestellung.php`
    - [ ] Implementierung der abstrakten Superklasse `JSONController.php`
    - [ ] Implementierung des `StatusController.php`
    - [ ] 