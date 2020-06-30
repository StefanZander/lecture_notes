# Thread Communication

A common way for threads or AsyncTasks to communicate with the UI thread from which they were initiated is via __Handler__.

Handler encapsulate a message queue (the Looper) that allows a Thread (incl. the UI thread) to receive messages from other threads.

To process received messages, the Thread in which the handler was instantiated has to implement the `handleMessage()` callback method.

In that way, handlers realise an ansynchronous communication between different threads.

## Invoking Threads

There are several ways on how to realize concurrent operations or tasks

1. By subclassing the `AsyncTask` class and implementing a new AsyncTask
2. By implementing the runnable interface and passig it to as argument to  `AsyncTask.execute(new Runnable() {...} )`
3. By creating a new class and implementing the `Runnable` interface
4. By using the `Thread` class from the `java.lang.Thread` package
5. By using classes from the `java.util.concurrent` package 

In this lecture, we only concentrate on the first three methods and specifically investigate AsyncTasks.