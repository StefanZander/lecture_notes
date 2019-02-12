# Kennen lernen von HTML und Anforderungsanalyse (--> zu Hause)


!!! abstract
    **Lernziele**

    - [x] Sie können einfache HTML Seiten mit einem beliebigen Texteditor oder IDE erstellen
    - [x] Sie verstehen die Grundstruktur einer HTML Seite
    - [x] Sie kennen die wichtigsten Elemente von Formularen
    - [x] Sie verstehen sämtliche Anforderungen an das gewählte Shopsystem (Pizzaservice etc.) und haben Ungereimtheiten und Inkonsistenzen mit der/dem Dozenten/in abgeklärt  

<!-- !!! note
    **Hinweis #1:** Wenn Sie zum Testen und Debuggen Ihr eigenes Handy verwenden wollen, bringen Sie bitte ein passendes USB-Kabel mit. Im Normalfall ist das Kabel des Ladegeräts dazu geeignet. Verbinden Sie das Handy via USB-Kabel mit dem Entwicklungs-PC (Ihr Notebook oder der Labor-PC), schalten Sie das Handy ein, aktivieren Sie Entwickleroptionen und darin USB-Debugging. -->

## Aufgaben

### Anforderungsanalyse

1. Stellen Sie sicher, dass Sie die Aufgabe "Pizzaservice" genau verstanden haben und klären Sie offene Punkte frühzeitig
2. Analysieren Sie sämtliche Vorgaben (sowohl vom Auftraggeber als auch interne Vorgaben) 
3. Identifizieren Sie Inkonsistenzen und offene Punkte und klären Sie die Fragen mit Ihrem Betreuer


### Rohform des Shopsystems mit statischem HTML

1. Realisieren Sie alle Seiten mit **HTML5** unter Berücksichtigung der nachstehenden Hinweise:
    - Erstellen Sie nur die "Rohform", d.h., *keine physische Formatierung*, kein CSS, kein JavaScript etc.
    - Verwenden Sie strukturierende Tags wie `<section>` statt `<div>` für die globale Seitenstruktur
    - Schreiben Sie Umlaute und das €-Zeichen direkt in Ihre Dateien (also nicht als "named character entities / benannte Zeichen" wie &auml; etc.)
    - Achten Sie auf ordentliche Formatierung des HTML-Quelltextes! 
    - Schicken Sie die Formulardaten an das Echo-Skript `https://echo.fbi.h-da.de/` oder nutzen Sie einen HTTP-Traffic–Analyzer-Dienst wie `https://pipedream.com/`.
    - Verzichten Sie auf den Einsatz von HTML-Tabellen!


2. Realisieren Sie zunächst auch diejenigen Seiten statisch, die später dynamisch aus der Datenbank generiert werden sollen
    - Tragen Sie Beispieldaten ein – so dass klar ist, was später generiert werden muss 
    - Trennen Sie statische und generierte Daten voneinander

### Werkzeuge
<!-- Bitte beachten Sie folgende Hinweis: -->

1. Verwenden Sie einen Editor ihrer Wahl
2. Verwenden Sie als Codierung **UTF-8** und schreiben Sie alle Dateien in **UTF-8 ohne BOM** (wegen PHP)

### Testen
1. Testen Sie Ihre Seiten mit unterschiedlichen Browsern und validieren Sie die Standardkonformität mittels gängigen Web-basierten **HTML5 Validatoren**.  
 
    Nutzen Sie bspw. 

      1. <https://validator.w3.org/#validate_by_input>
      2. <https://html5.validator.nu/>

2. Korrigieren Sie etwaige Fehler und Warnungen.

## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Testierung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Statische und validierte HTML-Seiten für Bestellung, Bäcker und Fahrer
    - [ ] Funktionierende Formulare mit entsprechend gesetztem Endpoint

