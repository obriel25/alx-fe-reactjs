import { Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);

  const listToDisplay =
    searchTerm.length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      {listToDisplay.map((recipe) => (
        <div key={recipe.id}>
          <h3>
            <Link to={`/recipes/${recipe.id}`}>
              {recipe.title}
            </Link>
          </h3>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
