import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';


function AboutCard({ image, title, description, link }) {
    return (
        <div style={{ marginTop: "3rem" }} className="container">
            <div className="row">

                <Card style={{ width: '12rem', backgroundColor: "#f77f00" }}>
                    <Card.Img style={{ marginTop: "1rem", height: "8rem", width: "10rem" }} variant="top" src={image} />
                    <Card.Body>
                        <Card.Title style={{ marginTop: "1rem", fontFamily: "Poppins,sans-serif", color: "red", fontSize: "12px" }}>{title}</Card.Title>
                        <Card.Text style={{ fontFamily: "Manrope,sans-serif", fontSize: "10px", fontWeight: "bolder", color: 'black' }}>
                            {description}
                        </Card.Text>
                        <a href={link}> <Button variant="primary" size='sm'>{title}</Button></a>
                    </Card.Body>
                </Card>

            </div>
        </div>
    )
}

export default AboutCard