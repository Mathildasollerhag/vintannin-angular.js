var app = angular.module("demoApp", ["ngRoute"])

app.config(function($routeProvider) {
    $routeProvider
    .when("/", { 
        templateUrl: "views/hem.html",
        controller: "defaultController" 
    })
    .when("/privatimport", { 
        templateUrl: "views/privatimport.html",
        controller: "defaultController" 
    })
    .when("/nyheter", { 
        templateUrl: "views/nyheter.html",
        controller: "defaultController" 
    })
    .when("/kontakt", { 
        templateUrl: "views/kontakt.html",
        controller: "defaultController" 
    })
})

app.controller("defaultController", function($scope) {
    $scope.hem = [
        { image: "xIMG_7462.jpg" }
    ]
    $scope.privatimport = [
        { image: "IMG_7616.jpg", firstTitle: "Folklore", secondTitle: "Nr 6263", text: "Fruktig, mycket frisk smak med inslag av ananas, päron, mineral och limeskal. Serveras vid 8-10°C till rätter av fisk eller skaldjur.", price: "99:-" },
        { image: "IMG_7531.jpg", firstTitle: "Rkatsiteli Qvevri", secondTitle: "Nr 2195", text: "Nyanserad, något kryddig smak med liten strävhet, inslag av vinteräpplen, torkade aprikoser, honung, nötter och vitpeppar.", price: "118:-" },
        { image: "IMG_7597.jpg", firstTitle: "Meinklang", secondTitle: "Nr 75093", text: "Inbjudande doft med inslag av jordgubbar, körsbär, hallon, örter och fat. Vinet är nyanserat och balanserat med frisk syra och ett långt elegant avslut.", price: "129:-" },
        { image: "IMG_7607.jpg", firstTitle: "Stassen", secondTitle: "Nr 82091", text: "Fruktig smak med sötma och tydlig karaktär av äpplen, inslag av smultron, kryddor och blodgrapefrukt. Serveras vid 8-10°C.", price: "59:90:-" },
        { image: "IMG_7540.jpg", firstTitle: "Santa Cruz de Coya", secondTitle: "Nr 95430", text: "Bärig, kryddig, nyanserad smak med inslag av jordgubbar, lingon, blodgrapefrukt, örter, vitpeppar och körsbär.", price: "179:-" },
        { image: "IMG_7514.jpg", firstTitle: "Aphros Phaunus Pet Nat", secondTitle: "Nr 92511", text: "Nyanserad och ungdomlig smak med inslag av gröna äpplen, vita blommor, päron och citronskal. Serveras vid 8-10°C.", price: "229:-" },
        { image: "IMG_7567.jpg", firstTitle: "Calcarius Rosso Puglia", secondTitle: "Nr 77366", text: "Spontan jäsning i öppna glasfibertankar utan temperaturkontroll med fyra dagars skalmaceration.", price: "260:-" },
        { image: "IMG_7554.jpg", firstTitle: "Calcarius Rosa Puglia", secondTitle: "Nr 77367", text: "Spontan jäsning med skalmaceration i små öppna tankar utan temperaturkontroll. Kort lagring i ståltank.", price: "260:-" },
        { image: "IMG_7576.jpg", firstTitle: "Calcarius Orange Puglia", secondTitle: "Nr 77368", text: "Direkt pressning. Spontan jäsning och kort lagring i ståltank.", price: "260:-" },
        { image: "xIMG_7467.jpg", firstTitle: "Vin & Natur Calcarius", secondTitle: "Nr 77369", text: "Vinlåda innehållande Calcarius Rosso, Rosa och Orange (3 x 1 liter). Vinerna från Calcarius är lätta och saftiga.", price: "777:-" }
    ]
    $scope.nyheter = [
        { title: "Rött eller vitt? -Orange, tack!", text: "Beroende på druvsort och hur länge man väljer att jäsa, desto mörkare blir färgen. Ofta väljer man dessutom att lagra vinet en längre tid på amforor eller andra lerkrus som också kan förstärka färgen och ge vinet en karaktäristisk nötighet. Denna metod kan spåras tillbaka till Kaukasus. Den har nyligen fått ett uppsving bland småskaliga vinproducenter, bland annat i Kroatien, Georgien och i den italienska regionen Friuli-Venezia-Giulia men även blivit populär bland vinmakare i andra delar av världen. För att göra orange vin använder man gröna druvsorter som ofta är lokala för regionen. Tack vare lång kontakt med druvskalen blir vinet mörkare än ”vanliga” vitviner och beroende på mognad och utveckling varierar färgen från mörkt gul till orange.", image: "22795699.png" },
        { title: "Vintipset", text: "Varje vecka tipsar vi om ett gott vin, och vilken mat som passar till. Oavsett om du föredrar rött, vitt eller rosé så finns det något för varje smaklök! Fruktig, mycket frisk smak med liten sötma, inslag av päron, honung, ananas och lime. Serveras vid 8-10°C till rätter av fisk och skaldjur. Säljstart 2012-02-06. Alkoholhalt 12 %. Färg: Ljusgul färg med grön nyans. Doft: Fruktig doft med inslag av päron, lime, ananas, liljekonvalj och mineral. Råvaror: Riesling. Sockerhalt 13 g/l Övrigt: Riesling kommer i många skepnader. Från knastertorra viner från exempelvis Alsace och Australien till honungssöta trockenbeerenauslese från Tyskland och Österrike.", image: "635382.png" },
        { title: "Nytt på hyllorna", text: "Våren bjuder på vinnyheter som både valts och kvalat in i Systembolagets fasta sortiment. Vi har plockat ut elva goda uppstickare. Belleruche Côtes-du-Rhône Chapoutier 2018 Frankrike 119 kr. Nr 75764. Ny årgång med toppbetyg! Dehesa La Granja 2012 Spanien 129 kr. Nr 4505.Masi Campofiorin 2016 Italien 129 kr. Nr 5123.Finca Negra Reserva Especial 2018 Chile 119 kr. Nr 2704.Lat 42 Rioja Gran Reserva 2011 Spanien 129 kr. Nr 12679. Stellenbosch Reserve Vanderstel 2018 Sydafrika 139 kr. Nr 4638. Ny topp-årgång! Pure Nr 92668. Komplex, kryddig smak med fatkaraktär, inslag av mogna jordgubbar, sandelträ, granatäpplen, muskot, choklad, färska örter och vanilj. Pris: 395:-", image: "24395187.png" },
    ]
    $scope.kontakt = [
        { title: "Kontakta oss", email: "hej@vintannin.se", phone: "+46736490884", name: "Vintannin Västerås AB", address:"Stora gatan 2 B", postal: "721 20 Västerås" }
    ]
})


app.directive("appheader", function() {
    return {
        template: '<header class="nav-color font-1 p-3"> <nav class="navbar-expand-lg navbar-light bg-light nav-color"> <div class="container d-flex justify-content-around"> <div><a href="#/!hem"><img class="logotype" src="/logo/logotype.png" alt="Vintannin.logo"></a></div><div class="d-flex flex-wrap align-content-center"> <a class="navbar-brand nav-size" href="#/!hem">HEM</a> <a class="navbar-brand nav-size" href="#!privatimport">PRIVATIMPORT</a> <a class="navbar-brand nav-size" href="#!nyheter">NYHETER</a> <a class="navbar-brand nav-size" href="#!kontakt">KONTAKT</a> </div></div></nav> </header>'
    }
})
app.directive("appfooter", function() {
    return {
        template: '<footer class="nav-color font-2 pt-5 pb-3"> <div class="d-flex justify-content-around"> <ul> <li> <a href="#!hem">Hem</a> </li><li> <a href="#!privatimport">Privatimport</a> </li><li> <a href="#!nyheter">Nyheter</a> </li><li> <a href="#!kontakt">Kontakt</a> </li></ul> <div class="d-flex"> <ul class="mr-3"> <li> <a href="#"><i class="fab fa-instagram"></i></a> </li><li> <a href="#"><i class="fab fa-facebook"></i></a> </li></ul> <div> <img class="logo2" src="/logo/logotype.png" alt="Vintannin.logo"> <p class="copyright mt-2">&copy; 2020 Vintannin</p></div></div><div> <ul> <li> <span>Vintannin Västerås AB</span> </li><li> <span>Stora gatan 2 B</span> </li><li> <span>721 20 Västerås</span> </li><li> <span>hej@vintannin.se</span> </li></ul> </div></div></footer>'
    }
})