# Das Exposé

`:::js header('Location: http://meineSeite.php/');`

!!! abstract
    **Lernziele**

    - [x] Sie kennen die wesentlichen Elemente und Struktur eines Exposés
    - [x] Sie kennen Rolle und Aufgabe eines Exposés
    - [x] Sie können ein Exposé zur Ihrer Abschlussarbeit analog der dargestellten Struktur verfassen


In dieser Einheit erfahren Sie, wie Sie das Exposé zu Ihrer Abschlussarbeit erstellen und welche Aspekte es beschreiben muss. 

##Aufbau

Dem Exposé sollte folgende Struktur zu Grunde liegen:

1. **Vorläufiger Titel** (=Arbeitstitel)  
   
      Der vorläufige Titel der Arbeit. Dieser kann sich selbstverständlich noch im weiteren Verlauf der Arbeit ändern.  

      Wichtig: Der Titel sollte die **Problemstellung widerspiegeln** und nur so lang wie nötig sein. Verwenden Sie ggf. einen **Untertitel** und halten Sie den Haupttitel so knapp wie möglich. Vermeiden Sie übermäßig lange oder komplexe Titel -- diese verwässern nur die eigentliche Zielsetzung der Arbeit. 

2. **Problemstellung**  

      Die Problemstellung ist eines der wesentlichen und wichtigsten Elemente eines Exposés. Hier legen Sie die spezifische Problemstellung, mit der sich Ihre Arbeit auseinandersetzt, dar.

      Die Problemstellung sollte knapp aber präzise beschrieben sein. Die Struktur kann dem [Prinzip der invertierten Pyramide](https://de.wikipedia.org/wiki/Prinzip_der_umgekehrten_Pyramide) folgen, d.h., die wesentlichen Probleme sollten zu Beginn genannt werden. Erst danach folgen Hintergrundinformationen sowie die Einbettung in den Arbeitskontext und ggf. weitere Einzelheiten.

      Häufig wird die Problemstellung wie eine Einleitung bzw. die Hinführung zu einem Thema formuliert. Das kann fallweise in Ordnung sein. Generell sollte aber die spezifische Problemstellung, mit der sich die Arbeit auseinandersetzt in Vordergrund stehen. 

      Ein weiteres Problem ist, dass die Problemstellung oftmals nicht konkret genug und sehr allgemein formuliert ist. Das ist aus mehreren Gründen problematisch. Die Arbeit soll einen konkreten Beitrag zur Beantwortung der Problemstellung liefern, und je konkreter die Problemstellung formuliert ist, desto klarer kann später die weitere Ausarbeitung erfolgen. Zudem lässt sich so leichter überprüfen, ob die Beiträge Ihrer Arbeit die aufgeworfene Problemstellung bereits hinreichend genau beantworten.


3. **Forschungsfragen**

    Der nächste sehr wichtige Bestandteil.

    Die Forschungsfragen definieren den Rahmen der Arbeit. Sie leiten sich aus der Problemstellung ab.

    Für die BA/MA empfiehlt es sich idR nicht mehr als 2-3 Forschungsfragen zu haben. Ggf. können Sie nachgelagerte oder untergeordnete Fragestellungen definieren. Die Hauptforschungsfragen sollten sich jedoch an der genannten Zahl orientieren.

    Wichtig: Forschungsfragen werden oftmals zu allgemein, zu unpräzise und nicht überprüfbar formuliert.

    !!! note
        Ein Beispiel:  
        
        _"Wie lassen sich Big Data Technologien für xyz einsetzen?"_

    Diese Forschungsfrage ist zu unspezifisch und nicht überprüfbar, d.h., diese Forschungsfrage drückt keine Qualität einer Lösung aus. Es wird nicht klar, wie gut der Einsatz letztendlich ist bzw. werden keine Metriken definiert, anhand derer sich die Güte einer Lösung festmachen lässt.

    !!! note 
        Ein besseres Beispiel: 
        
        _"Führt der Einsatz des Big Data Frameworks xyz zu einer 50%-igen Verbesserung der Durchsatzrate im Anwendungsfall zyx?"_



4. **Geplante Aktivitäten**

    Dieser Abschnitt besteht aus mehreren Unterabschnitten und gibt einen groben Überblick über die geplanten Aktivitäten. 

    Verwenden Sie zur Beschreibung der geplanten Aktivitäten die nachstehende Struktur und beschreiben Sie jeden Punkt mit max. 1 Satz:
    
    1. Aktivität
    2. Methode
    3. Erwartete Ergebnisse

    Führen Sie alle wesentlichen Aktivitäten auf; dies sollen keine 20 Aktivitäten sein, aber 4-7 wesentliche Aktivitäten sollten Sie benennen.


5. **Evaluierung**

    Jede gute bzw. sehr gute BA/MA braucht eine Evaluierung! Oder anders ausgedrückt: Ohne Evaluierung wird es sehr schwer, eine gute oder sehr gute Arbeit zu verfassen bzw. eine entsprechende Beurteilung zu erlangen.

    Die Evaluierung ist der nächste wesentliche Baustein einer guten wissenschaftlichen Arbeit. In der Evaluierung wird der *Impact* bzw. die Qualität der erarbeiteten Ergebnisse bzw. Ergebnisartefakte im Hinblick auf deren Beitrag zur Beantwortung der Forschungsfragen untersucht und bewertet. 

    Die Evaluierungskriterien richten sich idR nach den Forschungsfragen und sollten angemessene, d.h., belastbare Kriterien bzw. Aspekte umfassen, die einer Beantwortung der Forschungsfragen zuträglich sind.

    Verwenden Sie hier analog zur Beschreibung der geplanten Aktivitäten auch eine Unterstruktur und beschreiben Sie jeden Aspekt mit max. 1 Satz:

    1. Evaluierungsgegenstand
    2. Evaluierungsmethode


6. **Referenzen**

    Führen Sie hier erste Referenzen auf, welche Sie in der weiteren Ausarbeitung heranziehen (werden).

!!! abstract  
    **Erledigen Sie diese Aufgaben VOR dem Übungstermin**    

      **Voraussetzung:** Die vier in [Termin 1](termin1.md) erstellten PHP-Seiten werden ordnungsgemäß vom Webserver ausgeliefert und erzeugen  standardkonformen HTML-Code.
      
      1. Laden Sie die **Zulieferung** für das Praktikum von der EWA-Moodleseite herunter und machen Sie sich mit dem Inhalt vertraut:      
         - `PageTemplate.php` dient als Vorlage für die Seiten `Bestellung.php`, `Kunde.php`, `Baecker.php` und `Fahrer.php`    
         - `Page.php` ist die gemeinsame Basisklasse dieser 4 Seiten-Klassen und soll die Datenbank öffnen und schließen und den HTML-Rahmen erzeugen
         - `BlockTemplate.php` dient (optional) als Vorlage für einzelne Blöcke innerhalb der Seiten
         - `Pizzaservice_Documentation.pdf` enthält eine Dokumentation der Klassen mit Klassendiagramm und Sequenzdiagramm.
      2. Versuchen Sie mit der Dokumentation und dem Quellcode das **Zusammenspiel der verschiedenen Klassen** zu verstehen. Klären Sie folgende Fragen:    
         - Wo erfolgt der eigentliche Aufruf zur Erstellung einer HTML-Seite?
         - Was tun die Methoden `getViewData()`, `generateView()` und `processReceivedData()`? In welcher Reihenfolge werden sie aufgerufen?
         - Wo wird der HTML-Rahmen mit &lt;body&gt; und &lt;head&gt; erzeugt? Wo wird er ausgegeben?
      3. Entwerfen Sie das **Datenmodell** für Ihren Pizzaservice. 
      Nutzen Sie beispielsweise das folgende Schema:

            ``` 
            Angebot:         PizzaNummer, PizzaName, Bilddatei, Preis
            BestelltePizza:  PizzaID, fBestellungID, fPizzaNummer, Status
            Bestellung:      BestellungID, Adresse, Bestellzeitpunkt
            ```

      1. Implementieren Sie das **Datenmodell** mit `phpMyAdmin`
         - Starten Sie den Webserver und den **Datenbankserver (MySQL)** mittels des XAMPP-Dienstprogrammes und rufen Sie `phpMyAdmin` auf durch `http://127.0.0.1/phpmyadmin`.
         - Verwenden Sie die Kollation `utf8_unicode_ci` (im Vorgabewert `utf8_general_ci` gilt nicht ß=ss)
         - `PizzaName`, `PizzaID`, `BestellungID` sind **Primärschlüssel**; IDs mit Autoincrement
         - Realisieren Sie die Verknüpfungen zwischen den Primärschlüsseln und den Fremdschlüsseln `fBestellungID`, `fPizzaName` in der Datenbank.  
           *Tipp: Mit dem "Designer" in `phpMyAdmin` können Sie die Beziehungen grafisch eintragen*
         - Tipp zum Bestellzeitpunkt: MySQL-Funktion `CURRENT_TIMESTAMP` als Standardwert des Feldes.

      2. Füllen Sie die "Speisekarte" (d.h. die Tabelle "`Angebot`") manuell mit 4-5 Pizzen. Verwenden Sie auch ungerade Preise wie 3.17€ oder 4.99€ und Namen mit Umlauten (Pizza Hühnchen).

!!! warning
    **Hinweis**: Wenn Sie diese Vorbereitung nicht **zu Beginn der Übung** zeigen können, erhalten Sie kein Testat für die vorherige Übung, sondern eine Verwarnung (**"gelbe Karte"**)!

## Aufgaben

Am besten führen Sie die folgenden Aufgaben zuerst für **eine** der Seiten (z.B. die Bestellseite) durch. So stellen Sie sicher, dass Sie alle Themen verstanden haben und korrekt umsetzen können bevor Sie die übrigen Seiten angehen.

### Dynamische Seitengenerierung mittels Seitenklassen

1. Legen Sie eine **Kopien der Klasse `PageTemplate.php`** für jede Seite an, die Sie erstellen wollen (also instgesamt `Bestellung.php`, `Kunde.php`, `Baecker.php` und `Fahrer.php`) und benennen Sie die Dateien entsprechend. Ändern Sie auch die Klassennamen und Verweise auf die Klasse innerhalb der Dateien.

2. Verteilen Sie Ihren **PHP-Code** aus der vorherigen Übung in die zuständigen Methoden der neuen Klasse und die generischen Teile in die Klasse `Page.php`. Die Kommentare in den Dateien helfen dabei. Rufen Sie die Seite über den Webserver ab und korrigieren Sie die Fehler.

    !!! note
        **Hinweise**:

         - Beim Testen und Debuggen hilft eine Fehlerausgabe. Verwenden Sie --> `error_reporting(E_ALL)`.
         - HTML-Ausgaben erfolgen ausschließlich in der Methode `generateView()` der Seitenklassen!
         - Funktionalität, die von allen Klassen benötigt wird, wird in der Basisklasse `Page` umgesetzt (z.B. die Anbindung an die Datenbank).
         - Die Ausgabe größerer HTML-Abschnitte ist mit der <a href="http://php.net/manual/de/language.types.string.php#language.types.string.syntax.heredoc" target="blank">Heredoc-Notation</a> besonders einfach. Achten Sie darauf, dass die Endmarke in der ersten Spalte beginnen muss und dahinter höchstens noch ein `;` folgen darf.
         - Die Struktur wird besser, wenn Sie Speisekarte, Warenkorb-Formular und Statusansicht unter Verwendung von `BlockTemplate.php` realisieren (das macht es aber auch anspruchsvoller und ist optional).

3. Schreiben Sie **Hilfs-Methoden** oder **zusätzliche Klassen** nach Bedarf. Auch die Methoden der gegebenen Klassen dürfen zusätzliche Parameter bekommen. Vermeiden Sie aber möglichst Änderungen an der Signatur von Methoden der Klasse `Page`.

4. Prüfen Sie, ob die neuen PHP-Seiten als Ausgabe die ursprünglichen statischen HTML-Seiten erzeugen und ob dieser Code immer noch **standardkonform** ist.

### Datenbankzugriff mittels MySQLi

1. Konfigurieren SIe den Aufbau der Datenbankverbindung in `Page.php`.
2. Implementieren Sie die **Datenbankzugriffe** (SELECT, INSERT INTO, UPDATE) in den zuständigen Methoden der Klassen und ersetzen Sie die statischen Codeteile durch Daten, die Sie von der Datenbank abfragen.
      - Der Zugriff auf die Datenbank erfolgt objektorientiert über die Klasse `MySQLi`. 
      - Zugriff auf die Datenbank erfolgt nur in `getViewData()` und `processReceivedData()`.
3. Testen und validieren Sie die generierten Seiten.

    !!! note
        Tipps zur Umsetzung
        
        - Nutzen Sie `var_dump($variable)` für die schnelle Testausgabe zwischendurch
        - `number_format($zahl, $nachkommastellen)` formatiert `$zahl`
        - `$mysqli->insert_id` liefert die Autoincrement-ID nach `INSERT INTO`
        - Tabellen- und Feldnamen in SQL-Statements klammert man am besten in Hochkommata ein: ` (Gravis / accent grave)
        - Prüfen Sie mit `phpMyAdmin` ob die Datenbankeinträge korrekt erstellt werden. Denken Sie daran, die Formulare so anzupassen, dass sie ihre Daten nicht mehr an die Echo-Skripte schicken, sondern an die tatsächliche Zielseite.
        - Eine geschickte Datenbankabfrage (z.B. mit einem `JOIN` oder `ORDER BY`) kann Ihnen viel Implementierungsaufwand ersparen.

### Auflösung von Blockierungen bei Aktualisierungen
Wenn eine Webseite mit einem Formular geladen wird, das zuvor mittels POST Daten gesendet hat, dann bringt der Browser ein (recht unverständliches) Popup und blockiert dadurch die Aktualisierung.
![](./figures/POST_ReloadPopup.png)*Popup durch Reload mit POST-Daten)*      
Lösen Sie diese Blockierung auf, indem Sie beim Aufruf der Seite zuerst die Daten verarbeiten und dann die Seite (ohne Daten) neuladen:     

 - Verarbeiten Sie die Daten in processReceivedData() 
 - laden Sie mit dem  PHP-Befehl `:::js header('Location: http://meineSeite.php/');` die gleiche Seite erneut - aber dieses mal ohne Daten. 
 - Jetzt können Sie die Seite ohne Blockierung aktualisieren.    
 
Achten Sie aber darauf, dass dieser "Redirect" wirklich nur dann ausgeführt wird, wenn Sie auch tatsächlich Daten empfangen haben - ansonsten entsteht eine Endlosschleife.    
**Hinweis**: Das Umstellen der Übertragung auf GET ist keine zulässige Lösung!

## Nachbereitung
Setzen Sie noch fehlende Teile der obigen Aufgabe bis zum nächsten Praktikumstermin um. 

## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Durchführung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [x] Implementierung der Seiten `Bestellung.php`, `Kunde.php`, `Baecker.php` und `Fahrer.php` mittels Seitenklassen und (optional) Blockklassen.
        - Die "Speisekarte" auf der Bestellseite wird mit den Daten aus den Datenbank erzeugt
        - Die Daten, welche die Bestellseite abschickt, werden in der Datenbank abgelegt.
        - Die Bäckerseite zeigt die bestellten Pizzen. Ein veränderter Status einer Pizza kann mit einem Submit-Button abgeschickt werden und wird in die Datenbank übernommen.
        - Die Fahrerseite zeigt die Bestellungen, die bereit für die Auslieferung sind. Ein veränderter Status einer Bestellung kann mit einem Submit-Button abgeschickt werden und wird in die Datenbank übernommen.
        - Die Fahrerseite und die Bäckerseite aktualisieren sich alle 5 Sekunden
        - Die Kundenseite setzen Sie bitte so um, dass *alle* bestellten Pizzen angezeigt werden. Die Einschränkung auf die Pizzen des jeweiligen Kunden erfolgt erst in der nächsten Übung durch Sessionamangement.
    - [x] Implementierung der Datenbankzugriffe mittels `MySQLi`






