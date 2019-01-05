$(document).ready(function() {
    //display current database rules
    displayRules();
    getClientData();


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
                    var trans = data[i].transaction;
                    var sales = data[i].sales;
                    var criteria = data[i].both_criteria;

                    var rulesData = $("<tr>");
                    rulesData.addClass("rulesData");
                    rulesData.attr("id", "rulesRow" + i);
                    

                    $("#tableBody").append(rulesData);
                    
                    $(rulesData).append("<td class='tdRules'>" + state + "</td>");
                    $(rulesData).append("<td class='tdRules'>" + trans + "</td>");
                    $(rulesData).append("<td class='tdRules'>" + sales + "</td>");
                    $(rulesData).append("<td class='tdRules'>" + criteria + "</td>");
    
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

        //get request for client data
        function getClientData(){
            $.ajax({
                method: "GET",
                url: "/manage/viewClients"
            }).then(function(data){
                for(i=0; i<data.length; i++){
                    var first = data[i].firstName;
                    var last = data[i].secondName;
                    var email = data[i].email;
                    var trans = data[i].trans;
                    var sales = data[i].sales;
                    var state = data[i].state;


                    var clientData = $("<tr>");
                    clientData.addClass("clientData");
                    clientData.attr("id", "clientRow" + i);

                    $("#tableBodyClient").append(clientData);
                    
                    $(clientData).append("<td class='tdClient'>" + first + "</td>");
                    $(clientData).append("<td class='tdClient'>" + last + "</td>");
                    $(clientData).append("<td class='tdClient'>" + trans + "</td>");
                    $(clientData).append("<td class='tdClient'>" + sales + "</td>");
                    $(clientData).append("<td class='tdClient'>" + state + "</td>");
                    $(clientData).append("<td class='tdClient'>" + email + "</td>");
                    
                }
            })
        }


        // Collapse Nexus rules table 
        var coll = $(".collapsible1");
        var i;

        for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.maxHeight){
            content.style.maxHeight = null;
            } else {
            content.style.maxHeight = content.scrollHeight + "px";
            } 
        });
        }

    });
    