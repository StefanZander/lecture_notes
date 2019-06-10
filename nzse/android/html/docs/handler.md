# Handling UI-Events


!!! abstract 
    **Objectives**

    - [x] You are familiar with the concepts of handlers
    - [x] You know why no long-term operations should be executed from the UI thread
    - [x] You know how to update UI elements on the UI thread from an bachkround thread
    - [x] You can implement a handler to receive messages messages from background threads

## Handlers for UI Interactions

Since Android employs an event-driven processing model, it uses the concept of **handlers** to react to user input or user interaction.

Handlers can be defined on three different ways

1. OnClick handler can be specified in Android Studio in the onClick field in the Design tab's Attributes pane; there you can enter the name of the method that is to be executed when an onclick event is captured on the widget.
2. You can also specify the name of the handler method in the XML editor by adding the `android:onClick` property to the widget.
3. You can define the handler logic in the programming code using the Set...Handler methods and implementing the respective interfaces.

A click handler is a method that is invoked when the user clicks or taps on a clickable UI element. 


## Handlers as Message Queues

Include information from <https://stackoverflow.com/questions/13840007/what-exactly-does-the-post-method-do>

![](./figures/handler.png)_A handler receives messages from background threads and updates views on the UI thread_ 




<!-- ## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Testierung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Fertiges Layout
    - [ ] Implementierung der Navigation
    - [ ] Einbinden der `HttpRequest.java` Klasse -->