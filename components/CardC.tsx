import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CardC(props) {
    return (
        <Card className='mb-3' style={{ width: '22rem', display: 'block', margin: 'none' }}>
            <Card.Img variant="top" src={props.imgURL} />
            <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
                    {props.paragraph}
                </Card.Text>
                {props.children}
            </Card.Body>
        </Card>
    );
}