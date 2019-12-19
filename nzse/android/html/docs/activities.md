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
    * Called when the Activity is first created
    * Contains the basic setup/startup logic for the application
    * Use for actions that need to be performed only once in the lifetime of an Activity – e.g. bind data to list, views or adapters
    * Receives the `savedInstanceState` parameter that contains the activity's previously saved state
    * Perfoms the following actions
        * call the super call to complete the creation process
        * set the user interface layout for this activity
        * recover the instance state
        * inflation + initializing view widgets

    ``` java
    @Override
    public void onCreate(Bundle savedInstanceState) {
        // call the super class onCreate to complete the creation of activity like
        // the view hierarchy
        super.onCreate(savedInstanceState);

        // recovering the instance state
        if (savedInstanceState != null) {
            gameState = savedInstanceState.getString(GAME_STATE_KEY);
        }

        // set the user interface layout for this activity
        // the layout file is defined in the project res/layout/main_activity.xml file
        setContentView(R.layout.main_activity);

        // initialize member TextView so we can manipulate it later
        textView = (TextView) findViewById(R.id.text_view);
    }
    ```



* `:::js onStart()`
    * Invoked when the system enters the `STARTED` state, previously before the activity enters the foreground
    * `:::js onStart()` makes the activity visible to the user
    * Use for the initialization of the code that maintains the UI
    * Activity only remains very shortly in this state; when the callback finishes the activity transitions to the `RESUMED` state


* `:::js onResume()`
    * Invoked when the activity comes to the foreground (it is visible and in the foreground)
    * Activity remains in the `RESUMED` state and user can interakt with it
    * Activity stays in this state until something happens that takes the focus away from the app/activity (e.g. a receiving phone call; the navigation to another activity; device screen turning off etc.)
    * When an interruptive event occurs, the activity enters the `PAUSED` state, and the system invokes the `:::js onPause()` callback.
    * If the activity returns to the `RESUMED` state from the `PAUSED` state, the system once again calls `:::js onResume()` method. For this reason, you should implement `:::js onResume()` to initialize components that you release during `:::js onPause()`, and perform any other initializations that must occur each time the activity enters the `RESUMED` state.


* `:::js onPause()`
    * First action when the user leaves the activity
    * Activity is no longer in the foreground
    * Use `:::js onPause()` to adjust or pause operations that should not continue while the activity is in `PAUSED` state but resume afterwards
    * Release system resources (e.g. sensor handlers such as GPS etc or resources that affect battery life) 

        !!! warning
            __Do not use `:::js onPause()` for Data Saving Operations__  
            `:::js onPause()` execution is very brief, and does not necessarily afford enough time to perform save operations. For this reason, you should not use `:::js onPause()` to save application or user data, make network calls, or execute database transactions; such work may not complete before the method completes. Instead, you should perform heavy-load shutdown operations during  `:::js onStop()`.

    * Completion of the onPause() method does not mean that the activity leaves the Paused state. Rather, the activity remains in this state until either the activity resumes or becomes completely invisible to the user. If the activity resumes, the system once again invokes the onResume() callback. 


* `:::js onStop()`
    * When your activity is no longer visible to the user, it has entered the `STOPPED` state, and the system invokes the `:::js onStop()` callback.
    * Called when the activity has finished running and is about to be terminated
    * Release any resources that are not needed while the app is not visible to the user
    * Using `:::js onStop()` instead of `:::js onPasue()` ensures that UI-related work continues
    * Use for CPU-intensive shutdown operations – e.g., store data in a database


* `:::js onDestroy()`
    * Called before the activity is destroyed
    * 2 Reasons
        1. the activity is finishing (due to the user completely dismissing the activity or due to finish() being called on the activity), or
        2. the system is temporarily destroying the activity due to a configuration change (such as device rotation or multi-window mode) 




## What you have Learned

!!! abstract
    __After having finished this lession, you know...__

    - [ ] ...how to create Activities and Intents 
    - [ ] ...how the Application Model in Android works
    - [ ] ...how you can use Intents to call Activities and share data between them.