import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetic";
import "./Results.css";

export default function Results(props) {
        if (props.results) {
            return (
                <div className="Results">
                    <section>
                     <h2>{props.results.word}</h2>
                     {props.results.phonetics.map(function(phonetic, index) {
                        return (
                            <div key={index}>
                                <Phonetics phonetic={phonetic} />
                            </div>
                        );
                     })}
                     </section>
            {props.results.meanings.map(function(meaning, index) {
                return ( 
                <section className="Meaning" key={index}>
                    <Meaning meaning={meaning} />
                </section>
                );
            })}
        </div>
    );
      } else {
            return null;
      }
}