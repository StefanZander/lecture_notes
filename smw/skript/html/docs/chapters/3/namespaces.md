# Namespaces

Wiki pages are grouped together in collections represented as **namespaces**.

!!! warning
    **Definition**: << **Namespace** >>  
    Namespaces are prefixed in a page's URL and determine both the purpose and the model-theoretic semantics of a page. Based on the given namespace, the Semantic MediaWiki engine determines how to process the contents of a page and incorporate it in a universe of discourse's datamodel.

    _Quelle: eigene Definition_


Every wiki page belongs to **one specific namespace**; if no namespace is given during page creation, the wiki's **main namespace**[^3] is used.
[^3]: Please note that the main namespace will not be displayed in the page's URL; it is excluded from the display of the page's name. 

Namespaces determine the **purpose** of a page, i.e., how the contents of a page are interpreted by the wiki engine.

!!! example
    **Example**  
    Datatype information in property pages determine whether the specification of property values will lead to the creation of a new wiki page (in the default namespace) or whether property values are treated as strings or numbers (or some other data types).

The wiki engine can also assess whether a certain **value holds for a property** or not  
(e.g., in the case of datatype `Date` or `telephone` etc.)

Pages in standard Semantic MediaWiki namespaces[^4] are processed differently by the wiki engine when used in conjunction with other pages.

!!! example
    **Example**  
    Contents of pages defined in the `:::diff Template:` namespace, e.g., will be transcluded in other pages.

Namespaces become part of the page's title, e.g., `:::diff Help:Namespaces/de`[^2].
[^2]: Please note how subpages are used to implement mulit-language support on the official MediaWiki help pages.

When no namespace is given during page creation, the page will be created in the __main namespace__[^4].  
The main namespace is not rendered in a page's URL but used internally by the wiki mediawiki engine.

[^4]: See <https://www.mediawiki.org/wiki/Help:Namespaces/en#Standard_namespaces> for a list of standard namespaces provided by MediaWiki