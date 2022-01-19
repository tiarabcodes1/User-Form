import React from "react";

export default function Occupations({ occupations }) {
  return (
    <>
      <option value="default" disabled hidden>
        Choose Occupation
      </option>
      {occupations.map((job, idx) => (
        <option className="job" value={job} key={idx}>
          {job}
        </option>
      ))}
    </>
  );
}
