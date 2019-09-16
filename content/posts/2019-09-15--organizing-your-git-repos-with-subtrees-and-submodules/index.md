---
title: Organizing Your Git Repos With Subtrees and Submodules
category: Git
cover: keila-hotzel-unsplash.jpg
author: Jeffrey Yu
---

![branches](./keila-hotzel-unsplash.jpg 'photo by @keilahoetzel on unsplash.com')

A useful way to separate both organizational projects and personal projects is through the usage of git **submodules** and git **subtrees**.  

Submodules and subtrees are used to separate/distribute code within projects. 

For example, in the case of an organization, there may be a specific project holding code which is reused throughout various other projects.
In this case, instead of hard copying the code into each project, you can instead create subtrees and submodules.
This can help if that reused code is updated in some way. In that case, if the code was hard-copied, updating it in every project can be a pain.  

I am personally using submodules and subtrees as a method of separating the backends and frontends for my projects (a personal preference). 
This way, when I want to share or showcase the project, I can just reference a single link, which is cleaner. 

## What are the differences between the two?

An important thing to note is that while the use cases for submodules and subtrees may seem quite similar, actually using them is **very different**. 
If you are looking at submodules and subtrees for the first time, it's important to remember these core differences. 
An incorrect assumption may very well lead to quite a bit of confusion.

### 1. Submodules are pointers, subtrees are copies.

This is really the **overlying reason for all of the other differences**.  

While a submodule will basically just **create a link from the parent directory to another git repo**, a subtree will actually **copy that repo into the parent directory**. In fact, if you go to github, and look at a project directory containing a submodule, you will see something like this:

![submodule-github-exp-1](./submodule-github-example-1.jpg)

_Note the .gitsubmodules folder - we'll explain this later._

Hmm, that's a bit of a weird folder name. What does the '@' represent? Actually - that's yet another difference between submodules and subtrees...

### 2. Submodules are for specific commits | Subtrees 

As you can see, the name of the submodule even displays with identification for which commit it is. 
Meanwhile, a subtree will simply display the directory name for the subtree.

An important result of submodules being pointers and subtrees being copies is that **submodules are harder to pull**, while **subtrees are harder to push**.
Think about it - you can't really pull a pointer. So what do we do? What if we need to clone? We'll answer these questions later! :) 

### Sub
