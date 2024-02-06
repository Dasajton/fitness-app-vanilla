import { SelectExercises } from "../components/SelectedExercises.js";

const PageHome = () => {
  return /*html*/ `
    <div>
      ${SelectExercises()}
      <ul id="workout-display"></ul>
    </div>
  `;
};

export default PageHome;
