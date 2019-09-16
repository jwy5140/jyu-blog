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


