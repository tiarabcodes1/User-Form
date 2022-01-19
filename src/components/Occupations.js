import React from 'react';

export default function Occupations({ occupations }) {
  return (
    <>
      <option value="default" disabled hidden>
        Choose Occupation
      </option>
      {occupations.map((occupation, idx) => (
        <option className="job" value={occupation} key={idx}>
          {occupation}
        </option>
      ))}
    </>
  );
}
