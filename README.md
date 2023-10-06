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

### **Part 2 Counter App**

**1.**\[UseEffect\]\(React Docs\)**runs on every render so make sure to add second parameter**

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
<br>
<br>
