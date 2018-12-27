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
        var custTrans = trans;
        var custSales = sales;

        $.ajax({
            method: "GET",
            url: "/client/rules/" + state 
        }).then(function(data){
        
            console.log(data);

            //if state is a match for a state in the db, compare the sales and transaction numbers
            if(data[0].state_name === state){
                $(".clientResults").append(compareRules(state, data[0].transaction, data[0].sales, custTrans, custSales));
                
                //old console log testing for data returned from database
                // console.log("You have a match: " + state)
                // console.log("Transaction Total in " + state + ": " + data[0].transaction)
                // console.log("Sales Total in " + state + ": " + data[0].sales)
            }
            else{
                $(".clientResults").append("State may not have economic nexus standards: " + state + "Please contact: XXXXX");
            }
            $(".clientResults").val("");
        });
    }

    //function to compare rules
    function compareRules(state, dbTrans, dbSales, custTrans, custSales){
        if(dbTrans < custTrans || dbSales < custSales){
            return "You may need to register for sales and use tax in: " + state + ".  Please contact: XXXXXXX";
        }
        else{
            return "You have not crossed the threshold to collect sales and use tax in: " + state;
        }
    }

});
