# State Management

## General

State is represented by values hold in variables (app data).

State (ie. data expressed as values) can be local (ie. for single widgets) or global (ie. data that need to be available to the entire app).


## Statemanagement in Flutter

Flutter distinguished between two different types of states:

a) Ephemeral state – i.e. state pertaining only to a single widget (e.g. the currently selected navigation bar item)

b) App-state – i.e. data that needs to be available to the entire app and multiple widgets (e.g. the items added to a shopping cart)


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





## Statemanagement in the App

Statemanagement for the entire app works similar to the observer pattern

Interested widgets can hold a reference of the global state class

Global state is usually implemented in an separate class


### ChangeNotifierProvider

ChangeNotifierProvider can be used to define a separate class that holds the data to represent the app's state.

TODO: rewrite – Other widgets can assign a reference of the `context.watch<StateClass>()` method to a local variable in order to access state data.

Important to remember that the provider package needs to be added to the `pubspec.yml` manifest in order to import the library and make it available in the app's source code.
