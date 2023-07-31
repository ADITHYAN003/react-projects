import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ReactForm extends Component {
  constructor() {
    super();
    this.state = {
      sport: [],
      name: '',
      phoneNumber: '',
      address: '',
      fees: 0,
      reference: '',
      totalAmount: 0,
      errmsg: '',
    };
  }

  handleSportChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    this.setState({ sport: selectedOptions });
    const totalAmount = selectedOptions.length * 500;
    this.setState({ totalAmount });
    const fees = selectedOptions.length * 1;
    this.setState({ fees });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('Selected Sports:', this.state.sport);
    console.log('Name:', this.state.name);
    console.log('Phone Number:', this.state.phoneNumber);
    console.log('Address:', this.state.address);
    console.log('Fees:', this.state.fees);
    console.log('Reference:', this.state.reference);
    console.log('Total Amount:', this.state.totalAmount);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="sport">Select Sports:</label>
          <select
            id="sport"
            name="sport"
            required
            multiple
            value={this.state.sport}
            onChange={this.handleSportChange}
          >
            <option value="football">Football</option>
            <option value="basketball">Basketball</option>
            <option value="volleyball">Volleyball</option>
            <option value="tennis">Tennis</option>
            <option value="swimming">Swimming</option>
            <option value="cricket">Cricket</option>
            <option value="handball">Handball</option>
            <option value="hockey">Hockey</option>
          </select>
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e.target.value })}
            required
          />
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={this.state.phoneNumber}
            onChange={(e) => this.setState({ phoneNumber: e.target.value })}
            required
          />
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={this.state.address}
            onChange={(e) => this.setState({ address: e.target.value })}
            required
          />
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="fees">Fees:</label>
          <input type="number" id="fees" value={this.state.fees} />
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="reference">Reference:</label>
          <input
            type="text"
            id="reference"
            value={this.state.reference}
            onChange={(e) => this.setState({ reference: e.target.value })}
          />
        </div>
        <br></br>
        <br></br>
        <div>
          <label htmlFor="totalAmount">Total Amount:</label>
          <input type="number" id="totalAmount" value={this.state.totalAmount} />
        </div>
        <br></br>
        <br></br>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<ReactForm />, document.getElementById('root'));