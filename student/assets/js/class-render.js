import { global_lang } from "../../../config/lang.js";
const classBtnText = [
    {
        text: {
            "vi": "Lớp của bạn",
            "eng": "Your class",
        },
        default_selected: true,
    },
    {
        text: {
            "vi": "Lớp đang chờ",
            "eng": "Waiting class",
        },
        default_selected: false,
    },
    {
        text: {
            "vi": "Lớp đã ẩn",
            "eng": "Hidden class",
        },
        default_selected: false,
    },
]

export const classSort = () => {
    let classesElements = document.createElement("div")
    classesElements.classList.add("class-std-sort-container")
    const bodyContainer = document.getElementById("body-container")
    const class_section = document.createElement("div")
    class_section.classList.add("class-section")
    const class_section_btn = document.createElement("div")
    class_section_btn.classList.add("class-section-btn")

    for (let i = 0; i < 3; i++) {
        const class_btn = document.createElement("button")
        class_btn.classList.add("class-btn");
        class_section_btn.appendChild(class_btn);
        const class_btn_paragraph = document.createElement("p")
        class_btn_paragraph.innerHTML = classBtnText[i].text[global_lang];
        class_btn.appendChild(class_btn_paragraph);

        if (classBtnText[i].default_selected) {
            class_btn.classList.add("btn-active");
        }


        
    }


    bodyContainer.appendChild(classesElements);
    classesElements.appendChild(class_section)
    class_section.appendChild(class_section_btn);
    
    return classesElements;
}