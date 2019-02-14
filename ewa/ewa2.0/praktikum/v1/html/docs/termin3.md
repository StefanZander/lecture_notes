# Client-seitige Interaktion mit JavaScript, AJAX und JSON

!!! abstract
    **Lernziele**

    - [x] {Ziel 1}
    - [x] {Ziel 2}
    - [x] {Ziel 3}

In dieser Einheit geht es um die Implementierung der Logik zur Client-seitige Interaktion zwischen BenutzerIn und dem DOM (=Document Object Model). Hierfür setzen wir **JavaScript** ein. Ferner steht in dieser Einheit auch die Kommunikation zwischen Server und Client mittels **JSON** und **AJAX** im Vordergrund, so dass sich die Web-Applikation wie eine Desktop-Applikation "anfühlt". 


## Aufgaben

### Implementierung von Warenkorbfunktionalität mittels JavaScript

1. Einsatzbereiche für ECMAScript im Pizzaservice:
    - Klick auf ein Pizzabild trägt diese Pizza in den Warenkorb (Liste) ein;  
        bspw. 3 Pizzen bestellen --> 3-mal klicken
    - Möglichkeit zum Löschen der Einträge im Warenkorb (--> sowohl "Alle löschen" als auch "(Mehrfach-)Auswahl löschen")
    - Bestellung wird nur abgeschickt, wenn eine Lieferadresse angegeben ist
    - Deaktivierung des Bestellknopfes bei unvollständigen Daten
    - Berechnung des Preises
    - Klick auf Radio-Button in der Statusliste sendet Statusänderung (bei Bäcker und Fahrer)

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
    **Hinweis**:
    Es gibt mehrere Umsetzungsmöglichkeiten für Aufgabe 2 (bspw. Polling und kompletter Neuaufbau des DOM-Bereichs mit den Statusinformtionen vs. kaskadierte AJAX-Aufrufe für Stammdaten und Statusupdates). Für die Abnahme ist die Umsetzung einer einfachen Lösung ausreichend (bspw. Polling und kompletter Neuaufbau des Status-DOM).


### PHP Controller zur Versendung von Statusupdates mittels JSON


## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Testierung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Implementierung der Seiten `Bestellung.php`, `Baecker.php` und `Fahrer.php` mittels Seitenklassen und (optional) Blockklassen.
    - [ ] Implementierung der Datenbankzugriffe mittels `MySQLi`
    - [ ] Sessionmanagement
    - [ ] Absicherung der Web-Applikation gegen SQL-Injection und Cross-Site-Scripting (XSS)