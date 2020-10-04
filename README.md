# React Context

>Context provides a way to pass data through the component tree without having to pass props down manually at every level.

[React Documentation](https://reactjs.org/docs/context.html)

With state, you can only pass data downward. So sharing state would get tricky, with Context this solves our issue and avoids "prop drilling". It does this by making the provider at the top of our components and it's shared there.

![Prop Drilling](https://raw.githubusercontent.com/jakebirkes/react-bootcamp/react-context/img/prop-drilling.png)

Prop drilling is a consequence of trying to have state available for a distant component, where it channels through components who might not even need this data - they are just handing this over to get to it's destination.

![Provider & Consumers](https://raw.githubusercontent.com/jakebirkes/react-bootcamp/react-context/img/provider-consumer.png)

## Providing Context to Class Component

```js
import React, { Component } from 'react';
import { AppContext } from '../contexts/AppContext';

class Username extends Component {
 static contextType = AppContext;
 render() {
  const { addUsername, username } = this.context;
  return (
   <div>
    <h2>{!username ? 'Hello!' : `Hello, ${username}!`}</h2>
    <form>
     <label>
      Name:{' '}
      <input
       type="text"
       name="name"
       placeholder="Add Your Name"
       onChange={event => addUsername(event.target.value)}
      />
     </label>
    </form>
   </div>
  );
 }
}
```

## Providing Context to Function Component

### Using Consumer

```js
import React from "react";
import UserContext from "./userContext";

const Header () => (
  <header>
    <UserContext.Consumer>
      {username => (
        <p>Welcome, {username}!</p>
      )}
    </UserContext.Consumer>
  </header>
);

export default Header;
```

```js
import React from "react";
import {ThemeContext} from "./themeContext";

const Button = props => (
  <ThemeContext.Consumer>
    {context => (
      <button onClick={context.toggleTheme} className={`${context.theme}-theme`}>Switch Theme</button>
    )}
  </ThemeContext.Consumer>
);  
```

### Using Hook: `useContext()`

```js
import React, { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Username = () => {
 const { addUsername, username } = useContext(AppContext);
 return (
  <div>
   <h2>{!username ? 'Hello!' : `Hello, ${username}!`}</h2>
   <form>
    <label>
     Name:{' '}
     <input
      type="text"
      name="name"
      placeholder="Add Your Name"
      onChange={event => addUsername(event.target.value)}
     />
    </label>
   </form>
  </div>
 );
};
```

## Caveats

- Don't just use context to avoid state, best if many needs it not just one or two - [From React](https://reactjs.org/docs/context.html#before-you-use-context)
  - Useful for User info, themes, etc.

- Don't use context when you could use state locally
  - Forms

- Wrap your Provider with the lowest common parent in the tree

- Passing object as value, watch performance and refactor if necessary
  - "Caveats" - [From React](https://reactjs.org/docs/context.html#caveats)
  - ["React Context and Re-Renders: React Take the Wheel"](https://medium.com/@ryanflorence/react-context-and-re-renders-react-take-the-wheel-cd1d20663647)
