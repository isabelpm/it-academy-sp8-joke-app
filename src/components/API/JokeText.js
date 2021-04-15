import React, { useState } from 'react';
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Styles/JokeText.css'



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
            <div className="titular mt-5 ml-5 text-center">Comedian Club</div>
            <Card className="joke-card  ml-5 mt-5 text-center">
                <Card.Body >
                    <Card.Title className="title">READY FOR LAUGTH?</Card.Title>
                    <Card.Text className="text">{joke}</Card.Text>
                    <Button className="btn w-50" onClick={() => getJoke()}>joke</Button>
                </Card.Body>

            </Card>


        </div>
    );

}
export default JokeText