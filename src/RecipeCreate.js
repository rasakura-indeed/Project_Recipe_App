import React, { useState } from "react";
import "./App.css";

function RecipeCreate({recipes, setRecipes}) {
  const initialSate = {
    "name": "", "cuisine": "", "photo": "", "ingredients": "", "preparation": ""
  };
  const [recipeData, setRecipeData] = useState(initialSate);
  
  
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  const handleChange = event => setRecipeData({...recipeData, [event.target.name]: event.target.value});
  const handleSubmit = event => {
    event.preventDefault();
    setRecipes([...recipes, recipeData]);
    setRecipeData(initialSate);
  }
  
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr className="recipeRow">
            <td className="name-field">
              <input
                name="name"
                className="name"
                type="text"
                onChange={handleChange}
                value={recipeData.name}
                placeholder={"Name"}
                required
              />
            </td>
            <td className="cuisine-field">
              <input
                name="cuisine"
                type="text"
                className="cuisine"
                onChange={handleChange}
                value={recipeData.cuisine}
                placeholder={"Cuisine"}
                required
              />
            </td>
            <td className="photo-field">
              <input
                name="photo"
                type="text"
                className="photo"
                onChange={handleChange}
                value={recipeData.photo}
                placeholder={"URL"}
                required
              />
            </td>
            <td className="ingredients-field">
              <textarea
                name="ingredients"
                type="text"
                className="ingredients"
                onChange={handleChange}
                value={recipeData.ingredients}
                placeholder={"Ingredients"}
                required
              />
            </td>
            <td className="preparation-field">
              <textarea
                name="preparation"
                type="text"
                className="preparation"
                onChange={handleChange}
                value={recipeData.preparation}
                placeholder={"Preparation"}
                required
              />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
