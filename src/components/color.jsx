import React, { useState } from "react";

function Color() {
  const [colors, setColors] = useState(["Red", "Green", "Blue"]);

  const colorAdd = () => {
    setColors([...colors, "Yellow"]);
  };

  return (
    <div>
      <h1>Renkler</h1>
      {colors.map((color, i) => (
        <div key={i}>{color}</div>
      ))}

      <button onClick={colorAdd}>Sarı Rengini Ekle</button>
    </div>
  );
}

export default Color;
