// import { getLocalStorage } from '../../../assets/js/tools.js';
// import { lang_count } from '../../../assets/lang/lang_count.js';

// let globalLogData = getLocalStorage("GLOBAL_LOG_DATA");
// const lang = globalLogData.lang;
// let global_lang = '';

// for (let i of lang_count) {
//     if (lang == i) {
//         global_lang = i; 
//         break;
//     }
// }

// const lang_path = `../../../assets/lang/${global_lang}/lang_std/lang.json`;
// console.log(lang_path);
// import(lang_path)
//     .then(module => {
//         const data = module.default; 
//         console.log(data);
//     })

import { renderLeftSide } from './left-side.js';

const renderIndex = (container) => {
    let bodyContainer = document.getElementById("body-container");
    const leftSide = renderLeftSide();
    bodyContainer.appendChild(leftSide);
};

let container = document.getElementById("container");
renderIndex(container);