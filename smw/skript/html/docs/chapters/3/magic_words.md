# Magic Words

_Source: <https://www.mediawiki.org/wiki/Help:Magic_words>_

Magic words are strings of text that MediaWiki associates with a return value or function, such as time, site details, or page names. 

There are three general types of magic words:

* **Behavior switches**:  
    These are usually written as uppercase words surrounded by double underscores, e.g.`__FOO__`.
* **Variables**:  
    These are uppercase words surrounded by double braces, e.g. `{{FOO}}`. As such, they look a lot like templates.
* **Parser functions**:  
    These take parameters and are either of the form `{{foo:...}}` or `{{#foo:...}}`, e.g. `{{#invoke:}}`. See also [Help:Extension:ParserFunctions](https://www.mediawiki.org/wiki/Help:Extension:ParserFunctions).

More information about the usage of magic words can be found on the [magic words' manual page](https://www.mediawiki.org/wiki/Manual:Magic_words).