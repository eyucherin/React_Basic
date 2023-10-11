# React: Review & Things I wish I knew earlier

## **Part 1 Profile Cards - AppProfile**

1. learning how to create props
2. when trying to make box shadow --> use this [useful site](https://cssgenerator.org/box-shadow-css-generator.html)
3. Event Handling in React
   1. [React Official Docs](https://react.dev/learn/responding-to-events)
   2. Important: Functions passed to event handlers must be passed, not called.
      1. Correct :<span class="colour" style="color:rgb(235, 236, 240)">\<button onClick={handleClick}></span>
      2. Wrong : <span class="colour" style="color:rgb(235, 236, 240)">\<button onClick={handleClick()}></span>

## **Part 2 Counter App - CounterApp**

1. Creating a Counter app using react use State.
2. Parent has 2 counter children
   1. parent passes down state method to children so that children can modify parent state.
3. What is a state? any data that needs to change within the UI

## **Part 3 Product App - AppProduct**

**1.**[UseEffect]**runs on every render so make sure to add second parameter**
**\- when fetching from api\, fetch inside useEffect\.**

```js
useEffect(() => {
  //Runs only on the first render
}, []);

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state]);
```

2\. Iteration in jsx \-\-\> should always contain a key value

```js
{
  product.map((product) => <li key={product.id}>....</li>);
}
```

## **Part 4 Pointer App**

- when 2 state values are related use object

  - Instead of this:
    - `Const [x,setX] = useState(0)`
    - `Const [y,setX] = useState(0)`
  - Do this:
    - `Const [points,setPoints] = useState({x:0,y:0})`

- using event handler in React same as HTML.
- when using css value that changes use with inline style

## **Part 5 Mentor App - AppMenors**

- Practice using useReducer
- useReducer is like reducer array method in javascript but for objects.
- JavaScript Reducer Example:
  ```js
  const numbers = [1, 2, 3, 4, 5];
  const sum = numbers.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  ```
- UseReducer
  ```js
  UseReducer(reducer, initialState);
  newState = reducer(currentState, action);
  ```

## **Part 6 Counter 2 Using UseReducer - Counter2App**

- A more simple implementation of useReducer, still needs practice...

## **Part 7 Handling Forms - FormApp**

- **_Uncontrolled Component_** When there are values changing in the UI but there is no state that is observing it.
- in Forms, UI changes but we need a way to observe state changes.
- ```js
  const handleChange = (e) => {
  const { name, value } = e.target;
  setFrom({ ...form, [name]: value });
  ```
- in the form, we have separate name and value keys to determine what part to change.

## **Part 8 Higher Order Components(HOC) - HOCApp**

- a function that takes a component and returns a new component with additional properties or behaviors.
- ```js
  <Card>
    <p>Card1</p>
  </Card>
  ```

## **Part 9 Context API AppTheme**

- Prop Drilling : process in React where data is passed from one part of the tree to another by going through multiple levels of components
- In order to reduce prop drilling we use the useContext Hook in React.
- kind of like a service in Ember.js
-  create context and provider.
- You want to set an umbrella to components that share the state.

