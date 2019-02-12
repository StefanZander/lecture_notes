# PHP: Seitenklassen, Datenbankzugriff und Sessionmanagement

!!! abstract
    **Lernziele**

    - [x] Sie können mit PHP und MySQLi einen Datenbankzugriff realisieren
    - [x] Sie können die Objekt-orientierte Programmierung mit PHP umsetzen
    - [x] Sie verstehen die grundlegende Funktionsweise der Seiten- und Blockklassenarchitektur
    - [x] Sie können ein Sessionmanagement mit PHP implementieren

Ziel dieser Einheit ist die Entwicklung von sauberem, d.h., gut wartbarem und strukturiertem PHP-Code. Hierzu setzen wir die **Seiten-** und **Blockklassen** ein. Ferner stellen wir in dieser Einheit die **Datenbankanbindung** zur Web-Applikation her und implementieren eine leichtgewichtige Form des **Sessionmanagements**.  

## Aufgaben

### Seitenklassen

1. Laden Sie die **Zulieferung** für das Praktikum von der [EWA-Moodleseite](https://lernen.h-da.de/course/view.php?id=6940) herunter:
      - `PageTemplate.php` dient als Vorlage für die 4 Seiten 
        1. `Bestellung.php`
        2. `Kunde.php`
        3. `Baecker.php`  
        4. `Fahrer.php`
      - `Page.php` ist die gemeinsame Basisklasse dieser 4 Seiten-Klassen und soll die Datenbank öffnen und schließen und den HTML-Rahmen erzeugen
      - `BlockTemplate.php` dient als Vorlage für einzelne Blöcke innerhalb der Seiten
      - `Pizzaservice_Documentation.pdf` enthält eine Dokumentation der Klassen mit Klassendiagramm und Sequenzdiagramm

2. Versuchen Sie mit der Dokumentation und dem Quellcode das **Zusammenspiel der verschiedenen Klassen** zu verstehen. Klären Sie folgende Fragen:
      - Wo erfolgt der eigentliche Aufruf zur Erstellung einer HTML-Seite?
      - Was tun die Methoden `getViewData()`, `generateView()` und `processReceivedData()`?
      - Wo wird der HTML-Rahmen erzeugt? Wo wird er ausgegeben?

3. Legen Sie **4 Kopien** der Klasse `PageTemplate.php` an und nennen Sie die Dateien Bestellung, Status, Baecker und Fahrer. Ändern Sie auch die Klassennamen und Verweise auf die Klasse innerhalb der Dateien.

4. Verteilen Sie Ihren **PHP-Code** aus der vorherigen Einheit in die zuständigen Methoden der 5 Klassen `Page`, `Bestellung`, `Status`, `Baecker` und `Fahrer` (die Kommentare in den Dateien helfen dabei).  

    !!! note
        **Hinweise**:

         - HTML-Ausgaben erfolgen nur in `generateView()`!
         - Die Struktur wird besser, wenn Sie Speisekarte, Warenkorb-Formular und Statustabellen unter Verwendung von `BlockTemplate.php` realisieren (das ist aber optional)
         - Die Ausgabe größerer HTML-Abschnitte ist mit der "Heredoc-Notation" besonders einfach. Achten Sie darauf, dass die Endmarke in der ersten Spalte beginnen muss und höchstens noch ein `;` folgen darf
         - Die Methoden der gegebenen Klassen dürfen auch zusätzliche Parameter bekommen

5. Schreiben Sie **Hilfs-Methoden** oder **zusätzliche Klassen** nach Bedarf

6. Prüfen Sie, ob die neuen PHP-Seiten als Ausgabe die ursprünglichen statischen HTML-Seiten erzeugen und ob dieser Code immer noch **standardkonform** ist.

         
    <!-- !!! note 
        **Hinweis**: Alle Seiten müssen **objektorientiert** unter Verwendung der gegebenen Templates ([Download](https://lernen.h-da.de/course/view.php?id=6940) von der EWA-Moodleseite) implementiert werden! -->

### Datenbankzugriff mittels MySQLi

### Sessionmanagement

## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Testierung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Lokale Installation eines Webservers (bspw. XAMPP)
    - [ ] Deployment der Sourcen
    - [ ] Ausgabe der Bestell-, Bäcker- und Fahrerseite mittels PHP
    - [ ] {>>Landingpage mit Navigation?<<}





