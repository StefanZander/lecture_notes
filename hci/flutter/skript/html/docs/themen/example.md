# A Complete Example 


!!! success "Key Points of the App"
    This app illustrates the implementation of the following aspects:
    
    - Usage of the NavigationBar
    - How to distribute the code in different packages for better maintenance and separation of functional concerns
    - How to use the SnackBar in different Widgets and across the app
    - Undo-action in the SnackBar
    - Usage of Futures in handlers
    - Fetch data from an endpoint via HTTP(S)
    - Store data in local collections
    - Process JSON asynchronously
    - Global state management using [June](https://pub.dev/packages/june)
    - Separte application data in model-classes
    - Combine model-classes and widgets using June as state manager
    - Customize FloatingActionButtons on different screens using a single Scaffold
    - Using more than one FloatingActionButton
    - Selectively display different FloatingActionButtons based on the selected NavigationBar item

### Overview
    
The following app demonstrates implementation options for some of the main flutter language features that should be acquired by students in the course. It is intended to help students incorporate those features into their semester projects.  

!!! info "Source code of the app"
    The app's source code is available via [GitHub](https://github.com/StefanZander/lecture_notes/tree/master/hci/flutter/beispiele/fetch_json).


### Architecture

The app consists of three screens (aka pages or routes in Flutter nomenclature):

1. Counter – alter a counter variable as part of the app state
2. User – fetch user data from a remote endpoint and display it in a table view
3. User List – asynchronously add fetched users to a list using `ListView.builder()`

The source code is separated in several packages according to its purpose:

- `model` – contains the models (aka data structures) for global app state objects. These classes represent the app's entities, i.e., its data objects
- `pages` – contains the single screens of the app
- `services` – hosts the service classes (e.g. fetching or storage methods etc.)
- `state` – these are the actual state classes needed by June (they are extending `JuneState`)
- `widgets` – contains individually defined widget classes; currently empty.

I recommend that you use a similar structure in/for your projects.


### Source Code

Please note: I do not display the source code of all project files but rather those that are most informative. The complete source code can be obtained from the [GitHub-repository](https://github.com/StefanZander/projects/tree/main/flutter/fetching_json).

#### model/user.dart

```dart

/// This is the model class that represents a user
class User {
  late String mfirstName;
  late String mlastName;
  late int mage;
  late String mgender;
  late String memail;
  late String mphone;

  User({required this.mfirstName, required this.mlastName});

  set firstName(String value) {
    mfirstName = value;
  }

  set lastName(String value) {
    mlastName = value;
  }

  String getName() {
    return '$mfirstName $mlastName';
  }

  String get firstName {
    return mfirstName;
  }

  String get lastName {
    return mlastName;
  }

  // Added factory method
  factory User.fromJson(Map<String, dynamic> json) {
    final firstname = json['users'][0]['firstName'];
    final lastname = json['users'][0]['lastName'];
    return User(mfirstName: firstname, mlastName: lastname);
  }
}
```


#### pages/counter_page.dart

```dart
import 'package:fetching_json/main.dart';
import 'package:fetching_json/state/counter.dart';
import 'package:flutter/material.dart';
import 'package:june/june.dart';

class CounterPage extends StatefulWidget {
  const CounterPage({super.key});

  @override
  State<CounterPage> createState() => _CounterPageState();
}

class _CounterPageState extends State<CounterPage> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          const Padding(
            padding: EdgeInsets.all(16.0),
            child: Text(
                'Tab the buttons or swipe to left/right in order to increase or decrease the counter.'),
          ),
          const Spacer(
            flex: 1,
          ),
          ElevatedButton(
            onPressed: () {
              showSnackBar(context,
                  text: "Increasing Counter by 1", duration: 300);
              var state = June.getState(() => Counter());
              state.incCounter();
            },
            child: const Padding(
              padding: EdgeInsets.all(8.0),
              child: Icon(
                Icons.arrow_upward,
                size: 32,
              ),
            ),
          ),
          Expanded(
              flex: 2,
              child: Center(
                child: Row(
                  textBaseline: TextBaseline.alphabetic,
                  crossAxisAlignment: CrossAxisAlignment.baseline,
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    const Text('Counter '),
                    JuneBuilder(
                      () => Counter(),
                      builder: (context) => Text(
                        '${context.count}',
                        style: const TextStyle(
                          fontSize: 96,
                          fontWeight: FontWeight.normal,
                        ),
                      ),
                    ),
                  ],
                ),
              )),
          ElevatedButton(
              onPressed: () {
                showSnackBar(context,
                    text: "Decresing Counter by 1", duration: 300);
                var state = June.getState(() => Counter());
                state.decCounter();
              },
              child: const Padding(
                padding: EdgeInsets.all(8.0),
                child: Icon(
                  Icons.arrow_downward,
                  size: 32,
                ),
              )),
          const Spacer(
            flex: 1,
          )
        ],
      ),
    );
  }
}
```


#### pages/single_user_page.dart

```dart
import 'package:fetching_json/state/counter.dart';
import 'package:flutter/material.dart';
import 'package:june/june.dart';
import 'package:fetching_json/state/user_state.dart';

class SingleUserPage extends StatefulWidget {
  const SingleUserPage({super.key});

  @override
  State<StatefulWidget> createState() => _SingleUserPageState();
}

class _SingleUserPageState extends State<SingleUserPage> {
  @override
  Widget build(BuildContext context) {
    return Center(
      child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
        JuneBuilder(
          () => Counter(),
          builder: (context) => Text('Counter ${context.count}'),
        ),
        Padding(
          padding: const EdgeInsets.all(16.0),
          child: JuneBuilder(() => UserState(), builder: (context) {
            return Table(
              border: const TableBorder.symmetric(),
              columnWidths: const <int, TableColumnWidth>{
                0: FixedColumnWidth(96),
                1: FlexColumnWidth(),
              },
              defaultVerticalAlignment: TableCellVerticalAlignment.top,
              children: <TableRow>[
                TableRow(
                    decoration: BoxDecoration(
                        color: Colors.amber,
                        borderRadius: BorderRadius.circular(10),
                        border: const Border.symmetric()),
                    children: <Widget>[
                      const Padding(
                        padding: EdgeInsets.all(8.0),
                        child: Text(
                          'Firstname',
                          textAlign: TextAlign.right,
                          style: TextStyle(fontWeight: FontWeight.normal),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.all(8.0),
                        child: Text(
                          context.firstName,
                          textAlign: TextAlign.left,
                          style: const TextStyle(fontWeight: FontWeight.bold),
                        ),
                      )
                    ]),
                TableRow(children: <Widget>[
                  const Align(
                      alignment: Alignment.centerRight,
                      child: Padding(
                          padding: EdgeInsets.all(8.0),
                          child: Text('Lastname'))),
                  Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Text(
                      context.lastName,
                      textAlign: TextAlign.left,
                      style: const TextStyle(fontWeight: FontWeight.bold),
                    ),
                  )
                ])
              ],
            );
          }),
        ),
      ]),
    );
  }
}
```


#### pages/user_list_page.dart

```dart
import 'package:fetching_json/main.dart';
import 'package:fetching_json/state/user_state.dart';
import 'package:flutter/material.dart';
import 'package:june/june.dart';

class UserListPage extends StatefulWidget {
  const UserListPage({super.key});

  @override
  State<UserListPage> createState() => _UserListPageState();
}

class _UserListPageState extends State<UserListPage> {
  @override
  Widget build(BuildContext context) {
    return Column(children: [
      Expanded(
        child: JuneBuilder(() => UserState(), builder: (users) {
          // important to use a different variable name here since there is a context var in the listview builder
          return ListView.builder(
              itemCount: users.getNumberOfUsers(),
              itemBuilder: (context, index) {
                final firstname = users.getUsers()[index].firstName;
                final lastname = users.getUsers()[index].lastName;
                return Card(
                  child: ListTile(
                    leading: const Icon(Icons.person),
                    title: Text('Person #${index + 1}'),
                    subtitle: Text('$firstname $lastname'),
                    trailing: IconButton(
                      icon: const Icon(Icons.delete),
                      onPressed: () {
                        users.removeUserByIndex(index);
                        final scaffold = ScaffoldMessenger.of(context);
                        scaffold.showSnackBar(SnackBar(
                          content: Text('User `$firstname $lastname` removed'),
                          duration: const Duration(milliseconds: 1600),
                          // behavior: SnackBarBehavior.floating,
                          action: SnackBarAction(
                              label: 'undo',
                              onPressed: () {
                                users.undoRemoveLastUser();
                                showSnackBar(context,
                                    text:
                                        'User `$firstname $lastname` has been recreated.',
                                    duration: 800);
                              }),
                        ));
                      },
                      // hoverColor: Colors.amberAccent,
                      // tileColor: Colors.greenAccent,
                      // shape: RoundedRectangleBorder(
                      //     borderRadius: BorderRadius.all(Radius.circular(16.0))),
                    ),
                  ),
                );
              });
        }),
      ),
    ]);
  }
}
```


#### state/counter.dart

```dart
import 'package:june/june.dart';

class Counter extends JuneState {
  int count = 0;

  void incCounter() {
    count = count + 1;
    setState();
  }

  void decCounter() {
    count = count - 1;
    setState();
  }

  void resetCounter() {
    count = 0;
    setState();
  }
}
```


#### state/user_state.dart

```dart
import 'package:fetching_json/model/user.dart';
import 'package:june/june.dart';

/// This class represents the collection of users
class UserState extends JuneState {
  late final User _user = User(mfirstName: 'undefined', mlastName: 'undefined');
  late User _lastRemovedUser;

  // added user's list
  final List<User> _users = <User>[];

  void setUser({required String firstname, required String lastname}) {
    _user.firstName = firstname;
    _user.lastName = lastname;
    setState();
  }

  String get firstName {
    return _user.firstName;
  }

  String get lastName {
    return _user.lastName;
  }

  /// Adds a new user to the users' list
  void addUser({required String firstname, required String lastname}) {
    _users.add(User(mfirstName: firstname, mlastName: lastname));
    setState();
  }

  int getNumberOfUsers() {
    return _users.length;
  }

  void removeAllUsers() {
    _users.clear();
    setState();
  }

  User getLastAddedUser() {
    return _users.last;
  }

  List<User> getUsers() {
    return _users;
  }

  int getLastIndex() {
    return _users.length - 1;
  }

  User getUser(int index) {
    return _users[index];
  }

  int getIndexOfUser(User user) {
    return _users.indexOf(user);
  }

  void removeUserByIndex(int index) {
    _lastRemovedUser = _users.removeAt(index);
    setState();
  }

  bool removeUser(User user) {
    if (_users.remove(user) == true) {
      setState();
      return true;
    } else {
      return false;
    }
  }

  void undoRemoveLastUser() {
    _users.add(_lastRemovedUser);
    setState();
  }
}
```

#### main.dart

```dart
import 'dart:convert';
import 'dart:math';

import 'package:fetching_json/model/user.dart';
import 'package:fetching_json/pages/counter_page.dart';
import 'package:fetching_json/state/counter.dart';
import 'package:fetching_json/state/user_state.dart';
import 'package:fetching_json/pages/single_user_page.dart';
import 'package:fetching_json/pages/user_list_page.dart';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:june/june.dart';

void main() {
  runApp(MainApp());
}

class MainApp extends StatelessWidget {
  MainApp({super.key});

  final _messangerKey = GlobalKey<ScaffoldMessengerState>();

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      scaffoldMessengerKey: _messangerKey,
      theme: ThemeData(useMaterial3: true),
      home: MainScreen(
          messangerKey: _messangerKey), // originally, here were the widgets
    );
  }
}

/// Now, the root widget is in a separate class
class MainScreen extends StatefulWidget {
  const MainScreen({
    super.key,
    required GlobalKey<ScaffoldMessengerState> messangerKey,
  }) : _messangerKey = messangerKey;

  final GlobalKey<ScaffoldMessengerState> _messangerKey;

  @override
  State<MainScreen> createState() => _MainScreenState();
}

class _MainScreenState extends State<MainScreen> {
  int currentPageIndex = 0;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text("Fetch JSON Demonstrator"),
      ),
      bottomNavigationBar: NavigationBar(
        onDestinationSelected: (int index) {
          setState(() {
            currentPageIndex = index;
          });
        },
        indicatorColor: Colors.amber,
        selectedIndex: currentPageIndex,
        destinations: const <Widget>[
          NavigationDestination(icon: Icon(Icons.pin), label: 'Counter'),
          NavigationDestination(icon: Icon(Icons.person), label: 'User'),
          NavigationDestination(
              icon: Icon(Icons.group_add), label: 'User List'),
        ],
      ),
      floatingActionButton: Column(
          mainAxisAlignment: MainAxisAlignment.end,
          mainAxisSize: MainAxisSize.min,
          children: <Widget>[
            const Spacer(
              flex: 32,
            ),
            if (currentPageIndex == 0)
              FloatingActionButton(
                // Increase
                onPressed: () {
                  showSnackBar(context,
                      text: 'Increasing Counter by 1', duration: 300);
                  var state = June.getState(() => Counter());
                  state.incCounter();
                },
                child: const Icon(Icons.add),
              ),
            const Spacer(),
            if (currentPageIndex == 0)
              FloatingActionButton(
                // Decrease
                onPressed: () {
                  showSnackBar(context,
                      text: "Decresing Counter by 1", duration: 300);
                  var state = June.getState(() => Counter());
                  state.decCounter();
                },
                child: const Icon(Icons.remove),
              ),
            const Spacer(),
            if (currentPageIndex == 2)
              FloatingActionButton(
                // Append User to List
                onPressed: () async {
                  showSnackBar(context, text: 'Appending User', duration: 500);
                  // here I add another
                  var user = await fetchUserData(); // returns a Future
                  var state = June.getState(() => UserState());
                  state.addUser(
                      firstname: user.firstName, lastname: user.lastName);
                },
                child: const Icon(Icons.sync),
              ),
            // displayFetchSingleUserFloatingActionButton(context,
            //     currentIndex: 1, requiredIndex: 1),
            if (currentPageIndex == 1)
              FloatingActionButton(
                onPressed: () async {
                  showSnackBar(context,
                      text: 'Fetching new User', duration: 500);
                  var user = await fetchUserData(); // clears list
                  var state = June.getState(() => UserState());
                  state.setUser(
                      firstname: user.firstName, lastname: user.lastName);
                },
                child: const Icon(Icons.cloud_download),
              ),
            const Spacer(flex: 1),
          ]),
      body: <Widget>[
        const CounterPage(),
        const SingleUserPage(),
        const UserListPage(),
      ][currentPageIndex],
    );
  }
}

/// currently not used
Widget displayFetchSingleUserFloatingActionButton(BuildContext context,
    {required int currentIndex, required int requiredIndex}) {
  if (currentIndex == requiredIndex) {
    return FloatingActionButton(
      onPressed: () async {
        showSnackBar(context, text: 'Fetching new User', duration: 500);
        var user = await fetchUserData(); // clears list
        var state = June.getState(() => UserState());
        state.setUser(firstname: user.firstName, lastname: user.lastName);
      },
      child: const Icon(Icons.restart_alt),
    );
  } else {
    return const Spacer();
  }
}

// Retrieve pseudo users: https://dummyjson.com/docs/users#users-limit_skip
// Response {"users":[{"id":1,"firstName":"Emily","lastName":"Johnson"}],"total":208,"skip":0,"limit":1}

Future<User> fetchUserData() async {
  final number = Random().nextInt(99);
  final response = await http.get(Uri.parse(
      'https://dummyjson.com/users?limit=1&skip=$number&select=firstName,lastName'));
  if (response.statusCode == 200) {
    return User.fromJson(jsonDecode(response.body) as Map<String, dynamic>);
  } else {
    throw Exception('Failed to load user data.');
  }
}

void showSnackBar(BuildContext context,
    {required String text, required int duration}) {
  final scaffold = ScaffoldMessenger.of(context);
  scaffold.showSnackBar(SnackBar(
    content: Text(text),
    duration: Duration(milliseconds: duration),
  ));
}
```
