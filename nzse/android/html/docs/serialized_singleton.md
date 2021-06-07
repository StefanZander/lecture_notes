# Serialisierung (Speicherung) von Singletons

Die Speicherung von Singleton-Objekten ist insbesondere im Android-Umfeld sehr wichtig, da die aktuelle Activity-Instanz zerstört werden kann (bspw. durch Drücken des 'back'-Buttons) und somit die Referenz auf ein **Datenmodellobjekt**, welches die aktuellen Zustände der UI oder einer App hält, verloren geht bzw. bei der Neu-instanziierung ein zweites Objekt erzeugt wird und somit ungewünschte Seiteneffekte entstehen können.

!!!note  
    **Serialisierung von Klassen**  
    Damit Klasseninstanzen und insbesondere auch Singleton-Instanzen serialisiert werden können, muss die Klasse das Interface `Serializeable` implementieren. 


Das folgende Beispiel zeigt ein einfaches Singleton-Entwurfsmuster – in diesem Fall realisiert mittels einer privaten statischen Hilfsklasse – dessen Instanz serialisiert und damit persistiert werden kann:

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

Die Methode `protected Object readResolve()` sorgt dafür, dass das geladene Singleton-Object der aktuellen Referenz des Singletons übergeben wird. Ohne diese Methode würde eine neue Instanz erzeugt werden (_erkennbar an den unterschiedlichen Objekt-Hashcodes_).
