const checkout = document.getElementById("logout-button");

checkout.addEventListener("click", () => {
   localStorage.removeItem("GLOBAL_LOG_DATA");
});

import { API_DOMAIN } from "../../../config/api.js";
import { deleteUWBehave } from "../../../assets/js/tools.js";
import { renderFRow } from "./render/frow-render.js";
import { createClass } from "./create-class.js";
import { popupAlert } from "../../../assets/js/tools.js";
import { showLogInput } from "./render/input-nof-render.js";
import { renderSidebar } from "./render/sidebar-render.js";
import { getClassNeutral } from "../../../assets/js/tools.js"; 
import { renderSpClass } from "./render/spclass-render.js";
import { renderClassInfoDisplay } from "./render/class-display.js";
import { getLocalStorage, setLocalStorage } from "../../../assets/js/tools.js";

let parret = getLocalStorage("PARRET");
let csD = getLocalStorage("CLASS_DATA");
if (csD.count == 0) setLocalStorage(0, "PARRET");

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
    for (let i in classData.data) {
        renderSpClass(classData.data[i].name, classData.data[i].key, classData.data[i].student_count, classData.data[i].exercise_count, i);
    }
} else 

if (parret == 1) {
    deleteUWBehave();
    document.getElementById('uwbehave').classList.add('uwbehave');
    let intern = document.createElement('div');
    intern.setAttribute('id', 'class-detail')
    document.getElementById('uwbehave').appendChild(intern);

    let index = getLocalStorage("CURRENT_CLASS");
    let classData = getLocalStorage("CLASS_DATA");
    renderSidebar(classData.data[index].name, classData.data[index].key);
    document.getElementById('c-add').addEventListener('click', () => {
    showLogInput('Thêm mô tả cho lớp học', 'Nhập mô tả cho lớp học tại đây', 'Thêm', 'DES_INP');
    // code add descr iption for class
    });
} 

const prClass = document.getElementById('pr0-class');
    prClass.addEventListener('click', function() {
        setLocalStorage(0, "PARRET");
        location.reload();
    });