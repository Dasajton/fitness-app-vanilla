export default function addExercise(muscleGroup) {
  const exercise = document.getElementById(
    `exercises-select-${muscleGroup.toLowerCase()}`
  ).value;
  const sets = document.getElementById(
    `exercises-select-${muscleGroup.toLowerCase()}-sets`
  ).value;
  const workoutDisplay = document.getElementById("workout-display");
  const li = document.createElement("div");
  li.textContent = `${exercise}: ${sets} sets`;
  workoutDisplay.appendChild(li);
}
