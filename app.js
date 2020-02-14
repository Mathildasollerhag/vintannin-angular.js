var app = angular.module("demoApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/home.html",
        controller: "defaultController" 
    })
})

app.controller("defaultController", function($scope) {
    $scope.testamonials = [
        { image: "p-img.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet.....Lorem ipsum dolor sit amet....." },
        { image: "p-img.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet.....Lorem ipsum dolor sit amet....." },
        { image: "p-img.png", title: "Lorem Ipsum", text: "Lorem ipsum dolor sit amet.....Lorem ipsum dolor sit amet....." },
    ]
})


// DIRECTIVES = Partial Views
app.directive("appheader", function() {
    return {
        template: '<header class="nav-color font-1 p-3"> <nav class="navbar-expand-lg navbar-light bg-light nav-color"> <div class="container d-flex justify-content-around"> <div><a href="#"><img class="logotype" src="/logo/logotype.png" alt="Vintannin.logo"></a></div><div class="d-flex flex-wrap align-content-center"> <a class="navbar-brand nav-size" href="#!hem">HEM</a> <a class="navbar-brand nav-size" href="#!privatimport">PRIVATIMPORT</a> <a class="navbar-brand nav-size" href="#!nyheter">NYHETER</a> <a class="navbar-brand nav-size" href="#!kontakt">KONTAKT</a> </div></div></nav> </header>'
    }
})
app.directive("appfooter", function() {
    return {
        template: ' <footer class="nav-color font-2 pt-5 pb-3"> <div class="d-flex justify-content-around"> <ul> <li> <a href="#!hem">Hem</a> </li><li> <a href="#!privatimport">Privatimport</a> </li><li> <a href="#!nyheter">Nyheter</a> </li><li> <a href="#!kontakt">Kontakt</a> </li></ul> <div class="d-flex"> <ul class="mr-3"> <li> <a href="#"><i class="fab fa-instagram"></i></a> </li><li> <a href="#"><i class="fab fa-facebook"></i></a> </li></ul> <div> <img class="logo2" src="/logo/logotype.png" alt="Vintannin.logo"> <p class="copyright mt-2">&copy; 2020 Vintannin</p></div></div><div> <ul> <li> <span>Vintannin Västerås AB</span> </li><li> <span>Stora gatan 2 B</span> </li><li> <span>721 20 Västerås</span> </li><li> <span>hej@vintannin.se</span> </li></ul> </div></div></footer>'
    }
})