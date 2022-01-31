import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Restaurant from './components/Restaurant/Restaurant';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import MealDetail from './components/MealDetail/MealDetail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/restaurant">
            <Restaurant> </Restaurant>
          </Route>
          <Route path="/mealDb/:mealId">
            <MealDetail></MealDetail>
          </Route>
          <Route exact path="/">
            <Restaurant></Restaurant>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
