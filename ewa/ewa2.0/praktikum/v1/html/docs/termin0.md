# Kennen lernen von HTML und Anforderungsanalyse (--> zu Hause)


!!! abstract
    **Lernziele**

    - [x] Sie können einfache HTML Seiten mit einem beliebigen Texteditor oder IDE erstellen
    - [x] Sie verstehen die Grundstruktur einer HTML Seite
    - [x] Sie kennen die wichtigsten Elemente und die Funktionsweise von Formularen
    - [x] Sie verstehen sämtliche Anforderungen an das gewählte Shopsystem (Pizzaservice etc.) und haben Ungereimtheiten und Inkonsistenzen mit der/dem Dozenten/in abgeklärt  

!!! note
    **Hinweis:** Diese Einheit ist vor allem für diejenigen Stuiderenden, die bisher noch **keine Erfahrungen** mit HTML bzw. der Erstellung von Web-Seiten gesammelt haben. Erfahrene Studierende können gleich mit [Termin 1](termin1.md) beginnen.

## Vorbereitung
1. Lesen Sie sich einmal die **kompletten Praktikumsaufgaben** durch, um einen Eindruck davon zu bekommen, was Sie im Laufe des Semesters erwartet und welche Arbeiten für eine **erfolgreiche Testierung** notwendig sind.
2. Vergewissern Sie sich, dass Sie alle im Kapitel [Vorbemerkungen](vorbemerkung.md) genannten Informationen verstanden haben 
4. Installieren Sie einen **HTML-Editor (IDE)** Ihrer Wahl
5. Vergewissern Sie sich, dass Ihr Laptop einsatzbereit und funktionstüchtig ist



## Aufgaben

### Anforderungsanalyse

1. Stellen Sie sicher, dass Sie die Aufgabe "Pizzaservice" genau verstanden haben und klären Sie offene Punkte frühzeitig
2. Analysieren Sie sämtliche Vorgaben (sowohl vom Auftraggeber als auch interne Vorgaben) 
3. Identifizieren Sie Inkonsistenzen und offene Punkte und klären Sie die Fragen mit Ihrem Betreuer / Ihrer Betreuerin


### Rohform des Shopsystems mit statischem HTML

1. Realisieren Sie alle Seiten (Bestellung, Kunde, Bäcker, Fahrer --> siehe [Anforderungen des Auftraggebers](anforderungen.md#anforderungen-des-auftraggebers)) mit **HTML5** unter Berücksichtigung der nachstehenden Hinweise:

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

Die folgenden Ergebnisse müssen für eine erfolgreiche Durchführung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Statische und validierte HTML-Seiten für Bestellung, Bestellstatus, Bäcker und Fahrer
    - [ ] Funktionierende Formulare mit entsprechend gesetztem Endpoint

