// Overview content render
// import { renderOverview } from './overview-render.js';
// const renderIndex = (container) => {
//     let bodyContainer = document.getElementById("body-container");
//     const leftSide = renderOverview();
//     bodyContainer.appendChild(leftSide);
// };

// let container = document.getElementById("container");
// renderIndex(container);

// Center content render
// import { centerContent } from './overview-render.js';
// const renderCenterContent = () => {
//     const centerElements = centerContent();
// };  
// renderCenterContent();

const checkout = document.getElementById("logout-button");

checkout.addEventListener("click", (event) => {
   localStorage.removeItem("GLOBAL_LOG_DATA");
});

// Class content render
import { classSort } from './class-render.js';
import { getLocalStorage, setLocalStorage } from "../../../assets/js/tools.js";
import { API_DOMAIN } from "../../../config/api.js";

const classContent = () => {
    const classesElements = classSort();
}
classContent();




let parret = getLocalStorage("PARRET");

/* 
    PARRET FILL PATH    
        0. class outer board display
        1. inside class & detail
        2. work management 
*/

if (parret == 0) {
    let classData = getLocalStorage("CLASS_DATA");
    console.log(classData);
    for (let i in classData.data) {
        classSort(classData.data[i].name, classData.data[i].key, classData.data[i].student_count, classData.data[i].exercise_count, i);
    }
} else {
}

if (parret == 1) {
    let index = getLocalStorage("CURRENT_CLASS");
    let classData = getLocalStorage("CLASS_DATA");
} 

const prClass = document.getElementById('pr0-class');
    prClass.addEventListener('click', function() {
        setLocalStorage(0, "PARRET");
        location.reload();
    });