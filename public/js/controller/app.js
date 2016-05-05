BookShelfApp .controller("BookShelfController", function ($scope,BookShelfFactory, $location) 
{
    
$scope.headerSrc = "tmpl/header.html";

   
 $scope.books= BookShelfFactory.query();

  
  $scope.currBook = null;

   
 $scope.getBookById = function (id) {
        
var books = $scope.books;
    
    for (var i = 0; i < books.length; i++) {
         
   var book = $scope.books[i];
           
 if (book.id == id) {
          
    $scope.currBook = book;
            
}
        }
    };

$scope.back = function () {
        
window.history.back();
   
 };

    
$scope.getCount = function (n) {
      
  return new Array(n);
    }

    
$scope.isActive = function (route) {
        
return route === $location.path();
    }

    
$scope.isActivePath = function (route) {
       
 return ($location.path()).indexOf(route) >= 0;
    }

});


BookShelfApp .controller("BookDetailsController", function ($scope, $routeParams) {
   
 $scope.getBookById($routeParams.id);
});
BookShelfApp .controller("AddBooksController", function ($scope, $http, $location, $routeParams) {
    $scope.getBookById($routeParams.id);
    
$scope.onlyNumbers = /^\d+$/;
   
 $scope.formData = {};
  
  $scope.formData.book_id = $scope.currBook.id;
    
$scope.formData.book_name = $scope.currBook.name;
   
 $scope.formData.date = "Today"


    $scope.processForm = function () {
       
 console.log($scope.formData);
        
$http({
            method: 'POST',
            url: '/book',
            data: $.param($scope.formData), // pass in data as strings
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            } // set the headers so angular passing info as form data (not request payload)
     
   })
          
  .success(function (data) {
               
 $location.path("/wishlist");
           
 });
    };
});

BookShelfApp.controller("WishlistController", function ($scope, BookShelfBookingsFactory) {
  
  $scope.wishlist = BookShelfBookingsFactory.query();
});