import { getMenu, getCurrentPage } from "./Router";
import "./style.scss";

document.querySelector("#app").innerHTML = /*html*/ `
<div>
    <header>
    <h1>Fitness-App</h1>
    ${getMenu()}
    </header>
    
    ${getCurrentPage()}
</div>
`;
