# Subobjects

_aka Semantic Internal Objects_[^1]

[^1]: Prior the Semantic MediaWiki version 3.0, subobjects were available only via an extension; with versions >= 3.0, subjects moved to the official Semantic MediaWiki core

!!! warning
    **Definition**: << __Subobject__ >>  
    A subobject is an ==independent== and ==uniquely identifyable resource== in Semantic MediaWiki with an arbitrary set of properties hosted on wiki pages to which they hold a `has_subobject` relationship. 

    _Quelle: Eigene Definition_


### Function

Subobjects are a very important concept in semantic modelling as they allow for the expression of **n-ary-relationships** between a subject (the wiki page) and its objects where the subobject serves as **blank node resource**.

!!! example
    **Example**  
    With subobjects you can express on an employee page the different times where she worked for some projects.
    
    --> **Try for yourself**  
    How would you represent the above use case with default SWM language primitives (categories / properties / pages)?  
    How could you state the following project memberships for an employee "Matthias":
    
    ``` diff
    CultLab3D:      07/2012 - 12/2014
    BigGIS:         05/2013 - 10/2015
    CultLab3D:      11/2015 - 12/2016
    ReApp:          04/2016 - 12/2018
    ```  

    The above example becomes even more complicated when the project role is added, e.g.

    ``` diff
    CultLab3D:      07/2012 - 12/2014   –   Role: Research associate
    BigGIS:         05/2013 - 10/2015   –   Role: Research associate
    CultLab3D:      11/2015 - 12/2016   –   Role: Project leader
    ReApp:          04/2016 - 12/2018   –   Role: Workpackage leader
    ```  

!!! tip
    **Task**  
    Think about other use cases in which subobjects allow for expressing real-world situations in more natural (ie. _appropriate_) ways. Write them down and illustrate the representation with subobjects for one use case in form a conceptual graph.


### Characteristics

Subobjects are *not* defined on distinct pages nor have a separate namespace but are defined on wiki pages in the main namespace. 

A wiki page may define as much subobjects as necessary.  

Subobjects can have an explicitly specified identifier – otherwise, SMW creates an unique identifier.

Properites used in a subobject "belong" to it and _not_ to the page in which a subobject is embedded in.

A subobject can hold as many **property-value pairs** as needed;  
~> it groups them together and links them trough the subobject to page the subobject is embedded in without the necessity of creating auxiliary pages.

A subobject embedded on a page resolves into a `pagename – has_subobject – subobject_identifier` relationship[^2], where `subobject_identifier` is either the explicitly set subobject name or an internal identifier created by SMW to give the subobject a unique name through which it can be identified 

[^2]: Meaning, it will internally be treated as a `pagename – has_subobject – subobject` triple by SMW.

Subobjects can be queried for in `#ask`queries


### Syntax

Subobjects are created with the parser function `#subobject`

``` diff
{{#subobject:mysubobject
 |Has property 1=value
 |Has property 2=values|+sep=...
 |...
}}
```

Please note:  
Like the `#set` parser function the `#subobject` parser function is a form of **silent annotation**: --> it adds values to properties but does not print anything to the page.


### Querying Subobjects

In some cases it might be necessary to display the subobject data directly after they have been defined on a page. 
This can be achieved with an `#ask` query asking for the inverse of the `has subobject` property, i.e., the object value of the subobject given the hosting page name.

!!! example
    **Example**

    Defining two subobjects with identifiers `first` and `second`:
    ``` diff
    {{#subobject:first
    |property1=value1
    |property2=value2
    }}

    {{#subobject:second
    |property1=value3
    |property2=value4
    }}
    ```
    
    Then to print out the subobjects one would insert this code on the same page:

    ``` diff
    {{#ask:
    [[-Has subobject::{{FULLPAGENAME}}]] 
    |?property1
    |?property2
    }}
    ```

    Note the "`-`" symbol which is necessary to make the query work (see [Inverse Properties](https://www.semantic-mediawiki.org/wiki/Inverse_Properties) for more information).


### Show Properties of a Subobject's Parent Page
In some cases one might not only want to query for subobject data but also for "usual" properties that are defined on the subobject's parent page. The process to do that contains the following steps:

1. Query for a property of a subobject.
2. Use `format=template`.
3. Add another query in this template where you ask for `[[Has subobject::{{{1}}}]]`.  
    `Has subobject` returns the parent page of a subobject. The subobject is queried in the first query and passed on to the template as `{{{1}}}`.

!!! example
    **Example**
    ``` diff
    {{#ask:
    [[YourSubobjectProperty::Foo]]
    |?YourSubobjectProperty1
    |?YourSubobjectProperty2
    |format=template 
    |template=YourTemplate
    }}
    ```

    In `Template:YourTemplate` add the following:

    ``` diff
    {{#ask:
    [[Has subobject::{{{1}}}]]
    |?YourParentProperty1
    |?YourParentProperty2
    }}
    ``` 

    Please note: `:::diff |?YourSubobjectProperty1` and `:::diff |?YourSubobjectProperty2` will be passed to the template as parameters too; they can be accessed via their index, ie. `{{{2}}}` and `{{{3}}}`.


!!! tip
    **Task**:  
    Work through the full offical documentation of Semantic MediaWiki subobjects <https://www.semantic-mediawiki.org/wiki/Subobject> and try to understand the notation and rationale befind subobjects and how to use them.

    If you haven't complete Task 1 – yet is the time to do...!

   
!!! note
    __Subobjects and its Friends...__  
    Subobjects become extremely usefull when used in conjunction with multi-instance templates and Semantic Forms.


