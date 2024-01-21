let checkLog = getLocalStorage("GLOBAL_LOG_DATA");
if (checkLog == null) {
    setLocalStorage(globalLogData, "GLOBAL_LOG_DATA");
}

function checkLogIn() {
    const checkVal = getLocalStorage("GLOBAL_LOG_DATA");
    console.log(checkVal)
    if (checkVal == null || checkVal.token == "") {
        window.location.href = '/';
    }
}

function getLocalStorage(address){
    let data = JSON.parse(localStorage.getItem(address)); 
    return data;
}

checkLogIn();
function fetchDetailApi() {
    let globalLogData = getLocalStorage("GLOBAL_LOG_DATA");
    fetch(`http://192.168.1.143:7777/api/v1/auth/me`, {
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
                    // window.location.href = '/teacher';
                }
            } else {
                // window.location.href = '/';
            }
            
        })
        .catch(err => {
            console.log(err);
        })
}

fetchDetailApi();