import React, { useState, useEffect } from "react";

const UseEffect = () => {
  let count = 0;
  const [number, setNumber] = useState(count);
  const [name, setName] = useState("Mehmet");

  useEffect(() => {
    console.log("component mount edildi");
  }, []);

  useEffect(() => {
    console.log("number state güncellendi");
  }, [number]);
  useEffect(() => {
    console.log("name state güncellendi");
  }, [name]);

  return (
    <div>
      <div>
        <h1>Use Effect</h1>
      </div>
      <div>
        <h2>{number}</h2> <br />
        <button onClick={() => setNumber(number + 1)}>Click</button>
      </div>
      <div>
        <h2>{name}</h2> <br />
        <button onClick={() => setName("Ali")}>Click</button>
      </div>
    </div>
  );
};

export default UseEffect;
