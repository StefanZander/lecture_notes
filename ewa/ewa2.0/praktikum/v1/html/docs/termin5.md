# Abnahme und Testierung

!!! warning
    **Wichtig**:  
    Die 5. übungseinheit dient ausschließlich der **Abnahme** Ihrer Applikation, d.h., es sind **keine Implementierungsarbeiten** mehr erlaubt!

## Allgemeines

### Vorbereitung

- Stellen Sie vor Beginn(!) der Einheit sicher, dass Ihre Applikation inkl. der Testfälle vollständig und funktionstüchtig ist
- Gehen Sie *vor* Beginn der Übungseinheit die [angehängte Checkliste](termin5.md#checkliste-fur-die-abnahme) durch überprüfen Sie, dass alle Punkte erfüllt sind
- Sehen Sie auch nochmal im Kapitel [Anforderungen an die zu entwickelnde Web-Applikation](anforderungen.md) nach, dass Sie keine Anforderung vergessen oder übersehen haben!
- Die Abnahme findet an einem Ihrer Entwicklungsrechner statt 
- Mock-ups werden nicht akzeptiert 
- Öffnen Sie die Applikation auf zwei unterschiedlichen Browsern und ordnen Sie die Browserfenster nebeneinander an.
- Öffnen Sie parallel auch die Datenbank (--> `phpmyadmin`) und entfernen Sie vorab alle Testdaten.



### Bei der Abnahme...

- ...wird die Funktionstüchtigkeit der Applikation überprüft
- ...wird überprüft, ob der Bestellprozess fehlerfrei durchgeführt werden kann und ob Sie alle Anforderungen umgesetzt haben
- ...sollten Sie Ihren Code verstehen und erklären können
- ...sollten Sie insgesamt gut vorbereitet sein und inhaltliche bzw. technische Fragen sicher beantworten können.


## Checkliste für die Abnahme

Für eine erfolgreiche Abnahme müssen **alle Punkte** erfüllt sein!

!!! abstract
    **Checkliste**

    1. [ ] Keine Tabellen im Quellcode enthalten
    2. [ ] Verwendung von PHP-Seiten- oder Blockklassen
    3. [ ] Gesamter Bestellprozess funktioniert fehlerfrei
    4. [ ] Alle Seiten werden vom W3C Validator als fehlerfrei erkannt
    5. [ ] Responsives Layout + Verwendung von Media Queries
    6. [ ] Automatische Seitenaktualisierung bei Statusänderungen
    7. [ ] Absicherung der Web-Applikation gegen Cross-Site-Scripting (XSS)
    8. [ ] Absicherung gegen SQL-Injection
    9. [ ] Daten werden korrekt in die DB geschrieben
    10. [ ] Benutzer sieht nur die eigene Bestellung (Test mit 2 versch. Browsern)
    11. [ ] Aktualisierung der Kundenseite mittel AJAX und JSON
    12. [ ] Einsatz der Seitenklassenarchitektur beim PHP Controller
    13. [ ] Validierung der Benutzereingaben mittels JavaScript
    14. [ ] Statusänderung bei Radiobuttons führt zur Aktualisierung der Datenbank
    15. [ ] Einzelne Positionen einer Bestellung werden auf der Bäcker-Seite angezeigt
    16. [ ] Bestellung verschwindet auf Fahrer-Seite nach Auslieferung
    17. [ ] Bestellung verschwindet von Bäcker-Seite nach Fertigstellung aller Pizzas 

