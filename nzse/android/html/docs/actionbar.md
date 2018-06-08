# Android App Bar (aka Action Bar)

!!! abstract
    **Lernziele**

    - [x] Sie kennen die Grundlagen der Android Action Bar 
    - [x] Sie können eine Action Bar in ihre Applikation integrieren
    - [x] Sie verstehen das Vorgehensmodell zum Entwurf einer Benutzungsschnittstelle im Kontext von OOAD/SWE

!!! note
    __Note:__ The app bar should be implemented using the __Android Toolbar__ to make it available for a wide range of devices. According to the Android developer guidelines, the appcompat [Toolbar](https://developer.android.com/reference/android/support/v7/widget/Toolbar.html) has the best compatibility support.  

## Introduction

The **app bar**, also known as the *action bar*, is one of the *most important design elements* in your app's activities, because it provides a visual structure and interactive elements that are familiar to users. Using the app bar makes your app **consistent with other Android apps**, allowing users to quickly understand how to operate your app and have a great experience. 

The key functions of the app bar are as follows:

* A dedicated space for giving your app an identity and indicating the user's location in the app.
* Access to important actions in a predictable way, such as search.
* Support for navigation and view switching (with tabs or drop-down lists).

This lecture describes how to use the [v7 appcompat](https://developer.android.com/tools/support-library/features.html#v7-appcompat) support library's [Toolbar](https://developer.android.com/reference/android/support/v7/widget/Toolbar.html) widget as an app bar. 

!!! note
    __Note:__ There are other ways to implement an app bar—for example, some themes set up an ActionBar as an app bar by default––but using the appcompat Toolbar makes it easy to set up an app bar that works on the widest range of devices, and also gives you room to customize your app bar later on as your app develops.

## Set up an App Bar

In its most basic form, the action bar displays the title for the activity on one side and an overflow menu on the other. Even in this simple form, the app bar provides useful information to the users, and helps to give Android apps a consistent look and feel.

![The App Bar](./figures/appbar/appbar.png)_An app bar with the app title and an overflow menu_

Beginning with Android 3.0 (API level 11), all activities that use the default theme have an `ActionBar` as an app bar. However, app bar features have gradually been added to the native [ActionBar](https://developer.android.com/reference/android/app/ActionBar.html) over various Android releases. As a result, the native `ActionBar` behaves differently depending on what version of the Android system a device may be using. By contrast, the most recent features are added to the support library's version of `Toolbar`, and they are available on any device that can use the support library.

For this reason, it is recommended to use the support library's `Toolbar` class to implement activities' app bars. Using the support library's toolbar helps ensure that an app will have consistent behavior across the widest range of devices. For example, the [Toolbar](https://developer.android.com/reference/android/support/v7/widget/Toolbar.html) widget provides a [material design](https://developer.android.com/design/material/index.html) experience on devices running Android 2.1 (API level 7) or later, but the native action bar doesn't support material design unless the device is running Android 5.0 (API level 21) or later.

## Adding a Toolbar to an Activity

These steps describe how to set up a `Toolbar` as an activity's app bar:

1. Add the [v7 appcompat](https://developer.android.com/tools/support-library/features.html#v7-appcompat) **support library** to your project, as described in [Support Library Setup](https://developer.android.com/topic/libraries/support-library/setup).

2. Make sure the activity extends `AppCompatActivity`, as illustrated below:
    ``` java
    public class MyActivity extends AppCompatActivity {
    // ...
    }
    ```

    !!! note
        __Note:__ You need to make this change for every activity in your app that uses a Toolbar as an app bar.

3. In the **app manifest**, set the `<application>` element to use one of appcompat's [NoActionBar](https://developer.android.com/reference/android/support/v7/appcompat/R.style.html#Theme_AppCompat_NoActionBar) themes. Using one of these themes prevents the app from using the native `ActionBar` class to provide the app bar. For example:
    ``` xml
    <application
        android:theme="@style/Theme.AppCompat.Light.NoActionBar"
    />
    ```
4. Add a `Toolbar` to the activity's layout. For example, the following layout code adds a `Toolbar` and gives it the appearance of floating above the activity:
    ``` xml
    <android.support.v7.widget.Toolbar
        android:id="@+id/my_toolbar"
        android:layout_width="match_parent"
        android:layout_height="?attr/actionBarSize"
        android:background="?attr/colorPrimary"
        android:elevation="4dp"
        android:theme="@style/ThemeOverlay.AppCompat.ActionBar"
        app:popupTheme="@style/ThemeOverlay.AppCompat.Light"/>
    ```
    
    !!! note
        __Note:__ The Material Design specification recommends that app bars have an **elevation** of **4 dp**.

    Position the toolbar at the top of the activity's layout, since you are using it as an app bar.

5. In the activity's `onCreate()` method, call the activity's `setSupportActionBar()` method, and pass the activity's toolbar. This method sets the toolbar as the app bar for the activity. 
    
    For example:
    ``` java
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my);
        Toolbar myToolbar = (Toolbar) findViewById(R.id.my_toolbar);
        setSupportActionBar(myToolbar);
    }
    ```
    Your app now has a basic action bar. By default, the action bar contains just the name of the app and an overflow menu. The options menu initially contains just the Settings item. 
    
    You can add more actions to the action bar and the overflow menu, as described in xxx Adding and Handling Actions.

!!! note
    __Hint: Use App Bar Utility Methods__
    
    Once you set the toolbar as an activity's app bar, you have access to the various **utility methods** provided by the v7 appcompat support library's `ActionBar` class. This approach lets you do a number of useful things, like hide and show the app bar.

    To use the **ActionBar utility methods**, call the activity's `getSupportActionBar()` method. This method returns a reference to an appcompat `ActionBar` object. Once you have that reference, you can call any of the ActionBar methods to **adjust the app bar**. For example, to hide the app bar, call `ActionBar.hide()`.


## Adding and Handling Actions

The app bar allows you to **add buttons** for **user actions**. This feature lets you put the most important actions for the current context right at the top of the app. For example, a photo browsing app might show share and create album buttons at the top when the user is looking at their photo roll; when the user looks at an individual photo, the app might show crop and filter buttons.

**Space** in the app bar is **limited**. If an app declares *more actions* than can fit in the app bar, the app bar send the excess actions to an **overflow menu**. The app can also specify that an action **should always be shown** in the **overflow menu**, instead of being displayed on the app bar.

![](./figures/appbar/appbar_with_action_button.png)*An app bar with a single action button and an overflow menu.*

### Adding Action Buttons
All action buttons and other items available in the action overflow are defined in an **XML menu resource**(https://developer.android.com/guide/topics/resources/menu-resource.html). 

To add actions to the action bar, create a new XML file in your project's `res/menu/` directory.

Add an `<item>` element for each item you want to include in the action bar, as shown in the following code example of a menu XML file:

``` xml
<menu xmlns:android="http://schemas.android.com/apk/res/android" >

    <!-- "Mark Favorite", should appear as action button if possible -->
    <item
        android:id="@+id/action_favorite"
        android:icon="@drawable/ic_favorite_black_48dp"
        android:title="@string/action_favorite"
        app:showAsAction="ifRoom"/>

    <!-- Settings, should always be in the overflow -->
    <item android:id="@+id/action_settings"
          android:title="@string/action_settings"
          app:showAsAction="never"/>

</menu>
```

The `app:showAsAction` attribute specifies whether the **action should be shown as a button** on the app bar.

* If you set `app:showAsAction="ifRoom"` (as in the example code's favorite action), the action is displayed as a **button** *if* there is **room in the app bar** for it; if there is *not* enough room, excess actions are sent to the **overflow menu**. 
* If you set `app:showAsAction="never"` (as in the example code's settings action), the action is **always listed in the overflow menu**, *not* displayed in the app bar.

The system uses the **action's icon** as the action button, if the action is displayed in the app bar. 

You can find many useful icons on the [Material Icons](https://www.google.com/design/icons/) page.


### Respond to Actions

When the user selects one of the app bar items, the system calls the activity's `onOptionsItemSelected()` callback method, and passes a `MenuItem` object to indicate which item was clicked. In your implementation of `onOptionsItemSelected()`, call the `MenuItem.getItemId()` method to determine which item was pressed. The `ID` returned matches the value you declared in the corresponding `<item>` element's `android:id` attribute.

For example, the following code checks to see which action the user selected. If the method does not recognize the user's action, it invokes the superclass method:

``` java
@Override
public boolean onOptionsItemSelected(MenuItem item) {
    switch (item.getItemId()) {
        case R.id.action_settings:
            // User chose the "Settings" item, show the app settings UI...
            return true;

        case R.id.action_favorite:
            // User chose the "Favorite" action, mark the current item
            // as a favorite...
            return true;

        default:
            // If we got here, the user's action was not recognized.
            // Invoke the superclass to handle it.
            return super.onOptionsItemSelected(item);

    }
}
```


## Disclaimer

Most of the information in this lecture has been compiled from the following sources:

* <https://developer.android.com/training/appbar/>
