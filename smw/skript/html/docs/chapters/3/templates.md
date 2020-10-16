# Introduction to Templates

!!! Tip
    **Task**  
    Please read all the details about Templates on the official MediaWiki pages  
    <https://www.mediawiki.org/wiki/Help:Templates>



!!! note
    **Excellent tutorial videos about templates**  
    YouTube hosts some excellent videos about the basic principles and formatting of templates

    * Introduction to templates  
        <https://www.youtube.com/watch?v=IJ4BM5MFXmc>
    * Basic formatting of templates  
        <https://youtu.be/SsLahlGX0Ls>
    * Template Variables  
        <https://youtu.be/X0QD5HT2qgc> 


<!-- ### Motivation



### Terminology

Transclusion
: ...

Template
: ... -->


<!-- Template

Motivation

Creation

Usage -->




### Function

Templates allow for the inclusion of pre-defined content in wiki pages.

This form of inclusion is called **Transclusion**

!!! warning
    **Definition**: >>**Transclusion**<<  
    Transclusion describes the process of embedding content defined in a template into another page. 
    Transcluded content can be parameterized by specifying individual values for the parameters defined in the template page.  

!!! note
    **Explanatory Video about Transclusion**  
    An excellent explanatory video about transclusion with elaborations about the different transclusion commands is available at  
    <https://www.youtube.com/watch?v=SsLahlGX0Ls&list=PLw2YgbWET_ph1IGqIyiZD8w9FIHlYASui&index=8>

Templates
: ... can be created as any wiki page, but must be defined in the `Template:` namespace
: ... can contain almost any kind of wiki content
: ... can have parameters the values of which will be inserted in the template's content during transclusion
: ... often hold semantic properties or subobjects in Semantic MediaWiki


!!! warning
    **Definition**: >>**Template**<<  
    A template is a wikipage defined in the `Template:` namespace that contains content that can be transcluded in other wiki pages.

Templates are often used for **harmonizing**[^1] semantic data and reducing semantic drift
: ...by using pre-defined **semantic properties** in a template page
: ...and by setting their allowed values through template **parameters** (often in conjunction with Page Forms)
: ~> So, every page that transcludes a template contains the same semantic data and structure

[^1]: Harmonizing means to make something consistent and compatible

### Syntax

The following example displays a template with named parameters for entering new research grants

<!-- ``` diff
<noinclude> 
  Dies ist die Vorlage zum Anlegen allgemeiner Informationen über Unternehmen 
  (bspw. im Zuge potentieller Industriekooperationen oder Use Case Partner). 
  
  Sie sollte im folgenden Format genutzt werden: 
  <pre> 
    {{FactSheet_Company 
     |Name=
     |Adresse= {Fließtext inkl. Wikisyntax} 
     |Ansprechpartner_extern= {Name+Kontaktdaten; Mehrere Ansprechpartner durch ';' trennen } 
     |Branche= {Auflistung relevanter Bereiche -- getrennt durch ';'}
     |Zugehöriges Projekt= {Projekte in denen man bereits zusammengearbeitet hat -- getrennt durch ';'} 
     |Sonstiges= {Fließtext inkl. Wikisyntax} 
     |Website={URL der Website} 
     |Ansprechpartner_intern={Name des internen Ansprechpartners -- getrennt durch ';'} }} 
  </pre> 
  Klicken Sie auf „Bearbeiten“, um den Quelltext der Vorlage anzusehen. 
</noinclude>
<includeonly>
  [[Name::{{{Name|}}}]] 
  [[Website::{{{Website|}}}]] 
  [[Adresse::{{{Adresse|}}}]] [[Branche::{{{Branche|}}}]] 
  [[Ansprechpartner_extern::{{{Ansprechpartner_extern|}}}]]|+sep=; 
  [[Sonstiges::{{{Sonstiges|}}}]] 
  [[Zugehöriges Projekt::{{{Zugehöriges Projekt|}}}]] |+sep=; 
  [[Ansprechpartner_intern::{{{Ansprechpartner_intern|}}}]] |+sep=; 
  [[Kategorie:Unternehmen]] 
</includeonly>
``` -->


``` diff
<noinclude> 
Dies ist die Vorlage zum Anlegen neuer nationaler und europäischer Förderprogramme. 
Zum Anlegen eines neuen Förderprogramms einfach den folgenden Ausschnitt in den Quelltext 
der neuen Seite kopieren und die Parameter entsprechend belegen: 
<pre> 
  {{Förderprogramm 
   |Name= 
   |Akronym= 
   |Webseite= 
   |Deadline= 
   |Beschreibung= 
   |Sonstige_Informationen= 
  }} 
</pre> 
Das Template sollte im oben dargestellten Format genutzt werden. 
Bis auf das Attribut Deadline können alle Felder mit Freitext befüllt werden; 
das Attribut Deadline erwartet Datumsangaben (nicht 'Ende September' sondern '30.09.2016'). 
</noinclude> 
<!-- **** Hier beginnt das eigentliche Template **** --> 
<includeonly> 
  [[Category:Förderprogramm]] 
  [[Name::{{{Name|}}}]] 
  [[Akronym::{{{Akronym|}}}]] 
  [[Webseite::{{{Webseite|}}}]] 
  [[Deadline::{{{Deadline|}}}]] 
  [[Beschreibung::{{{Beschreibung|}}}]] 
  [[Sonstiges::{{{Sonstige_Informationen|}}}]] 
</includeonly>
```






### Parameters

Templates can have **parameters** that allow for passing individual data to template content that is to be transcluded.

#### Specification in Templates

Parameters within templates can either be specified 
: ... anonymously via the sequence of occurrence, i.e., `:::diff {{{1}}}`, `:::diff {{{2}}}`, etc.
: ... via specific parameter names, i.e., `:::diff {{{Parameter_name|default_value}}}`

Please note that parameters in templates need to be specified with three curly brackets `{{{Prameter_name||Parameter_number}}}` (N.B. '`||`' means 'OR' and is not part of the parameter syntax)
``` diff
Syntax:
=======
{{{Parameter_name}}}       OR       {{{Parameter_number}}}

Example:
========
{{{project}}}              OR       {{{1}}}
```

#### Usage in Transcluded Pages


### Creation

Every template needs to a have a **unique page name** in the `Template:` namespace; they can be created as any other wikipage.

Template URL: `:::diff {Semantic_MediaWiki_URL}\Template:Template_name`
Template Name: `Template_name`

``` diff
<!-- additional content -->
...
[[property_1_name::{{{parameter_1_name}}}]]
[[property_2_name::{{{parameter_2_name}}}]]
... 
<!-- additional content -->
```

Usage on a different wiki page – without parameters specified:
```diff
{{Template_name}}
```

Usage – with parameters specified on the page where the template it to be transcluded
``` diff
{Template_name
|parameter1=value1
|parameter2=value2
|...
}}
```

Templates can be used in any place in a page.


!!! Note
    **Always explicitly specify transcluding content**  
    It is recommended to explicitly markup the content in a template that is to be transcluded and separate it from supplemental or instructional content that describes the usage of the template.  
    MediaWiki provides distinct commands (`<include_only/>`, `<no_include/>`) to control the transclusion of template content and separate it from e.g. instructional content on how to use the template.


