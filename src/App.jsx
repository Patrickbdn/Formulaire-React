import "./App.css";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveFormData } from "./formSlice";

function App() {
  const { register, handleSubmit, reset } = useForm();
  const [ageError, setAgeError] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    if (data.Age >= 18) {
      dispatch(saveFormData(data));
      console.log(data);
      setAgeError(false);
      reset();
    } else {
      setAgeError(true);
    }
  };
  return (
    <form className="column-container" onSubmit={handleSubmit(onSubmit)}>
      <label>Nom</label>
      <input {...register("Nom")}></input>
      <label>Prénom</label>
      <input {...register("Prénom")}></input>
      <label>Email</label>
      <input {...register("Email")}></input>
      <label>Mot de passe</label>
      <input type="password" {...register("mot de passe")}></input>
      <label>Age</label>
      {ageError && (
        <p className="error">
          {" "}
          Vous devez avoir 18 ans minimum et 150 ans maximum{" "}
        </p>
      )}
      <input type="number" {...register("Age", { min: 0, max: 99 })}></input>
      <input type="submit"></input>
    </form>
  );
}

export default App;
