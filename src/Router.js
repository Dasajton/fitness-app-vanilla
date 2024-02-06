import * as tools from "./tools";
import { Home, About, NotFound404 } from "./pages/index.js";

const pageNames = ["Home", "About"];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
  switch (currentPageIdCode) {
    case "home":
      return Home();
    case "about":
      return About();
    default:
      return NotFound404();
  }
};

const getPageIdCode = (pageName) => {
  pageName = tools.cleanCharactersToAscii(pageName);
  return pageName.toLowerCase();
};

export const getMenu = () => {
  const getMenuClass = (pageName) => {
    const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
    if (pageIdCode === currentPageIdCode) {
      return ` class="active"`;
    } else {
      return "";
    }
  };

  return /*html*/ `
	<nav class="menu">
		<ul>
			${pageNames
        .map(
          (pageName) =>
            `<li><a href="${getPageIdCode(pageName)}"${getMenuClass(
              pageName
            )}>${pageName}</a></li>`
        )
        .join("")}
		</ul>
	</nav>
`;
};

function getSmartCurrentPageId() {
  let currentPageIdCode = tools.getCurrentPageIdCode();
  currentPageIdCode =
    currentPageIdCode === ""
      ? tools.cleanCharactersToAscii(pageNames[0].toLowerCase())
      : currentPageIdCode;
  return currentPageIdCode;
}
