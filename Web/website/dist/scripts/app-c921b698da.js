(function(){angular.module("articleApp",["ui.router","ngRoute","ui.bootstrap","ngAnimate","ui.date"]).run(["$rootScope","$state","$stateParams","$timeout",function(t,e,a,o){return t.$state=e,t.$stateParams=a}]).config(["$routeProvider","$locationProvider","$stateProvider","$urlRouterProvider",function(t,e,a,o){return o.when("","/index"),o.otherwise(function(t,e){return e="404"}),a.state("404",{url:"/404",templateUrl:"app/main/404.html"}).state("index",{url:"/index",templateUrl:"app/main/index.html"}).state("admin",{url:"/admin",templateUrl:"app/main/admin.html",controller:"adminCtrl"}).state("cabinet",{url:"/cabinet",templateUrl:"app/main/cabinet.html",controller:"cabinetCtrl"}).state("cabinet.bookInfo",{url:"/book{id}",templateUrl:"app/main/bookInfo.html",controller:"bookInfoCtrl"})}])}).call(this),function(){angular.module("articleApp").controller("loginModalCtrl",["$scope","$rootScope","$state","$server","$modal","$modalInstance",function(t,e,a,o,i,n){return t.user={},t.cancel=function(){return n.dismiss("cancel")},t.login=function(){return"admin"===t.user.login&&"123"===t.user.password&&(localStorage.setItem("articleToken","a_g90uh0fguh0s9ugh09su5h"),t.cancel(),a.go("admin")),"user"===t.user.login&&"123"===t.user.password?(localStorage.setItem("articleToken","u_g90uh0fguh0s9ugh09su5h"),t.cancel(),a.go("cabinet")):void 0}}]).controller("registerModalCtrl",["$scope","$rootScope","$state","$server","$modal","$modalInstance",function(t,e,a,o,i,n){return t.cancel=function(){return n.dismiss("cancel")},t.login=function(){return console.log("register here")}}])}.call(this),function(){angular.module("articleApp").controller("MainController",["$scope","$rootScope","$state","$server","$modal",function(t,e,a,o,i){var n;return console.log("MainController"),n=function(e){return t.instance&&(t.instance.dismiss("cancel"),_.isFunction(e))?e():void 0},e.showModal=function(e,a,o,r){var l;n(r),t.instance=l=i.open(o?{templateUrl:"app/main/modals/"+e+"Modal.html",controller:e+"ModalCtrl",backdrop:"static",keyboard:"false",resolve:{data:a}}:{templateUrl:"app/main/modals/"+e+"Modal.html",controller:e+"ModalCtrl",resolve:{data:a}})},t.logout=function(){return delete localStorage.articleToken,a.go("index")},t.formatDate=function(t){return moment(t).format("DD/MM/YYYY")}}])}.call(this),function(){angular.module("articleApp").controller("cabinetCtrl",["$scope","$rootScope","$state","$server","$modal",function(t,e,a,o,i){return"u_g90uh0fguh0s9ugh09su5h"!==localStorage.articleToken&&t.logout(),t.books=[{id:1,direction:"Компьютерные науки",name:"3 курс Лабораторные работы",modified:1460930831e3},{id:2,direction:"Компьютерные науки",name:"4 курс пособие для курсовых работ",modified:1460910831e3}]}])}.call(this),function(){angular.module("articleApp").controller("bookInfoCtrl",["$scope","$rootScope","$state","$server","$modal","$stateParams",function(t,e,a,o,i,n){var r;return r=n.id,t.book=t.books[r-1]}])}.call(this),function(){angular.module("articleApp").controller("adminCtrl",["$scope","$rootScope","$state","$server","$modal",function(t,e,a,o,i){return"a_g90uh0fguh0s9ugh09su5h"!==localStorage.articleToken?t.logout():void 0}])}.call(this),function(){angular.module("articleApp").factory("$server",["$state","$modal",function(t,e){var a,o,i,n,r,l,s;for(o={},i=function(t){var e;return e=document.cookie.match(new RegExp("(?:^|; )"+t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)")),e?decodeURIComponent(e[1]):void 0},s=["login"],a=function(t){return o[t]=function(e,a){var o,i;return o="localhost",i=$.ajax({url:"http://"+o+"/"+t,method:"POST",contentType:"application/json;charset=utf-8",headers:{sessionidcors:localStorage.getItem("token")},data:JSON.stringify(e),dataType:"json"}),i.done(function(t){return a(t.err,t.data)}),i.fail(function(t){return console.log("server error")})}},n=0,r=s.length;r>n;n++)l=s[n],a(l);return o}])}.call(this),function(){angular.module("articleApp").service("webDevTec",function(){var t,e;t=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Bootstrap",url:"http://getbootstrap.com/",description:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.",logo:"bootstrap.png"},{title:"Less",url:"http://lesscss.org/",description:"Less extends the CSS language, adding features that allow variables, mixins, functions and many other techniques.",logo:"less.png"},{title:"CoffeeScript",url:"http://coffeescript.org/",description:"CoffeeScript, 'a little language that compiles into JavaScript'.",logo:"coffeescript.png"}],e=function(){return t},this.getTec=e})}.call(this),function(){angular.module("articleApp").directive("acmeNavbar",function(){var t,e;return t=function(t){var e;e=this,e.relativeDate=t(e.creationDate).fromNow()},e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:t,controllerAs:"vm",bindToController:!0}})}.call(this),function(){angular.module("articleApp").factory("githubContributor",["$log","$http",function(t,e){var a,o,i;return a="https://api.github.com/repos/Swiip/generator-gulp-angular",o=function(o){var i,n;return i=function(t){return t.data},n=function(e){t.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))},o||(o=30),e.get(a+"/contributors?per_page="+o).then(i)["catch"](n)},i={apiHost:a,getContributors:o}}])}.call(this),function(){angular.module("articleApp").directive("acmeMalarkey",function(){var t,e,a;return t=function(t,e){var a,o,i;i=this,a=function(){return o().then(function(){t.info("Activated Contributors View")})},o=function(){return e.getContributors(10).then(function(t){return i.contributors=t,i.contributors})},i.contributors=[],a()},a=function(t,e,a,o){var i,n;n=void 0,i=malarkey(e[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "}),e.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(t){i.type(t).pause()["delete"]()}),n=t.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(t){i.type(t.login).pause()["delete"]()})}),t.$on("$destroy",function(){n()})},e={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:a,controller:t,controllerAs:"vm"}})}.call(this),angular.module("articleApp").run(["$templateCache",function(t){t.put("app/main/404.html","<div>page not found!</div>"),t.put("app/main/admin.html",""),t.put("app/main/bookInfo.html",'<div class="book"><ul><li>ID: {{book.id}}</li><li>Название: {{book.name}}</li><li>Направление: {{book.direction}}</li><li>Авторы: {{book.authors}}</li><li>Дата: {{formatDate(book.modified)}}</li></ul></div>'),t.put("app/main/cabinet.html",'<div class="cabinet"><div class="aside"><p class="title">Мои методички</p><ul><li ng-repeat="book in books" ng-click="$state.go(\'cabinet.bookInfo\', {id: book.id})"><p>Направление: <span class="bold">{{book.direction}}</span></p><p>Название: <span class="bold">{{book.name}}</span></p><p>Дата: <span class="bold">{{formatDate(book.modified)}}</span></p></li></ul></div><div class="ui-view content"><div class="no-select" ng-if="$state.is(\'cabinet\')"><img src="assets/images/empty_book.png" alt=""><p>Вы не выбрали ни одной методички</p></div></div></div>'),t.put("app/main/index.html",'<div class="home"><div class="content"><div class="wrapper"><div class="about"><h1>Онлайн методички</h1><h2>Благодаря нашему сервису вы можете создавать и скачивать методички.</h2><h3><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident vel dolor facere tempore in sint nisi consequatur ut, recusandae ipsam suscipit sequi voluptate, consequuntur vero molestiae obcaecati sapiente nulla ducimus!</div><div>Rem consectetur ab porro expedita corporis non quisquam optio beatae laudantium atque iusto ipsam amet enim, eaque omnis esse eveniet tenetur consequatur nisi nulla voluptates debitis nihil. Expedita, maiores, commodi!</div></h3><p class="center"><img src="assets/images/yellow_book.png" alt=""></p></div><div class="news"><ul><li><img src="assets/images/018.png" alt=""><p class="title">Heading</p><p class="desription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore incidunt eligendi laboriosam earum at error, animi repudiandae odit aperiam. Velit deleniti ipsam aliquam a quaerat iste dicta ad consectetur modi.</p><button class="btn-default btn">Посмотреть</button></li><li><img src="assets/images/018.png" alt=""><p class="title">Heading</p><p class="desription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore incidunt eligendi laboriosam earum at error, animi repudiandae odit aperiam. Velit deleniti ipsam aliquam a quaerat iste dicta ad consectetur modi.</p><button class="btn-default btn">Посмотреть</button></li><li><img src="assets/images/018.png" alt=""><p class="title">Heading</p><p class="desription">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore incidunt eligendi laboriosam earum at error, animi repudiandae odit aperiam. Velit deleniti ipsam aliquam a quaerat iste dicta ad consectetur modi.</p><button class="btn-default btn">Посмотреть</button></li></ul></div></div></div><footer class="main-footer"><div class="wrapper"><p class="copyright">&copy; Онлайн методички - 2016</p></div></footer></div>'),t.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href="https://github.com/Swiip/generator-gulp-angular"><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>'),t.put("app/main/modals/loginModal.html",'<div class="modal-wrapper"><p class="cancel" ng-click="cancel()">&times;</p><div class="modal-head"><h2>Вход</h2><h3>Для работы с методичками необходимо выполнить вход.</h3></div><div class="modal-body"><form ng-submit="login()"><div class="wrap"><label for="email">Электронный адрес:</label><input type="text" id="email" ng-model="user.login"></div><div class="wrap"><label for="password">Пароль:</label><input type="text" id="password" ng-model="user.password"></div><div class="wrap"><button class="green" type="submit">Войти</button></div></form></div></div>'),t.put("app/main/modals/registerModal.html",'<div class="modal-wrapper"><p class="cancel" ng-click="cancel()">&times;</p><div class="modal-head"><h2>Регистрация</h2><h3>Для работы с методичками необходимо зарегистрироваться.</h3></div><div class="modal-body"><div class="wrap"><label for="email">Электронный адрес:</label><input type="text" id="email"></div><div class="wrap"><label for="password">Пароль:</label><input type="text" id="password"></div><div class="wrap"><label for="password2">Повторите пароль:</label><input type="text" id="password2"></div><div class="wrap"><button class="green" ng-click="register()">Зарегистрироваться</button></div></div></div>')}]);