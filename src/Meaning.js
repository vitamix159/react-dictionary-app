import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning";

export default function Meaning(props) {
    return (
        <div className="Meaning text-start">
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function(definition, index) {
            return (
                <div key={index}>
                    <p>
                    <strong className="definition">Definition: </strong>{definition.definition}
                    <br />
                    <strong className="example">Example: </strong><em>{definition.example}</em>
                    <br />
                    <Synonyms synonyms={definition.synonyms} />
                    </p>
                </div>
            );
        })}
        </div>
    );
}