# Client-seitige Interaktion mit JavaScript, AJAX und DOM 

!!! note
    **Lernziele**

    - [ ] Sie können mittels JavaScript nicht-triviale Überprüfungen der eingegebenen Formulardaten implementieren
    - [ ] Sie können mittels JavaScript das DOM einer Seite manipulieren
    - [ ] Sie können Anwendungsszenarien (bspw. das Füllen eines Warenkorbs) in entspr. DOM-Manipulationslogik übersetzen
    - [ ] Sie können AJAX-Aufrufe erzeugen und HTTP Responses mittels Handler verarbeiten
    - [ ] Sie können JSON-Daten clientseitig verarbeiten 

In dieser Einheit geht es um die client-seitige Implementierung der Interaktion zwischen BenutzerIn und Anwendung. Hierfür setzen wir **JavaScript** ein und modifizieren damit die angezeigten Webseite mit Hilfe des DOM (=Document Object Model) – bspw. zum Befüllen des Warenkorbs.
Ferner steht in dieser Einheit auch die **asynchrone Kommunikation** zwischen Server und Client mittels **AJAX** und **JSON** im Vordergrund, so dass Statusänderungen auf der Kundenseite *ohne* Neuladen der Seite in "Quasi-Echtzeit" sichtbar werden. 

## Vorbereitung   

!!! abstract  
    **Erledigen Sie diese Aufgaben VOR dem Übungstermin**

     **Voraussetzung:** Ihre vier Seiten sind weitgehend vollständig und voll funktional. Es fehlen nur noch das Design und die Interaktionsmöglichkeit mit dem Warenkorb (Einfügen / Löschen / Preisberechnung).
     Zusätzlich haben Sie eine Klasse `KundenStatus` implementiert, die serverseitig die Daten für die Kundenseite liefert.

     1. Implementierung der Bestellfunktionalität mittels JavaScript

        Binden Sie eine gemeinsame EcmaScript-Datei für alle Ihre Webseiten ein. Implementieren Sie anschließend die folgenden Funktionen auf der Bestellseite:  

        1. Ein Klick auf ein Pizzabild trägt diese Pizza in den Warenkorb ein;  
                bspw. 3 Pizzen bestellen --> 3-mal klicken
        2. Der Preis der Pizzen im Warenkorb wird berechnet und angepasst, wenn sich der Warenkorb ändert (durch Einfügen oder Löschen).     
            Tipp: `:::js xxx.toFixed(2)` macht aus einer Zahl xxx einen String mit 2 Nachkommastellen und vermeidet Rundungsfehler!
        3. "Beleben" Sie die Buttons zum Löschen der Einträge im Warenkorb 
                    - sowohl "Alle löschen" als auch 
                    - "(Mehrfach-)Auswahl löschen" (mit Festhalten von Ctrl bei der Auswahl)
        4. Die Bestellung wird nur abgeschickt, wenn eine Lieferadresse angegeben ist und sich mindestens ein Element im Warenkorb befindet. Ansonsten ist der Bestellknopf deaktiviert.


     2. Abschicken von Formularen ohne Submit-Button

        Auf der Bäcker- und Fahrerseite wird bisher ein Submit-Button verwendet, um die Seite abzuschicken.

        1. Ändern Sie die Generierung der Seiten so ab, dass sie abgeschickt werden, wenn ein Radiobutton angeklickt wird.   
        Tipp: Dazu geben Sie dem &lt;form&gt;, das die Radiobuttons umschließt, eine ID (z.B. `:::html <form id="formid">`) und verwenden diese ID und `onclick` bei den Radiobuttons um das Formular beim Anklicken abzuschicken:  
        `:::html <input type="radio" name=... 	onclick="document.forms['formid'].submit();" />`
        1. Entfernen Sie die Submit-Buttons.

!!! warning  
    **Hinweise**:

    - Verwenden Sie nur DOM-konforme Attribute und Funktionen und keine browserspezifischen Spezialitäten (Vorsicht mit Vorlagen aus dem Netz !)
    - Verwenden Sie `"use strict";` in allen Funktionen
    - Verwenden Sie **NICHT** den Befehl `:::js innerhtml()`
    - Achten Sie auf Groß-Klein-Schreibung und die exakte Schreibweise bei DOM-Aufrufen
    - Testen Sie die Skripte mit unterschiedlichen Browsern und Lint-Tools
    - Daten, die Sie nicht anzeigen wollen, aber für die Berechnung brauchen, können unsichtbar in `data`-Attributen im Seiten-DOM gespeichert und mittels JavaScript ausgelesen werden. 

    !!! failure  
        **Bei Problemen mit DOM oder ECMAScript**:
            
        - Prüfen Sie die Browser-Konsole auf Fehlermeldungen (Aufruf mit F12 --> Konsole).
        - Nutzen Sie den eingebauten "Debugger" Ihres Browser (Aufruf mit F12). 
            - Im Reiter `Konsole` finden Sie Hinweise auf Fehler im Code, die der Browser nicht anzeigt. Wenn Ihr Code gar nichts tut, steht hier wahrscheinlich der Grund dafür. 
            - Im Reiter `DOM` können Sie das DOM zu einem Tag anzuschauen. Eine ID für den Tag hilft enorm bei der Suche!
            - Der `Inspektor` zeigt Ihnen die Stelle im Browserfenster, die Sie im Code auswählen.
            - Im Browserfenster können Sie im Rechte-Maus-Menü `Element untersuchen` auswählen und sehen den zugehörigen Quellcode im Debugger.
        - Prüfen Sie Ihr ECMAScript mit [JSLint](http://www.jslint.com) oder [ESLint für ECMAScript 6](http://eslint.org/demo/)


## Aufgaben

### Aktualisierung der Kundenseite mittels AJAX und JSON

Die Kundenseite soll den Status der Pizzen aktualisieren ohne jedesmal die gesamte Seite neu zu laden. Zwischen Server und Client werden dann nur noch die reinen Daten ausgetauscht und kein HTML-Code mehr. Die Daten werden mit EcmaScript und DOM in die Webseite "eingebaut". Das Anfordern der Daten erfolgt mit AJAX und die Übertragung erfolgt im JSON-Format.  
Anschließend aktualisiert die Kundenseite (`Kunde.php`) mittels JavaScript und AJAX den Status aller Bestellpositionen in Quasi-Echtzeit, ohne die Seite jeweils neu laden zu müssen. D.h., sobald sich der Status einer Bestellposition auf der Bäcker- oder Fahrer-Seite ändert, soll sich diese Änderung auch auf der Kundenseite widerspiegeln. 

Die serverseitige Implementierung, welche die Daten liefert, haben Sie bereits in der letzten Übung implementiert (`KundenStatus.php`).

1. **Schreiben Sie eine EcmaScript-Methode, welche die gelieferten Daten auswertet und über das DOM in die Kundenseite einfügt.**    
    {++**Zur Vereinfachung dürfen Sie die Anzeige mit Radiobuttons durch eine *textuelle* Anzeige ersetzen. Das heißt, Sie geben einfach für jede Pizza den Status als Text aus (z.B. "Pizza Hawaii: Im Ofen")**. !!!Ohne jQuery, innerhtml & Co. ist das sonst eine elende Fummelei! Wir könnten auch die Designskizze gleich so anpassen!? Warum machen wir überhaupt 3x Radiobuttons?? ++}
     - Rufen Sie die Seite `KundenStatus.php` während einer laufenden Bestellung in einem Browserfenster auf und speichern Sie den gelieferten JSON-String für spätere Tests als Konstante in Ihrer Methode.
     - Binden Sie zu Beginn des HTML-&lt;body&gt; der Kundenseite eine separate JS-Datei ein. Also mit `... <body><script src="StatusUpdate.js"></script>...`
     - Implementieren Sie die EcmaScript-Methode `:::js process()`, die als Parameter einen (JSON-)String erhält, den String mit `:::js JSON.parse` auspackt und mittels DOM in die Kundenseite einfügt.   
     Tipp: Schreiben Sie Hilfsfunktionen, die wiederkehrende Teile der DOM-Erzeugung vereinfachen (z.B. das Erzeugen einer einzelnen Statuszeile).
     - Zu Testzwecken rufen Sie diese Methode in `:::js onload()` der Kundenseite mit dem konstanten JSON-String von oben auf und prüfen das Ergebnis.
     - Berücksichtigen Sie unbedingt auch den Fall, dass als Ergebnis keine Pizza zurückgeliefert wird.    

2.  **Implementieren Sie die Logik zum Datenaustausch mit AJAX**    
    Nachdem nun serverseitig die Funktion zum *Liefern der Daten* und clientseitig die Funktion zum *Verarbeiten der Daten* vorliegt, müssen Sie die Aufrufe "nur noch" kombinieren.
    - Dazu müssen Sie mit EcmaScript einen **XMLHttpRequest** erstellen, konfigurieren und abschicken.     

    - Erzeugen Sie einen XMLHttpRequest und definieren die Funktion `requestData()`, die den eigentlichen AJAX-Aufruf macht:
         ```js  
            // request als globale Variable anlegen (haesslich, aber bequem)
            var request = new XMLHttpRequest(); 

            function requestData() { // fordert die Daten asynchron an
            request.open("GET", "KundenStatus.php"); // URL für HTTP-GET
            request.onreadystatechange = processData; //Callback-Handler zuordnen
            request.send(null);	// Request abschicken
            }
         ```
    - und zusätzlich die (generische) Methode `processData()` welche die erfolgreiche Antwort herausfiltert und dann die Funktion `process()` zur Verarbeitung der Daten aufruft. 
         ```js  
         function processData() {
          if(request.readyState == 4) {	// Uebertragung = DONE
        	 if (request.status == 200) {	// HTTP-Status = OK
      	       if(request.responseText != null)	
      		     process(request.responseText);// Daten verarbeiten
      	       else error ("Dokument ist leer");		
      	     } 
             else error ("Uebertragung fehlgeschlagen");
          } else ;			// Uebertragung laeuft noch
         }
         ```

3.  **Führen Sie die Aktualisierung mit AJAX alle 2 Sekunden durch**    
    -  Die Anfrage nach den aktuellen Zuständen einer Bestellung erfolgt mittels zyklisch ausgeführten AJAX-Aufrufen (*=Polling*) durch folgende EcmaScript-Funktion:    
        {--`:::js setTimeout( function , timeout_in_milliseconds);`--}     
        `:::js window.setInterval	(myfunction, time_in_milliseconds)`   
        Dabei repräsentiert `myfunction` eine JavaScript-Funktion, die zyklisch aufgerufen werden soll. In unserem Fall ist das die Funktion `:::js requestData()` von oben, welche jeweils einen AJAX-Request anlegt und abschickt.
    - Das Polling soll erst starten, nachdem die Seite `Kunde.php` komplett vom Browser geladen und geparst wurde. Bauen Sie den Aufruf im `onload`-Handler ein.
 

    !!! note
        **Hinweis**:
        Falls die Aktualisierung immer wieder die gleichen Daten liefert, dann könnte das am Cache Ihres Browsers liegen. 
        Bauen Sie dann die folgenden Codezeilen am Anfang von `processReceivedData()` in Ihre `KundenStatus.php` ein: 
            ```js  
            header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
            header("Expires: Sat, 01 Jul 2000 06:00:00 GMT"); // Datum in der Vergangenheit
            ```


<!--
#### ????

1. Implementieren Sie die Funktion zur Erzeugung der **AJAX-Requests**. Lesen Sie ggf. die `BestellungID` aus dem Seiten-DOM aus und übertragen Sie diese als GET-Parameter im AJAX-Request.

2. Schreiben Sie eine **Handler-Funktion** für das `onload`-Event, welche zyklisch den AJAX-Request absetzt, sobald die Seite vollständig geladen und geparst wurde.

3. Implementieren Sie die Logik zur Auswertung der **JSON-Statusdaten** und der Anpassung des Seiten-DOMs (=Setzen der Markierungen in den Radiobuttons).

4. Implementieren Sie die Logik zur Behandlung der **Sonderfälle** (siehe [Vorbemerkungen](termin3.md#vorbemerkungen)) 
      1. Keine Bestellung vorhanden
      2. Initiierung einer neuen Bestellung trotz laufender Bestellung. 

    Insbesondere bei Fall (b) gibt es mehrere Umsetzungsmöglichkeiten

      1. `StatusController.php` liefert HTTP-Statuscode `303 See Other`
      2. Redirect auf `Kunde.php`, so dass die Seite mit den neuen Bestelldaten neu aufgebaut wird
      3. Zweiter kaskadierter AJAX-Request der feststellt, ob eine neue Bestellung initiiert wurde

    Entscheiden Sie sich für *eine* **Variante** und implementieren Sie diese.

 1. **Testen** Sie die implementierte Variante insbesondere mit den beschriebenen Sonderfällen.


 !!! note
    **Hinweis 1**:
    Es gibt mehrere Umsetzungsmöglichkeiten für Aufgabe 2 (bspw. Polling und kompletter Neuaufbau des DOM-Bereichs mit den Statusinformtionen vs. kaskadierte AJAX-Aufrufe für Stammdaten und Statusupdates). Für die Abnahme ist die Umsetzung einer einfachen Lösung ausreichend (bspw. Polling und kompletter Neuaufbau des Status-DOM).

!!! note
    **Hinweis 2 (Alternative Lösung)**: 

    - Aufbau der Seite mittels PHP; setzen bzw. aktualisieren der Zustände mit JavaScript
    - 2 separate AJAX-Requests: (a) pollt Statusupdates, (b) fragt Controller nach neuen Bestellungen; wenn neue Bestellung, dann Redirect im AJAX-Handler auf Kunde.php, d.h., Neuaufbau der Seite mit aktueller Bestellung)  -->


TODO:

- SZA liefert header-code für JSON
- SZA liefert code gegen caching
- 

## Nachbereitung
Setzen Sie noch eventuell fehlende Teile der obigen Aufgabe bis zum nächsten Praktikumstermin um. 
Entwickeln Sie spätestens bis zum nächsten Praktikumstermin auch das **responsive Design** für Ihren Webservice (siehe [Selbststudium II: Responsives Design](termin4_5.md)).

## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Testierung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [x] Vollständige Implementierung der Bestellseite mit Berechnungen und Prüfungen durch valides EcmaScript und DOM
    - [x] Vollständige Implementierung der zyklischen Aktualisierung der Kundenseite über AJAX und JSON
    - [x] Der komplette Bestelldurchlauf verläuft jetzt wie vom Kunden gefordert (--> ausgiebiges Testen) 
