export function renderSidebar(name, id) {
    const sidebarDiv = document.createElement('div');
    sidebarDiv.classList.add('side-bar');
    sidebarDiv.style.cssText = `
        border-right: 1.5px solid var(--border-color);
        padding: 16px;
        width: 250px;
        height: 100%;
        background-color: white;
    `;

    const fContentDiv = document.createElement('div');
    fContentDiv.classList.add('f-content');

    const classNameDiv = document.createElement('div');
    classNameDiv.classList.add('class-name');
    classNameDiv.innerHTML = `<p>${name}</p>`;

    const classIdDiv = document.createElement('div');
    classIdDiv.classList.add('class-id');
    classIdDiv.innerHTML = `<p>Mã lớp: ${id}</p>`;

    const classDesDiv = document.createElement('div');
    classDesDiv.classList.add('class-des');
    classDesDiv.innerHTML = `
        <p>Mô tả lớp học:</p>
        <div id="c-add">+ Thêm</div>
    `;

    const classAchDiv = document.createElement('div');
    classAchDiv.classList.add('class-ach');
    classAchDiv.innerHTML = `<p>Danh mục:</p>`;

    const classItemsDiv = document.createElement('div');
    classItemsDiv.classList.add('class-items');

    const icons = ['address-card', 'calendar', 'user', 'star', 'handshake', 'newspaper', 'clipboard', 'image', 'paper-plane'];
    const texts = ['Bảng tin', 'Lịch học', 'Thành viên', 'Vai trò lớp', 'Nhóm học tập', 'Bài tập', 'Bảng điểm', 'Bài giảng', 'Tài liệu'];

    for (let i = 0; i < icons.length; i++) {
        const esItemDiv = document.createElement('div');
        esItemDiv.classList.add('es-item');
        esItemDiv.id = `es-${i + 1}`;
        esItemDiv.innerHTML = `
            <i class="fa-regular fa-${icons[i]}"></i>
            <p>${texts[i]}</p>
        `;
        esItemDiv.style.cssText = `
            height: 30px;
            width: 100%;
            padding: 20px;
            display: flex;
            margin-top: 5px;
            margin-bottom: 5px;
            align-items: center;
        `;
        classItemsDiv.appendChild(esItemDiv);
    }

    const delClassDiv = document.createElement('div');
    delClassDiv.id = 'del-class';

    sidebarDiv.appendChild(fContentDiv);
    fContentDiv.appendChild(classNameDiv);
    fContentDiv.appendChild(classIdDiv);
    fContentDiv.appendChild(classDesDiv);
    fContentDiv.appendChild(classAchDiv);
    fContentDiv.appendChild(classItemsDiv);
    fContentDiv.appendChild(delClassDiv);

    document.getElementById('class-detail').style.cssText = `
        padding-top: 63px;
        height: 100%;
        width: 100%;
    `;
    document.getElementById('class-detail').appendChild(sidebarDiv);
}

const style = document.createElement('style');
style.textContent = `
    .main-view {
        width: 100%;
        height: 100%;
    }

    .class-name p {
        font-weight: 900;
        font-size: 17px;
    }

    .class-id p {
        font-size: 15.5px;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .class-des {
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
        border-bottom: solid var(--border-color) 1.5px;
    }

    .class-des p {
        font-size: 13px;
    }

    #c-add {
        font-size: 13.5px;
        font-weight: 800;
        padding: 3px;
        padding-inline: 5px;
        border-radius: 5px;
    }

    #c-add:hover {
        background-color: var(--border-color);
        cursor: pointer
    }

    .class-ach {
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .class-ach p {
        font-size: 13px;
    }

    .es-item p {
        padding-left: 20px;
    }

    .es-item:hover {
        cursor: pointer;
    }
`;

document.head.appendChild(style);

