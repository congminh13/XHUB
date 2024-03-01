export function renderClassInfoDisplay() {
    const uwbehave = document.getElementById('classes');
    
    const classDetail = document.createElement('div');
    classDetail.style.cssText = "margin-top: 30px; width: 100%; height: 30px; display: flex; background-color: var(--border-color); align-items: center;";
    
    const leftDetail = document.createElement('div');
    leftDetail.style.width = '50%';
    
    const leftDetailText = document.createElement('p');
    leftDetailText.style.cssText = "padding-left: 2.5rem; font-family: Inter, sans-serif; font-weight: 400; font-size: 0.875rem; line-height: 1.43;";
    leftDetailText.textContent = 'Tên lớp';
    
    leftDetail.appendChild(leftDetailText);
    
    const rightDetail = document.createElement('div');
    rightDetail.style.cssText = "width: 50%; display: flex; justify-content: center;";
    
    const mmbItems = ['Học sinh', 'Bài giảng', 'Bài tập', 'Tài liệu'];
    mmbItems.forEach(item => {
        const mmbDiv = document.createElement('div');
        mmbDiv.style.cssText = "display: flex; justify-content: center; align-items: center; width: 209px; font-family: Inter, sans-serif; font-weight: 400; font-size: 0.875rem; line-height: 1.43;";
        
        const mmbText = document.createElement('p');
        mmbText.textContent = item;
        
        mmbDiv.appendChild(mmbText);
        rightDetail.appendChild(mmbDiv);
    });
    
    classDetail.appendChild(leftDetail);
    classDetail.appendChild(rightDetail);
    uwbehave.appendChild(classDetail);
    
    const classDisplayContainer = document.createElement('div');
    classDisplayContainer.style.height = 'calc(100% - 190px)';
    uwbehave.appendChild(classDisplayContainer);
}
