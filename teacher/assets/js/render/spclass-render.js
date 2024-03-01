export function renderSpClass(name, id, stdC, exC) {
    const classDisplayContainer = document.querySelector('.classes');

    // Create elements
    const classInfoContainer = document.createElement('div');
    classInfoContainer.classList.add('class-info-container');
    classInfoContainer.style.minHeight = '80px';
    classInfoContainer.style.cursor = 'pointer';
    classInfoContainer.style.marginTop = '1rem';
    classInfoContainer.style.display = 'flex';

    classInfoContainer.addEventListener('mouseenter', function() {
        classInfoContainer.style.background = 'rgb(239, 239, 239)';
    });

    classInfoContainer.addEventListener('mouseleave', function() {
        classInfoContainer.style.background = 'transparent';
    });

    const classInfo = document.createElement('div');
    classInfo.classList.add('class-info');
    classInfo.style.display = 'flex';
    classInfo.style.paddingLeft = '2rem';
    classInfo.style.width = '50%';

    const classThumbnail = document.createElement('div');
    classThumbnail.classList.add('class-thumbnail');
    classThumbnail.style.opacity = '1';
    classThumbnail.style.height = '100%';
    classThumbnail.style.aspectRatio = '21 / 9';
    classThumbnail.style.width = '140px';
    classThumbnail.style.objectFit = 'cover';

    const img = document.createElement('img');
    img.classList.add('class-info-thumb');
    img.src = 'https://static-cse.canva.com/blob/1373818/1600w-wK95f3XNRaM.jpg';
    img.alt = '';

    const classInfoDetail = document.createElement('div');
    classInfoDetail.classList.add('class-info-detail');
    classInfoDetail.style.paddingTop = '1rem';
    classInfoDetail.style.marginLeft = '1rem';

    const title = document.createElement('p');
    title.classList.add('class-info-title');
    title.textContent = name;

    const code = document.createElement('p');
    code.innerHTML = `Mã lớp &bull; ${id}`;

    const classEduAmount = document.createElement('div');
    classEduAmount.classList.add('class-edu-amount');
    classEduAmount.style.width = '50%';
    classEduAmount.style.display = 'flex';
    classEduAmount.style.flex = '1 1';
    classEduAmount.style.justifyContent = 'center';

    const classStdAmount = document.createElement('div');
    classStdAmount.classList.add('class-std-amount', 'stats');
    classStdAmount.style.width = '209px';
    classStdAmount.style.position = 'relative';
    classStdAmount.style.lineHeight = '4';
    classStdAmount.style.display = 'flex'; 
    classStdAmount.style.justifyContent = 'center';

    const stdCount = document.createElement('p');
    stdCount.textContent = stdC;

    const classLessonAmount = document.createElement('div');
    classLessonAmount.classList.add('class-lesson-amount', 'stats');
    classLessonAmount.style.width = '209px';
    classLessonAmount.style.position = 'relative';
    classLessonAmount.style.lineHeight = '4';
    classLessonAmount.style.display = 'flex'; 
    classLessonAmount.style.justifyContent = 'center';

    const lessonCount = document.createElement('p');
    lessonCount.textContent = '0';

    const classExcAmount = document.createElement('div');
    classExcAmount.classList.add('class-exc-amount', 'stats');
    classExcAmount.style.width = '209px';
    classExcAmount.style.position = 'relative';
    classExcAmount.style.lineHeight = '4';
    classExcAmount.style.display = 'flex'; 
    classExcAmount.style.justifyContent = 'center';

    const excCount = document.createElement('p');
    excCount.textContent = exC;

    const classDocAmount = document.createElement('div');
    classDocAmount.classList.add('class-doc-amount', 'stats');
    classDocAmount.style.width = '209px';
    classDocAmount.style.position = 'relative';
    classDocAmount.style.lineHeight = '4';
    classDocAmount.style.display = 'flex'; 
    classDocAmount.style.justifyContent = 'center';

    const docCount = document.createElement('p');
    docCount.textContent = '0';

    // Append elements
    classInfo.appendChild(classThumbnail);
    classThumbnail.appendChild(img);
    classInfo.appendChild(classInfoDetail);
    classInfoDetail.appendChild(title);
    classInfoDetail.appendChild(code);
    
    classEduAmount.appendChild(classStdAmount);
    classStdAmount.appendChild(stdCount);
    classEduAmount.appendChild(classLessonAmount);
    classLessonAmount.appendChild(lessonCount);
    classEduAmount.appendChild(classExcAmount);
    classExcAmount.appendChild(excCount);
    classEduAmount.appendChild(classDocAmount);
    classDocAmount.appendChild(docCount);

    classInfoContainer.appendChild(classInfo);
    classInfoContainer.appendChild(classEduAmount);

    // Append to display container
    classDisplayContainer.appendChild(classInfoContainer);
}
