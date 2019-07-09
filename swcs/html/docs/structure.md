# The Structure of Scientific Papers

!!! abstract
    **Objectives**

    - [x] 


This page contains information about the **general structure** of scientific papers. It helps you to structure your paper and work accordingly. 

!!! note
    Please be aware that different scientific communities might employ slightly different structures although the main sections and contents remain identical.

## Structure of Research and Survey Papers

Scientific papers follow a **predefined structure** the objective of which is to present **acquired results** and the **deployed methodology** upon which the results were acquired in appropriate ways. The objective of deploying such a predefined structure is to support the **exploitation** and **dissemination** of research results. 

In the following, we presented a structural recommendation for the two main types of scientific papers in computer science,

* original **research papers**, and
* **surveys**.

!!! note
    **Hint**: Click on the respective element to access detailed information about it. 

The details pages are all structured identically.  
They introduce a section by describing its

* **function**
* **style**
* **structure**

and provide some **tipps** or **remarks** for some elements.

<!-- The following fields contain a list of the main elements separated by the different types of scientific papers (for this course, we distinguish between the two main types of papers in CS – original research paper and surveys).  -->

### Structure of a Research Paper

!!! Example
    **Main Elements of a Research Paper**

    - [Title](elements/title.md)
    - [Abstract](elements/abstract.md)
    - [Introduction](elements/introduction.md)
        <!-- - Motivation -->
        <!-- - Problem Statement and Research Questions -->
        <!-- - Contributions -->
    - [Background (*optional*)](elements/background.md)
    - [Related Work](elements/related_work.md) 
    - [Approach (*aka Methodology*)](elements/methodology.md)
    - [Realisation (*in CS often named 'Implementation'*)](elements/implementation.md)
    - [Evaluation & Discussion](elements/evaluation.md)
    - [Discussion (_often included in the evaluation_)](elements/evaluation.md) 
    - Conclusion (*incl. Future Work*)
    - Acknowledgements (*optional*)
    - References



### Structure of a Survey

!!! Example
    **Main Elements of a Survey**

    - [Title](elements/title.md)
    - [Abstract](elements/abstract.md)
    - [Introduction](elements/introduction.md) (incl. SOTA)
        - Motivation
        - Problem Statement and Research Questions
        - Overview of Methodology
    - Scope
    - [Description of Analysis Criteria and Methodology (*aka Methodology*)](elements/methodology.md)
    - Analysis
    - Discussion
    - [Related Work](elements/related_work.md)
    - Conclusion and Future Work





## Details

* [Title](elements/title.md)
* [Abstract](elements/abstract.md)
* [Introduction](elements/introduction.md)
* [The Background Section](elements/background.md)
* [Related Work](elements/related_work.md)
* [Approach (*aka Methodology*)](elements/methodology.md)











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