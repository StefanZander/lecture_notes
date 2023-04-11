---
marp: true
theme: custom-theme-roboto
paginate: true
---
<style>
/**
 * @theme enable-all-auto-scaling
 * @auto-scaling true
 */

/* @import 'default'; */
/* @import url('user-theme2.css'); */
</style>



<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files organisation.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- organisation.md -->



# Foundations of Semantic Knowledge Graphs

#### Prof. Dr. Stefan Linus Zander 

Organisational Matters (Kick-Off) {.lightgreen .Big .skip}


---
<!-- header: Organisation -->
<!-- footer: Foundations of Semantic Knowledge Graphs | Kick-Off-Meeting Summerterm 2023 | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->



## Objectives :fa-bullseye:

::::: columns-center
:::: double
After completing the course, students are able to...
- understand **concepts**, **technologies** and **languages** used the create semantic knowledge graphs
- differentiate semantic knowledge graphs from other **graph-based data structures** (so-called *data graphs*)
- build *ontologies* and define the **formal**, **model-theoretic semantics** to be used in a knowledge graph
- **query** knowledge graphs using standard semantic query languages (e.g. *SPARQL*)
- make judgements about the **meaningfulness** (ie. *expressivity*) of knowledge representation frameworks and domain modelling languages 
- understand what **semantics** mean in a _machine-processable context_ <!-- and what inferences can be drawn -->
- understand the _knowledge representation frameworks_ used in popular KG applications

<!-- - apply the learned concepts in order to build a semantic knowledge graph for an individual business domain or application using RDF/S and/or OWL
- use state of the art ontology creation and management tools
- utilize existing knowledge graphs for individual business applications -->
::::
:::: single 
![](figures/brain3.png)
::::
:::::


---
## We will talk about... :fa-person-chalkboard:

- the **mathematical foundations** of modern knowledge graphs
- the **domains** in which KGs can be applied and are used
- the different **types** of KGs and the elements that separates them
- how KGs can be represented electronically, i.e., in a **machine-processable** way
- the role **semantics** play in processing KG elements
- what **RDF/S** is and how RDF can be used to represent KGs
- how **domain knowledge** can be encoded in RDFS and what limitations exist in terms of expressivity
- the role of **ontologies** in KGs and how to define them using SOTA ontology languages
- how to **query** KGs 
- different associated, peripherial **topics** related to KGs and their application (see topics list)


---
## How this Module is structured :fa-folder-tree:

The module consists of __7 main parts__:
1. Introduction to knowledge graph concepts and terminology
2. Knowledge representation frameworks
3. Methods for ontology and knowledge graph construction
4. Query languages for semantic knowledge graphs (SPARQL)
5. Application and use cases of semantic knowledge graphs (information integration, query answering, navigation support etc.)
6. Individual project work and supervision
7. Student lectures (ie. semester projects) and final assessment




---
## Preliminary Schedule :fa-calendar-days:

- Week 1: Kick-off and organisational matters
- Week 2: Knowledge, Graphs, and Semantics
- Week 3: Introduction to RDF
- Week 4: RDF Serialization + Introduction to RDF Schema (RDFS)
- Week 5: Reasoning in RDFS
- Week 6: Ontologies and Expressive KG Languages
- Week 7: Querying RDF Graphs
- Week 8 - 9: Preparation of student tutorials 
- Week 10 - 13: student tutorials
- Week 14: short written or oral examination (30min) during the learning week 



---
## Lecture and Practical Sessions

- **Lecture**: _:far-calendar-days: WED, 1st Block (8:30 - 10:00)_
  - conducted in a seminal style
  - with many examples – but also theoretical background information
  - discussion of homework

- **Practical Sessions** ($\leadsto$ _:fa-pencil: independent work_)
  - weekly tasks in moodle (see slots)
  - no in-class lecture
  - discussions in plenum in the next lecture
  - I will not check the homework – _I trust that you are interested in the topics and work through them on your own_
  - I am available online/offline for discussion / feedback / support / etc.
  <!-- - ~~no bonus points in summer term 2023~~  -->


---
## Lecture Material :fa-map:

The **Moodle course** (https://lernen.h-da.de/course/view.php?id=20070) hosts all relevant _lecture material_
- The course and all material are freely available
- no key needed
- please enter your names for the _semester projects_ (tutorials) (--> see corresponding activity)
- use the **discussion forum** for questions
- Announcements will be communicated via the Moodle course
- Semester projects uploaded by the students (the resp. slots will be created during the semester) 



---
## Semester Project (general)

- Practical application of KG technology
  - in a software project adressing a defined and agreed goal
- Conducted in teams of 2-3 members
- Topic will be defined in coordination with the lecturer
- Final results will be presented during the last course weeks



---
## Semester Project (Summer Term 2023)

::: bluebox center marg2 space
**Objective**: The semester project gives you the chance to individually work trough a topic of interest and teach others about it in form of a self-designed lecture in tutorial style.
:::


- Teamwork with up to 3-4 students
- Choosing a topic from the **topics list** (see Moodle) and presenting it in form of a **tutorial** 
  - provide the necessary _theoretical background_ information
  - create and conduct _practical exercises_ to help the audience in becoming more familiar with SOTA concepts and technologoies of your topic
  - use any _didactic tools_ you like (quizzes, interactive tools, gamification, group work, etc)
- Upload slides and lecture material to Moodle beforehand so that other can access it^1^
- The lecture should be **approx. 60 minutes** 
- Afterwards, there is a _feedback session_ and an _assessment session_^2^
- The *grading* will be caluculated from the *scores* of the _lecturer (50%)_ and the _audience (50%)_

::: footnotes
^1^ There will be separate slots for each topic.

^2^ Each group receives a score from the lecturer and all other attendees. The score sheets will be made available online (the necessary information will be communicated during the semester).
:::



---
## Grading :fa-user-graduate:

Your **final mark** will be composed of _two single scores_
- 70% score of the **semester project** 
- 30% mark of the **written** or **oral examination** at the semester's end



---
## Questions ?
