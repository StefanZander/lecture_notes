# Einführung in Flutter und Dart

Begleitmaterial zur Veranstaltung "Human Computer Interaction" (Modulnummer 30.7328).

Die folgenden Inhalte dienen als Richtlinie für die Umsetzung der Semesterprojekt-App. Jedes der aufgeführten Themen sollte sich in einer Funktion innerhalb der App wiederfinden. 

## Inhalte

1. [Introduction to Flutter](./themen/flutter_introduction.md)
2. [Foundations about the programming language "Dart"](./themen/dart.md)
3. [How to build a basic Flutter app](./themen/designing_an_app.md)
4. [Widgets](./themen/widgets.md)
5. [Interactivity and Behaviour](./themen/behaviour.md)
6. [Layout](./themen/layout.md)
7. [Navigational Elements](./themen/navigation.md)
8. [Navigation between Screens](./themen/screen_navigation.md)
9. [Exchanging Data between Screens](./themen/data_exchange.md)
10. [State Management (Storage and Recovery of State Data across the App)](./themen/state_management.md)
11. [Collections](./themen/collections.md) 
12. [Persisting Data (Local Storage and Serialization)](./themen/persistence.md)
13. [Fetch Data from the Internet](./themen/fetching.md)
14. [Processing JSON Data](./themen/json.md)
15. [Asychronity in Dart and Flutter](./themen/asynchronity.md)
16. [Recommended .gitignore-settings](./themen/gitignore.md)
17. [How to use the Snackbar](./themen/snackbar.md)
18. [Complete Example #1](./themen/example.md)
<!-- 16. Fortgestrittene Widgets
    1.  RecyclerView
    2.  Gesten
    3.   -->



<!-- ### Ergänzende Themen

1. Setup (was braucht man um eine Flutter-App zu erstellen?)
2. Lebenszyklus einer App -->


## Diese Elemente sollten in die App

!!! success "Diese Sprachelemente sollten sich in der App wiederfinden"
    - [x] App bestehend aus mehreren Screens
    - [x] Navigation zwischen Screens
    - [x] Anzeigen von Grafiken
    - [x] Nutzung der `ListView` oder `ListTile`
    - [x] Datenabruf von einer externen Quelle
    - [x] Speicherung des App-Zustands
    - [x] Globales Zustandsmodell für Widget-übergreifende Daten
    - [x] (optional) Zugriff auf das Kameramodul
    - [x] Asynchronität (bspw. asynchroner Datenabruf)
    - [x] Verarbeitung von JSON (bspw. als Resultat eines API-Aufrufs)
    - [x] Zurücksetzen der Einstellungen bzw. globalen App-Daten
    - [x] Unmittelbare Rückmeldung bei Benutzungseingaben
    - [x] ein Fehler-vermeidendes Design der UI
    - [x] Zustand der App zu jeder Zeit sichtbar
    - [x] Speicherung von Daten lokal (bspw. mittels `SharedPreferences` oder als serialisiertes File)
    - ...


## Diese Elemente brauchen Sie nicht zu implementieren

!!! failure "Diese Elemente müssen Sie nicht implementieren"
    - Benutzendenverwaltung
    - Backend
    - Full-fledged Datenbank
    - Alle im User Research erarbeiteten Begeisterungsfaktoren (diese können Sie mocken)
    - Bei mehreren Rollen: die volle Funktionalität für jede Rolle; konzentrieren Sie sich auf eine Rolle; wenn Sie mehr machen (wollen) ist das natürlich vorteilhaft und fließt in die Bewertung mit ein.
    - Kein Update von Web Resourcen
    - Kein Senden oder Löschen von Daten an einem Endpoint

<!--
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
-->
