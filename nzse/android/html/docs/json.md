# JSON – JavaScript Object Notation


!!! abstract 
    **Lernziele**

    - [x] Die Sicht-, Denk- und Arbeitsweise verschiedener Benutzer kennen lernen und sich in sie hinein versetzen
    - [x] Finden und Verstehen der beim Benutzer in der Praxis auftretenden Anwendungsfälle
    - [x] Unterscheidung von technischen Funktionen und benutzerorientierten Anwendungsszenarien

## Android JSON Library

The Android platform includes the standard `json.org` library, which allows processing and creating JSON files.

!!! note
    __Hint:__ You can also use open source libraries such as `Gson`, available at <https://github.com/google/gson> or <https://github.com/square/moshi> for JSON processing. This library is easier to use, faster and provide more flexibility.

### Storing Data as JSON

Writing JSON is very simple. Just create the `JSONObject` or `JSONArray` and use the `.put()` method.

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


### Reading Data from the `JSONObject`

Converting a JSON string into a JSON object is also very simple. The following code demonstrates how to transform a JSON string into a `JSONObject` from which further data can be extracted.

!!! note
    __Note:__ The structure of the serialized JSON data need to be known beforehand, i.e., the logic needed to map the extracted JSON elements into Java object must be implemented by hand in the source code.

```java
import org.json.JSONArray;
import org.json.JSONObject;

String jsonString = readJsonObjectFromSomeWhere(); 
try {
    JSONObject json = new JSONObject(jsonString);
    } catch (Exception e) {
        e.printStackTrace();
    }
```

!!! warning
    __Warning:___ The code example cannot run in the main thread in Android (why?). Place such code in a Thread or in an `AsyncTask`.




## GSON

Gson is a Java library that can be used to convert Java Objects into their JSON representation. It can also be used to convert a JSON string to an equivalent Java object.

Gson can work with arbitrary Java objects including pre-existing objects that you do not have source code of.

### Using GSON

The primary class to use is Gson which you can just create by calling new Gson(). There is also a class GsonBuilder available that can be used to create a Gson instance with various settings like version control and so on.

The Gson instance does not maintain any state while invoking Json operations. So, you are free to reuse the same object for multiple Json serialization and deserialization operations.

### Using Gson with Gradle/Android

``` gradle
dependencies {
    compile 'com.google.code.gson:gson:2.8.5'
}
```

### Examples

#### Converting Simple Datatypes

``` java
// Serialization
Gson gson = new Gson();
gson.toJson(1);            // ==> 1
gson.toJson("abcd");       // ==> "abcd"
gson.toJson(new Long(10)); // ==> 10
int[] values = { 1 };
gson.toJson(values);       // ==> [1]

// Deserialization
int one = gson.fromJson("1", int.class);
Integer one = gson.fromJson("1", Integer.class);
Long one = gson.fromJson("1", Long.class);
Boolean false = gson.fromJson("false", Boolean.class);
String str = gson.fromJson("\"abc\"", String.class);
String[] anotherStr = gson.fromJson("[\"abc\"]", String[].class);
```

#### Converting Java Objects to JSON

``` java
class BagOfPrimitives {
  private int value1 = 1;
  private String value2 = "abc";
  private transient int value3 = 3;
  BagOfPrimitives() {
    // no-args constructor
  }
}

// Serialization
BagOfPrimitives obj = new BagOfPrimitives();
Gson gson = new Gson();
String json = gson.toJson(obj);  

// ==> json is {"value1":1,"value2":"abc"}
```

!!! note
    **Note** It is not possible to serialize objects with circular references since that will result in infinite recursion.

```java
// Deserialization
BagOfPrimitives obj2 = gson.fromJson(json, BagOfPrimitives.class);
// ==> obj2 is just like obj
```

#### Important Remarks

* It is perfectly fine (and recommended) to use private fields.
* There is no need to use any annotations to indicate a field is to be included for serialization and deserialization. All fields in the current class (and from all super classes) are included by default.
* If a field is marked `transient`, (by default) it is ignored and not included in the JSON serialization or deserialization.
* This implementation handles nulls correctly.
* While serializing, a `null` field is omitted from the output.
* While deserializing, a missing entry in JSON results in setting the corresponding field in the object to its default value: 
    * `null` --> for object types, 
    * `zero` --> for numeric types, and 
    * `false` --> for booleans.
* If a field is `synthetic`, it is ignored and not included in JSON serialization or deserialization.
* Fields corresponding to the outer classes in inner classes, anonymous classes, and local classes are ignored and not included in serialization or deserialization.

TODO: Add more information about serializing and deserializing objects and collections (see gson user guide)


## Quellen

* <http://www.vogella.com/tutorials/AndroidJSON/article.html>
* <http://www.vogella.com/tutorials/JavaLibrary-Gson/article.html>
* <https://github.com/google/gson/blob/master/UserGuide.md>