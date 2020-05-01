# Magic Words

_Source: <https://www.mediawiki.org/wiki/Help:Magic_words>_

Magic words are strings of text that MediaWiki associates with a return value or function, such as time, site details, or page names. 

There are three general types of magic words:

* **Behavior switches**:  

    A behavior switch controls the layout or behavior of the page (if supported by the skin) and can often be used to specify desired omissions and inclusions in the content.
    These are usually written as uppercase words surrounded by double underscores, e.g.`__FOO__`. 

    See <https://www.mediawiki.org/wiki/Help:Magic_words#Behavior_switches> for a list of behavior switches offered by MediaWiki.

* **Variables**:  
    Variables return information about the current page, wiki, or date. Their syntax is similar to templates.
    These are uppercase words surrounded by double braces, e.g. `{{FOO}}`. As such, they look a lot like templates.  

    See <https://www.mediawiki.org/wiki/Help:Magic_words#Variables> for a list auf default variables offered by MediaWiki.
    
* **Parser functions**:

    Parser functions are very similar to variables but take one or more parameters (technically, any magic word that takes a parameter is a parser function), and the name is sometimes prefixed with a hash `#` to distinguish them from templates.

    Parser functions take parameters and are either of the form `{{foo:...}}` or `{{#foo:...}}`, e.g. `{{#invoke:}}`.  
    See also [Help:Extension:ParserFunctions](https://www.mediawiki.org/wiki/Help:Extension:ParserFunctions) for additional information about how to use parser functions.  

    A list of available parser functions offered by MediaWiki can be found here <https://www.mediawiki.org/wiki/Help:Magic_words#Parser_functions>. 

More information about the usage of magic words can be found on the [magic words' manual page](https://www.mediawiki.org/wiki/Manual:Magic_words).