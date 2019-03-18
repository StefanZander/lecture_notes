# PHP: Webserver Setup und Erzeugung von Webseiten mit PHP


!!! abstract
    **Lernziele**

    - [ ] Sie können einen Webserver installieren und so konfigurieren, dass er Ihre Shopseiten ausliefert
    - [ ] Sie können HTML-Code mittels PHP erzeugen
    - [ ] Sie verstehen die grundlegende Funktionsweise der dynamischen Generierung von Webseiten


In dieser Einheit geht es darum, sich mit den Grundprinzipien der **Seitengenerierung mittels PHP** und der zugrunde liegenden **technischen Infrastruktur** (Webserver, PHP-Interpreter, etc.) auseinander zu setzen.

## Vorbereitung
1. Erledigen Sie die komplette Übung [Termin 0](termin0.md) im Selbststudium. Sie haben anschließend eine Liste mit Fragen zu unklaren Anforderungen und die Bestellseite in der HTML-Rohform.

!!! warning
    **Hinweis**: Wenn Sie diese Voraussetzung nicht **zu Beginn der Übung** zeigen können, erhalten Sie kein Testat für die vorherige Übung, sondern eine Verwarnung (**"gelbe Karte"**)!

## Aufgaben

### Prüfung der HTML-Rohform
   1. Wenn Ihre Webseite die Prüfung mit dem HTML-Validator <https://validator.w3.org/#validate_by_input> oder <https://html5.validator.nu/> fehlerfrei besteht (vgl. Vorbereitung), dann laden Sie den HTML-Code Ihrer Bestellseite hoch zu **HTML-Lint** (<http://www.htmllint.net/en/html-lint/htmllint.html>).
  Analysieren Sie die Meldungen und korrigieren Sie den HTML-Code entsprechend. Versuchen Sie, alle Meldungen zu beseitigen.
  2. Wenn Sie ein Formularelement verwenden, das **mehrere Einträge übertragen** kann (wie z.B. &lt;select&gt;), dann hängen Sie an das name-Attribut dieses Elements zwei Arrayklammern an [], damit die Werte als Array übertragen werden. Schicken Sie das Formular auf Ihrer Bestellseite ab an das Echo-Skript `https://echo.fbi.h-da.de/`. Zeigen Sie das Ergebnis Ihrem Betreuer.

### Installation und Konfiguration von XAMPP
1. Laden Sie das **XAMPP-Installationspaket** für das Betriebssystem Ihres Laptops herunter unter [www.apachefriends.org/de](https://www.apachefriends.org/de) und installieren Sie es mit Apache, PHP und MariaDB im manuellen Modus (nicht als Service). 
2. Öffnen Sie über das XAMPP-Dienstprogramm die **Konfiguration des Apache** (httpd.conf) und suchen Sie eine Zeile die mit dem Schlüsselwort `Listen` beginnt. Ersetzen Sie diese Zeile durch `Listen 127.0.0.1:80`. Dann akzeptiert Apache nur noch lokale Aufrufe und Ihr Webserver ist für andere Netzwerkadressen nicht erreichbar. 
3. Starten Sie den Webserver mittels dem **XAMPP-Dienstprogramm**. Testen Sie, durch Eingabe der Adresse `127.0.0.1`, ob der Webserver läuft und ob die Startseite (--> Dashboard) angezeigt wird.
4. Lokalisieren Sie den Ordner `htdocs` innerhalb Ihres XAMPP-Installationsordners und erzeugen Sie dort ein neues **Projektverzeichnis** (bspw. `.../htdocs/pizzaservice/`) für die Quelldateien des Pizzaservices.
5. Kopieren Sie die als Vorbereitung erstellte Bestellseite in das neu erstellte Projektverzeichnis und überprüfen Sie im Browser, ob Sie die Dateien mittels der entsprechenden **URL** (bspw. `http://127.0.0.1/pizzaservice/bestellung.html`) aufrufen können.

### Erzeugung der HTML-Seite mit PHP

1. Erstellen Sie eine **PHP-Seite** `bestellung.php` und versuchen Sie, den für die Darstellung im Browser gewünschten **HTML-Code** der jeweiligen Seite mit PHP zu erzeugen. (Tipp: Verwenden Sie die <a href="http://php.net/manual/de/language.types.string.php#language.types.string.syntax.heredoc" target="blank">Heredoc-Notation</a> . Beachten Sie unbedingt die Warnung zur strengen Syntax der Heredoc-Notation).
2. Deployen Sie die Seite im **Projektverzeichnis** Ihrer XAMPP-Installation und stellen Sie sicher, dass die PHP-Seite korrekt aufgerufen werden kann: <http://127.0.0.1/pizzaservice/bestellung.php>
3. Testen Sie, ob der HTML-Code korrekt erzeugt wurde, indem Sie den Quellcode aus dem Browser kopieren und mittels eines HTML5-Validators erneut überprüfen!

### Entwicklung der übrigen Seiten des Pizzaservices
1. Setzen Sie analog die übrigen Seiten `Bäckerseite`, `Fahrerseite` und `Kundenseite` um. Zuerst erstellen Sie die HTML-Rohform,  prüfen die Standardkonformität und die Funktion der Formulare wie oben beschrieben. Im Gegensatz zur Designskizze sollen die Fahrer- und die Bäckerseite aber bis auf Weiteres über einen Submit-Button abgeschickt werden (Später werden Sie diese Lösung mit JavaScript so anpassen, dass sie den Anforderungen entspricht).
2. Passen Sie die Seiten so an, dass sie über den PHP-Interpreter und den Webserver ausgeliefert werden. Prüfen Sie den erzeugten HTML-Code erneut mit einem Validator.
   

## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Durchführung der Praktikumseinheit vorliegen:

## Nachbereitung
Setzen Sie noch eventuell fehlende Teile der obigen Aufgabe bis zum nächsten Praktikumstermin um. 

!!! abstract
    __Ergebnisse:__

    - [x] Lauffähige Installation und Konfiguration des Apache Webservers
    - [x] Generierung von validen und standardkonformen HTML5-Seiten mit PHP
    - [x] Auslieferung von dynamisch erstellten Webseiten über den Webserver und den PHP-Interpreter 