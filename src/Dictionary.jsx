import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";

export default function Dictionary(props) {
    let [Keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);

    function handleResponse(response){
        console.log(response.data.meanings[0]);
        setResults(response.data);
    }

function handleSubmit (event) {
event.preventDefault();
search();
}

function search(){
let apiKey= "cf0f31ao4d106c8ff184dbac1a07a8t3";
let apiUrl =`https://api.shecodes.io/dictionary/v1/define?word=${Keyword}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse);
}

function handleKeywordChange (event) {
    setKeyword(event.target.value);
}

function load(){
    setLoaded(true);
    search();
}

if (loaded) {
    return (
    <div className="Dictionary">
    <section>
        <form onSubmit={handleSubmit}>
            <input type="search"  onChange={handleKeywordChange}autoFocus={true}/>
        </form>
        <div className="hint">
            Suggested words: sunset, wine, yoga, plant...
        </div>
        </section>
        < Results results = {results}/>
        </div>
        );

} else {
load();
return "Loading";
}
}