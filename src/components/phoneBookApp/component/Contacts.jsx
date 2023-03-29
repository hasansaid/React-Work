import React, { useState, useEffect } from "react";
import Form from "./Form/Index";
import List from "./List/Index";

const Contacts = () => {
  const [contacts, setContacts] = useState([
    {
      fullname: "Ali",
      phone_number: 555555555,
    },
    {
      fullname: "Fuat",
      phone_number: 999999999,
    },
    {
      fullname: "Mustafa",
      phone_number: 444444444,
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div className="d-flex flex-column mb-3">
      <div className="mb-4 fs-2 fw-bold">CONTACT LIST APP</div>
      <div className="p-2 d-flex justify-content-center w-300px">
        {" "}
        <List contacts={contacts} />
      </div>
      <div className="p-2 d-flex justify-content-center">
        {" "}
        <Form addContact={setContacts} contacts={contacts} />
      </div>
    </div>
  );
};

export default Contacts;
