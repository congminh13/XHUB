import { verifyUserAccount } from '../../assets/js/tools.js';
import { getLocalStorage } from '../../assets/js/tools.js';

async function checkAuth() {
    try {
        const role = await verifyUserAccount();
        if (role == 0) {
            let globalLogData = {
                name: "",
                role: "",
                passed: false,  
                token: ""
            }
            setLocalStorage(globalLogData, "GLOBAL_LOG_DATA");
            // console.log(1);
            window.location.href = '/';
        } else {
            const roleF = getLocalStorage("GLOBAL_LOG_DATA");
            if (roleF.role != role) window.location.href = '/';
        }
        console.log(role);
    } catch (error) {
        window.location.href = '/';
    }
}

checkAuth();