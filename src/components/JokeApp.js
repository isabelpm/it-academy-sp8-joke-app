import React from "react"
import JokeText from "../components/API/JokeText"
import Weather from "../components/API//Weather"
import Header from "./Header"
import Footer from "./Footer"
import { Container, Row, Col } from "react-bootstrap"


function JokeApp() {
    return (
        <Container fluid className="app-body">
            <Row>
            {/* HEADER */}
            <Header />
            </Row>

            <Row className="justify-content-center align-items-center p-2">
                {/* BODY */}
                <Col md={7} className="justify-content-center" >
                    <Row className="justify-content-center p-1">
                        <Col xs={12} md lg={12}>
                            {/* JOKE APP */}
                            <JokeText />
                        </Col>
                        <Col xs={7} md lg={8}>
                            {/* WEATHER APP */}
                            <Weather />
                        </Col>
                    </Row>
                </Col>

            </Row>

            <Row>
                {/* FOOTER */}
                <Footer />
            </Row>
           
        </Container >
    )
}

export default JokeApp