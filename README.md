# Performance

## `shouldComponentUpdate()`

Lifecycle method on class components, which allows you to determine if a component should update or not. It receives the upcoming props and state for comparison against the current props and state. If there is a difference, it should update. It's really best to keep things at a shallow comparison or it might not be worth it.

```js
class GrandParent extends Component {  
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.count === this.props.count) {
            return false
        }
        return true
    }
```

## PureComponent

Preferred over a manual `shouldComponentUpdate()`. An alternative to React.Component.

```js
import React, { PureComponent } from "react";
import Parent from "./Parent";

class GrandParent extends PureComponent {
```

### Initial Render

```js
>[GP] [P] [C] [GC] APP just rendered
>[👴🏼] [ ] [ ] [ ] rendered
>[ ] [👩🏼‍⚕️] [ ] [ ] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [👩🏼‍⚕️] [ ] [ ] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[👴🏼] [ ] [ ] [ ] rendered
>[ ] [👩🏼‍⚕️] [ ] [ ] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [👩🏼‍⚕️] [ ] [ ] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [🧒🏻] [ ] rendered
>[ ] [ ] [ ] [👶🏻] rendered
>[ ] [ ] [ ] [👶🏻] rendered
```

### After click using `PureComponent`

```js
[GP] [P] [C] [GC] APP just rendered
```

## `React.memo()`

Higher-order component build by React (released v16.6). Very much the same as `PureComponent` but for functional components which compares `prevProps` and `nextProps`.

**This works just like shouldComponentUpdate except the bool returned is reversed. So if it's `true` if props are equal and not re-render.**

```js
import React, { memo } from 'react';
import Parent from './Parent';

const GrandParent = () => {
 console.log('[👴🏼]   [ ]   [ ]   [ ] rendered');
 return (
  <div>
   <p>I'm a GrandParent Component</p>
   <Parent />
   <Parent />
  </div>
 );
};

export default memo(GrandParent);
```
