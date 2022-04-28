# OpenFoodFacts

Die folgende Seite enthält einige Informationen, die Ihnen das Arbeiten mit der openfoodfacts-API erleichtern und vereinfachen sollen. Bitte beachten Sie, dass diese Seite bzw. die darin enthaltenen Informationen volatil sind und sich ändern können.
Ergänzungen, Erweiterungen, etc. sind herzlich willkommen.


## Allgemeine Informationen

Dokumentation
https://openfoodfacts.github.io/api-documentation/

Auf die API kann ohne Authentifizierungsinformationen zugegriffen werden. Eine Registrierung oder ein OAuth 2.0-Token ist nicht notwendig.

Basis-URL für die Abfrage deutscher Produkte
https://de-de.openfoodfacts.org/api/v2/

Es gibt eine sehr hilfreiche Visual Studio Code Extension mit Namen "Thunder Client", mittels der sich auf einfache Art und Weise Rest-API-Aufrufe durchführen und analysieren lassen. 

Ich empfehle die Verwendung eines solchen Tools bzw. einer derartigen Extension für die Untersuchung der openfoodfacts-API.



### Abfragemöglichkeiten

a) Abfrage auf Basis des Barcodes
  https://de-de.openfoodfacts.org/api/v2/product/5449000000996


Abfrage von Produktbildern
...

Abfrage aller in deutsch hinterlegter Nährstoffe
https://de.openfoodfacts.org/cgi/nutrients.pl

Abfrage mittels Suchparameter
Grundsätzliches: 
a) de.-Präfix ist notwendig uma usschließlich deutsche Produkte zu erhalten
b) Accept-Header muss auf application/json gesetzt werden

Suche nach US-Frühstückszerealien
https://us.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=categories&tag_contains_0=contains&tag_0=breakfast_cereals&json=true

action	process	
tagtype_0	categories	
tag_contains_0	contains	
tag_0	breakfast_cereals	
json	true


Suche nach italienischem Essen mit einem hohen Nährwert (A)
https://it.openfoodfacts.org/cgi/search.pl?action=process&tagtype_1=nutrition_grades&tag_contains_1=contains&tag_1=A&json=true

action	process	
tagtype_1	nutrition_grades	
tag_contains_1	contains	
tag_1	A	
json	true


Zeige alle deutschen Lebensmittel mit einer Nährwertqualität von A an
https://de.openfoodfacts.org/cgi/search.pl?action=process&tagtype_0=nutrition_grades&tag_contains_0=contains&tag_0=A&json=true 

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


### Query Parameter


- "image_front_url": Produktbild
- "ingredients_text_de"
- "ingredients_text_with_allergens_de"
- "nutrient_levels": object where each property represents one nutrition aspect and its level (low, high)
- "nutrient_levels_tags": Daten analog dem vorherigen Parameter allerdings als Zeichenkette repräsentiert.
- "nutriments": enthält eine Auflistung der verschiedenen Nährwerte repräsentiert als Object Properties.
- "nutriscore_data": complex object with many properties that represent nutrition score data (e.g., "negative points")
- "nutriscore_grade"
- "nutrition_grades_tags": Array with score tags
- "nova_group": Gibt den Verarbeitungsgrad an
- "product_name": Produktname
- "product_name_de": deutscher Produktname
- "quantity": Mengeninformation
- "selected_images" -> "front" -> "display" -> "de": Foto der deutschen Produktverpackung
- "stores": Names der / des Geschäfts welches das Produkt anbietet
- "url": originäre Produktwebseite mit aufbereiteten Informationen



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