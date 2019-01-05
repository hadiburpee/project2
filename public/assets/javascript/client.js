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
var emailFeedback = $("#email-feedback");
var emailTest = null;

// Create an event listener
addClientButton.on('click', function (event) {
  
    if (!emailTest) {
        alert("Please enter a valid email address");
    }

    else {
    //empty modal to remove prior searches, if same user wants to test more than one state
    $(".clientResults").empty();
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
    emailFeedback.text("");
   
        }
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
            //data length 0 means no match
            if(data.length === 0){
                // $(".clientResults").append(noMatch());
                $(".clientResults").append(state + " may not have economic nexus standards, please contact XXXXX");
            }
            
            //if state is a match for a state in the db, compare the sales and transaction numbers
            else if(data[0].state_name === state){
                $(".clientResults").append(compareRules(state, data[0].transaction, data[0].sales, data[0].both_criteria, custTrans, custSales));
            }
            else{
                console.log("Else for no match 2");
                
            }
            
        });
    }

    //function to compare rules
    function compareRules(state, dbTrans, dbSales, dbCriteria, custTrans, custSales){
        console.log(dbCriteria);
        if(dbCriteria === "either"){
            if(dbTrans < custTrans || dbSales < custSales){
                return "You may need to register for sales and use tax in: " + state + ".  Please contact: XXXXXXX";
            }
            else{
                return "You have not crossed the threshold to collect sales and use tax in: " + state;
            }
        }
        else if(dbCriteria === "both"){
            if(dbTrans < custTrans && dbSales < custSales){
                return "You may need to register for sales and use tax in: " + state + ".  Please contact: XXXXXXX";
            }
            else{
                return "You have not crossed the threshold to collect sales and use tax in: " + state;
            }
        }
        else{
            return "You may not have economic nexus";
        }   
        
    }

    function noMatch(){
        return "State may not have economic nexus standards: " + state + "Please contact: XXXXX"
    }




        // Live email validation
        emailRegEx = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        emailInput.bind('input propertychange', function() {
            if (!emailRegEx.test($(this).val()))  {
                $("#email-form").removeClass("has-success");
                $("#email-form").addClass("has-error");
                emailFeedback.text("Invalid Email");
                emailTest = false;
            } 
            else {
                $("#email-form").removeClass("has-error");
                $("#email-form").addClass("has-success");
                emailFeedback.text("Valid Email!");
                emailTest = true;
            }
        });

});
