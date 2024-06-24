# Asynchronity in Dart and Flutter

!!! success "Key Points"
    - Flutter is single threaded and event-driven and operates according to the Hollywood-principle (_"You don't call us, we call you!"_).
    - Single threaded frameworks require the concept of asynchronity in order to execute tasks in parallel (e.g. fetching data from an endpoint while listening for user inputs).
    - Futures are a key concept in asychronous programming. 
        - A `Future` represents a potential value (or error in case an operation does not finish successfully) that will be available at some time in the future.
        - Futures are used for operations that take time to complete, such as fetching data from the internet or reading a file.
    - `async` and `await` are used for executing functions asynchronously.
        - `async`: Marks a function as asynchronous, allowing the use of `await` within it.
        - `await`: Pauses the execution of an `async` function until the `Future` completes, making the code look synchronous and easier to read.
    - **Streams** represent a sequence of asynchronous data events. They are useful for handling multiple data points over time. They are used for scenarios like listening to user inputs, real-time data updates, and handling continuous data streams.
    - Use `try-catch` blocks to handle errors in asynchronous functions to prevent crashes and manage exceptions gracefully.
    - A `FutureBuilder` widget builds itself based on the latest snapshot of interaction with a Future. The `FutureBuilder` widget is ideal for asynchronous operations that are triggered once, like fetching data from an API.
    - The **event loop** is the mechanism that manages the execution of code, event handling, and the completion of `Future` objects.
    -  **Isolates** are independent workers that run on separate memory heaps, useful for heavy computational tasks. Use isolates for parallel execution, improving performance for CPU-bound tasks.


!!! info "Recommended Learning Resources"
    - A very good and comprehensive introduction to asychronous programming in Dart and Flutter. Highly recommended to read: <https://dart.dev/libraries/async/async-await>
    - This video from the official Flutter Youtube-channel greatly explains the usage of futures in combination with async and await to write asynchronous code in Dart: <https://youtu.be/SmTCmDMi4BY?si=rBatgx5pihJLy7qb>



## Some Examples

To be used in the lectures.

```dart
Future<int> _loadFromDisk() {
  return Future.delayed(const Duration(seconds: 4), () => 4711);
  // print('Data successfully loaded from disk.');
  // return 4711;
}

Future<String> _fetchNetworkData(int id) {
  return Future.delayed(
      const Duration(seconds: 2), () => 'JSON incomming for id $id...');
}

void createData() async {
  final id = await _loadFromDisk();
  print('id $id successfully loaded.');
  final data = await _fetchNetworkData(id);
  print('Data \"$data\" successfully finished.');
}

void main() {
  print('Starting the retrieval process...');
  createData();
  print('Hey, I (=app) want to remain responsive!');
  for (int i = 0; i < 10; i++) {
    print('...counting: $i');
  }
}
```