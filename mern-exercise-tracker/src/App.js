import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/navbar.js";
import ExerciseList from "./components/exercise-list.js";
import EditExercise from "./components/edit-exercise.js";
import CreateExercise from "./components/create-exercise.js";
import CreateUser from "./components/create-user.js";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <br />
      <Routes>
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
