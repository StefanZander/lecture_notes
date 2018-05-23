# Fernbedienung für einen „Fernseher“

Aufgabenstellung zum Praktikum "Nutzerzentrierte Softwareentwicklung" (Version 2.7)


!!! note
    **Vorbemerkung:** Das Thema "Fernsehgerät" wurde nur deshalb für das Praktikum gewählt, weil Sie dadurch einen leichten Zugang zur Anwendungsdomäne und zu potentiellen Benutzern haben. Die hier praktizierten Methoden sind aber nicht auf Consumer-Anwendungen beschränkt, sondern passen ebenso für "Datenverarbeitung".

Entwerfen Sie eine nutzerzentrierte und anwendungsfallorientierte Fernbedienung für einen "Fernseher". Die Fernbedienung sollen Sie als **Android-App** für ein Smartphone realisieren. Der "Fernseher" ist vorgegeben und wird im Praktikum simuliert durch eine gegebene **Java-Anwendung** auf dem PC, welche umschaltbare Standbilder anstelle laufender Fernsehprogramme zeigt.

Der "Fernseher" hat die **technischen** (Vorsicht: Falle!) **Features**

* 16:9-Display, 
* Senderauswahl, 
* Lautstärkeregelung, 
* Anpassung an verschiedene Bildseitenverhältnisse (4:3, 16:9, CinemaScope 2,35:1), 
* Picture in Picture (ein zweiter Sender wird verkleinert im Bild dargestellt), 
* Festplattenrecorder mit TimeShift (zeitversetzte Wiedergabe während der Aufnahme, aber keine allgemeinen Recorder-Funktionen) und 
* Kanalscan für die Inbetriebnahme.

Die Benutzungsoberfläche der Fernbedienung soll **intuitiv** und **komfortabel** sein und eine hohe **Usability** aufweisen. Eine Bedienungsanleitung *muss* völlig überflüssig sein. Denken Sie auch an **SeniorInnen** als Benutzergruppe, nicht nur an Digital Natives (es geht um die App selbst; den Aufrufkontext „Handy“ blenden wir für das Praktikum aus). Die Herausforderung der Aufgabe besteht in der **Beschränkung auf das Wesentliche** - verfallen Sie nicht in Featuritis! Bauen Sie auch keine klassische Plastik-Fernbedienung mit all ihren Restriktionen nach, sondern nutzen Sie die Freiheitsgrade, die eine Smartphone App bietet.

Ein paar Anregungen zur **Anwendungsfallorientierung** (ohne Anspruch auf Vollständigkeit):

* Erste Inbetriebnahme
* Senderauswahl nach Programmzeitschrift / Zappen / Werbepause überbrücken
* Spannende Sendung - Telefon klingelt


!!! warning
    **Hinweis:** Der Fernseher ist nur ein Simulator; er speichert keinerlei Daten oder Zustände -- diese müssen Sie im Datenmodell Ihrer App verwalten.