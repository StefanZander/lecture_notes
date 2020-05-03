# MediaWiki Pages

### General Information about Pages

Pages are the **central containers** in MediaWiki and Semantic MediaWiki[^1] for storing content.
[^1]: In the following, MediaWiki and Semantic MediaWiki pages are referred to as wiki pages when the provided information applies to both of them.

The content of wiki pages is expressed using the Semantic MediaWiki syntax and the datamodel elements provided by Semantic MediaWiki.

Every page needs to have a distinct **name** and must be created in a unique, **pre-defined namespace**.

The page name together with the namespace become parts of the **page's URL**.

Example: `:::diff {Semantic_MediaWiki_URL}\namespace:page_name` 

Please note that pages in MediaWiki do not have a file type postfix (ie., a file type indicator)

The contents of every wiki page is transformed into HTML when the page is rendered in the browser.

In Semantic MediaWiki, a page hosts the **annotations** in which the page (represented technically through its URL) serves as **subject**.

Ie., whenever we want to make statements about a page (actually it is the "thing" represented by that page) we encode such factual knowledge as property-value pairs or subobjects on that page.



