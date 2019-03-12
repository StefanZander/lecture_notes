# Anforderungsanalyse und Selbststudium von HTML (--> zu Hause)

!!! abstract
    **Lernziele**

    - [x] Sie verstehen sämtliche Anforderungen an das Shopsystem (Pizzaservice o.ä.) bzw. haben Ungereimtheiten und Inkonsistenzen zur Klärung mit der/dem Dozenten/in aufgelistet
    - [x] Sie können einfache, statische HTML Seiten erstellen
    - [x] Sie verstehen die Grundstruktur einer HTML Seite
    - [x] Sie kennen die wichtigsten Elemente und die Funktionsweise von Formularen

<!-- Nö, das müssen doch alle machen!
!!! note
    **Hinweis:** Diese Einheit ist vor allem für diejenigen Studierenden, die bisher noch **keine Erfahrungen** mit HTML bzw. der Erstellung von Web-Seiten gesammelt haben. Erfahrene Studierende können gleich mit [Termin 1](termin1.md) beginnen.
-->

## Aufgaben

!!! note
    **Hinweis**: Es wird erwartet, dass jede\(r\) Studierende diese Aufgaben selbständig und vollständig **vor dem Praktikumstermin** erledigt! 

### Einarbeitung 

1. Lesen Sie die **komplette Praktikumsaufgabe**, um einen Eindruck davon zu bekommen, was Sie im Laufe des Semesters erwartet und welche Arbeiten für eine **erfolgreiche Testierung** notwendig sind.
2. Vergewissern Sie sich, dass Sie alle im Kapitel [Vorbemerkungen](vorbemerkung.md) genannten Informationen verstanden haben 
3. Es wird erwartet, dass Sie HTML-Code schreiben können. Verwenden Sie z.B. die folgende [Kurzreferenz](https://websitesetup.org/HTML5-cheat-sheet.pdf) für einen schnellen Überblick über die Anweisungen.
4. Installieren Sie einen **HTML-Editor (IDE)** Ihrer Wahl. Verwenden Sie einen Editor mit Syntax-Hervorhebung für HTML, CSS und PHP (z.B. Notepad++), in dem Sie den Code / die HTML-Tags etc. selbst erstellen können. Verwenden Sie bitte keine "Luxuseditoren", die HTML & Co. verbergen.
<!-- 
4. Vergewissern Sie sich, dass Ihr Laptop einsatzbereit und funktionstüchtig ist.
-->

### Anforderungsanalyse

1. Stellen Sie sicher, dass Sie die Anforderungen der Aufgabe "Pizzaservice" (sowohl vom Auftraggeber als auch sonstige Vorgaben) genau verstanden haben 
2. Dokumentieren Sie offene Punkte zur Klärung


### Rohform des Shopsystems mit statischem HTML

1. Realisieren Sie alle Seiten (`Bestellung`, `Kunde`, `Bäcker`, `Fahrer` (und eventuell `Übersicht`) mit **HTML5** unter Berücksichtigung der nachstehenden Hinweise:

    - Verwenden Sie das folgende (standardkonforme) Grundgerüst für Ihre HTML-Dateien:
        ``` html 
        <!DOCTYPE html>
        <html lang="de">  
        <head>
            <meta charset="UTF-8" />
            <!-- für später: CSS include -->
            <!-- <link rel="stylesheet" href="XXX.css"> -->
            <!-- für später: JavaScript include -->
            <!-- <script src="XXX.js"></script> -->
            <title>Text des Titels</title>
        </head>
        <body>
            <p>Eigentlicher Inhalt</p>
        </body>
        </html>
        ```

    - Verwenden Sie als Codierung **UTF-8** und speichern Sie alle Dateien im Dateiformat **UTF-8 (ohne BOM)**
    - Erstellen Sie nur die "Rohform", d.h., *keine physische Formatierung*, kein CSS, kein JavaScript etc.
    - Verwenden Sie strukturierende Tags wie `<section>` statt `<div>` für die globale Seitenstruktur
    - Schreiben Sie Umlaute und das €-Zeichen direkt in Ihre Dateien (verwenden Sie also z.B. das "ä" und nicht das benannte Zeichen  `:::html &auml;`)
    - Achten Sie auf ordentliche Formatierung des HTML-Quelltextes! 
    - {==Verzichten Sie auf den Einsatz von HTML-Tabellen!==}{>>Das würde ich erst später thematisieren wollen!? Wie wäre es mit: Verwenden Sie keine HTML-Tabellen um Elemente anzuordnen (d.h. zu Layout-Zwecken)!<<}


2. Realisieren Sie zunächst auch diejenigen Inhalte statisch, die später dynamisch aus der Datenbank generiert werden sollen
    - Tragen Sie Beispieldaten ein – so dass klar ist, was später generiert werden muss 
    - Trennen Sie statische und generierte Daten voneinander

3. Sorgen Sie dafür, dass die Fahrerseite und die Bäckerseite abgeschickt werden, wenn ein Radiobutton angeklickt wird. Dazu geben Sie dem &lt;form&gt;, das die Radiobuttons umschließt, eine ID (z.B. `:::html <form id="formid">`) und verwenden diese ID bei den Radiobuttons um das Formular beim Anklicken abzuschicken: 
`:::html <input type="radio" name=... 	onclick="document.forms['formid'].submit();" />`
{==Alternativlösung==}{>>Wir könnten auch temporär einen Submit-Button fordern (und später in der JS-Übung ersetzen lassen!?)<<}

### Überprüfung der Ergebnisse
1. {==Bilder der HTML-Seiten==}{>>Hier fehlen mir die Bilder der reinen HTML-Seiten. Ansonsten wüsste ich als Studi nicht wirklich was ich tun soll und was nicht!<<}
2. Schicken Sie die Formulardaten an das Echo-Skript `https://echo.fbi.h-da.de/` oder nutzen Sie einen HTTP-Traffic–Analyzer-Dienst wie `https://pipedream.com/`. Analysieren Sie die übertragenen Daten hinsichtlich Korrektheit, Vollständigkeit und Angemessenheit für den aktuellen Anwendungsfall.
3. Testen Sie Ihre Seiten mit unterschiedlichen Browsern und validieren Sie die Standardkonformität mittels gängigen webbasierten **HTML5 Validatoren**.  
 
    Nutzen Sie 

      1. <https://validator.w3.org/#validate_by_input> oder <https://html5.validator.nu/>
      2. HTML-Lint <http://www.htmllint.net/en/html-lint/htmllint.html> {==Lint??==}{>>Strenger und genauer - aber für die Vorbereitung?? Eventuell Lint erst in der 1. Übung fordern!?!?)<<}

4. Korrigieren Sie etwaige Fehler und Warnungen.
{==Abschicken eines Arrays mit Pizzen==}{>>Bisher habe ich immer geprüft, ob die Studis die eckigen Klammern hinter dem name-Attribut für die Bestellung haben. Wenn das fehlt, sucht man in PHP bis zur Verzweiflung! Wie könnten wir das prüfen?)<<}

## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Durchführung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Statische und validierte HTML-Seiten für Bestellung, Bestellstatus, Bäcker und Fahrer
    - [ ] Funktionierende Formulare mit entsprechend gesetztem Endpoint

