# Grundlagen der Sprache "Dart"

!!! success "Fahrplan für die Einheit: Das sollten Sie aus dieser Einheit mitnehmen"
    - Variablen unterschiedlichen Typs sicher erstellen
    - Grundlagen der Kontrollflusssteuerung
    - Definition von Funktionen
    - Importieren von Bibliotheken
    - Erstellung von Klassen und Grundlagen der Vererbung
    - Umgang mit Mixins, Interfaces und abstrakten Klassen
    - Asynchronität 
    - Exceptions
    - ... 

!!! note "Warum ist dieses Kapiel wichtig...?"
    - Dart ist die Programmiersprache für die Erstellung von Flutter-Apps. 
    Ohne Dart können sie keine Flutter-Apps erstellen.


!!! info "Diese Quellen sollten Sie sich ansehen"
    - Überblick über die Sprache Dart: <https://dart.dev/overview>
    - Eine Übersicht aller wesentlicher Sprechelemente die für die Entwicklung mit FLutter benötigt werden: <https://dart.dev/language>
    - Eine Übersicht der wesentlichen Sprachkonzepte in Dart: <https://dart.dev/language#important-concepts>


<!-- !!! note "Was lernen Sie in dieser Einheit..."
    - ....
  
!!! note "Voraussetzung für diese Einheit (das sollten sie kennen)"
    - ...
   -->


    

<!--     
### Constructors

If you come from a language like C# or Java, you might expect to see `new Map()` instead of just `Map()`. In Dart, the `new` keyword is _optional_. For details, see [Using constructors](https://dart.dev/language/classes#using-constructors).
    
    
### Collections

Dart provides three different types of collections

- Lists
- Sets
- Maps

Read more about collections here <https://dart.dev/language/collections> 

### const versus final

Very good explanation: <https://stackoverflow.com/questions/50431055/what-is-the-difference-between-the-const-and-final-keywords-in-dart>

**Const**:
If the value you have is computed at runtime (new DateTime.now(), for example), you can not use a const for it. However, if the value is known at compile time (const a = 1;), then you should use const over final. There are 2 other large differences between const and final. Firstly, if you're using const inside a class, you have to declare it as static const rather than just const. Secondly, if you have a const collection, everything inside of that is in const. If you have a final collection, everything inside of that is not final.

**Final**:
final should be used over const if you don't know the value at compile time, and it will be calculated/grabbed at runtime. If you want an HTTP response that can't be changed, if you want to get something from a database, or if you want to read from a local file, use final. Anything that isn't known at compile time should be final over const.


    
Quellen:
- https://dart.dev/language
  - Stellt alle wesentlichen Sprechkonzepte und -elemente vor, die für die Entwicklung mit FLutter benötigt werden
- Eine Übersicht der wesentlichen Sprachkonzepte
  - https://dart.dev/language#important-concepts -->
