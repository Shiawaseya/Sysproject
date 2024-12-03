export const items = {
  meals: [
    {
      name: "Grilled Chicken Adobo",
      mainIngredient: "Chicken",
      ingredients: [
        "Chicken or pork",
        "Soy sauce",
        "Vinegar",
        "Garlic",
        "Bay leaves",
        "Whole peppercorns",
        "Salt",
        "Sugar",
        "Water"
      ],
      instructions: [
        { title: "Chicken or pork", instruction: "Cut into serving pieces and set aside." },
        { title: "Soy sauce", instruction: "Marinate the meat in soy sauce for at least 30 minutes." },
        { title: "Vinegar", instruction: "Add vinegar to the pot during cooking to balance flavor." },
        { title: "Garlic", instruction: "Crush and sauté until fragrant." },
        { title: "Bay leaves", instruction: "Add bay leaves for aroma while simmering." },
        { title: "Whole peppercorns", instruction: "Add for a slight peppery kick." },
        { title: "Salt", instruction: "Add as needed to taste." },
        { title: "Sugar", instruction: "Add sugar to balance flavors (optional)." },
        { title: "Water", instruction: "Add to cover meat halfway and allow to simmer until tender." }
      ],
      consumer: "Adult",
      category: "Main Dish",
      picSource: "./src/img/grilledChickenAdobo.jpg",
      videoSource: "./src/video/grilledChickenAdobo.mp4",
      cookingTime: "45 minutes",
      place: "Luzon",
      expense: 250.00
    },
    {
      name: "Halo-Halo",
      mainIngredient: "Crushed ice and milk",
      ingredients: [
        "Crushed ice",
        "Milk",
        "Sweetened fruits",
        "Leche flan",
        "Ube",
        "Ice cream"
      ],
      instructions: [
        { title: "Prepare ingredients", instruction: "Gather all ingredients including sweetened fruits and toppings." },
        { title: "Add ice", instruction: "Fill a glass with crushed ice." },
        { title: "Layer ingredients", instruction: "Add sweetened fruits, leche flan, ube, and ice cream on top." },
        { title: "Add milk", instruction: "Pour milk over the ice and enjoy!" }
      ],
      consumer: "Kid",
      category: "Dessert",
      picSource: "./src/img/halo_halo.jpg",
      videoSource: "./src/video/halo_halo.mp4",
      cookingTime: "10 minutes",
      place: "Luzon",
      expense: 100.00
    },
    {
      name: "Buko Pandan",
      mainIngredient: "Young coconut (Buko)",
      ingredients: [
        "Buko",
        "Pandan flavoring",
        "Evaporated milk",
        "Cream",
        "Sugar"
      ],
      instructions: [
        { title: "Prepare buko", instruction: "Shred young coconut meat into strips." },
        { title: "Mix ingredients", instruction: "Combine buko, evaporated milk, cream, pandan flavoring, and sugar." },
        { title: "Chill", instruction: "Refrigerate for an hour before serving." }
      ],
      consumer: "Adult",
      category: "Dessert",
      picSource: "./src/img/buko_pandan.jpg",
      videoSource: "./src/video/buko_pandan.mp4",
      cookingTime: "20 minutes",
      place: "Visayas",
      expense: 80.00
    },
    {
      name: "Puto Maya with Mango",
      mainIngredient: "Glutinous rice",
      ingredients: [
        "Glutinous rice",
        "Coconut milk",
        "Ginger",
        "Ripe mango slices"
      ],
      instructions: [
        { title: "Prepare rice", instruction: "Soak glutinous rice for 1 hour, then drain." },
        { title: "Cook with coconut milk", instruction: "Add coconut milk and ginger to the rice and cook until soft." },
        { title: "Serve with mango", instruction: "Serve warm with ripe mango slices on the side." }
      ],
      consumer: "Kid",
      category: "Snacks",
      picSource: "./src/img/puto_maya_mango.jpg",
      videoSource: "./src/video/puto_maya_mango.mp4",
      cookingTime: "30 minutes",
      place: "Mindanao",
      expense: 120.00
    },
    {
      name: "Lechon Kawali",
      mainIngredient: "Pork belly",
      ingredients: [
        "Pork belly",
        "Salt",
        "Pepper",
        "Water",
        "Oil for frying"
      ],
      instructions: [
        { title: "Boil pork", instruction: "Boil pork belly with salt and pepper until tender." },
        { title: "Cool and dry", instruction: "Let pork cool and pat dry." },
        { title: "Fry until crispy", instruction: "Deep fry pork belly until crispy and golden." }
      ],
      consumer: "Adult",
      category: "Main Dish",
      picSource: "./src/img/lechon_kawali.jpg",
      videoSource: "./src/video/lechon_kawali.mp4",
      cookingTime: "1 hour",
      place: "Luzon",
      expense: 350.00
    },
    {
      name: "Mango Shake",
      mainIngredient: "Mango",
      ingredients: [
        "Mango",
        "Ice",
        "Milk",
        "Sugar (optional)"
      ],
      instructions: [
        { title: "Prepare mango", instruction: "Peel and dice mango into small pieces." },
        { title: "Blend ingredients", instruction: "Blend mango, ice, milk, and sugar until smooth." },
        { title: "Serve", instruction: "Pour into a glass and enjoy cold." }
      ],
      consumer: "Kid",
      category: "Drinks",
      picSource: "./src/img/mango_shake.jpg",
      videoSource: "./src/video/mango_shake.mp4",
      cookingTime: "5 minutes",
      place: "Visayas",
      expense: 70.00
    },
    {
      name: "Turon (Banana Roll)",
      mainIngredient: "Banana",
      ingredients: [
        "Banana",
        "Sugar",
        "Spring roll wrapper",
        "Oil for frying"
      ],
      instructions: [
        { title: "Wrap banana", instruction: "Wrap banana slices in spring roll wrapper with sugar." },
        { title: "Fry until golden", instruction: "Fry in hot oil until golden and crispy." },
        { title: "Serve", instruction: "Serve warm as a sweet snack." }
      ],
      consumer: "Adult",
      category: "Snacks",
      picSource: "./src/img/turon.jpg",
      videoSource: "./src/video/turon.mp4",
      cookingTime: "15 minutes",
      place: "Luzon",
      expense: 50.00
    },
    {
      name: "Coconut Water",
      mainIngredient: "Coconut",
      ingredients: [
        "Fresh coconut"
      ],
      instructions: [
        { title: "Serve fresh", instruction: "Pour coconut water into a glass and enjoy." }
      ],
      consumer: "Adult",
      category: "Drinks",
      picSource: "./src/img/coconut_water.jpg",
      videoSource: "./src/video/coconut_water.mp4",
      cookingTime: "1 minute",
      place: "Visayas",
      expense: 40.00
    },
    {
      name: "Biko",
      mainIngredient: "Glutinous rice",
      ingredients: [
        "Glutinous rice",
        "Coconut milk",
        "Brown sugar"
      ],
      instructions: [
        { title: "Cook rice", instruction: "Cook glutinous rice with coconut milk until tender." },
        { title: "Add sugar", instruction: "Mix in brown sugar and continue cooking until sticky." },
        { title: "Serve", instruction: "Serve in slices once cooled." }
      ],
      consumer: "Adult",
      category: "Dessert",
      picSource: "./src/img/biko.jpg",
      videoSource: "./src/video/biko.mp4",
      cookingTime: "45 minutes",
      place: "Luzon",
      expense: 100.00
    },
    {
      name: "Choco Drink",
      mainIngredient: "Chocolate",
      ingredients: [
        "Chocolate powder",
        "Milk",
        "Sugar (optional)"
      ],
      instructions: [
        { title: "Mix ingredients", instruction: "Combine chocolate powder, milk, and sugar." },
        { title: "Serve", instruction: "Serve cold or hot." }
      ],
      consumer: "Kid",
      category: "Drinks",
      picSource: "./src/img/choco_drink.jpg",
      videoSource: "./src/video/choco_drink.mp4",
      cookingTime: "5 minutes",
      place: "Mindanao",
      expense: 60.00
    },
      // new added objects 
    {
      name: "Sinigang na Baboy",
      mainIngredient: "Pork",
      ingredients: [
        "Pork belly",
        "Tamarind",
        "Tomatoes",
        "Radish",
        "Water spinach (kangkong)",
        "Green chili"
      ],
      instructions: [
        { title: "Prepare pork", instruction: "Cut pork into pieces and wash." },
        { title: "Boil water", instruction: "Boil water in a pot and add pork." },
        { title: "Add tamarind", instruction: "Add tamarind and tomatoes, cook until tender." },
        { title: "Add vegetables", instruction: "Add radish, kangkong, and chili; cook for a few minutes." },
        { title: "Serve", instruction: "Season to taste and serve hot." }
      ],
      consumer: "Adult",
      category: "Main Dish",
      picSource: "./src/img/sinigang_na_baboy.jpg",
      videoSource: "./src/video/sinigang_na_baboy.mp4",
      cookingTime: "1 hour",
      place: "Luzon",
      expense: 300.00
    },
    {
      name: "Laing",
      mainIngredient: "Taro leaves",
      ingredients: [
        "Taro leaves",
        "Coconut milk",
        "Chili",
        "Shrimp paste",
        "Onion",
        "Garlic"
      ],
      instructions: [
        { title: "Prepare ingredients", instruction: "Wash taro leaves and chop onions." },
        { title: "Sauté", instruction: "Sauté onions and garlic in a pan." },
        { title: "Add coconut milk", instruction: "Add coconut milk and bring to a simmer." },
        { title: "Add taro leaves", instruction: "Stir in taro leaves and chili; cook until soft." },
        { title: "Serve", instruction: "Season with shrimp paste and serve." }
      ],
      consumer: "Adult",
      category: "Main Dish",
      picSource: "./src/img/laing.jpg",
      videoSource: "./src/video/laing.mp4",
      cookingTime: "30 minutes",
      place: "Luzon",
      expense: 120.00
    },
    {
      name: "Pancit Canton",
      mainIngredient: "Egg noodles",
      ingredients: [
        "Egg noodles",
        "Carrots",
        "Cabbage",
        "Green beans",
        "Soy sauce",
        "Chicken or pork"
      ],
      instructions: [
        { title: "Prepare ingredients", instruction: "Chop vegetables and meat." },
        { title: "Sauté meat", instruction: "Sauté meat until cooked." },
        { title: "Add vegetables", instruction: "Add vegetables and stir-fry." },
        { title: "Add noodles", instruction: "Add noodles and soy sauce; stir until cooked." },
        { title: "Serve", instruction: "Serve hot." }
      ],
      consumer: "Adult",
      category: "Main Dish",
      picSource: "./src/img/pancit_canton.jpg",
      videoSource: "./src/video/pancit_canton.mp4",
      cookingTime: "30 minutes",
      place: "Luzon",
      expense: 180.00
    },
    {
      name: "Leche Flan",
      mainIngredient: "Eggs",
      ingredients: [
        "Eggs",
        "Condensed milk",
        "Evaporated milk",
        "Sugar",
        "Vanilla extract"
      ],
      instructions: [
        { title: "Prepare caramel", instruction: "Melt sugar until golden and pour into mold." },
        { title: "Mix ingredients", instruction: "Beat eggs and mix with milks and vanilla." },
        { title: "Bake", instruction: "Pour mixture over caramel and steam until set." },
        { title: "Chill", instruction: "Let cool and refrigerate before serving." }
      ],
      consumer: "Kid",
      category: "Dessert",
      picSource: "./src/img/leche_flan.jpg",
      videoSource: "./src/video/leche_flan.mp4",
      cookingTime: "1 hour",
      place: "Luzon",
      expense: 150.00
    },
    {
      name: "Chicken Inasal",
      mainIngredient: "Chicken",
      ingredients: [
        "Chicken",
        "Vinegar",
        "Soy sauce",
        "Garlic",
        "Ginger",
        "Annatto oil"
      ],
      instructions: [
        { title: "Marinate chicken", instruction: "Marinate chicken in vinegar, soy sauce, garlic, and ginger." },
        { title: "Grill", instruction: "Grill chicken until cooked and charred." },
        { title: "Baste", instruction: "Baste with annatto oil while grilling." },
        { title: "Serve", instruction: "Serve with rice and dipping sauce." }
      ],
      consumer: "Adult",
      category: "Main Dish",
      picSource: "./src/img/chicken_inasal.jpg",
      videoSource: "./src/video/chicken_inasal.mp4",
      cookingTime: "1 hour",
      place: "Visayas",
      expense: 200.00
    },
    {
      name: "Kare-Kare",
      mainIngredient: "Oxtail",
      ingredients: [
        "Oxtail",
        "Peanut butter",
        "Bok choy",
        "Eggplant",
        "Banana heart",
        "Fish sauce"
      ],
      instructions: [
        { title: "Boil oxtail", instruction: "Boil oxtail until tender." },
        { title: "Add peanut butter", instruction: "Stir in peanut butter until well combined." },
        { title: "Add vegetables", instruction: "Add bok choy, eggplant, and banana heart; cook until tender." },
        { title: "Serve", instruction: "Season with fish sauce and serve with bagoong." }
      ],
      consumer: "Adult",
      category: "Main Dish",
      picSource: "./src/img/kare_kare.jpg",
      videoSource: "./src/video/kare_kare.mp4",
      cookingTime: "2 hours",
      place: "Luzon",
      expense: 400.00
    },
    {
      name: "Lumpiang Shanghai",
      mainIngredient: "Ground pork",
      ingredients: [
        "Ground pork",
        "Carrots",
        "Onions",
        "Spring roll wrappers",
        "Oil for frying"
      ],
      instructions: [
        { title: "Prepare filling", instruction: "Mix ground pork, chopped carrots, and onions." },
        { title: "Wrap", instruction: "Wrap mixture in spring roll wrappers." },
        { title: "Fry", instruction: "Fry until golden brown." },
        { title: "Serve", instruction: "Serve with sweet and sour sauce." }
      ],
      consumer: "Kid",
      category: "Snacks",
      picSource: "./src/img/lumpiang_shanghai.jpg",
      videoSource: "./src/video/lumpiang_shanghai.mp4",
      cookingTime: "30 minutes",
      place: "Luzon",
      expense: 150.00
    },
    {
      name: "Tuna Panga",
      mainIngredient: "Tuna jaw",
      ingredients: [
        "Tuna jaw",
        "Soy sauce",
        "Calamansi",
        "Garlic",
        "Pepper",
        "Oil"
      ],
      instructions: [
        { title: "Marinate tuna", instruction: "Marinate tuna jaw in soy sauce, calamansi, garlic, and pepper." },
        { title: "Grill", instruction: "Grill until cooked through." },
        { title: "Serve", instruction: "Serve hot with rice." }
      ],
      consumer: "Adult",
      category: "Main Dish",
      picSource: "./src/img/tuna_panga.jpg",
      videoSource: "./src/video/tuna_panga.mp4",
      cookingTime: "30 minutes",
      place: "Mindanao",
      expense: 300.00
    },
    {
      name: "Bicol Express",
      mainIngredient: "Pork",
      ingredients: [
        "Pork belly",
        "Coconut milk",
        "Chili",
        "Shrimp paste",
        "Garlic",
        "Onion"
      ],
      instructions: [
        { title: "Sauté", instruction: "Sauté garlic and onion in a pot." },
        { title: "Add pork", instruction: "Add pork and cook until browned." },
        { title: "Add coconut milk", instruction: "Pour in coconut milk and chili; simmer until tender." },
        { title: "Serve", instruction: "Serve hot with rice." }
      ],
      consumer: "Adult",
      category: "Main Dish",
      picSource: "./src/img/bicol_express.jpg",
      videoSource: "./src/video/bicol_express.mp4",
      cookingTime: "1 hour",
      place: "Luzon",
      expense: 250.00
    },
    {
      name: "Pinakbet",
      mainIngredient: "Vegetables",
      ingredients: [
        "Bitter melon",
        "Eggplant",
        "Okra",
        "Squash",
        "Tomatoes",
        "Shrimp paste"
      ],
      instructions: [
        { title: "Prepare vegetables", instruction: "Chop vegetables into bite-sized pieces." },
        { title: "Sauté", instruction: "Sauté tomatoes with shrimp paste in a pan." },
        { title: "Add vegetables", instruction: "Add vegetables and simmer until tender." }
      ],
      consumer: "Adult",
      category: "Main Dish",
      picSource: "./src/img/pinakbet.jpg",
      videoSource: "./src/video/pinakbet.mp4",
      cookingTime: "40 minutes",
      place: "Luzon",
      expense: 100.00
    },
    {
      name: "Piyaya",
      mainIngredient: "Flour",
      ingredients: [
        "Flour",
        "Muscovado sugar",
        "Water",
        "Sesame seeds"
      ],
      instructions: [
        { title: "Prepare dough", instruction: "Mix flour and water to form dough." },
        { title: "Fill with sugar", instruction: "Flatten dough, add muscovado sugar, and seal." },
        { title: "Cook", instruction: "Pan-fry until golden brown on both sides." }
      ],
      consumer: "Kid",
      category: "Snacks",
      picSource: "./src/img/piyaya.jpg",
      videoSource: "./src/video/piyaya.mp4",
      cookingTime: "20 minutes",
      place: "Visayas",
      expense: 50.00
    },
    {
      name: "Sinanglay na Tilapia",
      mainIngredient: "Tilapia",
      ingredients: [
        "Tilapia",
        "Coconut milk",
        "Ginger",
        "Tomato",
        "Onion",
        "Chili leaves"
      ],
      instructions: [
        { title: "Prepare tilapia", instruction: "Clean tilapia and set aside." },
        { title: "Sauté aromatics", instruction: "Sauté ginger, onion, and tomato in a pan." },
        { title: "Add coconut milk", instruction: "Pour in coconut milk and simmer with tilapia until cooked." }
      ],
      consumer: "Adult",
      category: "Main Dish",
      picSource: "./src/img/sinanglay_na_tilapia.jpg",
      videoSource: "./src/video/sinanglay_na_tilapia.mp4",
      cookingTime: "30 minutes",
      place: "Luzon",
      expense: 180.00
    },
    {
      name: "Kinilaw",
      mainIngredient: "Fish",
      ingredients: [
        "Fresh fish",
        "Vinegar",
        "Ginger",
        "Onion",
        "Chili",
        "Salt"
      ],
      instructions: [
        { title: "Prepare fish", instruction: "Cut fish into cubes and marinate in vinegar." },
        { title: "Add aromatics", instruction: "Add ginger, onion, and chili; mix well." },
        { title: "Serve", instruction: "Season with salt and serve fresh." }
      ],
      consumer: "Adult",
      category: "Appetizer",
      picSource: "./src/img/kinilaw.jpg",
      videoSource: "./src/video/kinilaw.mp4",
      cookingTime: "10 minutes",
      place: "Mindanao",
      expense: 120.00
    },
    {
      name: "Batchoy",
      mainIngredient: "Noodles",
      ingredients: [
        "Egg noodles",
        "Pork liver",
        "Pork intestines",
        "Shrimp broth",
        "Garlic",
        "Green onions"
      ],
      instructions: [
        { title: "Prepare broth", instruction: "Boil pork liver and intestines in shrimp broth." },
        { title: "Add noodles", instruction: "Cook egg noodles in the broth." },
        { title: "Garnish", instruction: "Top with garlic and green onions before serving." }
      ],
      consumer: "Adult",
      category: "Soup",
      picSource: "./src/img/batchoy.jpg",
      videoSource: "./src/video/batchoy.mp4",
      cookingTime: "45 minutes",
      place: "Visayas",
      expense: 150.00
    },
    {
      name: "Sapin-Sapin",
      mainIngredient: "Glutinous rice flour",
      ingredients: [
        "Glutinous rice flour",
        "Coconut milk",
        "Sugar",
        "Food coloring",
        "Latik"
      ],
      instructions: [
        { title: "Prepare batter", instruction: "Mix glutinous rice flour, coconut milk, and sugar." },
        { title: "Layer with colors", instruction: "Divide and color batter; layer in a pan." },
        { title: "Cook", instruction: "Steam until set, then top with latik." }
      ],
      consumer: "Kid",
      category: "Dessert",
      picSource: "./src/img/sapin_sapin.jpg",
      videoSource: "./src/video/sapin_sapin.mp4",
      cookingTime: "1 hour",
      place: "Luzon",
      expense: 80.00
    },
    {
      name: "Camote Cue",
      mainIngredient: "Sweet potato",
      ingredients: [
        "Sweet potato",
        "Brown sugar",
        "Oil for frying"
      ],
      instructions: [
        { title: "Slice sweet potato", instruction: "Peel and slice sweet potato into rounds." },
        { title: "Coat with sugar", instruction: "Dip in sugar and fry in hot oil." },
        { title: "Serve", instruction: "Serve once caramelized and crispy." }
      ],
      consumer: "Kid",
      category: "Snacks",
      picSource: "./src/img/camote_cue.jpg",
      videoSource: "./src/video/camote_cue.mp4",
      cookingTime: "15 minutes",
      place: "Visayas",
      expense: 40.00
    },
    {
      name: "Ginataang Alimasag",
      mainIngredient: "Crab",
      ingredients: [
        "Crab",
        "Coconut milk",
        "Ginger",
        "Kangkong",
        "Green chili"
      ],
      instructions: [
        { title: "Clean crab", instruction: "Clean and cut crabs in half." },
        { title: "Sauté ginger", instruction: "Sauté ginger and add coconut milk." },
        { title: "Add crab", instruction: "Add crab and simmer until cooked, then add kangkong." }
      ],
      consumer: "Adult",
      category: "Main Dish",
      picSource: "./src/img/ginataang_alimasag.jpg",
      videoSource: "./src/video/ginataang_alimasag.mp4",
      cookingTime: "30 minutes",
      place: "Luzon",
      expense: 250.00
    },
    {
      name: "Palitaw",
      mainIngredient: "Glutinous rice",
      ingredients: [
        "Glutinous rice flour",
        "Coconut",
        "Sesame seeds",
        "Sugar"
      ],
      instructions: [
        { title: "Prepare dough", instruction: "Mix glutinous rice flour with water." },
        { title: "Cook in water", instruction: "Boil and add dough pieces until they float." },
        { title: "Serve", instruction: "Coat with coconut, sesame seeds, and sugar." }
      ],
      consumer: "Kid",
      category: "Dessert",
      picSource: "./src/img/palitaw.jpg",
      videoSource: "./src/video/palitaw.mp4",
      cookingTime: "20 minutes",
      place: "Luzon",
      expense: 50.00
    },
    {
      name: "Taho",
      mainIngredient: "Silken tofu",
      ingredients: [
        "Silken tofu",
        "Brown sugar",
        "Vanilla",
        "Tapioca pearls"
      ],
      instructions: [
        { title: "Prepare syrup", instruction: "Melt brown sugar with vanilla to make syrup." },
        { title: "Cook tapioca", instruction: "Boil tapioca pearls until soft." },
        { title: "Assemble", instruction: "Layer tofu with syrup and tapioca in a cup." }
      ],
      consumer: "Kid",
      category: "Dessert",
      picSource: "./src/img/taho.jpg",
      videoSource: "./src/video/taho.mp4",
      cookingTime: "10 minutes",
      place: "Luzon",
      expense: 30.00
    },
    {
      name: "Inasal na Manok",
      mainIngredient: "Chicken",
      ingredients: [
        "Chicken thigh",
        "Vinegar",
        "Annatto oil",
        "Garlic",
        "Lemongrass"
      ],
      instructions: [
        { title: "Marinate", instruction: "Marinate chicken with vinegar, garlic, and lemongrass." },
        { title: "Grill", instruction: "Grill chicken, basting with annatto oil until charred." },
        { title: "Serve", instruction: "Serve hot with rice." }
      ],
      consumer: "Adult",
      category: "Main Dish",
      picSource: "./src/img/inasal_na_manok.jpg",
      videoSource: "./src/video/inasal_na_manok.mp4",
      cookingTime: "1 hour",
      place: "Visayas",
      expense: 150.00
    }
    
  ]
};

