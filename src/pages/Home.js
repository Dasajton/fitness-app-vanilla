import { SelectExercises } from "../components/SelectedExercises.js";

const PageHome = () => {
  return /*html*/ `
      ${SelectExercises()}
      <ul id="workout-display"></ul>
  `;
};

export default PageHome;
