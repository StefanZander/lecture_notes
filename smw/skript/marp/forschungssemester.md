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
<script src="https://kit.fontawesome.com/8b20b734d0.js" crossorigin="anonymous"></script>

<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files forschungssemester.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- forschungssemester.md -->

# Vortrag zum Forschungssemester 

#### Prof. Dr. Stefan Linus Zander

Eine Übersicht der Forschungsaktivitäten und Tätigkeiten im WiSe 2020/2021 {.lightgreen .Big .skip}



---
<!-- header: Übersicht -->
<!-- footer: Prof. Dr. Stefan Zander -->
# Tätigkeiten 

- Markdown in der Lehre
- KG-basiertes Tool zur Verwaltung von Abschlussarbeiten
- Umbau des WPF "Semantisches Wissensmanagement im Unternehmen"
- sonstiges 



---
# Tätigkeiten 

- ==Markdown in der Lehre== {.big}
- ==KG-basiertes Tool zur Verwaltung von Abschlussarbeiten== {.big}
- Umbau des WPF "Semantisches Wissensmanagement im Unternehmen"
- sonstiges 

---
# Teil 1: Markdown für die Lehre


---
<!-- header: Motivation -->
## Warum Markdown-basierte Präsentationsframeworks für Lehrinhalte ?

{.Bigskip}
::::: columns
:::: single
- Trennung von Inhalt von Darstellung und Layout
- Zielformat-unabhängige Beschreibung von Inhalten
- Gemeinsame Erstellen von Lehrunterlagen 
- Versionierung
- Weniger "sperrig" als LaTeX Beamer
- Template-basierte Darstellung 
- Viele Tools frei verfügbar und Open Source
- Nutzung von offenen Formaten und Standards
- Automatisietes Deployment und Generierungsworkflows 
::::
:::: single
::: center
![height:300px](./figures/markdown.jpg)
:::
::::
:::::

::: footnotes
Bildquelle: https://css-tricks.com/wp-content/uploads/2016/01/choose-markdown.jpg
:::

---
# Vorteile (persönliche Meinung) :fa-flag:

::::: columns
:::: single
- Konzentration auf Inhalte nicht auf deren Darstellung {color:green}:fa-check:{color}
- Schnelle Generierung von neuen Lehrmaterialien <span style="color: orange">:fas-star: :fas-star: :fas-star: </span>
- Einheitliche Darstellung durch Verwendung von Tempaltes und definierten Stilregeln *:fa-check:*{.red}
- Einfache Syntax ohne {color:red}umfangreiches{color} Tagging (vgl. LaTeX-Beamer)
- [Attraktive]{.red} Darstellung von `Programmcode`
- Einfache Einbindung von *Web-basierten*{.red} Inhalten und Formaten
::::
:::: single
```md
- Konzentration auf Inhalte nicht auf deren Darstellung 
  {color:green}:fa-check:{color}
- Schnelle Generierung von neuen Lehrmaterialien 
  <span style="color: orange">
    :fas-star: :fas-star: :fas-star: 
  </span>
- Einheitliche Darstellung durch Verwendung von Tempaltes 
  und definierten Stilregeln *:fa-check:*{.red}
- Einfache Syntax ohne {color:red}umfangreiches{color} 
  Tagging (vgl. LaTeX-Beamer)
- [Attraktive]{.red} Darstellung von `Programmcode`
- Einfache Einbindung von *Web-basierten*{.red} 
  Inhalten und Formaten
```
::::
:::::

---
# Einsatzmöglichkeiten

Wann ist der Einsatz von Markdown-basierten Präsentationsframeworks sinnvoll ?
(persönliche Meinung)

- Folien <span style="color: red">mit</span> viel Codebespielen
- Mathematische Formeln
- hohen Maß an Template

