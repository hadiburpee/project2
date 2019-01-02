$(document).ready(function() {
    // Getting references to our form and input
    var signUpButton = $(".signup");
    var usernameInput = $("input#username-input");
    var passwordInput = $("input#password-input");
  
    // Check if emails match each other
    signUpButton.on("click", function(event) {
      // Replace all alerts with modals
    event.preventDefault();
      var adminData = {
        username: usernameInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
    //   if (!adminData.username || adminData.password) {
    //     return alert("Please don't leave fields blank");
    //   }
  
      // If we have an email and password, run the signUpAdmin function
      signUpAdmin(adminData.username, adminData.password);
      passwordInput.val("");
      usernameInput.val("");
    });
  
    // Does a post to the signup route. If succesful, we are redirected to the members page
    // Otherwise we log any errors
    function signUpAdmin(username, password) {
      $.post("/manage/signUp", {
        username: username,
        password: password
      }).then(function(data) {
        // if (data.duplicateUser) {
        //   // Replace with Modal
        //   alert("Sorry, that username has been taken");
        // } else {
          window.location = data.redirect;
        // }
      }).catch(function(err) {
        console.log(err);
      });
    }
  
  });