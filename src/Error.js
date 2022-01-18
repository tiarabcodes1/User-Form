import React from "react";

export default function Error({error}) {
  return <div> Error: {error.message} </div>;
}