# Semesterthema Web-basierter Pizzaservice bzw. Onlineshop

!!! abstract
    **Zielsetzung** --> {>>move to Termin 0<<}

    - [x] Stellen Sie sicher, dass Sie die Aufgabe "Pizzaservice" genau verstanden haben und klären Sie offene Punkte frühzeitig
    - [x] Analysieren Sie sämtliche Vorgaben (sowohl vom Auftraggeber als auch
    interne Vorgaben) 
    - [x] Identifizieren Sie Inkonsistenzen und offene Punkte und klären Sie die Fragen mit Ihrem Betreuer


## Vorbemerkungen

Im Lauf des Semesters soll eine **integrierte webbasierte Anwendung** in Form eines Pizzaservices oder eines Webshops nach eigener Wahl entwickelt werden.

Der Webshop soll die folgenden **technischen Eigenschaften** aufweisen:

**Clientseitig**:

- Responsive Webseiten mit HTML und CSS
- Nutzereingaben mittels Formularen
- Client-seitige Interaktion mit JavaScript
- Echtzeitaktualisierung von Statusinformationen mittels AJAX und JSON

**Serverseitig**:

- Apache Webserver
- Dynamische Seitengenerierung mit PHP
- Anbindung einer MySQL-Datenbank
- Nutzung der Seiten- und Blockklassenarchitektur
- Generierung von JSON-Daten

Der Schwerpunkt liegt hierbei auf ==**professioneller Webentwicklung**==!

- mit Standardkonformität, Barrierefreiheit, Dokumentation, Test etc. 
- keine Homepage-Bastelei, keine Verwendung von "Fertigteilen" !

!!! warning
    Nicht die Funktionalität steht im Vordergrund, sondern die Integration der verschiedenen Techniken und die Methodik der Vorgehensweise.

!!! warning
    Die reine Umsetzung der Funktionalität des Shopsystems reicht nicht für die Abnahme! Die **objektorientierte Umsetzung** mit **Seitenklassen** ist ein Pflichtbestandteil!


## Anforderungen

Der Pizzaservice bzw. Onlineshop soll folgende **vier Webseiten** enthalten (gilt entsprechend auch für einen eigenem Webshop):

- **Bestellung**
- **Bestellstatus**
- **Pizzabäcker** (--> Rechnungs- /Versandabteilung etc.)
- **Fahrer** (--> Lieferdienst)
<!-- - TODO: PHP Controller für AJAX+JSON inkludieren -->

Der Pizzaservice soll mit **HTML5** und **CSS Level 3** dargestellt werden

Als Webserver wird **Apache 2** verwendet und als Datenbank **MySQL** (enthalten im XAMPP Paket)

Die **Abnahme** erfolgt auf Ihren Laptops mit den gängigen Browsern.

Für die PHP-Entwicklung müssen **Seiten-Templates** verwendet werden, die vorgegeben und über den EWA-Moodlekurs herunterladbar sind.

### Designskizze

TODO: Include

### Anforderungen des Auftraggebers

- **Pizzabestellung**

    Hier kann der Kunde seine Pizzen aus der Speisekarte auswählen und in einen
    Warenkorb übernehmen. 

    Hier wird der Preis der Bestellung angezeigt und es muss eine Lieferadresse angegeben werden.

- **Bestellstatus**

    Hier kann ein Kunde sehen, in welchem Zustand seine Pizzen sind (`bestellt`, `im Ofen`, `fertig`, `unterwegs`). 

    Er sieht nur seine Bestellung – ==und keine Aufträge von anderen Kunden==.

- **Pizzabäcker**

    Hier werden die bestellten Pizzen angezeigt. Der Pizzabäcker kann den Status für jede Pizza von "`bestellt`" auf "`im Ofen`" bzw. "`fertig`" setzen. 
    
    Übernimmt der Fahrer eine Pizza, so verschwindet sie aus der Liste.

- **Fahrer**

    Hier werden Bestellungen mit den einzelnen Pizzen, Preis und Adresse angezeigt. Der Fahrer kann den Status der Lieferungen verändern.      
    Eine Lieferung ist entweder "`fertig`", "`unterwegs`" oder "`geliefert`".  
    Lieferungen tauchen erst beim Fahrer auf, wenn alle zugehörigen Pizzen fertig sind.      
    Ausgelieferte Bestellungen verschwinden aus der Liste.

### Sonstige Anforderungen

- Die Speisekarte kann um weitere Pizzen erweitert werden. Die Preisberechnungen ändern sich dann (ohne Neuprogrammierung)

- Es werden nur gültige Bestellungen akzeptiert

- Die Auswahl einer Pizza soll über einen Mausklick auf ein Pizzasymbol erfolgen

- Der Warenkorb bietet die allgemein üblichen Funktionen

- Die Bestellseite passt ihre Darstellung für schmale Handybildschirme an und verwendet ein responsives Layout

- Versuchen Sie das Layout so umzusetzen, wie es in der Designskizze dargestellt ist. Es sollen 4 getrennte Seiten entwickelt werden

- Die Seiten "Pizzabäcker" und "Fahrer" sollen sich *automatisch* aktualisieren


### Interne Anforderungen

- Es gibt zu Testzwecken eine weitere Webseite "Übersicht", welche (für einfache Tests) Links zu den 4 Webseiten beinhaltet
- Tests sollen so klar formuliert sein, dass sie automatisiert laufen könnten




