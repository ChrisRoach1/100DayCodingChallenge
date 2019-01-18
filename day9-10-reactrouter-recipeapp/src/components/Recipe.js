import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

class Recipe extends React.Component {
  state = {
    activeRecipe: []
  };

  componentDidMount = async () => {
    const title = this.props.location.state.recipe;
    const key = "ea4ee084f996b16e89821aeb4530850b";
    const request = await fetch(
      `http://cors-anywhere.herokuapp.com/https://www.food2fork.com/api/search?key=${key}&q=${title}`
    );
    const data = await request.json();
    this.setState({
      activeRecipe: data.recipes[0]
    });
  };

  render() {
    const recipe = this.state.activeRecipe;
    return (
      <div className="container">
        {this.state.activeRecipe.length !== 0 && (
          <div className="active-recipe">
            <img
              className="active-recipe__img"
              src={recipe.image_url}
              alt={recipe.title}
            />
            <h3 className="active-recipe__title">{recipe.title}</h3>
            <h4 className="active-recipe__publisher">
              Publisher: <span>{recipe.publisher}</span>
            </h4>
            <p className="active-recipe__website">
              Website:
              <span>
                <a href={recipe.publisher_url}>{recipe.publisher_url}</a>
              </span>
            </p>
            <button className="active-recipe__button">
              <Link to="/">Go Home</Link>
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Recipe;
