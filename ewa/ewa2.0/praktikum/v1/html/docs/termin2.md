# PHP: Seitenklassen, Datenbankzugriff, Sessionmanagement und Sicherheit

!!! abstract
    **Lernziele**

    - [x] Sie können mit PHP und MySQLi einen Datenbankzugriff realisieren
    - [x] Sie können die Objekt-orientierte Programmierung mit PHP umsetzen
    - [x] Sie verstehen die grundlegende Funktionsweise der Seiten- und Blockklassenarchitektur
    - [x] Sie können ein einfaches Sessionmanagement mit PHP implementieren
    - [x] Sie können eine Web-Applikation gegen SQL-Injection und Cross-Site-Scripting (XSS) absichern

Ziel dieser Einheit ist die Entwicklung von sauberem, d.h., gut wartbarem,  strukturiertem und objektorientierten PHP-Code. Hierzu setzen wir die **Seiten-** und **Blockklassen** ein. Ferner stellen wir in dieser Einheit die **Datenbankanbindung** zur Web-Applikation her und implementieren eine leichtgewichtige Form des **Sessionmanagements**. Abschließend sichern wir die Web-Applikation gegen **SQL-Injection** und **Cross-Site-Scripting (XSS)** ab. 


## Vorbereitung
1. Der Webserver ist installiert und funktioniert ordnungsgemäß
2. Die in [Termin 1: PHP – Erste Schritte](termin1.md) erstellten PHP-Seiten werden ordnungsgemäß vom Webserver ausgeliefert, d.h., diese sind unter der URL `http://127.0.0.1/...` abrufbar
<!-- 3. Der von den PHP-Seiten erzeugte HTML-Code ist standardkonform;  -->
3. Die Standardkonformität des von den PHP-Seiten erzeugten HTML-Codes wurde durch einen HTML5-Validator überprüft und nachgewiesen



## Aufgaben

### Dynamische Seitengenerierung mittels Seitenklassen

1. Laden Sie die **Zulieferung** für das Praktikum von der [EWA-Moodleseite](https://lernen.h-da.de/course/view.php?id=6940) herunter:
      - `PageTemplate.php` dient als Vorlage für die 4 Seiten 
        1. `Bestellung.php`
        2. `Kunde.php`
        3. `Baecker.php`  
        4. `Fahrer.php`
      - `Page.php` ist die gemeinsame Basisklasse dieser 4 Seiten-Klassen und soll die Datenbank öffnen und schließen und den HTML-Rahmen erzeugen
      - `BlockTemplate.php` dient als Vorlage für einzelne Blöcke innerhalb der Seiten
      - `Pizzaservice_Documentation.pdf` enthält eine Dokumentation der Klassen mit Klassendiagramm und Sequenzdiagramm

2. Versuchen Sie mit der Dokumentation und dem Quellcode das **Zusammenspiel der verschiedenen Klassen** zu verstehen. Klären Sie folgende Fragen:
      - Wo erfolgt der eigentliche Aufruf zur Erstellung einer HTML-Seite?
      - Was tun die Methoden `getViewData()`, `generateView()` und `processReceivedData()`?
      - Wo wird der HTML-Rahmen erzeugt? Wo wird er ausgegeben?

3. Legen Sie **4 Kopien** der Klasse `PageTemplate.php` an und nennen Sie die Dateien `Bestellung.php`, `Kunde.php`, `Baecker.php` und `Fahrer.php`. ändern Sie auch die Klassennamen und Verweise auf die Klasse innerhalb der Dateien.

4. Verteilen Sie Ihren **PHP-Code** aus der vorherigen Einheit in die zuständigen Methoden der 5 Klassen `Page`, `Bestellung`, `Kunde`, `Baecker` und `Fahrer` (die Kommentare in den Dateien helfen dabei).  

    !!! note
        **Hinweise**:

         - HTML-Ausgaben erfolgen nur in `generateView()`!
         - Die Struktur wird besser, wenn Sie Speisekarte, Warenkorb-Formular und Statusansicht unter Verwendung von `BlockTemplate.php` realisieren (das ist aber optional)
         - Die Ausgabe größerer HTML-Abschnitte ist mit der [Heredoc-Notation](http://php.net/manual/de/language.types.string.php#language.types.string.syntax.heredoc) besonders einfach. Achten Sie darauf, dass die Endmarke in der ersten Spalte beginnen muss und höchstens noch ein `;` folgen darf
         - Die Methoden der gegebenen Klassen dürfen auch zusätzliche Parameter bekommen

5. Schreiben Sie **Hilfs-Methoden** oder **zusätzliche Klassen** nach Bedarf

6. Prüfen Sie, ob die neuen PHP-Seiten als Ausgabe die ursprünglichen statischen HTML-Seiten erzeugen und ob dieser Code immer noch **standardkonform** ist.

         
    <!-- !!! note 
        **Hinweis**: Alle Seiten müssen **objektorientiert** unter Verwendung der gegebenen Templates ([Download](https://lernen.h-da.de/course/view.php?id=6940) von der EWA-Moodleseite) implementiert werden! -->



### Datenbankzugriff mittels MySQLi

1. Entwerfen Sie das **Datenmodell** für den Pizzaservice. 

    Nutzen Sie bspw. das folgende Schema:
       ``` 
       Angebot:         PizzaName, Bilddatei, Preis
       BestelltePizza:  PizzaID, fBestellungID, fPizzaName, Status
       Bestellung:      BestellungID, Adresse, Bestellzeitpunkt
       ```

2. Implementieren Sie das **Datenmodell** mit `phpMyAdmin`
      1. verwenden Sie die Kollation `utf8_unicode_ci` (im Vorgabewert `utf8_general_ci` gilt nicht ß=ss)
      2. `PizzaName`, `PizzaID`, `BestellungID` sind **Primärschlüssel**; IDs mit Autoincrement
      3. Realisieren Sie die Verknüpfungen zwischen den Primärschlüsseln und den Fremdschlüsseln `fBestellungID`, `fPizzaName` in der Datenbank.  
      *Tipp: Mit dem "Designer" in `phpMyAdmin` können Sie die Beziehungen grafisch eintragen*
      4. Füllen Sie die Tabelle "`Angebot`" manuell mit `phpMyAdmin`.
      5. Tipp zum Bestellzeitpunkt: MySQL-Funktion `CURRENT_TIMESTAMP` als Standardwert des Feldes.

3. Implementieren Sie die **Datenbankzugriffe** (Select, Insert Into, Update) in den zuständigen Methoden der Klassen und ersetzen Sie die statischen Codeteile durch den Datenbankzugriffscode
      1. Der Zugriff auf die Datenbank erfolgt objektorientiert über die Klasse `MySQLi`. 
      2. Zugriff auf die Datenbank erfolgt nur in `getViewData()` und `processReceivedData()`.
      3. Testen und Debuggen Sie Ihren Code --> `error_reporting(E_ALL)` hilft dabei

    !!! note
        Tipps zur Umsetzung
        
        - `var_dump($variable)` für die schnelle Testausgabe zwischendurch
        - `number_format($zahl, $nachkommastellen)` formatiert `$zahl`
        - `$mysqli->insert_id` liefert die Autoincrement-ID nach `INSERT INTO`
        - Tabellen- und Feldnamen in MySQL ggf. in ` (Gravis / accent grave) einklammern
        - prüfen Sie mit `phpMyAdmin` ob die Datenbankeinträge korrekt erstellt werden

      



 

### Sessionmanagement und Sicherheit

1. Der Kunde soll auf seiner Statusseite nur diejenigen Pizzen sehen, die er selbst zuletzt bestellt hat. Implementieren Sie dieses Feature mittels **Sessionverwaltung**:  

      Speichern Sie die letzte `AuftragsNr` in der Session und filtern Sie damit die Pizzaliste

2. Verhindern Sie **SQL-Injection** mit Hilfe von `real_escape_string`.  

      Test: geben Sie `/ ' " \` als Lieferadresse ein; diese Zeichen müssen auf der Fahrerseite genau so erscheinen.

3. Verhindern Sie **Cross Site Scripting** mit Hilfe von `htmlspecialchars`.  

      Test
      : geben Sie `<b>xxx</b>` als Lieferadresse ein; dies muss genau so in der Datenbank und in der Ausgabe auf der Fahrerseite erscheinen

4. Testen und validieren Sie die generierten Seiten.



## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Durchführung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Implementierung der Seiten `Bestellung.php`, `Kunde.php`, `Baecker.php` und `Fahrer.php` mittels Seitenklassen und (optional) Blockklassen.
    - [ ] Implementierung der Datenbankzugriffe mittels `MySQLi`
    - [ ] Sessionmanagement auf der Kundenseite
    - [ ] Absicherung der Web-Applikation gegen SQL-Injection und Cross-Site-Scripting (XSS)





