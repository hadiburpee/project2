$(document).ready(function() {
    //display current database rules
    displayRules();


    // Assign variable to submit button
    var addRuleButton = $('#addRule');
    
    // Assign variables to the form items
    var state = $('#state');
    var trans = $('#trans');
    var sales = $('#sales');
    
    
    
    // Create an event listener
    addRuleButton.on('click', function (event) {
        event.preventDefault();
        console.log("Static JS Button Clicked");
        var newRuleInfo = {
            state: state.val().trim(),
            trans: trans.val().trim(),
            sales: sales.val().trim()
        }
    
        console.log("new rule info: " + newRuleInfo);
    
        addRule(newRuleInfo.state, newRuleInfo.trans, newRuleInfo.sales);
    
        state.val("");
        trans.val("");
        sales.val("");

        });
    
        //post request to add rules
        function addRule(state, trans, sales) {
            $.post("/newRule", {
                state: state,
                trans: trans,
                sales: sales

            });
        };
        //get request to post all rules in database
        function displayRules(){
            $.ajax({
                method: "GET",
                url: "/manage/viewRules"
            }).then(function(data){
                console.log(data);
                for(i=0; i<data.length; i++){
                    var rule = "State: " + data[i].state_name + " " +
                    "Transactions: " + data[i].transaction + " " +
                    "Sales: " + data[i].sales + " ";
                    $(".rulesHere").append("<br>" + rule + "<br>");
                    
                }
            });
        }


    });
    