# AsyncTask: Concurrent Programming in Android 

!!! abstract 
    **Objectives**

    - [x] You know the basic constituents of Android's AsyncTask
    - [x] You know how to subclass the AsyncTask class
    - [x] You can use AsyncTask to outsource computationally extensive tasks from the UI thread

## Introduction

AsyncTask enables to keep the UI thread from having to perform computational expensive operations. 
This class allows you to **perform background operations** asynchronously and publish results on the UI thread without having to manipulate threads and/or handlers.

AsyncTask is designed to be a **helper class** around `Thread` and `Handler` and does _not_ constitute a generic threading framework. 
AsyncTasks should ideally be used for **short operations** (a few seconds at the most). 

!!! note
    __Use a Threading Framework for Long-Running Operations__  
    If you need to keep threads running for long periods of time, it is highly recommended you use the various APIs provided by the `java.util.concurrent` package such as [Executor](https://developer.android.com/reference/java/util/concurrent/Executor.html), [ThreadPoolExecutor](https://developer.android.com/reference/java/util/concurrent/ThreadPoolExecutor.html) and [FutureTask](https://developer.android.com/reference/java/util/concurrent/FutureTask.html).


## Structure

<!-- An asynchronous task is defined by a **computation** that runs on a **background thread** and whose result is **published on the UI thread**.  -->

An asynchronous task is defined by **3 generic types**: 

* `Params` – the type of the parameters sent to the task upon execution.
* `Progress` – the type of the progress units published during the background computation. 
* `Result` – the type of the result of the background computation.

!!! note
    __Set Unused Types to `Void`__
    Not all types are always used by an asynchronous task. To mark a type as unused, simply use the type `Void`:

    `:::js private class MyTask extends AsyncTask<Void, Void, Void> { ... }`


An asynchronous task defines **4 callback methods** (=*steps*); when an asynchronous task is executed, the task goes through the following steps

1. `:::js onPreExecute()`  invoked on the _UI thread_ before the task is executed. This step is normally used to setup the task, for instance, by showing a progress bar in the UI.
     
2. `:::js doInBackground(Params...)` invoked on the _background thread_ immediately after `:::js onPreExecute()` finished execution. This step is used to perform background computation that can take a long time. The `Params` parameters of the asynchronous task are passed to this step. The result of the computation must be returned by this step and will be passed to `:::js onPostExecute(Result)`. This step can also use `:::js publishProgress(Progress...)` to publish one or more units of progress. These values are published on the UI thread, in the `:::js onProgressUpdate(Progress...)` step.

3. `:::js onProgressUpdate(Progress...)` invoked on the _UI thread_ after a call to `:::js publishProgress(Progress...)`. The timing of the execution is undefined. This method is used to display any form of progress in the user interface while the background computation is still executing. For instance, it can be used to animate a progress bar or show logs in a text field. 

4. `:::js onPostExecute(Result)` invoked on the _UI thread_ after the background computation finishes. The result of the background computation is passed to this callback method as a parameter.

!!! note
    **Pay Attention to where a Method is Executed**  
    Please pay close attention to which methods are exectuted by the **UI thread** and which by the **background thread**. This distinction is important as UI elements (=*views defined in the activity's layout*) can only by manipulated by the UI thread. Trying to manipulate them from a method executed by the background thread will result in an exception and termination.


## Usage

AsyncTask must be **subclassed** to be used. 
The subclass will override at least one method (`:::js doInBackground(Params...)`), and most often will override a second one (`:::js onPostExecute(Result)`).

The following example from the [official documentation](https://developer.android.com/reference/android/os/AsyncTask) demonstrates the usage of AsyncTask:

```java
private class DownloadFilesTask extends AsyncTask<URL, Integer, Long> {
    protected Long doInBackground(URL... urls) {
        int count = urls.length;
        long totalSize = 0;
        for (int i = 0; i < count; i++) {
            totalSize += Downloader.downloadFile(urls[i]);
            publishProgress((int) ((i / (float) count) * 100));
            // Escape early if cancel() is called
            if (isCancelled()) break;
        }
        return totalSize;
    }

    protected void onProgressUpdate(Integer... progress) {
        setProgressPercent(progress[0]);
    }

    protected void onPostExecute(Long result) {
        showDialog("Downloaded " + result + " bytes");
    }
}
```

Once created, an instance of the task can be created and executed rather simply:

```java
new DownloadFilesTask().execute(url1, url2, url3);
```

## Canceling a Task

A task can be cancelled at any time by invoking `:::js cancel(boolean)`. Invoking this method will cause subsequent calls to `:::js isCancelled()` to return true. After invoking this method, `:::js onCancelled(java.lang.Object)`, instead of `:::js onPostExecute(java.lang.Object)` will be invoked after `:::js doInBackground(java.lang.Object[]` returns. To ensure that a task is cancelled as quickly as possible, you should always check the return value of `:::js isCancelled()` periodically from `:::js doInBackground(java.lang.Object[])`, if possible (inside a loop for instance.)


## Threading Rules
There are a few **threading rules** that must be followed for this class to **work properly**:

* The `AsyncTask` class MUST be loaded on the **UI thread**. This is done automatically as of `Build.VERSION_CODES.JELLY_BEAN`.
* The **task instance** MUST be created on the UI thread.
* `:::js execute(Params...)` MUST be invoked on the UI thread.
* Do NOT call `:::js onPreExecute()`, `:::js onPostExecute(Result)`, `:::js doInBackground(Params...)`, `:::js onProgressUpdate(Progress...)` manually.
* The task can be **executed only once** (an exception will be thrown if a second execution is attempted.)


## Examples

### Example #1: Subclassing AsyncTask

```java
public class ScanChannelsTask extends AsyncTask<String, Integer, JSONObject> {

    public static final String TAG = ScanChannelsTask.class.getSimpleName();

    private Context context;
    private HttpRequest request;
    private boolean running;
    private Handler handler;

    public ScanChannelsTask(HttpRequest request, Context context, Handler handler) {
        this.request = request;
        this.context = context;
        this.handler = handler;
    }

    /**
     * Set the message handler through which the {@link AsyncTask} can communicate with
     * its main (ie. calling) activity
     * @param handler
     */
    public void setHandler(Handler handler) {
        this.handler = handler;
    }

    @Override
    /**
     * This method contains the actual task's logic, ie.,
     * the computational steps the task is intended to perform.
     * Here the method takes the TV-Simulator's IP and command
     * in form of a {@link String} and performs the HTTP request.     
     * The result will be passed to a JSON object
     */
    protected JSONObject doInBackground(String[] params) {
        JSONObject obj = null;

        if (params[0] != null) {
            try {
                obj = this.request.sendHttp(params[0]);
            } catch (IOException e) {
                e.printStackTrace();
            } catch (JSONException e) {
                e.printStackTrace();
            }
        }
        return obj; // don't forget to return result for/to onPostExecute()
    }


    @Override
    /**
     * Method is called from the UI thread.
     * Creates a Toast message to indicate that the task is running
     */
    protected void onPreExecute() {
        Toast.makeText(this.context, "Started Channel Scan", Toast.LENGTH_SHORT).show();
    }

    @Override
    /**
     * From this method, it is possible to modify the UI
     * since it is executed in the main UI Thread
     */
    protected void onPostExecute(JSONObject jsonObject) {
        super.onPostExecute(jsonObject);
        try {
            JSONArray json_channels = jsonObject.getJSONArray("channels");
            JSONObject obj = (JSONObject)json_channels.get(0); // trying to obtain first channel obj.
        } catch (JSONException e) {
            e.printStackTrace();
        }

        // Send data to the activity to have them displayed in the log window   
        Message msg = new Message();
        Bundle bundle = new Bundle();
        bundle.putString(MainActivity.HANDLER_MESSAGE_KEY, jsonObject.toString());
        msg.setData(bundle);
        this.handler.sendMessage(msg);
        Toast.makeText(this.context, "Channel Scan finished", Toast.LENGTH_SHORT).show();
    }
}
```

### Example #2: Passing Runnable to AsyncTask's execute Method

```java
/**
* Sends the content from txtCommand widget as command to TV Server
*
* Shows Option #2 on instantiating an {@link AsyncTask}
*
* {@link AsyncTask}s can also be instantiated by implementing the {@link Runnable} interface
* (and its run() method) in form of an annonymous inner class that is passed as argument to
* the {@link AsyncTask}'s execute() method
*/
public void sendCommandToTvServer(View view) {
     final String command = txtCommand.getText().toString();
     txtResponse.append("\nSending Command to TV Server: " + command);

     AsyncTask.execute(new Runnable() {
          @Override
          public void run() {
               try {
               JSONObject obj = httpRequest.execute(command);
               Message msg = new Message();
               Bundle bundle = new Bundle();
               bundle.putString(MainActivity.HANDLER_MESSAGE_KEY, obj.toString());
               msg.setData(bundle);
               /*
               Example #1
               SZA: It is important to use sendMessage here;
               otherwise an Exception is thrown (see Example #3)
               */
               mMessageHandler.sendMessage(msg); //
               /*
               Example #2
               Alternatively, view updates can be issued via implementing 
               the Runnable Interface and passing it to the view's post()-method
               as an anonymous inner class.
               That way, UI thread elements can be updated from background threads
               See https://stackoverflow.com/questions/13840007/what-exactly-does-the-post-method-do 
               */
               txtResponse.post(new Runnable() {
                    @Override
                    public void run() {
                         txtResponse.append("\nResult created...");
                    }
               }) ;
               /*
               Example #3
               SZA: Doesn't work --> Main views can not be modified
               from runnable objects; only main thread can update its views
               */
               // txtResponse.setText("\n"+ obj.toString());
               } catch (IOException e) {
               e.printStackTrace();
               } catch (JSONException e) {
               e.printStackTrace();
               }
          }
     });
}
```


## What you have Learned

!!! abstract
    __After having finished this lession, you know__

    - [ ] ...how to the basic types and callback methods of Android's AsyncTask
    - [ ] ...how to implement an AsyncTask for an individual task
    - [ ] ...the responsibilities of each callback method
    - [ ] ...which callback methods are called by the UI thread and which by the background thread  
    - [ ] ...how to send data from the AsyncTask to the UI thread


## Disclaimer

Most of the information in this lecture has been compiled from the official Android documentation pages:

* <https://developer.android.com/reference/android/os/AsyncTask>

