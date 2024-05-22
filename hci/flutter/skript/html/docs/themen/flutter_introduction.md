# Einführung in die Entwicklung von Multi-Plattform-Apps mit Flutter

Erzeugung eines neuen Flutter-Projekts mit `flutter new`

Widget Inspector hilft enorm bei der Entwicklung und Validierung von Flutter-Apps. Dieser stellt die in/auf einem Screen enthaltenen Widgets in Form eines Widget-Trees dar.


### Configurating your Flutter App

The `pubspec.yaml` file specifies basic information about your app, such as its current version, its dependencies, and the assets with which it will ship.

`analysis_options.yaml` determines how strict Flutter should be when analyzing your code.
This option can be modified continuously during the project. In fact, as you get closer to publishing an actual production app, you will almost certainly want to make the analyzer stricter than this.


### Your Flutter-App

`lib/main.dart` is the main file of your App. It contains definitions of the widgets as well as the application logic of your App.



### General Aspects

Configuration of behaviour for widgets is done via callbacks. The callback approach is central to defining logic for widgets in Flutter.

An app consists of multiple screens, which are by themselves widgets, ie., they inherit from `StatelessWidget` or `StatefullWidget`.

An entire screen is a widget too.

The main thing to learn is to combine widgets into a tree-like structure in order to design a complex and usable UI.

The most important tool in Flutter is the __refactor function__ – called by pressing `CMD`+`'.'`.

The `https://pub.dev/packages/provider` provider library provides some convenience methods to expose and work with state data.

### Dart

Dart uses a shorthand notation for the instantiation of classes.

Instead of `var obj = new Classname(...)` you can write in Dart `var obj = Classname()`. So it is quite common in Flutter source code to read this notation form.



### Data Store and State Management

- 2 Approaches: 
  - a) Centralized via a central class that holds the data / states for/from all widgets.
  - b) Decentralized in each widget.
- Better: Data that belong exclusively to a widget should be stored/held there and not in a central store. Some state is only relevant for a specific widget so it is better stored there.

`StatefulWidget`s have a `State` that is stored in the widget itself.

Stateful widgets can change their state by themselves.

Stateful widgets are separated into an immutable and a mutable class (indicated be the leading `_` before the class name). Mutable state classes allow to alter a widget's state (ie data).

State classes are private classes – indicated by the `_` underscore before the class name.

State is data that change throughout the lifecycle of an app.

Define: Mutable and Immutable





### Widgets

Every widget defines a `build()` method. 
- This method is automatically called every time the widget's circumstances change so that the widget is always up to date.
- It always returns a widget or more typically a nested tree of widgets
- Complext visual UI elements should be encapsulated in and treated as a separate widget
- Having separate widgets for separate logical parts of your UI is an important way of managing complexity in Flutter.
- Many Flutter widgets contain standard implicit animations. Hence, they will smoothly interpolate between values so that the UI doesn't just "jump" between states. 


`Scaffold` is a helpful widget found in the vast majority of Flutter apps
- it allows for defining a app bar, a navigation bar, and a floating action button (commonly designated as FAB).

The `watch()` method allows the class to keep track of the app's current state


#### Layout

`Column` is one of the most basic layout widgets in Flutter. It takes any number of children and puts them in a column from top to bottom. By default, the column visually places its children at the top.


#### Navigation

A combination of `SafeArea` widget and `NavigationRail` allows for a navigation between different screens.
