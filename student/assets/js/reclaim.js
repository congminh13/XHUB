import { getLocalStorage, setLocalStorage } from "../../../assets/js/tools.js";

const globalLogData = getLocalStorage("GLOBAL_LOG_DATA");

let ref = {
    "role": "student"
}

if (globalLogData.role != "student" && globalLogData == null) setLocalStorage(ref, "GLOBAL_LOG_DATA"); 
    else {
        globalLogData.role = "student";
        setLocalStorage(globalLogData, "GLOBAL_LOG_DATA");
    }