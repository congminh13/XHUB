import { global_lang } from "../../../config/lang.js";
const leftSideData = [
    {
        title: {
            "vi": "Phòng học hôm nay",
            "en": "Today's classroom"
        },
        default_selected: true,
        href_part: "today",
        widget_icon: "bxs-widget",
    },
    {
        title: {
            "vi": "Bài tập chưa làm",
            "en": "Unfinished exercises",
        },
        default_selected: false,
        href_part: "ex",
        widget_icon: "bx-note",
    },
    {
        title: {
            "vi": "Tài liệu chưa đọc",
            "en": "Unread documents",
        },
        default_selected: false,
        href_part: "doc",
        widget_icon: "bx-folder-minus",
    },
    {
        title: {
            "vi": "Bài giảng chưa xem",
            "en": "Unwatched lectures",
        },
        default_selected: false,
        href_part: "video",
        widget_icon: "bx-play-circle",
    },
    {
        title: {
            "vi": "Thành tích",
            "en": "Achievements",
        },
        default_selected: false,
        href_part: "achievement",
        widget_icon: "bx-trophy",
    },
];
const renderLeftside = () => {
    let leftSide = document.createElement("div");
    leftSide.setAttribute("id", "left-side");
    leftSide.classList.add("left-side-menu");

    for (let i of leftSideData) {
        const widgetIcon = document.createElement("i");
        widgetIcon.classList.add("bx");
        widgetIcon.classList.add(i.widget_icon);

        const title = document.createElement("p");
        title.innerHTML = i.title[global_lang];

        const checkIcon = document.createElement("i");
        checkIcon.classList.add("bx", "bx-check");

        const flexBox = document.createElement("div");
        flexBox.classList.add("aic", "df")
        flexBox.appendChild(widgetIcon);
        flexBox.appendChild(title);
        flexBox.appendChild(checkIcon);

        const objectDiv = document.createElement("div");
        objectDiv.classList.add("object-div");
        objectDiv.appendChild(flexBox);

        const leftSideItem = document.createElement("a");
        leftSideItem.classList.add("object");
        if (i.default_selected) {
            leftSideItem.classList.add("left-menu-selected");
        }
        leftSideItem.setAttribute("href", `#${i.href_part}`);

        leftSideItem.appendChild(objectDiv);
        leftSide.appendChild(leftSideItem);
    }

    return leftSide;
}


const centerContentData = [
    {
        title: {
            "vi": "Phòng học hôm nay",
            "eng": "Today's classes",
        },
        roomImg: "https://shub.edu.vn/images/overview-schedule.svg",
        titleSub: {
            "vi": "Không có buổi học nào diễn ra hôm nay",
            "en": "There are no classes taking place today",
        },
    },
    {
        title: {
            "vi": "Bài tập chưa nộp",
            "eng": "Unsubmitted assignments",
        },
        roomImg: "https://shub.edu.vn/images/overview-homework.svg",
        titleSub: {
            "vi": "Thật tuyệt vời! Tất cả bài tập đã được hoàn thành",
            "en": "It's awesome! All assignments have been completed",
        },
    },
    {
        title: {
            "vi": "Tài liệu chưa đọc",
            "eng": "Unread material",
        },
        roomImg: "https://shub.edu.vn/images/overview-file.svg",
        titleSub: {
            "vi": "Bạn đã đọc hết tất cả tài liệu",
            "en": "You've read all the documents",
        },
    },
    {
        title: {
            "vi": "Bài giảng chưa xem",
            "eng": "Unwatched sermons",
        },
        roomImg: "https://shub.edu.vn/images/overview-lesson.svg",
        titleSub: {
            "vi": "Bạn đã xem hết tất cả bài giảng",
            "en": "You've watched all the lectures",
        },
    },
    {
        title: {
            "vi": "Thành tích học tập",
            "eng": "Achievments",
        },
        roomImg: "https://shub.edu.vn/images/overview-achievement.svg",
        titleSub: {
            "vi": "Bạn chưa có kết quả nào để hiển thị",
            "en": "You don't have any results to show yet",
        },
    },
]

let centerContent = () => {
    const centerIDs = ['today', 'ex', 'doc', 'video', 'achievement'];

    let centerElements = document.createElement("div");
    centerElements.setAttribute("id", "center-content");
    centerElements.classList.add("center-content");

    for (let i = 0; i < centerContentData.length; i++) {
    
        const title = document.createElement("h6");
        title.classList.add("title");
        title.innerHTML = centerContentData[i].title[global_lang];

        const render = document.createElement("div");
        render.classList.add("render");

        const classImg = document.createElement("img");
        classImg.classList.add("img");
        classImg.setAttribute('src', centerContentData[i].roomImg);
        render.appendChild(classImg);

        const sub = document.createElement("p");
        sub.innerHTML = centerContentData[i].titleSub[global_lang];
        sub.classList.add("sub");
        render.appendChild(sub);

        const bodyContainer = document.getElementById("                                 ");
        const classroom = document.createElement("div");
        
        classroom.classList.add("classroom");
        classroom.setAttribute("id", centerIDs[i] || "")
        classroom.appendChild(title);
        classroom.appendChild(render);
        centerElements.appendChild(classroom);
        bodyContainer.appendChild(centerElements);
    }   
    return centerElements;
}

export function renderOverview() {
    let uwbehave = document.getElementById('uwbehave');
    let container = document.createElement('div');
    container.appendChild(centerContent);
    container.style.cssText = `
        height: 100%;
        width: 100%;
        display: flex;
    `;
    uwbehave.appendChild(container);
}