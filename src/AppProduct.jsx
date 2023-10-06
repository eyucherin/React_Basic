import React, { useEffect, useState } from "react";

export default function AppProduct() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [product, setProduct] = useState([]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    fetch(`data/${checked?"sale_":""}products.json`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Product being mounted");
        setProduct(data);
      });
    return () => {
      console.log("Product being unmounted");
    };
  }, [checked]);


  return (
    <div>
    <input type="checkbox" checked={checked} onChange = {()=>setChecked(!checked)}></input>
    <label htmlFor="checked">Show Sale Items only</label>

      {toggle ? (
        <div>
          {product.map((product) => (
            <li key={product.id}>
              <article>
                <h3>{product.name}</h3>
                <p>{product.price}</p>
              </article>
            </li>
          ))}
          <button onClick={() => setCount(count + 1)}>{count}</button>
        </div>
      ) : null}
      <button onClick={() => setToggle(!toggle)}>toggle</button>
    </div>
  );
}
