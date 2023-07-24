import React, { useState } from 'react';
import "./Style.css";


export default function ControlledForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    window.alert(`Controlled: User Name: ${name}, Password: ${password}`);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-container">
        <label>
          User Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};


