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

### useContext

### useRef

### useReducer

### useMemo

### useCallback

### useImperativeHandle

### useLayoutEffect

### useDebugValue
