/// <reference path="../../typings/index.d.ts" />
/// <reference path="app.module.ts" />

angular.module("ng2uigridcrud", ["ui.grid", "ui.router"]);

angular.module("ng2uigridcrud").config(function ($locationProvider, $stateProvider) {
    var helloState = {
        name: 'hello',
        url: '/hello',
        template: '<h3>hello world!</h3>'
    }

    var aboutState = {
        name: 'about',
        url: '/about',
        template: '<h3>Its the UI-Router hello world app!</h3>'
    }

    $locationProvider.html5Mode(true);
    $stateProvider.state(helloState);
    $stateProvider.state(aboutState);

});

//angular.module("ng2uigridcrud").run(function ($rootScope) {
//    $rootScope.$on("$stateChangeStart",
//        function (evt: ng.IAngularEvent, toState: ng.ui.IState, toParams: ng.ui.IStateParamsService,
//            fromState: ng.ui.IState, fromParams: ng.ui.IStateParamsService): void {
//            // debugger;
//        });
//    //$rootScope.$on("$stateChangeSuccess",
//    //    function (evt: ng.IAngularEvent, toState: ng.ui.IState, toParams: ng.ui.IStateParamsService,
//    //        fromState: ng.ui.IState, fromParams: ng.ui.IStateParamsService): void {
//    //        debugger;
//    //    });
//});
