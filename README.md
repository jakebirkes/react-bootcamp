# React Router

`yarn add react-dom`

`yarn add react-router-dom`

For Single-Page Applications.

- Conditionally render large parts of your page.
- Declarative API
- Hooks 🎉

## Primary Components

- Routers:
  - `<BrowserRouter>`
  - `<HashRouter>`

### BrowserRouter

Ii is a context provider.

```js
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
```

- Route Matchers
  - `<Route>` points to component(s)
  - `<Switch>` like a switch/case

```js
<Switch>
  {/* Different ways of using Route components */}
  <Route exact path="/" render={() => <Home />} />
  <Route path="/about" component={About} />
  <Route path="/contact">
    <Contact email="wantulok.jake@gmail.com" />
  </Route>
</Switch>
```

- Navigation ("route changers"):
  - `<Link>`
  - `<NavLink>`
  - `<Redirect>`

## Hooks

- `useHistory`
- `useLocation`
- `useParams`
