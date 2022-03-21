
function ingredients(ingredientList){
    return `
    <h3>Ingredients:</h3>
    <ul>
        ${ingredientList.map(function(item){
            return `
            <li class="ingredient-items">${item}</li>
            `
        }).join("")}
    </ul>
    `
}

function directions(directionsList){
    return `
    <h3>Directions:</h3>
    <ul>
        ${directionsList.map(function(line){
            return `
            <li class="directions">${line}</li>
            `
        }).join("")}
    </ul>
    `
}
function recipeTemplate(recipe){
    return `
    <div class="recipe-contents">
        <h2>${recipe.recipeName}</h2>
        <img class="recipe-image" src="${recipe.img}">
        ${ingredients(recipe.ingredients)}
        <p>${directions(recipe.directions)}</p>
    </div>
    `
}

function recipeButtons(buttons){
    return `
    <button class="menu-btn" id="${buttons.tags}" onclick="get${buttons.tags}()">${buttons.tags}</button>
    `
}

function getappetizer(){
    console.log("appetizer");
}

function getbreakfast(){
    console.log("breakfast");
}



document.getElementById("recipe-container").innerHTML = `
<h1 class="title">Kreiter Recipes (${recipeFile.length} total)</h1>
<div class="menu-btns">${recipeFile.map(recipeButtons).join("")}</div>
<div>${recipeFile.map(recipeTemplate).join("")}</div>
`;

