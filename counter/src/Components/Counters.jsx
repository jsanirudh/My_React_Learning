import React, { useReducer } from "react";

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0, inCrementby: 1 });

  function reducer(state, action) {
    if (action.type === "increment") {
      return { ...state, count: state.count + state.inCrementby };
    }
    if (action.type === "Decrement") {
      return { ...state, count: state.count - state.decrementby };
    }

    if (action.type === "incrementby") {
      return { ...state, inCrementby: action.payload };
    }
    if (action.type === "decrementby") {
      return { ...state, decrementby: action.payload };
    }
  }

  return (
    <div>
      <h1> Counter</h1>
      UseReducer : {state.count}
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "incrementby", payload: Number(e.target.value) })
        }
      ></input>
      <input
        type="text"
        onChange={(e) =>
          dispatch({ type: "decrementby", payload: Number(e.target.value) })
        }
      ></input>
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
