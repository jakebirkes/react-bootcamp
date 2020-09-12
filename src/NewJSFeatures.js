import React, {Component} from "react" // destructuring

class NewJSFeatures extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            greeting: 'hello',
            age: 30
        }
    }
    
    /**
     * don't change the state directly
     * always wrap object in ()
     * don's use -- or ++, use - 1 or + 1
     */
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
    
    render() {
      const {count: number} = this.state // you can change the name of the property
        return (
            <div>
                <h1>{number}</h1>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>    
        )
    }
}

export default NewJSFeatures
