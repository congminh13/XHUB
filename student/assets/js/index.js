// Overview content render
import { renderOverview } from './overview-render.js';

const renderIndex = (container) => {
    let bodyContainer = document.getElementById("body-container");
    const leftSide = renderOverview();
    bodyContainer.appendChild(leftSide);
};
let container = document.getElementById("container");
renderIndex(container);

// Center content render
import { centerContent } from './overview-render.js';

const renderCenterContent = () => {
    // let centerContainer = document.getElementById("center-content");
    const centerElements = centerContent();
    // centerElements.appendChild(centerContainer);
};
renderCenterContent();

const checkout = document.getElementById("logout-button");

checkout.addEventListener("click", (event) => {
   localStorage.removeItem("GLOBAL_LOG_DATA");
});
