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
