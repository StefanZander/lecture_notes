// Inhalte des Korrekturleitfadens
window.PHASES = [
  { id: "planung", name: "Planung & Exposé", short: "Planung" },
  { id: "recherche", name: "Recherche & Lektüre", short: "Recherche" },
  { id: "durchfuehrung", name: "Durchführung & Analyse", short: "Durchführung" },
  { id: "schreiben", name: "Schreiben", short: "Schreiben" },
  { id: "ueberarbeitung", name: "Überarbeitung & Abgabe", short: "Überarbeitung" }
];

window.ERRORS = [
  {
    code: "M1",
    cat: "methodisch",
    title: "Unscharfe Forschungsfrage",
    short: "Ein Themenfeld wird beschrieben, aber keine beantwortbare Frage gestellt.",
    weight: 3,
    criterion: "Fragestellung & Zielsetzung",
    symptoms: [
      "Die Einleitung benennt nur ein Themenfeld („Digitalisierung im Mittelstand“).",
      "Die Frage ist so breit, dass sie keine Bachelorarbeit, sondern ein Forschungsprogramm wäre.",
      "Mehrere gleichrangige Fragen stehen nebeneinander, ohne Haupt- und Teilfragen.",
      "Das Fazit beantwortet eine andere Frage als die, die in der Einleitung gestellt wurde."
    ],
    causes: [
      ["Thema statt Problem", "Die Wahl folgt dem Interesse am Gegenstand, nicht einem konkreten Erkenntnisproblem."],
      ["Angst vor Festlegung", "Eine enge Frage wirkt riskant, weil man glaubt, dann „zu wenig“ zu finden."],
      ["Kein Nachschärfen", "Die Frage aus dem Exposé wird nach der ersten Literatursichtung nicht mehr überarbeitet."],
      ["Begriffsunschärfe", "Thema, Ziel, Forschungsfrage und Hypothese werden nicht sauber unterschieden."]
    ],
    consequences: {
      summary: "Hohes Gewicht: Der Fehler betrifft das Kriterium Fragestellung & Zielsetzung und wirkt auf Methodik, Diskussion und Fazit aus.",
      items: [
        "Die Zielerreichung lässt sich im Gutachten nicht prüfen, weil kein klarer Maßstab existiert.",
        "Die Methodenwahl wirkt beliebig, da sie nicht aus der Frage abgeleitet werden kann.",
        "Das Fazit bleibt vage oder fasst nur zusammen, statt eine Antwort zu geben.",
        "Folgefehler in anderen Kriterien sind wahrscheinlich, deshalb ist der Gesamteffekt auf die Note oft größer als bei einzelnen formalen Mängeln."
      ]
    },
    tips: [
      ["planung", "Formulieren Sie im Exposé je einen Satz für Thema, Problem, Frage und Ziel. Wenn ein Satz fehlt, ist die Arbeit noch nicht startklar."],
      ["planung", "Grenzen Sie die Frage nach vier Dimensionen ein: Gegenstand, Kontext bzw. Branche, Zeitraum, Perspektive."],
      ["recherche", "Schärfen Sie die Frage nach der ersten Literatursichtung nach und stimmen Sie die Fassung mit der Betreuung ab."],
      ["schreiben", "Greifen Sie die Forschungsfrage wörtlich in Einleitung, Methodenkapitel und Fazit auf."],
      ["ueberarbeitung", "Fazit-Test: Beantwortet der erste Absatz des Fazits die Frage direkt, ohne Umweg?"]
    ],
    example: {
      bad: "Ziel dieser Arbeit ist es, das Thema Digitalisierung im Mittelstand näher zu beleuchten und verschiedene Aspekte aufzuzeigen.",
      badNote: "Thema statt Frage; „beleuchten“ und „Aspekte aufzeigen“ definieren kein prüfbares Ziel.",
      good: "Welche organisatorischen Faktoren hemmen die Einführung cloudbasierter ERP-Systeme in hessischen Produktionsbetrieben mit 50 bis 250 Beschäftigten?",
      goodNote: "Gegenstand, Kontext und Reichweite sind eingegrenzt; die Frage lässt eine überprüfbare Antwort zu."
    },
    check: [
      "Die Forschungsfrage ist in einem Satz formuliert.",
      "Gegenstand, Kontext und Zeitraum sind eingegrenzt.",
      "Die Frage ist mit der Betreuung abgestimmt.",
      "Einleitung und Fazit beziehen sich auf dieselbe Frage."
    ],
    feedback: "Die Forschungsfrage ist zu breit angelegt und erlaubt keine eindeutige Bewertung der Zielerreichung. Eine Eingrenzung nach Gegenstand, Kontext und Zeitraum hätte die Arbeit fokussiert und die Ableitung des methodischen Vorgehens nachvollziehbarer gemacht."
  },
  {
    code: "M2",
    cat: "methodisch",
    title: "Lückenhafter Forschungsstand",
    short: "Die Quellenbasis ist schmal, veraltet oder wenig wissenschaftlich und wird nur nacherzählt.",
    weight: 2,
    criterion: "Literaturarbeit & theoretische Fundierung",
    symptoms: [
      "Überwiegend Webseiten, Blogs, Unternehmensbroschüren oder Lehrbuchwissen.",
      "Kaum begutachtete Fachartikel, fast keine englischsprachige Literatur.",
      "Literatur wird Quelle für Quelle referiert („Müller sagt …, Schmidt sagt …“).",
      "Eine Forschungslücke wird behauptet, aber nicht aus der Literatur hergeleitet."
    ],
    causes: [
      ["Suchmaschine statt Datenbank", "Recherche über allgemeine Websuche statt über Fachdatenbanken der Hochschulbibliothek."],
      ["Fehlende Qualitätskriterien", "Peer Review, Publikationsort und Aktualität werden nicht als Auswahlkriterien genutzt."],
      ["Keine Literaturverwaltung", "Quellen werden unsystematisch gesammelt, Zusammenhänge gehen verloren."],
      ["Lesen ohne Raster", "Exzerpte entstehen pro Quelle, nicht entlang der eigenen Fragestellung."]
    ],
    consequences: {
      summary: "Mittleres bis hohes Gewicht: Ohne belastbare Fundierung fehlt der Maßstab für Analyse und Diskussion.",
      items: [
        "Argumente wirken meinungsbasiert statt wissenschaftlich abgesichert.",
        "Die Einordnung der eigenen Ergebnisse in die Forschung ist kaum möglich.",
        "Ein reines Referieren der Literatur wird als geringe Eigenleistung gewertet.",
        "Bei sehr schwacher Quellenlage kann das Kriterium Wissenschaftlichkeit insgesamt infrage stehen."
      ]
    },
    tips: [
      ["recherche", "Recherchieren Sie in Fachdatenbanken und nutzen Sie das Schneeballprinzip rückwärts (Literaturverzeichnis) und vorwärts („zitiert von“)."],
      ["recherche", "Dokumentieren Sie Suchbegriffe, Datenbanken und Datum. Das hilft beim Methodenkapitel und bei Rückfragen."],
      ["recherche", "Nutzen Sie ab Tag 1 eine Literaturverwaltung wie Zotero, Citavi oder BibTeX."],
      ["schreiben", "Legen Sie eine Konzeptmatrix an (Quellen × Kernkonzepte) und gliedern Sie Absätze nach Themen, nicht nach Autorinnen und Autoren."],
      ["schreiben", "Leiten Sie die Forschungslücke explizit her: Was ist bekannt, was ist umstritten, was fehlt?"]
    ],
    example: {
      bad: "Müller (2019) schreibt über agile Methoden. Schmidt (2021) schreibt ebenfalls über agile Methoden. Laut einer Website ist Scrum ein beliebtes Framework.",
      badNote: "Aneinanderreihung von Quellen, keine Synthese, nicht wissenschaftliche Quelle als Beleg.",
      good: "Studien zu agilen Methoden in Softwareunternehmen berichten überwiegend positive Effekte auf die Liefergeschwindigkeit (Müller 2019; Schmidt 2021). Für regulierte Branchen liegen bislang kaum Befunde vor. Hier setzt die vorliegende Arbeit an.",
      goodNote: "Quellen werden zusammengeführt, die Lücke wird aus dem Forschungsstand abgeleitet."
    },
    check: [
      "Die Kernquellen sind überwiegend wissenschaftlich begutachtet.",
      "Aktuelle Literatur der letzten Jahre ist berücksichtigt.",
      "Der Forschungsstand ist thematisch synthetisiert.",
      "Die Forschungslücke ist aus der Literatur hergeleitet."
    ],
    feedback: "Der Forschungsstand stützt sich überwiegend auf nicht wissenschaftliche bzw. wenige Quellen und wird eher referiert als synthetisiert. Eine systematische Recherche in Fachdatenbanken und eine thematische Verdichtung hätten die theoretische Fundierung deutlich gestärkt."
  },
  {
    code: "M3",
    cat: "methodisch",
    title: "Intransparente Methodik",
    short: "Das Vorgehen wird genannt, aber weder begründet noch nachvollziehbar beschrieben.",
    weight: 3,
    criterion: "Methodik & Nachvollziehbarkeit",
    symptoms: [
      "Die Methode wird benannt („Es wurden Interviews geführt“), aber nicht begründet.",
      "Auswahl der Stichprobe, Erhebungsinstrument und Auswertungsverfahren bleiben unklar.",
      "Leitfaden, Fragebogen oder Codierschema fehlen im Anhang.",
      "Gütekriterien und methodische Alternativen werden nicht diskutiert."
    ],
    causes: [
      ["Methode vor Frage", "Die Methode wird nach Vertrautheit oder Aufwand gewählt, nicht aus der Frage abgeleitet."],
      ["Lücken im Methodenwissen", "Inhalte aus Methodenveranstaltungen sind nicht mehr präsent und werden nicht nachgelesen."],
      ["Pflichtkapitel-Denken", "Das Methodenkapitel wird als Formalie verstanden und zuletzt in Eile geschrieben."],
      ["Keine Dokumentation", "Entscheidungen während der Durchführung werden nicht festgehalten und sind später nicht rekonstruierbar."]
    ],
    consequences: {
      summary: "Hohes Gewicht: Nachvollziehbarkeit ist ein Kernkriterium wissenschaftlichen Arbeitens.",
      items: [
        "Ergebnisse sind nicht überprüfbar, ihre Aussagekraft muss im Gutachten relativiert werden.",
        "Die methodische Kompetenz als zentrales Lernziel der Bachelorarbeit ist nicht nachgewiesen.",
        "Fehlende Instrumente im Anhang gelten als Dokumentationsmangel.",
        "Selbst gute Ergebnisse verlieren an Wert, weil ihr Zustandekommen unklar bleibt."
      ]
    },
    tips: [
      ["planung", "Leiten Sie die Methode aus der Frage ab: Welche Daten brauche ich, um sie zu beantworten, und wie bekomme ich sie?"],
      ["planung", "Begründen Sie die Wahl mit Methodenliteratur und nennen Sie mindestens eine verworfene Alternative."],
      ["durchfuehrung", "Führen Sie ein Forschungstagebuch: Datum, Entscheidung, Begründung. Planen Sie einen Pretest für Leitfaden oder Fragebogen."],
      ["schreiben", "Gliedern Sie das Methodenkapitel nach Design, Auswahl bzw. Stichprobe, Erhebung, Auswertung und Gütekriterien."],
      ["ueberarbeitung", "Replikationstest: Könnte eine dritte Person das Vorgehen allein anhand Ihres Kapitels wiederholen?"]
    ],
    example: {
      bad: "Für diese Arbeit wurden Experteninterviews durchgeführt, da diese gut geeignet sind, um Informationen zu erhalten.",
      badNote: "Zirkuläre Begründung; Auswahl, Umfang, Zeitraum und Auswertung fehlen.",
      good: "Da das Erfahrungswissen von IT-Leitungen zu Einführungshemmnissen kaum systematisch erfasst ist, wurde ein exploratives qualitatives Design gewählt. Acht leitfadengestützte Experteninterviews (Juni bis Juli 2026) wurden mittels inhaltlich strukturierender qualitativer Inhaltsanalyse ausgewertet; Leitfaden und Kategoriensystem finden sich in Anhang B.",
      goodNote: "Begründung aus dem Forschungsstand, konkrete Angaben zu Umfang, Zeitraum, Verfahren und Dokumentation."
    },
    check: [
      "Die Methode ist aus der Forschungsfrage begründet.",
      "Stichprobe bzw. Materialauswahl ist beschrieben und begründet.",
      "Erhebungs- und Auswertungsverfahren sind mit Literatur belegt.",
      "Instrumente stehen im Anhang.",
      "Gütekriterien sind reflektiert."
    ],
    feedback: "Das methodische Vorgehen wird benannt, aber nicht hinreichend begründet und beschrieben. Insbesondere die Auswahl der Untersuchungseinheiten sowie das Auswertungsverfahren bleiben unklar, wodurch die Nachvollziehbarkeit der Ergebnisse eingeschränkt ist."
  },
  {
    code: "M4",
    cat: "methodisch",
    title: "Beschreibung statt Analyse",
    short: "Ergebnisse werden aufgezählt, aber nicht interpretiert und nicht mit der Theorie verbunden.",
    weight: 3,
    criterion: "Eigenständigkeit & Reflexionstiefe",
    symptoms: [
      "Der Ergebnisteil listet Aussagen oder Zahlen ohne Einordnung.",
      "Ergebnisdarstellung und Interpretation sind unsystematisch vermischt.",
      "Der Theorieteil spielt in der Analyse keine Rolle mehr.",
      "Die Diskussion wiederholt die Ergebnisse, statt sie zu bewerten."
    ],
    causes: [
      ["Unsicherheit", "Eine eigene Position zu vertreten, fühlt sich anmaßend an."],
      ["Menge statt Tiefe", "Viel Material zu präsentieren wird mit wissenschaftlicher Leistung verwechselt."],
      ["Kein Analyseraster", "Der Theorieteil liefert keine Kategorien, mit denen die Daten befragt werden können."],
      ["Zeitmangel", "Die Diskussion entsteht in den letzten Tagen vor der Abgabe."]
    ],
    consequences: {
      summary: "Hohes Gewicht: Die Eigenleistung entscheidet häufig über den Unterschied zwischen „gut“ und „befriedigend“.",
      items: [
        "Die eigenständige wissenschaftliche Leistung ist kaum erkennbar.",
        "Die Forschungsfrage wird nur indirekt oder gar nicht beantwortet.",
        "Der Theorieteil wirkt im Rückblick überflüssig, weil er nicht genutzt wird.",
        "Die Arbeit erreicht nicht das Reflexionsniveau, das für eine sehr gute Bewertung erwartet wird."
      ]
    },
    tips: [
      ["planung", "Legen Sie den Theorieteil so an, dass er Analysekategorien liefert, mit denen Sie später Ihre Daten befragen."],
      ["durchfuehrung", "Fragen Sie bei jedem Befund: Was bedeutet das für meine Forschungsfrage? („So what?“-Test)"],
      ["schreiben", "Trennen Sie klar: Ergebnisse zeigen, was gefunden wurde; die Diskussion erklärt, was es bedeutet und wie es sich zur Literatur verhält."],
      ["schreiben", "Konfrontieren Sie Ihre Befunde mit dem Forschungsstand: Bestätigung, Widerspruch, Erweiterung."],
      ["ueberarbeitung", "Markieren Sie im Ausdruck jeden Satz mit eigener Interpretation. Bleibt ein Kapitel unmarkiert, fehlt Analyse."]
    ],
    example: {
      bad: "Interviewpartner A nannte die Kosten als Problem. Interviewpartner B nannte ebenfalls die Kosten und zusätzlich den Datenschutz.",
      badNote: "Reine Wiedergabe einzelner Aussagen, keine Verdichtung, kein Theoriebezug.",
      good: "Kosten nannten sechs von acht Befragten als Hemmnis, jedoch fast ausschließlich im Zusammenhang mit schwer kalkulierbarem Migrationsaufwand. Das relativiert die in der Literatur verbreitete Annahme, Lizenzkosten seien der zentrale Faktor (vgl. Schmidt 2021).",
      goodNote: "Verdichtung über Fälle, differenzierte Deutung und Rückbezug auf den Forschungsstand."
    },
    check: [
      "Ergebnisse und Interpretation sind klar getrennt.",
      "Die Analyse nutzt Kategorien aus dem Theorieteil.",
      "Die Diskussion bezieht Befunde auf die Literatur.",
      "Jedes Ergebniskapitel enthält eine eigene Deutung."
    ],
    feedback: "Die Ergebnisse werden überwiegend deskriptiv dargestellt. Eine vertiefte Interpretation und die systematische Rückbindung an den theoretischen Rahmen fehlen weitgehend, sodass die eigenständige analytische Leistung nur eingeschränkt erkennbar ist."
  },
  {
    code: "M5",
    cat: "methodisch",
    title: "Übergeneralisierung ohne Limitationen",
    short: "Schlussfolgerungen gehen über die Reichweite der Daten hinaus, Grenzen werden verschwiegen.",
    weight: 2,
    criterion: "Diskussion & Fazit",
    symptoms: [
      "Aus wenigen Fällen werden allgemeingültige Aussagen abgeleitet.",
      "Zusammenhänge werden als Ursache-Wirkungs-Beziehungen formuliert.",
      "Limitationen fehlen oder bestehen aus Floskeln („Die Stichprobe war klein“).",
      "Das Fazit bringt neue Inhalte, Handlungsempfehlungen hängen nicht an den Ergebnissen."
    ],
    causes: [
      ["Wunsch nach großem Ergebnis", "Man möchte eine relevante, allgemeine Aussage treffen."],
      ["Fehlvorstellung", "Limitationen werden als Eingeständnis von Schwäche missverstanden."],
      ["Reichweite unklar", "Was ein Design leisten kann (explorativ, deskriptiv, kausal), ist nicht verinnerlicht."],
      ["Fazit als Pflichtteil", "Das Fazit wird als Zusammenfassung geschrieben, nicht als Antwort."]
    ],
    consequences: {
      summary: "Mittleres Gewicht: Überdehnte Aussagen kosten Glaubwürdigkeit, reflektierte Grenzen werden positiv bewertet.",
      items: [
        "Die Validität der Schlussfolgerungen wird im Gutachten infrage gestellt.",
        "Fehlende Limitationen gelten als Mangel an methodischer Reflexion.",
        "Nicht hergeleitete Handlungsempfehlungen werden als unbelegte Behauptungen gewertet.",
        "Neue Inhalte im Fazit stören den Aufbau und werden als Strukturfehler angemerkt."
      ]
    },
    tips: [
      ["durchfuehrung", "Notieren Sie vor der Auswertung, welche Art von Aussagen Ihr Design zulässt und welche nicht."],
      ["schreiben", "Koppeln Sie Aussagen sprachlich an ihre Reichweite: „in der untersuchten Stichprobe“, „deutet darauf hin“."],
      ["schreiben", "Formulieren Sie Limitationen konkret: Was ist die Grenze, warum besteht sie, wie wirkt sie auf die Ergebnisse, wie ließe sie sich künftig adressieren?"],
      ["schreiben", "Fazit-Struktur: Antwort auf die Frage, Beitrag der Arbeit, Grenzen, Ausblick. Keine neuen Daten oder Quellen."],
      ["ueberarbeitung", "Prüfen Sie jede Handlungsempfehlung: Auf welches Ergebnis stützt sie sich? Ohne Verweis streichen."]
    ],
    example: {
      bad: "Die Ergebnisse zeigen eindeutig, dass cloudbasierte ERP-Systeme im Mittelstand scheitern.",
      badNote: "Generalisierung über acht Fälle hinaus, absolute Formulierung, keine Einschränkung.",
      good: "Für die acht untersuchten Betriebe deutet sich an, dass vor allem unklare Migrationsaufwände die Einführung hemmen. Aufgrund der kleinen, regional begrenzten Stichprobe sind die Befunde nicht verallgemeinerbar; eine standardisierte Befragung könnte sie überprüfen.",
      goodNote: "Aussage an die Reichweite gebunden, Limitation konkret begründet, Ausblick abgeleitet."
    },
    check: [
      "Aussagen entsprechen der Reichweite des Designs.",
      "Limitationen sind konkret und mit Auswirkungen benannt.",
      "Das Fazit enthält keine neuen Inhalte.",
      "Handlungsempfehlungen sind aus den Ergebnissen hergeleitet."
    ],
    feedback: "Die Schlussfolgerungen gehen teilweise über die Aussagekraft der erhobenen Daten hinaus. Eine konkrete Reflexion der methodischen Grenzen und eine vorsichtigere Formulierung der Befunde hätten die Argumentation überzeugender gemacht."
  },
  {
    code: "F1",
    cat: "formal",
    title: "Inkonsistente Zitierweise",
    short: "Zitierstil wechselt, Angaben sind unvollständig, Text und Literaturverzeichnis passen nicht zusammen.",
    weight: 2,
    criterion: "Form & Belegtechnik",
    symptoms: [
      "Mischung aus Autor-Jahr-System, Fußnoten und nummerierten Verweisen.",
      "Fehlende Seitenangaben bei wörtlichen Zitaten.",
      "Quellen aus dem Text fehlen im Literaturverzeichnis oder umgekehrt.",
      "Unvollständige Einträge: kein Verlag, keine DOI, kein Abrufdatum bei Online-Quellen."
    ],
    causes: [
      ["Manuelle Pflege", "Quellenangaben werden von Hand getippt und aus verschiedenen Vorlagen kopiert."],
      ["Vorgaben unbekannt", "Der Zitierleitfaden des Fachbereichs oder der Betreuung wurde nicht gelesen."],
      ["Belegen zum Schluss", "Quellen werden erst nach dem Schreiben nachgetragen."],
      ["Unklare Regeln", "Unterschiede zwischen direktem Zitat, Paraphrase und Verweis sind nicht sicher."]
    ],
    consequences: {
      summary: "Mittleres Gewicht: Einzelfehler wiegen wenig, in der Häufung entsteht ein deutlicher Abzug im Kriterium Form.",
      items: [
        "Die Überprüfung von Quellen wird erschwert, die Sorgfalt der Arbeit insgesamt angezweifelt.",
        "Fehlende Belege bei direkten Übernahmen können den Verdacht auf Plagiat begründen.",
        "Inkonsistenz fällt sofort ins Auge und prägt den Gesamteindruck negativ.",
        "Ein fehlerhaftes Literaturverzeichnis wird häufig als eigener Kritikpunkt im Gutachten aufgeführt."
      ]
    },
    tips: [
      ["planung", "Legen Sie den Zitierstil zu Beginn fest, orientiert an den Vorgaben Ihres Fachbereichs, und klären Sie offene Punkte mit der Betreuung."],
      ["recherche", "Notieren Sie beim Exzerpieren sofort Seitenzahl und vollständige Quelle."],
      ["schreiben", "Fügen Sie Belege über das Plugin Ihrer Literaturverwaltung ein, nie per Hand."],
      ["ueberarbeitung", "Gleichen Sie vor der Abgabe Text und Literaturverzeichnis ab und prüfen Sie Stichproben auf Vollständigkeit."]
    ],
    example: {
      bad: "… wie bereits gezeigt wurde (Müller, 2019). Vgl. Schmidt S. 12. Diese Annahme wird bestätigt [3].",
      badNote: "Drei verschiedene Zitierlogiken, uneinheitliche Zeichensetzung, unvollständige Angabe.",
      good: "… wie bereits gezeigt wurde (Müller 2019, S. 45). Diese Annahme bestätigen auch neuere Studien (vgl. Schmidt 2021, S. 12; Weber 2024).",
      goodNote: "Ein durchgängiger Stil, Seitenangaben, einheitliches Format für Mehrfachbelege."
    },
    check: [
      "Ein einziger Zitierstil wird durchgängig verwendet.",
      "Alle wörtlichen Zitate haben Seitenangaben.",
      "Text und Literaturverzeichnis stimmen vollständig überein.",
      "Die Einträge im Literaturverzeichnis sind vollständig."
    ],
    feedback: "Die Belegtechnik ist uneinheitlich: Zitierweisen wechseln, Seitenangaben fehlen teilweise, und Text sowie Literaturverzeichnis stimmen nicht durchgängig überein. Die konsequente Nutzung einer Literaturverwaltung wird für künftige Arbeiten empfohlen."
  },
  {
    code: "F2",
    cat: "formal",
    title: "Nicht gekennzeichnete Übernahmen",
    short: "Fremde Gedanken, Übersetzungen oder KI-generierte Passagen erscheinen ohne ausreichende Kennzeichnung.",
    weight: 4,
    criterion: "Wissenschaftliche Redlichkeit",
    symptoms: [
      "Paraphrasen sind nah am Original, aber nicht oder nur pauschal belegt.",
      "Ein einziger Beleg am Absatzende soll mehrere Quellen abdecken.",
      "Übersetzte Passagen aus fremdsprachigen Quellen erscheinen als eigener Text.",
      "KI-generierte Textteile sind entgegen den geltenden Vorgaben nicht gekennzeichnet.",
      "Passagen aus eigenen früheren Arbeiten werden ohne Hinweis übernommen."
    ],
    causes: [
      ["Unklare Belegpflicht", "Studierende wissen nicht sicher, wann ein Gedanke belegt werden muss."],
      ["Patchwriting", "Aus Unsicherheit beim Formulieren werden Originalsätze nur leicht umgestellt."],
      ["Vermischte Notizen", "In Exzerpten ist nicht mehr erkennbar, was Zitat, Paraphrase oder eigener Gedanke ist."],
      ["Unklare KI-Regeln", "Die Vorgaben zur Nutzung und Kennzeichnung generativer KI sind nicht bekannt oder wurden nicht erfragt."]
    ],
    consequences: {
      summary: "Kritisch: Kann als Täuschungsversuch gewertet werden. Die Folgen regelt die jeweilige Prüfungsordnung, bis hin zur Bewertung mit „nicht ausreichend“.",
      items: [
        "Unabhängig von der inhaltlichen Qualität kann die gesamte Arbeit als nicht bestanden gelten.",
        "Die unterschriebene Eigenständigkeitserklärung wird verletzt.",
        "Je nach Prüfungsordnung sind weitere Konsequenzen möglich.",
        "Auch bei fahrlässigem Handeln entsteht ein erheblicher Prüfaufwand und ein Vertrauensverlust."
      ]
    },
    tips: [
      ["recherche", "Markieren Sie Exzerpte konsequent in drei Farben: wörtliches Zitat, Paraphrase, eigener Gedanke."],
      ["planung", "Klären Sie früh die Vorgaben zur Nutzung generativer KI und dokumentieren Sie jede Nutzung (Werkzeug, Zweck, Umfang)."],
      ["schreiben", "Belegen Sie satzgenau. Jeder Satz mit fremdem Gedanken braucht einen erkennbaren Bezug zur Quelle."],
      ["schreiben", "Paraphrasieren Sie mit geschlossenem Original: verstehen, weglegen, eigenständig formulieren, danach abgleichen."],
      ["ueberarbeitung", "Nutzen Sie eine von der Hochschule angebotene Plagiatsprüfung, sofern verfügbar, und prüfen Sie Treffer selbstkritisch."]
    ],
    example: {
      bad: "Agile Methoden erhöhen die Anpassungsfähigkeit von Teams, weil Feedbackschleifen verkürzt und Anforderungen iterativ verfeinert werden. Dadurch sinkt das Risiko von Fehlentwicklungen erheblich. (Müller 2019)",
      badNote: "Nahe Paraphrase über mehrere Sätze, pauschaler Beleg am Ende, Umfang der Übernahme nicht erkennbar.",
      good: "Müller (2019, S. 45 f.) führt die höhere Anpassungsfähigkeit agiler Teams auf verkürzte Feedbackschleifen zurück. Ob dieser Effekt auch in regulierten Umgebungen auftritt, in denen Anforderungen formal freigegeben werden müssen, bleibt offen.",
      goodNote: "Übernahme klar zugeordnet und eingegrenzt, eigener Gedanke deutlich abgesetzt."
    },
    check: [
      "Jeder fremde Gedanke ist satzgenau belegt.",
      "Paraphrasen sind eigenständig formuliert.",
      "Die KI-Nutzung entspricht den Vorgaben und ist dokumentiert.",
      "Übernahmen aus eigenen früheren Arbeiten sind gekennzeichnet."
    ],
    feedback: "In mehreren Passagen werden fremde Gedanken nicht oder nicht hinreichend als solche gekennzeichnet. Diese Übernahmen sind im Hinblick auf die Anforderungen an wissenschaftliche Redlichkeit und die Eigenständigkeitserklärung zu prüfen."
  },
  {
    code: "F3",
    cat: "formal",
    title: "Unlogische Gliederung",
    short: "Die Struktur bildet keine Argumentation ab: einzelne Unterpunkte, Ungleichgewichte, nichtssagende Überschriften.",
    weight: 2,
    criterion: "Aufbau & roter Faden",
    symptoms: [
      "Einzelne Unterpunkte: Auf 2.1 folgt kein 2.2.",
      "Mehr als drei bis vier Gliederungsebenen in einer Bachelorarbeit.",
      "Stark unausgewogene Kapitel, etwa 20 Seiten Theorie und 4 Seiten Ergebnisse.",
      "Überschriften wie „Allgemeines“ oder „Sonstiges“, fehlende Überleitungen."
    ],
    causes: [
      ["Ungeplantes Wachstum", "Die Gliederung entsteht beim Schreiben, statt ihm vorauszugehen."],
      ["Kein Fragebezug", "Kapitel werden nicht als Schritte zur Beantwortung der Forschungsfrage gedacht."],
      ["Isoliertes Schreiben", "Kapitel entstehen getrennt voneinander und werden nicht verknüpft."],
      ["Fehlendes Seitenbudget", "Proportionen der Kapitel werden nicht vorab geplant."]
    ],
    consequences: {
      summary: "Mittleres Gewicht: Das Inhaltsverzeichnis ist der erste Eindruck und prägt die Erwartung an die gesamte Arbeit.",
      items: [
        "Der rote Faden ist schwer erkennbar, die Argumentation wirkt sprunghaft.",
        "Ungleichgewichte signalisieren eine falsche Schwerpunktsetzung.",
        "Formale Gliederungsfehler werden fast immer im Gutachten angemerkt.",
        "Leserinnen und Leser müssen Zusammenhänge selbst herstellen."
      ]
    },
    tips: [
      ["planung", "Entwerfen Sie die Gliederung als Argumentationsplan: Jedes Kapitel beantwortet eine Teilfrage."],
      ["planung", "Legen Sie ein Seitenbudget je Kapitel fest und prüfen Sie es zur Halbzeit."],
      ["schreiben", "Beginnen Sie jedes Hauptkapitel mit einer kurzen Einleitung und enden Sie mit einer Überleitung."],
      ["ueberarbeitung", "Lesen Sie nur das Inhaltsverzeichnis: Erzählt es allein die Logik Ihrer Arbeit?"]
    ],
    example: {
      bad: "2 Grundlagen\n2.1 Allgemeines\n3 Agile Methoden\n3.1 Scrum\n3.1.1 Rollen\n3.1.1.1 Product Owner",
      badNote: "Einzelner Unterpunkt 2.1, nichtssagende Überschrift, vier Ebenen tief.",
      good: "2 Theoretischer Rahmen\n2.1 Agile Vorgehensmodelle\n2.2 Regulatorische Anforderungen\n2.3 Spannungsfelder und Analyseraster",
      goodNote: "Aussagekräftige Überschriften, ausgewogene Ebene, das letzte Unterkapitel führt zur Analyse."
    },
    check: [
      "Jede Gliederungsebene hat mindestens zwei Unterpunkte.",
      "Es gibt maximal drei bis vier Ebenen.",
      "Die Kapitel stehen in einem sinnvollen Umfangsverhältnis.",
      "Hauptkapitel haben Einleitungen und Überleitungen."
    ],
    feedback: "Die Gliederung ist formal nicht durchgängig stimmig (u. a. einzelne Unterpunkte) und die Kapitelproportionen spiegeln den Schwerpunkt der Arbeit nur bedingt wider. Überleitungen zwischen den Kapiteln hätten den roten Faden gestärkt."
  },
  {
    code: "F4",
    cat: "formal",
    title: "Unwissenschaftlicher Sprachstil",
    short: "Umgangssprache, Wertungen, unklare Begriffe und Sprachfehler mindern Präzision und Lesbarkeit.",
    weight: 2,
    criterion: "Sprache & Ausdruck",
    symptoms: [
      "Umgangssprache, Füllwörter und Superlative („extrem wichtig“, „natürlich“).",
      "Zentrale Begriffe werden nicht definiert oder wechseln im Verlauf.",
      "Bandwurmsätze und gehäufter Nominalstil.",
      "Rechtschreib-, Grammatik- und Zeichensetzungsfehler.",
      "Uneinheitliche Perspektive zwischen Ich-Form, „man“ und Passiv."
    ],
    causes: [
      ["Wenig Schreibpraxis", "Längere wissenschaftliche Texte wurden im Studium selten geschrieben."],
      ["Falsches Vorbild", "Komplizierte Sätze werden für besonders akademisch gehalten."],
      ["Kein Abstand", "Der Text wird direkt nach dem Schreiben abgegeben, ohne Korrekturlauf mit zeitlichem Abstand."],
      ["Fehlende Definitionen", "Begriffe werden intuitiv verwendet, statt sie festzulegen."]
    ],
    consequences: {
      summary: "Mittleres Gewicht: Präzise Sprache ist Teil der Wissenschaftlichkeit; bei Häufung deutlicher Abzug.",
      items: [
        "Unklare Begriffe führen zu unklaren Aussagen und damit zu inhaltlicher Kritik.",
        "Wertende Sprache ersetzt Belege und wird als Argumentationsschwäche gewertet.",
        "Viele Sprachfehler erschweren das Lesen und überdecken gute Inhalte.",
        "Das Kriterium Sprache & Ausdruck ist in den meisten Bewertungsschemata eigenständig gewichtet."
      ]
    },
    tips: [
      ["planung", "Klären Sie mit der Betreuung, ob die Ich-Form erwünscht ist, und bleiben Sie dann konsequent."],
      ["schreiben", "Definieren Sie Schlüsselbegriffe einmal und verwenden Sie sie danach unverändert. Ein kleines Glossar hilft."],
      ["schreiben", "Ein Gedanke pro Satz. Belegen statt bewerten: Ersetzen Sie „sehr wichtig“ durch eine begründete Aussage."],
      ["ueberarbeitung", "Lesen Sie den Text laut oder per Sprachausgabe und planen Sie mindestens zwei Tage Abstand vor dem letzten Korrekturlauf."],
      ["ueberarbeitung", "Lassen Sie eine fachfremde Person lesen und nutzen Sie zusätzlich eine Rechtschreib- und Grammatikprüfung."]
    ],
    example: {
      bad: "Agilität ist heutzutage natürlich extrem wichtig, da man sonst einfach nicht mehr mithalten kann.",
      badNote: "Füllwörter, Superlativ, Umgangssprache, unbelegte Wertung.",
      good: "Agile Vorgehensmodelle gelten in dynamischen Märkten als Mittel, um auf veränderte Anforderungen schneller zu reagieren (vgl. Müller 2019, S. 12).",
      goodNote: "Sachlich, präzise, eingeordnet und belegt."
    },
    check: [
      "Zentrale Begriffe sind definiert und werden konsistent verwendet.",
      "Der Text ist frei von Umgangssprache und unbelegten Wertungen.",
      "Die Perspektive (Ich-Form oder unpersönlich) ist einheitlich.",
      "Ein Korrekturlauf mit zeitlichem Abstand ist erfolgt."
    ],
    feedback: "Der sprachliche Ausdruck entspricht nicht durchgängig wissenschaftlichen Anforderungen. Umgangssprachliche Wendungen, unbelegte Wertungen und eine uneinheitliche Begriffsverwendung beeinträchtigen die Präzision der Argumentation."
  },
  {
    code: "F5",
    cat: "formal",
    title: "Mängel bei Darstellungen und Formvorgaben",
    short: "Abbildungen und Tabellen sind unbeschriftet oder unbelegt, formale Vorgaben werden nicht eingehalten.",
    weight: 1,
    criterion: "Form & Gestaltung",
    symptoms: [
      "Abbildungen ohne Nummer, Titel oder Quellenangabe.",
      "Darstellungen werden im Text weder eingeführt noch interpretiert.",
      "Unscharfe Screenshots, unlesbare Achsenbeschriftungen.",
      "Verzeichnisse fehlen oder sind manuell und fehlerhaft.",
      "Vorgaben zu Umfang, Layout, Deckblatt oder Eigenständigkeitserklärung werden missachtet."
    ],
    causes: [
      ["Vorgaben nicht gelesen", "Die formalen Richtlinien des Fachbereichs werden erst kurz vor der Abgabe geprüft."],
      ["Formatieren am Ende", "Layout und Verzeichnisse entstehen in der letzten Nacht."],
      ["Keine Formatvorlage", "Formatierungen werden von Hand gesetzt statt über Vorlagen."],
      ["Abbildung als Dekoration", "Darstellungen sollen den Text auflockern, statt ein Argument zu tragen."]
    ],
    consequences: {
      summary: "Geringes bis mittleres Gewicht, mit Ausnahmen: Fehlende Pflichtbestandteile können die Annahme der Arbeit gefährden.",
      items: [
        "Fehlende Quellen bei übernommenen Abbildungen berühren die wissenschaftliche Redlichkeit.",
        "Eine fehlende oder nicht unterschriebene Eigenständigkeitserklärung kann formal problematisch sein.",
        "Deutliche Abweichungen vom vorgegebenen Umfang werden in der Regel negativ berücksichtigt.",
        "Unsaubere Gestaltung schwächt den professionellen Gesamteindruck."
      ]
    },
    tips: [
      ["planung", "Laden Sie die Formatvorlage und die formalen Richtlinien Ihres Fachbereichs herunter, bevor Sie die erste Zeile schreiben."],
      ["schreiben", "Nutzen Sie die Beschriftungsfunktion für Abbildungen und Tabellen und erzeugen Sie Verzeichnisse automatisch."],
      ["schreiben", "Führen Sie jede Darstellung im Text ein und interpretieren Sie sie. Kennzeichnen Sie Quellen, etwa „Eigene Darstellung in Anlehnung an …“."],
      ["ueberarbeitung", "Arbeiten Sie eine Woche vor Abgabe eine formale Abschluss-Checkliste ab und prüfen Sie das finale PDF Seite für Seite."]
    ],
    example: {
      bad: "[Grafik eingefügt]\nWie man sieht, ist das Ergebnis eindeutig.",
      badNote: "Keine Nummer, kein Titel, keine Quelle; der Text verweist nicht konkret auf die Darstellung.",
      good: "Abbildung 4 zeigt die Häufigkeit der genannten Hemmnisse. Auffällig ist, dass Migrationsaufwände doppelt so oft genannt werden wie Lizenzkosten.\nAbb. 4: Genannte Einführungshemmnisse (n = 8). Quelle: Eigene Darstellung.",
      goodNote: "Nummeriert, betitelt, belegt und im Text eingeführt und gedeutet."
    },
    check: [
      "Alle Abbildungen und Tabellen sind nummeriert, betitelt und belegt.",
      "Jede Darstellung wird im Text eingeführt.",
      "Verzeichnisse sind automatisch erzeugt und korrekt.",
      "Umfang, Layout und Pflichtbestandteile entsprechen den Vorgaben."
    ],
    feedback: "Abbildungen und Tabellen sind nicht durchgängig nummeriert, mit Quellen versehen und im Text eingeführt. Zudem werden formale Vorgaben teilweise nicht eingehalten, was den Gesamteindruck der Arbeit schwächt."
  }
];
