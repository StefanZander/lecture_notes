# Übung 1: Literraturrecherche und Wissensmodellierung

!!! abstract
    **Lernziele**

    * [x] Sie können wesentliche Bestandteile eines organisationsweiten Wissensmanagements benennen
    * [x] Sie können die Unterschiede zwischen Daten – Informationen – Wissen  darlegen
    * [x] Sie kennen mehrere Wissensmanagement-Modelle sowie deren Unterschiede
    * [x] Sie können wesentliche Herausforderungen bei der Integration des Wissensmanagements in die Unternehmenspraxis benennen


## Aufgaben

### Literaturrecherche 

1. Lesen Sie das **Kapitel 1 - 3** des Buchs
   
    : _"Wissen managen – Wie Unternehmen ihre wertvollste Ressource optimal nutzen" (7. Auflage)_  
    von Gilbert Probst, Steffen Raub, Kai Romhardt (--> [Link in Moodle](https://lernen.h-da.de/mod/resource/view.php?id=354825)) 
    
    und beantworten Sie folgende Fragen:

    1. ...
    2. 

2. Lesen Sie das Paper

    : _"Wissen 4.0 – Wissensmanagement im digitalen Wandel"_  
    von Klaus North und Ronald Maier (--> [Link in Moodle](https://lernen.h-da.de/mod/resource/view.php?id=354866))

    und beantworten Sie folgende Fragen:

    1. ...
    2. ...
    3. ...


### Modellierung eines realen Ausschnitts eines Gegenstandbereichs

**Aufgabe**:  
Überführen Sie den nachfolgend dargestellten Sachverhalt in ein minimales Datenmodell einer Sprache oder eines Formats (UML-Klassendiagramm / JSON / XML / ERM / etc.) Ihrer Wahl[^2]. Versuchen Sie den Sachverhalt so zu modellieren, dass Sie möglichst viele Informationen bzw. Fakten als "First-class Elemente" darstellen[^3], so dass diese möglichst präzise durch eine Suchalgebra angesprochen werden können:
: "*{++Prof. Dr. Kai Renz wird neues Mitglied des Stundenplanerteams++}*."

Ergänzen Sie nun Ihr Datenmodell um die folgenden konkretisierenden Sachverhalte[^1]:

Erster Schritt
: "_{++Der Fachbereichsrat beschloss++}:  
    Prof. Dr. Kai Renz wird neues Mitglied des Stundenplanerteams_"

Zweiter Schritt
: "_{++In seiner konstituierenden Sitzung vom 25.06.2019++} beschloss der Fachbereichsrat:  
    Prof. Dr. Kai Renz wird neues Mitglied des Stundenplanerteams._"

Dritter Schritt
: "_In seiner konstituierenden Sitzung vom 25.06.2019 beschloss der Fachbereichsrat {++in Anlehnung an das Protokoll vom 17.05.2019++}:  
    Prof. Dr. Kai Renz wird neues Mitglied des Stundenplanerteams._"

Vierter Schritt
: "_In seiner konstituierenden Sitzung vom 25.06.2019 beschloss der Fachbereichsrat in Bezug auf {++Berichtspunkt Nr. 5++} des Protokolls vom 17.05.2019:  
    Prof. Dr. Kai Renz wird neues Mitglied des Stundenplanerteams._"

**Reflektieren Sie**:

* _Wie gut konnte Ihr gewähltes Datenmodell die in den einzelnen Schritten beschriebenen Konkretisierungen abbilden ohne das ganze Modell umzukrempeln ?_
* _Wie ließen sich die Beziehungen zwischen den beschriebenen Dingen abbilden ?_
* _Konnten Sie den Beziehungen bestimmte Eigenschaften zuweisen oder diese verfeinern?_
* _Wie ließen sich Aussagen über Aussagen oder Aussagen über Sachverhalte darstellen ?_
* _Ist ihr gewähltes Datenmodell ausdrucksmächtig und gleichzeitig flexibel genug, um auf andere Anwendungsgebiete bzw. vergleichbare Gegenstandsbereiche übertragen werden zu können ?_


[^1]: Die folgenden Schritte stellen jeweils eine Verfeinerung bzw. Konkretisierung des beschriebenen Sachverhalts dar. 

[^2]: Für diese Aufgabe ist es ausreichend, wenn Sie sich auf die wesentlichen Aspekte konzentrieren und diese im Datenmodell abbilden

[^3]: also bspw. nicht den Sachverhalt in einem String abbilden