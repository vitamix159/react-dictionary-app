import React from "react";

 export default function Synonyms(props) {
  console.log(props)
   if (props.synonyms) {
    return (
      <ul className="Synonyms mt-3">
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}