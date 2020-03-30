# Introduction to Templates

### Motivation



### Function

Templates allow for the inclusion of defined content in wiki pages.

This form is inclusion is called **Transclusion**

!!! warning
    **Definition**: >>**Transclusion**<<  
    Transclusion describes the process of embedding content defined in a template into another page. 
    Transcluded content can be paramterized by specifying individual values for the parameters defined in the template page.  

Templates
: ... can be created as any wiki page, but must be defined in the `Template:` namespace
: ... can have parameters the values of which will be inserted in the template's content during transclusion

!!! warning
    **Definition**: >>**Template**<<  
    A template is a wikipage defined in the `Template:` namespace that contains content that can be transcluded in other wiki pages.

Templates are often used for **harmonizing**[^1] semantic data and reducing semantic drift
: ...by using pre-defined **semantic properties** in a template page
: ...and by setting their allowed values through template **parameters**
: ~> So, every page that transcludes a template contains the same semantic data structures

[^1]: Harmonizing means to make something consistent and compatible


### Syntax

#### Creation
Templates can be created as any other wikipage but must be defined withing the `Template:` namespace

``` diff
some wiki content...
[property_1::{{{parameter_1}}}]
[property_2::{{{parameter_2}}}]
```

Usage
``` diff
{{Page to transclude
|parameter1=value1
|parameter2=value2
|...
}}
```

