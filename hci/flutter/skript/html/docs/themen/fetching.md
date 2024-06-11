# Fetch Data from the Internet

!!! success "Key Points"
    - Fetching data from the internet is usually executed asynchronously using specific libraries the allow for making HTTP requests.
    - Data fetched from APIs are usually encoded in the JSON format and need to mapped internally to a custom data structure. This process is called **deserialization**.
    - In order to make HTTP requests set the corresponding *permissions* (Android) and/or *entitlements* (macOS).
    - Use the `dart:html` package to make HTTP requests.
    - The response is usually stored in a `Future`. 
    - A `Future` is a core Dart class for working with asynchronous operations. A Future object represents a potential value or error that will be available at some time in the future.
    - The `http.Response` class contains the data received from a successful http call.
    - To display the data on screen, use the [FutureBuilder](https://api.flutter.dev/flutter/widgets/FutureBuilder-class.html) widget. The FutureBuilder widget comes with Flutter and makes it easy to work with asynchronous data sources.
    - :fontawesome-regular-thumbs-down: Bad practice: Do not place or execute API calls in `build()` methods.
    - Before you request data from an API, test it using common API/endpoint test tools or IDE extensions.


!!! note "Recommended Learning Resources"
    - Read in this cookbook how to fetch data from the internet: <https://docs.flutter.dev/cookbook/networking/fetch-data>
    - Learn the handling and usage of Futures in Flutter/Dart: <https://api.flutter.dev/flutter/dart-async/Future-class.html>
    - Learn how to use the FutureBuilder class to display asynchronous data: <https://api.flutter.dev/flutter/widgets/FutureBuilder-class.html>
    - :fontawesome-regular-thumbs-up: Learn more about different network topics; the following page provides a good overview of the different related topics: <https://docs.flutter.dev/cookbook/networking>