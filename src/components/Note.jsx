import React, {useState} from "react";
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import data from "../data";


function Note() {
    const [randomSentence, setSentence] = useState(data[Math.floor(Math.random() * data.length)]);

    return (
        <Container className='mt-5'>
            <Row>
                <Col/>
                <Col>
                    <Card className="text-center" style={{ width: '18rem'}}>
                        <Card.Img className="circle-img" variant="top" src="https://scontent.fhfa2-2.fna.fbcdn.net/v/t1.6435-9/67638853_10157260432183913_5309099221654175744_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=ZJTCaD-zqJoAX-7Pq6j&_nc_oc=AQnPBu_25JnC90h1hySGG5p9E68ULZ29oKxZdloM0khoJLS5M0O6W0gth5USLLeTPog&_nc_ht=scontent.fhfa2-2.fna&oh=00_AT-CNJmF4dEOJBSkuwWQ4dvW9jHSizLjUc0osHRsakJrqQ&oe=62071C18" />
                        <Card.Body>
                            <Card.Title style={{ color: '#548CFF' }}>{randomSentence.name}</Card.Title>
                            <Card.Text style={{direction: "rtl" }}>
                                {randomSentence.sentence}
                            </Card.Text>
                            <Button onClick={() => setSentence(data[Math.floor(Math.random() * data.length)])} variant="primary">עוד משפט</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col/>
            </Row>
        </Container>

    );
}

export default Note;
