# Einführung in Flutter und Dart

Begleitmaterial zur Veranstaltung "Human Computer Interaction" (Modulnummer xxxxx).

Die folgenden Inhalte dienen als Richtlinie für die Umsetzung der Semesterprojekt-App. Jedes der aufgeführten Themen sollte sich in einer Funktion innerhalb der App wiederfinden. 

## Inhalte

1. [Einführung in Flutter / Grundlegende Konzepte und Besonderheiten](./themen/flutter_introduction.md)
2. [Grundlagen der Sprache "Dart"](./themen/dart.md)
3. [Wie designed man eine App / Grundbausteine/Grundgerüst einer Flutter-App](./themen/designing_an_app.md)
4. [Widgets](./themen/widgets.md)
5. (OK) [Interactivity and Behaviour](./themen/behaviour.md)
6. (OK) [Layout](./themen/layout.md)
7. (OK) [Navigational Elements](./themen/navigation.md)
8. (OK) [Navigation between Screens](./themen/screen_navigation.md)
9. (OK) [Dataexchange between Screens](./themen/data_exchange.md)
10. [Status-/Zustandsmanagement (Speicherung und Wiederherstellung von Zuständen)](./themen/state_management.md)
11. [Data Structures](./themen/data_structures.md) 
12. Speicherung auf dem Gerät (inkl. Serialisierung)
13. Zugriff auf externe Quellen/APIs (wie greift man externe Daten ab)
14. Verarbeitung von JSON
15. Nebenläufigkeit / Asynchronität

<!-- 16. Fortgestrittene Widgets
    1.  RecyclerView
    2.  Gesten
    3.   -->



### Ergänzende Themen

1. Setup (--> was braucht man um eine Flutter-App zu erstellen?)
2. Lebenszyklus einer App


## Diese Elemente sollten in die App

!!! success "Diese Sprachelemente sollten sich in der App wiederfinden"
    - mehrere Screens
    - Navigation zwischen Screens
    - Anzeige von Grafiken
    - Nutzung der ListView oder ListTile




## How to use this guide

This project serves as a guideline through the different flutter topics that should be implemented in the semester project app.
It structures the ... and distills the relevant parts from the comprehensive flutter documentation. Flutter has a very well written thorough and comprehensive documentation with lots of code examples. Instead of mirroring the flutter documentaion, this guide provides links to the relevant parts in the official flutter documentation. Hence, this quide should be used as a guiding structure to the different topics and serves as a topic map.


## TODO

Disadvantages of flutter (source: fireship.io)
- deeply neested widget trees
- no simple copy-and-paste



## Project layout --- cool for monospaced text

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.
