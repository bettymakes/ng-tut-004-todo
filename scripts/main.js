var app = angular.module("toDoApp", []);

//Creating the 'MainCtrl' controller for the 'toDoApp'
app.controller('MainCtrl', function($scope){

//Region Initialization
  //Creating an array to hold all the tasks
  $scope.toDoList = [];


//Region Functions
  //addTask Fn adds a new task to the masterList array
  $scope.addTask = function(obj){

    if(obj === undefined || obj === ''){
      return false;
    }

    $scope.toDoList.push(obj);

    //After newTask is pushed to the array, reset input to blank
    $scope.newTask = '';
  };

//Region window API
  //Creating an API on the window
  window.toDo = {};
  
  window.toDo.list = $scope.toDoList;
});