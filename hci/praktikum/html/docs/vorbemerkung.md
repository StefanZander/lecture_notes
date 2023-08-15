<!-- # Aufgabenstellungen 

!!! note
    Seit dem WiSe 2019/2020 bieten wir neben der bisherigen Aufgabenstellung  -->


<!-- # Fernbedienung für einen „Fernseher“ -->

<!-- # Aufgabenstellung -->
# NutzerInnen-zentrierte Enwicklung einer mobilen App

Aufgabenstellung zum Semesterprojekt "NutzerInnen-zentrierte Softwareentwicklung" (engl.Human-Centered Design) (Version 5.0)


!!! info "Vorbemerkung zum Themenangebot"
    Das Thema "Fernsehgerät" und "Twitch Stream-Server" wurde nur deshalb für das Praktikum gewählt, weil Sie dadurch einen _leichten Zugang zur Anwendungsdomäne_ und zu potentiellen Benutzern haben. Die hier praktizierten Methoden sind aber nicht auf Consumer-Anwendungen beschränkt, sondern passen ebenso für andere "Datenverarbeitungsanwendungen".

!!! warning "Neues Thema: Lebensmittelinformations-App"  
    Ab dem SoSe 2022 bieten wir ein drittes Semesterprojektthema im Kontext Verbraucherschutz bzw. Verbraucheraufklärung an. Hierdurch sollen Verbraucher in die Lage versetzt werden, informierte Kaufentscheidungen hinsichtlich der in Lebensmitteln enthaltenen Inhalts- bzw. Nährstoffe treffen zu können. 


<!--Entwerfen Sie eine nutzerzentrierte und anwendungsfallorientierte **Fernbedienung** für einen "Fernseher" oder einen Twitch-Streaming Server. Die Fernbedienung sollen Sie als **Android-App** für ein Smartphone realisieren. Der "Fernseher" ist vorgegeben und wird im Praktikum simuliert durch eine gegebene **Java-Anwendung** auf dem PC, welche umschaltbare Standbilder anstelle laufender Fernsehprogramme zeigt. Die notwendigen Dateien finden Sie im [Moodle-Kurs des Moduls](https://lernen.h-da.de/course/view.php?id=6802).-->

### Übersicht

Entwerfen Sie eine nutzerInnenzentrierte und anwendungsfallorientierte **Steuerungsapplikation** in Form einer **Mobilen-App** für die folgenden Szenarien

- eine Steuerungs-App für einen **TV-Server** (=Fernseher)
- eine Steuerungs-App für einen **Twitch Streaming-Server**
- eine **Lebensmittelinformations-App** ([Projektseite](openfoodfacts.md)) auf Basis der [OpenFoodFacts-API](https://openfoodfacts.github.io/api-documentation/) 

Der TV-Server sowie der Twitch Streaming-Server sind bereits implementiert und können auf dem eigenen Laptop als eigenständig laufbare Programme installiert werden. 
Während der Twitch Streaming-Server "live content" darstellt und eine **aktive Internet-Verbindung** benötigt, simuliert der TV-Server das laufende Fernsehprogramm in Form von umschaltbaren Standbildern.

Die **Lebensmittelinformations-App** ist seit dem SoSe 2022 neu hinzugekommen. Nährere Informationen zu diesem Projekt sowie zu den zur Verfügung stehenden Daten bzw. APIs finden sich auf der [Projektseite](openfoodfacts.md) sowie unter [Tipps zur Nutzung der API](openfoodfacts_api_infos.md).

!!! info "Wahl des Projektthemas"
    Die Wahl des Anwendungsszenarios (TV-Server / Twitch / Nahrungsmittelinfo-App) hängt von den eigenen Vorlieben ab und ist unabhängig für die Testierung des Praktikums. Einzig für die [Usability Evaluierung](termin5.md) müssen Sie für das Twitch- und Nahrungsmittelinfo-Szenario eigene Usability Tests entwerfen (_für den TV-Server sind diese vorgegeben, können aber/sollen angepasst bzw. erweitert werden_).

!!! info "Infos zur TV- und Twitch-App" 
    Die Apps für den TV- und Twitch-Streaming-Server sind reine *Steuerungsapplikationen*. Innerhalb der App brauchen Sie _keinen_ Live-Content darzustellen (im Fall von Twitch). Vorschaubilder / Thumbnails / etc. können und sollen Sie natürlich einbinden.




### Quelldateien

Den Programmcode des TV-Servers einschließlich der einzubindenden Java-Klasse (`HttpRequest.java`) für die Kommunikation der App mit dem TV-Server können Sie auf den Seiten des [Moodle-Kurses](https://lernen.h-da.de/course/view.php?id=6802) der Lehrveranstaltung herunterladen.

Informationen zur Installation und Nutzung des Twitch Streaming-Servers finden Sie online auf den Projektseiten unter <https://stream-server.h-da.io/>.

<!-- wird im Praktikum simuliert durch eine gegebene **Java-Anwendung** auf dem PC, welche umschaltbare Standbilder anstelle laufender Fernsehprogramme zeigt. Die notwendigen Dateien finden Sie im [Moodle-Kurs des Moduls](https://lernen.h-da.de/course/view.php?id=6802). -->

<!-- Der "Fernseher" hat die **technischen** (Vorsicht: Falle!) **Features**
* 16:9-Display, 
* Senderauswahl, 
* Lautstärkeregelung, 
* Anpassung an verschiedene Bildseitenverhältnisse (4:3, 16:9, CinemaScope 2,35:1), 
* Picture in Picture (ein zweiter Sender wird verkleinert im Bild dargestellt), 
* Festplattenrecorder mit TimeShift (zeitversetzte Wiedergabe während der Aufnahme, aber keine allgemeinen Recorder-Funktionen) und 
* Kanalscan für die Inbetriebnahme. -->

### Zielsetzung

Die Benutzungsoberfläche der Steuerungs-Apps soll **intuitiv** und **komfortabel** sein und eine hohe **Usability** aufweisen. Sie soll sich an den **spezifischen Bedürfnissen**, **situativen Nutzungskontexten** und **Erwartungen** der Benutzenden orientieren. Eine Bedienungsanleitung oder ein online Hilfesystem *MUSS* völlig überflüssig sein. Denken Sie hierbei an die Besonderheiten und spezifischen Bedürfnisse der verschiedenen Benutzergruppen und versuchen Sie diese in einem gemeinsamen UI-Design abzubilden (--> vgl. die IKEA-Fallstudie). 

Konzentrieren Sie sich insbesondere auf die **Anwendungsfälle**, **Nutzungskontexte** und **Ziele** der Personen bzw. der Stereotypen und _NICHT_ auf irgendwelche technischen Features – diese sind für die Erfüllung der Aufgabe zweitrangig (siehe auch den Einführungsfoliensatz zur Veranstaltung).

Bauen Sie _keine_ klassische Plastik-Fernbedienung mit all ihren Restriktionen nach, sondern nutzen Sie die Freiheitsgrade, die eine Smartphone App bietet.

In [Termin #2](termin2.md) sind die zu implementierenden **Mindestanforderungen** für beide Applikationsszenarien aufgelistet. Darüber hinaus gehende Features oder Funktionen (_die Sie im Rahmen des User Research gewonnen haben_) sollen Sie berücksichtigen, Sie müssen diese aber nicht implementieren; hier sind in die Applikation integrierte **Mock-Ups** vollkommen ausreichend. 

<!--Denken Sie auch an **SeniorInnen** als Benutzergruppe, nicht nur an Digital Natives (es geht um die App selbst; den Aufrufkontext „Handy“ blenden wir für das Praktikum aus). Die Herausforderung der Aufgabe besteht in der **Beschränkung auf das Wesentliche** - verfallen Sie nicht in Featuritis!--> 

Ein paar Anregungen zur **Anwendungsfallorientierung** (ohne Anspruch auf Vollständigkeit):

* Erste Inbetriebnahme
* Senderauswahl nach Programmzeitschrift / Zappen / Werbepause überbrücken
* Spannende Sendung/Stream - Telefon klingelt

!!! danger ""
    **Hinweis:** Beide Serverapplikationen sind reine **Simulatoren**, d.h., sie speicheren *keinerlei* Daten oder Zustände --> diese müssen Sie im **Datenmodell** Ihrer App selbst verwalten.