# Pflichtenheft – Semesterprojekt Softwareentwicklung

**Projekt:** Entwicklung eines Plugins zur Ausführung von Markdown-basierten Quizzes für MkDocs  
**Studiengang:** Bachelor Informatik, 4. Semester  
**Semester:** SS/WS 20XX  
**Bearbeiter:** [Name eintragen]  

---

## 1. Zielbestimmung
- **Muss-Kriterien:**
  - Entwicklung eines Plugins für MkDocs zur Ausführung von Markdown-basierten Quizzes
  - Unterstützung grundlegender Quiztypen (Single-Choice, Multiple-Choice)
  - Interaktive Ausführung direkt in der generierten MkDocs-Webseite
  - Bereitstellung von Feedback (richtig/falsch)
- **Kann-Kriterien:**
  - Speicherung von Antworten im Browser (LocalStorage)
  - Erweiterte Quiztypen (True/False, Zuordnungsaufgaben)
  - Responsives Design für mobile Endgeräte
- **Abgrenzungskriterien:**
  - Keine serverseitige Auswertung
  - Keine Benutzerverwaltung oder Notenvergabe

---

## 2. Produkteinsatz
- **Einsatzbereich:** Lehrveranstaltungen, Projektdokumentationen, Online-Tutorials  
- **Zielgruppen:**
  - Studierende (als Nutzer:innen der Quizzes)
  - Lehrende (als Autor:innen von Quiz-Inhalten in Markdown)
- **Betriebsbedingungen:**
  - Läuft innerhalb einer MkDocs-basierten Dokumentation
  - Nutzung im Browser, ohne zusätzliche Installation auf Nutzerseite

---

## 3. Produktübersicht
- **Ausgangssystem:** MkDocs + MkDocs-Material  
- **Erweiterung:** Plugin zur Integration von Quizzes  
- **Schnittstellen:**
  - Eingabe: Markdown-Dateien mit Quiz-Definition
  - Ausgabe: HTML/JavaScript zur Darstellung interaktiver Quizzes

---

## 4. Produktfunktionen
1. Erkennen von Quiz-Blöcken in Markdown-Dateien  
2. Parsing und Umwandlung in interaktive HTML-Elemente  
3. Darstellung von Antwortoptionen (Checkboxen, Radiobuttons)  
4. Feedback-Ausgabe bei der Beantwortung  
5. Optional: Speicherung der Antworten im Browser  

---

## 5. Produktdaten
- **Eingabedaten:** Quiz-Definition in Markdown (z. B. Listen, Checkboxen)  
- **Ausgabedaten:** Rendered Quiz mit Interaktivität im Browser  

**Beispiel-Format:**
```markdown
**Frage:** Was bedeutet UX?  
- [ ] A) User Xtreme  
- [x] B) User Experience  
- [ ] C) Unix Execution
```

## 6. Qualitätsanforderungen
- Usability: Einfache Nutzung der Quizzes durch Studierende
- Portabilität: Plugin läuft mit Standard-MkDocs-Setups
- Erweiterbarkeit: Möglichkeit, später neue Quiztypen zu ergänzen
- Wartbarkeit: Gut dokumentierter Quellcode


## 7. Entwicklungsumgebung

- Programmiersprache: Python (für MkDocs-Plugin), JavaScript/CSS (für Interaktivität)
- Frameworks/Tools: MkDocs, MkDocs-Material, GitHub/GitLab für Versionskontrolle
- Testumgebung: Browser (Chrome, Firefox, Edge), lokale MkDocs-Instanz


## 8. Entwicklungsphasen / Meilensteine

1. Anforderungsanalyse & Pflichtenheft (Woche 1–2)
2. Konzeption & Design der Quiz-Syntax (Woche 2–3)
3. Implementierung Basisfunktionen (Woche 4–6)
4. Erweiterungen & Feedback-Funktion (Woche 7–8)
5. Test & Evaluation (Woche 9–10)
6. Dokumentation & Präsentation (Woche 11–12)

## 9. Abnahmebedingungen

- Plugin lässt sich in einer MkDocs-Instanz installieren und aktivieren
- Mindestens zwei Quiztypen (Single-Choice, Multiple-Choice) funktionieren fehlerfrei
- Quiz-Ergebnisse werden im Browser dargestellt
- Projektdokumentation ist vollständig (Installationsanleitung + Beispiele)

