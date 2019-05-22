# Handling UI-Events


!!! abstract 
    **Objectives**

    - [x] Sie können eine Android App mit einer Layoutvariante implementieren
    - [x] Sie verstehen das Zusammenspiel verschiedener Activities über Intents
    - [x] Sie verstehen das Konzept der Ereignisorientierung
    - [x] Sie haben einen ersten Eindruck von XML

## Handler

Since Android employs an event-driven processing model, it uses the concept of **Handlers** to react to user input or user interaction.

Handlers can be defined on three different ways

1. OnClick handler can be specified in Android Studio in the onClick field in the Design tab's Attributes pane; there you can enter the name of the method that is to be executed when an onclick event is captured on the widget.
2. You can also specify the name of the handler method in the XML editor by adding the `android:onClick` property to the widget.
3. You can define the handler logic in the programming code using the Set...Handler methods and implementing the respective interfaces.

A click handler is a method that is invoked when the user clicks or taps on a clickable UI element. 



## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Testierung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Fertiges Layout
    - [ ] Implementierung der Navigation
    - [ ] Einbinden der `HttpRequest.java` Klasse