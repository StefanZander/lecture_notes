---
marp: true
theme: custom-theme
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

# Semantisches Wissensmanagement im Unternehmen: <br />Konzepte, Technologien, Anwendungen

#### Prof. Dr. Stefan Linus Zander

==Kapitel 1: Einführung in das Wissensmanagement== {.big}


---
<!-- header: Kapitel 1: Einführung -->
<!-- footer: Prof. Dr. Stefan Zander -->
# Leitfragen

- Warum benötigen Unternehmen ein funktionierendes Wissensmanagement ?
- Was ist Wissen ?
- Welche Rolle spielt der Mensch im Wissensmanagement ?
- Welche Wissensmanagementansätze gibt es und wodurch unterscheiden sie sich ?
- Welche Rolle spielt IKT im Wissensmanagement?
- Warum wird WM mit fortschreitender Digitalisierung immer wichtiger ?

---

# Gliederung

1. Über die Notwendigkeit eines Wissensmanagements
2. Was ist Wissen ?
   1. Definitionsversuche
   2. Wissensarten
3. Wissensmodelle
   1. Wissenstreppe nach Klaus North
   2. Das SECI-Modell
4. Wissensmanagement
   1. Hauptaufgaben
   2. Typische Aufgaben 
   3. Ziele
   4. Grundlegende Konzepte
   5. Typische Wissensmanagementprobleme

---

# Gliederung

1. Über die Notwendigkeit eines Wissensmanagements (--> _Warum brauchen Organisationen Wissensmanagement_)
2. _Was ist Wissen ?_ (Definitionsversuche, Wissensarten, Wissensmodelle)
3. _Wissensmodelle_ (1. Wissenstreppe nach Klaus North, 2) Das SECI-Modell)
4. _Wissensmanagement_ (Hauptaufgaben, Ziele, Grundlegende Konzepte, Typische Probleme & Fragestellungen, Phasen)
5. Die Rolle des Menschen
6. Wissensmanagement (_Hauptaufgaben_, _Ziele_, _Grundlegende Konzepte_, _Typische Probleme & Fragestellungen_, _Phasen_)
7. Die Lernende Organisation
8. _Wissensmanagement_
   Hauptaufgaben, Ziele, Grundlegende Konzepte, Typische Probleme & Fragestellungen, Phasen


---
<!-- header: Kapitel xx: Warum brauchen Organisationen Wissensmanagement -->
# Warum benötigen Organisationen ein funktionierendes Wissensmanagement ?
---
# Warum wird Wissen zunehmend wichtiger für Unternehmen ?

:::: columns
::: 1st-col {.left}
- **Wissensintensive** Geschäftsprozesse, Dienstleistungen und Produkte werden bedeutender
    - Anteil der Wissensarbeiter in Organisationen nimmt zu (Ingenieure, Manager, Berater, Entwickler, Forscher, ...)
    - Hoher Zeitanteil für Informationssuche und -bewertung
- **Produktlebenszyklen** werden kürzer
    - Höhere Innovationsrate wird erforderlich
    - Concurrent Engineering komplexer Produkte erfordert die Integration von Wissen aller Unternehmensbereiche
- **Lean Management** erfordert Entscheidungen auf allen Management-Ebenen
    - Das erforderliche Wissen muss überall vorhanden sein
:::
::: 2nd-col {.right}
- Firmen arbeiten zunehmend **verteilt** und **global** 
    - Virtuelle Unternehmen
    - Komplexe Wertschöpfungsnetzwerke
- **Wissen** selber wird zum Produkt
    - Neue Arten spezialisierter Dienstleistungsangebote entstehen (z.B. Information Broker)
- **Firmenwert** beruht bei Weitem nicht nur auf materiellen Werten (Fabrikationsanlagen, Immobilien, ...)
    - sondern auf vielen "intangible assets" / "intellectual capital"
- **Demographischer Wandel** in Europa
    - Verstärkte Zunahme des Fachkräftemangels in vielen Branchen absehbar
:::
::::

::: blue 
**Wichtig**: Einige der vorstehenden Argumente gelten nicht nur für gewinn-orientierte Unternehmen, sondern auch in der öffentlichen Verwaltung, Forschung & Lehre und in Non-Governmental Organizations (NGOs).
:::

---
# Warum wird Wissen zunehmend wichtiger für Unternehmen (1/2)?

- **Wissensintensive** Geschäftsprozesse, Dienstleistungen und Produkte werden bedeutender
    - Anteil der Wissensarbeiter in Organisationen nimmt zu (Ingenieure, Manager, Berater, Entwickler, Forscher, ...)
    - Hoher Zeitanteil für Informationssuche und -bewertung
- **Produktlebenszyklen** werden kürzer
    - Höhere Innovationsrate wird erforderlich
    - Concurrent Engineering komplexer Produkte erfordert die Integration von Wissen aller Unternehmensbereiche
- **Lean Management** erfordert Entscheidungen auf allen Management-Ebenen
    - Das erforderliche Wissen muss überall vorhanden sein
- Firmen arbeiten zunehmend **verteilt** und **global** 
    - Virtuelle Unternehmen
    - Komplexe Wertschöpfungsnetzwerke

---

# Warum wird Wissen zunehmend wichtiger für Unternehmen (2/2) ?

- **Wissen** selber wird zum Produkt
    - Neue Arten spezialisierter Dienstleistungsangebote entstehen (z.B. Information Broker)
- **Firmenwert** beruht bei Weitem nicht nur auf materiellen Werten (Fabrikationsanlagen, Immobilien, ...)
    - sondern auf vielen "intangible assets" / "intellectual capital"
- **Demographischer Wandel** in Europa
    - Verstärkte Zunahme des Fachkräftemangels in vielen Branchen absehbar

::: blue longskip
**Wichtig**: Einige der vorstehenden Argumente gelten nicht nur für gewinn-orientierte Unternehmen, sondern auch in der öffentlichen Verwaltung, Forschung & Lehre und in Non-Governmental Organizations (NGOs).
:::




---
<!-- header: Kapitel 2: Was ist Wissen -->
# Was ist Wissen ?

---
# Welche Rolle spielt "Wissen" im Unternehmen ?

Bekannt sind die folgenden Aussagen^1^
> "We know more than we can tell."
> "If HP knew what HP knows, we would be three times as profitable"

Nur ca. **20%** des in einer Organisation vorhandenen Wissens ist dokumentiert. 
**80%** des relevanten Wissens ist verborgenes, implizites Wissen.^2^

Eine der größten Herausforderungen in und für Unternehmen besteht darin, das für ihre Geschäftsbereiche _relevante Wissen_ zu identifizieren und zu nutzen. Hierauf zielt das Wissensmanagement ab.

::: footnotes
^1^ vgl. Hinds, P. J.; Pfeffer, J. (2003): Why Organizations Don’t “Know What They Know”: Cognitive and Motivational Factors Affecting the Transfer of Expertise. In: Ackerman, M. S.; Pipek, V.; Wulf, V. (2003) (Eds.): Sharing Expertise. Beyond Knowledge Management, pp. 3-26

^2^ Quelle: https://de.slideshare.net/mcwyrsch/Wissensmanagement-in-unternehmen
:::


---
# Was ist Wissen ? -- Eine pragmatische Arbeitsdefinition

::: blue
Bevor wir einen Versuch starten Wissen zu definieren ist es sinnvoll, den Wissensbegriff richtig ein- und abzugrenzen.
:::

Wissen ist {.longskip}

- ... häufig das Ergebnis __bewusster Informationsverarbeitung__,
- ... zusammengesetzt aus __Modellen__ über konkrete und abstrakte Objekte Ereignisse und Fakten, d.h. symbolische Strukturen, die im menschlichen Gedächtnis abgespeichert sind,
- ... __kontext-situiert__ und __vernetzt__,
- ... __handlungs-__ und __ziel-orientiert__.

::: definition
Wissen bezeichnet die Gesamtheit der Kenntnisse und Fähigkeiten, die Menschen zur Lösung von Problemen einsetzen.

Quelle: Probst GJB., Raub S., Romhardt K., (2006): "Wissen managen – Wie Unternehmen ihre wertvollste Ressource optimal nutzen". 5. Aufl. Gabler, Frankfurt/Main; S.22
:::


---
# Wissensarten
<!-- ::: source
nach Michael Polanyi (1966), “The Tacit Dimension”, University of Chicago Press: Chicago
::: -->

Grundsätzlich lässt sich zwischen ==2 Wissensarten== unterscheiden^1^:

::::: blue
:::: columns
::: 1st-col {.left}
**Explicit Knowledge** (=_Disembodied Knowledge_)
- ... kann kommuniziert werden
- ... kann auf verschiedenen Ebenen formalisiert werden 
- ... kann in verschiedenen Formaten abgespeichert werden 
:::
::: 2nd-col {.left}
**Tacit / Implicit Knowledge** (=_Embodied Knowledge_)
- ... im Gehirn gespeichert 
- ... schwer zu kommunizieren
- ... nicht/kaum zu formalisieren
:::
::::
:::::



_Explizites Wissen_
...ist Faktenwissen, eindeutig kodifizierbar und mittels Sprache eindeutig kommunizierbar.{.skip}

_Implizites bzw. verborgenes Wissen_
...ist Erfahrungs- und Handlungswissen, das an Personen gebunden ist; ist nur schwer und nicht vollständig explizierbar (d.h., in Worte zu fassen)

::: footnotes
^1^ nach Michael Polanyi (1966), “The Tacit Dimension”, University of Chicago Press: Chicago
:::


---
# Wissensarten
<!-- ::: source
nach Michael Polanyi (1966), “The Tacit Dimension”, University of Chicago Press: Chicago
::: -->

Grundsätzlich lässt sich zwischen ==2 Wissensarten== unterscheiden^1^:


:::: twocolumns
::: blue
**Explicit Knowledge** (=_Disembodied Knowledge_)
- ... kann kommuniziert werden
- ... kann auf verschiedenen Ebenen formalisiert werden 
- ... kann in verschiedenen Formaten abgespeichert werden
:::

::: green
**Tacit / Implicit Knowledge** (=_Embodied Knowledge_)
- ... im Gehirn gespeichert 
- ... schwer zu kommunizieren
- ... nicht/kaum zu formalisieren
:::
::::




_Explizites Wissen_
...ist Faktenwissen, eindeutig kodifizierbar und mittels Sprache eindeutig kommunizierbar.{.skip}

_Implizites bzw. verborgenes Wissen_
...ist Erfahrungs- und Handlungswissen, das an Personen gebunden ist; ist nur schwer und nicht vollständig explizierbar (d.h., in Worte zu fassen)

::: footnotes
^1^ nach Michael Polanyi (1966), “The Tacit Dimension”, University of Chicago Press: Chicago
:::




---
# Die Wissenstreppe nach Klaus North

::: center
![width:750px](../html/docs/figures/wissenstreppe_north_web.jpg)
:::
:::source
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

::: blue
__Lehrvideo zur Wissenstreppe__ Die einzelnen Stufen der Wissenstreppe werden auch sehr schön in diesem [Kurzvideo](https://www.youtube.com/watch?v=VW7ArONW4dA) dargestellt.
:::

---
# Das SECI-Modell

:::: columns
::: 1st-col {.left}
Das SECI-Modell stellt das implizite, d.h., **Personen-gebundene** und **schwer verbalisierbare Erfahrungswissen** von Mitarbeitern in den Mittelpunkt. Es erläutert, _wie dieses Wissen für eine Organisation aktiviert_ werden kann.

Es unterscheidet sich von anderen Wissensmanagement dadurch, dass es den Fokus auf eine einzige Fragestellung lenkt, nämlich -- _wie neues Wissen in Organisationen entsteht_.

Neues Wissen entsteht in einem **kontinuierlichen Transformationsprozess** zwischen dem _impliziten_ und dem _expliziten Wissen_, d.h., die Wissengenerierung beruht auf einem Prozess der dynamischen Transformation von implizitem zu explizitem Wissen und vice versa.

Entscheidend bei dem Modell von Nonaka & Takeuchi ist die __Transformation von individuellem in kollektives Wissen__, d.h., von einem personenbezogenen in ein allgemein zugängliches Wissen (=die Wissensbasis der Organisation).
::: 
::: 2nd-col {.left}
![width:1600px](../html/docs/figures/seci_model_5.png)
:::
::::

---
# Das SECI-Modell: Die Transformationsphasen

Es unterscheidet die folgenden **4 Phasen**, welche im einem _iterativen und inkrementellen Transformationsprozess_ durchlaufen werden:

::: twocolumns
Sozialisierung
: Implizites Wissen wird geteilt durch Beobachtung, gemeinsames Tun und durch nicht-verbalisierte Handlungen. Die Weitergabe von implizitem Wissen in einer Gruppe erfordert einen Wissensraum, dieser muss, damit die Sozialisierung funktioniert, _3 Eigenschaften_ aufweisen: (a) geteiltes Verständnis und einer (b) gemeinsamen Sprache mit (c) gegenseitigem Vertrauen^3^.

Externalisierung
: Mitglieder einer Gruppe fassen das Wissen in Sprache und teilen es mit anderen. Aus implizitem Wissen entsteht explizites.

Kombination
: Explizites kann nun mit existierendem Wissen neu kombiniert werden. Hier ruht Potential für Innovation. Neues Wissen entsteht nicht aus dem “Nichts” sondern dadurch, dass neue Akteure neues Wissen in die Organisation einbringen^1^.

Internalisierung
: Entsteht in der Phase der Kombination neues Wissen, so wird dieses nun wieder von den Individuen internalisiert, d.h., mit dem eigenen Wissen kombiniert und dadurch wieder in implizites Wissen überführt. (~> Prozess der Bewußtseinsbildung).
:::

==Wichtig, das Kollektiv baut immer auf dem neu entstandenen Wissen auf (→ iterativ-inkrementeller Transformationsprozess).==

::: footnotes
^1^ Frage: Aus welchen Quellen kann dieses Wissen stammen?

^3^ Grundlage des gesamten Prozesses der Wissengenerierung und des Wissensaustausches.
:::


---
# Das SECI-Modell: Voraussetzungen

Voraussetzungen seitens der Organisation^2^

- **Intention** --> klare Wissensziele innerhalb der Organisation
- **Autonomie** --> Eigenverantwortung, Selbstorganisation und Freiräume
- **Instabilität** --> Bereitschaft Bestehendes zu hinterfragen und zu verändern
- **Redundanz** --> Sollte nicht vermieden werden; ein "Zuviel" an Informationen eröffnet neue Perspektiven
- **Interne Vielfalt** --> Diversität der Mitglieder und Prozesse

**Fazit**
: Das SECI-Modell verbindet als eines der wenigen Modelle _Wissensmanagement mit Innovation_ und versteht _Innovation als kollektiven Prozess_^1^. Besondere Bedeutung kommt hierbei der Kommunikation und Kollaboration zuteil. Ziel ist nicht den Prozess bis aufs "Kleinste" zu managen, sondern ==Rahmenbedingungen zu schaffen, in denen ein derartiger kollektiver Transformationsprozess entstehen kann== (=Systemische Sicht). 


::: footnotes
^1^ Innovation ist nicht das Resultat eines "Heureka"-Prozesses eines Individuums

^2^ Quelle: Nonaka, Takeuchi; "Die Organisation des Wissens – Wie japanische Unternehmen eine brachliegende Ressource nutzbar machen"; 2. Auflage, 2012,
Campus Verlag, ISBN 978-3-593-39631-6
:::




