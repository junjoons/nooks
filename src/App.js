import React, { useState } from "react";
import "./styles.css";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (event) => {
    const {
      target: { value }
    } = event;
    setValue(value);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput("Mr.");
  return (
    <div>
      <input placeholder="Name" {...name} />
    </div>
  );
};

export default App;
