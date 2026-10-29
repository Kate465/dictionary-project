import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
    let [Keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState(null);
    let [loaded, setLoaded] = useState(false);
    let [photos, setPhotos] = useState(null);

    function handleDictionaryResponse(response){
        console.log(response.data.meanings[0]);
        setResults(response.data);
    }

function handleImageResponse(response){
    setPhotos(response.data.photos);
}

function handleSubmit (event) {
event.preventDefault();
search();
}

function search(){
let apiKey= "cf0f31ao4d106c8ff184dbac1a07a8t3";
let apiUrl =`https://api.shecodes.io/dictionary/v1/define?word=${Keyword}&key=${apiKey}`;
axios.get(apiUrl).then(handleDictionaryResponse);


let imageApiUrl=`https://api.shecodes.io/images/v1/search?query=${Keyword}&key=${apiKey}`
axios.get(imageApiUrl).then(handleImageResponse);
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
        <h1>What word would you like to look up?</h1>
        <form onSubmit={handleSubmit}>
            <input type="search"  onChange={handleKeywordChange}autoFocus={true} defaultValue={props.defaultKeyword}/>
        </form>
        <div className="hint">
            Suggested words: sunset, wine, yoga, plant...
        </div>
        </section>
        < Results results = {results}/>
        <Photos photos= {photos} />
        </div>
        );

} else {
load();
return "Loading";
}
}