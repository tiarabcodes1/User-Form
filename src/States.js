import React from "react";

export default function States({state}){
  return (
    <>
    <option value="default" disabled hidden>
      Choose a state
    </option>
    {state.map((residence, idx) => (
      <option value={residence.name} key={idx}>
        {residence.name}
      </option>
    ))}
    </>
  );
}