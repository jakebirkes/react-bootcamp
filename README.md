# React Hooks

"Hook into" state and lifecycle methods of components without using class components. You're able to use function components across the board. They also improve the readability and organization of components. You're even allowed to create custom hooks! 🥳

## 10 Built-in Hooks

### useState

This requires array destructuring with a value and a function. Initially you can set a value or an object of values for the first in the destructured array. Here we have a boolean set to false at render. Then in the button's `onClick` up can call the function and write what it should do, which will be in context with `useState()`

```js
import React, { useState } from 'react';

const ExampleUseState = () => {
 const [state, toggleState] = useState(false);
 return (
  <div className="hook-example">
   <h2>
    <code>useState()</code>
   </h2>
   <p>
    State: <span>{state ? 'true' : 'false'}</span>
   </p>
   <button onClick={() => toggleState(prevState => (prevState = !state))}>
    Toggle with <code>useState</code>
   </button>
  </div>
 );
};

export default ExampleUseState;
```

### useEffect

A hook that allows the ability to use 'sideEffects' - anything that reaches outside of a component:

- Network requests

- DOM Manipulation

- Event Listeners

- Timeouts & Intervals

Uses a callback and a an array of what it should watch, such as state for example.

```js
useEffect(() => setColor(randomcolor()), [count]);

useEffect(() => {
  const counterInterval = setInterval(() => {
    const counter = document.getElementById('counter');
    counter.textContent = +counter.textContent + 1;
  }, 1000);
  return () => clearInterval(counterInterval); // cleanup interval
}, []); // without state, will trigger at every render
```

Without a dependency, this by default will trigger at every render

### useContext

See `ExampleUseContext` for toggling theme. Other Examples also provided in '**contexts**' folder.

### useRef

This keep values to persist during re-render. One example to refocus on an input after a click.

```js
...
 const inputRef = useRef(null);
 const handleChange = e => setNewTodoValue(e.target.value);

 const addTodo = e => {
  e.preventDefault();
  setTodoList(prevTodosList => [...prevTodosList, newTodoValue]);
  setNewTodoValue('');
  inputRef.current.focus(); // will refocus to input after click
 };

 ...

 return (
  <div class="hook-example">
   <h2>
    <code>useRef()</code>
   </h2>
   <form>
    <input ref={inputRef}

    ...
```
