import React, { useState, useReducer } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [state, dispatch] = useReducer(reducer, 0);

  function reducer(state, action) {
    if (action.type === "increment") {
      return state + action.payload;
    }
    if (action.type === "Decrement") {
      return state - action.payload;
    }
  }

  return (
    <div>
      <h1> Counter</h1>
      useState : {count}
      <button onClick={() => setCount(count + 1)}> Increment</button>
      <button onClick={() => setCount(count - 1)}> Decrement</button>
      UseReducer : {state}
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        {" "}
        Reducer Increment
      </button>
      <button onClick={() => dispatch({ type: "Decrement", payload: 1 })}>
        {" "}
        Reducer Decrement
      </button>
    </div>
  );
}
