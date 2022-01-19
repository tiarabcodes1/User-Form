import React from "react";

export default function States({ states }){
  return (
    <>
      <option value="default" disabled hidden>
        Choose a state
      </option>
      {states.map((residence, idx) => (
        <option value={residence.name} key={idx}>
          {residence.name}
        </option>
      ))}
    </>
  );
}
