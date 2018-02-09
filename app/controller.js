angular.module('myApp').controller('controller', function($scope, service){ //SIM 4 46C, 46D, 46E
    $scope.questions = service.questions(); //SIM 4 46F, 50C
})