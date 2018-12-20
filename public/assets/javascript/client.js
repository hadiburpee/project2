$(document).ready(function() {

// Assign variable to submit button
var addClientButton = $('#addCLient');

// Assign variables to the form items
var firstNameInput = $('#first-name');
var secondNameInput = $('#second-name');
var emailInput = $('#email-input');
var stateInput = $('#state-selector');
var transactionsInput = $('#transaction-input');
var salesInput = $('#sales-input');


// Create an event listener
addClientButton.on('click', function (event) {
    event.preventDefault();

    var clientInfo = {
        firstName: firstNameInput.val().trim(),
        secondName: secondNameInput.val().trim(),
        email: emailInput.val().trim(),
        state: stateInput.val().trim(),
        transactions: transactionsInput.val().trim(),
        sales: salesInput.val().trim()
    }

    console.log(clientInfo);

    addUser(clientInfo.firstName, clientInfo.secondName, clientInfo.email, clientInfo.state, clientInfo.transactions, clientInfo.sales);

    firstNameInput.val("");
    secondNameInput.val("");
    emailInput.val("");
    stateInput.val("");
    transactionsInput.val("");
    salesInput.val("");

    });


    function addUser(firstName, secondName, email, state, trans, sales) {
        $.post("/client/addUser", {
            firstName: firstName,
            secondName: secondName,
            email: email,
            state: state,
            trans: trans,
            sales: sales
        });
    };
});
