import React, { useState } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import ItemList from "../itemList";
import CharDetails from "../charDetails";

import "./app.css";

const App = () => {
    const [viewRanChar, setViewRanChar] = useState(true);

    const btnClickHandler = () => {
        setViewRanChar((prevViewRanChar) => {
            return !prevViewRanChar;
        });
    };

    return (
        <>
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{ size: 5, offset: 0 }}>
                        {viewRanChar ? <RandomChar /> : null}
                        <button
                            className='toggle-btn'
                            onClick={btnClickHandler}
                        >
                            Toggle random character
                        </button>
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;
