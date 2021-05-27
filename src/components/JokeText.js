import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function JokeText() {

    const [joke, setJoke] = useState("");

    //API FETCH
    const getJoke = () => {
        fetch('https://icanhazdadjoke.com/', {
            headers: {
                'Accept': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => setJoke(res.joke));
    };
    return (
        <div>
            <h1>Ready for laugth?</h1>
            <div>{joke}</div>
            <Button onClick={() => getJoke()}>Next</Button>
        </div>
    );


}


export default JokeText