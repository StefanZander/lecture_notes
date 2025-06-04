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
    // behavior: SnackBarBehavior.floating,
    // action: SnackBarAction(
    //     label: 'undo',
    //     onPressed: () {
    //       print('Snackbar undo pressed.');
    //     }),
  ));
}
