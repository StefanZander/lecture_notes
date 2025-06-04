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

  // TODO add undo delete action
  void undoRemoveLastUser() {
    _users.add(_lastRemovedUser);
    setState();
  }
}
