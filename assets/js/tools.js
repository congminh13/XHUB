import { API_DOMAIN } from '../../config/api.js'

export function setLocalStorage(data, address){
    localStorage.setItem(address, JSON.stringify(data));
}

export function getLocalStorage(address){
    let data = JSON.parse(localStorage.getItem(address)); 
    return data;
}

export function popupAlert(title, content){
    let popUp = document.createElement('div');
    let popT = document.createElement('h1');
    popT.innerHTML = title;
    let popC = document.createElement('p');
    popC.innerHTML= content;
    popUp.style = "color: red; z-index: 20000000; position:fixed; bottom: 25px; right: 10px; background-color: white; height: 150px; width: 300px";
    popUp.appendChild(popT);
    popUp.appendChild(popC);
    document.getElementById('container').appendChild(popUp);
}

export async function verifyUserAccount() {
    const globalLogData = getLocalStorage("GLOBAL_LOG_DATA");
    if (globalLogData != null && globalLogData.token != "") {
        try {
            const response = await fetch(`${API_DOMAIN}/api/v1/auth/me`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${globalLogData.token}`
                }
            });
            const user = await response.json();
            if (user.error_code === 0) {
                return user.data.role;
            } else {
                return 0;
            }
        } catch (err) {
            console.log(err);
            return 0;
        }
    } else {
        return 0;
    }
}

export async function fetchAPI(data, type, method, header) {
    let sc_header = {"Content-type": "application/json"};
    
    if (header != null) {
        sc_header = {
            "Content-type": "application/json",
            ...header
        };
    }

    let requestOptions = {
        method: method,
        headers: sc_header
    };

    if (method !== "GET") {
        requestOptions.body = JSON.stringify(data);
    }

    try {
        const response = await fetch(`${API_DOMAIN}/api/v1/auth/${type}`, requestOptions);  
        const responseData = await response.json();
        return responseData;
    } catch (err) {
        return err;
    }
}

export function checkLogValidation(code) {
    if (code == 10004) return "Thông tin đăng nhập không hợp lệ."; else 
    if (code == 10005) return "Tài khoản người dùng đã tồn tại."; else
    if (code == 10006) return "Tài khoản người dùng không tồn tại"; else
    if (code == 10007) return "Role không hợp lệ"; else
    if (code == 10008) return "Email không hợp lệ."; else 
    if (code == 20004) return "Bạn không phải là giáo viên."; else 
    if (code == 20005) return "Không tìm thấy lớp."; else 
    if (code == 20006) return "Bạn không phải là học sinh";
}

export function deleteUWBehave() {
    let uwbehaveObj = document.getElementById("uwbehave");
    uwbehaveObj.remove();

    let newUWBehave = document.createElement("div");
    newUWBehave.setAttribute("id", "uwbehave");
    newUWBehave.classList.add("uwbehave");

    let uwcontainer = document.getElementById("uwcontainer");

    uwcontainer.appendChild(newUWBehave);
}

export async function getClassNeutral() {
    const globalLogData = getLocalStorage("GLOBAL_LOG_DATA");
    if (globalLogData != null && globalLogData.token != "") 
        try {
            const response = await fetch(`${API_DOMAIN}/api/v1/class`, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${globalLogData.token}`
                }
            });
            const data = await response.json();
            if (data.error_code == 0) {
                let classData = {
                    "count": data.data.meta.total,
                    "data" : data.data.classes
                }
                setLocalStorage(classData, "CLASS_DATA");
            }
        } catch (err) {
            console.log(err);
        }
    else window.location.href = '/';
}