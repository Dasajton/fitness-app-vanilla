import { CreateWorkout } from "../components";

const Home = () => {
  return /*html*/ `
    ${CreateWorkout()}
    <ul id="workout-display"></ul>
  `;
};

export default Home;
