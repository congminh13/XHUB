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
import { getLocalStorage } from "../../../assets/js/tools.js";

let parret = 0;

/* 
    PARRET FILL PATH    
        0. class outer board display
        1. inside class & detail
        2. work management 
*/

if (parret == 0) {  
    deleteUWBehave();
    getClassNeutral();
    renderFRow();
    renderClassInfoDisplay();
    let classData = getLocalStorage("CLASS_DATA");
    console.log(classData);
    for (let i in classData.data) {
        renderSpClass(classData.data[i].name, classData.data[i].key, classData.data[i].student_count, classData.data[i].exercise_count);
    }
} else 

if (parret == 1) {
    deleteUWBehave();
    let intern = document.createElement('div');
    intern.setAttribute('id', 'class-detail')
    document.getElementById('uwbehave').appendChild(intern);
    renderSidebar();
    document.getElementById('c-add').addEventListener('click', () => {
    showLogInput('Thêm mô tả cho lớp học', 'Nhập mô tả cho lớp học tại đây', 'Thêm');
    // code add descr iption for class
    });
} else 

if (parret == 2) {
    renderSpClass(0,0);
}

