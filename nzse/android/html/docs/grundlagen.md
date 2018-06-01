# Grundlagen zur Android-Entwicklung mittels Java und Android Studio

!!! abstract
    **Lernziele**

    - [x] Sie können einfache Android Projekte mit Android Studio anlegen
    - [x] Sie verstehen die Grundstruktur einer Android App
    - [x] Sie kennen den Lebenszyklus von Activities
    - [x] Sie kennen die wichtigsten Hilfsmittel in Android Studio
    - [x] Sie verstehen die Konzepte „Datenmodell“ und „Persistenz“ im Kontext einer GUI-Anwendung


## Marshalling und Unmarshalling

**Marshalling** refers to the process of converting the data or the objects inbto a byte-stream, and **unmarshalling** is the reverse process of converting the byte-stream beack to their original data or object. The conversion is achieved through **serialization**.

The purpose of the marshalling/unmarshalling process is to transfer data between remote systems or system components (eg. classes or activities).

!!! note
    **Definition:** Unmarshalling or unmarshaling refers to the process of transforming a representation of an object that was used for storage or transmission to a representation of the object that is executable. A serialized object which was used for communication can not be processed by a computer program. An unmarshalling interface takes the serialized object and transforms it into an executable form. Unmarshalling (similar to deserialization) is the reverse process of marshalling.

