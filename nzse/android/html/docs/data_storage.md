# Daten-Speicherung in Android


Last Updated: 2019-06-04


!!! abstract 
    **Lernziele**

    - [x] Sie kennen die verschiedenen Möglichkeiten, wie sich Daten unter Android persistent speichern lassen
    - [x] Sie kennen die Vor- und Nachteile der verschiedenen Speichermöglichkeiten
    - [x] Sie können die hier vorgestellten Speichermechanismen in einer Android App implementieren bzw. für einen konkreten Anwendungsfall einsetzen

!!! note
    **Hinweis**: Die hier vorgestellten Informationen stammen aus der hervorragenden Zusammenschrift der Seite
    <https://www.big-app.de/daten-speicher-in-android/>


----

**Update**:  
Nachstehend finden sich die Beispiele zur Speicherung von Zuständen von UI-Elementen aus der Vorlesung:

Speicherung von Zustandsinformationen im internen Speicher des Gerätes:
```java
private boolean saveState() {
    try {
        DataOutputStream dos = new DataOutputStream(openFileOutput(FILENAME, MODE_PRIVATE));
        dos.writeInt(sekVolume.getProgress());
        dos.flush();
        dos.close();
        lblMessage.append("\n\nState successfully stored...");
        return true;
    } catch (FileNotFoundException e) {
        lblMessage.setText(e.getMessage());
        e.printStackTrace();
    } catch (IOException e) {
        lblMessage.setText(e.getMessage());
        e.printStackTrace();
    }
    return false;
}
```

Laden von Zustandsinformationen aus dem internen Speicher:
```java
private boolean loadState() {
    try {
        DataInputStream dis = new DataInputStream(openFileInput(FILENAME));
        int volume = dis.readInt();
        if (volume > lowerBound && volume < upperBound) {
            sekVolume.setProgress(volume);
        }
        dis.close();
        lblMessage.append("\nState successfully loaded...");
        return true;
    } catch (IOException e) {
        lblMessage.setText(e.getMessage());
        e.printStackTrace();
    }
    return false;
}
```

Laden von Zustandsinformationen beim Erzeugen der Activity in `onCreate()`:
```java
File file = new File(getApplicationContext().getFilesDir(),FILENAME);
if (file.exists()) {
    loadState();
} else {
    lblMessage.append("\n\nFile not found...");
}
```

----

## Welche Daten-Speicher gibt es in Android?

Für die Speicherung persistenter Daten bietet Android mehrere Lösungen an, die von den Bedürfnissen und Wünschen des Android-Entwicklers abhängig sind. So gibt es **mehrere Daten-Speicher**, die die Daten entweder **privat** ablegen oder für andere Apps bzw. Benutzer **öffentlich** zur Verfügung stellen. Zudem ist die Wahl der Speicherlösung davon abhängig, wieviel Speicherplatz die Daten benötigen und auf welche Weise die Daten gespeichert werden sollen. 

Man unterscheidet allgemein zwischen folgenden Speicherlösungen:

1. **Speicher-Lösungen in Android (auf dem Gerät)**:

    - Interner / Externer Speicher
    - SQLite-Datenbank
    - SharedPreferences
    - Content Provider
    - Speicher-Lösungen außerhalb von Android (außerhalb des Geräts):

2. **Netzwerkspeicher**
    - Firebase
    - Cloud
    - etc.

!!! note
    **Info**: In diesem Artikel wird lediglich ein Überblick zu den verschiedenen Speicherlösungen in Android gegeben und nicht zu sehr ins Detail gegangen. Zudem geht der Artikel nicht auf die Speicherlösungen außerhalb von Android ein.


## Interner Speicher

Bei dieser Speicherlösung werden Daten standardmäßig als "*privat*" im internen Speicher des Geräts abgelegt, d.h. eine fremde App hat *keinen* Zugriff auf diese Daten. Die Daten werden auch nur solange im internen Speicher gehalten, bis der Benutzer die App vom Gerät entfernt. 

Im internen Speicher können dabei z.B. folgende Dateien abgespeichert werden:

- Texte
- Bilder
- Videos
- Lieder

Diese Dateien werden auf dem Gerät im Verzeichnis  

`data/data/package_name/files`  

abgelegt und sind **permanent** vorhanden. 

Eine App hat zudem immer eine **Schreib- und Lese-Berechtigung** für den internen Speicher und es muss somit *keine* entsprechende Berechtigung in die Manifest-Datei eingetragen werden. 

Es gibt auf dem Gerät **zwei unterschiedliche Verzeichnisse**, die sich nach der **Speicherart** unterscheiden:

1. **Permanenter Speicher**: Für dauerhafte Daten, die über `getFilesDir()` erreichbar sind
2. **Temporärer Speicher**: Für Cache-Daten, die über `getCacheDir()` erreichbar sind 

### Einsatzzweck
Diese Speicherlösung ist ideal, wenn du sicher sein möchtest, dass weder der Benutzer noch andere Apps auf deine Dateien zugreifen können sollen.

### Schreiben der Daten
Um Daten in den **internen Speicher** schreiben zu können, rufst du die Methode `openFileOutput()` mit dem **Namen** der Datei und dem **Modus** auf. 

Als Modus kannst du, je nach Verwendungszweck, die folgenden beiden Modi verwenden:

- `MODE_PRIVATE`: Es wird eine private Datei erstellt, d.h. nur die eigenen App hat Zugriff darauf
- `MODE_APPEND`: Wenn eine Datei bereits existiert, dann werden Daten ans Datei-Ende geschrieben

Die Methode `openFileOutput()` gibt eine Instanz von `FileOutputStream` zurück, mit der du dann die Methode `write()` aufrufen kannst, um in die Datei schreiben zu können. Am Schluss schließt du den Datenstrom mit der `close()`-Methode.

Beispiel: 
```java
String s_text = "Beispieltext";
FileOutputStream myFOS = 
    openFileOutput("dateiname.txt",MODE_PRIVATE);
myFOS.write(s_text.getBytes());
myFOS.close();
```

### Lesen der Daten:
Um aus der soeben erstellten Datei lesen zu können, rufst du die Methode `openFileInput()` mit dem Namen der Datei auf und bekommst als Rückgabewert eine Instanz von `FileInputStream` zurück. Danach rufst du mit dieser Instanz die `read()`-Methode auf, um aus der Datei byteweise zu lesen. Am Ende schließt du den Datenstrom wieder über die `close()`-Methode.

Beispiel:
```java
FileInputStream myFIS = openFileInput("dateiname.txt");
int i_character;
String s_temp="";
while( (i_character = myFIS.read()) != -1) {
  s_temp = s_temp + Character.toString((char)i_character);
}
myFIS.close();
```


## Externer Speicher
Diese Speicherlösung dient zum Ablegen von Daten auf dem **externen Speicher** des Geräts, die standardmäßig "*öffentlich*" zugänglich sind, d.h. eine **fremde App hat vollen Zugriff** auf diese Daten und ein Benutzer kann die Daten ändern. 

Dabei wird allgemein zwischen folgenden beiden externen Speichern unterschieden:

- Externer Speicher, der **entfernt** werden kann (z.B. MicroSD-Karte)
- Externer Speicher, der **im Gerät selbst vorhanden** ist und sich somit *nicht* entfernen lässt 

Die Daten auf dem externen Speicher werden dauerhaft gespeichert und selbst dann noch behalten, wenn die App gelöscht wird. 

### Einsatzzweck
Diese Speicherlösung ist ideal für Dateien, die 

- keine Zugriffsbeschränkungen benötigen
- auch anderen Apps zur Verfügung stehen sollen
- der Benutzer auch mit seinem Computer erreichen können soll

### Berechtigungen
Um vom bzw. in den externen Speicher zu lesen oder zu schreiben, musst du die folgenden Berechtigungen in die Manifest-Datei oberhalb des `Application`-Attributs schreiben:

Lesen und Schreiben:  
`<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />`

Nur zum Lesen:  
`<uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />`

### Überprüfung, ob externes Medium vorhanden ist
Ein externes Speichermedium kann möglicherweise nicht verfügbar sein, z.B. weil der Benutzer die SD-Karte entfernt hat. Deswegen solltest du vor dem Zugriff *immer* überprüfen, ob das Medium verfügbar ist. Dazu frägst du den Zustand des externen Speichers ab, indem du die Methode  `getExternalStorageState()` aufrufst und überprüfst, ob der zurückgegebene Zustand gleich `MEDIA_MOUNTED` ist.

Beispiel:
```java
public boolean isExternalStorageWritable() {
    String s_zustand = Environment.getExternalStorageState();
     if (Environment.MEDIA_MOUNTED.equals(s_zustand)) {
        return true;
     }
    return false;
}
```

### Schreiben der Daten
Bevor du Daten in den externen Speicher schreibst, musst du dir überlegen, ob du diese in ein **öffentliches** oder ein **privates Verzeichnis** ablegen möchtest. 
Du besorgst dir also erstmal den Zugriff auf eines der beiden Verzeichnisse über die folgenden Methoden:

1. `getExternalStoragePublicDirectory()`

    Mit dieser Methode bekommst du Zugriff auf ein öffentliches externes Speicherverzeichnis. 

    In Android gibt es beispielsweise folgende öffentliche externe Verzeichnisse:

    - `DIRECTORY_ALARMS`
    - `DIRECTORY_DCIM`
    - `DIRECTORY_DOCUMENTS`
    - `DIRECTORY_DOWNLOADS`

    Sobald du den Zugriff auf eines der obigen Verzeichnisse hast, erstellst du eine Datei mittels des File-Konstruktors und übergibst diesem sowohl das Verzeichnis, als auch den Dateinamen.

    Beispiel:
    ```java
    File myFolder = Environment.getExternalStoragePublicDirectory(
        Environment.DIRECTORY_DOCUMENTS);
    File myFile = new File(myFolder, "beispieldatei.txt");
    ```

2. `getExternalFilesDir()`

    Diese Methode ermöglicht den Zugriff auf ein privates externes Speicherverzeichnis.

### Lesen der Daten
Um Daten aus dem externen Speicher zu lesen, stehen dir die gleichen Methoden wie beim Schreiben zur Verfügung:

- `getExternalStoragePublicDirectory()`
- `getExternalFilesDir()`

Wie du auf diese Methoden verwenden kannst, wurde bereits im Abschnitt "Schreiben der Daten" erklärt und deswegen an dieser Stelle nicht erneut erklärt. Danach rufst du die Methode `openFileInput()` auf und übergibst dieser Methode den Dateinamen. Als Rückgabewert bekommst du ein `FileInputStream`-Objekt, welches du zur weiteren Verwendung benötigst. Anschließend liest du mittels der `read()`-Methode die Daten aus und schließt den Datenstrom am Ende mit `close()`.

Beispiel:
```java
FileInputStream myFIS = openFileInput("dateiname.txt");
int i_read = -1;
StringBuffer sb_puffer = new StringBuffer();
while(read = myFIS.read()) != -1) {
   sb_puffer.append((char)read);
}
myFIS.close();
```


## SQLite-Datenbank
Bei SQLite handelt es sich um eine abgespeckte und bereits in Android **integrierte relationale Datenbank** zur Speicherung strukturierter und "*privater*" Daten (z.B. Kontakte). Bei SQLite wird für den Zugriff die **Datenbank-Abfragesprache SQL** verwendet und alle Daten werden auf dem Gerät im Verzeichnis 

`data/data/package_name/databases` 

abgelegt. 

Wenn du eine SQLite-Datenbank verwendest, laufen alle Interaktionen mit der Datenbank über eine Instanz der Klasse `SQLiteOpenHelper`, die deine SQL-Anfragen ausführt und die Datenbank für dich verwaltet.

### Einsatzzweck
Diese Speicherlösung ist ideal für sich wiederholende und strukturierte Daten.


## Shared Preferences
Bei dieser Speicherlösung werden primitive Daten als **Schlüssel-Wert-Paare** in einer XML-Datei im Geräte-Verzeichnis 

`data/data/package_name/shared-prefs` 

abgelegt. Die Daten bleiben während der gesamten Benutzersitzung erhalten und sind selbst dann noch vorhanden, wenn die App von Android beendet wurde. 

Es können dabei folgende primitive Datentypen gespeichert werden:

- `boolean` (true, false)
- `float` (12.4f, 2.9f,...)
- `long` (325l, ...)
- `int` (3, 6, 2, ...)
- `String` (Name, Straße,...)
- `Set<String>`

### Einsatzzweck
Diese Speicherlösung ist ideal für Daten, die über **mehrere Benutzer-Sitzungen hinweg** gespeichert werden sollen, wie z.B. Benutzer-Einstellungen oder der Punktestand in einem Spiel.

### Erstellung einer SharedPreference-Datei
Um eine SharedPreference-Datei anzulegen, musst du *eine* der folgenden Methode verwenden:

1. `:::js getSharedPreferences(String s_name, int mode)`

    Diese Methode verwendest du, wenn du **_mehrere_ SharedPreference-Dateien** benötigst. 

    Dieser Methode übergibst du als ersten Parameter den Namen zur Datei-Unterscheidung und als zweiten Parameter den Modus. Hier gibt es zwar mehrere Modi, aber Android empfiehlt aus Sicherheitsgründen nur noch den `MODE_PRIVATE` zu verwenden.

2. `:::js getPreferences(int mode)`

    Diese Methode verwendest du, wenn du nur ***eine* SharedPreference-Datei** benötigst. 

    Hier musst du lediglich den Modus als einzigen Parameter übergeben, da du ja keinen Namen zur Datei-Unterscheidung brauchst.

### Daten in SharedPreference schreiben 
Die Daten werden folgendermaßen in eine SharedPreference-Datei geschrieben:

1. Erzeuge eine Referenz auf ein SharedPreference-Objekt mittels der folgenden Methoden:

    - `getSharedPreference()`
    - `getPreference()`

2. Rufe den `SharedPreference-Editor` auf, um die SharedPreference-Datei bearbeiten zu können

3. Füge mit diesem Editor und einer der `putXXX()`-Methoden, wie z.B. `putString()` Daten in die SharedPreference-Datei ein

4. Bestätige das Hinzufügen der Daten mittels der `commit()`- oder `apply()`-Methode

    Beispiel:
    ```java
    public static final String s_sharedPref = "myPrefsName";  
    mySharedPreferences = 
        getSharedPreferences(s_sharedPref, 0); //0 = MODE_PRIVATE
    SharedPreference.Editor myEditor = mySharedPreferences.edit();
    myEditor.putString(
        "CurrentChannel", "ARD"); 
        //CurrentChannel = Schlüssel und ARD = Wert
    myEditor.apply();
    ```

### Daten aus SharedPreference auslesen
Die Daten für SharedPreferences werden folgendermaßen ausgelesen:

1. Erzeuge eine Referenz auf ein SharedPreference-Objekt mittels der folgenden Methoden: 

    - `getSharedPreference()`
    - `getPreference()`

2. Verwende den "Schlüssel" für denjenigen Wert, den du auslesen möchtest

3. Verwende die zum Datentyp passende Methode zum Auslesen der Daten (z.B. `getInt()`, `getLong()`, ...)

    !!! note
    **Info**: Der zweite Parameter der `getXXX()`-Methode sollte ein Ersatzwert sein, falls kein aktueller Wert zu ermitteln ist (z.B. weil es keinen Schlüssel mit dem angegebenen Namen gibt)

    Beispiel: 
    ```java 
    SharedPreferences mySharedPreferences = 
        getSharedPreferences(s_sharedPref, 0);
    String s_name = mySharedPreferences.getString("Name", ""); 
    ```

## What you have Learned

!!! abstract
    __After having finished this lession, you know...__

    - [ ] ...how to store private or public data in Android 
    - [ ] ...how the different storage strategies work and how you use them
    - [ ] ...how to implement a specific strategy based on the use case at hand.


## Disclaimer

Most of the information in this lecture has been compiled from the following sources:

* <https://www.big-app.de/daten-speicher-in-android/>
