let recipeFile = [
    {
        recipeID: "1",
        recipeName:"Uncle Charles Rolls",
        img: "rolls.jpg",
        tags:"appetizer",
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
        recipeID: "2",
        recipeName:"Waffles",
        img: "waffles.jpg",
        tags:"breakfast",
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



//Blank Recipe Template:

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