import React from 'react';
import "./Style.css";

class UncontrolledForm extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const name = event.target.username.value;
    const password = event.target.password.value;
    alert(`Uncontrolled: User Name: ${name}, Password: ${password}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-container">
        <div className="form-container">
          <label>
            User Name:
            <input type="text" name="username" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NameFormUncontrolled;
