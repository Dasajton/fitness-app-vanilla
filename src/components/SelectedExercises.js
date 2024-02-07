import { exercises } from "../data/exercises.js";
import { CreateExerciseSelect } from "./index.js";

export default function SelectExercises() {
  return /*html*/ `
    <div class="select-container">
      <label class="top-label">Wähle deine Übungen: </label>
      ${Object.keys(exercises)
        .map((exercise) => CreateExerciseSelect(exercise))
        .join("")}
    </div>
  `;
}
