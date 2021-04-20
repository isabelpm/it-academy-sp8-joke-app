import React from "react"
import JokeText from "../components/API/JokeText"
import Weather from "../components/API//Weather"
import Header from "./Header"
import Footer from "./Footer"
import { Container, Row, Col } from "react-bootstrap"


function JokeApp() {
    return (
        <Container fluid className="app-body justify-content-center align-items-center p-0">
            {/* HEADER */}
            <Header />
            {/* BODY */}
            <Row className="justify-content-center align-items-center">
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
                {/* FOOTER */}
                <Footer />
            </Row>
        </Container >
    )
}

export default JokeApp