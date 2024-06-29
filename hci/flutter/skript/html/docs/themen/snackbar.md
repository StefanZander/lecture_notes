# How to use the SnackBar

Snackbar is a usefull and intuitive way to show changes related to the current app state to the user.

However, in some occassions, its inclusion might be troublesome. 

Here a some hints in case you come across the `No ScaffoldMessenger widget found` error message.

Reason:

- This message indicates problems with the widget tree. An anchestor from MaterialApp is needed in order to display a snackbar using the correct context.

Solution:

- In most cases it helps to make the main screen/page a separate widget (see the following code excerpt):

```dart
class MainApp extends StatelessWidget {
  MainApp({super.key});

  final _messangerKey = GlobalKey<ScaffoldMessengerState>();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      scaffoldMessengerKey: _messangerKey,
      home: MainScreen(messangerKey: _messangerKey), // originally, here were the widgets
    );
  }
}

/// Now, the root widget is in a separate class  
class MainScreen extends StatelessWidget {
  const MainScreen({
    super.key,
    required GlobalKey<ScaffoldMessengerState> messangerKey,
  }) : _messangerKey = messangerKey;

  final GlobalKey<ScaffoldMessengerState> _messangerKey;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
```

See the following link for more in-depth information: <https://stackoverflow.com/questions/66833689/flutter-no-scaffoldmessenger-widget-found>
  
