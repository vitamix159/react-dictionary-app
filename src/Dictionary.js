
import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");
    
    function handleResponse(response) {
        console.log(response.data[0]);
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
    <div className="Dictionary">
        <form onSubmit={search}>
            <input 
            type="search" 
            onChange={handleKeyword} />
            <button className="btn btn-warning">Search</button>
        </form>  
    </div>
    );
}
