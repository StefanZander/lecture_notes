<!-- # Aufgabenstellungen 

!!! note
    Seit dem WiSe 2019/2020 bieten wir neben der bisherigen Aufgabenstellung  -->


<!-- # Fernbedienung für einen „Fernseher“ -->

<!-- # Aufgabenstellung -->
# Nutzerzentrierte Enwicklung einer mobilen Mediensteuerungs-App

Aufgabenstellung zum Praktikum "Nutzerzentrierte Softwareentwicklung" (Version 3.0)


!!! note
    **Vorbemerkung:** Das Thema "Fernsehgerät" und "Twitch Stream-Server" wurde nur deshalb für das Praktikum gewählt, weil Sie dadurch einen leichten Zugang zur Anwendungsdomäne und zu potentiellen Benutzern haben. Die hier praktizierten Methoden sind aber nicht auf Consumer-Anwendungen beschränkt, sondern passen ebenso für andere "Datenverarbeitungsanwendungen".


<!--Entwerfen Sie eine nutzerzentrierte und anwendungsfallorientierte **Fernbedienung** für einen "Fernseher" oder einen Twitch-Streaming Server. Die Fernbedienung sollen Sie als **Android-App** für ein Smartphone realisieren. Der "Fernseher" ist vorgegeben und wird im Praktikum simuliert durch eine gegebene **Java-Anwendung** auf dem PC, welche umschaltbare Standbilder anstelle laufender Fernsehprogramme zeigt. Die notwendigen Dateien finden Sie im [Moodle-Kurs des Moduls](https://lernen.h-da.de/course/view.php?id=6802).-->

### Übersicht

Entwerfen Sie eine nutzerzentrierte und anwendungsfallorientierte **Steuerungsapplikation** in Form einer **Android-App** für einen vorgegebenen

- **TV-Server** (=Fernseher) _oder_ einen 
- **Twitch Streaming-Server**. 
 
TV-Server sowie der Twitch Streaming-Server sind bereits implementiert und können auf dem eigenen Laptop als eigenständig laufbare Programme installiert werden. 
Während der Twitch Streaming-Server "live content" darstellt und eine **aktive Internet-Verbindung** benötigt, simuliert der TV-Server das laufende Fernsehprogramm in Form von umschaltbaren Standbildern.

!!! note
    **Hinweis**: Die Wahl des Anwendungsszenarios (TV-Server vs. Twitch) hängt von den eigenen Vorlieben ab und ist unabhängig für die Testierung des Praktikums. Einzig für den [Termin #5](termin5.md) müssen Sie für das Twitch-Szenario eigene Usability Tests entwerfen (_für den TV-Server sind diese vorgegeben, können aber auch angepasst werden_).

!!! note
    **Wichtig**:  Die Android-Apps sind reine "Steuerungsapplikationen". Die brauchen innerhalb der App _keinen_ Live-Content darzustellen (im Fall von Twitch). Vorschaubilder / Thumbnails / etc. können und sollen Sie natürlich einbinden.




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

Die Benutzungsoberfläche der Steuerungs-Apps soll **intuitiv** und **komfortabel** sein und eine hohe **Usability** aufweisen. Eine Bedienungsanleitung oder ein online Hilfesystem *MUSS* völlig überflüssig sein. Denken Sie hierbei an die Besonderheiten und spez. Bedürfnisse der verschiedenen Benutzergruppen und versuchen Sie diese in einem gemeinsamen UI-Design abzubilden (--> vgl. die IKEA-Fallstudie). 

Konzentrieren Sie sich insbesondere auf die **Anwendungsfälle**, **Nutzungskontexte** und **Ziele** der Personen bzw. Ihres Stereotyps und _nicht_ auf irgendwelche technischen Features.

Bauen Sie _keine_ klassische Plastik-Fernbedienung mit all ihren Restriktionen nach, sondern nutzen Sie die Freiheitsgrade, die eine Smartphone App bietet.

In [Termin #2](termin2.md) sind die zu implementierenden **Mindestanforderungen** für beide Applikationsszenarien aufgelistet. Darüber hinaus gehende Features oder Funktionen (_die Sie im Rahmen des User Research gewonnen haben_) sollen Sie berücksichtigen, Sie müssen diese aber nicht implementieren; hier sind in die Applikation integrierte **Mock-Ups** vollkommen ausreichend. 

<!--Denken Sie auch an **SeniorInnen** als Benutzergruppe, nicht nur an Digital Natives (es geht um die App selbst; den Aufrufkontext „Handy“ blenden wir für das Praktikum aus). Die Herausforderung der Aufgabe besteht in der **Beschränkung auf das Wesentliche** - verfallen Sie nicht in Featuritis!--> 

Ein paar Anregungen zur **Anwendungsfallorientierung** (ohne Anspruch auf Vollständigkeit):

* Erste Inbetriebnahme
* Senderauswahl nach Programmzeitschrift / Zappen / Werbepause überbrücken
* Spannende Sendung/Stream - Telefon klingelt

!!! warning
    **Hinweis:** Beide Serverapplikationen sind reine **Simulatoren**, d.h., sie speicheren *keinerlei* Daten oder Zustände --> diese müssen Sie im **Datenmodell** Ihrer App selbst verwalten.