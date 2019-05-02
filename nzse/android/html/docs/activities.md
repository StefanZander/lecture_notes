# Activities and Intents

!!! abstract
    **What you will learn**

    - [x] You know the basic principles of Android Activies and Intents
    - [x] You are familiar with the application model of Android Applications
    - [x] 

!!! warning
    **Hinweis:** Die Fernbedienung muss mindestens die im Kapitel Vorbemerkung aufgezählten Funktionen beinhalten.

## Activities

An **Activity** represents a **single screen** in your app with which a user can perform a **single, focused task** such as taking a photo, sending an email, or viewing a map. An activity is usually presented to the user as a **full-screen window**.

An app usually consists of **multiple screens** that are **loosely bound** to each other. **Each screen is an activity**. 

Typically, one activity in an app is specified as the **"main" activity** (`MainActivity.java`), which is presented to the user when the app is launched. The main activity can then start other activities to perform different actions.

Each time a *new* activity starts, the *previous* activity is **stopped**, but the system **preserves the activity in a stack** (the "back stack"). 
When a new activity starts, that new activity is **pushed** onto the back stack and takes user focus. 
The back stack follows basic "last in, first out" stack logic. When the user is done with the current activity and presses the `Back button`, that activity is popped from the stack and destroyed, and the previous activity resumes.


## Intents

An activity is started or activated with an **intent**.  
An [Intent](https://developer.android.com/reference/android/content/Intent.html) is an **asynchronous message** that you can use in your activity to **request an action** from another activity, or from some other app component.

You use an intent to  

* **start one activity** from another activity, and 
* to **pass data** between activities.


An Intent can be *explicit* or *implicit*:

* An **explicit intent** is one in which you know the target of that intent. That is, you already know the fully qualified class name of that specific activity.
* An **implicit intent** is one in which you do *not* have the name of the target component, but you have a **general action** to perform.

In NZSE and the practical sessions, you create explicit intents. 



## What you have Learned

!!! abstract
    __After having finished this lession, you know...__

    - [ ] ...how to create Activities and Intents 
    - [ ] ...how the Application Model in Android works
    - [ ] ...how you can use Intents to call Activities and share data between them.