// !!!!

import React, { useState } from "react";
const InputExample = () => {
  const [form, setForm] = useState({ name: "", surname: "" });

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div>
      Name <br />
      <input type="name" value={form.name} onChange={onChangeInput} />
      <br />
      Surname <br />
      <input type="surname" value={form.surname} onChange={onChangeInput} />
      <br />
      <div>
        <h2>
          {form.name} {form.surname}
        </h2>
      </div>
    </div>
  );
};

export default InputExample;
