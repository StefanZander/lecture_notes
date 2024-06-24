# Widgets


!!! success "Key Points"
    - The Flutter framework for building UIs was inspired by React and takes a similar approach.
    - Widgets are the central elements for building the UI.
    - Widgets describe what their view should look like given their current configuration and state.
    - Widgets are rebuilt when their state change
    - Flutter incorporates a set of basic widgets
        - `Text` --- for creating and styling textual content 
        - `Row`, `Column` --- determine the horizontal and vertical layout resp. positioning of nested widgets. It is based on the Flexbox layout module 
        - `Stack` --- used for placing contents on top of each other
        - `Container` --- basic rectangular element that can be decorated using the `BoxDecoration` class. It can also have padding, marging, and constraints applied to its size
        - `Scaffold` --- provides many pre-implemented visual features for a matieral themed app such as an appbar, a default banner, customizable background color, a drawer, snack bar etc.
    - When you add images to your project, you need to update the `pubspec.yaml` file to access them.
    - Widgets have a `build()` method the return value of which determines its visual representation. The widget is drawn when this method is executed.



!!! info "Recommended Learning Resources"
    - Buildung user interfaces with Flutter (very good introduction with many examples and related topics): <https://docs.flutter.dev/ui>
    - Flutter's widget catalogue with links to detailed information about each widget: <https://docs.flutter.dev/ui/widgets>
    - Learn how to add assets and images to a flutter app: <https://docs.flutter.dev/ui/assets/assets-and-images>



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
