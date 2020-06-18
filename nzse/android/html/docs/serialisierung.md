<!-- # Java-Beispiel aus der Vorlesung -->
# Serialisierung und Input- / OutputStreams

Auf dieser Seite finden Sie die Java-Beispiele zu

* Serialisierbarkeit von Objekten
* Input- und OutputStreams zur Speicherung von serialisierten Objekten



## Serialisierbarkeit

Um Objekte in Java abspeichern zu können müssen diese serialisiert werden. Hierzu muss das Interface `Serializable` implementiert und ein Wert für die statische Variable `serialVersionUID` vergeben werden. Anhand der vergebenen Wertes lassen sich verschiedene Klassenversionen bei der Serialisierung von Objekten unterscheiden.

Die Datenmodellklasse in nachstehendem Beispiel implementiert das `Serializable` Interface und kann damit mittels einem OutputStream gespeichert (persistiert) und mittels einem InputStream geladen werden.

```java
package de.hda.nzse.examples.car;

import java.io.IOException;
import java.io.Serializable;
import java.util.Calendar;

public class Car implements Serializable {

	/**
	 * Generated default serialized version UID
	 */
	private static final long serialVersionUID = 1L;
	
	// Declaration of member variables
	private String typ = "unknown";
	private int power;
	private int manufacturingDate;
	
	// static class variable bound to class exclusively
	public static int exemplare = 0;
	
	// Constructor
	public Car(String typ, int power, int manufacturingDate) {
		super();
		this.typ = typ;
		this.power = power;
		this.manufacturingDate = manufacturingDate;
		exemplare += 1;
	}

	public String getTyp() {
		return typ;
	}

	public void setTyp(String typ) {
		this.typ = typ;
	}

	public int getPower() {
		return power;
	}

	public void setPower(int power) {
		this.power = power;
	}

	public int getManufacturingDate() {
		return manufacturingDate;
	}

	public void setManufacturingDate(int manufacturingDate) {
		this.manufacturingDate = manufacturingDate;
	}
	
	public int getAge() {
		return Calendar.getInstance().get(Calendar.YEAR) - this.manufacturingDate;
	}
	
	public void printInfo() {
		System.out.println("Mein Auto ist ein " + getTyp() + " mit " + getPower() + " PS und ist " + getAge() + " Jahre alt.");
	}
}
```


## Laden und Speichern von serialisierten Objekten

Für das Laden und Speichern von Objekten werden Input- und OutputStreams benötigt:

* InputStreams --> Laden von Daten
* OutputStreams --> Speichern von Daten

Je nach zu speicherndem Inhalt können unterschiedliche OutputStreams (bspw. `DataOutputStream` oder `ObjectOutputStream`) verwendet werden.
Diese müssen für die Speicherung einen `FileOutputStream` kapseln, der den serialisierten Objektbytestrom empfängt und diesen dann auf das Filesystem schreibt. 

Im nachstehenden Beispiel ist dieser Prozess dargestellt:

```java
package de.hda.nzse.examples.car;

import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.ArrayList;


public class MyCarApp {

	public final static String STORAGE_LOCATION = "/Users/stefan/Google Drive/hda/LVAs/NZSE/Java/resources/cars.txt";

	public static void main(String[] args) {

		Car car1 = new Car("Kombi", 177, 2015);
		car1.printInfo();
		storeCar(car1);
		
		Car car2;
		car2 = loadCar(null); // store data of car1 in car2 
		car2.printInfo(); // prints identical data as car1
	}


	
	/**
	 * Method to store a single car instance in a file using serialization
	 * @param car
	 */
	private static void storeCar(Car car) {
		try {
			FileOutputStream fileOut = new FileOutputStream(STORAGE_LOCATION);
			ObjectOutputStream out = new ObjectOutputStream(fileOut);
			out.writeObject(car);
			out.flush();
			out.close();
			fileOut.close();
			System.out.println("Serialized data is saved in " + STORAGE_LOCATION);
		} catch(IOException i) {
			i.printStackTrace();
		}
	}


	/**
	 * Java is always call-by-value
	 * See http://www.javaschubla.de/2007/javaerst0200.html
	 * @param car
	 * @return
	 */
	private static Car loadCar(Car car) {
		Car temp= null;
		try {
			FileInputStream fileIn = new FileInputStream(STORAGE_LOCATION);
			ObjectInputStream in = new ObjectInputStream(fileIn);
			temp = (Car) in.readObject();
			in.close();
			fileIn.close();
		} catch(IOException i) {
			i.printStackTrace();
		} catch(ClassNotFoundException c) {
			System.out.println("Car class not found");
			c.printStackTrace();
		}
		return temp;
	}

}
```