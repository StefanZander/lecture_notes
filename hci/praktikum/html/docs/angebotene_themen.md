# Informationen zu den angebotenen Themen


## Benutzungsfreundliche Fernbedienung für einen TV-Server oder einen Twitch-Streaming-Server

Entwerfen Sie eine nutzerzentrierte und anwendungsfallorientierte **Fernbedienung** für einen "Fernseher" oder einen Twitch-Streaming Server. Die Fernbedienung sollen Sie als **mobile App** für ein Smartphone realisieren. Der "Fernseher" ist vorgegeben und wird im Praktikum simuliert durch eine bereitgestellte **Java-Anwendung**, welche auf dem eigenen Rechner ausführbar ist. Die Fernseh-Anwendung zeigt umschaltbare Standbilder anstelle laufender Fernsehprogramme. Die notwendigen Dateien finden Sie im [Moodle-Kurs des Moduls](https://lernen.h-da.de/course/view.php?id=6802).


Der Twitch Streaming-Server ist ebenfalls bereits implementiert und kann lokal ausgeführt werden. Dieser ist in der Lage "live content" darzustellen und benötigt eine **aktive Internet-Verbindung**.

!!! danger "Keine Nachbauten bestehender Applikationen oder Fernbedienungen"
    Bauen Sie _keine_ klassische Plastik-Fernbedienung mit all ihren Restriktionen nach, sondern nutzen Sie die Freiheitsgrade, die eine Smartphone App bietet.



### Quelldateien

Den Programmcode des TV-Servers einschließlich der einzubindenden Java-Klasse (`HttpRequest.java`) für die Kommunikation der App mit dem TV-Server können Sie auf den Seiten des [Moodle-Kurses](https://lernen.h-da.de/course/view.php?id=6802) der Lehrveranstaltung herunterladen.

Informationen zur Installation und Nutzung des Twitch Streaming-Servers finden Sie online auf den Projektseiten unter <https://stream-server.h-da.io/>.


<!-- Der "Fernseher" hat die **technischen** (Vorsicht: Falle!) **Features**
* 16:9-Display, 
* Senderauswahl, 
* Lautstärkeregelung, 
* Anpassung an verschiedene Bildseitenverhältnisse (4:3, 16:9, CinemaScope 2,35:1), 
* Picture in Picture (ein zweiter Sender wird verkleinert im Bild dargestellt), 
* Festplattenrecorder mit TimeShift (zeitversetzte Wiedergabe während der Aufnahme, aber keine allgemeinen Recorder-Funktionen) und 
* Kanalscan für die Inbetriebnahme. -->

### Weitere Hinweise

Ein paar Anregungen zur **Anwendungsfallorientierung** (ohne Anspruch auf Vollständigkeit):

* Erste Inbetriebnahme
* Senderauswahl nach Programmzeitschrift / Zappen / Werbepause überbrücken
* Spannende Sendung/Stream - Telefon klingelt

!!! danger "Lokale Datenverwaltung in der App"
    Beide Serverapplikationen sind reine **Simulatoren**, d.h., sie speicheren *keinerlei* Daten oder Zustände --> diese müssen Sie im **Datenmodell** Ihrer App selbst verwalten.

Denken Sie auch an **SeniorInnen** als Benutzergruppe, nicht nur an Digital Natives (es geht um die App selbst; den Aufrufkontext „Handy“ blenden wir für das Praktikum aus). Die Herausforderung der Aufgabe besteht in der **Beschränkung auf das Wesentliche** - verfallen Sie nicht in Featuritis! 


### Mindestanforderungen

Die mobilen Applikationen müssen mindestens die folgenden Systemmerkmale (vgl. KANO-Modell) bieten: 
    <!-- (_siehe auch die im Kapitel [Vorbemerkung](vorbemerkung.md) aufgezählten Funktionen_).   -->

#### Fernbedienung für TV-Server

- Seitenverhältnis einstellen  
- Sender auswählen
- Zappen
- Kanalsuchlauf
- Favoriten anlegen und verwalten
- Timeshift (wird das aktuelle Programm zeitversetzt wiedergegeben?)  
    
    !!! note "Hinweis zur Implementierung der Timeshift-Funktion"
        Halten Sie die Funktion so einfach wie möglich; ein Vor- oder Zurückspulen ist nicht notwendig. Zeigen Sie in der UI nur an, ob das Live-Programm abgespielt wird oder Nutzende zeitversetzt fern sehen bzw. das aktuelle Programm pausiert.

- Lautstärkeregelung inkl. Mute
- Picture in Picture


#### Twitch Stream-Server

- Picture in Picture
- Favoriten anlegen und verwalten
- Filterung der TopStreams nach min. _einer_ frei zu wählenden Eigenschaft (Sprache, Spiel, Kanal) ([Link](https://stream-server.h-da.io/reference/#twitchgettopstreams))
- Gamessuche ([Link](https://stream-server.h-da.io/reference/#twitchsearchgames)) <!-- see http://criticmarkup.com/users-guide.php -->
- Umschalten zwischen themenverwandten Streams
- Auswahl eines Streams
- Pausieren eines Streams
- Anzeige von online- und offline Streams







## Lebensmittelinformations-App

!!! warning "Neues Thema: Lebensmittelinformations-App"  
    Ab dem SoSe 2022 bieten wir ein drittes Semesterprojektthema im Kontext Verbraucherschutz bzw. Verbraucheraufklärung an. Hierdurch sollen Verbraucher in die Lage versetzt werden, informierte Kaufentscheidungen hinsichtlich der in Lebensmitteln enthaltenen Inhalts- bzw. Nährstoffe treffen zu können. 

Die **Lebensmittelinformations-App** ist seit dem SoSe 2022 neu hinzugekommen. Nährere Informationen zu diesem Projekt sowie zu den zur Verfügung stehenden Daten bzw. APIs finden sich auf der [Projektseite](openfoodfacts.md) sowie unter [Tipps zur Nutzung der API](openfoodfacts_api_infos.md).


### Mindestanforderungen

#### Nahrungsmittelinformations-App

- Abrufen von Basisinformationen zu Lebensmitteln
- Abruf von Nährwert-Bewertungen (engl. Nutrition Score)
- Eingabe von Barcodes und Abruf von Stammdaten / Basisinformationen auf Basis von Barcodes
- Abruf von Inhaltsstoffen und Allergenen zu Lebensmitteln
- ... 