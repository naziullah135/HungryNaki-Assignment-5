const searchMeal = () =>{
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}
const displayMeals = meals =>{
    const mealContainer = document.getElementById('meal-container');
    meals.forEach(meal => {
        const mealDiv = document.createElement('div');
        mealDiv.className = 'col-md-4'
        mealDiv.innerHTML = `
        <div>
        <img style="width:300px;" src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <button onclick="Ingredients('${meal.idMeal}')">Ingredients</button>
        </div>
        `;
        mealContainer.appendChild(mealDiv);
    });     
} 
const Ingredients = list =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${list}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.meals[0]));
}
const displayDetails = ingredients => {
    const detailsDiv = document.getElementById('meal-details');
    detailsDiv.className = 'd-flex justify-content-center'
    detailsDiv.innerHTML = `
    <div>
    <img style="width:400px;" src="${ingredients.strMealThumb}">
     <h2>Ingredients</h2>
     <p>✅${ingredients.strIngredient1}</p>
     <p>✅${ingredients.strIngredient2}</p>
     <p>✅${ingredients.strIngredient3}</p>
     <p>✅${ingredients.strIngredient4}</p>
     <p>✅${ingredients.strIngredient5}</p>
    </div>
     `

    // console.log(${ingredients.strIngredient});
    // console.log(ingredients.strIngredient2);
    // console.log(ingredients.strIngredient3);
}
