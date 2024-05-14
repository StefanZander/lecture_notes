# Kennen lernen von Flutter (--> zu Hause)


!!! success "Lernziele"
    - [x] Sie können einfache Flutter-Projekte anlegen
    - [x] Sie verstehen die Grundstruktur einer Flutter-App
    - [x] Sie kennen die wichtigsten Hilfsmittel bei der Flutter-Entwicklung


<!-- !!! info "Debugging am eigenen Gerät"
    Wenn Sie zum Testen und Debuggen Ihr eigenes Handy verwenden wollen, bringen Sie bitte ein passendes USB-Kabel mit. Im Normalfall ist das Kabel des Ladegeräts dazu geeignet. Verbinden Sie das Handy via USB-Kabel mit dem Entwicklungs-PC (Ihr Notebook oder der Labor-PC), schalten Sie das Handy ein, aktivieren Sie Entwickleroptionen und darin USB-Debugging. -->

<!-- !!! info "Konfiguration der Entwicklungsumgebung"
    Vermutlich werden Sie Android Studio und den Emulator auf Ihrem eigenen Laptop installieren; Infos hierzu finden Sie unter 

    - <http://developer.android.com/sdk/index.html>
    - <http://developer.android.com/sdk/installing/adding-packages.html>

    Konfigurieren Sie den Emulator hinsichtlich der Displaygröße eher zurückhaltend – er ist (noch immer) ein Ressourcenfresser! -->


## Vorbereitung

1. Installieren Sie Flutter auf Ihrem Arbeitsrechner / Laptop
      - Informationen zur Installation finden Sie unter <https://docs.flutter.dev/get-started/install>
         - Beim Punkt `Choose your first type of app` wählen Sie als Applikationstyp entweder iOS oder Android (zum Testen bzw. Kennenlernen von Flutter können Sie alternativ auch Web wählen)
2. Testen Sie Ihre Installation mit `flutter doctor` und installieren Sie alle benötigten Komponenten.


## Aufgaben


### Generieren einer Applikation

Um mit Flutter vertraut zu werden führen Sie das offizielle Flutter-Codelab aus: <https://codelabs.developers.google.com/codelabs/flutter-codelab-first#0>

Ziel ist die Generierung einer einfachen Flutter-App sowie das Kennenlernen der wesentlichen Entwicklungsbestandteile.

Das Codelab bildet eine Reihe von Themen ab (bspw. die Behandlung von Zustandsinformationen), die Sie in weiterer Folge für das Semesterprojekt benötigen.

Lesen Sie sich hierzu die enthaltenen Erläuterungen aufmerksam durch. Hier erfahren Sie eine Menge über den Aufbau der Flutter-Applikationslogik sowie das Zusammenspiel der Komponenten einer App. 



### Verstehen von Flutter

Lesen Sie sich das Kapitel [Architectural Overview](https://docs.flutter.dev/resources/architectural-overview) der offiziellen Flutter-Dokumentation durch und versuchen Sie die dort vorgestellten Konzepte zu verstehen und auf das Codelab-Beispiel bzw. die Codelab-App zu übertragen.

Notieren Sie sich offene Fragen oder interessante Diskussionspunkte und bringen Sie Ihre Aufzeichnungen mit in das Praktikum. Dort werden wir diese ausführlich besprechen.


### Entwicklung einer eigenen Flutter-App (optional)

Zur Vertiefung des Gelernten aus dem Codelab bietet sich die Entwicklung einer eigenen kleinen Flutter-App an. Die zu entwickelnde App besteht aus 2 Screens:

- Auf Screen #1 soll mittig ein Textfeld platziert sein, welches Eingaben entgegen nimmt. Unter dem Textfeld befindet sich ein Button, welcher bei Aktivierung auf den Screen #2 weiterleitet.
- Screen #2 soll die im Textfeld auf Screen #1 eingegebene Zeichenkette ebenfalls mittig darstellen. Darunter befindet sich ein zurück-Button, welcher auf Screen #1 zurück leitet. 

!!! tip "Unterstützung durch Flutter Cookbooks"
    Flutter bietet eine ganze Reihe von in sich abgeschlossenen "Rezepten" in Form von Codebeispielen und Erläuterungen zur Lösung gängiger Probleme oder Fragestellungen an. Diese sog. recipies finden Sie unter <https://docs.flutter.dev/cookbook>.



## Ergebnisse

Nach Abschluss der Einheit sollten Sie die folgenden Ergebnisse erarbeitet haben:

!!! success "Ergebnisse"
    - [ ] Vorbereitung und Konfiguration einer IDE Ihrer Wahl für die Entwicklung von Flutter-Apps
    - [ ] Lauffähige Flutter-App aus dem Flutter-Codelab 
    - [ ] Grundverständnis was Widgets sind und welche Rolle diese in der Flutter-Etnwicklung spielen
    - [ ] Kennenlernen von zustandslosen und zustandsbehafteten Widgets
    - [ ] Kennenlernen eines Ansatzes zur Speicherung von globalen Zustandsinformationen