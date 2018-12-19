$(document).ready(function() {

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
    
    
        function addRule(state, trans, sales) {
            $.post("/newRule", {
                state: state,
                trans: trans,
                sales: sales

            });
        };
    });
    