import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.js";
import ExerciseList from "./components/exercise-list.js";
import EditExercise from "./components/edit-exercise.js";
import CreateExercise from "./components/create-exercise.js";
import CreateUser from "./components/create-user.js";
import Customer from "./components/addCustomer.js";
import LiCustomers from "./components/listCustomer.js";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <br />
        <Routes>
          <Route path="/" element={<ExerciseList />} exact />
          <Route path="/edit/:id" element={<EditExercise />}></Route>
          <Route path="/create" element={<CreateExercise />}></Route>
          <Route path="/user" element={<CreateUser />}></Route>
          <Route path="/customer" element={<Customer />}></Route>
          <Route path="/list-customer" element={<LiCustomers />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
