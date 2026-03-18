# Hörsaalübung


Ziel: Entwickeln Sie ein **Wissensgraphmodell** mittels Semantic MediaWiki zur Verwaltung von Mitarbeitenden, Forschungprojekten auf denen diese Mitarbeitenden arbeiten und Forschungsthemen.

Anhand der nachstehenden Punkte soll das Wissensmodell (aka Wissensbasis, Wissensgraph) schrittweise aufgebaut werden.

Unter folgendem Link finden sie eine [Quick-Reference zu den wichtigesten Syntaxelementen](https://www.semantic-mediawiki.org/w/images/e/e9/SMW_quick_reference.pdf)


## Schritte

### Stufe 1
1. Erstellen sie einige **Kategorien** (allgemeine und spezfische) für Mitarbeitende, Projekte, Forschungsthemen. Legen sie auch die Sprache (deutsch/englisch) für die Benennungen der Elemente (Seiten) fest und behalten sie diese bei.
2. Organisieren sie ihre Kategorien in **Hierarchien**.
3. Überlegen sie sich welche **Stammdaten** (aka Faktenwissen) sie für Mitarbeitende und Projekte erfassen und in ihrem System vorhalten wollen und definieren sie dafür geeigne **Properties**.
4. Schauen sie auch hier, ob sich **Property-Hierarchien** ableiten lassen
6. Erstellen sie nun ein paar **Beispielseiten** für Projekte, Mitarbeitende und Forschungsthemem und annotieren sie die Seiten entsprechend, d.h., benutzen sie dort die definierten Properties und Kategorien. _Wichtig: Überlegen sie sich, wie sie Projekte und Mitarbeitende miteinander in Verbindung setzen, d.h., welche "Richtung" die Beziehung haben soll._
7. Erstellen sie auch ein Property um darzustellen, wer **Mentor** einer anderen Person (Mitarbeiter) ist. Ergänzen sie diese Beziehung zwischen ein paar selbst ausgewählten Personen.
8. Zeigen sie auf den Seiten der Mitarbeitenden die **Projekte** an, auf denen diese arbeiten. _Hinweis: es genügt, wenn sie dies für einige wenige tun. Wäre es nicht schön, wenn sie dies nicht auf jeder MA-Seite manuell eintragen müssten?_
9. Zeigen Sie auf den **Mitarbeitenden** Seiten auch an, ob diese für eine bestimmte Person Mentor sind oder von einer anderen Person als Mentor betreut/begleitet werden. 
10. Zeigen sie auf den Seiten der **Forschungsthemen** die Projekte und Mitarbeitenden an, die sich mit diesem Forschungsthema beschäftigen. _Hinweis: Wäre es nicht sinnvoll, wenn man dies nur einmal definieren müsste und dies dann auf allen Seiten gleichermaßen angezeigt bekommt, anstatt dies manuell auf jeder Seite einzeln einzutragen?_
11. Checken sie, ob alle Daten, Queries etc vollständig sind.
12. Erstellen sie eine **Landingpage** auf der alle Projekte, Mitarbeitende und Forschungsthemen aufgelistet sind. Nutzen sie hierfür ausschließlich Queries.
13. Wechseln sie nun zu ihrem **Nachbarprojekt** und versuchen sie dort ein neues Projekt und ein paar Mitarbeitende anzulegen. Auf welche Schwierigkeiten stoßen sie? Funktionieren alle Queries wie gewünscht?

### Stufe 2

1. Erstellen sie für die Projekt-, Mitarbeitenden- und Forschungsthemenstammdaten entsprechende **semantische Templates** und binden sie diese an den entsprechenden Stellen ein. 
    
    !!! info "Tipp" 
        Gehen sie gerne **sequentiell** vor, d.h., erstellen Sie ein Template – bspw. für Mitarbeitende – und binden sie dort auch gleich die entspr. Queries ein. Testen und verfeinern sie diese bis die korrekten Daten im gewünschten Format angezeigt werden. Sobald alles fehlerfrei funktioniert widmen sie sich den anderen Domänen (Projekte und Themen).

2. Ergänzen sie die Templates auch um etwaige **Queries** (bspw. auf den Forschungsthemen- und Mitarbeitendenseiten), so dass automatisiert zusammengehörige /-hängende Informationen angezeigt werden (bspw. die zu einem Forschungsthema zugehörigen Projekte und/oder Mitarbeitenden etc). 
3. Wechseln sie nun erneut zu einem **Nachbarprojekt** und versuchen sie mittels der erstellten Templates neue Beispieldaten (Mitarbeitende, Projekte, Forschungsthemen) anzulegen. Überprüfen sie, ob die Queries nun korrekt funktionieren.



### Stufe 3
1. Erweitern Sie ihr Datenmodell dahingehend, dass sie für jede/n Mitarbeitende/n angeben können, in welcher **Rolle** und wie **lange** (Projekteinstieg & Projektende) diese auf einem Projekt gearbeitet hat. Passen Sie zuerst die Queries auf den Projektseiten selbst an und anschließend auf den anderen Seiten (Mitarbeiter + ggf. Thema).



### Stufe 4
1. Erstellen sie für ausgesuchte Templates sog. **Form Definition Pages**, um das Erfassen von neuen Informationen zu vereinheitlichen und zu vereinfachen (bspw. für das Anlegen neuer Projekte und oder Mitarbeitende)
