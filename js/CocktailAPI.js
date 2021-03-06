class CocktailAPI{

    // Get recipe by name
    async getDrinksByName(name){
        // Search by name 
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`);
        // Returns a json response
        const cocktails = await apiResponse.json();

        return{
            cocktails
        }
    }

    // Get recipe by ingredient
    async getDrinksByIngredient(ingredient){
        // Search by ingredient
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        // Wait for response and then return json
        const cocktails = await apiResponse.json();

        return{
            cocktails
        }
    }

    // Get single recipe
    async getSingleRecipe(id){
        // Search by ingredient
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
        // Wait for response and then return json
        const recipe = await apiResponse.json();

        return{
            recipe
        }
    }

    // Retrieves all the categories from the REST API
    async getCategories(){
        const apiResponse = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
        const categories = await apiResponse.json();
        return {
            categories
        }
    }

    // Get drinks by category
    async getDrinksByCategory(category){
        // Search by ingredient
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
        // Wait for response and then return json
        const cocktails = await apiResponse.json();

        return{
            cocktails
        }
    }

    // Get alco/non-alco drinks
    async getDrinksByAlcohol(term){
        // Search by ingredient
        const apiResponse = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${term}`);
        // Wait for response and then return json
        const cocktails = await apiResponse.json();

        return{
            cocktails
        }
    }
}