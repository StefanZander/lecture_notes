# Das Singleton-Entwurfsmuster

Mit dem Singleton-Entwurfsmuster kann eine Klasse die Kontrolle für die Erzeugung ihrer Instanzen übernehmen und sicherstellen, dass von ihr nur eine einzige Instanz (single) existiert.
Singletons gibt es in verschiedenen Ausprägungen (lazy-instantiation vs. )

## Einfaches Singleton

Achtung: Das einfache Singleton-Entwurfsmuster ist nicht Thread-safe. 

Es reicht aber für die Vorlesung und das Praktikum aus.

```java
package org.java.examples.singleton;

/*
 * Singleton class contains both: a template for its instance as well as methods for creating one(!) instance
 */
public class SimpleSingleton {

	private static SimpleSingleton instance = null; // holds the concrete instance created by the class
	private static int counter = 0; // counts the amount of instance calls
	private String name = ""; // simple member variable that carries a given name (for demonstration)
	
	/*
	 * Default constructor needs to be declared private so that objects can not be instantiated externally
	 */
	private SimpleSingleton() {
		
	}
	
	/*
	 * This method needs to be public AND static so that it can be called regardless of a concrete instance
	 */
	public static SimpleSingleton getInstance() {
		if (instance == null) {
			instance = new SimpleSingleton();
			System.out.println("Object created: " + instance.hashCode());
		}
		counter++;
		System.out.println("Object references returned: " + counter + " (hash: " + instance.hashCode() + ")") ;
		return instance;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public static int getCounter() {
		return counter;
	}
	
	public void print() {
		System.out.println("My name is '" + getName() + "' (current refs count: " + counter + ")");
	}

}
```

Aufgerufen wird das Singleton wie in folgendem Beispiel dargelegt 

```java
package org.java.examples.singleton;

public class SimpleSingletonTestApp {

	public static void main(String[] args) {
		
		SimpleSingleton mySingleton = SimpleSingleton.getInstance();
		
		mySingleton.setName("Hans");
		mySingleton.print();
		
		SimpleSingleton mySingleton2 = SimpleSingleton.getInstance();
		mySingleton2.setName("Rudi");
		
		mySingleton2.print(); // Rudi
		mySingleton.print(); // Rudi
	}
}
```


## Serialisierung (Speicherung) von Singletons

Die Speicherung von Singleton-Objekten ist insbesondere im Android-Umfeld sehr wichtig, da die aktuelle Activity-Instanz zerstört werden kann (bspw. durch Drücken des 'back'-Buttons) und somit die Referenz auf ein Datenmodellobjekt, welches die aktuellen Zustände der UI oder einer App hält, verloren geht bzw. bei der Neu-instanziierung ein zweites Objekt erzeugt wird und somit ungewünschte Seiteneffekte entstehen (können).

```java
package org.java.examples.singleton;

import java.io.InputStream;
import java.io.Serializable;

public class SerializedSingleton implements Serializable {

    private static final long serialVersionUID = -7604766932017737115L;

    private SerializedSingleton(){}
    
    private static class SingletonHelper{
        private static final SerializedSingleton instance = new SerializedSingleton();
    }
    
    public static SerializedSingleton getInstance(){
        return SingletonHelper.instance;
    }
    
    /**
     * Useful helper method!
     * 
     * Called by the readObject-method after all data is retrieved to return the correct object
     * see https://stackoverflow.com/questions/1168348/java-serialization-readobject-vs-readresolve
     * 
     * @return the Instance to which an {@link InputStream} is linked/assigned to, ie., the object
     *   to which an {@link InputStream} is read
     */
    protected Object readResolve() {
        return getInstance();
    }
    
}
```

Die Nutzung der Klasse wird in folgendem Anwendungscode demonstriert

```java
package org.java.examples.singleton;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInput;
import java.io.ObjectInputStream;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;

public class SingletonSerializedTest {

	public final static String STORAGE_LOCATION = "/Users/stefan/Google Drive/hda/LVAs/NZSE/Java/resources/singleton.ser";

	public static void main(String[] args) throws FileNotFoundException, IOException, ClassNotFoundException {

		SerializedSingleton instanceOne = SerializedSingleton.getInstance();
		
		// write object to file system
		ObjectOutput out = new ObjectOutputStream(new FileOutputStream(STORAGE_LOCATION));
		out.writeObject(instanceOne);
		out.close();

		System.out.println("instanceOne hashCode=" + instanceOne.hashCode()); // instanceOne hashCode=1476011703
		
		//de-serialize from file to object
		ObjectInput in = new ObjectInputStream(new FileInputStream(STORAGE_LOCATION));
		SerializedSingleton instanceTwo = (SerializedSingleton) in.readObject();
		in.close();

		System.out.println("instanceTwo hashCode=" + instanceTwo.hashCode()); // instanceTwo hashCode=1476011703

	}
}
```

Die Methode `protected Object readResolve()` sorgt dafür, dass das geladene Singleton-Object der aktuellen Referenz des Singletons übergeben wird. Ohne diese Methode würde eine neue Instanz erzeugt werden (_erkennbar an einem anderen Objekt-Hashcode_).



## Thread-Safe Singleton

Das folgende Singleton-Entwurfsmuster ist Thread-safe und nutzt hierfür das [initialization-on-demand holder idiom](https://de.wikipedia.org/wiki/Initialization-on-demand_holder_idiom).

Dieses Entwurfsmuster ist für fortgeschrittene Studierende und _NICHT_ klausurrelevant.

```java
package org.java.examples.singleton;

/**
 * Thread-safe implementation of a singleton
 * Does not require explicit synchronization
 * Uses the initialization-on-demand holder idiom that
 * makes uses of the class loader's own synchronisation mechanism
 * @author stefan zander
 *
 */
public class ThreadSafeSingleton {

	private ThreadSafeSingleton(){ }        

    private static class Holder {
       private static final ThreadSafeSingleton INSTANCE = new ThreadSafeSingleton();
    }

    public static ThreadSafeSingleton getInstance() {
        return Holder.INSTANCE;
    }

    // Aufruf wie gehabt mit 
    // ThreadSafeSingleton instance = ThreadSafeSingleton.getInstance()
}
```





