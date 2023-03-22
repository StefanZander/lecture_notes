---
marp: true
theme: custom-theme-roboto
paginate: true
size: 16:9
math: mathjax
---
<style>
/**
 * @theme enable-all-auto-scaling
 * @auto-scaling true
 */

/* @import 'default'; */
/* @import url('user-theme2.css'); */
</style>



<!-- marp --engine ./engine.js --watch --theme-set custom-theme-roboto.css -- --allow-local-files knowledge.md -->
<!-- marp --pdf --allow-local-files --engine ./engine.js --theme-set custom-theme-roboto.css -- knowledge.md -->



# Foundations of Semantic Knowledge Graphs

#### Prof. Dr. Stefan Linus Zander 

Knowledge, Knowledge Representation, and Understanding {.lightgreen .Big .skip}


---
<!-- header: Overview -->
<!-- footer: Foundations of Semantic Knowledge Graphs | Data Graphs | Prof. Dr. Stefan Zander | Hochschule Darmstadt – University of Applied Sciences -->

## What you will learn in this Unit

...


---
# What is Knowledge?



---
## Knowledge can be explained^*^ philosophically, pragmatically, and technically

::::: columns
:::: single
**Philosophically**
- Knowledge is a subset of all true believes
- Huge disconsensus in philosophy about the different conceptions and definitions
- One largely beliefed definition is JTB
- The american philosopher Edmund Gettier disapproved the JTB by providing a number of counter examples – also known as the Gettier Cases
::::
:::: single
**Pragmatically**
- several models have been proposed to explain the nature of knowledge, mostly in the context of certain scenarios (e.g. CPS, Industry 4.0, Innovation etc.)
- The most prominent ones among others are
  - The Wissenstreppe 4.0 by Claus North
  - The SECI-Model
  - The Knowledge Pyramid by Ackoff, 1999
::::
:::: single
**Technically**
- Knowledge needs a form of manifestation to be represented in machine-processable models.
- This area is denoted as (formal) knowledge representationn
- It makes extensive use of different logical theories to represent knowledge in formal, unambiguous ways while being able to draw inferences on the model's constituents 
::::
:::::

::: footnotes
^*^ As we will see, there is no universally accepted definition of/for 'Knowledge'
:::

---
## So what do we do now...?

The simplest approach for defining knowledge is to define it on the basis of a continuum of increasing meaning and value in terms of the intentions and actions an agent can perform based on the contemplation of elements being constituents of  


---
## Knowledge is best explained through a Continuum of increasing Specificity and Meaningfulness

::::: gridncol widthauto horizontal-center
Symbols

$$\rightarrow$$

Data

$$\rightarrow$$

Information

$$\rightarrow$$

Knowledge

$$\{ a, b , 4, 7, \theta, \sigma, \dots \}$$

<br/>

7,4

<br/>

7,4 m

<br/>

```graphviz
digraph rdf {
  graph [fontname = "helvetica"];
  node [fontname = "Barlow Condensed"];
  edge [fontname = "Barlow Condensed"];
  
  // RDF nodes
  "Galeocerdo cuvier" -> "Animal" [label="is a"]
  "Galeocerdo cuvier" -> "7,4m" [label="maxLength", shape="box"]
}
```
:::::

::::: columns
:::: single
![](figures/tiger_shark.png)
::::
:::: single vert-center
$$ \text{Galeocerdo cuvier} \sqsubseteq \text{Animal} \sqcap \forall \text{maxLength}.7,8$$
::::

:::::





---
## Data

- Data is raw.
- It simply exists and has no significance beyond its existence (in and of itself).
- It can exist in any form, usable or not.


---
## Information

- Information is data that has been given **meaning** by way of **relational connection**.
- This "meaning" can be useful, but does not have to be.
- Information is **contained in descriptions**.
- Information answers to questions that begin with such words as *who*, *what*, *when*, *where*, and *how many*.


---
## Knowledge


::::: columns
:::: double
- **Knowledge** is the appropriate collection of information, such that it's intent is to be **useful**.
- **Wisdom** is the ability to make **sound judgments** and **decisions**.
- **Understanding** is a **continuum** that leads from data, through information and knowledge, and ultimately to wisdom.


::: bluebox center SKIP
**Data** transforms to **information** by ==convention==, 
**information** to **knowledge** by ==cognition==, and
**knowledge** to **wisdom** by ==contemplation==.
:::
::::
:::: triple
![](figures/knowledge_pyramid.jpeg)
::::
:::::


::: footnotes
Source: D. Ackoff, 1999
:::


---
## What is Knowledge ?

::: graybox
**An Explanation by Chat-GPT**

Knowledge is what we know about the world around us. It is what we have learned and understood, whether through experience, study, observation, or instruction. It includes facts, concepts, principles, ideas, and insights that help us understand the world and navigate it. Knowledge is what we have in our minds and can apply to solve problems, make decisions, and navigate various situations.
:::


---
## Knowledge as justified true belief (JTB)

::::: columns
:::: single
- The JTB account of knowledge is the claim that knowledge can be conceptually analyzed as justified true belief, which is to say that the meaning of sentences such as "Smith knows that it rained today" can be given with the following set of conditions, which are necessary and sufficient for knowledge to obtain:

- An agent $S$ knows that a proposition $P$ is true if and only if:
  1. $P$ is true, and
  2. $S$ believes that $P$ is true, and
  3. $S$ is justified in believing that $P$ is true

- The concept of justified true belief states that in order to know that a given proposition is true, one must not only believe the relevant true proposition, but also have justification for doing so.

<!-- In more formal terms, -->

::::
:::: single
![](figures/jtb_model_of_knowledge.png)
::: caption
The Gettier problem is motivated by the idea that some justified true beliefs do not amount to knowledge; they are the result of lucky coincidents.
:::
::::
:::::

::: footnotes
Sources: (1) https://en.wikipedia.org/wiki/Gettier_problem and (2) https://en.wikipedia.org/wiki/Definitions_of_knowledge#Justified_true_belief
::: 


---
## Knowledge as justified true belief (JTB)

::::: columns 
:::: single
**Truth**
- Knowledge implies truth
  - i.e. one cannot know things that are not true even if the corresponding belief is justified and rational. 
  - e.g. nobody can know that Hillary Clinton won the 2016 US Presidential election since this did not happen.  
- Knowledge is a relation through which a person stands in cognitive contact with reality. 
- This contact implies that the known proposition is true.
::::
:::: single
**Belief**
- Knowledge is usually understood as a form of belief: to know something implies that one believes it.
  - e.g. an agent accepts the proposition in question.
- Belief is interpreted as a commitment to something being true.
- A few epistemologists hold that true belief by itself is sufficient for knowledge.
- Despite various different conceptions there is a common and shared agreement among philosophers that knowledge is a form of belief. 
::::
:::: single
**Justification**
- Justification is based on the idea that having a true belief is not sufficient for knowledge since knowledge implies more than just being right about something. 
- Bliefs based on dogmatic opinions, blind guesses, or erroneous reasoning do not constitute knowledge even if they are true.
  - e.g. For example, if someone believes that Machu Picchu is in Peru because both expressions end with the letter 'u', this true belief does not constitute knowledge.
- True beliefs that are based on good justification constitute knowledge <!-- e.g. a person visiting peru knows that Machu Picchu is in Peru -->
::::
:::::