# Properties

!!! warning
    **Definition**: << **Properties** >>  
    Properties allow for encoding relationship information in the form of first-class specifications between 

    * wiki pages and other wiki pages as well as  
    * wiki pages and property values. 
    
    Their behaviour can be explicitly specified using reserved special properties that determine how properties are processed by Semantic MediaWiki. Properties resemble the edges in knowlegde graphs

    *Quelle: Eigene Definition*


Properties are defined on **property pages** located in the `Property:` namespace.

<!-- Property pages have 2 main purposes
: ~> document properties: how and when to use a property
: ~> declare properties: how should SMW treat them technically -->

Property pages have 2 main purposes

1. *document* properties ~> how and when to use a property
2. *declare* properties ~> how should SMW treat them technically


### Property Types

Semantic MediaWiki employs two types of properties

* **'Normal', i.e., User-Defined Properties**  
    User-defined properties are the usual way of representing the relationships of a universe of discourse. Their names can be individually choosen but must be unique. The behaviour of user-defined properties can be controlled using special properties.

    The property pages of user-defined properties usually contains 

    * _documentation_ information, ie. a description about how a property is intended to be used in modelling an excerpt of the universe of discourse (~> non-normative information) together with 
    * _declaration_ information in which their semantics, ie., the rules that will be applied for processing the property by SMW is determined (~> normative information).



* **Special Properties**  
    Semantic MediaWiki provides a set of so-called special properties that control the behavior and processing of user-defined properties.
    Special properties can not be changed or used otherwise, i.e., they are unique in naming and usage.  
    
    There are a lot of special properties, e.g. `Has type`, `Allows value`, `Modification date`, `Has improper value for`, `Has subobject`, `Has query`, etc.  
    ~> The `Special:Properties` provide a list of special properties implemented in your wiki[^1].  

    Some special properties are assigned *manually*  
    ~> e.g. special property `Has type` which assigns the datatype to a user defined property
    Some special properties are assigned *automatically*  
    ~> e.g. `Has improper value for` stores incorrect values assigned to a property

    
[^1]: Special properties are listed in _italics_
    


### Property Declaration 

Properties need to be specified in the `Property:` namespace

Properties need to have a **datatype**

* Datatypes give properties a certain meaning  
  e.g. a property of datatype `:::diff Telephone number` can only validely hold telephone numbers
  : Page namespace: `Property`  
    Page name: `:::diff Has telephone number`  
    Page content: `[[Has type::Telephone number]]` --> This is the datatype assignment.  

    Default is datatype `Page` if nothing was explicitly added.
    
* Datatypes allow to do a formal check of the assigned value  
  e.g. a property value of `abc` annotated to a property of datatype `:::diff Telephone number`  
  --> An error message will be issued.

* Datatypes are needed to drive a certain behaviour, i.e. add links, add formatting, etc.  
    e.g. a property value of `+49-30-45-08-49-40` added to a property of datatype `:::diff Telephone number` will automatically be linked and additionally preceeded with URI prefix `tel:` 

* Semantic MediaWiki provides a rich set of default datatypes  
    e.g. `Page`, `Text`, `Number`, `Email`, `URL`, `:::diff Telephone number`, `Temperature`, `Boolean`, etc.  
    The page `Special:Types` provides a list of all datatypes available in a Semantic MediaWiki instance

Properties can only have **one** datatype



### Setting Property Values

#### Setting a single value for one property
  : <!-- the BLANK after the colon is IMPORTANT for rendering -->
    ``` diff
    [[Property name::Property value]]
    ```

#### Setting multiple values for one property
  : 
    ``` diff
    [[Property name::Property value 1]]
    [[Property name::Property value 2]]
    <!-- The property values are directly shown on the page -->
    ```

    Please note that this notation can not be used in [Semantic Templates](./semantic_templates.md) when multiple values need to be added to one property.
    Use the `{{#set:}}` parser function (in conjunction with `{{#show:...}}` when the values should be displayed in a page) instead. 
    
    For example:
    ``` 
    ! Forschungsthemen
    {{#set:
     has_topic={{{topics|}}}
     |+sep=;
    }}
    | {{#show: {{PAGENAME}} |?has_topic }} 
    |-
    ```

#### Setting a property value without displaying it on the page
  : 
    ``` diff
    [[Property name::Property value| ]]
    ```

    Please note the pipe symbol and blank space '`|_`' after the property value  

    The property value is not directly shown on the page.  
    Probably better here: annotation using the `#set` parser function.

#### Setting property values using the `#set` parser function
  : 
    Sets the property value but don't displays it on the page
    ``` diff
    {{#set:Property name=Property value}}
    ```

    `#set` annotation for multiple values (not directly shown on the page)
    ``` diff
    {{#set:
     Property name=Property value 1; Property value 2 
     |+sep=;
    }}
    ```

    Values of `#set` annotations can be displayed with a template (not recommended)
    ``` diff
    {{#set:
     Property name=Property value 1; Property value 2 
     |+sep=;
     |template=Show property values
    }}
    ```

    The property value is directly shown on the page using the `:::diff template` parameter.

    Content of the template `:::diff Show property value`:  
    ```diff
    {{{value}}}
    ```
    The annotated data value is directly shown with `:::diff {{{value}}}`.

    Alternatively use the `{{#show:...}}` parser function in conjunction with `{{PAGENAME}` and the property the values of which are the be displayed:
    ```
    {{#set: has_member={{{members|}}}|+sep=; }}
    {{#show: {{PAGENAME}} |?has_member }} 
    ```














