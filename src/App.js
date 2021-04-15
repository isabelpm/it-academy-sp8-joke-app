
import React from 'react';
import JokeText from "./components/API/JokeText"
import Layout from './components/Layout'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

function App() {

  // here will go the structure of the web
  return (

    <div>
      <Layout>
        <Row>
            <Col md={6}>
            <Row className="justify-content-md-center align-items-center mt-1">
              {/* JOKE APP */}
              <JokeText />
            </Row>
          </Col>
        </Row>
      </Layout>

    </div>
  );
}

export default App;
