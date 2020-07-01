(function(){

'use strict';

// dummy data
var shoppingList = [
  {
    name: "Milk",
    quantity: "2"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
  	name: "Noodles",
  	quantity: "4"
  }
];

//app declarations

var myApp = angular.module('ShoppingListCheckOff', []);
myApp.controller('ToBuyController', ToBuyController);
myApp.controller('AlreadyBoughtController', AlreadyBoughtController);
myApp.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


//service injections

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
ToBuyController.$inject = ['ShoppingListCheckOffService'];


//first controller definition
function ToBuyController(ShoppingListCheckOffService){
	var toBuy = this;
	toBuy.list = ShoppingListCheckOffService.getToBuy();
	
	

	toBuy.push = function(index){
		
		ShoppingListCheckOffService.shift(index);
		if(!toBuy.list){
			toBuy.message = "Everything is bought!";
		}
		else{
			toBuy.message = "";
		}

	};


}


//second controller definition
function AlreadyBoughtController(ShoppingListCheckOffService){
	var bought = this;
	bought.list = ShoppingListCheckOffService.getBought();
	
	bought.message = "Nothing bought yet";
	

}


//service 
function ShoppingListCheckOffService(){

		var service = this ;

		var to_buy = shoppingList;
		var bought = [];

		service.getToBuy = function(){
			return to_buy;
		};

		service.getBought = function(){
			return bought;
		};

		

		service.shift = function(index){

			
		     	bought.push(to_buy[index]);
				
				to_buy.splice(index,1);
		  
			
			


		}

	}

})();