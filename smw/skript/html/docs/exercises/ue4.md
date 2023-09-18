# Übung 4: Semantische Wissensgraphmodellierung mit Semantic MediaWiki (cont.)

!!! success "Lernziele"
    * [x] Sie können einen Ausschnitt eines Gegenstandbereichs mit Semantic MediaWiki in einen semantischen Wissensgraphen überführen
    * [x] Sie kennen die wesentlichen Beschreibungselemente von Semantic MediaWiki
    * [x] Sie können terminologisches Wissen mittels Semantic MediaWiki beschreiben


## Aufgaben

### Vertiefung der Lehrinhalte

1. Konsultieren Sie die in Übung 3 genannten  Quellen zur Vertiefung der relevanten Lehrinhalte
2. Schauen Sie sich ggf. das ein oder andere [Tutorial-Video](https://www.youtube.com/channel/UCXvzIQAkZQixyBRz2dn4-sw/videos) auf YouTube zu ausgewählten Semantic MediaWiki-Themen an.

### Wissensmodellierung mit Semantic MediaWiki

1. Versuchen Sie den aus Übung 1 und 2 bekannten Sachverhalt mittels den Sprachelementen von Semantic MediaWiki abzubilden. Die Abbildung kann entweder in Form eines konzeptuellen Graphen unter Berücksichtigung entspr. Namensräume erfolgen, oder direkt in Semantic MediaWiki umgesetzt werden (das ist die bessere Vorgehensweise).

> "_In seiner konstituierenden Sitzung vom 25.06.2019 beschloss der Fachbereichsrat in Bezug auf Berichtspunkt Nr. 5 des Protokolls vom 17.05.2019:  
    Prof. Dr. Kai Renz ist neues Mitglied des Stundenplanerteams._"

Hinweise:

- Verwenden Sie eigene Kategorien und sprechende Properties
- Überlegen Sie, wie Sie welchen Teilausschnitt abbilden können
- Erstellen Sie hierzu die notwendige Infrastruktur (templates etc.)
- Ggf. müssen Sie multi-instance templates in Verbindung mit subobjects verwenden
- Überlegen Sie, welche Properties und Datentypen Sie für die Umsetzung benötigen
- Erzeugen Sie einige Testinstanzdaten (Personen / Berichtspunkte / Protokolle etc.)
- Überprüfen Sie die Korrektheit Ihres gewählten Modellierungsansatzes mittels einer `#ask`-query. Bspw. können Sie nach dem Inhalt eines bestimmten (referenzierten) Berichtspunktes fragen.
- Überlegen Sie, wo sie sinnvollerweise die Informationen zu Mitgliedschaften vorhalten


### Vorbereitung für das Semesterprojekt

1. **Installation**  
    Installieren Sie Semantic MediaWiki auf einem Rechner Ihrer Wahl oder nutzen Sie einen Online-Hosting-Service um die Instanz für Ihr Semesterprojekt aufzusetzen
    - Hilfe zur Installation  
        <https://www.semantic-mediawiki.org/wiki/Help:Installation>

2. **Konfiguration**  
    Konfigurieren Sie Ihre Semantic MediaWiki Instanz entsprechend
    
    - Legen Sie Nutzer an
    - Schränken Sie den freien Schreibzugriff entsprechend ein (so dass nachvollziehbar ist, welcher Nutzer welche Änderungen vorgenommen bzw. Inhalte erstellt hat)

    Hilfe zur Konfiguration  
        <https://www.semantic-mediawiki.org/wiki/Help:Configuration>

3. **Erweiterungen**  
    Installieren Sie die folgenden Erweiterungen

    - Page Forms (formerly known as Semantic Forms)  
        <https://www.mediawiki.org/wiki/Extension:Page_Forms>
    - Semantic Compound Queries  
        <https://www.mediawiki.org/wiki/Extension:Semantic_Compound_Queries>
      
    !!! note "Extensions"  
        Eine Übersicht aktueller Extensions finden Sie hier  
        <https://www.semantic-mediawiki.org/wiki/Help:Semantic_MediaWiki_extensions>  

    
    Installieren Sie weitere Erweiterungen bei Bedarf – bspw. Semantic Result Formats  
    <https://www.semantic-mediawiki.org/wiki/Extension:Semantic_Result_Formats>
      
    
4. **Auswahl der Domäne und der wissensmanagement-relevanten Fragestellungen**  
    
    1. Machen Sie sich bereits erste Gedanken über die Domäne bzw. den Gegenstandsbereich, den Sie mit Semantic MediaWiki abbilden wollen
    2. Überlegen Sie sich erste Problem- und Fragestellungen, die Sie mit Ihrem Semantic MediaWiki beantworten wollen
    3. Formulieren Sie eine Reihe von Fragen, deren Antworten Sie aus den im Semantic MediaWiki hinterlegten Daten generieren wollen

   
   