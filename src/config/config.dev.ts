export const config = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  apiHealthcareGov: 'https://www.healthcare.gov/api/index.json',
  proxy: 'https://www.joeschedule.com/cgi-bin/cgi/ngfop/api_caller.py?url=${url}',
  apiEndpointCocktailRandom: 'http://www.thecocktaildb.com/api/json/v1/1/random.php',
  apiEndpointCocktailDrinks: 'http://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink',
};
