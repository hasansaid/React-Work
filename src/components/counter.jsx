import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(
    //başlangıç değeri
    0
  );

  const [amount, setAmount] = useState(1);
  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  const Reset = () => {
    setCount(0);
  };

  const ManyAdd = () => {
    setCount(count + amount);
  };

  const Five = () => {
    setAmount(5);
  };

  return (
    <>
      <div>
        <h1>{count}</h1>
        <button onClick={Increment}>Arttır</button>
        <button onClick={Decrement}>Azalt</button>
        <button onClick={Reset}>Sıfırla</button>
        <button onClick={ManyAdd}>Çoğalt</button>
      </div>
      <hr />
      <div>Çoklu Arttırma: +{amount}</div>
      <button onClick={() => setAmount(1)}>+1</button>
      <button onClick={Five}>+5</button>
      <button onClick={() => setAmount(10)}>+10</button>
    </>
  );
}

export default Counter;
