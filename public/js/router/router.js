BookShelfApp .config(function ($routeProvider) {
    
$routeProvider
     
   .when('/', {
            templateUrl: 'tmpl/home.html',
            controller: 'BookShelfController'
        })
.when('/book/:id', {
            templateUrl: 'tmpl/book.html',
            controller: 'BookDetailsController'
        })
.when('/wishlist', {
            templateUrl: 'tmpl/wishlist.html',
            controller: 'WishlistController'
        })
.when('/getbook/:id', {          templateUrl: 'tmpl/getbook.html',
            controller: 'AddBooksController'
        }
).otherwise({
            redirectTo: '/'
        
});

});