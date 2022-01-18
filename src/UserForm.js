import React from "react";
import Occupations from "./Occupations";
import States from "./States";

export default function UserForm({
  occupation,
  state,
  handleSubmit,
  handleChange
}) {
  return (
    <form 
    onSubmit={handleSubmit}
    action=""
    method="get"
    className="userForm"
    > 
      <label>
        Enter your full name:
        <input type="text" onChange={handleChange} name="name" id="name" placeholder="Full Name"/>
      </label>

      <label>
        Enter your password:
        <input type="password" onChange={handleChange} name="password" id="password"/>
      </label>
      <label>
        Enter your email:
        <input type="text" onChange={handleChange} name="email" id="email" />
      </label>
      <select
      onChange={handleChange}
      name="occupation"
      defaultValue="default"
        >
        <Occupations occupation={occupation} />
        </select>
      <select 
      onChange={handleChange}
      name="state"
      defaultValue="default">
        <States state={state} />
      </select>
      <div>
        <input type="submit" value="Submit!" />
      </div>
    </form>
  );
}