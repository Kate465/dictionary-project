import React, {useState} from "react";
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary() {
    let [Keyword, setKeyword] = useState("");

    function handleResponse(response){
        console.log(response.data)
    }

function search (event) {
event.preventDefault();



let apiKey= "cf0f31ao4d106c8ff184dbac1a07a8t3";
let apiUrl =`https://api.shecodes.io/dictionary/v1/define?word=${Keyword}&key=${apiKey}`;
axios.get(apiUrl).then(handleResponse);
}

function handleKeywordChange (event) {
    setKeyword(event.target.value);
}

    return <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search"  onChange={handleKeywordChange}autoFocus={true}/>
        </form>
        </div>;

}