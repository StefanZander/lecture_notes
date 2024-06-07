# Persistence

Persistence denominates the aspect of storing data permanently by utilizing a storage infrastructure (e.g. local files, databases, key-value storage system).

!!! success "Key Points"
    - In addition to using a backend for data management and storage, data can be stored locally on a device.
    - Flutter provides three different ways for storing data locally
        - **SQLite** --- provides a database storage system with persistence and query capabilities.
        - **SharedPreferences** --- allow to store small collections of key-value-pairs using the [shared_preferences](https://pub.dev/packages/shared_preferences) plugin. 
        - **Files** --- allow to save data on the operating system's file system using the [path_provider](https://pub.dev/packages/path_provider) plugin with the [dart:io](https://api.flutter.dev/flutter/dart-io/dart-io-library.html) library.
    - SQLite should be used when large amounts of data need to be persisted. 
    - A database provides faster inserts, updates, and queries compared to other local persistence solutions.
    - Flutter apps can make use of the SQLite databases via the [sqflite](https://pub.dev/packages/sqflite) plugin available on pub.dev.
    - When working with databases secure your app against different attack vectors such as SQL injection etc.
    - If you retrieve data from the Internet and want to store it locally for later, offline usage, the preferred way is to store them in files. 
    - The `path_provider` plugin together with the `dart:io` library can be used to save files to the local file system.
    - If you want to store small collections of key-value-pairs, you can use the [shared_preferences](https://pub.dev/packages/shared_preferences) plugin provided by Flutter.
    - The shared_preferences plugin can be used to persist key-value data to disk on each platform Flutter supports.



!!! hint "Persistence in the semester project App"
    For the semester project app, you do _not_ need to implement a backend or use a backend service. Instead it is sufficient to **store data locally on the device** using either `SharedPreferences` and/or files. However, you can use SQLite if the team prefers that but it is not required. 


!!! info "Recommended Learning Resources"
    - Learn how to store data in files on the local file system: <https://docs.flutter.dev/cookbook/persistence/reading-writing-files>
    - Storing key-value-data using the `shared_preferences` plugin: <https://docs.flutter.dev/cookbook/persistence/key-value>
    - Learn how to persist data with SQLite: <https://docs.flutter.dev/cookbook/persistence/sqlite>
    - SQLite Tutorial: <https://www.sqlitetutorial.net/>
    - The sqflite plugin: <https://pub.dev/packages/sqflite>
