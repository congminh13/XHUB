import { getLocalStorage, setLocalStorage } from "../../../assets/js/tools.js";

const globalLogData = getLocalStorage("GLOBAL_LOG_DATA");

let ref = {
    "role": "teacher"
}

if (globalLogData.role != "teacher" && globalLogData == null) setLocalStorage(ref, "GLOBAL_LOG_DATA"); 
    else {
        globalLogData.role = "teacher";
        setLocalStorage(globalLogData, "GLOBAL_LOG_DATA");
    }