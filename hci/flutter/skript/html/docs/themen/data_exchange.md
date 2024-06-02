# Exchanging Data between Screens


!!! success "Key Points"
    - Flutter supports several ways on how to send data to another screen resp. widget
        - Using Constructors
        - Using Named Routes and `RouteSettings`
        - Using `Navigator.pushNamed` with arguments
        - Using `InheritedWidget`
        - Using Provider as state management solution
        - Using `GlobalKeys` 
    - To share data between screens, use `Navigator.push()` together with `MaterialPageRoute` and pass data via the constructor or use `RouteSettings`.
    - You need to distinguish between (a) a "normal" flow of data between equally important screens or (b) between a primary screen and a secondary screen (e.g. a selection screen that supports the primary screen).
        - Passing data between primary screens can be realized via the standard route operations `push()` and `pop()` together with the data as constructor arguments.
        - In order to retrieve data from a secondary (supplemental) screen you need to use a `Future` and call the second screen asynchronously using `:::dart final result await Navigator.push(...)`.


!!! info "Where do you get more information"
    - Flutter cookbook on sending data to a new screen including a full example: <https://docs.flutter.dev/cookbook/navigation/passing-data>
    - Returning data from a screen inkl. full example: <https://docs.flutter.dev/cookbook/navigation/returning-data>


## Overview

This unit describes...

1. how to send data to a screen
2. how to process data received from a screen. 

## Send Data to a new Screen

Data can be **passed as arguments** to other screens/pages (widgets) when they are created using the `MaterialPageRoute` class in the `Navigator.push()` method.

### Example

```dart hl_lines="46-53"
import 'package:flutter/material.dart';

class Todo {
  final String title;
  final String description;

  const Todo(this.title, this.description);
}

void main() {
  runApp(
    MaterialApp(
      title: 'Passing Data',
      home: TodosScreen(
        todos: List.generate(
          20,
          (i) => Todo(
            'Todo $i',
            'A description of what needs to be done for Todo $i',
          ),
        ),
      ),
    ),
  );
}

class TodosScreen extends StatelessWidget {
  const TodosScreen({super.key, required this.todos});

  final List<Todo> todos;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Todos'),
      ),
      body: ListView.builder(
        itemCount: todos.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(todos[index].title),
            // When a user taps the ListTile, navigate to the DetailScreen.
            // Notice that you're not only creating a DetailScreen, you're
            // also passing the current todo through to it.
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(
                  builder: (context) => DetailScreen(todo: todos[index]),
                ),
              );
            },
          );
        },
      ),
    );
  }
}

class DetailScreen extends StatelessWidget {
  // In the constructor, require a Todo.
  const DetailScreen({super.key, required this.todo});

  // Declare a field that holds the Todo.
  final Todo todo;

  @override
  Widget build(BuildContext context) {
    // Use the Todo to create the UI.
    return Scaffold(
      appBar: AppBar(
        title: Text(todo.title),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Text(todo.description),
      ),
    );
  }
}
```

### Alternative: Pass Data using RouteSettings

Alternatively, data can be passed to a new screen using the [RouteSetting](https://api.flutter.dev/flutter/widgets/RouteSettings-class.html)

Example:

```dart hl_lines="16-17"
ListView.builder(
  itemCount: todos.length,
  itemBuilder: (context, index) {
    return ListTile(
      title: Text(todos[index].title),
      // When a user taps the ListTile, navigate to the DetailScreen.
      // Notice that you're not only creating a DetailScreen, you're
      // also passing the current todo through to it.
      onTap: () {
        Navigator.push(
          context,
          MaterialPageRoute(
            builder: (context) => const DetailScreen(),
            // Pass the arguments as part of the RouteSettings. The
            // DetailScreen reads the arguments from these settings.
            settings: RouteSettings(
              arguments: todos[index],
            ),
          ),
        );
      },
    );
  },
)
```

Reading the data from the settings:

```dart hl_lines="6"
class DetailScreen extends StatelessWidget {
  const DetailScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final todo = ModalRoute.of(context)!.settings.arguments as Todo;

    // Use the Todo to create the UI.
    return Scaffold(
      appBar: AppBar(
        title: Text(todo.title),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16),
        child: Text(todo.description),
      ),
    );
  }
}
```





## Return Data from a Screen

In some cases, you might want to return data from a new screen. 

For example, say you push a new screen that presents two options to a user. When the user taps an option, you want to inform the first screen of the user's selection so that it can act on that information.

You can do this with the `Navigator.pop()` method using the following steps:

1. Define the home screen
2. Add a button that launches the selection screen
3. Show the selection screen with two buttons
4. When a button is tapped, close the selection screen
5. Show a snackbar on the home screen with the selection

### Example

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(
    const MaterialApp(
      title: 'Returning Data',
      home: HomeScreen(),
    ),
  );
}

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Returning Data Demo'),
      ),
      body: const Center(
        child: SelectionButton(),
      ),
    );
  }
}

class SelectionButton extends StatefulWidget {
  const SelectionButton({super.key});

  @override
  State<SelectionButton> createState() => _SelectionButtonState();
}

class _SelectionButtonState extends State<SelectionButton> {
  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: () {
        _navigateAndDisplaySelection(context);
      },
      child: const Text('Pick an option, any option!'),
    );
  }

  // A method that launches the SelectionScreen and awaits the result from
  // Navigator.pop.
  Future<void> _navigateAndDisplaySelection(BuildContext context) async {
    // Navigator.push returns a Future that completes after calling
    // Navigator.pop on the Selection Screen.
    final result = await Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => const SelectionScreen()),
    );

    // When a BuildContext is used from a StatefulWidget, the mounted property
    // must be checked after an asynchronous gap.
    if (!context.mounted) return;

    // After the Selection Screen returns a result, hide any previous snackbars
    // and show the new result.
    ScaffoldMessenger.of(context)
      ..removeCurrentSnackBar()
      ..showSnackBar(SnackBar(content: Text('$result')));
  }
}

class SelectionScreen extends StatelessWidget {
  const SelectionScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Pick an option'),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            Padding(
              padding: const EdgeInsets.all(8),
              child: ElevatedButton(
                onPressed: () {
                  // Close the screen and return "Yep!" as the result.
                  Navigator.pop(context, 'Yep!');
                },
                child: const Text('Yep!'),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(8),
              child: ElevatedButton(
                onPressed: () {
                  // Close the screen and return "Nope." as the result.
                  Navigator.pop(context, 'Nope.');
                },
                child: const Text('Nope.'),
              ),
            )
          ],
        ),
      ),
    );
  }
}
```





## Overview of different data exchange methods

### 1. Using Constructors

Pass data directly through the constructor of the destination widget.

```dart
class FirstScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => SecondScreen(data: 'Hello from FirstScreen'),
              ),
            );
          },
          child: Text('Go to Second Screen'),
        ),
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  final String data;

  SecondScreen({required this.data});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text(data),
      ),
    );
  }
}
```


### 2. Using Named Routes and `RouteSettings`

Define routes in the MaterialApp and pass data using RouteSettings.

```dart
void main() {
  runApp(MaterialApp(
    routes: {
      '/second': (context) => SecondScreen(),
    },
  ));
}

Navigator.pushNamed(
  context,
  '/second',
  arguments: 'Hello from FirstScreen',
);

class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final args = ModalRoute.of(context)!.settings.arguments as String;

    return Scaffold(
      body: Center(
        child: Text(args),
      ),
    );
  }
}
```


### 3. Using `Navigator.pushNamed` with Arguments

Pass data using the arguments parameter.

```dart
Navigator.pushNamed(
  context,
  '/second',
  arguments: {'data': 'Hello from FirstScreen'},
);

class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final Map<String, dynamic> args = ModalRoute.of(context)!.settings.arguments as Map<String, dynamic>;

    return Scaffold(
      body: Center(
        child: Text(args['data']),
      ),
    );
  }
}
```


### 4. Using `InheritedWidget`

Share data down the widget tree using an InheritedWidget.

```dart
class MyInheritedWidget extends InheritedWidget {
  final String data;

  MyInheritedWidget({required this.data, required Widget child}) : super(child: child);

  @override
  bool updateShouldNotify(covariant MyInheritedWidget oldWidget) {
    return oldWidget.data != data;
  }

  static MyInheritedWidget? of(BuildContext context) {
    return context.dependOnInheritedWidgetOfExactType<MyInheritedWidget>();
  }
}

class ParentWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MyInheritedWidget(
      data: 'Hello from InheritedWidget',
      child: ChildWidget(),
    );
  }
}

class ChildWidget extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final myInheritedWidget = MyInheritedWidget.of(context);

    return Text(myInheritedWidget!.data);
  }
}
```


### 5. Using Provider (State Management)

Use a state management solution like Provider to pass data.

```dart
class DataProvider with ChangeNotifier {
  String _data = 'Hello from Provider';
  String get data => _data;

  void updateData(String newData) {
    _data = newData;
    notifyListeners();
  }
}

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => DataProvider(),
      child: MyApp(),
    ),
  );
}

class FirstScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: ElevatedButton(
          onPressed: () {
            Provider.of<DataProvider>(context, listen: false).updateData('Updated Data');
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => SecondScreen()),
            );
          },
          child: Text('Go to Second Screen'),
        ),
      ),
    );
  }
}

class SecondScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    final data = Provider.of<DataProvider>(context).data;

    return Scaffold(
      body: Center(
        child: Text(data),
      ),
    );
  }
}
```


### 6. Using GlobalKeys

Use GlobalKeys to access the state of a widget and its data.

```dart
final GlobalKey<SecondScreenState> secondScreenKey = GlobalKey<SecondScreenState>();

Navigator.push(
  context,
  MaterialPageRoute(builder: (context) => SecondScreen(key: secondScreenKey)),
);

class SecondScreen extends StatefulWidget {
  SecondScreen({Key? key}) : super(key: key);

  @override
  SecondScreenState createState() => SecondScreenState();
}

class SecondScreenState extends State<SecondScreen> {
  String data = 'Initial Data';

  void updateData(String newData) {
    setState(() {
      data = newData;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Text(data),
      ),
    );
  }
}

// Update data from the first screen
secondScreenKey.currentState?.updateData('Updated Data');
```