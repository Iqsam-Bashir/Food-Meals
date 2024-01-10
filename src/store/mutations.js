export function setSearchedMeals(state, meals)
{ // here we are taking the current state and meals which we are searching. we have to set the meals in the state
    state.searchedMeals = meals
}
export function setMealsByLetter(state, meals)
{ 
    state.mealsByLetter = meals
}
export function setMealsByIngredients(state, meals)
{ 
    state.mealsByIngredient = meals
}