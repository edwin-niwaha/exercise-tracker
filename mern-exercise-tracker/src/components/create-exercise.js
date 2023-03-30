import React, { Component } from "react";
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
      ExerciseName: "",
      ExerciseDesc: "",
      ExerciseDuration: "",
    };
    this.onClickAdd.bind(this);
  }

  onClickAdd = (event) => {
    event.preventDefault();
    const { ExerciseName, ExerciseDesc, ExerciseDuration } = this.state;
    const formValues = {
      username: ExerciseName,
      description: ExerciseDesc,
      duration: ExerciseDuration,
    };

    console.log(formValues);

    fetch("http://localhost:5000/exercises/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    });
  };

  handleExerciseNameChange = (e) => {
    this.setState({ ExerciseName: e.target.value });
  };

  handleExerciseDescrChange = (e) => {
    this.setState({ ExerciseDesc: e.target.value });
  };
  handleExerciseDurationChange = (e) => {
    this.setState({ ExerciseDuration: e.target.value });
  };

  render() {
    return (
      <form style={customStyle}>
        <div className="form-group">
          <h3>Create New Exrecise Log</h3>
          <label>
            {" "}
            Exercise Name
            <input
              name="ExerciseName"
              required
              type="text"
              className="form-control"
              value={this.state.ExerciseName}
              onChange={this.handleExerciseNameChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            {" "}
            Description{" "}
            <input
              name="ExerciseDesc"
              type="text"
              className="form-control"
              value={this.state.ExerciseDesc}
              onChange={this.handleExerciseDescrChange}
            />{" "}
          </label>
        </div>
        <div className="form-group">
          <label>
            {" "}
            Duration{" "}
            <input
              name="ExerciseDuration"
              required
              type="text"
              className="form-control"
              value={this.state.ExerciseDuration}
              onChange={this.handleExerciseDurationChange}
            />{" "}
          </label>
        </div>
        <div className="form-group">
          <br />
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.onClickAdd}
          >
            Add Exercise
          </button>
        </div>
      </form>
    );
  }
}

export default addCustomer;
