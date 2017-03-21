/// <reference path="../../typings/index.d.ts" />
/// <reference path="app.module.ts" />

angular.module("ng2uigridcrud", ["ui.grid", "ui.router"]);

angular.module("ng2uigridcrud").config(function ($provide: angular.auto.IProvideService, $locationProvider, $stateProvider) {

    $provide.decorator('$state', function ($delegate) {

        let $state: any = $delegate;

        // extend go to force reload: true 
        $state.baseGo = $state.go;

        $state.go = function (to, params, options) {
            options = options || {};

            // if reload is missing, adding explicitly
            if (angular.isUndefined(options.reload)) {

                options.reload = true;
            }

            // call original go
            this.baseGo(to, params, options);
        };

        return $delegate;
    });

    $locationProvider.html5Mode(true);
    $stateProvider
        .state("hello", {
            url: "/hello",
            template: "<h3>hello world!</h3>"
        })
        .state("about", {
            url: "/about",
            template: "<h3>About the hello world app</h3>"
        })
});
