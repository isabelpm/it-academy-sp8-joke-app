import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from "axios"

function JokeText() {

    const [joke, setJoke] = useState("");

    //Axios
    const getJoke = () => {
        axios.get("https://icanhazdadjoke.com/", {
                headers: {
                    Accept: "application/json",
                },
            })
            .then((res) => {
                setJoke(res.data.joke);
            })
    }
    return (
        <div>
            <h1>Ready for laugth?</h1>
            <div>{joke}</div>
            <Button onClick={() => getJoke()}>Next</Button>
        </div>
    );


}


export default JokeText