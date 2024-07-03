# JSON

!!! success "Key Points"
    - Parsing operations in computationally expensive operations in general should not be executed in the main thread of an application.
    - Since Flutter is a single threaded framework (or has a single threaded runtime environment) it is necessary to execute the parsing operation asynchronously.
    - Flutter provides the [Isolate] class for executing computationally expensive background threads
    - Use the [compute()](https://api.flutter.dev/flutter/foundation/compute.html) function provided by Flutter to shift expensive parsing operations ot a separate background isolate.
    - Isolates **communicate** by passing messages back and forth. These messages can be primitive values, such as `null`, `num`, `bool`, `double`, or `String`, or simple objects such as  `List<Photo>`.



!!! note "Recommended Learning Resources"
    - Learn how to parse JSON in the background of your Flutter app: <https://docs.flutter.dev/cookbook/networking/background-parsing>
    - This guide provides an in-depth description with many code examples about how to parse JSON: <https://codewithandrea.com/articles/parse-json-dart/>
    - Get more information about the `compute()` function: <https://api.flutter.dev/flutter/foundation/compute.html>
