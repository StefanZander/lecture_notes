# Categories

Categories are the preferred way to organise pages in MediaWiki.

!!! warning
    **Definition**: << **Category** >>  
    Categories are pages defined in the `Category:` namespace and allow for organizing mediawiki pages in predefined categories.

    _Quelle: Eigene Definition angelehnt an <https://www.mediawiki.org/wiki/Help:Categories>_  


### Working with Categories

#### Creating a new Category

For creating a new category, create a new mediawiki page in the `Category` namespace and give the new category a distinct name  
``` diff
Category:Employee --> creates a new page named 'Employee' in the 'Category' namespace
```
  
Enter additional information about the category on its page


#### Adding wikipages to a category

To make a mediawiki page a member of a category, add a link to the category on the page
``` diff
[[Category:Employee]] --> Adds the current page to the category "Employee"
```


[^1]: Category links can be placed at any location at a wiki page. However, due to maintenance and consistency reasons, it is good practice to define distinct locations on wiki pages for specifying category memberships. 

#### Category Hierarchies

Mediawiki allows to build **category hierarchies**, i.e., it employs super- and sub-category concepts to resemble the 'broader' and 'narrower' relationships between categories known from taxonomical classification systems. 

In order to make a category a sub-category of another category, add `[[Category:{Super_category}]]` to the sub-category page.

Example:  
``` diff
On the category page 'city':
============================

[[Category:Settlement]] --> makes 'Settlement' the super category of category 'city'
```

<!-- !!! Example
    **Example**  
    Defining that city is a special form of settlement (ie., sub-category), enter
    `[[Category:Settlement]]` on the `Category:City` page to make `Settlement` the super category of `City` -->

!!! note
    Please note that category hierarchy can be any graph (multi-inheritance, cycles, etc.)

#### Linking to a Category
To create a link to a category, use a leading colon before the category name (without this colon, the current page would be added to the category):
``` diff
[[:Category:Help]] −−> Link displays as "Category:Help"
```

To change the link text, write the text inside the link tag after a pipe:
``` diff
[[:Category:Help|Help category]] −−> Link displays as "Help category"
```





