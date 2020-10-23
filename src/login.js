import { success, faile } from './alert';

var login = function() {
    
    const username = document.querySelector("#username-field").value;
    const password = document.querySelector("#password-field").value;

    return username === 'user' && password === '##OOXX'
}

const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", function(e) {
    e.preventDefault();
    if(login()) {
        success();
        location.reload();
    } else {
        faile();
        loginErrorMsg.style.opacity = 1;
    }
})
