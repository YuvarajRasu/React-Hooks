import { useState } from "react";
import "./App.css";

// const initialval = () => {
//   console.log("value here");
//   return 5;
// };

function App() {
  // Normal
  // const [count, setCount] = useState(4);

  // Every time rendered according to component change
  // const [count,setCount] = useState(initialval())

  // Only in the first time, it is executed
  // const [count,setCount] = useState(() => initialval())

  // Object
  const [state, setState] = useState({
    count: 3,
    theme: "red",
  });

  const theme = state.theme;
  const count = state.count;

  

  // Normal:
  // const decrement = () => {
  //   setCount(count -1 )
  // }
  // const increment = () => {
  //   setCount(count +1 )
  // }

  // using prevState

  // const decrement = () => {
  //   setCount((prevState) => prevState - 1);
  // };
  // const increment = () => {
  //   setCount((prevState) => prevState + 1);
  // };

  // For objects
  const decrement = () => {
    setState((prevState) => {
      return { ...prevState, count: prevState.count - 1 };
    });
  };
  const increment = () => {
    setState((prevState) => {
      return {
        ...prevState,
        count: prevState.count + 1,
      };
    });
  };

  return (
    <>
      {/* <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button> */}

      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button onClick={increment}>+</button>
    </>
  );
}

export default App;
