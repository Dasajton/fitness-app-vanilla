import { getMenu, getCurrentPage } from "./Router";
import "./style.scss";

document.querySelector("#app").innerHTML = /*html*/ `
    <header>
    <h1>Fitness-App</h1>
    ${getMenu()}
    </header>
    
    <main>
    ${getCurrentPage()}
    </main>
`;
