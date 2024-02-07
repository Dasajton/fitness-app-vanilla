import { SelectExercises } from "../components";

const Home = () => {
  return /*html*/ `
    ${SelectExercises()}
    <div id="workout-display"></div>
  `;
};

export default Home;
