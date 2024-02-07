import { exercises } from "../data/exercises.js";
import { addExercise } from "../helpers/index.js";

export default function SelectExercises() {
  return /*html*/ `
    <div class="select-container">
      <label class="top-label">Wähle deine Übungen: </label>
      ${Object.keys(exercises)
        .map((exercise) => createExerciseSelectComponent(exercise))
        .join("")}
    </div>
  `;
}

function createExerciseSelectComponent(muscleGroup) {
  return /*html*/ `
    <div class="exercise-container">
      <label class="exercise-label">${muscleGroup}:</label>
      <select name="exercises" id="exercises-select-${muscleGroup.toLowerCase()}">
       ${exercises[muscleGroup]
         .map((exercise) => {
           return /*html*/ `
        <option value="${exercise}">${exercise}</option>
        `;
         })
         .join("")}
      </select>
      <input type="number" id="exercises-select-${muscleGroup.toLowerCase()}-sets" placeholder="Sets" />
      <button onclick="${(muscleGroup) =>
        addExercise(
          muscleGroup
        )}" data-select-id="exercises-select-${muscleGroup.toLowerCase()}">Add</button>
    </div>
  `;
}
