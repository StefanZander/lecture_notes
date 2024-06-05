# Einführung in die Entwicklung von Multi-Plattform-Apps mit Flutter

!!! success "Key Points"
    - The main thing to learn is to combine widgets into a tree-like structure in order to design a complex and usable UI.
    - The most important tool in Flutter is the __refactor function__.
    - Flutter allows to maintain a single code basis for different platforms.
    - Flutter provides a comprehensive library of pre-designed widgets for building complex and responsive UIs.
    - Basic UI elements (widgets) can be combined into more complex custom widgets.
    - Flutter provides a hot-reload function that allows for real-time updates of the UI without reloading or restarting the app.
    - Flutter code compiles to ARM or x86 native machine code using Dart and ensures high performance.
    - Flutter supports both Material Design for Android and Cupertino for iOS, ensuring a native look and feel on both platforms.
    - Flutter has an excellent support for a wide variety of popular state-of-the-art IDEs like Visual Studio Code, Android Studio, and IntelliJ IDEA with a set of debugging and productivity tools.
    - Flutter has a very well-maintained official documentation with lot's of tutorials.
    - Two aspects make developing with Flutter difficult:
        - Deeply neested widget trees 
        - No simple copy-and-paste
  


!!! info "Recommended Learning Resources"
    - A good introductory article about the basic elements of Flutter (heise+-article): <https://lernen.h-da.de/mod/resource/view.php?id=916362>
    - Learn about how to develop cross-platform-apps using Flutter (heise+-article): <https://lernen.h-da.de/mod/resource/view.php?id=916363>
    - Learn how to install Flutter: <https://docs.flutter.dev/get-started/install>
    - (highly recommended) Do the "Write your first Flutter app" codelab: <https://docs.flutter.dev/get-started/codelab>
    - An overview of introductory material when learning Flutter: <https://docs.flutter.dev/get-started/learn-more>




## Some general Information

Create a new Flutter-project using the `flutter new` command in the console.

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

#### Class Instantiation

Dart uses a **shorthand notation** for the instantiation of classes.

Instead of `var obj = new Classname(...)` you can write in Dart `var obj = Classname()`.  
As a consequence, it is quite common in Flutter source code to read this notation.



### Data Store and State Management

- 2 Approaches: 
    - a) Centralized via a central class that holds the data / states for/from all widgets.
    - b) Decentralized in each widget.
- Better: Data that belong exclusively to a widget should be stored/held there and not in a central store. Some state is only relevant for a specific widget so it is better stored there.

Stateful widgets have a `State` that is stored in the widget itself.

Stateful widgets can change their state by themselves.

Stateful widgets are separated into an immutable and a mutable class (indicated by the leading `_` before the class name). Mutable state classes allow to alter a widget's state (i.e., their internal data).

State classes are private classes – indicated by the `_` underscore before the class name.

State is data that change throughout the lifecycle of an app.







### Widgets

Every widget defines a `build()` method 

- This method is automatically called every time the widget's circumstances change so that the widget is always up to date
- It always returns a widget – or more typically – a **nested tree of widgets**
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
