import { verifyUserAccount } from "../../../assets/js/tools.js";

if (verifyUserAccount()) {
    console.log("ok user uy tin");
} else window.location.href = '/';

const checkout = document.getElementById("logout-button");

checkout.addEventListener("click", (event) => {
   localStorage.removeItem("GLOBAL_LOG_DATA");
});
