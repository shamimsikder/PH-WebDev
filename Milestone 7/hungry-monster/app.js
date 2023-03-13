
//------------- handle search button-----------
const searchFood = () => {
    const searchField = document.getElementById('mealInput'); 
    const searchData = searchField.value
    searchField.value = ''
    
    if(searchData === ""){
        document.getElementById('errorMessage').innerHTML = 'Enter Something'
        return
    }
    
   // document.getElementById('errorMessage').textContent = ''
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealInfo(data.meals))
    .catch(error =>{
        document.getElementById('errorMessage').innerHTML = "There is no food in this name";
    })

    searchField.value = "";
    document.getElementById('errorMessage').textContent = ''
    
}

const displayMealInfo = mealData => {
    const mealContainer = document.getElementById('mealCard');
    mealData.forEach(item => {
        const foodItemName = document.createElement('div');
        foodItemName.className = 'meal-items';
        itemPosition = item.idMeal;
        const mealInformation = `
        <img src ="${item.strMealThumb}">
        <h3>${item.strMeal}</h3>
        `
        foodItemName.innerHTML = mealInformation;
        foodItemName.addEventListener('click', function () {
            mealIngredientsInfo(item.idMeal);
        });
        mealContainer.appendChild(foodItemName);
    });
}


//API Call by fetch for meal ingredients 

const mealIngredientsInfo = mealItemName => { 
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItemName}`;
fetch(url)
        .then(response => response.json())
        .then(data => displayDetails(data.meals))
}

//meal ingredients details information

const displayDetails = mealItemDetails => {
    const mealItemsInformation = document.getElementById('mealItemsInfo');
    console.log(mealItemDetails)
    mealItemDetails.forEach(items => {
        const mealItemsInformations = document.createElement('div');
        mealItemsInformations.className = 'ingredients-info';
        console.log(items.strMeal);
        const itemsName = document.createElement('h1');
        const ingredients = document.createElement('h5');
        ingredients.innerText = 'Ingredients';
        itemsName.innerText = items.strMeal;
        const ul = document.createElement('ul');
        const imgUrl = document.createElement('img');
        imgUrl.src = items.strMealThumb;
        mealItemsInformations.appendChild(imgUrl);
        
        let ingredient = []

        for(let i = 1; i <= 20; i++){

            if(items[`strIngredient${i}`]){

                ingredient.push(items[`strIngredient${i}`])

            }

        }

        const li = `
        
            ${ingredient.map(item => `<li>${item}</li>`).join('')}
        
        `
        
        ul.innerHTML = li;
        mealItemsInformations.appendChild(itemsName);
        mealItemsInformations.appendChild(ingredients);
        mealItemsInformations.appendChild(ul);
        mealItemsInformation.appendChild(mealItemsInformations);

    });

}