# Interaction and Behaviour


!!! success "Key Points"
    - The capability of UI elements to react to user input is called **interaction** or **interactivity**.
    - The way a widget reacts either to user intput or an internal state change is called **behaviour**.
    - A widget's behaviour is implemented in the form of **logical control statements**.
    - A widget reacts to user input by implementing **handlers** that capture the **events** (issued by the user or externally – e.g. when a remote operation finishes) for which they were defined.
    - A `TextEditingController` allows to read content from a text field.
    - Implementing interactivity requires stateful widgets.
    - A stateful widget is implemented by two classes: a subclass of `StatefulWidget` and a subclass of `State`.
    - A widget's state is stored in a `State` object, separating the widget's state from its appearance.
    - The state consists of values that can change, like a slider's current value or whether a checkbox is checked. 
    - When the widget's state changes, the state object calls `setState()`, telling the framework to redraw the widget.
    - The state class contains the widget's mutable state and the widget's `build()` method.


!!! info "Where do you find relevant information"
    - Interactivity
        - A very good introduction to interactivity in an app: <https://docs.flutter.dev/ui/interactivity>
    - Gestures
        - An overview about basic gestures with follow-up topics: <https://docs.flutter.dev/ui/interactivity/gestures>  
        - How to handle taps: <https://docs.flutter.dev/cookbook/gestures/handling-taps>
        - Add an animation effect when touching: <https://docs.flutter.dev/cookbook/gestures/ripples> 
        - Handling swipe gestures: <https://docs.flutter.dev/cookbook/gestures/dismissible>
    - Text fields
        - Handle changes to a text field: <https://docs.flutter.dev/cookbook/forms/text-field-changes>
        - Retrieve the value of a text field: <https://docs.flutter.dev/cookbook/forms/retrieve-input>
    - Other
        - Display a snackbar: <https://docs.flutter.dev/cookbook/design/snackbars>
  




<!-- 
## How to read text from a TextField

In order to read the content of a textfield, i.e., the text the user has entered and use it for creating a new list item, a `TextEditingController` is needed.

The `TextEditingController` class allows to read text from a TextField and also provides other widgets to control the behaviour of the textfield the controller is assigned to (e.g. to clear the inputs after an action is performed or add spaces to an entered IBAN).
 -->





!!! task "Excercises for deeping the knowledge"
    Create a single-page Flutter app that randomly changes the background color of the Scaffold every time the user tabs on a centrally placed button.





!!! bug "Bugfixing Information"
      - If you receive "Invalid value constant value "for TextEditingController in Flutter: <https://stackoverflow.com/questions/70081141/invalid-value-constant-value-for-texteditingcontroller-in-flutter>
