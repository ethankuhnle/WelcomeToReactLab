// Your code here!
import React, {useState} from 'react'
import ReactDOM from 'react-dom'

//when increment is clicked, it runs the increment function which runs the setCount 
//function it sets count to count + 1 and that changes the dom for the user the component re renders
const Counter = () => {
    const [count, setCount] = useState(0)
     function increment(){
        setCount(count + 1)
    }
    return (
      <div id='container'>
        <div id='navbar'>
          Counter.js
        </div>
        <div id='counter'>
          <h1>{count}</h1>
          <button onClick={increment}>Increment</button>
        </div>
      </div>
    )
  } //hello! this is ben
ReactDOM.render(<Counter/>, document.getElementById('app'))