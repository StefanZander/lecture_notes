# OpenFoodFacts

Die folgende Seite enthält einige Informationen und Hinweise, die Ihnen das Arbeiten mit der openfoodfacts-API erleichtern und vereinfachen sollen. Bitte beachten Sie, dass diese Seite bzw. die darin enthaltenen Informationen volatil sind und sich ändern können bzw. angepasst werden.
Ergänzungen, Erweiterungen, etc. sind generell herzlich willkommen.


## Allgemeine Informationen

Die Dokumentation der API mit einigen Beispielaufrufen finden sie hier: 
<https://openfoodfacts.github.io/api-documentation/>

Auf die API kann __ohne Authentifizierungsinformationen__ zugegriffen werden. Eine Registrierung oder ein OAuth 2.0-Token ist nicht notwendig.

Basis-URL für die Abfrage von Produkten aus Deutschland: `https://de-de.openfoodfacts.org/api/v2/`  
Richten Sie alle Anfragen an die API über diese URL.

Es gibt eine sehr hilfreiche **Visual Studio Code Extension** mit Namen "Thunder Client", mittels der sich auf einfache Art und Weise Rest-API-Aufrufe durchführen und analysieren lassen. 

Ich empfehle die Verwendung eines solchen Tools bzw. einer derartigen Extension für die Untersuchung der openfoodfacts-API.



## Abfragemöglichkeiten

### Direkte Abfrage mittels Barcode

Ergänzung der Base-URI um `/product/BARCODE`.

Beispiel:  
<https://de-de.openfoodfacts.org/api/v2/product/5449000000996>

Eine solche Abfrage liefert alle zu einem Produkt hinterlegte Informationen.


### Filterung von Informationen

Die Produktdatensätze sind idR sehr sehr umfangreich (teilweise mit > 4000 Zeilen JSON-Code pro Produkt). Es ist deshalb sinnvoll, mittels **Filterung** (Query-Parameter `fields=FELDNAME`) nur die relevanten Stammdaten abzufragen. 

Syntax: `&fields=FELDNAME,FELDNAME,...,FELDNAME`

Beispiel: <https://de-de.openfoodfacts.org/api/v2/product/5449000000996&fields=product_name_de>

Es lassen sich verschiedene Felder kombinieren (konjungieren):  
<https://de-de.openfoodfacts.org/api/v2/product/5449000000996&fields=product_name_de,ingredients_text_with_allergens_de,nutriscore_grade,nutrient_levels,nutriscore_data>

Beispiel einer Antwort:

```json
{
  "code": "5449000000996",
  "product": {
    "ingredients_text_with_allergens_de": "Wasser, Zucker, Kohlensäure, Farbstoff E150d, Säuerungsmittel: E338, natürliche Aromen inklusive Koffein",
    "nutrient_levels": {
      "fat": "low",
      "salt": "low",
      "saturated-fat": "low",
      "sugars": "high"
    },
    "nutriscore_data": {
      "energy": 180,
      "energy_points": 6,
      "energy_value": 180,
      "fiber": 0,
      "fiber_points": 0,
      "fiber_value": 0,
      "fruits_vegetables_nuts_colza_walnut_olive_oils": 0,
      "fruits_vegetables_nuts_colza_walnut_olive_oils_points": 0,
      "fruits_vegetables_nuts_colza_walnut_olive_oils_value": 0,
      "grade": "e",
      "is_beverage": 1,
      "is_cheese": 0,
      "is_fat": 0,
      "is_water": 0,
      "negative_points": 14,
      "positive_points": 0,
      "proteins": 0,
      "proteins_points": 0,
      "proteins_value": 0,
      "saturated_fat": 0,
      "saturated_fat_points": 0,
      "saturated_fat_ratio": 0,
      "saturated_fat_ratio_points": 0,
      "saturated_fat_ratio_value": 0,
      "saturated_fat_value": 0,
      "score": 14,
      "sodium": 0,
      "sodium_points": 0,
      "sodium_value": 0,
      "sugars": 10.6,
      "sugars_points": 8,
      "sugars_value": 10.6
    },
    "nutriscore_grade": "e",
    "product_name_de": "Coca-Cola"
  },
  "status": 1,
  "status_verbose": "product found"
}
```

#### Auswahl relevanter Feldnamen

Im folgenden findet sich eine Auswahl an relevanten Feldnamen eines Produktdatensatzes. Neben diesen Daten sind noch eine ganze Menge weiterer Daten enthalten, die ausgewertet werden können. Diese Aufzählung stellt nur eine Auswahl potentiell interessanter Informationen dar und soll Ihnen den Einstieg in die API erleichtern.


- `image_front_url`: Produktbild
- `ingredients_text_de`: Auflistung der Inhaltsstoffe
- `ingredients_text_with_allergens_de`: 
- `nutrient_levels`: object where each property represents one nutrition aspect and its level (low, high)
- `nutrient_levels_tags`: Daten analog dem vorherigen Parameter allerdings als Zeichenkette repräsentiert.
- `nutriments`: enthält eine Auflistung der verschiedenen Nährwerte repräsentiert als Object Properties.
- `nutriscore_data`: complex object with many properties that represent nutrition score data (e.g., "negative points")
- `nutriscore_grade`: Eingruppierung (Klassifikation) eines Produkts in eine von 5 Nährwertbereiche: A, B, C, D, E
- `nutrition_grades_tags`: Array with score tags
- `nova_group`: Gibt den Verarbeitungsgrad eines Produktes von natürlich bis hoch verarbeitet an
- `product_name`: Produktname; falls der Productname leer ist muss ggf.  `generic_product_name` abgerufen werden
- `product_name_de`: deutscher Produktname
- `quantity`: Mengeninformation
- `"selected_images -> "front" -> "display" -> "de"`: Foto der deutschen Produktverpackung
- `stores`: Names der / des Geschäfts welches das Produkt anbietet
- `url`: originäre Produktwebseite mit aufbereiteten Informationen




### Zusätzliche Abfrageoptionen

#### Abfrage aller in Deutscher Sprache hinterlegte Nährstoffe

Beispiel:  <https://de.openfoodfacts.org/cgi/nutrients.pl>


#### Abfrage von Produktbildern

...



Abfrage mittels Suchparameter
Grundsätzliches: 
a) `de.`-Präfix ist notwendig, um ausschließlich Produkte aus Deutschland zu erhalten
b) Accept-Header muss auf `application/json` gesetzt werden oder es muss der Query-Parameter `&json=true` an die URL angehängt werden.

Suche nach US-Frühstückszerealien:  
<https://us.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=breakfast_cereals&json=true>


Suche nach italienischem Essen mit hohem Nährwert (A):  
<https://it.openfoodfacts.org/cgi/search.pl?action=process&tagtype_1=nutrition_grades&tag_contains_1=contains&tag_1=A&json=true>



Zeige alle deutschen Lebensmittel mit einer Nährwertqualität von A an  
<https://de.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=nutrition_grades&tag_contains_0=contains&tag_0=A&json=true>


Mit einem Filter kann die Ergebnismenge reduziert werden
https://de.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=nutrition_grades&tag_contains_0=contains&tag_0=A&fields=product_name&json=true


Tipp:
Über die Suchmaske https://de.openfoodfacts.org/cgi/search.pl erhalten Sie einen Überblick über die verschiedenen Suchparamter und Abfragemöglichkeiten.

Auf der Ergebnisseite finden Sie folgenden Link

`Permanentlink zu diesen Suchergebnissen, kann über E-Mail und in sozialen Netzwerken geteilt werden`

Wenn Sie diesen Link kopieren, dann erhalten Sie den entsprechenden API-Aufruf, also bspw.

`https://de.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=nutrition_grades&tag_contains_0=contains&tag_0=A&tagtype_1=stores&tag_contains_1=contains&tag_1=Lidl&sort_by=unique_scans_n&page_size=20`

Wenn Sie hier den `page_size` Parameter entfernen und stattdessen `json=true` anfügen, dann erhalten Sie die Resultate im JSON-Format.

`https://de.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=nutrition_grades&tag_contains_0=contains&tag_0=A&tagtype_1=stores&tag_contains_1=contains&tag_1=Lidl&sort_by=unique_scans_n&json=true`



Abfrage: Zeige alle Lebensmittel mit einem hohen "Beta-Carotin"-Gehalt an:


## General Requests



### Base URL

https://de-de.openfoodfacts.org/api/v2/


Get Information about a product:
https://de-de.openfoodfacts.org/api/v2/product/5449000000996


### Output Fields

Allow to reduce the payload-size and retrieves only the specified fields

https://world.openpetfoodfacts.org/api/v0/product/20106836.json?fields=generic_name


Beispiele

https://de-de.openfoodfacts.org/api/v2/product/5449000000996?fields=product_name_de

https://de-de.openfoodfacts.org/api/v2/product/5449000000996?fields=product_name_de,ingredients_text_with_allergens_de

Coca-Cola Dose 0,33l
https://de-de.openfoodfacts.org/api/v2/product/5449000000996?fields=product_name_de,ingredients_text_with_allergens_de,nutriscore_grade,nutrient_levels,nutriscore_data

Grafschafter Roggen Vollkorn Knäckebrot:
https://de-de.openfoodfacts.org/api/v2/product/4056489189121?fields=product_name_de,ingredients_text_with_allergens_de,nutriscore_grade,nutrient_levels,nutriscore_data

Anzeige aller Produkte bei Lidl, die eine Nährwertklassifikation von 'A' haben:
https://de.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=nutrition_grades&tag_contains_0=contains&tag_0=A&tagtype_1=stores&tag_contains_1=contains&tag_1=Lidl&sort_by=unique_scans_n&json=true&fields=product_name_de,ingredients_text_with_allergens_de,nutriscore_grade,nutrient_levels,nutriscore_data





## QR- and Barcode-Scanner Tutorials

Anbei eine Auswahl von Tutorials die zeigen, wie Barcodescanner in Form von externen Bibliotheken in das eigene Android-Projekt eingebunden werden kann.

1. https://youtu.be/drH63NpSWyk
  - very detailed tutorial with lots of explanations
  - good to follow
  - based on Library
    - https://github.com/yuriy-budiyev/code-scanner

2. https://youtu.be/u2pgSu9RhYo
     - automates a lot of things and can easly by integrated
     - tutorial is in Java; uses intents
     - Library
       - https://github.com/journeyapps/zxing-android-embedded