# How to get your Semantic MediaWiki ready to Fly

*...some SMW Best Practices*


### Recommendation 1: Design properties based on concrete requirements

**Approach 1**:
: Install SMW and rely on the Wisdom of the Crowds. 
→ Not known to have worked anywhere (yet?).

**Approach 2**:
: Kick-start SMW usage by creating properties, input forms, data annotations, and queries that show their use. 
: --> Main questions: Which data should be stored? How?  
    (Fortunately, it is easy to revisit these decisions later)

Better question: **What should be done with the data?**

* Desired queries
* Special displays (e.g. timeline) 
* Other uses for data?

!!! note
    **Recommendation 1** Design properties based on concrete requirements



### Recommendation 2: Collect Data with Templates (and Semantic Forms)

* Most common style of annotation:
    * Property assignments in templates
    * Integrate display (template) and semantics (data)
    * Allows further integration with editing (Semantic Forms) 
* Many parameter values can be used as property values
* Templates can be used to compute additional data 
* Special case: store absence of data
    * SMW cannot query for pages that lack some annotation
    * Templates can add data to indicate that some information is missing (use #if and friends)


### Recommendation 3: Do not try to model the world

Instead: Start small and scale fast

It is impossible to capture all human knowledge in property-value pairs.  
~> How much should be covered ?  
~> How exact and detailed should it be captured ?

Focus on specific aspects of a domain (selected subsets of the universe of discourse)

Remember
--> Do not attempt to build an ontology of the world 
--> Start with the easy and obvious (80/20 rule)
--> Do not abuse SMW


### Recommendation 4: Keep the Template balanced

Do not solve all problems with _one_ template! 

* The Template Temptation
    * Templates can use #if to control their behaviour based on parameters
    * With SMW, templates can use #show and #ask to gather more data to control the behaviour

--> Complicated, unmanageable template pages
--> Slow down on page display and rendering
--> Unreasonable server load



