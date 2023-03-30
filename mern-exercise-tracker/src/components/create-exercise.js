import React, { Component } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
class CreateExercise extends Component {
  /* A constructor function that is called when a new instance of the class is created. */
  constructor(props) {
    super(props);

    this.onchangeUsername = this.onchangeUsername.bind(this);
    this.onchangeDescription = this.onchangeDescription.bind(this);
    this.onchangeDuration = this.onchangeDuration.bind(this);
    // this.onchangeDate = this.onchangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: "",
      // date: new Date(),
      users: [],
    };
  }

  /* A lifecycle method that is called after the component is rendered. */
  componentDidMount() {
    this.setState({
      users: ["test user"],
      username: "test user",
    });
  }

  onchangeUsername(e) {
    this.setState({ username: e.target.value });
  }

  onchangeDescription(e) {
    this.setState({ description: e.target.value });
  }

  onchangeDuration(e) {
    this.setState({ duration: e.target.value });
  }

  // onchangeDate(date) {
  //   this.setState({
  //     date: date,
  //   });
  // }

  /* A function that is called when the form is submitted. */
  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      // date: this.state.date,
    };
    console.log(exercise);

    window.location = "/";
  }
  /* A function that is called when the component is rendered. */
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Create New Exrecise Log</h3>

        <div className="form-group">
          <label>Username</label>
          <select
            ref="uerInput"
            required
            className="form-control"
            value={this.state.username}
            onChange={this.onchangeUsername}
          >
            {
              /* Mapping the users array to the select element. */
              this.state.users.map(function (user) {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })
            }
          </select>
        </div>

        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            required
            className="form-control"
            value={this.state.description}
            onChange={this.onchangeDescription}
          />
        </div>

        <div className="form-group">
          <label>Duration (in minutes):</label>
          <input
            type="text"
            className="form-control"
            value={this.state.duration}
            onChange={this.onchangeDuration}
          />
        </div>

        {/* <div className="form-group">
          <label>Date:</label>
          <input
            type="date"
            className="form-control"
            value={this.state.date}
            onChange={this.onchangeDate}
          />
        </div> */}
        <div className="form-group">
          <br />
          <input
            type="submit"
            className="btn btn-primary"
            value="Create Exercise Log"
          />
        </div>
      </form>
    );
  }
}
export default CreateExercise;
