let username = document.getElementById("username");
let age = document.getElementById("age");
let account = [];
let errorname = document.getElementById("errorn");
let errorage = document.getElementById("errora");

function closeError(container) {	
    container.classList.remove("hidden-menu-active");
    container.classList.add("hidden-menu");
    container.innerHTML = ""; 
}


function login() {

    if (username.value === "" && age.value === "") {
        errorname.classList="error-show";
        errorname.innerHTML = '<p>Complete el campo.</p>';

        if (isNaN(age.value)){
        errorage.classList="error-show";
        errorage.innerHTML = '<p>Ingrese un número válido.</p>';
        }else if (age.value <= 0) {
            errorage.classList="error-show";
            errorage.innerHTML = '<p>Ingrese un número válido.</p>';
        }
        return;
        
    }else {
        errorname.className = "error";
        errorname.innerHTML = "&#8203;";
        errorage.classList="error";
        errorage.innerHTML = "&#8203;";
    }

    if (username.value === "") {
        errorname.classList="error-show";
        errorname.innerHTML = '<p>Complete el campo.</p>';
        return;
    }else {
        errorname.className = "error";
        errorname.innerHTML = "&#8203;";
    }

    if (isNaN(age.value) || age.value <= 0) {
        errorage.classList="error-show";
        errorage.innerHTML = '<p>Ingrese un número válido.</p>';
        return;
    }else{
        errorage.classList="error";
        errorage.innerHTML = "&#8203;";
    }

    account.push({
        name: username.value,
        age: age.value
    });

    username.value = "";
    age.value = "";

    console.log(account);
    renderAccountList();
}
renderAccountList()
function renderAccountList() {
    const listDiv = document.querySelector('.list');
    if (account.length === 0) {
        listDiv.innerHTML = "<p>No hay usuarios registrados.</p>";
        return;
    }
    let table = `<table style="width:100%;border-collapse:collapse;">
        <thead>
            <tr>
                <th style="border:1px solid #ccc;padding:8px;">Nombre</th>
                <th style="border:1px solid #ccc;padding:8px;">Edad</th>
            </tr>
        </thead>
        <tbody>`;
    account.forEach(acc => {
        table += `<tr>
            <td style="border:1px solid #ccc;padding:8px;">${acc.name}</td>
            <td style="border:1px solid #ccc;padding:8px;">${acc.age}</td>
        </tr>`;
    });
    table += `</tbody></table>`;
    listDiv.innerHTML = table;
}