# Abnahme mit responsivem Design

## Allgemeines

!!! warning
    **Wichtig**:  
    Die 5. Übung dient ausschließlich der **Abnahme** Ihrer Applikation, d.h., es sind **keine Implementierungsarbeiten** mehr erlaubt!

##Vorbereitung

!!! abstract  
    **Erledigen Sie diese Aufgaben VOR dem Übungstermin**

     1. Voraussetzung zur Abnahme:     
          Ihre vier Seiten sind vollständig und voll funktional. Die Abnahme überprüft das Gesamtprojekt - das heißt alle Ergebnisse aus den vorangegangenen Übungen funktionieren im Zusammenspiel.
          - Sie haben mittlerweile auch ein responsives Design entwickelt und umgesetzt
          - Gehen Sie *vor* Beginn der Übung die [Checkliste](termin5.md#checkliste-fur-die-abnahme) durch und stellen Sie sicher, dass alle Punkte erfüllt sind.
          - Sehen Sie auch nochmal im Kapitel [Anforderungen an die zu entwickelnde Web-Applikation](anforderungen.md) nach, dass Sie keine Anforderung vergessen oder übersehen haben!
          - Die Abnahme findet an einem Ihrer Entwicklungsrechner statt. Stellen Sie sicher, dass sich darauf 2 unterschiedliche Browser und der konfigurierte Webserver befinden.    
          
     2. Bei der Abnahme wird die Funktionstüchtigkeit Ihrer Applikation überprüft. Dazu...    
          - ...öffnen Sie Ihre Webanwendung in zwei unterschiedlichen Browsern und ordnen die Browserfenster nebeneinander an.
          - ...öffnen Sie parallel auch die Datenbank (--> `phpmyadmin`) und entfernen Sie vorab alle Daten von alten Bestellungen.
          - ...sollten Sie Ihren Code verstehen und erklären können
          - ...sollten Sie insgesamt gut vorbereitet sein und inhaltliche bzw. technische Fragen sicher beantworten können.
          - ...wird überprüft, ob der Bestellprozess fehlerfrei durchgeführt werden kann und ob Sie alle Anforderungen umgesetzt haben    


## Checkliste für die Abnahme

Für eine erfolgreiche Abnahme müssen **alle Punkte** erfüllt sein!

!!! note
    **Checkliste**

    1. Allgemeines
         - [ ] Konsequente Verwendung der PHP-Seitenklassen für alle Seiten und auch für den PHP Controller {++Für mich ist das kein Controller (vgl. MVC)! Deshalb habe ich mich um den Namen drumrumgedrückt++}
         - [ ] Alle generierten Seiten werden vom W3C Validator als fehlerfrei erkannt {++ und HTML Lint zeigt keine Meldungen mit Schwierigkeitsgrad > 2 ?++}
         - [ ] Die Web-Applikation ist gesichert gegen Cross-Site-Scripting (XSS) und gegen SQL-Injection
         - [ ] Erfasste Daten werden (bis auf Angriffsversuche) unverändert in die Datenbank geschrieben 
         - [ ] Es sind keine Tabellen im HTML-Code enthalten {++Das wird knifflig mit so wenig CSS!? Wenn, dann auch vorne fordern!++} 
         - [ ] Es gibt entweder eine Übersichtsseite oder eine ausblendbare Navigationsleiste mit Links zu den 4 Hauptseiten. 
    2. Funktion 
         - [ ] Eine direkt in die Datenbank eingetragene Pizza erscheint nach einem Reload auf der Speisekarte
         - [ ] Der Warenkorb erlaubt das Löschen von einzelnen Pizzen und von allen Pizzen und rechnet korrekt
         - [ ] Die Bestellung kann erst abgeschickt werden, wenn sich mindestens eine Pizza im Warenkorb befindet und das Adressfeld nicht leer ist. Vorher ist der "Bestellen"-Knopf deaktiviert.
         - [ ] Wenn man 2 Bestellungen in verschiedenen Browsern abschickt, sieht der jeweilige Browser (Kunde) nur die eigene Bestellung.
         - [ ] Die Kundenseite wird nach der Bestellung geöffnet und aktualisiert sich ohne Neuladen (mit AJAX). Statusänderung auf der Bäcker- oder Fahrerseite werden kurz darauf auf der Kundenseite angezeigt.
         - [ ] Die Fahrer- und Bäckerseite laden sich alle 5 Sekunden neu
         - [ ] Die Bäckerseite zeigt alle bestellten Pizzen
         - [ ] Fertig gebackene Pizzen verschwinden erst von der Bäckerseite, wenn *alle* Pizzen der Bestellung fertig sind
         - [ ] Bestellungen verschwinden nach der Auslieferung von der Fahrerseite 
         - [ ] HTML-Tags im Adressfeld einer Bestellung (XSS) werden auf der Fahrerseits **nicht** ausgeführt
    3. Layout
         - [ ] Responsives Layout + Verwendung von Media Queries {++ Was heißt das konkret ++}
         - [ ] Ansprechendes Design
         - [ ] Auf der Bestellseite rutscht der Warenkorb je nach Bildschirmbreite neben oder unter die Speisekarte
         - [ ] Keine Verwendung von absoluten Maßeinheiten (außerhalb von Media Queries)


## Nachbereitung
Verbessern Sie die Qualität Ihrer Lösung indem Sie den Code aufräumen und kommentieren! Sie werden diesen Code bestimmt in der Klausur verwenden wollen. Dann ist es hilfreich, wenn Sie sich schnell im Code zurecht finden. Auch wenn diese Nachbereitung nicht mehr Bestandteil des Praktikums ist, so ist diese Tätigkeit dennoch eine wertvolle Vorbereitung auf die Prüfung.