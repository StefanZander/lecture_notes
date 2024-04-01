# Data Structures

Nice article that demonstrates and explains how to combine individual data classes with widgets: <https://docs.flutter.dev/cookbook/lists/mixed-list>

In a nutshell
- use an abstract class for defining the overall structure of the widget (e.g. a list item)
- the abstract class defines the methods that need to be implemented by the concrete widgets to be displayed in a list (e.g. title and subtitle of a list item)
- for each different list item type, create an individual class that implements the abstract list item class
- store the different list items (types) in a `List<ListItem` collection
- `:::dart ListView.builder()` constructor converts each list item (e.g. `ListItem`) into a widget
