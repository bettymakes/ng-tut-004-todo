var app = angular.module("toDoApp", []);

//Creating the 'MainCtrl' controller for the 'toDoApp'
app.controller('MainCtrl', function($scope){

//Region Initialization
  //Creating an array to hold all the tasks
  $scope.masterList = [];


//Region Functions
  //addTask Fn adds a new task to the masterList array
  $scope.addTask = function(obj){

    if(obj === undefined){
      return false;
    }

    $scope.masterList.push(obj);
    $scope.newTask = '';
  };
});