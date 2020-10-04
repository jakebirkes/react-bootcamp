# React Context

>Context provides a way to pass data through the component tree without having to pass props down manually at every level.

[React Documentation](https://reactjs.org/docs/context.html)

With state, you can only pass data downward. So sharing state would get tricky, with Context this solves our issue and avoids "prop drilling". It does this by making the provider at the top of our components and it's shared there.

Prop drilling is a consequence of trying to have state available for a distant component, where it channels through components who might not even need this data - they are just handing this over to get to it's destination.
