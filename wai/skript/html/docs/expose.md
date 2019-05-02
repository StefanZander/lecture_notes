# Das Exposé

`:::js header('Location: http://meineSeite.php/');`

!!! abstract
    **Lernziele**

    - [x] Sie kennen die wesentlichen Elemente und Struktur eines Exposés
    - [x] Sie kennen Rolle und Aufgabe eines Exposés
    - [x] Sie können ein Exposé zur Ihrer Abschlussarbeit analog der dargestellten Struktur verfassen


In dieser Einheit erfahren Sie, wie Sie das Exposé zu Ihrer Abschlussarbeit erstellen und welche Aspekte es beschreiben muss. 

## Übersicht

Dem Exposé sollte folgende Struktur zu Grunde liegen:

1. **Vorläufiger Titel** (=Arbeitstitel)  
2. **Problemstellung**  
3. **Forschungsfragen**
4. **Geplante Aktivitäten**
5. **Evaluierung**
6. **Referenzen**

## Aufbau

### Vorläufiger Titel  
   
Der vorläufige Titel der Arbeit. Dieser kann sich selbstverständlich noch im weiteren Verlauf der Arbeit ändern.  

!!! warning 
    **Wichtig**: Der Titel sollte die **Problemstellung widerspiegeln** und nur so lang wie nötig sein. Verwenden Sie ggf. einen **Untertitel** und halten Sie den Haupttitel so knapp wie möglich. Vermeiden Sie übermäßig lange oder komplexe Titel -- diese verwässern nur die eigentliche Zielsetzung der Arbeit. 

### Problemstellung

Die Problemstellung ist eines der wesentlichen und wichtigsten Elemente eines Exposés. Hier legen Sie die spezifische Problemstellung, mit der sich Ihre Arbeit auseinandersetzt, dar.

Die Problemstellung sollte knapp aber präzise beschrieben sein. Die Struktur kann dem [Prinzip der invertierten Pyramide](https://de.wikipedia.org/wiki/Prinzip_der_umgekehrten_Pyramide) folgen, d.h., die wesentlichen Probleme sollten zu Beginn genannt werden. Erst danach folgen Hintergrundinformationen sowie die Einbettung in den Arbeitskontext und ggf. weitere Einzelheiten.

Häufig wird die Problemstellung wie eine Einleitung bzw. die Hinführung zu einem Thema formuliert. Das kann fallweise in Ordnung sein. Generell sollte aber die spezifische Problemstellung, mit der sich die Arbeit auseinandersetzt in Vordergrund stehen. 

Ein weiteres Problem ist, dass die Problemstellung oftmals nicht konkret genug und sehr allgemein formuliert ist. Das ist aus mehreren Gründen problematisch. Die Arbeit soll einen konkreten Beitrag zur Beantwortung der Problemstellung liefern, und je konkreter die Problemstellung formuliert ist, desto klarer kann später die weitere Ausarbeitung erfolgen. Zudem lässt sich so leichter überprüfen, ob die Beiträge Ihrer Arbeit die aufgeworfene Problemstellung bereits hinreichend genau beantworten.


### Forschungsfragen

Der nächste sehr wichtige Bestandteil.

Die Forschungsfragen definieren den Rahmen der Arbeit. Sie leiten sich aus der Problemstellung ab.

Für die BA/MA empfiehlt es sich idR nicht mehr als 2-3 Forschungsfragen zu haben. Ggf. können Sie nachgelagerte oder untergeordnete Fragestellungen definieren. Die Hauptforschungsfragen sollten sich jedoch an der genannten Zahl orientieren.

!!! warning
    **Wichtig**: Forschungsfragen werden oftmals zu allgemein, zu unpräzise und nicht überprüfbar formuliert.

!!! note
    Ein Beispiel:  
        
    _"Wie lassen sich Big Data Technologien für xyz einsetzen?"_

Diese Forschungsfrage ist zu unspezifisch und nicht überprüfbar, d.h., diese Forschungsfrage drückt keine Qualität einer Lösung aus. Es wird nicht klar, wie gut der Einsatz letztendlich ist bzw. werden keine Metriken definiert, anhand derer sich die Güte einer Lösung festmachen lässt.

!!! note 
    Ein besseres Beispiel: 
        
    _"Führt der Einsatz des Big Data Frameworks xyz zu einer 50%-igen Verbesserung der Durchsatzrate im Anwendungsfall zyx?"_

Im Rahmen der Evaluierung kann nun untersucht werden, ob der Einsatz wirklich zu einer entsprechenden Verbesserung im genannten Anwendungsfall geführt hat.



### Geplante Aktivitäten

Dieser Abschnitt besteht aus mehreren Unterabschnitten und gibt einen groben Überblick über die geplanten Aktivitäten. 

Verwenden Sie zur Beschreibung der geplanten Aktivitäten die nachstehende Struktur und beschreiben Sie jeden Punkt mit max. 1 Satz:
    
1. Aktivität
2. Methode
3. Erwartete Ergebnisse

Führen Sie alle wesentlichen Aktivitäten auf; dies sollen keine 20 Aktivitäten sein, aber 4-7 wesentliche Aktivitäten sollten Sie benennen.


### Evaluierung

Jede gute bzw. sehr gute BA/MA braucht eine Evaluierung! Oder anders ausgedrückt: Ohne Evaluierung wird es sehr schwer, eine gute oder sehr gute Arbeit zu verfassen bzw. eine entsprechende Beurteilung zu erlangen.

Die Evaluierung ist der nächste wesentliche Baustein einer guten wissenschaftlichen Arbeit. In der Evaluierung wird der *Impact* bzw. die Qualität der erarbeiteten Ergebnisse bzw. Ergebnisartefakte im Hinblick auf deren Beitrag zur Beantwortung der Forschungsfragen untersucht und bewertet. 

Die Evaluierungskriterien richten sich idR nach den Forschungsfragen und sollten angemessene, d.h., belastbare Kriterien bzw. Aspekte umfassen, die einer Beantwortung der Forschungsfragen zuträglich sind.

Verwenden Sie hier analog zur Beschreibung der geplanten Aktivitäten auch eine Unterstruktur und beschreiben Sie jeden Aspekt mit max. 1 Satz:

1. Evaluierungsgegenstand
2. Evaluierungsmethode

So wird klar, *was* Sie untersuchen und welche *Methode* Sie planen einzusetzen.


### Referenzen**

Führen Sie hier erste Referenzen auf, welche Sie in der weiteren Ausarbeitung heranziehen (werden).


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






