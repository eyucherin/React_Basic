# React Basics

### **Part 1 Profile Cards**

1. learning how to create props
2. when trying to make box shadow --> use this [useful site](https://cssgenerator.org/box-shadow-css-generator.html)
3. Event Handling in React
    1. [React Official Docs](https://react.dev/learn/responding-to-events)
    2. Important: Functions passed to event handlers must be passed, not called.
        1. Correct :<span class="colour" style="color:rgb(235, 236, 240)">\<button onClick={handleClick}></span>
        2. Wrong : <span class="colour" style="color:rgb(235, 236, 240)">\<button onClick={handleClick()}></span>

### **Part 2 Counter App**

1. Creating a Counter app using react use State.
2. Parent has 2 counter children
    1. parent passes down state method to children so that children can modify parent state.
3. What is a state? any data that needs to change within the UI

### **Part 3 Product App**

**1.**[UseEffect]**runs on every render so make sure to add second parameter**
**\- when fetching from api\, fetch inside useEffect\.**

```
useEffect(() => {

  //Runs only on the first render

}, []);

useEffect(() => {

  //Runs on the first render

  //And any time any dependency value changes

}, [prop, state]);
```

2\. Iteration in jsx \-\-\> should always contain a key value

```
{product.map((product) => (
<li key={product.id}>
....
</li>
))}
```

### **Part 4 Pointer App**
 - when 2 state values are related use object 
    - Instead of this:
        - `Const [x,setX] = useState(0)`
        - `Const [y,setX] = useState(0)`
    - Do this:
        - `Const [points,setPoints] = useState({x:0,y:0})`

 - using event handler in React same as HTML. 
 - when using css value that changes use with inline style

 ### **Part 5 Mentor App**
 - Practice using useReducer 
  - useReducer is like reducer array method in javascript but for objects. 
   - JavaScript Reducer Example:

  ```js
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce((accumulator,currentValue) => accumulator + currentValue, 0);
  ```
  - UseReducer(reducer,initialState)
     - newState = reducer(currentState,action)

