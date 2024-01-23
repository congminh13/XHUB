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
    popUp.appendChild('')
    document.getElementById('container').appendChild(popUp);
}

export function verifyUserAccount() {
    const globalLogData = getLocalStorage("GLOBAL_LOG_DATA");
    if (globalLogData != null && globalLogData != "") {
        fetch(`${API_DOMAIN}/api/v1/auth/me`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${globalLogData.token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);  
            if (data.error_code == 0) {
                return true;
            } else {
                return false;
            }
            
        })
        .catch(err => {
            console.log(err);
        })
    } else return false;

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