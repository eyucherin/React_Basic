import "./App.css";
import { useEffect, useState, useMemo, useCallback } from "react";

function AppJSX() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const expensiveCalculation = useMemo(() => {
    console.log("Running expensive calculation");
    let res = 0;
    for (let i = 0; i < 10000; i++) {
      res += i;
    }
    return res;
  }, []); 

  useEffect(() => {
    console.log("Component rendered");
  },); 

  const memoVal = useMemo(() => {
    console.log("memoVal updated");
    return x;
  }, [x]);


  const memoizedExpensiveFunction = useCallback(() => {
    console.log("useCallback called");
  }, [expensiveCalculation]); 

  return (
    <div>
      <div>{x}</div>
      <button onClick={() => setX(x + 1)}>Increment X</button>
      <div>{y}</div>
      <button onClick={() => setY(y + 1)}>Increment Y</button>
      <div>Memoized Value: {memoVal}</div>
      <div>Expensive Calculation Result: {expensiveCalculation}</div>
      <button onClick={memoizedExpensiveFunction}>Run Expensive Function</button>
    </div>
  );
}

export default AppJSX;