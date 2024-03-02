export function showLogInput(header, placeholder, buttonContent, location) {
    const container = document.getElementById('container');
    const box = document.createElement('div');
    const overlay = document.createElement('div');
    const headerElement = document.createElement('div');
    const closeButton = document.createElement('span');
    const input = document.createElement('input');
    const submitButton = document.createElement('button');
    
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 9999;
    `;
    
    box.style.cssText = `
        background-color: rgb(255, 255, 255);
        color: rgb(32, 34, 39);
        transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px;
        padding: 30px;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        height: 200px;
        width: 400px;
        border-radius: 16px;
        z-index: 9999;
        display: flex;
        flex-direction: column;
    `;
    
    headerElement.style.cssText = `
        font-weight: bold;
        margin-bottom: 20px;
    `;

    closeButton.style.cssText = `
        font-size: 13px;
        position: absolute;
        top: 25px;
        right: 25px;
        cursor: pointer;
        height: 30px;
        width: 30px;
        border-radius: 30px;
        background-color: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
    `;

    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.backgroundColor = 'rgb(216, 220, 240)';
    });

    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.backgroundColor = 'transparent';
    });

    submitButton.style.cssText = `
        cursor: pointer;
        margin-top: 15px;
        font-size: 15px;
        border-radius: 7px;
        width: 25%;
        height: 60px;
        align-self: flex-end;
        background-color: #eb5858;
        color: white;
        border: none;
        transition: all 0.3s ease;
    `;

    submitButton.addEventListener('mouseenter', () => {
        submitButton.style.boxShadow = 'rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px';
    });

    submitButton.addEventListener('mouseleave', () => {
        submitButton.style.boxShadow = 'none';
    });

    input.style.cssText = `
        border-radius:10px;
        font-size:17px;
        height:50px;
        width:100%;
        border:rgb(160, 160, 160) solid 1.5px;
        padding:15px;
    `;

    closeButton.innerHTML = 'X  ';
    headerElement.textContent = header;
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', placeholder);
    submitButton.textContent = buttonContent;

    closeButton.addEventListener('click', () => {
        container.removeChild(overlay);
        container.removeChild(box);
    });

    submitButton.addEventListener('click', () => {
        const inputValue = input.value;
        localStorage.setItem(location, inputValue);
        container.removeChild(overlay);
        container.removeChild(box);
    });

    headerElement.appendChild(closeButton);
    box.appendChild(headerElement);
    box.appendChild(input);
    box.appendChild(submitButton);
    container.appendChild(overlay);
    container.appendChild(box);
}
    