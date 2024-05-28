# Widgets

## Stateful and stateless widgets

A widget is either **stateful** or **stateless**.  
If a widget can change --- e.g. when a user interacts with it, for example --- it's stateful.

A **stateless widget** never changes. Icon, IconButton, and Text are examples of stateless widgets. Stateless widgets subclass `StatelessWidget`.

A **stateful widget** is *dynamic*: for example, it can change its appearance in response to events triggered by user interactions or when it receives data. `Checkbox`, `Radio`, `Slider`, `InkWell`, `Form`, and `TextField` are examples of stateful widgets. Stateful widgets subclass `StatefulWidget`.

A widget's state is stored in a **State object**, separating the *widget's state* from its *appearance*. The state consists of **values** that can change, like a slider's current value or whether a checkbox is checked. When the widget's state changes, the state object calls `setState()`, telling the framework to redraw the widget.

### Creating a stateful widget

!!! abstract "Key aspects"
    - A stateful widget is implemented by two classes: a subclass of `StatefulWidget` and a subclass of `State`.
    - The state class contains the widget's mutable state and the widget's `build()` method.
    - When the widget's state changes, the state object calls `setState()`, telling the framework to redraw the widget.

The implementation of a custom stateful widget requires the creation of two classes:

1. A subclass of `StatefulWidget` that defines the widget.
2. A subclass of `State` that contains the state for that widget and defines the widget's `build()` method.



!!! exercise "Exercise"
    1. Create a slider with a textfield next to it that changes its value based on the slider's position.
    2. Modify the first app by introducing two new text input fields that allows for setting the lower and upper limits of the slider.  
    When the lower or upper limit changes, the sliders position should be recalculated and redrawn. If the lower value exceeds the current sliders position or the higher limit is lower than the current number then an error message should be displayed on the screen in form of a toast or snackbar.


https://docs.flutter.dev/ui/interactivity
