# Was ist ein Wiki ?


!!! warning
    **Definition**: << **Wiki** >>  
     Ein Wiki ist ein **webbasiertes Hypertext-System**, das es Benutzenden ermöglicht, Webseiten direkt (d.h. ohne Programmierung) und online in einem Web-Browser zu erzeugen, zu lesen und zu ändern.

### Komponenten eines Wiki-Systems

Es gibt unterschiedliche Implementierungen von Wiki-Systemen; Die am häufigsten verwendeten Komponenten sind

* Datenbank
* Versionsverwaltung
* Suchfunktion


### MediaWiki

* Open-source Wiki-Software
* Technische Basisplattform der Wikipedia


### Sprachelemente

Seiten, Namensräume, Kategorien, Vorlagen

#### Seiten

* grundlegende Inhalts-Einheit: **Wiki-Seite** mit **Titel**
* **Hyperlinks** zur Herstellung von direkten Verbindungen zwischen Seiten
* Auszeichnungssprache **Wikitext**
* wird durch MediaWiki in HTML5 übersetzt

#### Namensräume

* Namensräume dienen der Gruppierung von Seiten
* Funktionen können auf bestimmte Namensräume eingeschränkt werden
* Mediawiki hat standardmäßig **18 Namensräume**
* Textseiten stehen standardmäßig im Namenraum `Main`

#### Vorlagen

* Vorlagen sind Wikiseiten, die in andere Seiten **transkludiert** (d.h. per Referenz eingebunden) werden
* Verwendungsmöglichkeiten
    * Standardisierung von Inhaltsteilen
    * Reduzierter Wartungsaufwand für mehrfach verwendete Inhalte
    * ...

#### Kategorien

* MediaWiki ermöglicht das Klassifizieren von Seiten mit Kategorien
* Die Zuordnung einer Seite zu einer Kategorie erfolgt durch Einfügen von `[[Kategorie:Kategorienname]]` im Quelltext
* Eine Seite kann mehreren Kategorien zugeordnet werden
* Kategorien werden am Ende der Seite angezeigt
* Eine Hierarchiebildung der Kategorien ist durch Zuordnung von Kategorien zu Kategorien möglich


