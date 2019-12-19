# Handling UI-Events


!!! abstract 
    **Objectives**

    - [x] You are familiar with the concepts of handlers
    - [x] You can implement a handler to receive messages from background threads

## Handlers for UI Interactions

Since Android employs an event-driven processing model, it uses the concept of **handlers** to react to user input and user interactions.

Handlers can be defined on three different ways

1. __Design Pane__  
    OnClick handler can be specified in Android Studio in the `onClick` field in the Design tab's Attributes pane; there you can enter the name of the method that is to be executed when an onclick event is captured on the widget.
2. __XML Editor__  
    You can also specify the name of the handler method in the XML editor by adding the `android:onClick` property to the widget.
3. __Activity Class__  
    You can define the handler logic in the programming code using the  
    `:::js {component}.setOn...Listener(new View.On...) { ... }`  
    methods and implementing the respective interfaces as anonymous inner classes.

A click handler is a method that is invoked when the user clicks or taps on a clickable UI element. 


## Handlers as Message Queues

For more information see <https://stackoverflow.com/questions/13840007/what-exactly-does-the-post-method-do>

Background threads and AsyncTasks run in parallel to the UI Thread and are invoked asynchronosly. 
It is **forbidden** for such threads to access or modify components created on the UI Thread. 
Therefore, they need to communicate their information in an asynchronous way using a **message queue**, which needs to be passed from the invoking activity as a reference during their instantiation.
The message queue allows background threads to publish messages in the form of **message objects**, consisting of key and data values. 
The invoking activity needs to define a **message handler** for the message queue that will be invoked by the system whenever a new message object is published by a background thread to the message queue.
Based on the **message key**, the message handler can then decide about how to process the receiving message.


![](./figures/handler.png)_A handler receives messages from background threads and updates views on the UI thread (Source: [stackoverflow.com](https://stackoverflow.com/questions/13840007/what-exactly-does-the-post-method-do))_ 




<!-- ## Ergebnisse

Die folgenden Ergebnisse müssen für eine erfolgreiche Testierung der Praktikumseinheit vorliegen:

!!! abstract
    __Ergebnisse:__

    - [ ] Fertiges Layout
    - [ ] Implementierung der Navigation
    - [ ] Einbinden der `HttpRequest.java` Klasse -->