import { verifyUserAccount } from '../../assets/js/tools.js';

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
            window.location.href = '/';
        }
        else window.location.href = `/${role}`;
    } catch (error) {
        window.location.href = '/';
    }
}

checkAuth();