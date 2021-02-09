const searchMeal = () => {
  const searchText = document.getElementById("search-field").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};
const displayMeals = (meals) => {
  const mealContainer = document.getElementById("meal-container");
  mealContainer.innerHTML = "";
  meals.forEach((meal) => {
    const mealDiv = document.createElement("div");
    mealDiv.className = "col-md-4 mb-4";
    mealDiv.innerHTML = `
        <div>
        <img src="${meal.strMealThumb}">
        <h3>${meal.strMeal}</h3>
        <button onclick="Ingredients('${meal.idMeal}')" class="btn btn-primary" >Ingredients</button>
        </div>
        `;
    mealContainer.appendChild(mealDiv);
  });
};
const Ingredients = (list) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${list}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayDetails(data.meals[0]));
};
const displayDetails = (ingredients) => {
  const detailsDiv = document.getElementById("meal-details");
  detailsDiv.innerHTML ='';
  detailsDiv.innerHTML = `
    <div class="meal-box">
     <img src="${ingredients.strMealThumb}">
     <h1>${ingredients.strMeal}</h1>    
     </div>
     <ul class="ingredients-list">
     <li><h2>Ingredients</h2><li>
     <li><h5>${ingredients.strIngredient1}</li>
     <li><h5>${ingredients.strIngredient2}</h5</li>
     <li><h5>${ingredients.strIngredient3}</h5</li>
     <li><h5>${ingredients.strIngredient4}</h5</li>
     <li><h5>${ingredients.strIngredient5}</h5</li>
     <li><h5>${ingredients.strIngredient6}</h5</li>
     <li><h5>${ingredients.strIngredient7}</h5</li>
     <li><h5>${ingredients.strIngredient8}</h5</li>
     <li><h5>${ingredients.strIngredient9}</h5</li>
     <li><h5>${ingredients.strIngredient10}</h5</li>
    </ul>
     `;
};
