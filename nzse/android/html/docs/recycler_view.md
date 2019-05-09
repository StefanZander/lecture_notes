# RecyclerView


!!! abstract 
    **Objectives**

    - [x] You know how to use the RecyclerView class to display items in a scrollable list
    - [x] You know how to dynamically add items to the RecyclerView as they become visible through scrolling
    - [x] YOu know how to perform an action when the user taps a specific item

## Introduction

A common App feature is the display and manipulation of similar data items in form of lists or cards.
Android favours the separation of rendering data items from their actual model data and therefore deploys the concept of **adapters** to link the display of data items (the *View* in the MVC-Pattern) to their actual data (the *Model* in the MVC-Pattern). 

The [RecyclerView](https://developer.android.com/reference/android/support/v7/widget/RecyclerView.html) is a new [ViewGroup](https://developer.android.com/reference/android/view/ViewGroup.html) that is prepared to render any adapter-based view in a similar and more resource-efficient way. It is the successor of ListView and GridView, and it can be found in the latest support-v7 version. One of the reasons is that RecyclerView has a more extensible framework, especially since it provides the ability to implement both horizontal and vertical layouts. Use the RecyclerView widget when you have data collections whose elements change at runtime based on user action or network events.

![RecyclerView](./figures/recycler_view/recycler_view.png)_A list using the `RecyclerView` (Source: [Google](https://developer.android.com/design/material/images/list_mail.png))_

In order to use a RecyclerView, the following components are needed:

- `RecyclerView.Adapter` - To handle the data collection and bind it to the view
- `LayoutManager` - to position the items
- `ItemAnimator` - to support animating the items for common operations such as Addition or Removal of item


## Using the RecyclerView

Using a RecyclerView has the following key steps:

1. Add **RecyclerView support library** to the Gradle build file
2. Define a **model class** to use as the data source
3. Add a **RecyclerView** to your activity to display the items
4. Create a **custom row layout XML file** to visualize the item
5. Create a **RecyclerView.Adapter** and **ViewHolder** to render the item
6. **Bind the adapter** to the data source to populate the RecyclerView


### Adding the RecyclerView Support Library

Make sure the RecyclerView support library is listed as a dependency in your `app/build.gradle`:
```js
dependencies {
    ...
    implementation 'com.android.support:recyclerview-v7:27.1.1'
}
```
Click on `Sync Project with Gradle files` to let the IDE download the appropriate resources.


### Defining a Model

Every RecyclerView is backed by a source for data. 
Therefore, define a data class which represents the data model being displayed by the RecyclerView

```java
public class Rating implements Serializable {

    public static final String TAG = Rating.class.getSimpleName();

    private String date;
    private int score;

    public Rating(int score) {
        this.date = new SimpleDateFormat("E, dd. MMM yyyy, HH:mm")
            .format(new Date(System.currentTimeMillis() - Math.round((Math.random() * 31000000000.0))));
        this.score = score;
    }

    public String generateDate() {
        this.date = new SimpleDateFormat("dd.mm.yyyy")
            .format(new Date(System.currentTimeMillis() - Math.round((Math.random() * 310000000))));
        return this.date;
    }

    public String getDate() {
        return this.date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public int getScore() {
        return this.score;
    }
}
```


### Add the RecyclerView to the Activity's Layout
Inside the desired activity layout XML file in res/layout/activity_users.xml, let's add the RecyclerView from the support library:

```xml
<?xml version="1.0" encoding="utf-8"?>
<android.support.constraint.ConstraintLayout 
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <android.support.v7.widget.RecyclerView
        android:id="@+id/__set_id__"
        android:layout_width="0dp"
        android:layout_height="0dp"
        app:layout_constraintBottom_toBottomOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

</android.support.constraint.ConstraintLayout>
```


### Create a Custom Item Layout

Before we create the adapter, we need to define the XML layout file that will be used for each row within the list. 
This item layout for now should contain a horizontal linear layout with a textview for the name and a button to message the person:


## What you have Learned

!!! abstract
    __After having finished this lession, you know...__

    - [ ] ...how to create Activities and Intents 
    - [ ] ...how the Application Model in Android works
    - [ ] ...how you can use Intents to call Activities and share data between them.