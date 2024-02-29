export function renderFRow() {
    // Create classes div
    const classesDiv = document.createElement("div");
    classesDiv.className = "classes";       

    // Create f-row div
    const fRowDiv = document.createElement("div");
    fRowDiv.className = "f-row";

    // Create class-count div
    const classCountDiv = document.createElement("div");
    classCountDiv.className = "class-count hover";
    classCountDiv.textContent = "lop cua ban";
    classCountDiv.style.cssText = "height:50px;width:8%;background-color:#ec4545;border-radius:10px;color:white;display:flex;align-items:center;justify-content:center;font-size:15.5px;";
    
    // Create search-box input
    const searchBoxInput = document.createElement("input");
    searchBoxInput.type = "text";
    searchBoxInput.className = "search-box hover";
    searchBoxInput.placeholder = "Tìm kiếm...";
    searchBoxInput.style.cssText = "border-radius:10px;font-size:17px;height:50px;width:70%;margin-inline:30px;border:rgb(160, 160, 160) solid 1.5px;padding:15px;";

    // Create s-role select
    const sRoleSelect = document.createElement("select");
    sRoleSelect.name = "Sắp xếp";
    sRoleSelect.id = "s-role";
    sRoleSelect.className = "hover";
    sRoleSelect.style.cssText = "font-size:17px;padding:10px;width:120px;border-radius:10px;height:50px;border:rgb(160, 160, 160) solid 1.5px;margin-right:30px;";
    const options = ["A-Z", "Z-A", "Mới nhất", "Cũ nhất"];
    options.forEach((optionText, index) => {
        const option = document.createElement("option");
        option.value = index + 1;
        option.textContent = optionText;
        sRoleSelect.appendChild(option);
    });

    // Create create-class div
    const createClassDiv = document.createElement("div");
    createClassDiv.className = "create-class hover";
    createClassDiv.textContent = "+ Tạo lớp học";
    createClassDiv.style.cssText = "display:flex;align-items:center;justify-content:center;background-color:var(--slider-color);font-size:17px;padding:10px;width:10%;color:white;border-radius:10px;height:50px;";

    // Append elements
    fRowDiv.appendChild(classCountDiv);
    fRowDiv.appendChild(searchBoxInput);
    fRowDiv.appendChild(sRoleSelect);
    fRowDiv.appendChild(createClassDiv);
    classesDiv.appendChild(fRowDiv);

    let uwbehave = document.getElementById("uwbehave");
    uwbehave.appendChild(classesDiv);
}