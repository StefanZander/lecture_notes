# Navigation between Screens


!!! success "Key Points"
    - Screen and pages are called 'routes' in Flutter
    - The `Navigator` class is a common way to navigate between routes. It handles a stack of routes internally and provides access and manipulation methods. 
    - `Navigator.push()` navigates to a new / the next screen 
    - `Navigator.pop()` returns to the previous screen
    - `Navigator.push()` and `Navigator.pop()` are usually called in the body of the `onPressed` handler methods.
    - For Android you can use the `MaterialPageRoute`; for iOS-Apps there is a `CupertinoPageRoute` class. These classes provide convenience methods and plattform-specific animations.

!!! info "Where do you find the relevant Information"
    - Read about the `Navigator` class: <https://api.flutter.dev/flutter/widgets/Navigator-class.html>
    - Full explanation together with an example:  <https://docs.flutter.dev/cookbook/navigation/navigation-basics>


## Background Information

Most apps contain several screens for displaying different types of information. For example, an app might have a screen that displays a catalogue of products. When the user taps the image of a product, a new screen displays details about the product.

!!! info "Terminology"
    Screens and pages are called **routes** in Flutter.

    In Android, a route is equivalent to an Activity.  
    In iOS, a route is equivalent to a ViewController. 

    In Flutter, a route is just a widget.

 A common way to navigate between routes is to use the [Navigator](https://api.flutter.dev/flutter/widgets/Navigator-class.html) class.

 This pages illustrates the navigation between two routes by using the following steps:

 1. Create two routes
 2. Navigate to the second route using `Navigator.push()`
 3. Return to the first route using `Navigator.pop()`

 In this basic example, each route contains only a single button. Tapping the button on the first route navigates to the second route. Tapping the button on the second route returns to the first route.

## Create two routes

At first, we create the visual structure:

```dart
class FirstRoute extends StatelessWidget {
  const FirstRoute({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('First Route'),
      ),
      body: Center(
        child: ElevatedButton(
          child: const Text('Open route'),
          onPressed: () {
            // Navigate to second route when tapped.
          },
        ),
      ),
    );
  }
}

class SecondRoute extends StatelessWidget {
  const SecondRoute({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Second Route'),
      ),
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            // Navigate back to first route when tapped.
          },
          child: const Text('Go back!'),
        ),
      ),
    );
  }
}
```


## Navigate to the second route using Navigator.push()

To switch to a new route, use the `Navigator.push()` method. 
The `push()` method adds a `Route` to the stack of routes managed by the `Navigator`. 

Where does the Route come from? 
You can create your own, or use a [MaterialPageRoute](https://api.flutter.dev/flutter/material/MaterialPageRoute-class.html), which is useful because it transitions to the new route using a platform-specific animation.

In the `build()` method of the `FirstRoute` widget, update the `onPressed()` callback:

```dart
// Within the `FirstRoute` widget
onPressed: () {
  Navigator.push(
    context,
    MaterialPageRoute(builder: (context) => const SecondRoute()),
  );
}
```



## Return to the first route using Navigator.pop()

How do you close the second route and return to the first? 
The `Navigator.pop()` method allows to close the second route and return to the first route. The `pop()` method removes the current `Route` from the stack of routes managed by the `Navigator`.

To implement a return to the original route, update the `onPressed()` callback in the `SecondRoute` widget:

```dart
// Within the SecondRoute widget
onPressed: () {
  Navigator.pop(context);
}
```


## Navigation with CupertinoPageRoute

In the previous example we learned how to navigate between screens using the MaterialPageRoute from Material Components. 
However, in Flutter you are not limited to Material design language, instead, you also have access to Cupertino (iOS-style) widgets.

Implementing navigation with Cupertino widgets follows the same steps as when using MaterialPageRoute, but instead you use CupertinoPageRoute which provides an iOS-style transition animation.

To realize that, these widgets need to be replaced in the previous example:

- MaterialApp replaced by CupertinoApp.
- Scaffold replaced by CupertinoPageScaffold.
- ElevatedButton replaced by CupertinoButton.

This way, the example follows the current iOS design language.

!!! info "Material and Cupertino widgets can be mixded"
    You don't need to replace all Material widgets with Cupertino versions to use CupertinoPageRoute since Flutter allows you to mix and match Material and Cupertino widgets depending on your needs.

```dart
import 'package:flutter/cupertino.dart';

void main() {
  runApp(const CupertinoApp(
    title: 'Navigation Basics',
    home: FirstRoute(),
  ));
}

class FirstRoute extends StatelessWidget {
  const FirstRoute({super.key});

  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      navigationBar: const CupertinoNavigationBar(
        middle: Text('First Route'),
      ),
      child: Center(
        child: CupertinoButton(
          child: const Text('Open route'),
          onPressed: () {
            Navigator.push(
              context,
              CupertinoPageRoute(builder: (context) => const SecondRoute()),
            );
          },
        ),
      ),
    );
  }
}

class SecondRoute extends StatelessWidget {
  const SecondRoute({super.key});

  @override
  Widget build(BuildContext context) {
    return CupertinoPageScaffold(
      navigationBar: const CupertinoNavigationBar(
        middle: Text('Second Route'),
      ),
      child: Center(
        child: CupertinoButton(
          onPressed: () {
            Navigator.pop(context);
          },
          child: const Text('Go back!'),
        ),
      ),
    );
  }
}
```

---
Source: <https://docs.flutter.dev/cookbook/navigation/navigation-basics>



