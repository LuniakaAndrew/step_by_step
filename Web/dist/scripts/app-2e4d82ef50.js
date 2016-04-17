(function(){angular.module("articleApp",["ui.router","ngRoute","ui.bootstrap","ngAnimate","ui.date"]).run(["$rootScope","$state","$stateParams","$timeout",function(t,e,a,r){return t.$state=e,t.$stateParams=a}]).config(["$routeProvider","$locationProvider","$stateProvider","$urlRouterProvider",function(t,e,a,r){return r.when("","/index"),r.otherwise(function(t,e){return e="404"}),a.state("404",{url:"/404",templateUrl:"app/main/404.html"}).state("index",{url:"/index",templateUrl:"app/main/index.html"}).state("admin",{url:"/admin",templateUrl:"app/main/admin.html",controller:"adminCtrl"})}])}).call(this),function(){angular.module("articleApp").factory("$server",["$state","$modal",function(t,e){var a,r,o,n,l,i,s;for(r={},o=function(t){var e;return e=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")),e?decodeURIComponent(e[1]):void 0},s=["login"],a=function(t){return r[t]=function(e,a){var r,o;return r="localhost",o=$.ajax({url:"http://"+r+"/"+t,method:"POST",contentType:"application/json;charset=utf-8",headers:{sessionidcors:localStorage.getItem("token")},data:JSON.stringify(e),dataType:"json"}),o.done(function(t){return a(t.err,t.data)}),o.fail(function(t){return console.log("server error")})}},n=0,l=s.length;l>n;n++)i=s[n],a(i);return r}])}.call(this),function(){angular.module("articleApp").controller("loginModalCtrl",["$scope","$rootScope","$state","$server","$modal","$modalInstance",function(t,e,a,r,o,n){return t.user={},t.cancel=function(){return n.dismiss("cancel")},t.login=function(){return console.log("login here"),"admin"===t.user.login&&"123"===t.user.password?(localStorage.setItem("articleToken","g90uh0fguh0s9ugh09su5h"),t.cancel(),a.go("admin")):void 0}}]).controller("registerModalCtrl",["$scope","$rootScope","$state","$server","$modal","$modalInstance",function(t,e,a,r,o,n){return t.cancel=function(){return n.dismiss("cancel")},t.login=function(){return console.log("register here")}}])}.call(this),function(){angular.module("articleApp").controller("MainController",["$scope","$rootScope","$state","$server","$modal",function(t,e,a,r,o){var n;return console.log("MainController"),n=function(e){return t.instance&&(t.instance.dismiss("cancel"),_.isFunction(e))?e():void 0},e.showModal=function(e,a,r,l){var i;n(l),t.instance=i=o.open(r?{templateUrl:"app/main/modals/"+e+"Modal.html",controller:e+"ModalCtrl",backdrop:"static",keyboard:"false",resolve:{data:a}}:{templateUrl:"app/main/modals/"+e+"Modal.html",controller:e+"ModalCtrl",resolve:{data:a}})}}])}.call(this),function(){angular.module("articleApp").controller("adminCtrl",["$scope","$rootScope","$state","$server","$modal",function(t,e,a,r,o){return t.logout=function(){return delete localStorage.articleToken,a.go("index")},"g90uh0fguh0s9ugh09su5h"!==localStorage.articleToken?t.logout():void 0}])}.call(this),function(){angular.module("articleApp").service("webDevTec",function(){var t,e;t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Less",url:"http://lesscss.org/",description:"Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.",logo:"less.png"},{title:"CoffeeScript",url:"http://coffeescript.org/",description:"CoffeeScript, 'a little language that compiles into JavaScript'.",logo:"coffeescript.png"}],e=function(){return t},this.getTec=e})}.call(this),function(){angular.module("articleApp").directive("acmeNavbar",function(){var t,e;return t=function(t){var e;e=this,e.relativeDate=t(e.creationDate).fromNow()},e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0}})}.call(this),function(){angular.module("articleApp").directive("acmeMalarkey",function(){var t,e,a;return t=function(t,e){var a,r,o;o=this,a=function(){return r().then(function(){t.info("Activated Contributors View")})},r=function(){return e.getContributors(10).then(function(t){return o.contributors=t,o.contributors})},o.contributors=[],a()},a=function(t,e,a,r){var o,n;n=void 0,o=malarkey(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "}),e.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(t){o.type(t).pause()["delete"]()}),n=t.$watch("vm.contributors",function(){angular.forEach(r.contributors,function(t){o.type(t.login).pause()["delete"]()})}),t.$on("$destroy",function(){n()})},e={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:t,controllerAs:"vm"}})}.call(this),function(){angular.module("articleApp").factory("githubContributor",["$log","$http",function(t,e){var a,r,o;return a="https://api.github.com/repos/Swiip/generator-gulp-angular",r=function(r){var o,n;return o=function(t){return t.data},n=function(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))},r||(r=30),e.get(a+"/contributors?per_page="+r).then(o)["catch"](n)},o={apiHost:a,getContributors:r}}])}.call(this),angular.module("articleApp").run(["$templateCache",function(t){t.put("app/main/404.html","<div>page not found!</div>"),t.put("app/main/admin.html",'<div class="admin"><header class="main-header"><div class="wrapper"><ul><li><a href="" ng-click="logout()">Выход</a></li></ul></div></header></div>'),t.put("app/main/index.html",'<div class="home"><header class="main-header"><div class="wrapper"><ul><li><a href="" ng-click="showModal(\'login\')">Вход</a></li><li><a href="" ng-click="showModal(\'register\')">Регистрация</a></li></ul></div></header></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>'),t.put("app/main/modals/loginModal.html",'<div class="modal-wrapper"><p class="cancel" ng-click="cancel()">&times;</p><div class="modal-head"><h2>Вход</h2><h3>Для работы с методичками необходимо выполнить вход.</h3></div><div class="modal-body"><form ng-submit="login()"><div class="wrap"><label for="email">Электронный адрес:</label><input type="text" id="email" ng-model="user.login"></div><div class="wrap"><label for="password">Пароль:</label><input type="text" id="password" ng-model="user.password"></div><div class="wrap"><button class="green" type="submit">Войти</button></div></form></div></div>'),t.put("app/main/modals/registerModal.html",'<div class="modal-wrapper"><p class="cancel" ng-click="cancel()">&times;</p><div class="modal-head"><h2>Регистрация</h2><h3>Для работы с методичками необходимо зарегистрироваться.</h3></div><div class="modal-body"><div class="wrap"><label for="email">Электронный адрес:</label><input type="text" id="email"></div><div class="wrap"><label for="password">Пароль:</label><input type="text" id="password"></div><div class="wrap"><label for="password2">Повторите пароль:</label><input type="text" id="password2"></div><div class="wrap"><button class="green" ng-click="register()">Зарегистрироваться</button></div></div></div>')}]);