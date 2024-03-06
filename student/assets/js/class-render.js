import { global_lang } from "../../../config/lang.js";
import { setLocalStorage } from "../../../../assets/js/tools.js";

// join class by code
const search_class_btns = document.getElementsByClassName("search-class-btn");

document.addEventListener("DOMContentLoaded", function () {
    for (let i = 0; i < search_class_btns.length; i++) {
        search_class_btns[i].addEventListener("click", function () {
            window.location.href = 'joinclass.html'; 
        });
    }
});

// Class render
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


export const classSort = (name, id, stdC, exC, index) => {
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
        class_detail_right_text.innerHTML = classDetails[k+1].text[global_lang];
    }

    // display classes
    const class_display_container = document.createElement("div")
    class_display_container.classList.add("class-display-container")
    const class_info_container = document.createElement("div")
    class_info_container.classList.add("class-info-container")
    const class_info = document.createElement("div")
    class_info.classList.add("class-info")
    const class_thumbnail = document.createElement("div")
    class_thumbnail.classList.add("class-thumbnail")

    // parret check - reload page
    class_info_container.addEventListener('click', function() {
        setLocalStorage(1, "PARRET");
        setLocalStorage(index, "CURRENT_CLASS");
        location.reload();
    });

    // create classes card
    
    const class_info_thumb = document.createElement("img")
    class_info_thumb.classList.add("class-info-thumb")
    const no_image_url = 'https://shub-storage.sgp1.cdn.digitaloceanspaces.com/profile_images/33-01.jpg'
    class_info_thumb.src = no_image_url

    const class_info_detail = document.createElement("div")
    class_info_detail.classList.add("class-info-detail")
    const class_info_title = document.createElement("p")
    class_info_title.classList.add("class-info-title")
    class_info_title.textContent = name;
    const class_info_code = document.createElement("p")
    class_info_code.classList.add("class-info-code")
    class_info_code.innerHTML = `Mã lớp &bull; ${id}`
    

    const class_edu_amount = document.createElement("div")
    class_edu_amount.classList.add("class-edu-amount")


// Create classes - not done yet


    // class-edu-amount
    const classStdAmount = document.createElement('div');
    classStdAmount.classList.add('class-std-amount', 'stats');
    const stdCount = document.createElement('p');
    stdCount.textContent = stdC;
    
    const classLessonAmount = document.createElement('div');
    classLessonAmount.classList.add('class-lesson-amount', 'stats');
    const lessonCount = document.createElement('p');
    lessonCount.textContent = '0';

    const classExcAmount = document.createElement('div');
    classExcAmount.classList.add('class-exc-amount', 'stats');
    const excCount = document.createElement('p');
    excCount.textContent = exC;

    const classDocAmount = document.createElement('div');
    classDocAmount.classList.add('class-doc-amount', 'stats');
    const docCount = document.createElement('p');
    docCount.innerHTML = '0';
    



    // append to display container
    bodyContainer.appendChild(classesElements);

    // append elements 
    classesElements.appendChild(class_section)
    classesElements.appendChild(class_detail);
    classesElements.appendChild(class_display_container);
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
    class_display_container.appendChild(class_info_container);
    class_info_container.appendChild(class_info);
    class_info_container.appendChild(class_edu_amount);
    class_info.appendChild(class_thumbnail);
    class_thumbnail.appendChild(class_info_thumb);
    class_info.appendChild(class_info_detail);
    class_info_detail.appendChild(class_info_title);
    class_info_detail.appendChild(class_info_code);
    class_edu_amount.appendChild(classStdAmount);
    class_edu_amount.appendChild(classLessonAmount);
    class_edu_amount.appendChild(classExcAmount);
    class_edu_amount.appendChild(classDocAmount);
    classLessonAmount.appendChild(lessonCount);
    classExcAmount.appendChild(excCount);
    classDocAmount.appendChild(docCount);
    
    return classesElements;
}


