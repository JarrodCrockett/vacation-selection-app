import React, { useState } from "react";
import Info from "./Info";

const Home = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <button onClick={increment}>Click Me</button>
      <p>You've pressed the button {counter} times.</p>
      <Info />
    </div>
  );
};
export default Home;
