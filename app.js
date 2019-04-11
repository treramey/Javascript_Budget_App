 
 
 
 //BUDGET CONTROLLER
 
 
 var budgetController = (function(){
    var Expense = function(id,discription,value){
        this.id= id;
        this.descripttion = discription;
        this.value = value;
    };

    var Income = function(id,discription,value){
        this.id= id;
        this.descripttion = discription;
        this.value = value;
    };

    
    var data = {
       allItems:{
           exp:[],
           inc:[]
       },
       totals:{
           exp:0,
           inc:0
       }
    };

    return{
        addItem: function(type, des, val){
            var newItem, ID;

            ID= data.allItems[type][data.allItems[type].length - 1]

            if (type === 'exp'){
                newItem= new Expense(ID, des, val);
            }else if (type === 'inc'){
                newItem= new Income(ID, des, val);
            }

            data.allItems[type].push(newItem);
            return newItem;

            

        }
    };

 })();


// UI CONTROLLER
 var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'

    };

    return{
        getInput: function(){
            return{ 
                type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
                descripttion:document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },

        getDOMstrings: function(){
            return DOMstrings;
        }
    };



 })();

// GLOBAL APP CONTROLLER
 var controller = (function(budgetCtrl,UICtrl){

    var setupEventListeners = function(){
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress',function(event){
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        });
     };

    var ctrlAddItem =function() {

      // get the filed input data
      var input = UICtrl.getInput();

        // add the item to the budget controller

        // add the item to the UI

        // callculate the budget 

        // display the budget on the UI  
    };

    return{
        init:function(){
            console.log('App has started');
            setupEventListeners();
        }
    };


 })(budgetController,UIController);


 controller.init();