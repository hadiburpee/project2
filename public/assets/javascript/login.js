//JS to control login for admin
$(document).ready(function() {


var loginForm = $("form.login");
var usernameInput = $("input#username-input");
var passwordInput = $("input#password-input");

loginForm.on("submit", function(event){
    event.preventDefault();

    var adminData = {
        username: usernameInput.val().trim(),
        password: passwordInput.val().trim()
    };
    console.log(adminData);

    if (!adminData.username) {
        usernameInput.css("border", "solid 1px red");
        $("#username-feedback").text("Please enter a username");
        return;
    }
    if (!adminData.password) {
        passwordInput.css("border", "solid 1px red");
        $("#password-feedback").text("Please enter a password");
        return;
    }
        // If we have an email and password we run the loginUser function and clear the form
        loginAdmin(adminData.username, adminData.password);
        usernameInput.val("");
        passwordInput.val("");
    });


// loginUser does a post to our "api/login" route and if successful, redirects us the the members page
function loginAdmin(username, password) {
$.post("/manage/login", {
    username: username,
    password: password
    }).then(function(data) {
        window.location.replace(data);
    // If there's an error, log the error
        }).catch(function(err) {
            $("#password-feedback").text("Incorrect Username or Password");
        });
    }
});