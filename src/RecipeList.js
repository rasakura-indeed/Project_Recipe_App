import React from "react";
import "./App.css";

function RecipeList({recipes, setRecipes}) {
  
  
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.
   const RecipeItem = ({recipe, index, onDelete}) => {
    return (
      <tr className="recipe" key={index}>
        <td className="content_td">
          <span>{recipe.name}</span>
        </td>
        <td className="content_td">
          <span>{recipe.cuisine}</span>
        </td>
        <td className="content_td">
          <img src={recipe.photo} alt="Image" />
        </td>
        <td className="content_td">
          <p>{recipe.ingredients}</p>
        </td>
        <td className="content_td">
          <p>{recipe.preparation}</p>
        </td>
        <td className="content_td">
          <button name="delete" onClick={() => onDelete(index)}>Delete</button>
        </td>
      </tr>
    );
  };

  const handleDelete = (indexToDelete) => {
    const updatedRecipes = recipes.filter((_, index) => index !== indexToDelete);
    setRecipes(updatedRecipes);
  };

  const postItems = recipes.map((recipe, index) => (
    <RecipeItem recipe={recipe} index={index} onDelete={handleDelete} key={index}/>
  ));
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <>
            {recipes.length > 0 && (
              <>
                {postItems}
              </>
            )}
          </>
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;

