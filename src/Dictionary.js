
import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);
    
    function handleResponse(response) {
        setResults(response.data[0]);
    }
    function handlePexelsResponse (response) {
        setPhotos(response.data.photos)
    }

    function search() {
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
         let pexelsApiKey = "563492ad6f917000010000012796202e50b84ddca69190979dc851a9";
         let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}`;
         let headers = {"Authorization" : `Bearer ${pexelsApiKey}`};
         axios.get(pexelsApiUrl,{ headers: headers }).then(handlePexelsResponse);
    }


    function handleSubmit(event) {
        event.preventDefault();
        search();
    }


    function handleKeyword(event) {
        setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
        return (
            <div className="Dictionary mt-5 mb-3">
                <div className="introduction">
                    Hi!🖐️<br />
                    It's a simple React dictionary😍<br />
                    Give it a try!🤓
                </div>
                <section>
                    <form onSubmit={handleSubmit}>
                        <input 
                        type="search"
                        placeholder="Enter a word.." 
                        onChange={handleKeyword} />
                        <button className="btn btn-warning">Search</button>
                    </form>
                </section>
                <Results results={results} />
                <Photos photos={photos} />
            </div>
            );
    } else {
        load();
        return "Loading";
    }
}
