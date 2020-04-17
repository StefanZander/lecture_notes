# Übung 4: Semantische Wissensgraphmodellierung mit Semantic MediaWiki (cont.)

!!! abstract
    **Lernziele**

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


### Vorbereitung für das Semesterprojekt

1. **Installieren** Sie Semantic MediaWiki auf einem Rechner Ihrer Wahl oder nutzen Sie einen Online-Hosting-Service um die Instanz für Ihr Semesterprojekt aufzusetzen

2. Entwickeln Sie eine wissensmagement