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

const searchBoxPlaceholder = [
    {
        text: {
            "vi": "Tìm kiếm...",
            "eng": "Search for class...",
        },
    },
]


export const classSort = () => {
    // render class section
    let classesElements = document.createElement("div")
    classesElements.classList.add("class-std-sort-container")
    const bodyContainer = document.getElementById("body-container")
    const class_section = document.createElement("div")
    class_section.classList.add("class-section")
    const class_section_btn = document.createElement("div")
    class_section_btn.classList.add("class-section-btn")

    // render class button
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

    // render class search
    const class_search = document.createElement("div")
    class_search.classList.add("class-search")
    const search_box = document.createElement("div")
    search_box.classList.add("class-search-box")
    const class_search_box = document.createElement("input")
    class_search_box.classList.add("class-search-box")
    class_search_box.placeholder = searchBoxPlaceholder[0].text[global_lang];

    const class_sort = document.createElement("div")
    class_sort.classList.add("class-sort")
    const custom_select = document.createElement("div")
    custom_select.classList.add("custom-select")
    const select_box = document.createElement("select")
    select_box.classList.add("select-box")

    // Create select box
    select_box.name = "Sắp xếp";
    const options = ["A-Z", "Z-A", "Mới nhất", "Cũ nhất"];
    options.forEach((optionText, index) => {
        const option = document.createElement("option");
        option.textContent = optionText;
        select_box.appendChild(option);
    });

    // append child
    bodyContainer.appendChild(classesElements);
    classesElements.appendChild(class_section)
    class_section.appendChild(class_section_btn);
    class_section.appendChild(class_search);
    class_search.appendChild(search_box);
    class_search.appendChild(class_sort);
    search_box.appendChild(class_search_box);
    class_sort.appendChild(custom_select);
    custom_select.appendChild(select_box);
    
    return classesElements;
}