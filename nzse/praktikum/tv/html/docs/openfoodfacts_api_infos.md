# OpenFoodFacts

## General Requests


### Base URL

https://de-de.openfoodfacts.org/api/v2/


Get Information about a product:
https://de-de.openfoodfacts.org/api/v2/product/5449000000996


### Output Fields

Allow to reduce the payload-size and retrieves only the specified fields

https://world.openpetfoodfacts.org/api/v0/product/20106836.json?fields=generic_name

Examples

https://de-de.openfoodfacts.org/api/v2/product/5449000000996?fields=product_name_de

https://de-de.openfoodfacts.org/api/v2/product/5449000000996?fields=product_name_de,ingredients_text_with_allergens_de

Coca-Cola Dose 0,33l
https://de-de.openfoodfacts.org/api/v2/product/5449000000996?fields=product_name_de,ingredients_text_with_allergens_de,nutriscore_grade,nutrient_levels,nutriscore_data

Grafschafter Roggen Vollkorn Knäckebrot:
https://de-de.openfoodfacts.org/api/v2/product/4056489189121?fields=product_name_de,ingredients_text_with_allergens_de,nutriscore_grade,nutrient_levels,nutriscore_data


### Query Parameter

- "product_name_de"
- "quantity"
- 
- "ingredients_text_de"
- "ingredients_text_with_allergens_de"
- "nutrient_levels": object where each property represents one nutrition aspect and its level (low, high)
- "nutriscore_data": complex object with many properties that represent nutrition score data (e.g., "negative points")
- "nutriscore_grade"
- "nutrition_grades_tags": Array with score tags



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