---
title: Using the useRef Hook
category: React
cover: jean-frederic-fortier-unsplash.jpg
author: Jeffrey Yu
---

![map](./jean-frederic-fortier-unsplash.jpg "photo by jffortier on unsplash.com")

Today, we will be taking a more in-depth look at the useRef hook.  

As usual, to better understand the hook, lets take a moment to reflect on what a 'ref' in React is :).

## What's a ref?

In its simplest form, a ref is, as its name suggests, a reference to something (be it an element or variable) in your application.
The official React documentation states that a ref is a method of accessing DOM nodes or React elements created in a render. 
However, that reference is special! In a way, it _transcends_ React itself.
For fun, I like to think of it as being independent of time and space - with respect to your application of course. 

What I mean by that is that when you make/set a ref, the reference is set to an element/variable at that particular moment.
If state updates / a re-render occurs, which updates the element/variable that the ref is set to, the ref will remain the same. 
In that way, refs are independent of the rest of your application. You need to _explicitly update the ref_ to change it.
In addition (and in-line with this idea of being independent from everything else), _changing a ref doesn't cause a re-render_.

To better illustrate, lets take a look at an example: 

```javascript

```