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





## Disclaimer

Most of the information in this lecture has been compiled from 

* <https://developer.android.com/training/appbar/>
