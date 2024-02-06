import { exercises } from "../data/exercises.js";

function createExerciseSelectComponent(muscleGroup) {
  return /*html*/ `
      <div>
        <label class="exercise-label">${muscleGroup}:</label>
        <select name="exercises" id="exercises-select-${muscleGroup.toLowerCase()}">
         ${exercises[muscleGroup]
           .map((exercise) => {
             return /*html*/ `
          <option>${exercise}</option>
          `;
           })
           .join("")}
        </select>
        <input type="number" id="exercises-select-${muscleGroup.toLowerCase()}-sets" placeholder="Sets">
        <button data-select-id="exercises-select-${muscleGroup.toLowerCase()}">Add</button>
      </div>
    `;
}

const PageHome = () => {
  return /*html*/ `
      <div>
        <div class="select-container">
          ${Object.keys(exercises).map(createExerciseSelectComponent).join("")}
        </div>
      </div>
    `;
};
export default PageHome;
