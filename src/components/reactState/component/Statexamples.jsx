import React, { useState } from "react";

const getRandomFriend = () => {
  const randomFriend = [
    "Salih",
    "Ayşe",
    "Oğuz",
    "Fatma",
    "Alperen",
    "Ezgi",
    "Fatih",
    "Nevin",
  ];
  return randomFriend[Math.floor(Math.random() * randomFriend.length)];
};

const Statexamples = () => {
  const [name, setName] = useState("Hasan");
  const [friends, setFriends] = useState(["Mustafa", "Enes"]);
  const [count, setCount] = useState(0);
  const [fullname, setFullname] = useState("");

  const handleFullname = (event) => {
    setFullname(event.target.value);
    // console.log(fullname);
  };

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  const handleFriend = () => {
    setFriends([...friends, getRandomFriend()]);
    // console.log (friends);
  };
  const handleClick = () => {
    setName("ali");
  };
  return (
    <div>
      <div>{name}</div>
      <div>
        <button onClick={handleClick}>Değiştir</button>
      </div>
      <hr />
      <div>
        <button onClick={handleFriend}>Ekleme yap</button>
      </div>
      <div>
        {friends.map((friend, index) => (
          <p key={index}>{friend}</p>
        ))}
      </div>
      <hr />
      <div>
        <h2>{count}</h2>
      </div>
      <div>
        <button onClick={increase}>Artır</button>
        <button onClick={decrease}>Azalt</button>
        <button onClick={reset}>Sıfırla</button>
      </div>
      <hr />
      <div>
        Please enter a name... <br />
        <input type="text" value={fullname} onChange={handleFullname} />
      </div>
      <div>{fullname}</div>
    </div>
  );
};

export default Statexamples;
