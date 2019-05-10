# RecyclerView


!!! abstract 
    **Objectives**

    - [x] You know how to use the RecyclerView class to display items in a scrollable list
    - [x] You know how to dynamically add items to the RecyclerView as they become visible through scrolling
    - [x] You know how to perform an action when the user taps a specific item

## Introduction

A common App feature is the display and manipulation of similar data items in form of lists or cards.
Android favours the separation of rendering data items from their actual model data and therefore deploys the concept of **adapters** to link the display of data items (the *View* in the MVC-Pattern) to their actual data (the *Model* in the MVC-Pattern). 

The [RecyclerView](https://developer.android.com/reference/android/support/v7/widget/RecyclerView.html) is a new [ViewGroup](https://developer.android.com/reference/android/view/ViewGroup.html) that is prepared to render any adapter-based view in a similar and more resource-efficient way. It is the successor of ListView and GridView, and it can be found in the latest support-v7 version. One of the reasons is that RecyclerView has a more extensible framework, especially since it provides the ability to implement both horizontal and vertical layouts. Use the RecyclerView widget when you have data collections whose elements change at runtime based on user action or network events.

![RecyclerView](./figures/recycler_view/recycler_view.png)_A list using the `RecyclerView` (Source: [Google](https://developer.android.com/design/material/images/list_mail.png))_

In order to use a RecyclerView, the following components are needed:

- `:::js RecyclerView.Adapter` - To handle the data collection and bind it to the view
- `:::js LayoutManager` - to position the items
- `:::js ItemAnimator` - to support animating the items for common operations such as Addition or Removal of item

- A **data model** containing the data to display: Use the mWordList.
- A **RecyclerView** for the scrolling list that contains the list items.
- A **layout** for one item of data. All list items look the same.
- A **layout manager**. `:::js RecyclerView.LayoutManager` handles the hierarchy and layout of View elements. `RecyclerView` requires an explicit layout manager to manage the arrangement of list items contained within it. This layout could be vertical, horizontal, or a grid. You will use a vertical [LinearLayoutManager](https://developer.android.com/reference/android/support/v7/widget/LinearLayoutManager.html).
- An **adapter**. `:::js RecyclerView.Adapter` connects your data to the `RecyclerView`. It prepares the data in a `:::js RecyclerView.ViewHolder`. You will create an adapter that inserts into and updates your _generated words in your views_.
- A **ViewHolder**. Inside your adapter, you will create a [ViewHolder](https://developer.android.com/reference/android/support/v7/widget/RecyclerView.ViewHolder.html) that contains the View information for displaying one item from the item's layout.


## Glossary of Terms

* **Adapter**: A subclass of `:::js RecyclerView.Adapter` responsible for providing views that represent items in a data set.
* **Position**: The position of a data item within an Adapter.
* **Index**: The index of an attached child view as used in a call to `:::js getChildAt(int)`. Contrast with Position.
* **Binding**: The process of preparing a child view to display data corresponding to a position within the adapter.
* **Recycle (view)**: A view previously used to display data for a specific adapter position may be placed in a cache for later reuse to display the same type of data again later. This can drastically improve performance by skipping initial layout inflation or construction.
* **Scrap (view)**: A child view that has entered into a temporarily detached state during layout. Scrap views may be reused without becoming fully detached from the parent RecyclerView, either unmodified if no rebinding is required or modified by the adapter if the view was considered dirty.
* **Dirty (view)**: A child view that must be rebound by the adapter before being displayed.

## Using the RecyclerView

Using a RecyclerView has the following key steps:

1. Add **RecyclerView support library** to the Gradle build file
2. Define a **model class** to use as the data source
3. Add a **RecyclerView** to your activity to display the items
4. Create a **custom row layout XML file** to visualize the items
5. Create a **RecyclerView.Adapter** and **ViewHolder** to render the items
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

Inside the desired activity layout XML file in `res/layout/activity_users.xml`, let's add the RecyclerView from the support library:

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
The item layout for contains the widgets used to represent the data of one item per row.

The layout file should be created in `res/layout/item_rating.xml`  and will be rendered for each item row. 
!!! note
    Please note that `wrap_content` should be used for the `layout_height` because of RecyclerView versions prior to 23.2.1 previously ignored layout parameters ([Source](http://android-developers.blogspot.com/2016/02/android-support-library-232.html)). 



### Creating the `:::js RecyclerView.Adapter`

Here we need to create the adapter which will actually populate the data into the `RecyclerView`. 
The adapter's role is to **convert an object at a position into a list row item** to be inserted.

#### Creating the ViewHolder

However, with a RecyclerView the adapter requires the existence of a `ViewHolder` object which describes and provides access to all the views within each item row. 
We can create the basic empty adapter and holder together in ContactsAdapter.java as follows:

```java
// Create the basic adapter extending from RecyclerView.Adapter
// Note that we specify the custom ViewHolder which gives us access to our views
public class ContactsAdapter extends
    RecyclerView.Adapter<ContactsAdapter.ViewHolder> {

    // Provide a direct reference to each of the views within a data item
    // Used to cache the views within the item layout for fast access
    public class ViewHolder extends RecyclerView.ViewHolder {
        // Your holder should contain a member variable
        // for any view that will be set as you render a row
        public TextView nameTextView;
        public Button messageButton;

        // We also create a constructor that accepts the entire item row
        // and does the view lookups to find each subview
        public ViewHolder(View itemView) {
            // Stores the itemView in a public final member variable that can be used
            // to access the context from any ViewHolder instance.
            super(itemView);

            nameTextView = (TextView) itemView.findViewById(R.id.contact_name);
            messageButton = (Button) itemView.findViewById(R.id.message_button);
        }
    }
}
```




## What you have Learned

!!! abstract
    __After having finished this lession, you know...__

    - [ ] ...how to create Activities and Intents 
    - [ ] ...how the Application Model in Android works
    - [ ] ...how you can use Intents to call Activities and share data between them.