var app = angular.module("app", ['ngRoute']);

app.config(['$routeProvider', function ($routeProvider){

 	$routeProvider.
 		when('/', {
     		templateUrl:'scripts/views/home.html',
     		controller: 'listController'
  		})
 		.when('/contact/:id', {
   	 		templateUrl: 'scripts/views/showContact.html',
     		controller: 'contactController'
  		})
	  	.otherwise ({
	     	templateUrl:'scripts/views/home.html'
	  	});

}]);

app.controller("listController", ['$scope','$routeParams','$location','$window', function($scope,$routeParams,$location,$window){
	$scope.contacts = contactsList;
}]);

app.controller("contactController", ['$scope','$routeParams','$location','$window', function($scope,$routeParams,$location,$window){
	$scope.contacts = contactsList;
	$scope.contact = $scope.contacts[$routeParams.id];
	$scope.showContact = function(id){
		$scope.contact = $scope.contacts[id]; //$scope.contacts[$routeParams.id] || 
	};
	$scope.editarContact = function(){

	};
	$scope.deleteContact = function(id){
		if(confirm("Are you sure?")){
			$scope.contacts.splice(id-1,1);
			//$location.url('/#home.html/');
			//$location.path('//');
			window.location = "#/";
		    //$scope.$apply();
			//$window.location.href = '/home.html/';
			//$window.location.href= "#/home.html";
		}
	};
}]);

var contactsList = [
	{
		id:0,
		name:"George",
		email:"gg@gmail.com",
		phone:"1234",
		notes:"test george"
	},
	{
		id:1,
		name:"Anu",
		email:"aa@aa.com",
		phone:"456",
		notes:"test anu"
	},
	{
		id:2,
		name:"Lewis",
		email:"ll@ll.com",
		phone:"789",
		notes:"test lewis"
	},
];