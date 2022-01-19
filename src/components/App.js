import '../styles/App.css';
import React, { useEffect, useState } from "react";
import Error from "./Error";
import UserForm from './UserForm';
import Header from './Header'

const initialFormData = {
  name: "",
  password: "",
  email: "",
  occupation: "",
  state: "",
};

export default function App() {
  const [occupations, setOccupations] = useState([]);
  const [states, setStates] = useState([]);
  const [error, setError] = useState(null);
  const [formData, updateFormData] = useState(initialFormData);
  const [valid, setValid] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    fetch("https://frontend-take-home.fetchrewards.com/form")
      .then(res => res.json())
      .then(
        result => {
          setOccupations(result.occupations);
          setStates(result.states);
        },
        error => {
          setError(error);
        });

  }, []);

  const handleChange = e => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim()
    });
  };

  const handleSubmit = e => {
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
            data.status === 200 && setSubmitted(true);
          },
          error => {
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
      <div className="success">
        <img src={"./images/header-logo.png"} alt={"Fetch Rewards Logo"} />
        <h1>Thank you for submitting the form!</h1>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Header />
        <UserForm
          occupations={occupations}
          states={states}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        {!valid && <h2>Opps! Looks like you missed something.</h2>}
      </div>
    );
  }
}
