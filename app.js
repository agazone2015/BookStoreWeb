var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function($routeProvider) {
    $routeProvider
        .when("/books", {
            templateUrl: "partials/book-list.html",
            controller: "BookListCtrl"
        })
        .when("/kart", {
            templateUrl: "partials/kart-list.html",
            controller: "KartListCtrl"
        })
        .otherwise({
            redirectTo: "/books"
        });
});

myApp.factory("kartService", function() {
    var kart = [];

    return {
        getKart: function() {
            return kart;
        },
        addToKart: function(book) {
            kart.push(book);
        },
        buy: function(book) {
            alert("Thanks for buying: " + book.name);
        }
    }
});

myApp.factory("bookService", function() {
    var books = [{
        imgUrl: "book1.jpg",
        name: "AngularJS Essentials",
        price: 55,
        rating: 6,
        binding: "PDF",
        publisher: "Random House India",
        releaseDate: "12-08-2014",
        details: "Linda, in her thirties, begins to question the routine and predictability of her days. In everybodys eyes, she has a perfect life-happy marriage, children and a career. Yet what she feels is an eno... <a href='#'>View More<a>"
    }, {
        imgUrl: "book2.jpg",
        name: "AngularJS",
        price: 68,
        rating: 4,
        binding: "Paperback",
        publisher: "Scholastic",
        releaseDate: "01-07-2014",
        details: "Geronimo Stilton meets outer space in this cosmically fun spin-off series!Meet Geronimo StiltonixHe is a spacemouse - the Geronimo Stilton of a parallel universe! He is captain of the spaceship Mou... View More"
    }, {
        imgUrl: "book3.jpg",
        name: "JavaScript The Good Parts",
        price: 39,
        rating: 6,
        binding: "Paperback",
        publisher: "Hachette India",
        releaseDate: "01-04-2014",
        details: "Why would a man escape from prison the day before he's due to be released? Audie Palmer has spent a decade in prison for an armed robbery in which four people died, including two of his gang. Five... View More"
    }, {
        imgUrl: "book4.jpg",
        name: "Jasmine JavaScript Testing",
        price: 99,
        rating: 5,
        binding: "Hardcover",
        publisher: "Hodder & Stoughton",
        releaseDate: "01-08-2014",
        details: "I knew that if I agreed to write my story, I would have to be completely honest, as thats the way I have always played the game and that would mean talking about a number of things I have not addr... View More"
    }, {
        imgUrl: "book5.jpg",
        name: "Unit Testing",
        price: 27,
        rating: 4.5,
        binding: "PDF",
        publisher: "Penguin Books Ltd",
        releaseDate: "25-01-2013",
        details: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist n... View More"
    }, {
        imgUrl: "book4.jpg",
        name: "Jasmine JavaScript Testing version 2",
        price: 124,
        rating: 5,
        binding: "Paperback",
        publisher: "Universities Press",
        releaseDate: "25-08-2000",
        details: "Wings of Fire traces the life and times of India's former president A.P.J. Abdul Kalam. It gives a glimpse of his childhood as well as his growth as India's Missile Man. Summary of the Book Wings... View More"
    }];

    return {
        getBooks: function() {
            return books;
        },
        addToKart: function(book) {

        }
    }
});

myApp.controller("KartListCtrl", function($scope, kartService) {
    $scope.kart = kartService.getKart();

    $scope.buy = function(book) {
        //console.log("book: ", book);
        kartService.buy(book);
    }
});

myApp.controller("HeaderCtrl", function($scope, $location) {
    $scope.appDetails = {};
    $scope.appDetails.title = "BooKart";
    $scope.appDetails.tagline = "At the moment we have collection of 20 books";

    $scope.nav = {};
    $scope.nav.isActive = function(path) {
        if (path === $location.path()) {
            return true;
        }

        return false;
    }
});

myApp.controller("BookListCtrl", function($scope, bookService, kartService) {
    $scope.books = bookService.getBooks();

    $scope.addToKart = function(book) {
        kartService.addToKart(book);
    }
});