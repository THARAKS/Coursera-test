(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
    $scope.flag = false;
  $scope.splitString = function (stringToSplit) {
    var separator = ',';
    var arrayOfStrings = stringToSplit.split(separator,-1);
var isEmpty = hasEmptyValues(arrayOfStrings);
function hasEmptyValues(arr) {
  for(var i=0; i<arr.length; i++) {
  if(arr[i] === "") return true;
}
return false;
}
if(isEmpty)
{
    $scope.message=" We do NOT consider  empty item, i.e., , , as an item towards to the count";
}
else{
    if(arrayOfStrings.length<=3)
    {
    $scope.message="Enjoy!";
    $scope.flag = true;
    }
    else{
    $scope.message="Too much!";
    $scope.flag = true;
    }


}

  };




}



})();
