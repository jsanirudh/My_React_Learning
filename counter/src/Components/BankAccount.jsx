import React, { useReducer, useState } from "react";

export default function BankAccount() {
  function reducer(state, action) {
    if (action.type === "deposit") {
      return { ...state, balance: state.balance + action.payload };
    }
    if (action.type === "withdraw") {
      return { ...state, balance: state.balance - action.payload };
    }
  }
  const [amount, setAmount] = useState(0);
  const [state, dispatch] = useReducer(reducer, { balance: 0 });

  return (
    <div>
      <h2>{state.balance}</h2>
      <input
        type="text"
        onChange={(e) => setAmount(e.target.value)}
        value={amount}
        name=""
        id=""
      ></input>

      <button
        onClick={() => dispatch({ type: "deposit", payload: Number(amount) })}
      >
        {" "}
        Deposit{" "}
      </button>
      <button
        onClick={() => dispatch({ type: "withdraw", payload: Number(amount) })}
      >
        {" "}
        WithDraw{" "}
      </button>
    </div>
  );
}
