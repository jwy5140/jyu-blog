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

#Why use hooks?

<br />

The answer is...well, you don't really need to use hooks.
By all means, at this point in time, you can keep chugging on using class components. This can be especially true if using Redux.  

_Although, they also recently added documentation for using hooks in Redux! Check it out_ <a target='_blank' href=https://react-redux.js.org/next/api/hooks>_here_</a>.  

This is the whole reason behind hooks being 'opt-in' and completely backwards compatible - you can slowly implement hooks into existing react code containing class components.  

However, I would say that you definitely **should learn** hooks if actively using React. 
The reason for that is that there is ongoing development on hooks, and the current plan is to slowly migrate to hooks being standard. 
While there is currently negligible performance increase by switching to purely functional components, that could, and probably will change with time.  

That being said, there are certainly benefits to the usage of hooks. 
Not only do you not have to deal with the concept of 'this' (and subsequently not write it every time when using or declaring a state variable), but it's also simply cleaner and simpler to use only one type of component.
When using React hooks, it's possible for state to exist in your functional component - one of the main reasons to use a class component. 
However, when creating a stateless container component, it makes more sense to just use a functional component. 
With hooks, instead of nonsensibly making everything into a class component, we can simply add state to a functional component, and have the best of both worlds! 
A way to think of it is that instead of starting with something large and taking away what isn't needed, we would be starting with something small, and adding whatever we need to that.
In fact, React even interprets functional and class components differently. A functional component is simply called normally, like so: 

```javascript
const Card = (props) => {
    ...
    return <div>{result}</div>;
}

// React Interpretation
Card(args);  
```  
<br />

However, a class component would require **one** additional step: 

```javascript
class Card extends Component{
    ...
    render() {
        return <div>{result}</div>
    }
}

// React Interpretation
const card_instance = new Card(args);
const card_1 = card_instance.render();
```
<br />

This can actually be seen from the inner code of the 'Card' functions and classes. The class requires the render function to return the result. The function just returns the result.
Again, there is currently negligible performance increase despite having less steps in the interpretation of a function - but that may change.  

Finally, in my personal opinion, hooks and strictly using functional components leads to better code. That is, using functional components allow the programmer to see
when a component is getting too convoluted. Perhaps this is simply a quirk of mine, but it simply makes more sense for a functional component to stay short and sweet. 

#The Basics  

<br />

Lets get to how we use hooks. In this post, we will discuss three of the most basic hooks: useState, useEffect, and useContext.
One thing that you should remember is that hooks should **always** be called at the top level. 
Note that you will encounter an error if this rule is not followed. 

###The useState hook

With a self-explanatory name, this is the hook we use to declare and enable state in a function.
The syntax to do so is as follows: 

```javascript
const [state, setState] = useState(initial value)
```
<br />

The first value passed in the above would be the name of your state variable, the second is how you want to call the function to set state. 
These can be whatever you want.
The argument passed to 'useState' is the initial value of said state variable.

Just to further clarify - you don't need to use the names 'state' and 'setState'. In the following example, I create a state variable named 'beef', which is set to an initial value of an empty array. 

```javascript
const [beef, setBeef] = useState([])
```
<br />

If I want to change the value of beef, I simply call setBeef (the equivalent of setState).
Although it would be _really bad_ practice, I could have even named 'setBeef' something completely unrelated, such as 'banana' instead.
Here are a code snippet and demo video, where state is initialized as an empty array, and set (added to) through button clicks.
The array values are then rendered as list items.

```javascript
import React, {useState} from 'react';

export const BeefList = () => {
    const [beef, setBeef] = useState([]);

    const addBeefLovers = e => {        //called whenever a button is pressed
        setBeef([...beef, e.target.value]);
    };

    const beefLoversList = () => {
        return beef.map(name => {
            return <li>{name}</li>;
        });
    };

    return <div>
        ...     //h1, ul, and buttons...
    </div>
}        

```

<video autoplay loop width='100%'>
    <source src='./useState_demo.mp4' />
</video>

_Graham, if you're reading this, I just wanted you to know that I didn't forget you're a vegetarian._

### The useEffect hook

Lets move onto the useEffect hook. There are many uses for this hook, including the functional 'replacement' for componentDidMount. 
Additionally, setTimeout() is often called from within useEffect. 
A way to generalize what the useEffect is used for, is that it allows you to generate 'side **effects**' for your functional component. 
To initialize useEffect, you give it two arguments: a function, and (optionally) an array of dependencies. 

Here is an code snippet and demo video of useEffect without an array of dependencies.
We want a timer that increments after 3 seconds in this case. 

```javascript
import React, { useState, useEffect } from 'react'

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 3000);
  });

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```

<video autoplay loop width='100%'>
    <source src='./useEffect_demo_1.mp4' />
</video>

As you can see, the timer just increments infinitely in this case. 
So how do we get it to increment just once? Simple - put it in a componentDidMount. 
To do this with useEffect, we simple provide an **empty array of dependencies**.

```javascript
const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 3000);
  }, []);    // An empty array of dependencies with useEffect mimics componentDidMount

  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  );
}
```

<video autoplay loop width='100%'>
    <source src='./useEffect_demo_2.mp4' />
</video>

...and that's it. 

So what's the big deal with the array of dependencies? Why does the counter increment infinitely unless we set it to an empty array?
Why does an empty array cause useEffect to function like a componentDidMount?

The reason for this is because the array of dependencies tells useEffect when to run. That is, useEffect runs whenever the variable(s) inside the array change.
Without an array at all, useEffect runs after **every render**. In our case, there would be a rerender every time 'count' changed, because count is a state variable.
Subsequently, useEffect would run and change the value of 'count' again. With an empty array, useEffect is basically told to only run once. 

To better demonstrate this, here is an example where we increment 'count' with the press of a button.
We don't directly change the value of 'count'. Instead, the button actually increments a separate variable named 'activate'.
However, the array of dependencies for the useEffect contains 'activate'. 
Lets see how this works:

```javascript
const Timer = () => {
  const [count, setCount] = useState(0);
  const [activate, setActivate] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 2000);
  }, [activate]);       // useEffect fires whenever 'activate' changes

  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setActivate(activate + 1)}>Activate</button>
      <h2>Activated {activate} times.</h2>
    </div>
  );
}
```

<video autoplay loop width='100%'>
    <source src='./useEffect_demo_3.mp4' />
</video>

So you can see, the useEffect runs every time 'activate' is changed. 

That pretty much wraps up the basics of useEffect - we'll revisit for other use cases. 
For now, lets move on to our final hook - useContext.

### The useContext hook

The useContext hook is not so much _powerful_, but moreso _convenient_. 
The way that it works is simple.

Lets look at an example where we use context without hooks:

```javascript
const Artists = React.createContext();

function App() {
  return (
    <div className="App">
      <Artists.Provider value={["Ludovico Einaudi", "Helena Hauff", "Bassnectar"]}>
        <ShowArtists />
      </Artists.Provider>
    </div>
  );
}

const ShowArtists = () => {
  return (
    <Artists.Consumer>
      {(value)=>return <div>{value}</div>}
    </Artists.Consumer>
  );
};
```

This works to create a simple list of the names. However, the annoyance lies in when we need to pass the context down many components.
One would have to write/nest the consumer many times! This is the exact problem that the useContext hook solves.
With it, we only have to export the context, and call useContext in the components that we intend to use it! 

Check it out: 

```javascript
//  index.js

export const Artists = React.createContext();

function App() {
  return (
    <div className="App">
      <Artists.Provider value={["Ludovico Einaudi", "Helena Hauff", "Bassnectar"]}>
        <ShowArtists />
      </Artists.Provider>
    </div>
  );
}

//  ...some other file

import React, { useContext } from 'react'
import { Artists } from './index.js'

const ShowArtists = () => {

    const list = useContext(Artists)

  return (
      <div>
        {list}
      </div>
  );
};
```

Simple and clean! 

There you have it - with this basic knowledge, you're ready to start implementing hooks in your React projects.
There are additional hooks that we did not cover here (in fact, you can create your own!), but these are the most common and important by far. 
For additional information, you can alway checks out the documentation <a src='https://reactjs.org/docs/hooks-reference.html' target='_blank'>here</a>.

Questions? Feel free to ask! 