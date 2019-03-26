 
 
 
 //BUDGET CONTROLLER
 
 
 var budgetController = (function(){
 
 })();

// UI CONTROLLER
 var UIController = (function(){




 })();

// GLOBAL APP CONTROLLER
 var controller = (function(budgetCtrl,UICtrl){

    var ctrlAddItem =(){
      // get the filed input data

        // add the item to the budget controller

        // add the item to the UI

        // callculate the budget 

        // display the budget on the UI  
    };

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress',function(event){
        if (event.keyCode === 13 || event.which === 13){
            ctrlAddItem();
        }
    });


 })(budgetController,UIController);