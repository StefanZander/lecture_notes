
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
  // TODO change method to reflect the structure of the JSON
  factory User.fromJson(Map<String, dynamic> json) {
    // return switch (json) {
    //   {
    //     'firstName': String firstName,
    //     'lastName': String lastName,
    //     firstName: json['firstName'],
    //     lastName: json['lastName'],
    //   } =>
    //     User(mfirstName: firstName, mlastName: lastName),
    //   _ => throw const FormatException('Failed to load user data.'),
    // };
    print(json['users'][0]['firstName']);
    // final parsedJson = jsonDecode(json);
    final firstname = json['users'][0]['firstName'];
    final lastname = json['users'][0]['lastName'];

    // return User(mfirstName: json['firstName'], mlastName: json['lastName']);
    return User(mfirstName: firstname, mlastName: lastname);
  }
}
