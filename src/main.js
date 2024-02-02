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
         return /*html*/ `
        <option>${exercise}</option>
        `;
       }).join("")}
      </select>
      <input type="number" id="exercises-select-legs-sets" placeholder="Sets">
      <button data-select-id="exercises-select-legs">Add</button>
    </div>

    <!-- Rücken -->
    <div>
      <label class="exercise-label">Rücken:</label>
      <select name="exercises" id="exercises-select-back">
       ${exercises.Rücken.map((exercise) => {
         return /*html*/ `
        <option>${exercise}</option>
        `;
       }).join("")}
      </select>
      <input type="number" id="exercises-select-back-sets" placeholder="Sets">
      <button data-select-id="exercises-select-back">Add</button>
    </div>

    <!-- Brust -->
    <div>
      <label class="exercise-label">Brust:</label>
      <select name="exercises" id="exercises-select-chest">
       ${exercises.Brust.map((exercise) => {
         return /*html*/ `
        <option>${exercise}</option>
        `;
       }).join("")}
      </select>
      <input type="number" id="exercises-select-chest-sets" placeholder="Sets">
      <button data-select-id="exercises-select-chest">Add</button>
    </div>

    <!-- Schultern -->
    <div>
      <label class="exercise-label">Schultern:</label>
      <select name="exercises" id="exercises-select-shoulders">
       ${exercises.Schultern.map((exercise) => {
         return /*html*/ `
        <option>${exercise}</option>
        `;
       }).join("")}
      </select>
      <input type="number" id="exercises-select-shoulders-sets" placeholder="Sets">
      <button data-select-id="exercises-select-shoulders">Add</button>
    </div>

    <!-- Bizeps -->
    <div>
      <label class="exercise-label">Bizeps:</label>
      <select name="exercises" id="exercises-select-biceps">
       ${exercises.Bizeps.map((exercise) => {
         return /*html*/ `
        <option>${exercise}</option>
        `;
       }).join("")}
      </select>
      <input type="number" id="exercises-select-biceps-sets" placeholder="Sets">
      <button data-select-id="exercises-select-biceps">Add</button>
    </div>

    <!-- Trizeps -->
    <div>
      <label class="exercise-label">Trizeps:</label>
      <select name="exercises" id="exercises-select-triceps">
       ${exercises.Trizeps.map((exercise) => {
         return /*html*/ `
        <option>${exercise}</option>
        `;
       }).join("")}
      </select>
      <input type="number" id="exercises-select-triceps-sets" placeholder="Sets">
      <button data-select-id="exercises-select-triceps">Add</button>
    </div>
    </div>

    <!-- Created Workout -->
    <ul id="workout-display"></ul>

    <!-- Workout Stats -->
    <div id="workout-stats-display"></div>
  </div>
`;

// Adds sets exercises and sets into workout array and updates the arrays structure
document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", () => {
    const selectId = button.dataset.selectId;
    const select = document.getElementById(selectId);
    const setsInput = document.getElementById(selectId + "-sets");
    const selectedExercise = select.options[select.selectedIndex].text;
    const sets = setsInput.value;
    workout.push({
      exercise: selectedExercise,
      sets: sets,
      stats: [],
    });

    updateWorkoutDisplay();
  });
});

// Function to update workout display
function updateWorkoutDisplay() {
  const workoutDisplay = document.getElementById("workout-display");
  workoutDisplay.innerHTML = workout
    .map(
      (exerciseObj, index) => /*html*/ `
  <li>
    <h4>${exerciseObj.exercise} - ${exerciseObj.sets} sets</h4>
    ${Array(exerciseObj.sets)
      .fill()
      .map(
        (_, setIndex) => /*html*/ `
    <div>
    Set ${setIndex + 1}:
    <input id="weight-${index}-${setIndex}" type="number" placeholder="Weight">
    <input id="reps-${index}-${setIndex}" type="number" placeholder="Reps">
    <button onclick="saveStats(${index}, ${setIndex})">Save</button>
    </div>
    `
      )
      .join("")}
  </li>
  `
    )
    .join("");

  const workoutStatsDisplay = document.getElementById("workout-stats-display");
  workoutStatsDisplay.innerHTML = workout
    .map(
      (exerciseObj, index) => /*html*/ `
  <div>
    <h4>${exerciseObj.exercise}</h4>
    ${exerciseObj.stats
      .map(
        (setStats, setIndex) => /*html*/ `
    <div>
    Set ${setIndex + 1}: Weight - ${setStats.weight}, Reps - ${setStats.reps}
    </div>
    `
      )
      .join("")}
  </div>
  `
    )
    .join("");
}

// Function to save set stats
window.saveStats = function (exerciseIndex, setIndex) {
  const weightInput = document.getElementById(
    `weight-${exerciseIndex}-${setIndex}`
  );
  const repsInput = document.getElementById(
    `reps-${exerciseIndex}-${setIndex}`
  );
  const weight = weightInput.value;
  const reps = repsInput.value;
  workout[exerciseIndex].stats[setIndex] = { weight: weight, reps: reps };

  updateWorkoutDisplay();
};
