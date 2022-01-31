import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Meal.css';

const Meal = (props) => {
    const {idMeal, strMeal, strMealThumb, strInstructions, } = props.meal;
    const history = useHistory()
    const handleButton = (id) => {
        history.push(`/mealDb/${id}`);
    }
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={strMealThumb} />
            <Card.Body>
                <Card.Title>{strMeal}</Card.Title>
                <Card.Text>{strInstructions.slice(0, 100)} </Card.Text>
                <Link to={`/mealDb/${idMeal}`}>Link Details</Link>
                <br />
                <Button onClick={() => handleButton(idMeal)} variant="primary">Btn details</Button>
            </Card.Body>
        </Card>
    );
};

export default Meal;