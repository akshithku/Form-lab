import React from 'react';

class FormExample extends React.Component {
  // Define initial state with empty values for form fields
  // and empty error messages
   state = {
    name: '',
    email: '',
    number: '',
    nameError: '',
    emailError: '',
    numberError: '',
  };
  handleNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  handleEmailChange = (event) => {
    const email = event.target.value;
    const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (emailRegex.test(email)) {
      this.setState({ email, emailError: '' });
    } else {
      this.setState({ emailError: 'Invalid email format' });
    }
  };
  handleNumberChange = (event) => {
   this.setState({number:event.target.value})
  };
  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.name === '') {
      this.setState({ nameError: 'Name is required' });
    }
    if (this.state.email === '') {
      this.setState({ emailError: 'Email is required' });
    }
    if (this.state.number === '') {
        this.setState({ numberError: 'number is required' });
      }
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        
        <input
          type="text"
          id="name"
          value={this.state.name}
          onChange={this.handleNameChange}
        />
        
        {this.state.nameError && <p>{this.state.nameError}</p>}
        <br />
        <label htmlFor="email">Email:</label>
        
        <input
          type="text"
          id="email"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
       
        {this.state.emailError && <p>{this.state.emailError}</p>}
        <br />
        <label htmlFor="number">Number:</label>
        
        <input
          type="text"
          id="number"
          value={this.state.number}
          onChange={this.handleNumberChange}
        />
       
        {this.state.numberError && <p>{this.state.numberError}</p>}
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
 export default FormExample;