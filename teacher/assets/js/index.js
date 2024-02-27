const checkout = document.getElementById("logout-button");

checkout.addEventListener("click", (event) => {
   localStorage.removeItem("GLOBAL_LOG_DATA");
});


import { API_DOMAIN } from "../../../config/api.js";
import { deleteUWBehave } from "../../../assets/js/tools.js";
import { renderFRow } from "./frow-render.js";
import { createClass } from "./create-class.js";
import { popupAlert } from "../../../assets/js/tools.js";
import { showLogInput } from "./input-nof-render.js";

document.getElementById('c-add').addEventListener('click', () => {
    showLogInput('Thêm mô tả cho lớp học', 'Nhập mô tả cho lớp học tại đây', 'Thêm');
})