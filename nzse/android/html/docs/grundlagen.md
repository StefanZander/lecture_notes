# Grundlagen zur Android-Entwicklung mit Java und Android Studio

!!! abstract
    **Lernziele**

    - [x] Sie können einfache Android Projekte mit Android Studio anlegen
    - [x] Sie verstehen die Grundstruktur einer Android App
    - [x] Sie kennen den Lebenszyklus von Activities
    - [x] Sie kennen die wichtigsten Hilfsmittel in Android Studio
    - [x] Sie verstehen die Konzepte „Datenmodell“ und „Persistenz“ im Kontext einer GUI-Anwendung


## Create and Manage Virtual Devices

Source: <https://codelabs.developers.google.com/codelabs/android-training-hello-world/index.html?index=..%2F..%2Fandroid-training#4>

Use the `Android Virtual Device (AVD) manager` to create a virtual device (also known as an *emulator*) that simulates the configuration for a particular type of Android device, and use that virtual device to run an app. 

Using the `AVD Manager`, you define the

* hardware characteristics of a device, 
* its API level, 
* storage, 
* skin, 
* and other properties
  
and save it as a **virtual device**. 

With virtual devices, you can test apps on different device configurations (such as tablets and phones) with different API levels, without having to use physical devices.

An Android Virtual Device (AVD) is a configuration that defines the characteristics of an Android phone, tablet, Wear OS, or Android TV device that you want to simulate in the Android Emulator. The AVD Manager is an interface you can launch from Android Studio that helps you create and manage AVDs.

The AVD Manager can be opend using `Tools > AVD Manager` or by clicking on the `AVD Manager` icon in the toolbar.


## Deploy an App on a Physical Device

In order to deploy an App on a physical device, you must turn on `USB Debugging` on your Android device. This is enabled in the `Developer options` settings of your device.

On Android 4.2 and higher, the Developer options screen is hidden by default. 

To show developer options and enable USB Debugging:

1. On your device, open `Settings`, search for `About phone`, click on `About phone`, and tap `Build number` **seven times**.
2. Return to the previous screen (Settings / System). `Developer options` appears in the list. Tap `Developer options`.
3. Choose `USB Debugging`.
4. Now you can connect your device and run the app from Android Studio.
    1. Connect your device to your development machine with a USB cable.
    2. Click the `Run` button  in the toolbar. The `Select Deployment Target` window opens with the list of available emulators and connected devices.
    3. Select your device, and click `OK`.

Android Studio installs and runs the app on your device.


## UIs in Android

The user interface (UI) that appears on a screen of an Android device consists of a **hierarchy of objects** called **views** — every element of the screen is a [View](https://developer.android.com/reference/android/view/View.html). The `View` class represents the **basic building block** for all UI components, and the base class for classes that provide interactive UI components such as buttons, checkboxes, and text entry fields. 

Commonly used `View` **subclasses** are:

* `TextView` for displaying text.
* `EditText` to enable the user to enter and edit text.
* `Button` and other clickable elements (such as RadioButton, CheckBox, and Spinner) to provide interactive behavior.
* `ScrollView` and `RecyclerView` to display scrollable items.
* `ImageView` for displaying images.
* `ConstraintLayout` and `LinearLayout` for containing other View elements and positioning them.

The Java code that displays and drives the UI is contained in a class that extends [Activity](https://developer.android.com/reference/android/app/Activity.html). An `Activity` is usually associated with a **layout** of UI views defined as an **XML** (eXtended Markup Language) **file**. This XML file is usually named after its Activity and defines the layout of View elements on the screen. 

!!! example
    For example, the `MainActivity` code in the Hello World app displays a layout defined in the `activity_main.xml` layout file.



## Marshalling und Unmarshalling

**Marshalling** refers to the process of converting the data or the objects inbto a byte-stream, and **unmarshalling** is the reverse process of converting the byte-stream beack to their original data or object. The conversion is achieved through **serialization**.

The purpose of the marshalling/unmarshalling process is to transfer data between remote systems or system components (eg. classes or activities).

!!! note
    **Definition:** Unmarshalling or unmarshaling refers to the process of transforming a representation of an object that was used for storage or transmission to a representation of the object that is executable. A serialized object which was used for communication can not be processed by a computer program. An unmarshalling interface takes the serialized object and transforms it into an executable form. Unmarshalling (similar to deserialization) is the reverse process of marshalling.

