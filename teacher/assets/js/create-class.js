import { popupAlert } from "../../../assets/js/tools.js";
import { getLocalStorage } from "../../../assets/js/tools.js";
import { API_DOMAIN } from "../../../config/api.js";

const USER_TOKEN = getLocalStorage("GLOBAL_LOG_DATA").token;

export async function createClass(name) {
    let classCreateInfo = {
        "name": name
    }
    await fetch(`${API_DOMAIN}/api/v1/class`, {
        method: "POST",
        body: JSON.stringify(classCreateInfo),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${USER_TOKEN}`
        }
    })
        .then(res => res.json())
        .then(data => {
            popupAlert("", "OK r");
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        })
}





