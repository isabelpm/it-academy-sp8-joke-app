import React, { useState, useEffect } from "react"
import axios from "axios"
import { Container, Card, Col, Row } from "react-bootstrap"
import './Styles/weather.css'


function Weather() {
    const [fetching, setFetching] = useState(false);

    //BARCELONA
    const [cityBcn, setCityBcn] = useState([])
    const [tempBcn, setTempBcn] = useState([])
    const [weatherBcn, setWeatherBcn] = useState([])

    //Fetching local data BARCELONA
    useEffect(() => {
        const fetchData = async () => {
            const result = await
                axios.get('https://api.weatherapi.com/v1/current.json?key=e3c4a31ebc6447ef8c0115758211003&q=Barcelona&aqi=no', {
                    headers: {
                        'Accept': 'application/json'
                    }
                });

            console.log(result.data)
            setCityBcn(`${result.data.location.name}`)
            setTempBcn(`${result.data.current.temp_c}`)
            setWeatherBcn(`${result.data.current.condition.text}`)

        };
        fetchData();
    }, [fetching]);

    // Girona 
    const [cityGi, setCityGi] = useState([])
    const [tempGi, setTempGi] = useState([])
    const [weatherGi, setWeatherGi] = useState([])

    //Fetching local data Girona
    useEffect(() => {
        const fetchData = async () => {
            const result = await
                axios.get('https://api.weatherapi.com/v1/current.json?key=e3c4a31ebc6447ef8c0115758211003&q=Girona&aqi=no', {
                    headers: {
                        'Accept': 'application/json'
                    }
                });

            console.log(result.data)
            setCityGi(`${result.data.location.name}`)
            setTempGi(`${result.data.current.temp_c}`)
            setWeatherGi(`${result.data.current.condition.text}`)

        };
        fetchData();
    }, [fetching]);

    // Tarragona
    const [cityTar, setCityTar] = useState([])
    const [tempTar, setTempTar] = useState([])
    const [weatherTar, setWeatherTar] = useState([])

    //Fetching local data Tarragona
    useEffect(() => {
        const fetchData = async () => {
            const result = await
                axios.get('https://api.weatherapi.com/v1/current.json?key=e3c4a31ebc6447ef8c0115758211003&q=Tarragona&aqi=no', {
                    headers: {
                        'Accept': 'application/json'
                    }
                });

            console.log(result.data)
            setCityTar(`${result.data.location.name}`)
            setTempTar(`${result.data.current.temp_c}`)
            setWeatherTar(`${result.data.current.condition.text}`)
        };
        fetchData();
    }, [fetching]);


    // Lleida
    const [cityLle, setCityLle] = useState([])
    const [tempLle, setTempLle] = useState([])
    const [weatherLle, setWeatherLle] = useState([])

    //Fetching local data Lleida
    useEffect(() => {
        const fetchData = async () => {
            const result = await
                axios.get('https://api.weatherapi.com/v1/current.json?key=e3c4a31ebc6447ef8c0115758211003&q=Lleida&aqi=no', {
                    headers: {
                        'Accept': 'application/json'
                    }
                });

            console.log(result.data)
            setCityLle(`${result.data.location.name}`)
            setTempLle(`${result.data.current.temp_c}`)
            setWeatherLle(`${result.data.current.condition.text}`)
        };
        fetchData();
    }, [fetching]);

    return (
        <Container fluid className="weather">
            <Card.Title className="titleWeather">How is the weather today?</Card.Title>
            {/* BARCELONA */}
            <Card className=" mt-3 border-0">
                <Card.Body className="card-city">
                    <Row className="align-items-center" >
                        <Col><Card.Title className="weather-temp mb-0">{tempBcn}°C</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{cityBcn}</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{weatherBcn}</Card.Title></Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* GIRONA */}
            <Card className="mt-3 border-0">
                <Card.Body className="card-city">
                    <Row className="align-items-center">
                        <Col><Card.Title className="weather-temp mb-0">{tempGi}°C</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{cityGi}</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{weatherGi}</Card.Title></Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* TARRAGONA */}
            <Card className="mt-3 border-0">
                <Card.Body className="card-city">
                    <Row className="align-items-center">
                        <Col><Card.Title className="weather-temp mb-0">{tempTar}°C</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{cityTar}</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{weatherTar}</Card.Title></Col>
                    </Row>
                </Card.Body>
            </Card>

            {/* LLEIDA */}
            <Card className="mt-3 mb-5 border-0">
                <Card.Body className="card-city">
                    <Row className="align-items-center">
                        <Col><Card.Title className="weather-temp mb-0">{tempLle}°C</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{cityLle}</Card.Title></Col>
                        <Col><Card.Title className="weather-text mb-0">{weatherLle}</Card.Title></Col>
                    </Row>
                </Card.Body>
            </Card>


        </Container>
    )
}

export default Weather

