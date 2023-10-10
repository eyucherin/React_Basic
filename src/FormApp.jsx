import React, { useState } from "react";

export default function FormApp() {
  const [form, setFrom] = useState({ name: "", email: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFrom({ ...form, [name]: value });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">name:</label>
      <input
        type="text"
        name="name"
        value={form.name}
        onChange={handleChange}
      />
      <label htmlFor="email">email:</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
  );
}
