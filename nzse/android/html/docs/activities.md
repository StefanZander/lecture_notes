# Activities and Intents

!!! abstract
    **What you will learn**

    - [x] You know the basic principles of Android Activies and Intents
    - [x] You are familiar with the application model of Android Applications
    - [x] You know how to add new Activities to an app and update the `AndroidManifest.xml`


## Activities

An **Activity** represents a **single screen** in your app with which a user can perform a **single, focused task** such as taking a photo, sending an email, or viewing a map. An activity is usually presented to the user as a **full-screen window**.

An app usually consists of **multiple screens** that are **loosely bound** to each other. **Each screen is an activity**. 

### Main Acitivity
Typically, one activity in an app is specified as the **"main" activity** (`MainActivity.java`), which is presented to the user when the app is launched. 
The main activity can then start other activities to perform different actions.

### Runtime Logic
Each time a *new* activity starts, the *previous* activity is **stopped**, but the system **preserves the activity in a stack** (the "back stack"). 
When a new activity starts, that new activity is **pushed** onto the back stack and takes user focus. 
The back stack follows basic "last in, first out" stack logic. When the user is done with the current activity and presses the `Back button`, that activity is popped from the stack and destroyed, and the previous activity resumes.

### Adding new Activities to an App
Each new activity you add to your project has its **own layout and Java files**, separate from those of the main activity.  
They also have their own `<activity>` elements in the `AndroidManifest.xml` file.  
As with the main activity, new activity implementations that you create in Android Studio also extend from the `AppCompatActivity` class.

Each activity in your app is only *loosely connected* with other activities. However, you can define an activity as a **parent of another activity** in the `AndroidManifest.xml` file. 
This **parent-child relationship** enables Android to add **navigation hints** such as left-facing arrows in the title bar for each activity.

!!! example
    **Example:** Register a second activity in the `AndroidManifest.xml`

    ```xml
    <activity android:name=".SecondActivity"
        android:label = "Second Activity"
        android:parentActivityName=".MainActivity">
        <meta-data
            android:name="android.support.PARENT_ACTIVITY"
            android:value=
                    "com.example.android.twoactivities.MainActivity" />
    </activity>
    ```

    Explanations:

    1. The `label` attribute adds the title of the Activity to the app bar.

    2. With the `parentActivityName` attribute, you indicate that the main activity is the parent of the second activity. This relationship is used for Up navigation in your app: the app bar for the second activity will have a left-facing arrow so the user can navigate "upward" to the main activity.

    3. With the `<meta-data>` element, you provide additional arbitrary information about the activity in the form of key-value pairs. In this case the metadata attributes do the same thing as the `android:parentActivityName` attribute -- they define a relationship between two activities for upward navigation. These metadata attributes are required for older versions of Android, because the `android:parentActivityName` attribute is only available for API levels 16 and higher.


## Intents

An activity is started or activated with an **intent**.  
An [Intent](https://developer.android.com/reference/android/content/Intent.html) is an **asynchronous message** that you can use in your activity to **request an action** from another activity, or from some other app component.

You use an intent to  

* **start one activity** from another activity, and 
* to **pass data** between activities.


An Intent can be *explicit* or *implicit*:

* An **explicit intent** is one in which the target of an intent is known. That is, you already know the fully qualified class name of that specific activity.
* An **implicit intent** is one in which you do *not* have the name of the target component, but you have a **general action** to perform.

In NZSE and the practical sessions, you create explicit intents. 


## Activity Life Cycle

For more information see <https://developer.android.com/guide/components/activities/activity-lifecycle#java>

Activities transiton through different __states__ in their life cycle.

 The `Activity` class provides a number of __callback methods__ that allow the activity to know that a state has changed: that the system is creating, stopping, or resuming an activity, or destroying the process in which the activity resides.

 Within the __lifecycle callback methods__, you can declare how an activity _behaves_ when the user leaves and re-enters the activity. 
 In other words, each callback allows you to perform specific work that's appropriate to a given change of state


!!! note
    __You don't need to implement all lifecycle methods__  
    Depending on the complexity of your activity, you probably _don't_ need to implement all the lifecycle methods. However, it's important that you understand each one and implement those that ensure your app behaves the way users expect.

* `:::js onCreate()`
    blabla


* `:::js onCreate()`
    blabla


* `:::js onCreate()`
    blabla


* `:::js onCreate()`
    blabla


* `:::js onCreate()`
    blabla


* `:::js onCreate()`
    blabla




## What you have Learned

!!! abstract
    __After having finished this lession, you know...__

    - [ ] ...how to create Activities and Intents 
    - [ ] ...how the Application Model in Android works
    - [ ] ...how you can use Intents to call Activities and share data between them.