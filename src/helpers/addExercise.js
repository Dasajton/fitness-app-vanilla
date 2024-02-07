const addExercise = (muscleGroup) => {
  const exercise = document.getElementById(
    `exercises-select-${muscleGroup.toLowerCase()}`
  ).value;
  const sets = document.getElementById(
    `exercises-select-${muscleGroup.toLowerCase()}-sets`
  ).value;
  const workoutDisplay = document.getElementById("workout-display");

  console.log("clicked");

  workoutDisplay.innerHTML = /*html*/ `
    <li>${exercise}: ${sets} sets</li>
  `;
};

export default addExercise;
