# JSON – JavaScript Object Notation


!!! abstract 
    **Lernziele**

    - [x] Die Sicht-, Denk- und Arbeitsweise verschiedener Benutzer kennen lernen und sich in sie hinein versetzen
    - [x] Finden und Verstehen der beim Benutzer in der Praxis auftretenden Anwendungsfälle
    - [x] Unterscheidung von technischen Funktionen und benutzerorientierten Anwendungsszenarien

## Library

The Android platform includes the standard `json.org` library, which allows processing and creating JSON files.

!!! note
    __Hint:__ You can also use open source libraries such as `Gson`, available at <https://github.com/square/moshi> for JSON processing. This library is easier to use, faster and provide more flexibility.

## Storing Data as JSON

Writing JSON is very simple. Just create the `JSONObject` or `JSONArray` and use the `toString()` method.

``` java
public void writeJSON() {
    JSONObject object = new JSONObject();
    try {
        object.put("name", "Jack Hack");
        object.put("score", new Integer(200));
        object.put("current", new Double(152.32));
        object.put("nickname", "Hacker");
    } catch (JSONException e) {
        e.printStackTrace();
    }
    System.out.println(object);
}
```


## Quellen

* <http://www.vogella.com/tutorials/AndroidJSON/article.html>