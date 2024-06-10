# State Management


!!! success "Key Points"
    - State management describes the process of sharing state data between screens in an app.
    - Flutter is **declarative** and rebuilds parts of the UI from scratch instead of modifying it to reflect the current state of the app.
    - Flutter distinguishes between two types of states: local (=**ephemeral**) state and global (=**app**) state.
    - In order to manage epemeral state your widget needs to subclass `StatefulWidget`.
    - Flutter provides the `setState()` callback method to update a widget's state and causing the framework to redraw/rebuild the widget.
    - Application state is intended to be shared between user sessions such as user preferences, login info, or a shopping cart.
    - There are many alternatives for managing the app state. One recommendation is to use the approach that seems to be least ackward to you or the dev team. 
    - Sometimes it is necessary to transform the ephemeral state of a widget to the app level (e.g. the `_index` variable of a bottom navigation in order to retain the currently selected item across different sessions or change it from outside the widget). This is usually the case when the app grows.
    - The **provider package** provides a simple but in most cases sufficient solution for managing the app state. Use this package in your semester project.
    - The provider package requires three different elements to function properly:
        - The `ChangeNotifier` is a simple class included in the Flutter SDK and provides change notification to its listeners. If something is a ChangeNotifier, you can subscribe to its changes. Simple apps usually have one `ChangeNotifier`; complex apps with several models incorporate more `ChangeNotifier`s for its models. 
        - `ChangeNotifierProvider` is the widget that provides an instance of a `ChangeNotifier` to its descendants. It comes from the **provider package**.
        - A consumer that specifies the model (`<`, `>`) it wants to request data from.
    - `:::dart Provider.of<CartModel>(context, listen: false).removeAll();` is a less computationally expensive method when modifying the app state without the necessity of rebuilding the app when `notifyListeners` is called.


!!! warning "Important Information"
    - When the state of your app *changes* (for example, the user flips a switch in the settings screen), you change the state, and that triggers a redraw of the user interface. There is *no* imperative changing of the UI itself (like `widget.setText(...)`) --- you change the state, and the UI rebuilds from scratch.
    - The **provider package** provides a simple but in most cases sufficient solution for managing the app state. Use this package in your semester project.


!!! info "Recommended Learning Resources"
    - Read these nice and short introductions about declarative programming in order to learn more about Flutter's approach to developing UIs:
        - <https://docs.flutter.dev/get-started/flutter-for/declarative>
        - <https://docs.flutter.dev/data-and-backend/state-mgmt/declarative>
    - Learn the difference between local (*=ephemeral*) state and global (*=app*) state: 
        - <https://docs.flutter.dev/data-and-backend/state-mgmt/ephemeral-vs-app> 
    - See how to implement a simple app state management approach in an catalogue and cart application:
        - <https://docs.flutter.dev/data-and-backend/state-mgmt/simple>
    - Learn more about the provider package:
        - <https://pub.dev/packages/provider>
    - If you want to implement a different, more sophisticated form of global app state management, consult the list of state management approaches:
        - <https://docs.flutter.dev/data-and-backend/state-mgmt/options>


## General

State is represented by concrete values stored in variables (app data).

State (ie. data expressed as values) can be local (ie. for single widgets) or global (ie. data that need to be available to the entire app).


## Statemanagement in Flutter

Flutter distinguished between two different types of states:

- **Ephemeral state** – i.e. state pertaining only to a single widget (e.g. the currently selected navigation bar item)
- **App-state** – i.e. data that needs to be available to the entire app and multiple widgets (e.g. the items added to a shopping cart)


## (A Brief) Overview of all the state management approaches available to flutter

Flutter supports a wide variety of different approaches and libraries for state management. 

For this lecture, we use a simple and straightforwart approach, known from the flutter tutorial.

An exhaustive list of available approaches is available at the official flutter documentation (TODO: Add Link).


## Statemanagement in Widgets

The following examples explains how state management in widgets work. 

As known from the introductory sessions, everything in flutter is a widget – even an app is a widget.

There are two types of widgets: stateless and stateful widgets

1. Stateless widgets do not hold explicit state information; they are merely used for displaying data
2. Statefull widgets have a dedicated state class that holds all state information. The normal widget class creates an instance of the state class in order to manage all state information.





## Statemanagement on the App-Level

Statemanagement for the entire app works similar to the observer pattern.

Interested widgets can hold a reference of the global state class

Global state is usually implemented in an separate class.


### ChangeNotifierProvider

ChangeNotifierProvider can be used to define a separate class that holds the data to represent the app's state.

TODO: rewrite – Other widgets can assign a reference of the `context.watch<StateClass>()` method to a local variable in order to access state data.

Important to remember that the provider package needs to be added to the `pubspec.yml` manifest in order to import the library and make it available in the app's source code.
