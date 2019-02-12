<!-- # Erstellung des Seitengrundgerüsts mittels PHP -->
# PHP: Erste Schritte


!!! abstract
    **Lernziele**

    - [x] Sie können einen Webserver installieren und Ihre Shopseiten dort deployen
    - [x] Sie können ersten PHP-Code schreiben um damit HTML-Code zu erzeugen
    - [x] Sie verstehen die grundlegende Funktionsweise eines Webservers


In dieser Einheit geht es darum, sich mit den Grundprinzipien der dynamischen Seitengenerierung mittels PHP und der zugrunde liegenden technischen Infrastruktur (Webserver etc.) auseinander zu setzen.

<!-- !!! note
    **Hinweis #1:** Wenn Sie zum Testen und Debuggen Ihr eigenes Handy verwenden wollen, bringen Sie bitte ein passendes USB-Kabel mit. Im Normalfall ist das Kabel des Ladegeräts dazu geeignet. Verbinden Sie das Handy via USB-Kabel mit dem Entwicklungs-PC (Ihr Notebook oder der Labor-PC), schalten Sie das Handy ein, aktivieren Sie Entwickleroptionen und darin USB-Debugging. -->

## Aufgaben

### Installation und Konfiguration von XAMPP
1. Laden Sie sich das **XAMPP-Installationspaket** für das Betriebssystem Ihres Laptops herunter und installieren Sie dies.
2. Starten Sie den Webserver mittels dem **XAMPP-Dienstprogramm** 
3. Testen Sie, durch Eingabe der **Adresse** `127.0.0.1`, ob der Webserver läuft und ob die Startseite (--> Dashboard) angezeigt wird.
4. Lokalisieren Sie den Ordner `htdocs` innerhalb Ihres XAMPP-Installationsordners und erzeugen Sie dort ein neues **Projektverzeichnis** (bspw. `.../htdocs/pizzaservice/`) für die Quelldateien des Pizzaservice.
5. Kopieren Sie die in [Termin 0: HTML](termin0.md) erstellten statischen **HTML-Dateien** in das neu erstellte Projektverzeichnis (legen Sie hierzu einen neuen Unterordner, bspw. `/html/` an) und überprüfen Sie im Browser, ob Sie die Dateien mittels der entsprechenden **URL** (bspw. `http://127.0.0.1/pizzaservice/html/bestellung.html`) aufrufen können.

### Erzeugung der Seitengrundgerüste mit PHP

1. Erstellen Sie je eine **PHP-Seite** für 
      1. Bestellung
      2. Bäcker
      3. Fahrer  

    und versuchen Sie, den HTML-Code (--> siehe [Termin 0: HTML](termin0.md)) der jeweiligen Seiten mit PHP zu erzeugen.

2. Deployen Sie die Seiten in im **Projektverzeichnis** Ihrer XAMPP-Installation und stellen Sie sicher, dass die Seiten korrekt aufgerufen werden.

3. Testen Sie den generierten HTML-Code auf **Standardkonformität** mittels geeigneter HTML5-Validatoren (--> Siehe [Aufgabe #3 (Testen)](termin0.md#testen) aus Termin 0: HTML).


### (optional) Anlegen der Datenbankstruktur mittels phpmyadmin

--> Siehe [Aufgabe #2 (Datenbankzugriff)](termin2.md) aus Termin 2: PHP – Seitenklassen und Datenbankzugriff mit MySQLi.

### {Aufgabe 3}

## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Testierung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Paper Prototypes ihrer Applikation
    - [ ] Analyseklasse
    - [ ] Reflexion des User Tests (--> _mündlich_)
    <!-- - [ ] Navigationsübersicht -->