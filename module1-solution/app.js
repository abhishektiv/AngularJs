(function(){
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){

	$scope.message = "This is the message";
	$scope.dishes = "";
	$scope.ProcessThis = function(){
		var dish = $scope.dishes
		if (dish == ''){
			$scope.message = "Please enter data first";
		}

		else{
		var qty = dish.split(',');



		if (qty.length > 3 ){

			$scope.message = "Too much!";

		}else{
			$scope.message = "Enjoy!";
		}
	}
		
	}
}


})();

