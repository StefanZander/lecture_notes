# Kennen lernen von HTML und Anforderungsanalyse (--> zu Hause)


!!! abstract
    **Lernziele**

    - [x] Sie können einfache HTML Seiten mit einem beliebigen Texteditor oder IDE erstellen
    - [x] Sie verstehen die Grundstruktur einer HTML Seite
    - [x] Sie kennen die wichtigsten Elemente von Formularen
    - [x] Sie verstehen sämtliche Anforderungen an das gewählte Shopsystem (Pizzaservice etc.) und haben Ungereimtheiten und Inkonsistenzen mit der/dem Dozenten/in abgeklärt  

!!! note
    **Hinweis #1:** Wenn Sie zum Testen und Debuggen Ihr eigenes Handy verwenden wollen, bringen Sie bitte ein passendes USB-Kabel mit. Im Normalfall ist das Kabel des Ladegeräts dazu geeignet. Verbinden Sie das Handy via USB-Kabel mit dem Entwicklungs-PC (Ihr Notebook oder der Labor-PC), schalten Sie das Handy ein, aktivieren Sie Entwickleroptionen und darin USB-Debugging.

## Rohform des Shopsystems mit statischem HTML

1. Realisieren Sie alle Seiten mit **HTML5** unter Berücksichtigung der nachstehenden Hinweise:
    - Erstellen Sie nur die "Rohform", d.h., keine physische Formatierung, kein CSS, kein JavaScript etc.
    - Verwenden Sie strukturierende Tags wie `<section>` statt `<div>` für die globale Seitenstruktur
    -  schreiben Sie Umlaute und das €-Zeichen direkt in Ihre Dateien (also nicht als "named character entities / benannte Zeichen" wie &auml; etc.)
    - Achten Sie auf ordentliche Formatierung des HTML-Quelltextes! 
    - Schicken Sie die Formulardaten an das echo-Skript (siehe Tipps)
    - Verzichten Sie auf den Einsatz von HTML-Tabellen!
    - Testen Sie Ihre Seiten mit unterschiedlichen Browsern und validieren Sie die Standardkonformität mittels gängigen Web-basierten HTML5 Validatoren

2. Werkzeuge
    - verwenden Sie einen Editor ihrer Wahl
    - verwenden Sie als Codierung UTF-8 und schreiben Sie alle Dateien in UTF-8 ohne BOM (wegen PHP)

3. Realisieren Sie zunächst auch diejenigen Seiten statisch, die später dynamisch aus der Datenbank generiert werden sollen
    - Tragen Sie Beispieldaten ein – so dass klar ist, was später generiert werden muss 
    - trennen Sie statische und generierte Daten voneinander

4. 
