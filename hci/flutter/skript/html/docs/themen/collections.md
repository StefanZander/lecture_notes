# Collections


!!! success "Key Points"
    - A collection is a data structure that allows for storing individual data objects (typically defined by individual classes) and that provides access and modification operations.
    - Dart has built-in support for **list**, **set**, and **map** collections. 
        - Lists are array-like data structures and provide an index for accessing its elements
        - Sets behave like mathematical sets and are defined by curly brackets (`{}`).
        - Maps are a key-value-based data structure where each item can be accessed by a unique key.
    - Lists use zero-based indexing, where `0` is the index of the first value and `list.length - 1` is the index of the last value.
    - A typed list is the common way in Dart/Flutter for storing individual data objects (e.g. shopping cart items) in form of a collection.
    - The syntactical structure is very easy: `:::dart List<Type>`
    - Dart tries to infer the type of the items stored in lists if no type is given.  This proces is called [type inference](https://dart.dev/language/type-system#type-inference).
    - Store the class definitions for the individual objects in a separate `model` folder in the `lib` directory of your flutter project.
    - Use the [dart:collection](https://api.flutter.dev/flutter/dart-collection/dart-collection-library.html) library for more sophisticated implementations of different collection types.


!!! info "Recommended Learning Resources"
    - Learn about the different type of collections provided per default by Dart/Flutter: <https://dart.dev/language/collections>
    - Work through the following article to learn more about how to combine individual data classes with widgets: <https://docs.flutter.dev/cookbook/lists/mixed-list>
    - The following page contains a list of collections provided by the `dart:collection` library. This list is for those groups who require more sophisticated and feature rich collections compared to the standard dart listtype: <https://api.flutter.dev/flutter/dart-collection/dart-collection-library.html>   




!!! tip "How to create a list that stores different types of items"
    - Use an abstract class for defining the overall structure of the widget (e.g. a list item)
    - The abstract class defines the methods that need to be implemented by the concrete widgets to be displayed in a list (e.g. title and subtitle of a list item)
    - For each different list item type, create an individual class that implements the abstract list item class
    - Store the different list items (types) in a `List<ListItem>` collection
    - `:::dart ListView.builder()` constructor converts each list item (e.g. `ListItem`) into a widget


    