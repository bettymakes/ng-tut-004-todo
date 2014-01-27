var app = angular.module("toDoApp", []);

//Creating the 'MainCtrl' controller for the 'toDoApp'
app.controller('MainCtrl', function($scope){

//Region Initialization
  //Creating an array to hold all the tasks
  $scope.toDoList = [];
  $scope.newTask = {
    title: '',
    description: '',
    status: {
      name: 'none',
      value: 0
    },
    complete: false
  }

//Region Objects
  $scope.status = [
    {name: 'high', value: 1},
    {name: 'medium', value: 2},
    {name: 'low', value: 3},
  ];


//Region Functions
  //Creating new empty task with predefine default values
  $scope.emptyTask = function(){
    $scope.newTask = {
      title : '',
      description: '',
      status: {name: 'none', value: 0},
      complete: false
    };
  };

  //addTask Fn adds a new task to the masterList array
  $scope.addTask = function(obj){

    if(obj === undefined || obj.title === '' || obj.description === ''){
      return false;
    }

    $scope.toDoList.push(obj);

    //After newTask is pushed to the array, reset input to blank
    $scope.emptyTask();
  };

//Region window API
  //Creating an API on the window
  window.toDo = {};

  window.toDo.list = $scope.toDoList;
});