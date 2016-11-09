var app = angular.module("demoapp",['ngRoute','ui.bootstrap']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
            templateUrl: 'orders.html',
            controller: 'ordersController'
      }).
      when('/stores', {
            templateUrl: 'orderstores.html',
            controller: 'orderstoresController'
      }).
      otherwise({
            redirectTo: '/'
      });
}]);

app.controller('ordersController', function($scope) {
    $scope.items = [
    'The first choice!',
    'And another choice for you.',
    'but wait! A third!'
  ];

  $scope.status = {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };    
});

app.controller('orderstoresController', function($scope) { 
    $scope.countries = [
                {name: 'Afghanistan', code: 'AF'},
                {name: 'Aland Islands', code: 'AX'},
                {name: 'Albania', code: 'AL'},
                {name: 'Algeria', code: 'DZ'},
                {name: 'American Samoa', code: 'AS'},
                {name: 'AndorrA', code: 'AD'},
                {name: 'Angola', code: 'AO'},
                {name: 'Anguilla', code: 'AI'},
                {name: 'Antarctica', code: 'AQ'},
                {name: 'Antigua and Barbuda', code: 'AG'},
                {name: 'Argentina', code: 'AR'},
                {name: 'Armenia', code: 'AM'},
                {name: 'Aruba', code: 'AW'}
            ];

    $scope.countryName = undefined;
});

