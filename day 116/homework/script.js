import { fetchRecipes } from './recipeFetcher.js';

const searchButton = document.getElementById('searchButton');
const ingredientInput = document.getElementById('ingredientInput');
const resultsSection = document.getElementById('results');

searchButton.addEventListener('click', async () => {
  const ingredient = ingredientInput.value.trim();
  if (!ingredient) {
    alert('Please enter an ingredient.');
    return;
  }

  resultsSection.innerHTML = '<p>Loading...</p>';

  try {
    const recipes = await fetchRecipes(ingredient);
    if (recipes.length === 0) {
      resultsSection.innerHTML = '<p>No recipes found.</p>';
    } else {
      resultsSection.innerHTML = recipes
        .map(recipe => `
          <div>
            <h2>${recipe.recipe.label}</h2>
            <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
            <p>Ingredients: ${recipe.recipe.ingredientLines.join(', ')}</p>
            <a href="${recipe.recipe.url}" target="_blank">Full Recipe</a>
          </div>
        `)
        .join('');
    }
  } catch (error) {
    resultsSection.innerHTML = '<p>Error fetching recipes.</p>';
  }
});
