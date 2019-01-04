$(document).ready(function() {
    //display current database rules
    displayRules();


    // Assign variable to submit button
    var addRuleButton = $('#addRule');
    var state = $('#state');
    var trans = $('#trans');
    var sales = $('#sales');
    var criteria = $('#both_criteria');
    var updateRuleButton = $('#updateRule');
    
    // Assign variables to the form items

    // Create an event listener for adding rules
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
    
        if(noDoubleState(newRuleInfo.state) === false){
            console.log("rule already there");
            event.preventDefault();
            return alert("This state has already been added.  Please either use update rule button or choose another state to add");
        }
        else{
        addRule(newRuleInfo.state, newRuleInfo.trans, newRuleInfo.sales, newRuleInfo.criteria);
        }

        state.val("");
        trans.val("");
        sales.val("");
        criteria.val("");
        });

    // Create an event listener for updating rules
    updateRuleButton.on('click', function (event) {
        // event.preventDefault();
        console.log("Static JS Button Clicked");
        console.log("criteria: " + criteria)
        var updateRuleInfo = {
            state: state.val().trim(),
            trans: trans.val().trim(),
            sales: sales.val().trim(),
            criteria: criteria.val().trim()
        }
    
        console.log(updateRuleInfo);

        console.log("Update rule info: " + updateRuleInfo);
    
        updateRule(updateRuleInfo.state, updateRuleInfo.trans, updateRuleInfo.sales, updateRuleInfo.criteria);
    
        state.val("");
        trans.val("");
        sales.val("");
        criteria.val("");
        });


    //====FUNCTIONS==========

        //post request to add rules
        function addRule(state, trans, sales, criteria) {
            
            
            
            $.post("/newRule", {
                state: state,
                trans: trans,
                sales: sales,
                criteria: criteria

            });
        };

        //post request to add rules
        function updateRule(state, trans, sales, criteria) {
            console.log("Update rule: " + state);
            
            $.ajax({
                method: "PUT",
                url: "/updateRule",
                data: {
                    state: state,
                    trans: trans,
                    sales: sales,
                    criteria: criteria
                }
            }).then(function(getData){
                console.log(getData);

            })

            // $.put("/updateRule", {
            //     state: state,
            //     trans: trans,
            //     sales: sales,
            //     criteria: criteria
            // });
        };

        //get request to post all rules in database
        function displayRules(){
            $.ajax({
                method: "GET",
                url: "/manage/viewRules"
            }).then(function(data){
                console.log("Data: " + data);
                for (i = 0; i < data.length; i++) {

                    var state = data[i].state_name;
                    //need to either return state or verify it here.
                    var stateCheck = stateCheck;
                    var trans = data[i].transaction;
                    var sales = data[i].sales;
                    var criteria = data[i].both_criteria;

                    var rulesData = $("<tr>");
                    rulesData.addClass("rulesData");
                    rulesData.attr("id", "rulesRow" + i);

                    $("#tableTitles").append(rulesData);
                    
                    $(rulesData).append("<td>" + state + "</td>");
                    $(rulesData).append("<td>" + trans + "</td>");
                    $(rulesData).append("<td>" + sales + "</td>");
                    $(rulesData).append("<td>" + criteria + "</td>");
    
                }
            });
        }

        //make sure states cant be added twice
        function noDoubleState(state){
            $.ajax({
                method: "GET",
                url: "/manage/viewRules"
            }).then(function(data){
                for(i = 0; i< data.length; i++)
                    if(state === data[i].state_name){
                        return false;
                    }
                    else{
                        return true;
                    }
            });
        }

    });
    