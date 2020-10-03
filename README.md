# Reusability

## Keep Your Code DRY

Don't Repeat Yourself

## Inheritance vs. Composition

You should always prefer over inheritance

>At Facebook, we use React in thousands of components, and we haven’t found any use cases where we would recommend creating component inheritance hierarchies.

[From React](https://reactjs.org/docs/composition-vs-inheritance.html#so-what-about-inheritance)

1. Components w/ props
2. Children
3. Higher Order Components
4. Render props

## Children

If you need elements to be flexibly added to a component, think of `CTA` like a new HTML tag and use `{props.children}`

### Before

```js
const CTA = () => (
  <div className="border">
   <h1>This is an important CTA</h1>
   <button>Click me now or you'll miss out!</button>
  </div>
);
```

```js
function App() {
 return (
  <div>
   <CTA />
  </div>
 );
}
```

### After

```js
const CTA = props => (
  <div className="border">
    {props.children}
  </div>
);
```

```js
function App() {
 return (
  <div>
   <CTA>
    <h1>This is an important CTA</h1>
    <button>Click me now or you'll miss out!</button>
   </CTA>
  </div>
 );
}
```

## Higher Order Components

A function that takes a component as its first argument. It returns a newly wrapped component wraps that was given, which provides extra capabilities.

From my experience, it's a way to intercept an modify a component before it renders without changing it directly.

```js
import React from 'react';

export const withPointlessHOC = Component => (
  props => (
    <Component {...props}>
      <span aria-label="emoji" role="img">😉</span>
    </Component>
  )
);
```

```js
import { withPointlessHOC } from './hoc-practice/withPointlessHOC';

const App = () => (
  <h1>
    <span aria-label="emoji" role="img">👋</span>
    {props.children}
  </h1>
);

export default withPointlessHOC(App);
```

```html
<h1>
  <span aria-label="emoji" role="img">👋</span>
  <span aria-label="emoji" role="img">😉</span>
</h1>
```

## Render Props

```js
export const Example props => (
  <div>
    {props.render(1)}
  </div>
);
```

```js
const App = () => (
  <>
    <Example render={ num => <h1>{num > 0 ? 'Hello' : 'Goodbye'}</h1> } />
  </>
);
```

```html
<div>
  <h1>Hello</h1>
</div>
```
