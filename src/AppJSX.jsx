import logo from "./logo.svg";
import "./App.css";

function AppJSX() {
  const name = "Elizabeth";
  const fruits = ["apple", "banana", "orange"];
  return (
    <>
      <div>{`Hello ${name}`}</div>
      <ul>
        {fruits.map((fruit) => (
          <li>{fruit}</li>
        ))}
      </ul>
    </>
  );
}

export default AppJSX;
