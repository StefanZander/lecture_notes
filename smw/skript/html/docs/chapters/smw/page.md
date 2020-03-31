# MediaWiki Pages

### General Information about Pages

Pages are the central containers in MediaWiki and Semantic MediaWiki[^1] for __storing content__.
[^1]: In the following, MediaWiki and Semantic MediaWiki pages are referred to as wiki pages when the provided information applies to both of them.

The content on wiki pages is expressed using the Semantic MediaWiki syntax and the datamodel elements provided by Semantic MediaWiki.

Every page needs to have a name and must be created in one namespace

Name + namespace become parts of the page's URL

Example: `:::diff {Semantic_MediaWiki_URL}\namespace:page_name` 

Please note that pages in MediaWiki do not have a type postfix (ie., a file type indicator)

The contents of every wiki page is transformed into HTML when the page is rendered in the browser.

### Namespaces

Wiki pages are grouped together in collections called **namespaces**.

Namespaces determine the purpose of a page, i.e., how the contents of a page will be interpreted by the wiki engine.

!!! example
    Datatype information in property pages determine whether the specification of property values will lead to creation of a new wiki page (in the default namespace) or whether these are treated as strings or numbers (or some other data types).

Pages in different or pre-determined namespaces are processed differently by the wiki engine when used in conjunction with other pages.

!!! example
    Contents of pages defined in the `:::diff Template:` namespace, e.g., will be transcluded in other pages.

Namespaces are ... as prefix in the page's title (e.g. `:::diff Help:Namespaces/de`[^2]).

[^2]: Please note how subpages are used to implement mulit-language support on the official MediaWiki help pages.

When no namespace is given during page creation, the page will be created in the __main namespace__ (--> see <https://www.mediawiki.org/wiki/Help:Namespaces/en#Standard_namespaces> for a list of standard namespaces provided by MediaWiki)


