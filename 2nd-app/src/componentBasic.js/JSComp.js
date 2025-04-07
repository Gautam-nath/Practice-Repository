import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const JSComp =() =>{
    return(
        <div>
            <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="holder.js/100px180" />
<Card.Body>
<Card.Title>JavaScript</Card.Title>
<Card.Text>
Some quick example text to build on the card title and make up the
bulk of the card's content.
</Card.Text>
<Button variant="primary">Go To Details</Button>
</Card.Body>
</Card>

        </div>
    )
}
export default JSComp;