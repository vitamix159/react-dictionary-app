
import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";



export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    let [results, setResults] = useState(null);
    
    function handleResponse(response) {
        setResults(response.data[0]);
    }


    function search(event) {
        event.preventDefault();
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        console.log(apiUrl);
        axios.get(apiUrl).then(handleResponse)

    }


    function handleKeyword(event) {
        setKeyword(event.target.value);
    }


    return (
    <div className="Dictionary mt-5 mb-3">
        <form onSubmit={search}>
            <input 
            type="search" 
            onChange={handleKeyword} />
            <button className="btn btn-warning ms-3">Search</button>
            <Results results={results} />
        </form>  
    </div>
    );
}
