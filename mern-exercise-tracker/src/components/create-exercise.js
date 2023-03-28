import React, { Component } from "react";
/* Exporting the class CreateExercise to be used in another file. */
export default class CreateExercise extends Component {
  /* A constructor function that is called when a new instance of the class is created. */
  constructor(props) {
    super(props);

    this.onchangeUsername = this.onchangeUsername.bind(this);
    this.onchangeDescription = this.onchangeDescription.bind(this);
    this.onchangeDuration = this.onchangeDuration.bind(this);
    this.onchangeDate = this.onchangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: "",
      date: new Date(),
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

  onchangeDate(date) {
    this.setState({
      date: date,
    });
  }

  /* A function that is called when the form is submitted. */
  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };
    console.log(exercise);

    window.location = "/";
  }

  /* A function that is called when the component is rendered. */
  render() {
    return (
      <div>
        <p>You are welcome Create Exercise</p>
      </div>
    );
  }
}
