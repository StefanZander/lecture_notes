<!-- # Erstellung des Seitengrundgerüsts mittels PHP -->
# PHP: Webserver Setup und dynamische Seitengenerierung


!!! abstract
    **Lernziele**

    - [x] Sie können einen Webserver installieren und Ihre Shopseiten dort deployen
    <!-- - [x] Sie können ersten PHP-Code schreiben um damit HTML-Code zu erzeugen -->
    - [x] Sie können den HTML-Code Ihres Shopsystems mittels PHP erzeugen
    - [x] Sie verstehen die grundlegende Funktionsweise der dynamischen Seitengenerierung


In dieser Einheit geht es darum, sich mit den Grundprinzipien der **dynamischen Seitengenerierung mittels PHP** und der zugrunde liegenden **technischen Infrastruktur** (Webserver, Datenbankserver, etc.) auseinander zu setzen.

<!-- !!! note
    **Hinweis #1:** Wenn Sie zum Testen und Debuggen Ihr eigenes Handy verwenden wollen, bringen Sie bitte ein passendes USB-Kabel mit. Im Normalfall ist das Kabel des Ladegeräts dazu geeignet. Verbinden Sie das Handy via USB-Kabel mit dem Entwicklungs-PC (Ihr Notebook oder der Labor-PC), schalten Sie das Handy ein, aktivieren Sie Entwickleroptionen und darin USB-Debugging. -->

## Vorbereitung
1. Lesen Sie sich einmal die **kompletten Praktikumsaufgaben** durch, um einen Eindruck davon zu bekommen, was Sie im Laufe des Semesters erwartet und welche Arbeiten für eine **erfolgreiche Testierung** notwendig sind.
2. Vergewissern Sie sich, dass Sie alle im Kapitel [Vorbemerkungen](vorbemerkung.md) genannten Informationen verstanden haben 
3. Stellen Sie sicher, dass Sie alle [Anforderungen](anforderungen.md) vollständig verstanden haben.

    !!! note
        **Hinweis:**
        Notieren Sie sich die unklaren Anforderungen und besprechen Sie diese in [Einheit #1](termin1.md) mit der/dem Dozentin/en.

4. Bestimmen Sie, ob Sie den Standard-Pizzaservice oder ein eigenes Shopsystem implementieren
5. Vergewissern Sie sich, dass Ihr Laptop funktionstüchtig ist und dass Sie eine passende IDE ausgewählt haben.
   

## Aufgaben

### Prüfung der Vorbereitung
  1. {==HTML-Lint <http://www.htmllint.net/en/html-lint/htmllint.html>==}
  2. {==Abschicken eines Arrays mit Pizzen==}{>>Bisher habe ich immer geprüft, ob die Studis die eckigen Klammern hinter dem name-Attribut für die Bestellung haben. Wenn das fehlt, sucht man in PHP bis zur Verzweiflung! Wie könnten wir das prüfen?)<<}

### Installation und Konfiguration von XAMPP
1. Laden Sie sich das **XAMPP-Installationspaket** für das Betriebssystem Ihres Laptops herunter und installieren Sie dies.
2. Starten Sie den Webserver mittels dem **XAMPP-Dienstprogramm** 
3. Testen Sie, durch Eingabe der **Adresse** `127.0.0.1`, ob der Webserver läuft und ob die Startseite (--> Dashboard) angezeigt wird.
4. Lokalisieren Sie den Ordner `htdocs` innerhalb Ihres XAMPP-Installationsordners und erzeugen Sie dort ein neues **Projektverzeichnis** (bspw. `.../htdocs/pizzaservice/`) für die Quelldateien des Pizzaservice.
5. Kopieren Sie die in [Termin 0: HTML](termin0.md) erstellten statischen **HTML-Dateien** in das neu erstellte Projektverzeichnis (legen Sie hierzu einen neuen Unterordner, bspw. `/html/` an) und überprüfen Sie im Browser, ob Sie die Dateien mittels der entsprechenden **URL** (bspw. `http://127.0.0.1/pizzaservice/html/bestellung.html`) aufrufen können.

### Erzeugung der Seitengrundgerüste mit PHP

1. Erstellen Sie je eine **PHP-Seite** für 
      1. Bestellung
      2. Kunde (--> Bestellstatus)
      3. Bäcker
      4. Fahrer  

    und versuchen Sie, den für die Darstellung im Browser notwendigen **HTML-Code** (--> siehe [Termin 0: HTML und Anforderungsanalyse](termin0.md)) der jeweiligen Seite mit PHP zu erzeugen.

2. Deployen Sie die Seiten im **Projektverzeichnis** Ihrer XAMPP-Installation und stellen Sie sicher, dass die Seiten korrekt aufgerufen werden.

3. Testen Sie den generierten HTML-Code auf **Standardkonformität** mittels geeigneter HTML5-Validatoren (--> Siehe [Aufgabe #3 (Testen)](termin0.md#testen) aus Termin 0: HTML).


### (optional) Anlegen der Datenbankstruktur mittels phpmyadmin

--> Siehe [Aufgabe #2 (Datenbankzugriff)](termin2.md#datenbankzugriff-mittels-mysqli) aus Termin 2: PHP – Seitenklassen und Datenbankzugriff mit MySQLi.


## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Durchführung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Lauffähige Instanz des Apache Webservers
    - [ ] Implementierung der Seiten `Bestellung.php`, `Kunde.php`, `Baecker.php` und `Fahrer.php`
    - [ ] Deployment der Seiten `Bestellung.php`, `Kunde.php`, `Baecker.php` und `Fahrer.php` im `htdocs`-Order der XAMPP Installation
    - [ ] Validierung des generierten HTML5-Codes hinsichtlich Fehlerfreiheit und Standardkonformität
    - [ ] (optional) Aufbau und Einrichtung der MySQL-Datenbank