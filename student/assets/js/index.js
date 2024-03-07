const checkout = document.getElementById("logout-button");

checkout.addEventListener("click", () => {
   localStorage.removeItem("GLOBAL_LOG_DATA");
});

import { deleteUWBehave } from "../../../assets/js/tools.js";
import { renderFRow } from "./render/frow-render.js";
import { popupAlert } from "../../../assets/js/tools.js";
import { showLogInput } from "./render/input-nof-render.js";
import { renderSidebar } from "./render/sidebar-render.js";
import { getClassNeutral } from "../../../assets/js/tools.js"; 
import { renderSpClass } from "./render/spclass-render.js";
import { renderClassInfoDisplay } from "./render/class-display.js";
import { getLocalStorage, setLocalStorage } from "../../../assets/js/tools.js";
import { renderOverview } from "./overview-render.js";

let parret = getLocalStorage("PARRET");
let csD = getLocalStorage("CLASS_DATA");
if (csD == null) setLocalStorage(0, "PARRET");


/* 
    PARRET FILL PATH    
        0. class outer board display
        1. inside class & detail
        2. work management 
*/

if (parret == 0) {
    deleteUWBehave();
    document.getElementById('uwbehave').classList.remove('uwbehave');
    getClassNeutral();
    renderFRow();
    renderClassInfoDisplay();
    let classData = getLocalStorage("CLASS_DATA");
    console.log(classData);
    if (classData.data != null)
    for (let i in classData.data) {
        renderSpClass(classData.data[i].name, classData.data[i].key, classData.data[i].student_count, classData.data[i].exercise_count, i);
    }
} else 

if (parret == 1) {
    deleteUWBehave();
    document.getElementById('uwbehave').classList.add('uwbehave');
    let index = getLocalStorage("CURRENT_CLASS");
    let classData = getLocalStorage("CLASS_DATA");
    if (classData.data != '')
    renderOverview();
} 

const prClass0 = document.getElementById('pr0-class');
    prClass0.addEventListener('click', function() {
        setLocalStorage(0, "PARRET");
        location.reload();
    }); 

const prClass1 = document.getElementById('pr1-class');
    prClass1.addEventListener('click', function() {
        setLocalStorage(1, "PARRET");
        location.reload();
    });