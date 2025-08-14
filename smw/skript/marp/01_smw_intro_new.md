---
marp: true
theme: custom-theme-roboto
paginate: true
---
<style>
/**
 * @theme enable-all-auto-scaling
 * @auto-scaling true
 */

/* @import 'default'; */
/* @import url('user-theme2.css'); */



</style>

<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files 01_smw_intro_new.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- 01_smw_intro_new.md -->

# Semantisches Wissensmanagement im Unternehmen: <br />Konzepte, Technologien, Anwendungen

#### Prof. Dr. Stefan Linus Zander

Kapitel 1: Einführung in das Wissensmanagement {.lightgreen .Big .skip}


---
<!-- header: Kapitel 1: Einführung -->
<!-- footer: Prof. Dr. Stefan Zander -->
![bg right:42% 215%](images/landscape_flowers_red.jpg)
# Leitfragen


- Was ist Wissen ?
- Warum sollte man sich mit dem Thema Wissensmanagement auseinandersetzen ?
- Warum benötigen Unternehmen ein funktionierendes Wissensmanagement ?
- Welche Wissensmanagementansätze gibt es und wodurch unterscheiden sie sich ?
- Welche Rolle spielt :fas-computer: IKT im Wissensmanagement?
- Warum wird Wissensmanagement mit fortschreitender Digitalisierung (aka Digitale Souveränität) immer wichtiger ?
- Welche Rolle spielt der Mensch :fas-person: im Wissensmanagement ?

---

# Gliederung
![bg right:48% 175%](images/landscape_summer_village.jpg)

1. Gesellschaftliche Implikationen und Veränderungen
2. Was ist Wissen ?
   1. Definitionsversuche
   2. Wissensarten
3. Wissensmodelle
   1. Wissenstreppe nach Klaus North
   2. Das SECI-Modell
4. Wissensmanagement
   1. Hauptaufgaben
   2. Ziele
   3. Grundlegende Konzepte
   4. Typische Wissensmanagementprobleme
5. Die Rolle des Menschen im Wissensmanagement
6. Lernzielkontrolle



---
<!-- header: Kapitel 1: Warum brauchen Organisationen Wissensmanagement -->
<!-- # Warum benötigen Organisationen ein funktionierendes Wissensmanagement ? -->
# Über die Notwendigkeit des Managements von Wissen

---
# Von der :fas-industry: Industrie- zur :fas-brain: Wissensgesellschaft
<!-- beschäftigungsanteil_inland -->

::: twocolumns small
Mitte der 1960er Jahre waren __50% aller Beschäftigten__ in der Industrie tätig.

Seit dieser Zeit hat sich die :fas-arrow-trend-up: __Produktivität__ durch Automatisierung __versechsfacht__(!) und durch die Globalisierung hat sich die Massenproduktion der meisten Güter weltweit verteilt.

Mehrheit der :fas-people-group: Bevölkerung inzwischen im **Dienstleistungsbereich** beschäftigt.

Durch die zunehmende Digitalisierung werden __wissensbasierte Dienstleistungen__ zum dominanten Wirtschaftssegment.

Während vor wenigen Jahren noch von der Informationsgesellschaft gesprochen wurde, welche die Industriegesellschaft beerben sollte, ist es heute Konsens, dass die Ablösung der Industriegesellschaft treffender durch den Begriff der *:fas-brain: __Wissensgesellschaft__* umschrieben werden sollte.

![](../html/docs/figures/wissensgesellschaft.jpg)
:::

::: footnotes skip
Quelle: Bundeszentrale für politische Bildung: Wissensgesellschaft – Eine Idee im Realitätscheck; online abrufbar unter: https://www.bpb.de/gesellschaft/bildung/zukunft-bildung/146199/wissensgesellschaft
:::



---
# Beispiele

:::: columns 
::: single small
__Sektoraler Wandel in Deutschland, Großbritannien und der EU__ :fas-earth-europe:

Der Anteil der _verarbeitenden Industrie_ (in Deutschland mit den wichtigen Sektoren Automobil, Chemie, Pharmazeutika und dem Bereich der Investitionsgüter wie Maschinenbau, elektrische Ausrüstungen etc.) an der gesamtgesellschaftlichen Wertschöpfung schrumpft, meist verbunden mit einem _Abbau von Arbeitsplätzen_ in diesem Sektor. Das ist ein langfristiger Trend, der freilich in den letzten zehn Jahren in Deutschland aufgehalten wurde, während er sich in der _EU ungebremst fortsetzte_. 

In Deutschland hat sich der Anteil des verarbeitenden Gewerbes an der Bruttowertschöpfung von 37% in 1971 auf _22,6%_ in _2011 verringert_. Zum Vergleich: 1979 betrug im Großbritannien der industrielle Anteil 33%, 2011 lag er bei 10,8%. In diesem Zeitraum entstand in der Londoner City die moderne Finanzwirtschaft. In der EU fiel der entsprechende Anteil im Zeitraum von 2001 bis 2011 von 18% auf 15,5%.
:::
::: single small
**Von Produktion zu Dienstleistung – das Beispiel Automobilindustrie** :fas-car:

Die Automobilindustrie produziert zwar noch immer Automobile. Die Aufgabe besteht heute aber zunehmend darin, nicht das physische Produkt »Auto« zu verkaufen, sondern _:fas-map-location-dot: Mobilitätsbedürfnisse der Kunden_ zu befriedigen. Die Menschen wollen das Auto nicht mehr unbedingt besitzen, sondern es dort nutzen, wo ihnen Fahrrad, Bahn oder Bus nicht ausreichen. Die Lösung dieser Fragen – zum Beispiel durch Car-Sharing eingebunden in weitere Nutzungsmöglichkeiten – erfordert _kommunikative und logistische Leistungen, die weit über die Herstellung der physischen Produkte hinausgehen_. Es geht um Kommunikation mit den Kunden und um Kooperation mit ihnen, die in gewisser Weise zu Co-Produzenten des Mobilitätsangebots werden.
::::

::: footnotes
Quelle: Bundeszentrale für politische Bildung: Wissensgesellschaft – Eine Idee im Realitätscheck; online abrufbar unter: https://www.bpb.de/gesellschaft/bildung/zukunft-bildung/146199/wissensgesellschaft
:::


---
# Die Wissensgesellschaft

::::: columns
:::: single
**Früher** :fas-tractor:{.Big}
- Informationen werden von wenigen ausgewählten »ExpertInnen« bereitgestellt
- Passive Rolle der Nutzenden: überwiegend rezeptiver Prozess der Informationsrecherche
- __Leitgedanke__: 
    ==Wissen ist statisch und wird wie ein Gut von einer Person zur anderen übertragen==
::::
:::: single
**Heute** :fas-computer:{.Big}
- Informationen werden von _allen Nutzenden_ bereitgestellt
- Aktive Rolle der Nutzenden: _selbstgesteuerter, konstruktiver Prozess, fügt Informationen hinzu, verknüpft und validiert Informationen; lebt »digital literacy«_
- __Leitgedanke__: 
    ==Wissen ist dynamisch und wird von Akteuren auf Grund von Erfahrungen konstruiert und auf Basis praktischer Bedürfnisse laufend verändert==
:::::

<!-- | Industriegesellschaft |  | Wissensgesellschaft |
| --- | :---: | --- |
| Sachkapital | -- | Wissenskapital  |
| Hierarchie/Kontrolle | -- |  Vernetzung/Fokussierung |
| Produkte | -- | Problemlösungen |  -->

::: bluebox skip
Gefragt ist nicht formelles, abrufbares Wissen, sondern Formen "__lebendigen Wissens__", wie *Erfahrungswissen :fas-user-gear:*, *Urteilsvermögen :fas-scale-balanced:*, *Selbstorganisation :fas-sitemap:*, etc. Nicht alles wissen, aber wissen, wo es zu finden ist. Wichtig werden Fähigkeiten wie die Generierung, Konstruktion, Selektion, Reflexion, Validierung und Vernetzung von Wissen.
:::

::: footnotes
Quelle: Wilmar Raddatz, "Wissensgesellschaft – Was ist Wissen?"; abrufbar unter https://slideplayer.org/slide/640439/
:::



---
## Exkurs: Was ist Digital Literacy ?

::::: smallest
**Digital Literacy** (deutsch: Digitale Kompetenz) bezieht sich auf die Fähigkeit, digitale Technologien effektiv und kritisch zu nutzen, zu bewerten und Informationen zu erstellen. Sie umfasst eine Reihe von Fähigkeiten, darunter:

:::: columns
::: single
- **Grundlegende Computerkenntnisse**: Verstehen, wie man Computer, Smartphones und andere digitale Geräte verwendet, einschließlich Betriebssystemen, Softwareanwendungen und Internetbrowsern.

- **Internetnavigation**: Die Fähigkeit, Informationen im Internet zu finden, zu bewerten und zu nutzen, einschließlich des Verständnisses von Suchmaschinen, Online-Datenbanken und sozialen Medien.

- **Kritisches Denken und Bewertung**: Die Fähigkeit, die Glaubwürdigkeit und Zuverlässigkeit digitaler Inhalte zu beurteilen, Vorurteile zu erkennen und zwischen vertrauenswürdigen und nicht vertrauenswürdigen Quellen zu unterscheiden.

- **Online-Kommunikation**: Die Fähigkeit, digitale Werkzeuge für die Kommunikation zu nutzen, wie E-Mail, soziale Medien und Videokonferenzen, und dabei die Normen und Etikette für Online-Interaktionen zu verstehen.
:::
::: single
- **Datenkompetenz**: Das Verständnis dafür, wie man Daten in digitalen Formaten sammelt, analysiert und interpretiert, was in persönlichen und beruflichen Kontexten zunehmend wichtig wird.

- **Datenschutz und Sicherheit**: Wissen, wie man persönliche Informationen online schützt, digitale Fußabdrücke versteht und Bedrohungen wie Phishing, Malware und Betrug erkennt.

- **Inhaltserstellung**: Die Fähigkeit, digitale Inhalte wie Texte, Bilder, Audio und Video zu erstellen und zu teilen, wobei Urheberrechte und ethische Richtlinien beachtet werden.

- **Problemlösung mit Technologie**: Die Nutzung digitaler Werkzeuge und Ressourcen zur Lösung von Problemen, zur Steigerung der Produktivität und zur Innovation in verschiedenen Bereichen.
:::
::::

:::: bluebox center
Digitale Kompetenz ist in der heutigen Welt unerlässlich, da digitale Technologien in Bildung, Arbeit und Alltag allgegenwärtig sind. Sie befähigt Einzelpersonen, voll am digitalen Leben teilzunehmen, fundierte Entscheidungen zu treffen und sich wirkungsvoller und sinnvoller mit der Welt auseinanderzusetzen.
::::
:::::




---
## Zur Unterscheidung von Industrie- und Wissensgesellschaft


::: centerbox BIGSKIP bluebox padding2em
| Industriegesellschaft :fas-industry: |  | Wissensgesellschaft :fas-brain:|
| --- | :---: | --- |
| :fas-warehouse: Sachkapital | $\longleftrightarrow$ | :fas-graduation-cap: Wissenskapital  |
| :fas-sitemap: Hierarchie/Kontrolle | $\longleftrightarrow$ |  :fas-circle-nodes: Vernetzung/Fokussierung |
| :fas-basket-shopping: Produkte | $\longleftrightarrow$ | :fas-thumbs-up: Problemlösungen | 
:::



---
::::: columns 
:::: single smaller 
:fas-industry: Sachkapital{.center .big .bluebox}

1. Maschinen und Produktionsstätten
   - Ein Automobilhersteller besitzt eine Produktionshalle mit Maschinen, die zur Herstellung von Fahrzeugteilen verwendet werden. Diese Maschinen sind physische Güter, die zur Produktion beitragen und direkt in den Produktionsprozess eingebunden sind. Sie stellen also Sachkapital dar, da sie materielle Ressourcen sind, die für die Herstellung von Waren benötigt werden.

2. Bürogebäude
   - Ein Unternehmen, das Bürodienstleistungen anbietet, hat ein Bürogebäude, in dem die Mitarbeiter arbeiten. Das Gebäude, die Möbel, und die technische Ausstattung wie Computer und Server fallen unter Sachkapital. Sie sind physische Vermögenswerte, die das Unternehmen besitzt und nutzt, um seine Dienstleistungen anzubieten.

3. Fahrzeugflotte
   - Ein Logistikunternehmen betreibt eine Flotte von Lastwagen, die für den Transport von Waren eingesetzt werden. Diese Lastwagen sind ein weiteres Beispiel für Sachkapital, da sie materielle Güter sind, die das Unternehmen zur Erbringung seiner Leistungen benötigt.
::::
:::: single smaller
:fas-brain: Wissenskapital{.center .big .greenbox}

1. Patente und geistiges Eigentum
   - Ein Pharmaunternehmen hat ein Patent auf ein neu entwickeltes Medikament. Dieses Patent stellt Wissenskapital dar, weil es das Ergebnis von Forschung und Entwicklung ist und dem Unternehmen einen Wettbewerbsvorteil verschafft, indem es die exklusive Herstellung und den Vertrieb des Medikaments erlaubt.

2. Mitarbeiterkompetenzen
   - In einem IT-Unternehmen besitzen die Mitarbeiter spezielles Wissen in der Softwareentwicklung und Systemarchitektur. Dieses Wissen und die Fähigkeiten der Mitarbeiter stellen Wissenskapital dar, weil sie immaterielle Ressourcen sind, die das Unternehmen nutzt, um innovative Produkte zu entwickeln und am Markt erfolgreich zu sein.

3. Markenimage und Reputation
    - Ein Unternehmen wie Apple hat eine starke Marke und eine hohe Reputation für Qualität und Innovation. Diese immateriellen Werte sind Teil des Wissenskapitals, weil sie auf jahrelanger Innovation, Kundenvertrauen und strategischem Marketing beruhen. Diese Faktoren tragen zum langfristigen Erfolg des Unternehmens bei, obwohl sie nicht physisch greifbar sind.
:::::



---
## Einige (negative) Beispiel für die :fas-sack-dollar: Monetarisierung von Wissenskapital 

:::: small
1. **Turing Pharmaceuticals (Martin Shkreli)**
    - Fall Daraprim: Turing Pharmaceuticals, unter der Führung von Martin Shkreli, erwarb 2015 die Rechte an Daraprim, einem Medikament zur Behandlung von Toxoplasmose, das auch bei HIV-Patienten eingesetzt wird. Nach dem Erwerb erhöhte Shkreli den Preis des Medikaments drastisch von 13,50 USD auf 750 USD pro Tablette, was zu einem massiven öffentlichen Aufschrei und zu Debatten über die Preisgestaltung von Medikamenten führte. Dieser Fall ist ein prägnantes Beispiel für die problematische Monetarisierung von lebenswichtigen Medikamenten.

2. **Mylan (Epipen Skandal)**
    - Preissteigerung von EpiPen: Mylan erwarb die Rechte an EpiPen, einem lebensrettenden Medikament, das bei anaphylaktischen Schocks verwendet wird, und erhöhte den Preis für ein Zweierpack schrittweise von etwa 100 USD auf über 600 USD. Dies führte zu einem erheblichen öffentlichen Aufschrei und einer Untersuchung durch den US-Kongress. Mylan wurde beschuldigt, ihre Monopolstellung auf dem Markt auszunutzen, um Gewinne auf Kosten der Patienten zu maximieren.

3. **Horizon Pharma**
    - Preiserhöhungen nach Patentübernahme: Horizon Pharma erwarb die Rechte an mehreren seltenen Medikamenten und erhöhte deren Preise erheblich. Ein bekanntes Beispiel ist Vimovo, ein Schmerzmittel, dessen Preis nach der Übernahme von 138 USD auf über 2.000 USD pro Packung stieg. Horizon wurde dafür kritisiert, dass es durch Übernahmen und anschließende Preiserhöhungen Gewinne maximierte, ohne dass ein signifikanter Mehrwert für die Patienten entstand.
::::



---
## Weitere Beispiele für die :fas-sack-dollar: Monetarisierung von Wissenskapital 

:::: small

- **Microsoft**
    - Nokia Patente: Microsoft erwarb 2014 die Gerätesparte von Nokia zusammen mit einer Reihe von Patenten. Diese Patente halfen Microsoft, sein Windows Phone Ökosystem zu unterstützen und Lizenzgebühren von Android-Herstellern einzufordern, da viele der erworbenen Patente Android-Geräte betrafen.

- **Qualcomm**
    - Qualcomm ist ein weiteres Unternehmen, das stark von seinem Patentportfolio profitiert. Das Unternehmen investiert massiv in Forschung und Entwicklung, um neue Patente zu schaffen, und verdient Milliarden durch die Lizenzierung dieser Patente, insbesondere im Bereich der Mobilfunktechnologien wie 3G, 4G und 5G.

- **Apple**
    - Apple erhält Lizenzgebühren von vielen anderen Handyherstellern für die Nutzung bestimmter patentierter Technologien, darunter fallen
      - **Multitouch-Gesten wie das "Slide-to-Unlock"** (Patent: "Slide to Unlock") 
        Apple hällt Patente auf bestimmte Multitouch-Gesten, wie das bekannte „Slide-to-Unlock“-Feature. Android-Hersteller, die ähnliche Entsperrfunktionen implementierten mussten in einigen Fällen Lizenzgebühren zahlen oder die Funktionen anpassen.
      - **Autokorrektur und Textergänzung** (Patent: "Autokorrektur und Textergänzung") 
        Apple hatte Patente im Zusammenhang mit der Autokorrektur und Textergänzung bei der Eingabe von Texten auf Touchscreens. Hersteller von Android-Geräten, die ähnliche Funktionen in ihren Tastaturen implementierten, könnten diesen Patenten unterliegen.
      - **"Bounce-Back" Effekt** (Patent: "Rubber-Banding") 
        Dieses Patent beschreibt den Effekt, bei dem der Bildschirm "zurückspringt", wenn ein Nutzer ans Ende einer Liste scrollt. Dieser Effekt war in frühen iPhones sehr verbreitet und wurde in ähnlicher Form auch in Android-Geräten verwendet. Dies führte zu Lizenzstreitigkeiten.
      - **Systemarchitektur für mobiles Betriebssystem** (Patent: "Unified Search" und weitere Systempatente) 
        Apple hält Patente auf verschiedene Systemarchitekturaspekte, inkl. der Art und Weise, wie Suchanfragen innerhalb eines Geräts verarbeitet werden (z. B. durch Spotlight). 
::::



---
## Zusammenfassung: <br/>Warum Wissen zunehmend :fas-arrow-trend-up: wichtiger wird für :fas-building: Unternehmen

:::: columns
::: single
- **Wissensintensive** Geschäftsprozesse, Dienstleistungen und Produkte werden bedeutender
    - Anteil der Wissensarbeiter in Organisationen nimmt zu 
        (Ingenieure, Manager, Berater, Entwickler, Forscher, ...)
    - Hoher Zeitanteil für Informationssuche und -bewertung
- **Produktlebenszyklen** werden kürzer
    - Höhere Innovationsrate wird erforderlich
    - Concurrent Engineering komplexer Produkte erfordert die Integration von Wissen aller Unternehmensbereiche
- **Demographischer Wandel** in Europa
    - Zunahme des Fachkräftemangels in vielen Branchen absehbar
:::
::: single
- Firmen arbeiten zunehmend **verteilt** und **global** 
    - Virtuelle Unternehmen
    - Komplexe Wertschöpfungsnetzwerke
- **Lean Management** erfordert Entscheidungen auf allen Management-Ebenen
    - Das erforderliche Wissen muss überall vorhanden sein
- **Wissen** selber wird zum Produkt
    - Neue Arten spezialisierter Dienstleistungsangebote entstehen (z.B. Information Broker)
- **Firmenwert** beruht bei Weitem nicht nur auf materiellen Werten (Fabrikationsanlagen, Immobilien, ...)
    - sondern auf "intangible assets" bzw. "intellectual capital"
:::
::::

::: bluebox small skip  
:fas-triangle-exclamation: **Wichtig**: Einige der vorstehenden Argumente gelten nicht nur für Gewinn-orientierte Unternehmen, sondern auch in der öffentlichen Verwaltung, Forschung & Lehre und in Non-Governmental Organizations (NGOs).
:::






---
<!-- header: Kapitel 2: Was ist Wissen -->
# Was ist Wissen ?


---
## Was ist Wissen ? – Eine pragmatische Arbeitsdefinition 

::: bluebox center
:fas-triangle-exclamation: Bevor wir einen Versuch starten Wissen zu definieren ist es sinnvoll, den Wissensbegriff richtig ein- und abzugrenzen.
:::

{.skip}

Wissen ist 
- ... häufig das Ergebnis __bewusster Informationsverarbeitung__,
- ... zusammengesetzt aus __Modellen__ über konkrete und abstrakte Objekte Ereignisse und Fakten, d.h. symbolische Strukturen, die im menschlichen Gedächtnis abgespeichert sind,
- ... __kontext-situiert__ und __vernetzt__,
- ... __handlungs-__ und __ziel-orientiert__.


---
## Definitionsversuche

{.skip}
::: definition 
==Wissen== bezeichnet die Gesamtheit der Kenntnisse und Fähigkeiten, die Menschen zur ==Lösung von Problemen== einsetzen. Wissen stützt sich auf Daten und Informationen, ist im Gegensatz zu diesen jedoch immer ==an Personen gebunden==. Daher müssen Daten-, Informations- und Wissensmanagement stets zusammenspielen.

Quelle: Probst GJB., Raub S., Romhardt K., (2011): "Wissen managen – Wie Unternehmen ihre wertvollste Ressource optimal nutzen". 7. Auflage, Gabler, Frankfurt/Main; S.24
:::

{.skip}

::: definition 

Knowledge is what we know about the world around us. It is what we have ==learned== and ==understood==, whether through ==experience==, ==study==, ==observation==, or ==instruction==. 

It includes facts, concepts, principles, ideas, and insights that help us ==understand the world== and navigate it. 

Knowledge is what we have in our minds and can apply to ==solve problems==, ==make decisions==, and ==navigate various situations==.

Quelle: Generated by ChatGPT using the phrase "What is knowledge?" on January 15th, 2023.
:::


---
# Wissensarten
<!-- ::: source
nach Michael Polanyi (1966), “The Tacit Dimension”, University of Chicago Press: Chicago
::: -->

Grundsätzlich lassen sich ==2 Wissensarten== unterscheiden^1^:

:::: twocolumns
::: bluebox
**Explicit Knowledge** (=_Disembodied Knowledge_)
- ... kann kommuniziert werden
- ... kann auf verschiedenen Ebenen formalisiert werden 
- ... kann in verschiedenen Formaten abgespeichert werden
:::
::: greenbox
**Tacit / Implicit Knowledge** (=_Embodied Knowledge_)
- ... im Gehirn gespeichert 
- ... schwer zu kommunizieren
- ... nicht/kaum zu formalisieren
:::
::::

_Explizites Wissen_
...ist Faktenwissen, eindeutig kodifizierbar und mittels Sprache eindeutig kommunizierbar.{.skip}

_Implizites bzw. verborgenes Wissen_
...ist Erfahrungs- und Handlungswissen, das an Personen gebunden ist; 
...es ist nur schwer und nicht vollständig explizierbar (d.h., in Worte zu fassen)

::: footnotes
^1^ nach Michael Polanyi (1966), “The Tacit Dimension”, University of Chicago Press: Chicago
:::

---
<!-- header: Kapitel 3: Wissensmodelle -->
# Kapitel 3: Wissensmodelle


---
# Die Wissenstreppe nach Klaus North

::: center
![width:750px](./figures/wissenstreppe_north_web.jpg)
:::
::: footnotes
Quelle: http://qib.f-bb.de/wissensmanagement/thema/wissen/wissenstreppe.rsys
:::


---
# Erläuterungen zur Wissenstreppe 

::: threecolumns small
- **Zeichen** bestehen aus Buchstaben, Zahlen etc. aber auch Beobachtungen
- **Daten** entstehen, indem man Zeichen in eine Reihenfolge bringt
- **Information** entsteht, indem man Daten eine Bedeutung zuordnet
- **Wissen** entsteht durch die Vernetzung von Informationen. Wissen ist allerdings subjektiv und kann deshalb nicht direkt übertragen werden (es ist personifiziert). Wissen hängt sehr stark vom Erfahrungsschatz des Individuums ab.
- **Können** entsteht aus der Umsetzung von Wissen in entsprechende Handlungen, da es natürlich nicht ausreicht, nur Wissen zu erwerben, sondern dieses erworbene Wissen auch in Fertigkeiten umgesetzt werden muss.
- Erst das in **Handeln** umgesetzte Können stellt dieses auch unter Beweis. Hinzu kommt hier natürlich noch das Wollen, dem eine Mitarbeitermotivation vorausgehen muss. Handeln ist messbar und zeigt wie Personen, Gruppen oder Organisationen aus Informationen Wissen generieren und zur Lösung von Problemen einsetzen.
- Die Fähigkeit, Wissen zur Problemlösung, also zweckorientiert in konkrete Handlungen einzusetzen, wird als **Kompetenz** einer Person, Gruppe oder Organisation bezeichnet.
- **Kernkompetenzen** beruhen auf explizit gemachtem Wissen und setzen sich aus Fähigkeiten und Technologien zusammen. Sie generieren Werte bei Kunden und sind einzigartig gegenüber Wettbewerbern, schaffen somit Zugang zu neuen Märkten. Deshalb drücken Kernkompetenzen auch die **Wettbewerbsfähigkeit** eines Unternehmens aus.
:::

::: bluebox skip centerbox
__Lehrvideo zur Wissenstreppe__: Die einzelnen Stufen der Wissenstreppe werden auch sehr schön in diesem [:fas-film: Kurzvideo](https://www.youtube.com/watch?v=VW7ArONW4dA) dargestellt.
:::



---
# Das SECI-Modell

:::: columns
::: triple
Das SECI-Modell stellt das implizite, d.h., **Personen-gebundene** und **schwer verbalisierbare Erfahrungswissen** von Mitarbeitern in den Mittelpunkt. Es erläutert, _wie dieses Wissen für eine Organisation aktiviert_ werden kann.

Es unterscheidet sich von anderen Wissensmanagementmodellen dadurch, dass es den Fokus auf eine einzige Fragestellung lenkt, nämlich – _wie neues Wissen in Organisationen entsteht_.

Neues Wissen entsteht in einem **kontinuierlichen Transformationsprozess** zwischen dem _impliziten_ und dem _expliziten Wissen_, d.h., die Wissengenerierung beruht auf einem Prozess der dynamischen Transformation von implizitem zu explizitem Wissen und vice versa.

Entscheidend bei dem Modell von Nonaka & Takeuchi ist die __Transformation von individuellem in kollektives Wissen__, d.h., von einem personenbezogenen in ein allgemein zugängliches Wissen (=die Wissensbasis der Organisation).
::: 
::: double
![width:1600px](./figures/seci_model_5.png)
:::
::::

---
# Das SECI-Modell: Die Transformationsphasen

Es unterscheidet die folgenden **4 Phasen**, welche im einem _iterativen und inkrementellen Transformationsprozess_ durchlaufen werden:

::: twocolumns
Sozialisierung
: Implizites Wissen wird geteilt durch Beobachtung, gemeinsames Tun und durch nicht-verbalisierte Handlungen. Die Weitergabe von implizitem Wissen in einer Gruppe erfordert einen Wissensraum, dieser muss, damit die Sozialisierung funktioniert, _3 Eigenschaften_ aufweisen: (a) geteiltes Verständnis und einer (b) gemeinsamen Sprache mit (c) gegenseitigem Vertrauen^1^.

Externalisierung
: Mitglieder einer Gruppe fassen das Wissen in Sprache und teilen es mit anderen. Aus implizitem Wissen entsteht explizites.

Kombination
: Explizites kann nun mit existierendem Wissen neu kombiniert werden. Hier ruht Potential für Innovation. Neues Wissen entsteht nicht aus dem “Nichts” sondern dadurch, dass neue Akteure neues Wissen in die Organisation einbringen^2^.

Internalisierung
: Entsteht in der Phase der Kombination neues Wissen, so wird dieses nun wieder von den Individuen internalisiert, d.h., mit dem eigenen Wissen kombiniert und dadurch wieder in implizites Wissen überführt. (~> _Prozess der Bewußtseinsbildung_).
:::

==Wichtig, das Kollektiv baut immer auf dem neu entstandenen Wissen auf (→ iterativ-inkrementeller Transformationsprozess).== {.center}

::: footnotes
^1^ Vertrauen ist die Grundlage des gesamten Prozesses der Wissensgenerierung und des Wissensaustausches.

^2^ Frage zum Selbststudium: Aus welchen Quellen kann dieses Wissen stammen?
:::


---
## Anwendungsbeispiel für das SECI-Modell

::::: columns
:::: single small
1. **Sozialisierung**
    - Beispiel: Ingenieure und Produktentwickler eines Unternehmens treffen sich informell, um Ideen auszutauschen und Wissen zu teilen. Dies könnte durch Workshops, Brainstorming-Sitzungen oder persönliche Gespräche geschehen, bei denen implizites Wissen (Erfahrungen, Intuitionen) weitergegeben wird. Zum Beispiel könnte ein erfahrener Ingenieur einer jüngeren Kollegin erklären, wie er bestimmte Probleme in früheren Projekten gelöst hat.

2. **Externalisierung**
    - Beispiel: Die impliziten Erkenntnisse und Ideen, die in der Sozialisierungsphase gewonnen wurden, werden in explizites Wissen umgewandelt. Die Ingenieure könnten ihre Ideen durch Diagramme, Prototypen oder schriftliche Berichte ausdrücken. Eine Gruppe von Ingenieuren könnte beispielsweise ein Diagramm erstellen, das ihre konzeptionellen Ideen für ein neues Produktdesign darstellt.
::::
:::: single small
3. **Kombination**
    - Beispiel: Das in der Externalisierungsphase gesammelt explizite Wissen wird durch die Kombination verschiedener Informationsquellen und bestehender Daten erweitert. In dieser Phase könnten verschiedene Abteilungen des Unternehmens, wie Forschung und Entwicklung, Marketing und Produktion, zusammenarbeiten, um ein detailliertes Produktentwicklungsdokument zu erstellen, das die gesammelten Informationen konsolidiert und neue Erkenntnisse hervorbringt.

4. **Internalisierung**
    - Beispiel: Das explizite Wissen wird durch Schulungen, Simulationen oder den Einsatz in realen Projekten in implizites Wissen umgewandelt. Mitarbeiter, die das neue Produkt entwickeln oder verbessern, nutzen das gesammelte Wissen, um ihre Fähigkeiten zu erweitern und praktische Erfahrungen zu sammeln. Beispielsweise könnten die Ingenieure Schulungen erhalten oder das Produkt in einer Testumgebung entwickeln, um das Gelernte zu verinnerlichen.
::::
:::::


---
## Das SECI-Modell: Organisatorische Voraussetzungen und Fazit

Voraussetzungen seitens der Organisation^2^

- **Intention** ---> klare Wissensziele innerhalb der Organisation
- **Autonomie** ---> Eigenverantwortung, Selbstorganisation und Freiräume
- **Instabilität** ---> Bereitschaft Bestehendes zu hinterfragen und zu verändern
- **Redundanz** ---> Sollte nicht vermieden werden; ein "Zuviel" an Informationen eröffnet neue Perspektiven
- **Interne Vielfalt** ---> Diversität der Mitglieder und Prozesse

**Fazit**
: Das SECI-Modell verbindet als eines der ersten  Modelle _Wissensmanagement mit Innovation_ und versteht _Innovation als kollektiven Prozess_^1^. Besondere Bedeutung kommt hierbei der Kommunikation und Kollaboration zuteil. Ziel ist nicht den Prozess bis aufs "Kleinste" zu managen, sondern ==Rahmenbedingungen zu schaffen, in denen ein derartiger kollektiver Transformationsprozess entstehen kann== (=Systemische Sicht). 


::: footnotes
^1^ Innovation ist nicht das Resultat eines "Heureka"-Prozesses eines Individuums sondern ein kollektiver Kommunikations- und Bewußtseinsbildungsprozess.

^2^ Quelle: Nonaka, Takeuchi; "Die Organisation des Wissens – Wie japanische Unternehmen eine brachliegende Ressource nutzbar machen"; 2. Auflage, 2012, Campus Verlag, ISBN 978-3-593-39631-6.
:::

---
<!-- header: Kapitel 4: Was ist Wissensmanagement -->
# Was ist Wissensmanagement und warum wird dies für Unternehmen im Zeitalter der Digitalisierung immer wichtiger ?



---
# Welche Rolle spielt "Wissen" im Unternehmen ?

::::: columns
:::: double
Bekannt und anerkannt sind die folgenden Aussagen^1^
> "We know more than we can tell."
>
> "If HP knew what HP knows, we would be three times as profitable"

Nur ca. **20%** des in einer Organisation vorhandenen Wissens ist dokumentiert. 
**80%** des relevanten Wissens ist verborgenes, implizites Wissen.^2^

Eine der größten Herausforderungen in und für Unternehmen besteht darin, das für ihre Geschäftsbereiche _relevante Wissen_ zu identifizieren und zu nutzen. 

Hierauf zielt das ==Wissensmanagement== ab.
::::
:::: single
![](./figures/iceberg.jpg)
::::
:::::


::: footnotes
^1^ vgl. Hinds, P. J.; Pfeffer, J. (2003): Why Organizations Don’t “Know What They Know”: Cognitive and Motivational Factors Affecting the Transfer of Expertise. In: Ackerman, M. S.; Pipek, V.; Wulf, V. (2003) (Eds.): Sharing Expertise. Beyond Knowledge Management, pp. 3-26

^2^ Quelle: https://de.slideshare.net/mcwyrsch/Wissensmanagement-in-unternehmen
:::




---
# Was ist Wissensmanagement

::: definition
==Wissensmanagement== beschäftigt sich mit dem Erwerb, der Entwicklung, dem Transfer, der Speicherung sowie der Nutzung von Wissen. Wissensmanagement ist weit mehr als Informationsmanagement, da es sich über den Fluss von Information und deren Verknüpfung hinaus mit dem "Know-why" befasst, also dem ==zielgerichteten Einsatz zur Problemlösung und Kompetenzbildung==.

Quelle: angelehnt an Gabler Wirtschaftslexikon, Definition: Was ist "Wissensmanagement"? (online abrufbar unter <https://wirtschaftslexikon.gabler.de/definition/wissensmanagement-47468>)
:::

Wissensmanagement^1^ dient dazu{.skip}
- ...vorhandenes betriebliches Wissen zu identifizieren und zu vernetzen
- ...neues Wissen zu generieren und in neue Produkte, Prozesse und Geschäftsfelder umzusetzen
- ...Wissen von außen – über Kunden, Lieferanten, Partner und externe Know-how-Träger – in das Unternehmen zu transferieren
- ...Wissen produktiv zu nutzen
- ...Wissen zu messen und zu bewerten

::: footnotes
^1^ siehe http://qib.f-bb.de/wissensmanagement/thema/
:::



---
# Typische Wissensmanagementfragestellungen

::::: columns
:::: triple
::: bluebox
**Fragestellungen**

- Wie lässt sich individuelles und organisationales Wissen systematisch nutzen und weiterentwickeln ?
- Wie kann individuelles, implizites Wissen unternehmensweit transparent und explizit gemacht werden ?
- Wie kann relevantes Wissen dort bereitgestellt werden, wo es benötigt wird ?
- Wie ist individuelles Expertenwissen zu identifizieren, speichern und unternehmensweit zu transferieren ?
- Was sind organisationale Maßnahmen, um die Informationsqualität zu sichern und einen Information Overload zu vermeiden^1^ ?

::: footnotes
^1^ Hieran sieht man, dass die Dimension “Organisation” (=Unternehmenskultur, verborgene Gesetzmäßigkeiten (engl. "hidden rules"), Organisationsstruktur, Hierarchie etc.) eine wichtige Rolle im Wissensmanagement spielt. <br /> 
:::

:::
::::
:::: double
::: center
![height:198px](./figures/discuss.jpg)
::: 
::: graybox
**Aufgabe**

Diskutieren Sie die einzelnen Fragestellungen in Gruppen; jede Gruppe behandelt eine Fragestellung. Die gefundenen Antworten werden anschließend im Plenum vorgestellt und reflektiert. 
:::
::::
:::::


---
# Typische Wissensmanagementprobleme :fas-bomb:

:::: twocolumns 
- Verfügbares Wissen wächst exponentiell
- "Halbwertszeit" bestehenden Wissens sinkt rapide
- Produkte und Dienstleistungen werden immer wissensintensiver in ihrer Herstellung
- Komplexe Mitarbeiter- und Hierarchiestrukturen sowie Hemmnisse bei der Verteilung von Wissen verhindern effizienten Wissensfluss im Unternehmen
- Wissensmanagement wird als zeit- und kostenintensiv erlebt
- Rein technische Lösungen verfehlen oft ihren Nutzen
- Ausarbeitung von Ideen, Standards, Evaluationen, Projekten, Vorschlägen, welche bereits bestehen
- Ausbildung von Fähigkeiten, die bereits in der Unternehmung vorhanden sind
- Einkauf von Lizenzen und Leistungen, obwohl eigene Entwicklungen (Produkte, Services) bestehen
- Informationsüberlastung auf allen Ebenen
- Projekterfahrungen werden nicht dokumentiert
- mangelnde Transparenz über externes Wissen (Internet, Dokumente, ExpertInnen, Trends, Standards)
- Interne ExpertInnen sind nicht bekannt
- Zentrales Wissen geht verloren (~> ExpertInnenverlust)
::::



---
# Die Hauptaufgaben des Wissensmanagements

- **Implizites Wissen in explizites Wissen umwandeln**: 
    Implizites Wissen entsteht in erster Linie durch _Erfahrung_ und liegt somit eher unbewusst in einer nur schwer auszudrückenden Form vor. Ziel des Wissensmanagements ist es, dieses schwer zu greifende implizite Wissen in greifbares _explizites Wissen zu transformieren_.

- **Individuelles Wissen in kollektives Wissen überführen**: 
    Insbesondere in kleinen und mittelständischen Unternehmen (KMUs) ist Wissen häufig an eine oder wenige Personen gebunden. Ziel ist es daher, das vorhandene (explizite) Wissen bestmöglich zu dokumentieren und _allen Mitarbeitern zugänglich_ zu machen.

- **Externes Wissen in das Unternehmen integrieren**: 
    Nicht alles Wissen, das ein Unternehmen für seinen Geschäftserfolg braucht, ist immer im Unternehmen vorhanden. Hier gilt es, effiziente Wege zu finden, um Wissen zu erwerben und das erworbene Wissen schließlich in das _kollektive Wissen der Organisation zu übertragen_.

::: footnotes
in Anlehnung an: http://strategie-spektren.de/innovation/aufgaben-des-wissensmanagements/
:::



---
# Weitere typische Aufgaben des Wissensmanagements

::::: columns
:::: single
- MitarbeiterInnenwissen verfügbar machen
- Benennung und Strukturierung von Wissen
- Wissensweitergabe ermöglichen und fördern
- Integration von relevantem Wissen in den Arbeitsfluss
- Gezielter Wissensaufbau
- Aus Fehlern lernen
- Dokumentation von Erfahrungswissen
- Transfer von Wissen (vor Ausscheiden)
- Wiederkehrende Fragen (FAQ)
- Befähigung zur Bewältigung von Aufgaben
::::
:::: single
::: center
![](./figures/brain.jpg)
:::
::::
:::::


---
# :fas-bullseye: Ziele des Wissensmanagements

- Der Austausch von Wissen soll die *Resonanzfähigkeit* des Unternehmens erhöhen, und somit bestehende Denkmuster durchbrechen. Letztlich soll dadurch die Reaktionsfähigkeit erhöht werden, was ein zentrales Merkmale der ==agilen Organisation== ist. Das Wissensmanagement kann somit als eine wesentliche Voraussetzung für eine _digitale Transformation_ gesehen werden.

- Eine besondere Bedeutung hat das Wissensmanagement im Zusammenhang mit der ==Open Innovation==. Hier wird der Informations- und Wissensaustausch nicht nur als ein interner Prozess betrachtet, sondern als ein Austausch zwischen der internen Organisation und ihrer externen Umgebung (bspw. Kunden, Lieferanten, strategische Partner). Wissensmanagement ist also ein wichtiger Bestandteil des _Innovationsprozesses_.



---
# Effekte durch Wissensmanagement

::: bluebox
Gemäss heutigen Erfahrungen spart man durch Wissensmanagement **20-25%** der **bisherigen Aufwendungen** ein und erreicht eine **Qualitätssteigerung** von **ca. 20%**.^1^
:::


**Beispiele**:{.skip .nobottommargin}
- Der Erdöl-Konzern “Chevron” konnte durch Wissensmanagementmaßnahmen die Förderung von Erdgas optimieren, was einen jährlichen Nutzen von 20 Mio. Dollar erbrachte.

- Siemens gab in seiner Telekommunikationssparte ICN 15 Mio. DM für Wissensmanagement aus, wodurch im Gegenzug 280 Mio. DM an nicht notwendigen Ausgaben eingespart werden konnten.

- Texas Instruments vernetzte mittels Wissensmanagement seine weltweit 13 Chip-Fabriken so effizient, dass der Bau einer weiteren, eigentlich geplanten Fabrik entfallen konnte. Spar-Effekt: 1,5 Mrd. Dollar.

- "digital spirit" (e-learning) mit heute 100 Mitarbeitern: Leitende Mitarbeiter konnten auf diese Weise um bis zu 30% entlastet werden; die Einarbeitung neuer Mitarbeiter konnte wesentlich schneller geleistet werden. Insgesamt ist die “operative Hektik” deutlich geringer geworden.

::: footnotes
^1^ Quelle: Wyrsch & Partner, © 2012, http://www.wyrsch-partner.ch
:::


---
<!-- header: Kapitel 5: Die Rolle des Menschen im Wissensmanagement -->
# Die Rolle des Menschen :fas-person: im Wissensmanagement




---
## Das Zusammen-wirken von Mensch, Organisation und Technik
![bg right:72% 82%](figures/zusammenwirken.jpg)

::: footnotes
Quelle: TRENDREPORT “Auf Wissen bauen – mit systematischem Wissensmanagement zur digitalen Verwaltung”; Behörden Spiegel, Februar 2020
:::


---
<!-- footer: Prof. Dr. Stefan Zander -->
# Die Rolle der Mitarbeitenden :fas-users:

::::: columns
:::: single
::: bluebox
__"Neue" Eigenschaften__

- Der Mitarbeitende ist _Know-How Träger_ :fas-brain:
- Untereinander sind die Mitarbeitenden _Coaches_ und/oder _Mentoren_ :fas-user-graduate:
- Die Erfahrung zählt, _Führung erfolgt durch Kompetenz_ :fas-atom:
- _Communities_ (Fachgruppen) werden gebildet :fas-people-group:
- Sie sind aktiv in den _Wissensprozessen_ eingebunden :fas-people-arrows:
- Ein _offener Austausch_ wird gefördert :fas-comments:
:::
::::
:::: single
::: greenbox
__...und ihre Auswirkungen__

- Hohe Wertschätzung :fas-coins: der einzelnen Mitarbeitenden
- Veränderte Arbeitsweise :fas-person-digging:
- Erhöhtes Zusammengehörigkeitsgefühl :fas-people-group:
- Höhere Identifikation mit dem Unternehmen; dadurch weniger Fluktuation :fas-plane-slash:
- Freierer Umgang mit Ideen :fas-lightbulb:
:::
::::
:::::

::: footnotes
Quelle: https://de.slideshare.net/mcwyrsch/wissensmanagement-in-unternehmen
:::

---
<!-- header: Zusammenfassung und Lernzielkontrolle -->
# Zusammenfassung und Lernzielkontrolle


---
# Lernzielkontrolle

::: greenbox
**Aufgaben**

Beantworten Sie folgende Fragen:
- Wie lässt sich Wissen messen oder bewerten?
    > Überlegen Sie sich Ansätze und Möglichkeiten dies zu tun und diskutieren Sie diese. 

- Lässt sich Wissen überhaupt managen? Falls ja, wie bzw. durch welche Maßnahmen?
    > Denken Sie kritisch über diese Frage nach; lässt sich Wissen wirklich managen und falls ja, in welcher Form und Ausprägung? Welche Ansätze (technisch / organisatorisch / personell / etc.) halten Sie hierfür für geeignet? Sammeln Sie eine Reihe von Ansatzpunkten und diskutieren Sie diese innerhalb ihrer Gruppe

- Warum ist Wissensmanagement mehr als eine technische Plattform?
- Überlegen Sie sich eine Reihe von organisationalen Maßnahmen zur Erhöhung der Informationsqualität
- Wie lässt sich Information Overload reduzieren?
:::





