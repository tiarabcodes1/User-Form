import './App.css';
import React, { useEffect, useState } from "react";
import Error from "./Error";
import UserForm from './UserForm';

const initialFormData = {
  name: "",
  password: "",
  email: "",
  occupation: "",
  state: "",
};

export default function App() {
  const [occupation, setOccupations] = useState([]);
  const [state, setStates] = useState([]);
  const [error, setError] = useState(null);
  const [formData, updateFormData] = useState(initialFormData);
  const [valid, setValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("https://frontend-take-home.fetchrewards.com/form")
        
      .then((res) => res.json())
      .then(
        (result) => {
          setOccupations(result.occupations);
        },
        (error) => {
          setError(error);
        }
      );

    fetch("https://frontend-take-home.fetchrewards.com/form")
      .then((res) => res.json())
      .then(
        (result) => {
          setStates(result.states);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(formData).indexOf("") === -1) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      };
      fetch("https://frontend-take-home.fetchrewards.com/form", requestOptions)
        .then(response => response)
        .then(
          data => {
            console.log("Data Response", data)
            data.status === 200 && setSubmitted(true);
          },
          error => {
            console.log("error string", error)
            setError(error);
          }
        );
    } else {
      setValid(false);
    }
  };

  if (error) {
    return <Error error={error} />;
  } else if (submitted) {
    return (
      <>
        <h1>thank you for submitting the form!</h1>
      </>
    );
  } else {
    return (
      <div className="App">
        <h1>Fill out the form to get started!</h1>
        <UserForm
          occupation={occupation}
          state={state}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          />
          {!valid && <h2>Opps! Looks like you missed something.</h2>}
      </div>
    );
  }
}


