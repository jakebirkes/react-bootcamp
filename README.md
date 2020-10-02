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
