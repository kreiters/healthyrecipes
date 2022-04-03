let btnArray = [];
let newBtnArray =[];


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

function recipeTemplate(recipe){//adds the recipes to the recipe-wrapper div
    
    return document.getElementById("recipe-wrapper").innerHTML += `
    <div class="recipe-contents">
        <div class="recipe-header"><a class="back-arrow" href=""><strong><</strong></a>${recipe.tags}</div>
        <h2>${recipe.recipeName}</h2>
        <img class="recipe-image" src="${recipe.img}">
        ${ingredients(recipe.ingredients)}
        <p>${directions(recipe.directions)}</p>
    </div>
    `
}

let j = -1;
function recipeButtons(buttons){ //create a button for each tag - used object destructuring to just get the tags of the buttons object
    // console.log("j is ", j);
    btnArray.push(buttons.tags);
    newBtnArray = [...new Set(btnArray)];//remove duplicates from btnArray using Set
    let arrayLen = newBtnArray.length;
    // console.log(newBtnArray);
    j++;
    // console.log("j is ", j);
    if (arrayLen === j) {//when function has ran the number = to recipes, the exit function
        // console.log("j is ", j);
        j = (j - 1);//added to make sure the last index generates a button name
        return
    }
    if (j > arrayLen) {
        // console.log("j is greater than arrayLen", j);
        return
    }
    else {//otherwise create a button with the recipe tag name
        // console.log("the btn name added is: ", newBtnArray[j]);
        // console.log("j is ", j);
        return `
        <button class="menu-btn" id="${newBtnArray[j]}">${newBtnArray[j]}</button>`
    }
    
}

function getRecipes(recipeTag){
    document.querySelector(".links-wrapper").innerHTML = "";
    console.log("you clicked the ",recipeTag, " button");
    document.getElementById("recipe-wrapper").innerHTML = "";//clear out the previous recipes
    recipeFile.map(function(recipeItem){
        // console.log(recipeItem)
        if (recipeTag == recipeItem.tags) {
            // console.log(recipeItem)
            recipeTemplate(recipeItem);//recipeItem is the array that matches the button tag that was clicked
            
        }

    });
    
};

let i=0;
function recipeLinks(links) {//create jump links to each recipe
    i++;
    // return `
    // <a class="recipe-links" href="#" data="${links.tags}">${i}. ${links.recipeName}</a><br><br>`;//this adds a number to the recipe title
    return `
    <a class="recipe-links" href="#" data="${links.tags}">${links.recipeName}</a><br><br>`;
    
}

//for each recipe in the recipeFile, run the recipeTemplate function
document.getElementById("recipe-container").innerHTML = `
<h1 class="title">Kreiter Recipes (${recipeFile.length} total)</h1>
<div class="menu-btns">${recipeFile.map(recipeButtons).join("")}</div>
<div class="recipe-wrapper" id="recipe-wrapper"></div>
<div class="links-wrapper">${recipeFile.map(recipeLinks).join("")}</div>
`;
// <div class="recipe-wrapper">${recipeFile.map(recipeTemplate).join("")}</div>
document.getElementById("recipe-container").innerHTML += `
<a class="add-recipe" href="https://forms.office.com/r/VyJjAtXVDu">Add a recipe</a>`;

let menuBtnDiv = document.querySelector(".menu-btns");
menuBtnDiv.addEventListener("click", (event) => {//add event listener to the button div
    if (event.target.tagName == "BUTTON") {//use .matches instead of ===
        // document.querySelector(".recipe-wrapper").innerHTML = "";
        let recipeTag = event.target.id;
        getRecipes(recipeTag);
    }
});

const jumpLinks = document.querySelectorAll("a[href^='#']");


jumpLinks.forEach(link => {
    link.addEventListener('click', event => {
       event.preventDefault();
       let clickedBtnText = event.target.innerText;

       console.log(clickedBtnText);
       recipeFile.map(function(recipeItem){
        // console.log(recipeItem)
        if (clickedBtnText == recipeItem.recipeName) {
            console.log(recipeItem)
            document.querySelector(".links-wrapper").innerHTML = "";
            recipeTemplate(recipeItem);//recipeItem is the array that matches the button tag that was clicked
            
        }

    });
    //    if (link.innerHTML != "Home") {//keeps home from appearing in letter title
    //      let selection = (link.innerHTML);
    //      saveState()//save the series selection to session storage
    //      imgMatrix.forEach(image => {
    //        //console.log(image)
    //        letterButton.style.display = "block";
    //        document.getElementById("page-title").innerHTML = selection;//add the series title to the letter
   
    //        if (image[selection]) {
    //          viewInstruct.style.display = "none";
    //          //console.log(image[selection].img);
    //          let selectedImg = image[selection].img;
    //          //console.log(selectedImg);
    //          // let imgRef = selectedImg;
    //          // console.log(imgRef);
    //          viewSelection.src = selectedImg;
    //          // scriptView.classList.toggle('view');
    //          scriptView.classList.remove('showScripture');
    //     }
    })
})