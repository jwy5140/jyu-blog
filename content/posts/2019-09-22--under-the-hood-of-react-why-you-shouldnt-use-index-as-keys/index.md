---
title: "Under the Hood of React: Keys, Indexes, and Updates"
category: React
cover: denny-muller-unsplash.jpg
author: Jeffrey Yu
---

![index](./denny-muller-unsplash.jpg 'photo by @redaquamedia on unsplash.com')

If you are learning React, or when you were learning React, you probably got pretty well acquainted with this error message:

![keys-error](./react-key-error.jpg)

Don't worry. We've all been there.  

The next thing that most of us probably did was something like this:

```javascript
arr.map((item, index)=>{
    return <li key={item.index}>{item.name}</li>
})
```
<br/>

Well, or at least that's what my intuition told me to do. I promptly learned that this was generally bad practice after strange errors started happening. 
However, I wasn't told _why_ it was bad practice. In fact, by this point, I didn't even know what the purpose of the key was! It was time for research.

## What does the key in React do?

What do we know about keys so far? We know that we are given a warning when we create list elements without the key attribute.
We've also been told that it is bad practice if we set the key attribute to the index of the element.
Just from these two facts alone, we can say that keys are related to lists, and guess that keys are related to the ordering of lists.

As it turns out, the key is used by React to track list item positions and changes for DOM updating. 
Think of it as React's 'id' for the item. In databases, we know that the 'primary_key' is generally the id for an entry - a unique identifier.
Here, the key also needs to be a unique identifier, so that React is able to _always_ recognize which item it is looking at.

If you've read my [previous article about the virtual DOM in React]('https://jayewe.com/the-significance-of-the-virtual-DOM/'), then you know how React updates the DOM.
React uses the virtual DOM to check which components have changed, and then **only updates those elements on the real DOM**.
This is the reason behind the importance of React being able to recognize which list items are which. 
