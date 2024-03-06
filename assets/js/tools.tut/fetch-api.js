// call API for POST method

const test_data1 = {
    "email": "@gmail.com",
    "password": "123123",
    "role": "teacher"
}
console.log(JSON.stringify(test_data1));
async function fetchData() {
    let da = await fetchAPI(test_data1, "login", "POST", null);
    console.log(da);
}

fetchData();

// call API for GET method

async function fetchData() {
    let token = globalLogData.token; 
    let head = {"Authorization": `Bearer ${token}`};
    let da = await fetchAPI(null, "me", "GET", head);
    console.log(da);
}

fetchData();