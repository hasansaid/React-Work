import React, { useState } from "react";

const Index = ({ contacts }) => {
  const [filterText, setFilterText] = useState("");
  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLocaleLowerCase()
        .includes(filterText.toLocaleLowerCase())
    );
  });

  return (
    <div>
      <input
        class="form-control"
        aria-label="Username"
        aria-describedby="addon-wrapping"
        type="text"
        placeholder="Filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />

      <div class="d-flex flex-column mb-3">
        {filtered.map((contact, index) => {
          return (
            <div class="p-2" key={index}>
              {contact.fullname} {contact.phone_number}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
