let name = document.getElementById("username");
let age = document.getElementById("age");
let account = [];

function login() {
    account.push({
        name: name.value,
        age: age.value
    });

    console.log(account);
}