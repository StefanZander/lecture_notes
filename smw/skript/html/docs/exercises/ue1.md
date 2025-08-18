# Übung 1: Literaturrecherche und Wissensmodellierung

!!! success "Lernziele"
    * [x] Sie können wesentliche Bestandteile eines organisationsweiten Wissensmanagements benennen
    * [x] Sie können die Unterschiede zwischen Daten – Informationen – Wissen  darlegen
    * [x] Sie kennen mehrere Wissensmanagement-Modelle sowie deren Unterschiede
    * [x] Sie können wesentliche Herausforderungen bei der Integration des Wissensmanagements in die Unternehmenspraxis benennen

<!-- !!! warning
    **Aufgabe 1 & 2** sind die PVL für das Modul und müssen bis zur 2. Einheit bearbeitet und via Moodle hochgeladen werden.  -->


## Aufgaben

### Aufgabe 1: Literaturrecherche 

1. Lesen Sie das Paper

    : _"Wissen 4.0 – Wissensmanagement im digitalen Wandel"_  
    von Klaus North und Ronald Maier (--> [Link in Moodle](https://lernen.h-da.de/mod/resource/view.php?id=354866))

    und beantworten Sie folgende Fragen:

    1. Warum lässt sich mit "Wissen" allein noch kein Problem lösen?
    2. Welche Herausforderungen an das Wissensmanagement werden zukünftig noch zunehmen?
    3. Was ist der Unterschied zwischen operativem und strategischem Wissensmanagement?
    4. Erläutern Sie Maßnahmen, wie sich das operative und strategische Wissensmanagement verbinden lässt.


<!--
1. Lesen Sie das **Kapitel 1 - 3** des Buchs
   
    : _"Wissen managen – Wie Unternehmen ihre wertvollste Ressource optimal nutzen" (7. Auflage)_  
    von Gilbert Probst, Steffen Raub, Kai Romhardt ([Link in Moodle](https://lernen.h-da.de/mod/resource/view.php?id=354825)) 
    
    und beantworten Sie folgende Fragen:

    1. Erläutern Sie anhand eines selbst gewählten Beispiels, wie sich die Wertschöpfung durch steigende Wissensintensität bzw. wissensintensive Technologien verändert und verbessert hat (cf. S.7 Intelligente Produkte)
    2. Tragen Sie Maßnahmen zusammen, die den Aufbau einer kollektiven Wissensbasis im Unternehmen unterstützen. Wie kann dies managementseitig ebenfalls unterstützt und gefördert werden?
    3. Erläutern Sie, warum eine kollektive Wissensbasis mehr ist, als die Summe der Experten eines Unternehmens.
    4. Warum ist das Konzept der "Lernenden Organisation" auch in nicht hoch-dynamischen Wirtschaftszweigen wichtig? 
-->



### Aufgabe 2: Modellierung eines Gegenstandbereichs

**Aufgabe**:

Überführen Sie den nachfolgend dargestellten Sachverhalt in ein minimales Datenmodell einer Sprache oder eines Formats (UML-Klassendiagramm / JSON / XML / ERM / etc.) Ihrer Wahl[^2]. Versuchen Sie den Sachverhalt so zu modellieren, dass Sie möglichst viele Informationen bzw. Fakten als "First-class Elemente" darstellen[^3], so dass diese möglichst präzise durch eine Suchalgebra angesprochen werden können. Starten Sie mit einem Grundmodell und erweitern Sie dieses schrittweise um die in den jeweiligen Stufen angegebenen Informationen. Setzen Sie sich eingehend mit den in den Stufen enthaltenen Fragestellungen auseinander und reflektieren Sie Ihre Entwurfsentscheidungen _kritisch_.

<!-- !!! todo "Neue Aufgabe im SoSe 2024" -->
!!! task "Stufe 1 (Grundmodell)"

    _ReApp (Akronym) ist ein Forschungsprojekt mit dem Titel "Reusable Robotic Components". Es beschäftigt sich mit Semantischen Technologien und Robotik. Beides sind Forschungsfelder. 
    Auf dem ReApp-Projekt arbeitet die Wissenschaftlerin Nicole Merkle. Sie ist am FZI Forschungszentrum Informatik beschäftigt. Ihr Vorgesetzter ist Viliam Simko. 
    Nicole Merkle hat die Forschungsfelder des Projektes als Kompetenzen (da sie ja aktiv dazu forscht bzw. auf dem Projekt arbeitet)._

    <!-- 
    Die Person Nicole Merkle arbeitet im ReApp-Projekt.
    Nicole Merkle ist eine Wissenschaftlerin und am FZI Forschungszentrum Informatik beschäftigt.
    Das ReApp-Projekt behandelt Semantische Technologien und Robotik. Beides sind Forschungsfelder.
    -->

    **Fragen**:
    _(bitte setzen Sie sich kritisch mit den folgenden Fragen auseinander)_

    - Aus welcher Perspektive (Projekt / Person / Organisation / universell) modellieren sie den oben dargelegten Sachverhalt (aka Gegenstandsbereich) ?
    - Wie gehen Sie mit Beziehungen um ? Wie werden diese in ihrem Modell/Format repräsentiert ?
    - Wie stellen sie die einzelnen Dinge/Entitäten dar ? Wie leicht/schwer ist es ihnen gefallen, das Modell zu erweitern / zu ergänzen ?
    - Ist es aus Sicht eines Projektes eindeutig, welche Personen auf dem Projekt arbeiten ? Ist aus Sicht der Personen unmittelbar ersichtlich, auf welchen Projekten diese arbeiten ?


!!! task "Stufe 2 (Erweiterung des Modells)"

    _Nicole Merkle hat die Forschungsfelder des Projektes als Kompetenzen (da sie ja aktiv dazu forscht).  
    Ihr Vorgesetzter ist Viliam Simko._

    **Fragen**:

    - Wie einfach ließ sich ihr Modell erweitern ? Mussten sie ihren Modellierungsansatz für die Erweiterung anpassen ?
    - Wie repräsentierten sie die Vorgesetzten-Beziehung zwischen Nicole und Viliam; wie die Kompetenzen-Beziehung? Konnten sie diese als "first-class-entities" darstellen ? 


!!! task "Stufe 3 (Verfeinerung des Modells)"

    _Nicole Merkle arbeitet vom 1.1.2021 bis zum 31.7.2022 in der Rolle als Research Scientist im ReApp-Projekt; ab dem 1.8.2022 bis zum Projektende (31.12.2023) als Projektleiterin.
    Parallel zu ihrer Tätigkeit in ReApp hat sie zu 50% auf dem Projekt AICASys als Entwicklerin gearbeit._

    **Fragen**:

    - Ist ihr Modell bzw. ihr Modellierungsansatz in der Lage, die in Stufe 3 beschriebenen Sachverhalte abzubilden ?
    - Falls sie die Eingangsfrage mit 'ja' beantworten können – ist dieses Beziehungsgeflecht _self-contained_, d.h., ist dieses ohne Kontextinformationen eindeutig interpretierbar ?


!!! task "Stufe 4 (Ausschöpfung impliziter Informationen)"

    Überlegen Sie sich, durch welche Maßnahmen bzw. wie sie folgende, in ihrem Modell implizit enthaltenen Informationen zugreifbar (exploitable) machen können ? Was ist dazu nötig ?  
    Analysieren und evaluieren Sie dies kritisch. 

    Lassen sich folgende Informationen einfach und eindeutig aus ihrem Modell extrahieren ?

    - Wie viele Jahre hat sich Nicole Merkle mit den jeweiligen Themengebieten befasst ?
    - Die Forschungsbereiche/-themengebiete, an denen eine Organisation (im konkreten Fall das FZI Forschungszentrum Informatik am KIT) aktiv forscht
    - Die Kompetenzen, die in einer Organisation vorhanden sind
    - Wie viele Projekte innerhalb einer Organisation zu einem bestimmten Themengebiet durchgeführt werden/wurden
    - Welche Projekte und Mitarbeitende aktuell auf einem best. Forschungsfeld forschen ?


!!! task "Stufe 5 (Domänenwissen)"

    Erweiteren Sie Ihr Modell um das folgende allgemein gültige **Domänenwissen**:

    - *Ein Senior Researcher ist eine Person, die in mindestens einem Projekt in der Rolle "ProjektleiterIn" tätig war.*
    - *Eine Führungskraft ist eine Person, die Vorgesetzte/r einer anderen Person ist.*

    **Fragen**:

    - Überlegen Sie, wie sich oben stehendes Domänenwissen in ihr Modell integrieren lässt ? 
    - Wie lassen sich die aus dem Domänenwissen ableitbaren Informationen in ihr Modell integrieren ? Was muss getan werden, um diese (neuen) Informationen im Modell zu hinterlegen und damit zugreifbar/ausschöpfbar zu machen ?
    



<!--
**Aufgabe**:  

Überführen Sie den nachfolgend dargestellten Sachverhalt in ein minimales Datenmodell einer Sprache oder eines Formats (UML-Klassendiagramm / JSON / XML / ERM / etc.) Ihrer Wahl[^2]. Versuchen Sie den Sachverhalt so zu modellieren, dass Sie möglichst viele Informationen bzw. Fakten als "First-class Elemente" darstellen[^3], so dass diese möglichst präzise durch eine Suchalgebra angesprochen werden können. Starten Sie mit einem Grundmodell und erweitern Sie dieses schrittweise (die neu hinzugekommenen bzw. präzisierten Aspekte sind jeweils *{++grün++}* hinterlegt):
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
-->



<!--

### Aufgabe 3: Literaturrecherche

1. Lesen Sie das Paper

    : _"Wissen 4.0 – Wissensmanagement im digitalen Wandel"_  
    von Klaus North und Ronald Maier ([Link in Moodle](https://lernen.h-da.de/mod/resource/view.php?id=354866))

    und beantworten Sie folgende Fragen:

    1. Warum lässt sich mit "Wissen" allein noch kein Problem lösen?
    2. Welche Herausforderungen an das Wissensmanagement werden zukünftig noch zunehmen?
    3. Was ist der Unterschied zwischen operativem und strategischem Wissensmanagement?
    4. Erläutern Sie Maßnahmen, wie sich das operative und strategische Wissensmanagement verbinden lässt.
-->

<!-- 
### Aufgabe 4: Reflektion der 1. Einheit

1. Beantworten Sie die Fragen zur Lernzielkontrolle auf der letzten Seite des Foliensatzes zur 1. Einheit (Wissensmanagement). 
-->

### Aufgabe 3: Impact von Wissensmanagement

~~Erarbeiten Sie in Ihrer Gruppe aus der Vorlesung auf max. 1 - 2 Folien je ein Beispiel in Form einer Case Study, welche den Mehrwert des Wissensmanagement für moderne Unternehmen aufzeigt. ~~
Im SoSe2025: Bearbeiten sie die typischen Wissensmanagementfragestellungen (Seite 30) und beantworten sie die Fragen.




[^1]: Die folgenden Schritte stellen jeweils eine Verfeinerung bzw. Konkretisierung des beschriebenen Sachverhalts dar. 

[^2]: Für diese Aufgabe ist es ausreichend, wenn Sie sich auf die wesentlichen Aspekte konzentrieren und diese im Datenmodell abbilden

[^3]: also bspw. nicht den Sachverhalt in einem String abbilden
