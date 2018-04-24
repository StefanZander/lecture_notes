# The CSS Flexbox Layout

## Background

The Flexbox Layout (Flexible Box) module (currently a W3C Last Call Working Draft) aims at providing a more efficient way to lay out, align and distribute space among items in a container, even when their size is unknown and/or dynamic (thus the word 'flex').

The main idea behind the flex layout is to give the container the ability to alter its items' width/height (and order) to **best fill the available space** (mostly to accommodate to all kind of display devices and screen sizes). A flex container expands items to fill available free space, or shrinks them to prevent overflow.

Most importantly, the flexbox layout is **direction-agnostic** as opposed to the regular layouts (block which is vertically-based and inline which is horizontally-based). While those work well for pages, they lack flexibility (no pun intended) to support large or complex applications (especially when it comes to orientation changing, resizing, stretching, shrinking, etc.).

!!! note
    Flexbox layout is most appropriate to the components of an application, and small-scale layouts, while the Grid layout is intended for larger scale layouts.

## Basic Concepts and Terminology

Flexbox is a whole module and not a single property. It hence involves a lot of things including its whole set of properties. Some of them are meant to be set on the container (parent element, known as "flex container") whereas the others are meant to be set on the children (said "flex items").

The flex layout is based on **flex-flow directions**. The following figure from the specification explains the main idea behind the flex layout.

![alt](figures/flexbox_2.png)*Main elements of the flexbox layout*

Basically, items will be laid out following *either* the `main axis` (from `main-start` to `main-end`) or the `cross axis` (from `cross-start` to `cross-end`).

- **main axis** – The main axis of a flex container is the primary axis along which flex items are laid out. Beware, it is not necessarily horizontal; it depends on the `flex-direction` property (see below).
- **main-start | main-end** - The flex items are placed within the container starting from `main-start` and going to `main-end`.
- **main size** – A flex item's width or height, whichever is in the main dimension, is the item's main size. The flex item's main size property is either the ‘width’ or ‘height’ property, whichever is in the main dimension.
- **cross axis** – The axis perpendicular to the main axis is called the `cross axis`. Its direction depends on the main axis direction.
- **cross-start | cross-end** - Flex lines are filled with items and placed into the container starting on the `cross-start` side of the flex container and going toward the `cross-end` side.
- **cross size** - The width or height of a flex item, whichever is in the cross dimension, is the item's cross size. The cross size property is whichever of ‘width’ or ‘height’ that is in the cross dimension.

![alt](figures/flex-container.svg)*The flex container (=parent)*
![alt](figures/flex-items.svg)*The items laid out in the flex container (=children)*

## Properties of the Flex Container

### display

This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

``` css
.container {
  display: flex; /* or inline-flex */
}
```

### flex-direction

![alt](figures/flex-direction.svg)

This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.

``` css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- `row` (default): left to right in ltr; right to left in rtl
- `row-reverse`: right to left in ltr; left to right in rtl
- `column`: same as row but top to bottom
- `column-reverse`: same as row-reverse but bottom to top


### flex-wrap

![alt](figures/flex-wrap.svg)

By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.

``` css
.container{
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

- `nowrap` (default): all flex items will be on one line
- `wrap`: flex items will wrap onto multiple lines, from top to bottom.
- `wrap-reverse`: flex items will wrap onto multiple lines from bottom to top.





> The moment the user sees your UI, it communicates where they have arrived, what they can do, and how they should do it. The user receives this message from every aspect of your design: graphical and textual, silent and audible, static and moving, intentional and accidental. Figure out what you want that message to be, then do everything you can to ensure the message your UI sends is as close as possible to the one you intended.
> ––JAN MIKSOVSKY

This lecture teaches you basic principles for designing good and intuitive UIs. Those principles apply to many kinds of systems (Web-based system, mobile app, desktop app etc).

!!! abstract "Objectives"
    * [x] You know basic principles of intuitive and modern UIs
    * [x] You learn a methodology that helps you to built UIs with a good user experience
    * [x] You can ...

## Introduction

### UI versus UX

This section breifly discusses the differences between UI (user interface design) and UX (user experience)

* **User Interface (UI)**: A user interface connects users to a product's underlying technology; it is what users see and feel directly when using a product or system.
* **User Experience (UX)**: User experience encompasses the entire experience users have with a product or software system. That experience includes the UI, but it also transcends the UI to include the internals that users do not interact with directly, as well as the externals, such as a purchasing process, technical support etc. E.g. for a car, the internals include engine, chassis, handling, and reliability; the externals are product showroom, the purchasing and delivery experience, manuals, warranty etc.

User interface design addresses actions users must do, whereas user experience design also addresses actions users do not have to do; it is the more encompassing action/goal.

### Basic Concepts

A user interface is essentially a **conversation between the user and a software system** to perfom tasks to achieve users' goals.
A UI differs from conversation primarily in that it uses the **language of UI elements** instead of natural language.
A well designed UI communicates with its users in a way that is

* natural
* professional
* friendly
* easy to understand
* efficient.

By contrast, poorly designed UIs are unnatural, technological and mechanical, and require users to apply thought, experimentation, memorization, and training to translate it into something meaningful.

!!! note "User Interface Design is not a subjective visual art"
    From this point of view, user interface design is not a subjective visual art about pixels and aestethics but rather a **principled objective communication skill** to explain tasks to users.

    By focusing on communication, **design decisions** that appear subjective (such as control selection, icon design, layout, color scheme etc.) become much more **objective**.

Style, color schemes, fashion are largely subjective, but aspects that constitute a comprehensible and intuitive task explanation to the target users are not.
Therefore, every user interface element can be **evaluated by how effectively it communicates its role and contribution** towards the fulfillment of users' tasks.
If a UI containts elements, that communicate nothing, they should be removed.

!!! abstract "Principle x: UI is essentially Human-like Communication"
    The most important concept is to understand that UI is **not** a completely different form of communication. A good and ituitve UI is designed to **communicate to people**, not robots, so it employs many concepts of human communication.

!!! abstract "Principle x: Friendliness"
    If a UI communicates in a way that would be inappropriate or rude in person, it is equally inappropriate or rude in a system.

For example, consider the classic question
> "should I use radio buttons or a checkbox?"

There are potentially dozens of possible considerations, but answering the question with
> "What are you trying to communicate?"

helps in driving the decision.

If you are providing an option that can be turned on or off, a checkbox is the better choice; if you are providing two or more independent states, radio buttons are the better choice.

![alt](figures/radiobuttons_example.png)*Radio buttons are a good choice when one out of several independent options needs to be selected*

## UI Design Principles