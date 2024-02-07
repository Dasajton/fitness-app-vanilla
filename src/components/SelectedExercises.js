import { exercises } from "../data";
import { CreateExerciseSelect } from "./";

const SelectExercises = () => {
  return /*html*/ `
    <div class="select-container">
      <label class="top-label">Wähle deine Übungen: </label>
      ${Object.keys(exercises)
        .map((exercise) => CreateExerciseSelect(exercise))
        .join("")}
    </div>
  `;
};

export default SelectExercises;
