import React, { Component } from "react";
// import axios from "axios";
const customStyle = {
  width: "100%",
  margin: "0 auto",
  padding: "10px",
  align: "centre",
};
class addCustomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customerName: "",
      customerGender: "",
      Amount: "",
      LoanTenure: "",
    };
    this.onClickAdd.bind(this);
  }

  onClickAdd = (event) => {
    event.preventDefault();
    const { customerName, customerGender, Amount, LoanTenure } = this.state;
    const formValues = {
      c_name: customerName,
      gender: customerGender,
      amount: Amount,
      loanTenure: LoanTenure,
    };

    console.log(formValues);

    // axios
    //   .post("http://localhost:5000/customers/add", Customer)
    //   .then((res) => console.log(res.data));

    fetch("http://localhost:5000/customers/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
  };

  handleCustomerNameChange = (e) => {
    this.setState({ customerName: e.target.value });
  };

  handleCustomerGenderChange = (e) => {
    this.setState({ customerGender: e.target.value });
  };
  handleCustomerAmountChange = (e) => {
    this.setState({ Amount: e.target.value });
  };
  handleCustomerLoanTenureChange = (e) => {
    this.setState({ LoanTenure: e.target.value });
  };

  render() {
    return (
      <form style={customStyle}>
        <div className="form-group">
          <h3>Customer Reg.</h3>
          <label>
            {" "}
            Name
            <input
              name="customerName"
              required
              type="text"
              className="form-control"
              value={this.state.customerName}
              onChange={this.handleCustomerNameChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            {" "}
            Gender{" "}
            <input
              name="customerGender"
              required
              type="text"
              className="form-control"
              value={this.state.customerGender}
              onChange={this.handleCustomerGenderChange}
            />{" "}
          </label>
        </div>
        <div className="form-group">
          <label>
            {" "}
            Amount{" "}
            <input
              name="Amount"
              type="text"
              className="form-control"
              value={this.state.Amount}
              onChange={this.handleCustomerAmountChange}
            />{" "}
          </label>
        </div>
        <div className="form-group">
          <label>
            {" "}
            LoanTenure
            <input
              name="LoanTenure"
              type="text"
              className="form-control"
              value={this.state.LoanTenure}
              onChange={this.handleCustomerLoanTenureChange}
            />{" "}
          </label>
        </div>
        <div className="form-group">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onClickAdd}
          >
            Add Customer
          </button>
        </div>
      </form>
    );
  }
}

export default addCustomer;
