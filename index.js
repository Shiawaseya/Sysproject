import { items } from "./src/mealObject.js";

console.log(items);
let categoryOption = document.getElementById("by-category");
let select = document.getElementById("by-main");
let list = [];
items.meals.forEach((element) => {
  list.push(element.mainIngredient);
});
list = [...new Set(list)];
list.forEach((element, index) => {
  let newOption = document.createElement("option");
  newOption.innerHTML = element;
  select.appendChild(newOption);
});
let categoryList = [];
items.meals.forEach((element) => {
  categoryList.push(element.category);
});
categoryList = [...new Set(categoryList)];
categoryList.forEach((element, index) => {
  let newOption = document.createElement("option");
  newOption.innerHTML = element;
  newOption.value = element;
  categoryOption.appendChild(newOption);
});

document
  .getElementById("filter-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    const formData = new FormData(event.target);
    const mainIngredient = formData.get("main");
    const category = formData.get("category");
    const area = formData.get("area");
    const consumer = formData.get("consumer");

    // Filter items based on form data
    const filteredMeals = items.meals.filter((meal) => {
      return (
        (mainIngredient === "all" || meal.mainIngredient == mainIngredient) &&
        (category === "all" || meal.category == category) &&
        (area === "all" || meal.place.toLowerCase() == area) &&
        (consumer === "adultKid" || meal.consumer.toLowerCase() == consumer)
      );
    });

    const itemsWrapper = document.querySelector(".items-wrapper");
    itemsWrapper.innerHTML = ""; // Clear previous items

    filteredMeals.forEach((meal) => {
      const mealDiv = document.createElement("div");
      mealDiv.classList.add("meal-item");

      mealDiv.innerHTML = `
            <img src="${meal.picSource}" alt="${meal.name}">
            <h3>${meal.name}</h3>
        `;

      // Add click event to log the matching meal object and scroll to the second page
      mealDiv.addEventListener("click", () => {
        console.log(meal); // Log the clicked meal object

        // Scroll to the second page
        document
          .querySelector(".second-page")
          .scrollIntoView({ behavior: "smooth" });

        // Populate second page with meal details
        showMealDetails(meal);
      });

      itemsWrapper.appendChild(mealDiv);
    });
  });

function showMealDetails(meal) {
  // Update image
  document.querySelector(".meal-details img").src = meal.picSource;
  document.querySelector(".meal-details img").alt = meal.name;

  // Update meal name
  document.querySelector(".meal-details h2").textContent = meal.name;

  // Update instructions
  const instructionList = document.querySelector(".instruction ol");
  instructionList.innerHTML = ""; // Clear existing instructions
  meal.instructions.forEach((inst, idx) => {
    const li = document.createElement("li");
    li.innerHTML = `<h3>${idx + 1}</h3><div><h4>${inst.title}</h4><p>${
      inst.instruction
    }</p></div>`;
    instructionList.appendChild(li);
  });

  // Populate table with cooking time, expense, and ingredients
  document.querySelector(".table-wrapper tbody").innerHTML = `
        <tr>
            <td>${meal.cookingTime}</td>
            <td>${
              meal.expense
            }</td> <!-- Update with actual expense if available -->
            ${meal.ingredients
              .map((ingredient) => `<td>${ingredient}</td>`)
              .join("")}
        </tr>
    `;

  const video = document.querySelector(".video-instruction video");
  video.src = meal.videoSource;
  video.load(); // Load the video for playback
}
let categoryOptionForAdd = document.getElementById("category");
categoryList.forEach((element, index) => {
  let newOption = document.createElement("option");
  newOption.innerHTML = element;
  newOption.value = element;
  categoryOptionForAdd.appendChild(newOption);
});
// Get modal and buttons
const modal = document.getElementById("add-meal-modal");
const openModalButton = document.getElementById("open-modal-button");
const closeButton = document.querySelector(".close-button");

// Open modal
openModalButton.addEventListener("click", () => {
  modal.style.display = "block";
});

// Close modal
closeButton.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

// Form submission
document
  .getElementById("add-meal-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const mealName = document.getElementById("meal-name").value.trim();
    const cookingTime = document.getElementById("cooking-time").value.trim();
    const expense = document.getElementById("expense").value.trim();
    const place = document.getElementById("geoOption").value.trim();
    const category = document.getElementById("category").value.trim();
    const ingredients = document
      .getElementById("ingredients")
      .value.trim()
      .split(",");
    const instruction = document.getElementById("instruction").value.trim();

    if (
      !mealName ||
      !cookingTime ||
      !expense ||
      !ingredients.length ||
      !instruction ||
      !place ||
      !category
    ) {
      alert("Please fill out all fields.");
      return;
    }

    const newMeal = {
      name: mealName,
      cookingTime: cookingTime,
      expense: expense + " PHP",
      ingredients: ingredients,
      instructions: [{ title: "Instruction", instruction: instruction }],
      category: category,
      place: place,
      picSource: "",
      videoSource: "",
    };

    items.meals.push(newMeal);
    updateMealTable(newMeal);

    modal.style.display = "none";
    event.target.reset();
    alert("Meal added successfully!");
  });

function updateMealTable(meal) {
  const tbody = document.querySelector(".table-wrapper tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
        <td>${meal.cookingTime}</td>
        <td>${meal.expense}</td>
        ${meal.ingredients
          .map((ingredient) => `<td>${ingredient}</td>`)
          .join("")}
    `;

  tbody.appendChild(row);
}
