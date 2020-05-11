# Page Forms (aka Semantic Forms)

!!! note
    **Official Documentation**  
    You will find alot of useful information about page forms in the official documentation pages  
    
    * Defining forms  
        <https://www.mediawiki.org/wiki/Extension:Page_Forms/Defining_forms>


Page Forms allow to create and edit **semantic annotations** via **HTML5 forms**. 

Page Forms work in conjunction with **semantic templates**, i.e., they direct user inputs to template parameters and use them as values when transcluding template content.

In technical terms, Page Forms are **form-definition templates** that declaratively describe properties and behaviour of HTML5 forms and **interlink** these with semantic templates for which they are defined.
In that way, users can create new SMW pages or alter existing ones by filling out Web forms while ensuring that the **semantic annotations remain consistent** and apply to the data and domain models upon which the knowledge graphs of a Semantic MediaWiki system are built.


### How Page Forms Work

Page Forms use semantic templates in order to create new or edit existing wiki pages.
Parameters in templates are assigned with form values when the template is embedded into a wiki page.  

Usually, for each parameter in a template, Page Forms defines a separate input element declaration the value of which will then be assigned to the template parameter when the template call is embedded in the wiki page. 

`{{{field|title|mandatory|property=title|size=120|placeholder=The project's full title}}}`

The second parameter (`|title`) in the `{{{field...}}}` tag refers to the named parameter (`{{{title|}}}`) in the semantic template a from is defined for.

`[[title::{{{title|}}}]]`


### Combining Page Forms and Semantic Templates

1. Embedded Templates  
    <https://www.mediawiki.org/wiki/Extension:Page_Forms/Defining_forms#Embedded_templates>

2. Multiple-Instance Templates  
    <https://www.mediawiki.org/wiki/Extension:Page_Forms/Defining_forms#Multiple-instance_templates>


#### Multiple-Instance Templates

If you add the 'multiple' parameter to a template, it will allow for multiple (or no) instances of this template in the form, and therefore in the generated page. 

You can rename the "Add another" button to any other text, using the "add button text=" parameter. For instance, to change the button to read "Add another occupation" for a template called "Occupation", you could have "{{{for template|Occupation|multiple|add button text=Add another occupation}}}".

You can set the minimum and maximum number of instances users can set for such a template, using the "minimum instances=" and "maximum instances=" parameters, respectively.



If you want to semantically store all the data contained in these multiple-instance templates, it is recommended to use Semantic MediaWiki's subobjects. (If you use subobjects, you should not name them, so that each subobject gets an automatically-assigned name[1].)


#### Wiki Page

```
{{Project Factsheet v1
 |title=ReApp – Wiederverwendbare Roboterapplikationen für flexible Roboteranlagen basierend auf ROS-Industrial
 |acronym=ReApp
 |budget=2000000
 |start_date=01.01.2014
 |end_date=31.12.2016
 |description=Das Projekt ReApp greift die Konzepte von ROS-Industrial auf, um standardisierte Schnittstellen zu definieren und Soft- sowie Hardwarebibliotheken anzulegen, die echtes Plug-and-Play verschiedenster Komponenten erlauben. Zusammen mit einem Katalog wiederverwendbarer intelligenter Dienste und einer modellgetriebenen Entwicklungsumgebung – der ReApp-Engineering Workbench – sollen sich Robotersysteme schneller und kostengünstiger an spezifische Anforderungen vor allem kleiner und mittlerer Unternehmen (KMU) anpassen lassen.
 |members=Matthias Frank; Stefan Zander
 |topics=Semantic Technologies; Robotik; Model-Driven Development
}}

```




#### Template

```
<noinclude>
This is the "Project Factsheet v1" template.
It should be called in the following format:
<pre>
{{Project Factsheet v1
|title=
|acronym=
|budget=
|start_date=
|end_date=
|description=
|members= {Name der Mitglieder getrennt durch ';'}
|topics= {Forschungsfelder, mehrere Angaben durch ';' trennen}
}}
</pre>
Edit the page to see the template text.
</noinclude><includeonly>{| class="wikitable"
! Projektname
| [[title::{{{title|}}}]]
|-
! Akronym
| [[acronym::{{{acronym|}}}]]
|-
! Budget
| [[has_budget::{{{budget|}}}]]
|-
! Projektstart
| [[has_start_date::{{{start_date|}}}]]
|-
! Projektende
| [[has_end_date::{{{end_date|}}}]]
|-
! Beschreibung
| [[has_description::{{{description|}}}]]
|-
! Mitarbeiter
{{#set:
 has_member={{{members|}}}
 |+sep=;
}}
| {{#show: {{PAGENAME}} |?has_member }} 
|-
! Forschungsthemen
{{#set:
 has_topic={{{topics|}}}
 |+sep=;
}}
| {{#show: {{PAGENAME}} |?has_topic }} 
|-
|}

[[Category:Research Project]]
</includeonly>
```


#### Formular

```
<noinclude>
This is the "Project Factsheet v1" form.
To create a page with this form, enter the page name below;
if a page with that name already exists, you will be sent to a form to edit that page.


{{#forminput:form=Project Factsheet v1}}

</noinclude><includeonly>
<div id="wikiPreview" style="display: none; padding-bottom: 25px; margin-bottom: 25px; border-bottom: 1px solid #AAAAAA;"></div>
{{{for template|Project Factsheet v1}}}
{| class="formtable"
! Title: 
| {{{field|title|mandatory|property=title|size=120|placeholder=please enter the full title of the project}}}
|-
! Acronym: 
| {{{field|acronym|mandatory|property=acronym|size=20|placeholder=Please enter the project's short name (acronym)}}}
|-
! Budget: 
| {{{field|budget|input type=text|property=has_budget|size=20|placeholder=Please enter the project's budget}}} EUR
|-
! Projektstart: 
| {{{field|start_date|input type=datepicker|highlight days of week=1,2,3,4,5|property=has_start_date|date format=dd.mm.yyyy}}}
|-
! Projektende: 
| {{{field|end_date|input type=datepicker|disable days of week=0,6|property=has_end_date}}}
|-
! Beschreibung: 
| {{{field|description|input type=textarea|property=has_description|cols=80|rows=20|placeholder=Please enter the project's description|autogrow}}}
|-
! Mitarbeiter: 
| {{{field|members|input type=tokens|property=has_member|list|delimiter=;}}}
|-
! Themenfelder: 
| {{{field|topics|input type=tokens|property=has_topic|list|delimiter=;}}}
|}
{{{end template}}}

'''Free text:'''

{{{standard input|free text|rows=10}}}


{{{standard input|summary}}}

{{{standard input|minor edit}}} {{{standard input|watch}}}

{{{standard input|save}}} {{{standard input|preview}}} {{{standard input|changes}}} {{{standard input|cancel}}}
</includeonly>
```



### Formular Data with Subobjects


#### Subobject Template 

```
<noinclude>
This is the "Project member with role" subobject template.
It should be called in the following format:
<pre>
{{Project member with role
|project=
|role=
|start_date=
|end_date=
|member=
}}
</pre>
Edit the page to see the template text.
</noinclude><includeonly>
{{#subobject:
 |Refers to project={{{project|}}}
 |Has role={{{role|}}}
 |Has start date={{{start_date|}}}
 |Has end date={{{end_date|}}}
 |Has member={{{member|}}}
 |Type=subobject
}}
</includeonly>
```