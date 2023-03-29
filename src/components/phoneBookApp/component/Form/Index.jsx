import Reacti, { useState, useEffect } from "react";

const initialFormValues = { fullname: "", phone_number: "" };

const Index = ({ addContact, contacts }) => {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.fullname === "" || form.phone_number === "") {
      return false;
    }

    addContact([...contacts, form]);
    // setForm(initialFormValues);
    console.log(form);
  };
  return (
    <div>
      <form style={{ width: "300px" }} onSubmit={onSubmit}>
        <div class=" text-center d-flex flex-column mb-3">
          <div class="p-2">
            <div class=" input-group flex-nowrap">
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="addon-wrapping"
                name="fullname"
                value={form.fullname}
                placeholder="Fullname"
                onChange={onChangeInput}
              />
            </div>
          </div>
          <div class="p-2">
            <input
              class="form-control"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              type="text"
              name="phone_number"
              value={form.phone_number}
              placeholder="Phone Number"
              onChange={onChangeInput}
            />
          </div>
          <div class="p-2">
            {" "}
            <div>
              <button className="btn btn-success">Add</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Index;
