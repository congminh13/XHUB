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

    const search_class_btn = document.createElement("div")
    search_class_btn.classList.add("search-class-btn")
    const search_btn = document.createElement("button")
    search_btn.id = "search-class-btn"
    const searchClassText = [
        {
            text: {
                "vi": "+ Tìm lớp học",
                "eng": "+ Search for classes",
            },
        },
    ]
    search_btn.innerHTML = searchClassText[0].text[global_lang];

    // class details
    const class_detail = document.createElement("div")
    class_detail.classList.add("class-detail")
    const class_detail_left = document.createElement("div")
    class_detail_left.classList.add("class-detail-left")

    const classDetails = [
        {
            text: {
                "vi": "Tên lớp",
                "eng": "Class name",
            },
        },
        {
            text: {
                "vi": "Học sinh",
                "eng": "Students",
            },
        },
        {
            text: {
                "vi": "Bài giảng",
                "eng": "Lessons ",
            },
        },
        {
            text: {
                "vi": "Bài tập",
                "eng": "Exercises",
            },
        },
        {
            text: {
                "vi": "Tài liệu",
                "eng": "Documents",
            },
        },
    ]

    const class_detail_left_text = document.createElement("p")
    class_detail_left_text.innerHTML = classDetails[0].text[global_lang];
    const class_detail_right = document.createElement("div")
    class_detail_right.classList.add("class-detail-right")

    for (let k = 0; k < 4; k++) {
        const class_detail_right_text = document.createElement("p")
        class_detail_right.appendChild(class_detail_right_text);
        class_detail_right_text.innerHTML = classDetails[k].text[global_lang];
    }

    // append child
    bodyContainer.appendChild(classesElements);
    classesElements.appendChild(class_section)
    classesElements.appendChild(class_detail);
    class_section.appendChild(class_section_btn);
    class_section.appendChild(class_search);
    class_search.appendChild(search_box);
    class_search.appendChild(class_sort);
    search_box.appendChild(class_search_box);
    class_sort.appendChild(custom_select);
    class_sort.appendChild(search_class_btn);
    custom_select.appendChild(select_box);
    search_class_btn.appendChild(search_btn);
    class_detail.appendChild(class_detail_left);
    class_detail.appendChild(class_detail_right);
    class_detail_left.appendChild(class_detail_left_text);
    
    return classesElements;
}