# Navigation between Screens aka Routes


!!! success "Key Points"
    - Flutter provides several widgets for navigating between routes.
    - `NavigationBar` is the default implementation for a bottom navigation and should be used when the app consists of 3 and up to 5 main areas resp. screens.
    - A `NavigationBar` is added as argument to the `bottomNavigationBar` parameter of the `Scaffold` widget.
    - Tabs are another common navigation/layout pattern in apps and follows the Material Design guidelines.
    - Tabs are implemented using a `TabController` to keep the selected tabs and the screen contents in sync. 
    - Flutter provides a default implementation of a tab controller called `DefaultTabController`.
    - When there is not enough space for tabs use the `Drawer` widget in combination with a `Scaffold`.
    - Different screens resp. routes should be put in individual Dart/Flutter classes to separate them from the main `.lib`-file.


!!! info "Where do you find the relevant information"
    - How to create and use the `NavigationBar`: <https://api.flutter.dev/flutter/material/NavigationBar-class.html>
    - How to create and use tabs: <https://docs.flutter.dev/cookbook/design/tabs>
    - How to use a `Drawer`: <https://docs.flutter.dev/cookbook/design/drawer>
    - General information about navigation and routing: <https://docs.flutter.dev/ui/navigation>
    


## Background Information and Examples

### NavigationBar
In most cases using a bottom navigation is recommended and sufficient.

With Material 3, the `NavigationBar`-class is the recommended way for navigation **between 3 and up to 5 screens**.

Flutter provides the [NavigationBar](https://api.flutter.dev/flutter/material/NavigationBar-class.html) class therefore. 

#### Full Example

A first simple example of an app that uses a navigation bar with 3 different screens.

A `scaffold` as parent widget has a dedicated property for a navigation bar as well as a body property that can hold screens for all selectable menu items in form of an array.

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(useMaterial3: true),
      home: const NavigationExample(),
    );
  }
}

class NavigationExample extends StatefulWidget {
  const NavigationExample({
    super.key,
  });

  @override
  State<NavigationExample> createState() => _NavigationExampleState();
}

class _NavigationExampleState extends State<NavigationExample> {
  int currentPageIndex = 0;

  @override
  Widget build(BuildContext context) {
    final ThemeData theme = Theme.of(context);
    return Scaffold(
      bottomNavigationBar: NavigationBar(
        onDestinationSelected: (int index) {
          setState(() {
            currentPageIndex = index;
          });
        },
        indicatorColor: Colors.lightBlue,
        selectedIndex: currentPageIndex,
        destinations: const <Widget>[
          NavigationDestination(
            selectedIcon: Icon(Icons.home),
            icon: Icon(Icons.home_outlined),
            label: 'Home',
          ),
          NavigationDestination(
            icon: Badge(child: Icon(Icons.notifications_sharp)),
            label: 'Notifications',
          ),
          NavigationDestination(
            icon: Badge(
              label: Text('2'),
              child: Icon(Icons.messenger_sharp),
            ),
            label: 'Messages',
          ),
        ],
      ),
      body: <Widget>[
        Card(
          shadowColor: Colors.transparent,
          margin: const EdgeInsets.all(8.0),
          child: SizedBox.expand(
            child: Center(
              child: Text(
                'Home page',
                style: theme.textTheme.titleLarge,
              ),
            ),
          ),
        ),

        /// Notifications' page
        const Padding(
          padding: EdgeInsets.all(8.0),
          child: Column(
            children: <Widget>[
              Card(
                child: ListTile(
                  leading: Icon(Icons.notifications_sharp),
                  title: Text('Notification 1'),
                  subtitle: Text('This is a notification'),
                ),
              ),
              Card(
                child: ListTile(
                  leading: Icon(Icons.notifications_sharp),
                  title: Text('Notification 2'),
                  subtitle: Text('This is a notification'),
                ),
              ),
            ],
          ),
        ),

        // Messages page
        ListView.builder(
          reverse: true,
          itemCount: 2,
          itemBuilder: (BuildContext context, int index) {
            if (index == 0) {
              return Align(
                alignment: Alignment.centerRight,
                child: Container(
                  margin: const EdgeInsets.all(8.0),
                  padding: const EdgeInsets.all(8.0),
                  decoration: BoxDecoration(
                    color: theme.colorScheme.primary,
                    borderRadius: BorderRadius.circular(8.0),
                  ),
                  child: Text(
                    'Hello',
                    style: theme.textTheme.bodyLarge!
                        .copyWith(color: theme.colorScheme.onPrimary),
                  ),
                ),
              );
            }
            return Align(
              alignment: Alignment.centerLeft,
              child: Container(
                margin: const EdgeInsets.all(8.0),
                padding: const EdgeInsets.all(8.0),
                decoration: BoxDecoration(
                  color: theme.colorScheme.primary,
                  borderRadius: BorderRadius.circular(8.0),
                ),
                child: Text(
                  'Hi',
                  style: theme.textTheme.bodyLarge!
                      .copyWith(color: theme.colorScheme.onPrimary),
                ),
              ),
            );
          },
        ),
      ][currentPageIndex],
    );
  }
}
```

<!-- 
Tasks: (TODO: refine)

- Try to understand
    - how screens are switched based on the selected item 
    - how new screens (views) can be added
    - ...
- Put the different screens in individual dart/flutter classes to separate them from the main `.lib`-file -->




### Tabs

Working with tabs is a common pattern in apps that follow the Material Design guidelines. Flutter includes a convenient way to create tab layouts as part of the material library.

Tabs can be added to an app using the following steps;

1. Create a `TabController`
2. Create the tabs
3. Create content for each tab

#### 1. Create a `TabController`

For tabs to work, you need to keep the selected tab and content sections **in sync**. This is the job of the `TabController`.

Either create  

- a `TabController` manually, or  
- automatically by using a `DefaultTabController` widget.

Using `DefaultTabController` is the simplest option, since it creates a `TabController` and makes it available to all descendant widgets.

```dart
return MaterialApp(
  home: DefaultTabController(
    length: 3,
    child: Scaffold(),
  ),
);
```



#### 2. Create the tabs

When a tab is selected, it needs to display content. You can create tabs using the `TabBar` widget.

 In the following example, a `TabBar` with three `Tab` widgets is created and placed within an `AppBar`:

```dart
 return MaterialApp(
  home: DefaultTabController(
    length: 3,
    child: Scaffold(
      appBar: AppBar(
        bottom: const TabBar(
          tabs: [
            Tab(icon: Icon(Icons.directions_car)),
            Tab(icon: Icon(Icons.directions_transit)),
            Tab(icon: Icon(Icons.directions_bike)),
          ],
        ),
      ),
    ),
  ),
);
``` 

Note that the `TabBar` is added to the `bottom` parameter of the `AppBar`.

!!! info "Which TabController will be used ?"
    By default, the `TabBar` looks up the widget tree for the nearest `DefaultTabController`.  
    If you're manually creating a `TabController`, pass it to the `TabBar`.


#### 3. Create content for each tab

After creating the tabs, display the corresponding content when a tab is selected. For this purpose, use the `TabBarView` widget.

!!! warning "The order is important"
    Order is important and must correspond to the order of the tabs in the `TabBar`.

```dart
body: const TabBarView(
  children: [
    Icon(Icons.directions_car),
    Icon(Icons.directions_transit),
    Icon(Icons.directions_bike),
  ],
),
```

The full code example is listed below:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(const TabBarDemo());
}

class TabBarDemo extends StatelessWidget {
  const TabBarDemo({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: DefaultTabController(
        length: 3,
        child: Scaffold(
          appBar: AppBar(
            bottom: const TabBar(
              tabs: [
                Tab(icon: Icon(Icons.directions_car)),
                Tab(icon: Icon(Icons.directions_transit)),
                Tab(icon: Icon(Icons.directions_bike)),
              ],
            ),
            title: const Text('Tabs Demo'),
          ),
          body: const TabBarView(
            children: [ // important: maintain the sequence of the tabs
              Icon(Icons.directions_car),
              Icon(Icons.directions_transit),
              Icon(Icons.directions_bike),
            ],
          ),
        ),
      ),
    );
  }
}
```
