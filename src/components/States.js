import React from 'react';

export default function States({ states }){
  return (
    <>
      <option value="default" disabled hidden>
        Choose a state
      </option>
      {states.map((state, idx) => (
        <option value={state.name} key={idx}>
          {state.name}
        </option>
      ))}
    </>
  );
}
