import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Restaurant.css';

const Restaurant = () => {
    const [searchText, setSearchText] = useState("");
    const [meals, setMeals] = useState([])
    useEffect( () => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    }, [searchText]);
    const handleSearchField = e => {
        setSearchText(e.target.value);
    }
    return (
        <div>
            <h1>Search Your Meal Here....</h1>
            <input type="text" onChange={handleSearchField} placeholder="Meal name...."/>
            <div className="meal">
                {
                    meals.map( meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
        </div>
    );
};

export default Restaurant;