import { API_DOMAIN } from "../../../config/api.js";
import { getLocalStorage, setLocalStorage } from "../../../assets/js/tools.js";

function checkLogIn() {
    const checkVal = getLocalStorage("GLOBAL_LOG_DATA");
    console.log(checkVal)
    if (checkVal == null || checkVal.token == "") {
        window.location.href = '/';
    }
}

checkLogIn();
function fetchDetailApi() {
    let globalLogData = getLocalStorage("GLOBAL_LOG_DATA");
    fetch(`${API_DOMAIN}/api/v1/auth/me`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${globalLogData.token}`
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log(data)   
            if (data.error_code == 0) {
                if (data.data.role == "student") {
                    window.location.href = '/student';
                } else if (data.data.role == "teacher") {
                    window.location.href = '/teacher';
                }
            } else {
                let globalLogData = {
                    name: "",
                    role: "",
                    passed: false,  
                    token: ""
                }
                setLocalStorage(globalLogData, "GLOBAL_LOG_DATA");
                window.location.href = '/';
            }
            
        })
        .catch(err => {
            console.log(err);
        })
}

fetchDetailApi();