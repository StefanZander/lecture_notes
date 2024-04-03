# State Management

## General

State is represented by values hold in variables (app data).

State (ie. data expressed as values) can be local (ie. for single widgets) or global (ie. data that need to be available to the entire app).

### ChangeNotifierProvider

ChangeNotifierProvider can be used to define a separate class that holds the data to represent the app's state.

Other widgets can assign a reference of the `context.watch<StateClass>()` method to a local variable in order to access state data.

Important to remember that the provider package needs to be added to the `pubspec.yml` manifest in order to import the library and make it available in the app's source code.
