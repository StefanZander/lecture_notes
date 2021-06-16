# Threads and Thread Communication


## What are Threads and why use them ?

Threads keeps to UI Thread from having to perform resource or run-time intensive operations that would slow down an app or programm. 

A common way to prevent this is to execute runtime intensive operations in separate **runtime environments** called **threads**.

Those threads will be executed in parallel to a main thread (in particular on multi-core hardweare architectures) a


## How to implement Threads in Java

There are two methods on how to implement Threads in Java:

1. Using a **individual class** that extends `Thread` and overrides the `run()` method:
    ```java
    public class Main extends Thread {
        public void run() {
            System.out.println("This code is running in a thread");
        }

        public static void main(String args[]) {
            Main m = new Main();
            m.start();
        }
    }
    ```

2. Using a **individual class** that implements the `Runnable` interface and implements the `run()` method:
    ```java
    public class Main implements Runnable {
        public void run() {
            System.out.println("This code is running in a thread");
        }
    }
    ```


## Using Threads in Android 

Threads can be implemented in a separate class or added to a method's body in form of **an annonymous Thread object** that takes an implementation of the `Runnable` interface in form of an annonymous inner class passed to its constructor.

```java
public void anIndividualMethod() {
    new Thread(new Runnable() {
        @Override
        public void run() {
            try {
                JSONObject obj = httpRequest.sendHttp("scanChannels");
            } catch (IOException e) {
                Log.e(TAG, e.getMessage());
            } catch (JSONException e) {
                Log.e(TAG, e.getMessage());
            }
        }
    }).start(); // don't forget to start the Thread obj
}
```







## Thread Communication
A common way for threads or AsyncTasks to communicate with the UI thread from which they were initiated is via __Handler__.

![](./figures/handler.png)_A handler receives messages from background threads and updates views on the UI thread (Source: [stackoverflow.com](https://stackoverflow.com/questions/13840007/what-exactly-does-the-post-method-do))_ 

Handler encapsulate a __message queue__ (the Looper) that allows a Thread (incl. the UI thread) to receive messages from other Threads.

For processing received messages, the Thread in which the handler was instantiated has to implement the `handleMessage()` callback method.

`:::java public void handleMessage (Message msg)` 

In that way, handlers allow the realization of an **asynchronous communication** between different threads.


### Communication via Message Handlers

The Thread requires a reference of the Handler instance of the receiving Thread.

```java hl_lines="8 9 10 11 12"
public void doChannelScanAsThread(View view) {
    new Thread(new Runnable() {
        @Override
        public void run() {
            try {
                JSONObject obj = httpRequest.sendHttp("scanChannels");

                Message msg = new Message();
                Bundle bundle = new Bundle();
                bundle.putString(MainActivity.HANDLER_MESSAGE_KEY, obj.toString());
                msg.setData(bundle);
                mMessageHandler.sendMessage(msg);
            }
            ...
```

### Implementing the Handler

The main (or receiving) Thread needs to instantiate a new message handler and pass this instance as references to the threads it wants to receive messages from.

```java
// The Handler object used to receive Message objects from Threads (since they can't write to widgets created by main thread)
private Handler mMessageHandler;

// Instantiate Handler that receives messages from Threads or AsyncTasks
// see https://stackoverflow.com/questions/13840007/what-exactly-does-the-post-method-do
this.mMessageHandler = new Handler(getMainLooper()) {
    @Override
    public void handleMessage(Message msg) {
        super.handleMessage(msg);
        if (msg.what == MAIN_ACTIVITY_TOAST_MESSAGE_INT_KEY) {
            Toast.makeText(getApplicationContext(),(String)msg.obj, Toast.LENGTH_SHORT).show();
        } else {
            txtResponse.append("\n" + msg.getData().getString(HANDLER_MESSAGE_KEY));
        }
    }
};
```


### Invoking Commands on UI Elements of the UI Thread

Another possibility on how to pass data to the UI Threads is via the `post()` methods of its UI elements.

**Example**
```java hl_lines="8 9 10 11 12 13"
public void doChannelScanAsThread(View view) {
    new Thread(new Runnable() {
        @Override
        public void run() {
            try {
                JSONObject obj = httpRequest.sendHttp("scanChannels");

                txtResponse.post(new Runnable() {
                    @Override
                    public void run() {
                        txtResponse.setText(obj.toString());
                    }
                });
            } catch (IOException e) {
                Log.e(TAG, e.getMessage());
            } catch (JSONException e) {
                Log.e(TAG, e.getMessage());
            }
        }
    }).start();
}
```





## Invoking Threads

There are several ways on how to realize concurrent operations or tasks

1. By subclassing the `AsyncTask` class and implementing a new AsyncTask
2. By implementing the runnable interface and passig it to as argument to  `:::java AsyncTask.execute(new Runnable() {...} )`
3. By creating a new class and implementing the `Runnable` interface
4. By using the `Thread` class from the `java.lang.Thread` package
5. By using classes from the `java.util.concurrent` package 

In this lecture, we only concentrate on the first three methods and specifically investigate AsyncTasks.