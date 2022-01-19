import React from "react";

export default function Occupations({occupation}){
  return (
    <>
    <option value="default" disabled hidden>
      Choose Occupation 
    </option>
    {occupation.map((job, idx) => (
      <option className="job" value={job} key={idx}>
        {job}
      </option>
    ))}
    </>
  );
}