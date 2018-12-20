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
    var state = clientInfo.state;

    // console.log(clientInfo);

    addUser(clientInfo.firstName, clientInfo.secondName, clientInfo.email, clientInfo.state, clientInfo.transactions, clientInfo.sales);
    checkNexusRules(clientInfo.state, clientInfo.transactions, clientInfo.sales);

    firstNameInput.val("");
    secondNameInput.val("");
    emailInput.val("");
    stateInput.val("");
    transactionsInput.val("");
    salesInput.val("");

    });

    //adds user to database
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

    //logic to check nexus rules and see if user has a match
    function checkNexusRules(state, trans, sales){
        console.log("check nexu: " + state)
        
        $.ajax({
            method: "GET",
            url: "/client/rules/" + state 
        }).then(function(data){
        
            console.log(data);
            // if(data[0].state_name == null){
            //     console.log("Statea is not in Database: " + state);
            // }

            if(data[0].state_name === state){
                console.log("You have a match: " + state)
                console.log("Transaction Total in " + state + ": " + data[0].transaction)
                console.log("Sales Total in " + state + ": " + data[0].sales)

            }
            else{
                console.log("Statea is not in Database: " + state);
            }

            console.log("Compare Information");
        });
    }
});
