BookShelfApp = angular.module('BookShelfApp ', ['ngResource', 'ngRoute']);

BookShelfApp .factory('BookShelfFactory', function ($resource) {
    
return $resource('/books');
});
BookShelfApp .factory('BookShelfBookingsFactory', function ($resource) {
   
 return $resource('/wishlist');
});