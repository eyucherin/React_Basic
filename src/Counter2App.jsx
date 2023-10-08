import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      throw new Error("Unexpected action");
  }
}

export default function Counter2App() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <>
      <div>Count: {state}</div>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </>
  );
}
