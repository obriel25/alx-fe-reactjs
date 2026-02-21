import { useParams } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import EditRecipeForm from './EditRecipeForm';
import DeleteRecipeButton from './DeleteRecipeButton';



const RecipeDetails = () => {
  const { id } = useParams();
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const isFavorite = favorites.includes(recipe.id);


  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === Number(id))
  );

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      {/* required literal usage */}
      <EditRecipeForm recipe={recipe} />
      <DeleteRecipeButton recipeId={recipe.id} />
      <button
  onClick={() =>
    isFavorite
      ? removeFavorite(recipe.id)
      : addFavorite(recipe.id)
  }
>
  {isFavorite ? "Remove Favorite" : "Add to Favorites"}
</button>

    </div>
  );
};

export default RecipeDetails;
