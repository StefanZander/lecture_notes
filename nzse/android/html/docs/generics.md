# Generics (=Typisierte Collections)


!!! warning
    **Generics**:  
    Generics ist ein Java-Sprachmittel das es erlaubt, Klassen und Methoden mit Typparametern zu parametrisieren um trotz generischer Programmierung Typsicherheit zu gewährleisten. Generics werden nur während der Kompilierung ausgewertet.


## Eigenschaften
Eine wichtige Eigenschaft von Java ist, dass der Compiler die Typen prüft und so weiß, welche Eigenschaften vorhanden sind und welche nicht. Hier unterscheidet sich Java von dynamischen Programmiersprachen wie Python oder PHP, die erst spät eine Prüfung zur Laufzeit vornehmen.

### Beispiele

Zugriff auf ein Listenelement **ohne Generics**:
``` java
List meineListe = new ArrayList();
meineListe.add( "Hallo" );
String s = (String) meineListe.get( 0 );
```

Wie im obigen Beispiel zu sehen ist, ist ein Typecasting notwendig, um das entspr. Element aus der Collection (`:::js ArrayList`) auszulesen.

Weiters können Fehler durch inkompatible Typen erst zur Laufzeit erkannt werden; mit Generics bereits während der Kompilierung (=Umwandlung von Java-Code in Bytecode).


Umsetzung des obigen Beispiels **mit Generics**:
```java
List<String> meineListe = new ArrayList<String>();
meineListe.add( "Hallo" );
String s = meineListe.get( 0 );
```

Die Variante mit Generics benötigt beim Lesen keinen Typecast.  


Eine **Mischung** aus Code mit und ohne Generics sollte nach Möglichkeit vermieden werden, da dies verwirrend sein kann und zu Fehlern führen kann.






## Collections

Die wichtigsten Collection-Klassen in der Übersicht

- `ArrayList`
- `HashMap`
- `HashSet` 



### ArrayList
    
```java
public class ArrayList
extends AbstractList
implements List, Cloneable, Serializable
```

ArrayList realisiert eine **lineare Liste** als **dynamisches Array**.  
Wahlfreier Zugriff ist schneller als bei LinkedList, Einfügen und Löschen dagegen langsamer.  
ArrayList ist besonders bei überwiegend lesendem Zugriff oder bei kleinen Listen vorzuziehen.    

**Wichtige Methoden**
```java
size()
add()
remove()
contains()
Iterator iterator()
get()
set()
```

### HashMap

```java
public class HashMap
extends AbstractMap
implements Map, Cloneable, Serializable
```

Wie Hashtable bietet HashMap einen **assoziativen Speicher**, der Paare von Schlüsseln und dazugehörigen Werten verwaltet. Über den **Schlüssel** ist ein Zugriff auf den Wert möglich. Der Schlüssel kann als Name des Wertes interpretiert werden.

Anders als Hashtable erlaubt HashMap das Einfügen von null-Werten und ist nicht synchronisiert.

HashMap bietet *nicht* direkt einen Iterator. Dieser kann jedoch leicht über `keySet()`, `values()` oder `entrySet()` gebildet werden (z.B. `:::java Iterator = HashMap.entrySet().iterator()`).

**Wichtige Methoden**
```java
size()
get()
put()
containsKey()
containsValue()
Set keySet()
Collection values()
Set entrySet()
```

### HashSet

```java
public class HashSet
extends AbstractSet
implements Set, Cloneable, Serializable
```

HashSet realisiert eine **doublettenlose ungeordnete Menge** von Elementen, auf die mit **Mengenoperationen** zugegriffen werden kann.
Die Iterationsreihenfolge ist ungeordnet und muss nicht reproduzierbar sein.

**Wichtige Methoden**
```java
size()
add()
remove()
contains()
Iterator iterator()
```


**Disclaimer**
Eine Vielzahl der hier wiedergegebenen Informationen stammt aus folgenden Quellen:

- https://www.torsten-horn.de/techdocs/java-generics.htm
- https://openbook.rheinwerk-verlag.de/javainsel9/javainsel_07_001.htm
- 