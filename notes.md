# Intro Notes

## State

- don't change the state directly
- always wrap object in `()` for implied return
- don's use `--` or `++`, use `- 1` or `+ 1`

```jsx
increment = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
}

decrement = () => {
    this.setState(prevState => {
        return {
            count: prevState.count - 1
        }
    })
}
```

## Fragment

To avoid components rendered in unnecessary `div` elements

```jsx
import React, {Fragment} from "react";
import Child from "./Child";

function App() {
    return (
        <Fragment>
            <Child />
        </Fragment>
    )
}
```

```jsx
import React from "react";
import Child from "./Child";

function App() {
    return (
        <React.Fragment>
            <Child />
        </React.Fragment>
    )
}
```

```jsx
import React from "react";
import Child from "./Child";

function App() {
    return (
        <>
            <Child />
        </>
    )
}
```

## Default Props

If prop is missing.

```jsx
Card.defaultProps = {
  cardColor: 'blue'
};
```

In a class component

```jsx
class Card extends React.Component {
    static defaultProps = {
        cardColor: "blue",
        height: 100,
        width: 100
    }
```

## Prop Types

[PropTypes Documentation](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes)

A way to check types for components

`yarn add prop-types`

```jsx
import PropTypes from "prop-types"

...

// after component with default
Card.propTypes = {
    cardColor: PropTypes.string
}

Card.defaultProps = {
    cardColor: "blue",
    height: 100,
    width: 100
}
```

Make a prop a requirement

```jsx
Card.propTypes = {
    cardColor: PropTypes.string.isRequired
}

// remove default cardColor
Card.defaultProps = {
    height: 100,
    width: 100
}
```

Restrict values

```jsx
Card.propTypes = {
    cardColor: PropTypes.string.oneOf(['blue', 'red']).isRequired
}
```
