# Layout

!!! success "Key Points"
    - ...



!!! info "Read these sources for more information"
    - A very-well designed tutorial for building layouts: <https://docs.flutter.dev/ui/layout/tutorial>
    - 


## Basic Properties of Layout Widgets

All layout widgets have either of the following:

- A `child` property if they take a single child—for example, `Center` or `Container`
- A `children` property if they take a list of widgets—for example, `Row`, `Column`, `ListView`, or `Stack`.

For a Material app, you can use a `Scaffold` widget; it provides a default banner, background color, and has API for adding drawers, snack bars, and bottom sheets. 

## Basic Concepts

- Row and Column are two of the most commonly used layout patterns.
- Row and Column each take a list of child widgets.
- A child widget can itself be a Row, Column, or other complex widget.
- You can specify how a Row or Column aligns its children, both vertically and horizontally.
- You can stretch or constrain specific child widgets.
- You can specify how child widgets use the Row’s or Column’s available space.

Row and Column are basic primitive widgets for horizontal and vertical layouts—these low-level widgets allow for maximum customization.


## Was ist ein Scaffold 

Quelle: ChatGPT 

In Flutter bezieht sich der Begriff "Scaffold" auf ein Widget, das als grundlegende Struktur für eine Bildschirmseite in einer App dient. Das Scaffold-Widget bietet eine standardisierte Layoutstruktur und enthält häufig verwendete Elemente wie eine App-Leiste, einen Body-Bereich und eine untere Navigationsleiste.

Hier sind einige wichtige Eigenschaften und Funktionen des Scaffold-Widgets in Flutter:

__AppBar__: Das Scaffold-Widget ermöglicht die Definition einer AppBar, die typischerweise am oberen Rand der Bildschirmseite platziert wird. Die AppBar kann Titel, Aktionsschaltflächen, Menüs und andere Anpassungen enthalten.

**Body**: Der Body-Bereich des Scaffolds enthält den Hauptinhalt der Bildschirmseite, der mit verschiedenen Widgets gefüllt werden kann, um Benutzeroberflächenkomponenten wie Text, Bilder, Listen und mehr darzustellen.

**Drawer**: Ein Scaffold kann auch einen seitlichen Drawer (Ausklappmenü) enthalten, der dem Benutzer zusätzliche Navigations- oder Einstellungsoptionen bietet. Der Drawer wird üblicherweise durch ein sogenanntes Hamburger-Menüsymbol aktiviert.

**BottomNavigationBar**: Bei Bedarf kann ein Scaffold auch eine untere Navigationsleiste enthalten, die dem Benutzer den schnellen Zugriff auf verschiedene Abschnitte oder Funktionen der App ermöglicht.

**FloatingActionButton**: Ein Scaffold kann auch einen schwebenden Aktionsbutton (FloatingActionButton) enthalten, der dem Benutzer eine primäre Aktion oder Aufgabe erleichtert. Der FloatingActionButton wird typischerweise in der unteren rechten Ecke des Bildschirms platziert.

Durch die Verwendung des Scaffold-Widgets als grundlegende Struktur für Bildschirmseiten in einer Flutter-App können Entwickler schnell und einfach konsistente und gut strukturierte Benutzeroberflächen erstellen.

### Wie lassen sich mehrere Widgets in einem Scaffold gruppieren?

Ein Scaffold-Widget in Flutter kann nur einen einzigen Body-Widget haben. Der Body-Widget definiert den Hauptinhalt der Bildschirmseite und kann ein beliebiges Widget oder eine Widget-Hierarchie sein, die den Inhalt der Seite darstellt.

Wenn Sie mehrere Inhaltsbereiche in einem Bildschirm haben möchten, können Sie Container, Column, Row oder andere Layout-Widgets verwenden, um mehrere Widgets innerhalb des Body-Widgets zu gruppieren und anzuordnen. Zum Beispiel könnten Sie eine Column verwenden, um vertikal angeordnete Inhaltsbereiche zu erstellen, oder eine Row für horizontal angeordnete Bereiche.

Hier ist ein einfaches Beispiel das zeigt, wie sich verschiedene Inhaltsbereiche in einem Scaffold organisieren lassen:

```dart
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Mehrere Inhaltsbereiche'),
        ),
        body: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Container(
              height: 100,
              color: Colors.blue,
              child: Center(child: Text('Inhaltsbereich 1')),
            ),
            Container(
              height: 200,
              color: Colors.green,
              child: Center(child: Text('Inhaltsbereich 2')),
            ),
            Container(
              height: 300,
              color: Colors.orange,
              child: Center(child: Text('Inhaltsbereich 3')),
            ),
          ],
        ),
      ),
    );
  }
}
```

In diesem Beispiel wird eine Column verwendet, um drei verschiedene Inhaltsbereiche (Container) vertikal anzuordnen. Jeder Container repräsentiert einen separaten Bereich des Bildschirms. Sie können jedoch die Anordnung und Gestaltung der Inhaltsbereiche je nach Ihren Anforderungen anpassen.


## Gruppierung von Elementen (Container)

In Flutter ist ein Container ein grundlegendes Widget, das dazu verwendet wird, andere Widgets zu gruppieren, zu positionieren und zu dekorieren. Der Container ermöglicht es, die Größe, das Aussehen und das Verhalten von Widgets zu steuern, die innerhalb des Containers platziert sind.

Einige der wichtigsten Eigenschaften und Funktionen eines Containers in Flutter:

Größe und Positionierung: Sie können die Breite, Höhe und Position des Containers steuern, indem Sie Eigenschaften wie width, height, margin, padding, alignment und andere verwenden. Dies ermöglicht es, Widgets innerhalb des Containers genau zu positionieren und zu layouten.

Dekoration: Sie können die visuelle Darstellung des Containers mithilfe von Dekorationsattributen wie color, border, borderRadius, boxShadow und anderen anpassen. Dadurch können Sie Hintergrundfarben, Rahmen, abgerundete Ecken, Schatteneffekte und andere visuelle Effekte hinzufügen.

Transformationen: Der Container unterstützt auch Transformationen wie Rotationen, Skalierungen, Verschiebungen und Scherungen, die es ermöglichen, den Container und die darin enthaltenen Widgets zu transformieren.

Constraints: Sie können auch die Größenbeschränkungen und Einschränkungen des Containers mithilfe von Eigenschaften wie constraints, constraints.minWidth, constraints.maxWidth, constraints.minHeight, constraints.maxHeight und anderen steuern.

Clippen: Der Container unterstützt das Clippen von Inhalten, um sie innerhalb eines bestimmten Bereichs sichtbar zu machen, indem Sie die clipBehavior-Eigenschaft verwenden.

In Flutter wird der Container häufig verwendet, um Layouts zu definieren, Abstände zu steuern, Hintergrundfarben hinzuzufügen und visuelle Effekte auf Widgets anzuwenden. Es ist ein vielseitiges und mächtiges Widget, das in vielen UI-Designs eingesetzt wird, um die gewünschten Layouts und Darstellungen zu erreichen.



### Der Unterschied zwischen Container und Column

Ein Container und eine Column sind beide Widgets in Flutter, die verwendet werden, um andere Widgets zu gruppieren und zu layouten, haben jedoch unterschiedliche Zwecke und Eigenschaften:

#### Container

Ein Container ist ein generisches Widget, das verwendet wird, um andere Widgets zu gruppieren, zu positionieren und zu dekorieren.
Es bietet Eigenschaften zur Steuerung von Größe, Aussehen und Verhalten von Widgets innerhalb des Containers, wie z.B. width, height, color, margin, padding, alignment, decoration usw.
Ein Container kann verwendet werden, um Widgets horizontal, vertikal oder in einer beliebigen Weise zu positionieren, ohne eine feste Ausrichtung wie eine Column oder Row.
Ein Container wird verwendet, wenn Sie spezifische Anpassungen an der Größe, dem Aussehen oder dem Verhalten von Widgets vornehmen müssen, die innerhalb des Containers platziert werden.

#### Column

Eine Column ist ein spezifisches Layout-Widget, das verwendet wird, um Widgets vertikal zu stapeln, so dass sie von oben nach unten angeordnet sind.
Es arrangiert Kinder-Widgets vertikal und folgt der Hauptachse von oben nach unten.
Eine Column bietet Eigenschaften wie mainAxisAlignment, crossAxisAlignment, mainAxisSize, um die Anordnung und das Aussehen der Widgets innerhalb der Column zu steuern.
Eine Column wird verwendet, wenn Sie eine vertikale Anordnung von Widgets benötigen und die Platzierung und das Layout dieser Widgets in einer standardisierten Weise steuern müssen.
Insgesamt kann ein Container verwendet werden, um Widgets zu gruppieren, zu positionieren und zu dekorieren, während eine Column speziell für das vertikale Stapeln von Widgets entlang der Hauptachse entwickelt wurde. Sie haben also verschiedene Zwecke und Anwendungsfälle, obwohl sie beide zur Erstellung komplexer Benutzeroberflächen in Flutter verwendet werden können.



## Standard Widgets

- `Container`: Adds padding, margins, borders, background color, or other decorations to a widget.
- `GridView`: Lays widgets out as a scrollable grid.
- `ListView`: Lays widgets out as a scrollable list.
- `Stack`: Overlaps a widget on top of another.

## Container
Many layouts make liberal use of Containers to separate widgets using padding, or to add borders or margins. You can change the device’s background by placing the entire layout into a Container and changing its background color or image.

Summary (Container) 

- Add padding, margins, borders
- Change background color or image
- Contains a single child widget, but that child can be a Row, Column, or even the root of a widget tree


## ListView

ListView is a column-like widget that automatically provides scrolling when its content is too long for its render box.

Summary (ListView)

- A specialized Column for organizing a list of boxes
- Can be laid out horizontally or vertically
- Detects when its content won’t fit and provides scrolling
- Less configurable than Column, but easier to use and supports scrolling



## Important notes

Performance can be improved by declaring widgets as const.
Be careful, this requires all of its children to be a const as well. 
Not considering this requirement results in errors, e.g., wenn declaring a button's behaviour or when addind a TextEditingController to a TextField.

Source: 
-  <https://stackoverflow.com/questions/55635663/invalid-constant-value-using-variable-as-parameter>
- <https://stackoverflow.com/questions/70081141/invalid-value-constant-value-for-texteditingcontroller-in-flutter>

## Other Resources

Learn more about lay outing in flutter: https://docs.flutter.dev/ui/layout#other-resources

There is a good tutorial that shows how to build layouts: https://docs.flutter.dev/ui/layout/tutorial
