import { getLocalStorage } from '../../../assets/js/tools.js';
import { API_DOMAIN } from '../../../config/api.js';
import { popupAlert } from '../../../assets/js/tools.js';

const USER_TOKEN = getLocalStorage("GLOBAL_LOG_DATA").token;
const back_class_render = document.querySelector("#back-class-render");

document.addEventListener("DOMContentLoaded", function () {
  back_class_render.addEventListener("click", function () {
    window.location.href = "index.html";
  });
});

const inputs = document.querySelectorAll(".otp-input");

inputs.forEach((input, index) => {
  input.addEventListener("input", function () {
    this.value = this.value.toUpperCase();
    if (this.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
    if (this.value.length === 1 && index < inputs.length - 1) {
      inputs[index + 1].value = "";
      inputs[index + 1].focus();
    }
  });
  input.addEventListener("keydown", function (event) {
    if (event.key === "Backspace" && index > 0 && this.value.length === 0) {
      inputs[index - 1].focus();
    }
  });
});

function showNof() {
    const existingNof = document.getElementById('nof');
    if (existingNof) {
        existingNof.remove();
    }
    const nof = document.createElement('div');
    nof.id = 'nof';
    nof.textContent = 'Đã gửi yêu cầu vào lớp';
    nof.style.cssText = `
        padding: 30px;
        font-size: 20px;
        height: 20px;
        width: 100%;
        display: flex;
        justify-content: center;
        color: black;
    `;
    const container = document.querySelector('.join-class-card');
    container.appendChild(nof);
}


async function joinClass(key) {
    await fetch(`${API_DOMAIN}/api/v1/class/${key}/join`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${USER_TOKEN}`
        }
    })
        .then(res => res.json())
        .then(data => {
            if (data.error_code == 0) {
                showNof();
                console.log(data);
            }
        })
        .catch(err => {
            console.log(err);
        })
}

let btn = document.getElementById('join-class-btn');
btn.addEventListener('click', () => {
    let values = '';
    inputs.forEach((input, index) => {
        values += input.value.trim(); 
    });
    joinClass(values);
});
