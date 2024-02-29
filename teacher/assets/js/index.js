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

let parret = 1;

if (parret == 1) {  
    deleteUWBehave();
    let intern = document.createElement('div');
    intern.setAttribute('id', 'class-detail')
    document.getElementById('uwbehave').appendChild(intern);
    renderSidebar();
    document.getElementById('c-add').addEventListener('click', () => {
        showLogInput('Thêm mô tả cho lớp học', 'Nhập mô tả cho lớp học tại đây', 'Thêm');
    })
} else {
    deleteUWBehave();
    renderFRow();
}

