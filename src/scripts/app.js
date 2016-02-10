var app = angular.module("app", ['ngRoute']);

app.config(function ($routeProvider){

 	$routeProvider
 		.when('/', {
     		templateUrl:'scripts/views/home.html',
     		controller: 'listController'
  		})
  		.when('/contact/new', {
   	 		templateUrl: 'scripts/views/newContact.html',
     		controller: 'contactController'
  		})
 		.when('/contact/:id', {
   	 		templateUrl: 'scripts/views/showContact.html',
     		controller: 'contactController'
  		})
  		.when('/contact/edit/:id', {
   	 		templateUrl: 'scripts/views/editContact.html',
     		controller: 'contactController'
  		})  		
	  	.otherwise ({
	     	templateUrl:'scripts/views/home.html'
	  	});

});

app.controller("listController", ['$scope','$routeParams','$location','$window', function($scope,$routeParams,$location,$window){
	$scope.contacts = contactsList;
}]);

app.controller("contactController", ['$scope','$routeParams','$location','$window', function($scope,$routeParams,$location,$window){
	$scope.contacts = contactsList;
	$scope.contact = $scope.contacts[$routeParams.id];
	$scope.showContact = function(id){
		$scope.contact = $scope.contacts[id]; //$scope.contacts[$routeParams.id] || 
	};
	$scope.editarContact = function(contact){
		$scope.contacts[getPosition(contact.id)] = contact;
		$location.url('/#');
	};
	$scope.deleteContact = function(id){
		if(confirm("Are you sure?")){
			$scope.contacts.splice(getPosition(id),1);
			$location.url('/#');
			//$location.path('/');
		    //$scope.$apply();
			//$window.location.href = '/home.html/';
			//$window.location.href= "#/home.html";
		}
	};
	$scope.saveContact = function(contact){
		$scope.contacts.push(contact);
		$location.url('/#');
	};

	getPosition = function(id){
		for(var i = 0; i < $scope.contacts.length; i++) {

		    if($scope.contacts[i].id == id) {
		        return i;
		    }
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