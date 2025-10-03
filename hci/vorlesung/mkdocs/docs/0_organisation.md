# Organisation der Lehrveranstaltung

## Allgemeines

!!! info "Neues didaktisches Modell ab dem WiSe 2025/2026"

Der nachstehend verlinkte Foliensatz enthält alles Wissenswerte zu folgenden Themen: 

- Aufbau und Organisation der Lehrveranstaltung
- Didaktisches Modell 
- Bewertungsmodalitäten
- Rolle des Praktikums und des Semesterprojekts
- Semesterplan

In der 1. Vorlesungseinheit werden diese Themen ausführlich besprochen.

- :material-file-pdf-box: [Organisation der Veranstaltung](https://code.fbi.h-da.de/zander/hci/material/-/raw/main/0_organisation/01_organisation.pdf)



<!--
## Semesterplan

- Woche 1: [Organisation](0_organisation.md) + [Kapitel 1 – Einführung User-Centered Design](1_user-centered_design.md)
- Woche 2: [Kapitel 2 – User Research](2_user_research.md)
- Woche 3: [Kapitel 3 – Requirements Engineering](3_requirements_engineering.md)
- Woche 4: [Kapitel 4 – Modellbildung](4_models.md)
- Woche 5: [Kapitel 5 – Prototyping](5_prototyping.md)
- Woche 6: [Kapitel 6 – Visual Design](6_visual_design.md)
- Woche 7: [Kapitel 7 – Usability Evaluation](7_usability.md)
- Woche 8: App-Entwicklung
- Woche 9: App-Entwicklung
- Woche 10: App-Entwicklung
- Woche 11: App-Entwicklung
- Woche 12: App-Entwicklung
- Woche 13: App-Präsentationen
- Woche 14: App-Präsentationen  
-->


# The Docker image that will be used to build your app
image: $BUILD_IMAGE
create-pages:
  pages:
    # The folder that contains the files to be exposed at the Page URL
    publish: public
  rules:
    # This ensures that only pushes to the default branch will trigger
    # a pages deploy
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH



image: python:3.8-buster

before_script:
  - pip install -r requirements.txt

test:
  stage: test
  script:
  - mkdocs build --strict --verbose --site-dir test
  artifacts:
    paths:
    - test
  rules:
    - if: $CI_COMMIT_REF_NAME != $CI_DEFAULT_BRANCH

pages:
  stage: deploy
  script:
  - mkdocs build --strict --verbose
  artifacts:
    paths:
    - public
  rules:
    - if: $CI_COMMIT_REF_NAME == $CI_DEFAULT_BRANCH
