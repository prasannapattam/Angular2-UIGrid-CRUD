angular.module("fxRouter", []);
angular.module("fxRouter").config(function ($provide: angular.auto.IProvideService, $locationProvider, $stateProvider) {

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
            url: "/about/:aboutid",
            template: "<h3>About the hello world app</h3>"
        })
});
