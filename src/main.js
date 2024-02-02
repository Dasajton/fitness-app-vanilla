import { exercises } from "./data/exercises";
import "./style.scss";

// Workout array that contains exercises
const workout = [];

document.querySelector("#app").innerHTML = /*html*/ `
  <div>
    <h1>Fitness-App</h1>

    <div class="select-container">
    <label class="top-label" for="exercises-select">Wähle eine Übung:</label>
    <!-- Beine -->
    <div>
      <label class="exercise-label">Beine:</label>
      <select name="exercises" id="exercises-select-legs">
       ${exercises.Beine.map((exercise) => {
         return `
        <option>${exercise}</option>
        `;
       }).join("")}
      </select>
      <button data-select-id="exercises-select-legs">Add</button>
    </div>

    <!-- Rücken -->
    <div>
      <label class="exercise-label">Rücken:</label>
      <select name="exercises" id="exercises-select-back">
       ${exercises.Rücken.map((exercise) => {
         return `
        <option>${exercise}</option>
        `;
       }).join("")}
      </select>
      <button data-select-id="exercises-select-back">Add</button>
    </div>

    <!-- Brust -->
    <div>
      <label class="exercise-label">Brust:</label>
      <select name="exercises" id="exercises-select-chest">
       ${exercises.Brust.map((exercise) => {
         return `
        <option>${exercise}</option>
        `;
       }).join("")}
      </select>
      <button data-select-id="exercises-select-chest">Add</button>
    </div>

    <!-- Schultern -->
    <div>
      <label class="exercise-label">Schultern:</label>
      <select name="exercises" id="exercises-select-shoulders">
       ${exercises.Schultern.map((exercise) => {
         return `
        <option>${exercise}</option>
        `;
       }).join("")}
      </select>
      <button data-select-id="exercises-select-shoulders">Add</button>
    </div>

    <!-- Bizeps -->
    <div>
      <label class="exercise-label">Bizeps:</label>
      <select name="exercises" id="exercises-select-biceps">
       ${exercises.Bizeps.map((exercise) => {
         return `
        <option>${exercise}</option>
        `;
       }).join("")}
      </select>
      <button data-select-id="exercises-select-biceps">Add</button>
    </div>

    <!-- Trizeps -->
    <div>
      <label class="exercise-label">Trizeps:</label>
      <select name="exercises" id="exercises-select-triceps">
       ${exercises.Trizeps.map((exercise) => {
         return `
        <option>${exercise}</option>
        `;
       }).join("")}
      </select>
      <button data-select-id="exercises-select-triceps">Add</button>
    </div>
    </div>

    <!-- Created Workout -->
    <ul id="workout-display"></ul>
  </div>
`;

// Functionality to add exercises into workout array and display the workout in browser
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const selectId = button.dataset.selectId;
    const select = document.getElementById(selectId);
    const selectedExercise = select.options[select.selectedIndex].text;
    workout.push(selectedExercise);

    const workoutDisplay = document.getElementById("workout-display");
    workoutDisplay.innerHTML = workout
      .map(
        (exercise) => `
      <li>${exercise}</li>
    `
      )
      .join("");
  });
});
