# Anforderungen an die Webanwendung

!!! note
    **Hinweis**: Die Anforderungen sind aus Sicht des Pizzaservice beschrieben. Wenn Sie einen **eigenen Webshop** entwickeln, dann müssen Sie die Anforderungen entsprechend übertragen (bspw. kann anstelle der Bäckerseite eine Versandabteilungs- oder Kommissionierungsseite etc. erstellt werden). Die Anforderungen hinsichtlich **Aufbau und Funktionsweise gelten dann analog** für die Seiten des eigenen Webshops.

## Aufbau der Webanwendung

Der Pizzaservice bzw. Onlineshop soll folgende **vier Webseiten** enthalten (gilt entsprechend auch für einen alternativen Webshop):

- **Bestellung**
- **Kunde** (--> die Aktualisierunglogik wird in [Termin 4](termin4.md) implementiert)
- **Pizzabäcker** 
- **Fahrer** 
<!-- - TODO: PHP Controller für AJAX+JSON inkludieren 
RH: Das hat auf Anforderungsebene nichts zu suchen. Es reicht, wenn das im AJAX-Termin kommt! -->

Der Pizzaservice soll mit standardkonformem **HTML5** und **CSS Level 3** dargestellt werden.

Als Webserver wird **Apache 2** verwendet und als Datenbank **MariaDB** (enthalten im [XAMPP Paket](https://www.apachefriends.org/download.html)).

Die **Abnahme** erfolgt auf Ihren Laptops oder den Laborrechnern mit **mindestens zwei** gängigen Browsern.

Für die PHP-Entwicklung müssen **Seiten-Templates** (--> siehe [Termin 2: PHP – Objektorientierte Seitenklassen und Datenbankzugriffe](termin2.md)) verwendet werden, die vorgegeben sind.

## Funktion der einzelnen Seiten

<!-- ![](./figures/designskizze.png)*Konzeptionelle Darstellung der vier Web-Seiten des Pizzaservice bzw. Onlineshops* -->
Die folgende Designskizze zeigt grob den erwarteten Inhalt und die Bedienelemente der zu entwickelnden Webseiten. Es sollen 4 getrennte Seiten entwickelt werden: `Bestellung`, `Pizzabäcker`, `Kunde` und `Fahrer`.  
![](./figures/DesignskizzePizzaservice.png)*Designskizze - nur Funktionen, kein Layout*

- **Pizzabestellung**

    Hier kann der Kunde gewünschte Pizzen aus der Speisekarte auswählen und in einen
    Warenkorb übernehmen. 

    Es wird der Preis der Bestellung angezeigt und es kann eine Lieferadresse angegeben werden.

- **Kunde**

    Hier kann ein Kunde sehen, in welchem Zustand seine Pizzen sind (`bestellt`, `im Ofen`, `fertig`, `unterwegs`). 

    Er sieht nur seine Bestellung – **und keine Aufträge von anderen Kunden**.

- **Pizzabäcker**

    Hier werden die bestellten Pizzen angezeigt. Der Pizzabäcker kann den Status für jede Pizza von "`bestellt`" auf "`im Ofen`" bzw. "`fertig`" setzen. 
    
    übernimmt der Fahrer eine Pizza, so verschwindet sie aus der Liste des Bäckers.

- **Fahrer**

    Hier werden Bestellungen mit den einzelnen Pizzen, Preis und Lieferadresse angezeigt. Der Fahrer kann den Status der Lieferungen verändern. Eine Lieferung ist entweder "`fertig`", "`unterwegs`" oder "`geliefert`".  
    Bestellungen tauchen erst beim Fahrer auf, wenn alle zugehörigen Pizzen fertig sind.      
    Ausgelieferte Bestellungen verschwinden aus der Liste.

## Sonstige Anforderungen

- Es werden nur Bestellungen akzeptiert, die mindestens einen Artikel enthalten und bei denen die Lieferadresse nicht leer ist.

- Das Einfügen einer Pizza in den Warenkorb soll über einen Klick auf das Pizzasymbol in der Speisekarte erfolgen

- Im Warenkorb können mehrere Pizzen ausgewählt und gelöscht werden, oder auch alle Pizzen auf einmal.

- Die Seiten `Pizzabäcker`, `Kunde` und `Fahrer` sollen sich **automatisch aktualisieren**.  

- Wenn eine neue Pizza in die Datenbank mit den angebotenen Pizzen eingetragen wird, so wird diese nach dem Neuladen der Bestellseite angezeigt und die Preisberechnung des Warenkorbs funktioniert ohne Änderungen am Code.
  
- Die Bestellseite verwendet ein **responsives Layout** und passt ihre Darstellung für schmale Handybildschirme an. Versuchen Sie das Layout so umzusetzen, wie es in der Designskizze dargestellt ist. 

- Es gibt zu **Testzwecken** eine weitere Webseite `Übersicht`, welche (für einfache Tests) Links zu den 4 Webseiten beinhaltet. Diese Seite existiert nur zu Testzwecken und darf deshalb mit statischem HTML erstellt werden.

    !!! note
        **Hinweis**:  
        Alternativ können Sie auch eine **Navigationsleiste** bzw. ein **Navigationsmenu** in die Web-Applikation integrieren, dann müssen Sie *keine* separate Übersichtsseite implementieren. Achten Sie aber bitte darauf, dass man diese Leiste bequem entfernen kann - sie soll nämlich nicht ausgeliefert werden.





