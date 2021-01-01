import React, { useState } from "react";
import "./styles.css";

const App = () => {
  const [item, setItem] = useState(0);
  const increase = () => setItem(item + 1);
  const decrease = () => setItem(item - 1);
  return (
    <>
      <h1>{item}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </>
  );
};

export default App;
