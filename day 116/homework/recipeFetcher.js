import axios from 'axios';

const API_URL = 'https://api.edamam.com/api/recipes/v2'
const APP_ID = '#899786554';
const APP_KEY = 'kdurb3892n'

export async function fetchRecipes(ingredient) {
  try {
    const response = await axios.get(API_URL, {
      params: {
        type: 'public',
        q: ingredient,
        app_id: APP_ID,
        app_key: APP_KEY,
      },
    });
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw new Error('err');
  }
}
