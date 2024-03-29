import { exercises } from "../../data";
import { addExercise } from "../../helpers";

const CreateExerciseSelect = (muscleGroup) => {
  setTimeout(() => {
    const btnAddElem = document.querySelector(
      `.btn-add-${muscleGroup.toLowerCase()}`
    );
    btnAddElem.addEventListener("click", () => addExercise(muscleGroup));
  }, 0);

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
        <button class="btn-add-${muscleGroup.toLowerCase()}" data-select-id="exercises-select-${muscleGroup.toLowerCase()}">Add</button>
      </div>
    `;
};

export default CreateExerciseSelect;
