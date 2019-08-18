---
title: An Introduction to React Hooks
category: React
cover: matt-whitacre-unsplash.jpg
author: Jeffrey Yu
---

![forest-path](./matt-whitacre-unsplash.jpg "photo by @mattwhitacre on Unsplash.com")

Lets delve into a relatively new portion of the React world: hooks.  
The hooks API was released on Feb 19th, 2019 - just about half a year ago! 

With hooks, we gained the ability to create React applications with a significant difference: no more class components. You can write using only **functional components**. 

However, before discussing the 'how' of React hooks, lets first take a look at the 'why'. 

## Why use hooks?

The answer is...well, you don't really need to use hooks.
By all means, at this point in time, you can keep chugging on using class components. This can be especially true if using Redux.  

_Although, they also recently added documentation for using hooks in Redux! Check it out [here](https://react-redux.js.org/next/api/hooks)._  

This is the whole reason behind hooks being 'opt-in' and completely backwards compatible - you can slowly implement hooks into existing react code containing class components.  

However, I would say that you **should learn** hooks. 
The reason for that is that there is ongoing development on hooks, and the current plan is to slowly migrate to hooks being standard. 
While there is currently negligible performance increase by switching to purely functional components, that could, and probably will change with time.  

That being said, there are certainly benefits to the usage of hooks. For example, it's simply cleaner and simpler to use only one type of component.
When using React hooks, it's possible for state to exist in your functional component - one of the main reasons to use a class component. 
However, when creating a stateless container component, it makes more sense to just use a functional component. 
With hooks, instead of nonsensibly making everything into a class component, we can simply add state to a functional component! 
Instead of starting with something large and taking away what isn't needed, we would be starting with something small, and adding whatever we need to that.
In fact, React even interprets functional and class components differently. A functional component is simply called normally, like so: 

```javascript
const Card = () => {
    ...
    return <div>{result}</div>;
}

// React Interpretation
Card(arguments);  
```  
However, a class component would require **one** additional step:

```javascript
class Card extends Component{
    ...
    render() {
        return <div>{result}</div>
    }
}

// React Interpretation
const card_instance = new Card(arguments);
const card_1 = card_instance.render();
```

This can actually be seen from the inner code of the 'Card' functions and classes. The class requires the render function to return the result. The function just returns the result.