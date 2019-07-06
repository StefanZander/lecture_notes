# The Structure of Scientific Papers

!!! abstract
    **Objectives**

    - [x] 


This page contains information about the general structure of scientific papers. It helps you to structure your paper and work accordingly. Please be aware that different communities might employ different structures although the main elements remain identical.

## Overview

Scientific papers follow a predefined structure the objective of which is to present acquired results in appropriate ways that support their exploitation and dissemination. 

The following fields contain a list of the main elements separated by the different types of scientific papers (for this course, we distinguish between the two main types of papers in CS – original research paper and surveys). 

### Structure of a Research Paper

!!! Example
    **Main Elements of a Research Paper**

    - Titel
    - Abstract
    - Introduction
        - Motivation
        - Problem Statement and Research Questions
        - Contributions
    - Background (*optional*)
    - Related Work (*=State of the Art*)
    - Approach (=*Methodology*)
    - Realisation (*in CS often named 'Implementation'*)
    - Evaluation
    - Discussion
    - Conclusion (*incl. Future Work*)
    - Acknowledgements (*optional*)
    - References



### Structure of a Survey

!!! Example
    **Main Elements of a Survey**

    - Title
    - Abstract
    - Introduction (incl. SOTA)
        - Motivation
        - Problem Statement and Research Questions
        - Overview of Methodology
    - Scope
    - Description of Analysis Criteria and Methodology
    - Analysis
    - Discussion
    - Related Works
    - Conclusion and Future Work





## Title

### Function

* The title is used to convey the main idea of your paper
* It should provide information about the problem the paper presents a solution for or state the main contribution of the proposed solution

### Style

* Simple and straight; 
* Avoid overly long and bulky words
* No complex sentence-like style
* Use terms that are common in a domain
* Use a first-letter upper case notation (only stopwords are written in lower case)
* If appropriate: Use a descriptive main title and complement it with a detailed subtitle
* Use a neutral language; avoid sensational words; a science paper's title is the opposite of an advertisment headline
* Avoid abbreviations; use them only if they are very well known

### Structure

* either use a main title
* if appropriate: complement a short main title with a sub title, separated by ':' or '–'


## Abstract

### Function 

* Outlines the main elements (problem, contributions, methodology and results) of your work
* Together with the title probably the most often read part of your paper
* Intention is to support readers in assessing wether your paper is useful to them or not 

### Style

* relatively short; for a 15-pages research paper, use max. 5-7 sentences
* only as long as necessary but as precise as possible
* contains no refs or definitions
* avoid abbreviations
* must not contains advertisments or clifhangers
* neutrality in wording / thinking / and explanations


### Structure

Use the following structure (--> see [Milestone #2](milestone2.md) )



## Background

### Function

* provides the necessary information that is required by readers to understand the paper's proposed solution
* provides information about involved technologies, concepts or works that the current work builts upon

### Style

* keep it only as long as really necessary; it takes away space that you might need for explaining your approach
* can be combined with a discussion about related works
* should contain a short summary paragraph that puts all elements into context
* do not only present technologies but put them into the context of your work, i.e., how the are used in or influence your work

### Structure

* structure it as necessary and appropriate
* avoid a too depth structure; cluster elements if necessary
* usually separated by technology / concept / etc.




## Introduction
The introduction is certainly one of the most read section of any paper, and it largely determines the attitude of the reader/reviewer will have toward the work. 
Therefore, it is probably one of the most delicate part of the writing of a paper.

Unfortunately, many people (even very experienced ones) seem to have difficulties at writing a good introduction. For some, it is a daunting task.

This page presents a rather simple method for writing a good introductory chapter. 
<!-- Actually, the core of this method was taught to me many years ago by Krzysztof Apt. At that time, it surprised me in its simplicity and efficiency. In ten years, I have been happily applying it to all introductions I have written. -->


### Main Elements

An Introduction should contain the following three parts:

1. **Background**  
    In this part you have to make clear what the context is. Ideally, you should give an idea of the state-of-the art of the field the paper is about. But keep it short: this part should be less than a page long. Half a page should suffice in case of a normal 15-pages article.

2. **The Problem**  
    If there was no problem, there would be no reason for writing a research paper, and definitely no reason for reading it. So, please tell the reviewer why she should proceed reading. A simple sentence like *"So far, no-one has investigated the link..."* or *"The above-mentioned solutions do not apply to the case ..."*, can sometimes be enough to clarify the point you want to get at. Experience shows that for this part a few lines are often sufficient.

3. **The Proposed Solution**  
    Now - and only now! - you may outline the contributions of the paper. Here you have to make sure you point out what are the novel aspects of your work. There are probably zillions of articles out there on that very subject: you can't expect the reviewer to know them all; so make his life easier and clearly highlight what is the difference between your method and the others. You can take your time here, but I suggest to avoid getting into too much detail.

In addition there can be the following optional ingredients:

- **An anticipation of the conclusions**  
    This is very difficult to do properly. I think that this part should be there only in reports that have a strong position-statement nature. If you decide to include this into the introduction, you might want to (i) keep it as short as possible, (ii) refer as much as possible to the concluding section, and (iii) keep it well separated from the rest of the introduction.

- **Related work**  
    My suggestion is to postpone this part to the end of the paper, unless there are good reasons for doing otherwise. For instance, one good reason for not following this suggestion is the presence in the literature of a very prominent related work, in which case you might want to give immediately an idea of what are the differences between your work and the prominent one. In general, though, I find it much easier to have a related works section at the end of the paper: one reads it when he has already a good idea of the technical contribution. In this case, include in the introduction a line saying "Related works are discussed in Section ...".

- **The outline (plan of the paper)**  
    It might be useful only for long reports, otherwise I think it is a waste of paper as it does not add anything new or novel to it.

### Further Recommendations

<!-- Two Extra Tips -->

- **Keep the parts well separated**  
    Introductions in which parts 1 & 2 & 3 are not clearly separated from each other are usually very annoying, and are certainly much more demanding to the reviewer in terms concentration and energy. Use "itemize", if possible: it helps.

- **Keep it short**  
    Removing everything that is not really necessary is often a very effective strategy for improving an introduction.



## Disclaimer

Most of this information has been compiled from  

- <https://www.win.tue.nl/~setalle/introduction.html> 