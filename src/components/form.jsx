import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({ name: "", surname: "", gender: 0 });

  const handleChange = (event) => {
    setForm((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  //   const [name, setName] = useState("");
  //   const [surname, setSurname] = useState("");
  //   const [gender, setGender] = useState(1);
  return (
    <div>
      <div>
        <label htmlFor="">İsim: </label>
        <input
          type="text"
          name="name"
          placeholder="İsminizi Giriiniz..."
          value={form.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="">Soyisim: </label>
        <input
          type="text"
          name="surname"
          placeholder="Soyisminizi Giriniz..."
          value={form.surname}
          onChange={handleChange}
        />{" "}
        <br />
        Cinsiyet: &nbsp;
        <select name="gender" value={form.gender} onChange={handleChange}>
          <option value={0}>Erkek</option>
          <option value={1}>Kadın</option>
        </select>
      </div>
      <hr />

      <h4>
        Tam İsim: {form.name} {form.surname}
      </h4>
      <h4>Cinsiyet: {form.gender == 1 ? "Kadın" : "Erkek"}</h4>
    </div>
  );
};

export default Form;
