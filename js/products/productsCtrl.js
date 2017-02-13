angular.module('miniRouting').controller('productsCtrl', function($scope, $stateParams, productsService) {
    if ($stateParams.id === 'shoes'){
     $scope.prouctData=productsService.shoeData;
     
    }
     else if ($stateParams.id ==='socks'){
        $scope.prouctData=productsService.sockData;
    }
})