$(document).ready(function() {
    //display current database rules
    displayRules();


    // Assign variable to submit button
    var addRuleButton = $('#addRule');
    var adminLogin = $('#adminLogin')
    var state = $('#state');
    var trans = $('#trans');
    var sales = $('#sales');
    var criteria = $('#both_criteria');
    
    // Assign variables to the form items

    // Create an event listener
    addRuleButton.on('click', function (event) {
        // event.preventDefault();
        console.log("Static JS Button Clicked");
        console.log("criteria: " + criteria)
        var newRuleInfo = {
            state: state.val().trim(),
            trans: trans.val().trim(),
            sales: sales.val().trim(),
            criteria: criteria.val().trim()
        }
    
        console.log("new rule info: " + newRuleInfo);
    
        addRule(newRuleInfo.state, newRuleInfo.trans, newRuleInfo.sales, newRuleInfo.criteria);
    
        state.val("");
        trans.val("");
        sales.val("");
        criteria.val("");
        });
    
        //post request to add rules
        function addRule(state, trans, sales, criteria) {
            $.post("/newRule", {
                state: state,
                trans: trans,
                sales: sales,
                criteria: criteria

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
                    var state = data[i].state_name;
                    var trans = data[i].transaction;
                    var sales = data[i].sales;
                    var criteria = data[i].both_criteria;
                    
                    $(".state").append("<br>" + state + "<br>");
                    $(".trans").append("<br>" + trans + "<br>");
                    $(".sales").append("<br>" + sales + "<br>");
                    $(".both_either").append("<br>" + criteria + "<br>");
                    
                }
            });
        }
    });
    