---
title: Using the useRef Hook
category: React
cover: jean-frederic-fortier-unsplash.jpg
author: Jeffrey Yu
---

![map](./jean-frederic-fortier-unsplash.jpg "photo by jffortier on unsplash.com")

Today, we will be taking a more in-depth look at the useRef hook.  

As usual, to better understand the hook, lets take a moment to reflect on what a 'ref' in React is :).

_Note: this post is focusing solely on **useRef**, which functions differently from **createRef** typically seen in class components._  

_DO NOT GET THE TWO MIXED UP!_

## What's a ref?

In its simplest form, a ref is, as its name suggests, a reference to something (be it an element or variable) in your application.
However, that reference is special! In a way, it sort of _transcends_ React itself.
For fun, I like to think of it as being independent of time and space - with respect to your application of course. 

What I mean by that is that when you make/set a ref, the reference is set to an element/variable at that particular moment.
If state updates / a re-render occurs, the ref will remain the same. 
In that way, refs are independent of the rest of your application. You need to _explicitly update the ref_ to change it.
In addition (and in-line with this idea of being independent from everything else), _changing a ref doesn't cause a re-render_.

To better illustrate, lets take a look at an example: 

```javascript
const RefExample = () => {
  const [counter, setCounter] = useState(0);
  const countref = useRef(counter);

  useEffect(() => {
    setTimeout(()=>setCounter(counter + 1), 1000);
  }, [counter]);

  return (
    <div>
      <p>
        useState Counter: <b>{counter}</b>
      </p>
      <p>
        useRef Counter: <b>{countref.current}</b>
      </p>
    </div>
  );
};
```
<br/>

The result of this is: 

<video autoplay loop width=100%>
    <source src='useRef_demo_1.mp4' />
</video>

As you can see, despite the ref being set to equal state, it does not update when state updates.
In this case, the ref is **always equal to what state does upon the initial mount**.
To update the ref, one must set the 'current' value of the ref. 
When you first call useRef, the first value of the current object of your variable is set to the argument you pass to useRef.  

Lets make a small change to our above code: 

```javascript
const RefExample = () => {
  const [counter, setCounter] = useState(0);
  const countref = useRef(counter);

  useEffect(() => {
    setTimeout(()=>setCounter(counter + 1), 1000)
    countref.current = counter; //updating the ref
  }, [counter]);

  return (
    <div>
      <p>
        useState Counter: <b>{counter}</b>
      </p>
      <p>
        useRef Counter: <b>{countref.current}</b>
      </p>
    </div>
  );
};
```
<br/>

Now our useRef counter also updates! 

<video autoplay loop width=100%>
    <source src='useRef_demo_2.mp4' />
</video>

_Note the asynchronous nature of state coming into play here!_

But lets go even deeper, just to solidify this concept.
In the below example, we create a button to set the 'current' value of the ref instead of updating in the useEffect. 
The code reflecting this is as below:

```javascript
const RefExample = () => {
  const [counter, setCounter] = useState(0);
  const countref = useRef(counter);

  const updateref = () => {
    countref.current = counter;
  }

  useEffect(() => {
    setTimeout(()=>setCounter(counter + 1), 1000)
  }, [counter]);

  return (
    <div>
      <p>
        useState Counter: <b>{counter}</b>
      </p>
      <p>
        useRef Counter: <b>{countref.current}</b>
      </p>
      <button onClick={updateref}>Update the Ref!</button>
    </div>
  );
};
```
<br/>

<video autoplay loop width=100%>
    <source src='useRef_demo_3.mp4' />
</video>
 

