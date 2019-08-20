---
title: Fetching with the useEffect Hook
category: React
cover: k-mitch-hodge-unsplash.jpg
author: Jeffrey Yu
---

![dog-with-ball](./k-mitch-hodge-unsplash.jpg "photo by @kmitchhodge on Unsplash.com")

Today, we will discuss the utilization of *React hooks* to perform an essential function that we are quite familiar with: fetching data.

_If you are still unfamiliar with the basic uses of the useEffect hook, you can check out my previous blogpost [here](https://jayewe.com/a-basic-introduction-to-react-hooks)._

If you are familiar with React, then you know that fetching data is usually done in componentDidMount. 
However, if using a functional component, then componentDidMount is not accessible to you.
Instead, we replace it with useEffect!

As a quick reminder, passing an empty array of dependencies to useEffect mimics componentDidMount:

```javascript
useEffect(()=>{
    //some function here...
}, [])     //empty array of dependencies
```

<br />

Simple enough! So if we want to fetch upon the component mounting, then we simply place it within the useEffect, like so:

```javascript
useEffect(()={

    fetch(`${SOME_URL}`)
    .then(...do something...)
    .catch(...error...)

}, [])
```

<br />

But wait - we don't _only_ fetch on a component mounting. 
What about in the case of a simple search bar, where query parameters can change?
Lets take a look. Here is a barebones search component:

```javascript
import React, { useState, useEffect } from "react";

const Search = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={e => {
          setQuery(e.target.value);
        }}
      />
      <button onClick={null}>Submit</button>
    </div>
  );
};

export default Search;
```

This gives us a simple searchbar, as seen below: 

![searchbar](./searchbar.jpg)

Now, lets start writing the useEffect to fetch data, using the query parameter from our input.
For the purpose of this demo, we'll be using the Dog CEO API. So we will be searching dog breeds.

```javascript
import React, { useState, useEffect } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([])    //the response our fetch will go here. 

  useEffect(()=>{
      if (query !== ""){
        fetch(`https://dog.ceo/api/breed/${query}/images`)
        .then(resp=>resp.json())
        .then(json=>{
            setResults([...json.message])
        })
        .catch(console.log('error'))
      }
  })

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a dog breed here."
        value={query}
        onChange={e => {
          setQuery(e.target.value);
        }}
      />
      <button onClick={null}>Submit</button>
    </div>
  );
};

export default Search;
```

<br />

Wait a second...we have a problem. What do we put in the dependency array?
It can't be empty - then it won't ever actually conduct the search with our parameter.
It can't be set to 'query' either. If we did that, it would fire every single time that we type a letter.
That would be a lot of fetching. 

The solution in this case would be to create another state variable, which changes whenever we click the submit button.
We could make it a boolean, but then the value of the boolean would make no sense. We would just be alternating between 'true' and 'false' to trigger the fetch.
A solution in this case, is to simply create a state variable for the fetch URL, and having it change when clicking the submit button:

```javascript
import React, { useState, useEffect } from "react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([])
  const [fetchURL, setFetchURL] = useState('')

  useEffect(()=>{
    if (fetchURL !== ""){
      fetch(`${fetchURL}`)
        .then(resp => resp.json())
        .then(json => {
          setResults(json.message);
        })
        .catch(console.log("error"));
      }
  }, [fetchURL])

  const createDogPics = () => { 
      //lets make a list from the image URLs that the get request returns
      return results.map((imgurl)=>{
          return <li>
            <img src={imgurl} />
        </li>
      })
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a dog breed here."
        value={query}
        onChange={e => {
          setQuery(e.target.value);
        }}
      />
      <button 
        onClick={()=>setFetchURL(`https://dog.ceo/api/breed/${query}/images`)}>
        Submit
      </button>
      <ul>
        {createDogPics()}
      </ul>
    </div>
  );
};

export default Search;
```

Done! Here's our final result below!

<video autoplay loop width='100%'>
    <source src="./completed_search.mp4">
</video>

<br />

That's all for now! There's a lot more that can be done with fetching and useEffect, which we'll dive into another time.

Questions?