import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const MealDetail = () => {
    const { mealId } = useParams();
    const [mealDetails, setMealDetails] = useState({});
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMealDetails(data.meals[0]))
    }, [])
    const {
        strMeal,
        strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8,
        strInstructions,
        strMealThumb,
        strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5,
        strYoutube,
        strSource
    } = mealDetails;
    const imgStyle = {
        height: "300px",
        width: "400px",
        marginLeft: "100px",
        marginRight: "0px"
    }
    return (
        <Card style={{ width: '38rem', marginLeft: '400px'}}>
            <Card.Img variant="top" src={strMealThumb} style={imgStyle} />
            <Card.Body>
                <Card.Title> <h2>Meal Name: {strMeal}</h2> </Card.Title>
                <Card.Text> <b>Made Instruction:</b> {strInstructions}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroupItem> <b>Ingredient:</b> </ListGroupItem>
                <ListGroupItem>
                    {strIngredient1}
                    <br />
                    {strIngredient2}
                    <br />
                    {strIngredient3}
                    <br />
                    {strIngredient4}
                    <br />
                    {strIngredient5}
                    <br />
                    {strIngredient6}
                    <br />
                    {strIngredient7}
                    <br />
                    {strIngredient8}
                </ListGroupItem>
                <ListGroupItem><b>Measure:</b></ListGroupItem>
                <ListGroupItem>
                    {strMeasure1}
                    <br />
                    {strMeasure2}
                    <br />
                    {strMeasure3}
                    <br />
                    {strMeasure4}
                    <br />
                    {strMeasure5}
                </ListGroupItem>
            </ListGroup>
            <Card.Body>
                <Card.Link href={strYoutube}>Youtube</Card.Link>
                <Card.Link href={strSource}>Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default MealDetail;