let recipeFile = [
    {
        recipeID: "1",
        recipeName:"Uncle Charles Rolls",
        img: "images/rolls.jpg",
        tags:"Appetizer",
        ingredients: //changed to array and use forEach to loop over items
            ["1 8oz pack Oscar Mayer Braunschweiger",
            "1 8oz pack Philadelphia cream cheese",
            "2 Tbsp Silver Spring prepared horseradish",
            "6 2oz packets Buddig smoked, chopped, pressed turkey"
            ],
            directions: //changed to array and use forEach to loop over items
            ["1. Put braunschweiger and cream cheese in medium bowl.",
            "2. Using a fork, blend the two ingredients into a smooth paste.",
            "3. Add horseradish and mix thoroughly.",
            "4. Spread out the thin slices of meat on a paper towel.",
            "5. Place a dollop (1-1/2 tsp) of the mixture on each slice of meat and roll into logs.",
            "6. Serve. Cover plate of leftovers with Saran Wrap and refrigerate."
            ]
    },
    
    {
        recipeID: "",
        recipeName:"Omelet in Flour Tortilla",
        img: "images/omelet.jpg",
        tags:"Breakfast",
        ingredients: //changed to array and use forEach to loop over items
            ["3 eggs",
            "1/4 cup diced green pepper",
            "1/4 cup diced red pepper",
            "1/4 cup mushroom pieces",
            "2 Tbsp olive oil (or canola oil)",
            "2 flour tortillas and 4 toothpicks",
            "Seasonings: 1/2 tsp each of garlic and herb spice, cilantro, onion powder, and black pepper."
            ],
            directions: //changed to array and use forEach to loop over items
            ["1. Combine eggs, peppers and mushrooms in bowl and stir.",
            "2. Pour oil in frypan and turn burner to medium heat. When oil is hot add mixture.",
            "3. While mixture is cooking, sprinkle on seasonings.",
            "4. When one side is firm, flip in pan to brown the other side.",
            "5. When omelet is done, cut into halves, and place halves into flour tortillas and salsa (see recipe for salsa); hold tortilla closed with toothpicks.",
            "6. Guacamole makes a tasty side dish.",
            "Yield: Makes two servings."
            ]
    },

    {
        recipeID: "",
        recipeName:"Eggplant Pizza",
        img: "images/eggplant.jpg",
        tags:"Main Dish",
        ingredients: //changed to array and use forEach to loop over items
            ["1 eggplant",
            "Pizza sauce (see recipe)",
            "Grated mozzarella cheese Mushroom pieces",
            "Pepperoni (omit or use sparingly - contains high sodium)",
            "Pam spray or oil (olive or canola)"
            ],
            directions: //changed to array and use forEach to loop over items
            ["1. Slice eggplant into 1/4 to 3/8 inch slabs; after slabbing, trim off skin and place slabs in pyrex dish; add water to immerse the eggplant. Cover dish with plastic wrap and heat in microwave for 3 minutes, 20 seconds.",
            "2. Put slabs on paper towels to absorb water, then place slabs on an oiled (pizza) pan.",
            "3. Add desired toppings: 1/2 Tbsp sauce, mushroom pieces, grated cheese, and (if you dare) pepperoni. Chopped green peppers are also topping options.",
            "4. Set oven to broil. Slide pan into oven and watch closely. Remove when cheese is melted. This may only take 5 minutes. Makes about enough for two."
            ]
    },

    {
        recipeID: "",
        recipeName:"Chili", //put the name of the recipe here, between the quotes
        img: "images/chili.jpg",
        tags:"Main Dish",
        ingredients: //put each of the ingredients between quotes, each ingredient entry is seperated by a comma within the square brackets []. No comma needed after the last entry
            ["1/2 to 3/4 pounds ground beef or ground turkey",
            "1 cup no-salt pinto beans (or kidney beans) - Buy dry beans, soak overnight, and cook until tender. (or use one 15.5 oz can of no salt added red kidney beans)",
            "1 14.5-oz can no-salt diced tomatoes",
            "1 8-oz can no salt tomato sauce plus 1 can water",
            "1/2 green bell pepper, diced",
            "2 Tbsp chopped onion",
            "1/2 jalapeño pepper, diced (remove seeds)",
            "2 Tbsp olive (or canola) oil",
            "1 Tbsp chili powder",
            "1/2 Tbsp minced garlic (or 1/2 tsp garlic powder)",
            "1/2 tsp crushed red peppers",
            "4 bay leaves" //the last ingredient entry does not need a comma
            ],
            directions: //enter each of the directions between quotes, line by line. Each line is seperated by a comma within the square brackets []. No comma needed after the last entry
            ["1. Pour oil in large frypan; sauté the onions, green peppers, jalapeño, and garlic for about 5 minutes on medium heat.",
            "2. Add the ground beef (or turkey), crumble into small nuggets, and brown.",
            "3. Add chili powder, bay leaves, kidney beans, diced tomatoes, tomato sauce, and water. Black beans or pinto beans (no salt) are also good.",
            "4. Simmer on low heat, stirring occasionally. Let simmer for about 20-30 minutes before serving.",
            "5. Guacamole is a nice side dish.",
            "Yield: Makes four to six bowls."
            ]
    },
    
    {
        recipeID: "",
        recipeName:"Salsa",
        img: "images/salsa.jpg",
        tags:"Condiments",
        ingredients: //changed to array and use forEach to loop over items
            ["1 14.5-oz can no salt diced tomatoes",
            "1 Tbsp lime juice",
            "1/4 cup diced onions",
            "1/2 jalapeño, diced (remove seeds)",
            "1/2 Tbsp chopped cilantro leaves",
            "1/2 Tbsp minced garlic (or 1/2 tsp garlic powder)"
            ],
            directions: //changed to array and use forEach to loop over items
            ["1. Mix ingredients in bowl.",
            "2. Use for dip or with tacos or omelets.",
            "3. Save leftover sauce in jar and refrigerate."
            ]
    },
    
    {
        recipeID: "2",
        recipeName:"Waffles",
        img: "images/waffles.jpg",
        tags:"Breakfast",
        ingredients:
            ["3/4 cup all purpose flour",
            "1 Tbsp low salt baking powder",
            "4 packets of Truvia or sweetener",
            "3/4 cup Rice Dream (or skim milk)",
            "1 egg",
            "1/2 tsp oil (olive or canola)",
            "1/2 tsp vanilla",
            "Pam butter spray"
            ],
        directions:
            ["1. Combine flour, baking powder, and Truvia in medium sized bowl and stir with fork.",
            "2. Add milk, egg, oil, and vanilla. Whisk until blended.",
            "3. Spray waffle iron with Pam after warming it.",
            "4. Pour 2/3 cup of mixture into waffle iron. close lid. and cook for 5 minutes.",
            "5. Butter waffles with no salt butter; sweeten with sugarless syrup. and enjoy.",
            "Yield: Recipe makes two 8-inch diameter waffles.",
            "Serving Suggestion: Sausage or low sodium bacon makes a tasty side dish."
            ]
    }
];



// Blank Recipe Template:

// {
//     recipeID: "",
//     recipeName:"", //put the name of the recipe here, between the quotes
//     img: "",
//     tags:"",
//     ingredients: 
//         ["",   //put each of the ingredients between quotes, each ingredient entry is seperated by a comma within the square brackets []. No comma needed after the last entry
//         "",
//         "",
//         ""     //the last ingredient entry does not need a comma, just make sure you paste inside the quotes
//         ],
//         directions: 
//         ["1. ",   //enter each of the directions between quotes, line by line. Each line is seperated by a comma within the square brackets []. No comma needed after the last entry
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. ",
//          "Yield: "  //the last entry does not need a comma, just make sure you paste inside the quotes
//         ]
// },





























// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

// {
//     recipeID: "",
//     recipeName:"",
//     img: "",
//     tags:"",
//     ingredients: //changed to array and use forEach to loop over items
//         ["",
//         "",
//         "",
//         ""
//         ],
//         directions: //changed to array and use forEach to loop over items
//         ["1. ",
//         "2. ",
//         "3. ",
//         "4. ",
//         "5. ",
//         "6. "
//         ]
// },

//  6. TACO SALAD IN CROWN SHELLS
//  Ingredients:
// 2 crown taco shells
// 1/2 pound ground beef or turkey
// 1 cup no salt pinto beans - Buy dry beans, soak overnight, and cook until tender.
// 2 Tbsp oil (olive or canola)
// 1/2 tsp cumin
// 1/2 tsp onion powder
// 1/2 tsp garlic powder
// 1/2 tsp chili powder
// 1 cup shredded lettuce
// 1 cup diced tomatoes
// 1/2 cup grated cheese (mozzarella) 1/2 cup salsa (see recipe)
// Sour cream, one or two dollops
// Directions
// 1. Pour oil in medium frypan; brown ground beef or turkey on medium heat. Crumble meat.
// 2. Add seasonings and cook 10 minutes.
// 3. Heat pinto beans in small sauce pan. Pour off excess water.
// 4. Heat crown taco shell in toaster oven for less than 2 minutes.
// Watch closely to avoid a fire.
// 5. Layer the following in the crown shell: pinto beans, meat, grated
// cheese (1/4 cup), lettuce, tomatoes, salsa, and a dollop of sour
// cream (if desired)
// 6. Guacamole makes a tasty side dish.
    
//  7. ITALIAN SAUCE
//  Ingredients:
// 1 8-oz can no salt tomato sauce 1 tsp oregano leves
// 1 tsp Italian seasoning
// 1/2 tsp garlic powder
// 1/2 tsp onion powder
// 1/2 tsp crushed red pepper
// Double the ingredients for spaghetti.
// Directions
// 1. Mix the ingredients in small sauce pan.
// 2. Bring mixture to boil, stirring constantly. Turn heat to low
// and simmer for 5-10 minutes.
// 3. Spread sauce on main dish. May be used for egg plant
// pizza or spaghetti.
    
//  8. MEATBALLS
//  Ingredients:
// 1/2 pound ground beef
// 1/2 pound (ground) sausage
// 1 egg
// 1/4 green bell pepper, diced
// 1 Tbsp diced onion
// 2 Tbsp rolled oats (sprinkle more if needed)
// 2 Tbsp Rice Dream (or skim milk)
// 1/2 Tbsp minced garlic or 1 tsp garlic powder
// 1 Tbsp cilantro
// 1 tsp Dash brand “Onion with Herb” spice
// 2 Tbsp oil (olive or canola) for browning meatballs
// Directions
// 1. Mix ingredients (not oil) in bowl. Form balls.
// 2. Pour oil into medium sized frypan.
// 3. Brown meatballs on medium heat, turning to brown evenly. 4. Cover and cook for 15 - 20 minutes on low heat.
// 5. Cook spaghetti (no sodium) until tender. Drain.
// 6. Place spaghetti and meatballs on plate.
// 7. Cover with Italian sauce.
    
//  9. HAWAIAN STEW
//   Ingredients:
// 1 cup shredded cabbage
// 1/2 green bell pepper, diced
// 1 can (small) pineapple slices, diced into eighths
// 2 Tbsp olive oil
// 16 to 20 pieces of cubed meat (may be pork loin, chicken, or shrimp. Caution - shrimp contains sodium.
// Directions
// 1. Pour olive oil in large frypan; set on medium heat.
// 2. Brown meat chunks in pan, turning to brown evenly.
// 3. Add cabbage, green peppers, and juice from pineapple can.
// 4. Chop pineapple slices into cubes (eighths) and add to mixture. 5. Cover fry pan with glass lid and cook on low heat for 10 minutes. 6. Serve with basmati rice. (see instructions on rice bag.)
   
//  10. JOHNNY MARZETTI
//  Ingredients:
// 1/2 pound ground beef
// 2 Tbsp oil (olive or canola)
// 1/4 cup onion, diced
// 1/4 green bell pepper, diced
// 1 8-oz can no salt tomato sauce 3/4 cup elbow macaroni
// 1 tsp minced garlic
// 1/4 cup Parmesan cheese
// Directions
// 1. Pour oil in medium sized frypan; set burner to medium heat; add onions, garlic, and green peppers; sauté for 5 minutes.
// 2. Add meat; crumble into small pieces and cook until browned.
// 3. Pour tomato sauce over mixture and stir. Continue cooking.
// 4. In separate sauce pan, boil 3 cups water. Add macaroni and cook
// until tender.
// 5. Drain water from macaroni; add macaroni to the frypan. Stir.
// 6. Simmer for 20 minutes.
// 7. Sprinkle Parmesan cheese on top and serve.
    
//  11. SLOPPY JOE ON PITA BREAD
//   Ingredients:
// 1/2 pound ground beef
// 2 Tbsp oil (olive or canola)
// 2 Tbsp onion, diced
// 1 stalk celery, diced
// 1 8-oz can of no salt tomato sauce 1 Tbsp cider vinegar
// 2 packets Trivia sweetener
// Pita bread or flour tortillas
// Directions
// 1. Pour oil into medium sized frypan (set burner on medium heat). 2. Add onion and celery; sauté for 5 minutes.
// 3. Add tomato sauce, Truvia, and vinegar. Stir well.
// 4. Simmer on low heat for 20 minutes.
// 5. Spoon mixture onto open pita bread or flour tortilla and serve. 6. Guacamole makes a tasty side dish.
   
//  12. COLD PLATE LUNCH
//   Ingredients:
// Hard boiled eggs
// Slices (or sticks) of Swiss or mozzarella cheese
// Cottage cheese (with Trivia if desired)) Celery
// Radishes
// Strawberries or other berries (with Trivia) Graham crackers (contains some sodium)
//    Directions
// 1. Arrange items on plate and serve.
  
//  13. AVACADO AND EGG SALAD
//   Ingredients:
// 1 avocado, sliced
// 2 hard boiled eggs, sliced 1 cup chopped lettuce
// 1 tomato, quartered
// 1/3 of a cucumber, sliced 1/2 cup mushroom bits Salsa (see recipe) Cheese sticks
//   Directions
// 1. Arrange ingredients on plate, garnish with salsa, and serve.
  
//  14. STUFFED BELL PEPPERS
//  Ingredients:
// 1/2 pound ground beef
// 2 Tbsp oil (olive or canola oil)
// 2 or 3 green bell peppers - remove cores and seeds and cut in half
// 1 8-oz can (no salt) tomato sauce 1/2 cup basmati rice
// 1 small tomato, diced
// 1/4 cup parmesan cheese
// 1 tsp cumin powder
// 1 tsp Dash onion and herb
// 2 tsp minced garlic
// 1 tsp oregano
// 1-1/2 tsp onion powder
// Directions
// 1. Brown meat in oil in large frypan; add spices, stir.
// 2. Add tomato sauce, two cans water, rice, and diced tomato; stir.
// 3. Cook on medium heat, stirring constantly - 12 to 15 min.
// 4. Cut peppers in half, removing cores and seeds; place halves in
// pyrex dish; add 1/2 inch of water to dish; cover with plastic wrap.
// 5. Microwave peppers for 3 minutes, 20 seconds.
// 6. Drain water from dish and peppers; spoon meat/rice sauce into
// peppers.
// 7. Sprinkle Parmesan cheese liberally on peppers. Cover with plastic
// wrap and microwave for 1 minute, 30 seconds.
    
//  15. LASAGNE
//  Ingredients:
// Lasagna noodles - no sodium - use 8 or 9 strips 3/4 pounds ground beef
// 1 14.5-oz can (no salt) diced tomatoes
// 1 8-oz can (no salt) tomato sauce
// 1/4 cup olive oil
// 3/4 pound cottage cheese 8 slices Swiss cheese
// 1/2 cup diced onion
// 1-1/2 tsp oregano
// 1/4 tsp black pepper
// 1/2 Tbsp minced garlic Pepperoni slices, 6 to 8
// Directions
// 1. Cook lasagne noodles in large saucepan of boiling water. When tender, rinse noodles in cold water. Set aside.
// 2. Pour olive oil into large frypan; set to medium heat; when oil is hot, add onion and garlic; sauté for 8 min.
// 3. Add ground beef and fry until brown and crumbly.
// 4. Add diced tomatoes, tomato sauce, and spices; stir and cook until
// thickened.
// 5. Crisscross 1/2 of the noodles over the bottom of the dish; add one-
// half the meat sauce; lay four Swiss cheese slices atop the meat sauce, spread half the cottage cheese over the cheese slices; add pepperoni.
// 6. Repeat layering with remaining ingredients.
// 7. Cover dish with aluminum foil and bake in preheated, 350 deg oven
// for 25-30 minutes.
    
//  16. POTATO SALAD
//   Ingredients:
// 1 large Idaho potato, baked, then diced 3 hard boiled eggs, diced
// 2 stalks celery, diced
// 1 Tbsp onion powder
// Mayonnaise (accept the sodium) - 2 dollops
// Directions
// 1. Wrap a large Idaho potato in plastic wrap and bake for 7 to 8 minutes in microwave. (Test to see when it’s soft.)
// 2. Remove peel and dice on cutting board. Scrape pieces into large bowl; add onion powder and stir.
// 3. Dice 3 hard boiled eggs and add to bowl.
// 4. Dice 2 stalks celery and add to bowl. Mix thoroughly.
// 5. Add two dollops of light mayonnaise and stir until mixture is
// moist.
// 6. Serve on a bed of iceberg lettuce, along with sliced tomatoes.
   
//  17. WALDORF SALAD
//   Ingredients:
// 1 cup red seedless grapes, halved 1 stalk chopped celery
// 1/4 cup chopped walnuts
// 1 cup mini marshmallows
// 2 Tbsp mayo (or plain vanilla yogurt)
//    Directions
// 1. In large bowl, add first four ingredients and stir.
// 2. Add the mayo (or yogurt); stir, making sure all the ingredients are
// moistened. Add more mayo (or yogurt) if needed. 3. Serve.
  
//  18. DEVIL’D EGGS
//   Ingredients:
// 5 hard boiled eggs
// 2-1/2 tsp apple cider vinegar
// 3 Truvia sweetener packets (2-1/2 tsp sugar) 2-1/2 Tbsp mayonnaise
// Paprika
// Directions
// 1. Cut boiled eggs in half.
// 2. Place yolks in medium sized bowl.
// 3. Place white halves onto an egg holder plate.
// 4. With a fork, crumble the yolks.
// 5. Add Truvia and stir thoroughly.
// 6. Add vinegar and stir thoroughly.
// 7. Add mayo (or plain yogurt) and mix to a paste.
// 8. With a spoon, scoop a dollop of the yolk mixture into the egg
// white halves.
// 9. Sprinkle paprika on top of the eggs and serve.
   
//  19. CITY CHICKEN
//  Ingredients:
// 1/2 pound beef cubes 1/2 pound pork cubes 1/2 pound veal cubes Wooden skewers
// 1 cup all purpose flour Oil (olive or canola) Paprika
// Garlic powder
// Dash Onion and Herb
// Directions
// 1. Push meat cubes onto wooden skewers, alternating beef, pork, and veal. Put 6 to 8 cubes on each skewer.
// 2. Put the flour on a plate and roll the skewers of meat in the flour until they are generously coated.
// 3. In large frypan, pour 3 to 4 Tbsp oil; turn burner to medium heat.
// 4. Brown the meat on all sides. Sprinkle spices over the meat.
// 5. Spread aluminum foil in bottom of pyrex baking dish. Lay the
// skewers of meat on the foil.
// 6. Cover the dish with foil and place in oven, preheated to 350 deg.
// 7. Bake for 40 minutes and serve.
// 8. Suggested side dishes: basmati rice and green beans.
     
//  20. VEGETABLE SOUP
//  Ingredients:
// 2 pound beef roast (or beef cubes) 2 cups shredded cabbage
// 1 cup diced celery (2 stalks)
// 1/4 cup diced onion
// 1 cup sliced mini carrots
// 1 cup diced (raw) potatoes
// 32-oz of 50% less salt beef broth 1-1/2 Tbsp minced garlic
// 1 14.5-oz can no salt diced tomatoes 1 8-oz can no salt tomato sauce
// Directions
// 1. Place beef in large saucepan, pour beef broth into pan.
// 2. Set burner on medium high and cook until beef is tender (falls
// apart). Add water as needed to keep meat from boiling dry.
// 3. Stir in other ingredients; turn burner to medium heat and cook until
// vegetables are tender.
// 4. Turn burner to low heat and let soup simmer until broth thickens.
// 5. Suggested sides: warm flour tortillas, low fat yogurt.
    
//  21. TURKEY NOODLE CASSEROLE
//  Ingredients:
// 2 cups shredded turkey breast (or chicken) 2 cups no salt egg noodles
// 1/4 cup peas
// 1 10.5-oz can of 50% less sodium cream of chicken (or mushroom) condensed soup
// 1 cup crumbled Xochitl no salt white corn chips
// Directions
// 1. Fill medium saucepan 3/4 full of water. Bring to a boil.
// 2. Add noodles; stir; cook until noodles are tender.
// 3. In separate small saucepan, pour condensed soup plus 1/2 can of
// water; stir; bring to a boil. Set aside.
// 4. Heat (frozen) peas and 1 cup water in microwave-proof dish; drain
// off water.
// 5. Drain water from noodles, return them to saucepan and mix in
// peas.
// 6. Spread shredded turkey (or chicken) evenly over the bottom of a
// 9X9X2 pyrex dish.
// 7. Pour mixture of noodles and peas over the meat, then pour the
// diluted soup over the noodles, peas, and meat.
// 8. Spread the crumbled chips evenly on top.
// 9. Bake in 350 deg oven for 20 to 25 minutes or until chips are
// browned; serve.
     
//  22. CHICKEN NOODLE SOUP
//  Ingredients:
// 2 to 4 chicken tenders (or a chicken breast) 4 packets “Herb Ox” sodium free granulated chicken bouillon
// 1 cup sliced mini carrots
// 1/4 cup diced onions
// 1 stalk thinly sliced celery
// 1 cup no salt noodles
// 1 tsp minced garlic
// 2 tsp parsley
// Directions
// 1. In large saucepan, put 4 cups water and the chicken; boil until chicken is tender and falling apart.
// 2. Save the water. Scoop out chicken and, on a cutting board, cut chicken unto bite sized chunks.
// 3. Put chicken chunks back into saucepan and add the 4 packets of granulated bouillon; stir; bring to boil, then add the noodles.
// 4. Cook until noodles are tender. Add more water if necessary.
// 5. Add carrots, onion, celery, garlic, and parsley.
// 6. Continue boiling until broth thickens. Serve in bowls.
// 7. Suggested side dishes: salt-free corn chips, devil’d eggs or
// guacamole.
    
//  23. GUACAMOLE SALAD
//  Ingredients:
// 2 medium sized avocados
// 1/4 cup diced onions
// 1/2 jalapeño pepper, diced (remove seeds) 1 small tomato, diced
// 1 tsp minced garlic
// 1 Tbsp lime juice (fresh lime preferred)
//    Directions
// 1. Cut avocados into quarters; remove seed and skin. Place in medium sized bowl.
// 2. Mash avocados with a fork to form a paste.
// 3. Add other ingredients and blend together.
// 4. Serve as a side dish.
  
//  24. ENCHILADA CASSEROLE
//  Ingredients:
// 1 pound ground beef (or turkey)
// 2 Tbsp oil (olive or canola)
// 1 14.5-oz can no-salt diced tomatoes
// 1 8-oz can no salt tomato sauce
// 1 4-oz can chopped chiles, (drained)
// 1/2 tsp cider vinegar
// 2 packets Truvia sweetener
// 1/4 tsp oregano
// 1 tsp minced garlic (or 1/2 tsp garlic powder) 1 cup diced onions
// 1 cup shredded mozzarella cheese
// 12 low salt corn taco shells
// Directions
// 1. Pour oil into large frypan; brown meat evenly on medium heat.
// 2. Add diced tomatoes, tomato sauce, chiles, vinegar, sweetener,
// oregano, and garlic; stir thoroughly; turn heat to medium low and
// simmer until mixture thickens (30 minutes).
// 3. In 9x9x2 pyrex baking dish, alternate layers of taco shells (broken
// in half), meat sauce, cheese, and onions.
// 4. Bake in preheated oven (350 deg) for 30 to 40 mintes.
// 5. Suggested side dishes: Salt free corn chips and guacamole salad.
    
//  25. CHICKEN SALAD
//  Ingredients:
// 2 to 3 chicken tenders or thighs or breast, cooked and cubed
// 1 small apple, diced
// 1 stalk celery, diced
// 1/4 cup chopped walnuts
// 1/2 tsp nutmeg
// 1 tsp parsley
// 2 dollops mayonnaise (or plain low fat yogurt)
//    Directions
// 1. Put ingredients into medium sized bowl.
// 2. Add mayonnaise and stir until mixture is moistened.
// 3. Serve on bed of iceberg lettuce or on warm flour tortillas.
  
//  26. CHICKEN SPAGHETTI
//  Ingredients:
// 1 whole chicken (or a turkey breast) 1 package no salt spaghetti noodles 1/2 cup diced onion
// 1-1/2 cup chopped celery
// 1 green bell pepper, diced
// 2 small cans sliced mushrooms, drained
// 2 Tbsp minced garlic
// 1 medium jar of pimentos, drained
// 1 medium can of sliced black olives (caution - high in sodium. May omit olives if desired) 3/4 cup Parmesan cheese
// 2 sticks (1/2 pound) no salt butter
// 32-oz Chicken broth (low sodium)
// Directions
// 1. Fill one large saucepan half full of water. Add chicken; boil until tender.
// 2. With tongs or fork, remove chicken from pan and place on cutting
// board. Shred and debone the chicken. (Save the water.)
// 3. Add chicken broth to hot water; turn burner to medium high: add
// spaghetti and boil until tender.
// 4. Melt 2 sticks of no salt butter in large frypan (medium heat): add onion,
// celery, green bell pepper, mushrooms, garlic, pimentos, and olives. Stir
// and sauté for 10 minutes.
// 5. Add the shredded chicken to frypan and stir; cover and let simmer for
// 15 minutes.
// 6. You’ll need two 9X9X2 pyrex dishes. Drain spaghetti in sieve. Divide
// spaghetti in half and place in pyrex dishes. Add half the cooked meat
// mixture to each dish. With fork, mix the contents.
// 7. Sprinkle with Parmesan cheese; bake in 375 deg oven for 20 min.
    
//  27. CRANBERRY JELLO SALAD
//  Ingredients:
// 1 6-oz package of sugar-free raspberry Jello 2 cups boiling water
// 1 can crushed pineapple
// 1 package fresh cranberries (cook)
// 1/2 cup chopped walnuts 2 stalks celery - diced
// Directions
// 1. Cook cranberries per directions on package to make a sauce. Sweeter: use 24 packets Truvia (equals 1 cup sugar). Shortcut: use one 14 oz can whole cranberry sauce and accept the sugar.
// 2. Boil 2 cups water.
// 3. Pour Jello mix into 9X9X2” pyrex baking dish. Add boiling water
// and stir until Jello is dissolved.
// 4. Add pineapple (with juice), celery, walnuts and 1 cup cooked
// cranberry sauce (or 1 can of whole cranberry sauce); stir
// thoroughly.
// 5. Cover with foil or plastic wrap and chill in refrigerator overnight.
// 6. Cut into squares and serve.
    
//  28. BEV’S MEAT LOAF
//  Ingredients:
// 1 pound ground beef
// 1/2 cup oatmeal
// 1/2 cup milk (or Rice Dream) 1 egg
// 1 slice onion - dice
// 1 tsp minced garlic
// Directions
// 1. Place above ingredients in bowl; mix and knead with fingers. 2. Separate into two loaves; place them in pyrex baking dish. 3. Spread 1/4 cup of Heinz no sodium ketchup over each loaf. 4. Cover dish with plastic wrap and place in microwave.
// 5. Cook for 10 minutes in microwave oven.
// Serve with rice or baked potato and a hot vegetable (cauliflower, green beans, peas, limas, etc.).
    
//  29. MEAT SAUCE
//  Ingredients:
// 3/4 pound ground beef
// 2 14.5 oz cans petite, diced no salt tomatoes 1 8 oz can no salt tomato sauce
// 1/2 can (drained) mushrooms (2 oz)
// 1/4 stick no salt butter
// 1/4 green bell pepper, diced
// 1/4 red bell pepper, diced
// 3 or 4 green onions, chopped
// 1/2 medium sized jalapeño pepper, diced 1/2 tsp parsley
// 1/2 tsp basil
// 1 tsp oregano
// 1 tsp Italian seasoning
// 1 tsp crushed red peppers
// 2 tsp minced garlic
// Directions
// 1. Heat butter in large fry pan; add mushrooms, onions, green, red, and jalapeño peppers; sauté between 3 to 5 minutes.
// 2. Add beef to fry pan, crumble into small pieces, and brown.
// 3. In separate large cooking pot, combine diced tomatoes, tomato
// sauce, minced garlic, and the rest of the spices. Bring to boil and stir.
// 4. Pour the contents of the fry pan into the sauce mixture and cook for
// 20 to 30 minutes (the longer the better).
// 5. Serve over your favorite pasta - spaghetti, elbow macaroni, etc.
    
//  30. BBQ SAUCE
//  Ingredients:
// 1/4 cup Splenda brown sugar 1/2 cup no salt ketchup
// 1/6 cup red wine vinegar
// 1/6 cup water
// 1/2 TBS Worcester sauce 1 TBS Yellow mustard 2/3 tsp paprika
// 1/2 tsp black pepper
//   Directions
// 1. Combine ingredients in medium size bowl. Whisk until thoroughly blended. (You may use a blender.)
  
//  28. BREAKFAST IDEAS
//  Grains:
// Cereals, such as shredded wheat biscuits or hot oatmeal (both of which have no sodium) - you may want to add Truvia brown sugar, walnuts, and/or raisins to the hot oatmeal. Avoid most boxed cereals, which are high in sodium. English Muffins (have less sodium than bread) - toast and use salt free butter Flour tortillas - can be used to make scrambled egg burritos (add salsa)
// Rice cakes (toast, add no salt butter and sprinkle with Truvia and cinnamon Waffles (see recipe) or pancakes (use waffle recipe)
// Dairy:
// Rice Dream (has less sodium than milk)
// Cheese - 1 slice of Swiss has only 40 mg sodium
// Eggs, any style - hard boiled eggs are quick (boil a day or so in advance)
// Meats:
// Sausage (look for low sodium)
// Bacon (look for low sodium)
// Warning - Most meat is high in sodium, use sparingly if at all.
// Fruits and Juices:
// Fresh berries such as strawberries, blueberries, raspberries, or blackberries Grapefruit sections
// Light Juices (read label and look for sugar-free and low sodium)
// Other:
// Sugar free jelly or jam Sugar free jello
      
//  29. DESSERT IDEAS
//  Fruits:
// Melons - watermelon, honey dew, cantaloupe
// Berries - strawberries, blueberries, raspberries, blackberries Frozen - peaches, pineapples (I cheat and add real whipped cream Various - apples, grapes, cherries, oranges, pears, asian pears, peaches (Warning - some fruits are high in nature; sugars.)
// Dairy:
// Low fat yogurt (check labels) Sugar-free ice cream (check labels)
// Bakery:
// Cookies (sugar-free) - wafer cookies are tasty
   
//    Directions
// Lamb Stew Ingredients:
// Lamb loin cut into cubes
// 1-1/2 Tbsp canola oil
// 1 cup shredded cabbage
// 1/2 cup coarsely chopped carrots 1-2 parsnips, chopped
// 3/4 cup vegetable broth 1-2 Tbsp corn
// starch (as needed)
// 1 Tbsp parsley
// 1 tsp onion powder 1 tsp garlic powder 1 tsp lemon pepper
// 1. Brown meat in canola oil using large frypan. 2. Add cabbage, carrots, and parsnips.
// 3. Add spices and stir.
// 4. Add vegetable broth and cook 20 minutes. 5. In separate cup, dissolve cornstarch with
// additional vegetable broth. Stir.
// 6. Add cornstarch to stew and stir continually
// until the stew thickens.
// 7. Spoon the stew onto plates and sprinkle
// with parsley.

//    Ingredients:
// Uncle Charles Rolls (High in Sodium)
// 1 8-oz pack Oscar Mayer Braunschweiger (use 1/2, i.e., 4 oz)
// 1 8 oz pack Philadelphia cream cheese (use 1/2, i.e., 4 oz)
// 2 Tbsp Silver Spring prepared horseradish 3 2-oz packets Buddig smoked, chopped, pressed ham or turkey
// Directions
// 1. Put braunschweiger and cream cheese in medium bowl.
// 2. Using a fork, blend the two ingredients into a smooth paste.
// 3. Add horseradish and mix thoroughly.
// 4. Spread out the thin slices of meat on a paper towel.
// 5. Place a dollop (1-1/2 tsp) of the mixture on each slice of meat and roll into logs.
// 6. Serve. Cover plate of leftovers with Saran Wrap and refrigerate.

//  40. CITIZENSHIP IN HEAVEN
//  Ingredients:
// 1 Holy Bible
// 2 ears that hear
// 2 eyes that see
// 1 heaping measure of repentance 1 heaping measure of humility
// 1 willing heart
// 1 grain of faith
// Directions
// BOOK OF LIFE
//    1. Read the Holy Bible, especially Matthew, Mark, Luke, and John.
// 2. Listen with your ears to that still small voice of God calling you.
// 3. Watch with your eyes the wise pastors who preach the gospel.
// 4. Repent of the sin in your life. The worst sin is rejecting God’s Son.
// 5. Bow with humility before Almighty God and ask His forgiveness.
// 6. Invite Jesus to come into your willing heart to be your Lord and
// Savior.
// 7. Have faith that Jesus will forgive you of your sins and receive you
// into His kingdom.
 




