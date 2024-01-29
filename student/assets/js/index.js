import { renderOverview } from './overview-render.js';

const renderIndex = (container) => {
    let bodyContainer = document.getElementById("body-container");
    const leftSide = renderOverview();
    bodyContainer.appendChild(leftSide);
};

let container = document.getElementById("container");
renderIndex(container);

const checkout = document.getElementById("logout-button");

checkout.addEventListener("click", (event) => {
   localStorage.removeItem("GLOBAL_LOG_DATA");
});