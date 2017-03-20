/*
This file is the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. https://go.microsoft.com/fwlink/?LinkId=518007
*/

var gulp = require('gulp'),
    flatten = require('gulp-flatten');

var webroot = "./wwwroot/";

gulp.task("SystemJS", function () {

    var files;

    // systemjs
    files = [
        "./node_modules/core-js/client/shim.min.js",
        "./node_modules/core-js/client/shim.min.js.map",
        "./node_modules/zone.js/dist/zone.js",
        "./node_modules/reflect-metadata/Reflect.js",
        "./node_modules/reflect-metadata/Reflect.js.map",
        "./node_modules/systemjs/dist/system.src.js"
    ];
    gulp.src(files, { base: "." })
        .pipe(flatten())
        .pipe(gulp.dest(webroot + "lib/js/systemjs"));

    files = [
        "./node_modules/@angular/core/bundles/core.umd.js",
        "./node_modules/@angular/core/bundles/core.umd.js.map",
        "./node_modules/@angular/common/bundles/common.umd.js",
        "./node_modules/@angular/common/bundles/common.umd.js.map",
        "./node_modules/@angular/compiler/bundles/compiler.umd.js",
        "./node_modules/@angular/compiler/bundles/compiler.umd.js.map",
        "./node_modules/@angular/platform-browser/bundles/platform-browser.umd.js",
        "./node_modules/@angular/platform-browser/bundles/platform-browser.umd.js.map",
        "./node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js",
        "./node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js.map",
        "./node_modules/@angular/http/bundles/http.umd.js",
        "./node_modules/@angular/http/bundles/http.umd.js.map",
        "./node_modules/@angular/router/bundles/router.umd.js",
        "./node_modules/@angular/router/bundles/router.umd.js.map",
        "./node_modules/@angular/forms/bundles/forms.umd.js",
        "./node_modules/@angular/forms/bundles/forms.umd.js.map",
        "./node_modules/@angular/upgrade/bundles/upgrade-static.umd.js",
        "./node_modules/@angular/upgrade/bundles/upgrade-static.umd.js.map",
        "./node_modules/@angular/material/bundles/material.umd.js",
        "./node_modules/@angular/flex-layout/bundles/flex-layout.umd.js"
    ];
    gulp.src(files, { base: "." })
        .pipe(flatten())
        .pipe(gulp.dest(webroot + "lib/js/@angular"));

    // angular css
    files = [
        "./node_modules/@angular/material/core/theming/prebuilt/indigo-pink.css"
    ];
    gulp.src(files, { base: "." })
        .pipe(flatten())
        .pipe(gulp.dest(webroot + "lib/css/@angular"));


    // angularjs
    files = [
        "./node_modules/angular/angular.js",
        "./node_modules/angular/angular.min.js",
        "./node_modules/angular-ui-grid/ui-grid.js",
        "./node_modules/angular-ui-grid/ui-grid.min.js",
        "./node_modules/angular-ui-router/release/angular-ui-router.js",
        "./node_modules/angular-ui-router/release/angular-ui-router.min.js"
    ];
    gulp.src(files, { base: "." })
        .pipe(flatten())
        .pipe(gulp.dest(webroot + "lib/js/angularjs"));

    // angularjs css
    files = [
        "./node_modules/angular-ui-grid/ui-grid.css",
        "./node_modules/angular-ui-grid/ui-grid.svg",
        "./node_modules/angular-ui-grid/ui-grid.ttf",
        "./node_modules/angular-ui-grid/ui-grid.woff"
    ];
    gulp.src(files, { base: "." })
        .pipe(flatten())
        .pipe(gulp.dest(webroot + "lib/css/angularjs"));

    // copy rx
    gulp.src(["./node_modules/rxjs/**/*.js", "./node_modules/rxjs/**/*.js.map"], { base: "./node_modules/rxjs" })
        .pipe(gulp.dest(webroot + "lib/js/rxjs"));

    // copy hammerjs
    gulp.src(["./node_modules/hammerjs/hammer.js"], { base: "./node_modules/hammerjs" })
        .pipe(gulp.dest(webroot + "lib/js/hammerjs"));
});
