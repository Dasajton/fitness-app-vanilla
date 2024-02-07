import { SelectExercises } from "../components";

const Home = () => {
  return /*html*/ `
    ${SelectExercises()}
    <ul id="workout-display"></ul>
  `;
};

export default Home;
