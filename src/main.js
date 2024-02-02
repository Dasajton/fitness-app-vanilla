import "./style.scss";

const exercises = {
  Brust: [
    "Bankdrücken",
    "Schrägbankdrücken",
    "Negativbankdrücken",
    "Fliegende",
    "Butterfly",
    "Dips",
  ],
  Rücken: [
    "Kreuzheben",
    "Klimmzüge",
    "Latziehen",
    "Vorgebeugtes Rudern",
    "T-Bar Rudern",
    "Überzüge",
  ],
  Schultern: [
    "Schulterdrücken",
    "Seitheben",
    "Frontheben",
    "Vorgebeugtes Seitheben",
    "Nackenziehen",
  ],
  Beine: [
    "Kniebeugen",
    "Beinpresse",
    "Ausfallschritte",
    "Bulgarian Split-Squats",
    "Beinstrecker",
    "Beinbeuger",
    "Wadenheben",
  ],
  Bizeps: [
    "LH-Curls",
    "KH-Curls",
    "SZ-Curls",
    "Hammer-Curls",
    "Kabel-Curls",
    "Precher-Curls",
  ],
  Trizeps: [
    "French Press",
    "Enges Bankdrücken",
    "Dips",
    "Trizepsdrücken",
    "Kickbacks",
    "Überkopfdrücken",
  ],
};

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
    <div id="workout-display"></div>
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
      <p>${exercise}</p>
    `
      )
      .join("");
  });
});
