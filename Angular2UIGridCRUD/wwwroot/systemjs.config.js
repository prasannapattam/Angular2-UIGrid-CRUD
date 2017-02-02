/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'lib/js/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core.umd.js',
      '@angular/common': 'npm:@angular/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http.umd.js',
      '@angular/router': 'npm:@angular/router.umd.js',
      '@angular/forms': 'npm:@angular/forms.umd.js',
      '@angular/upgrade/static': 'npm:@angular/upgrade-static.umd.js',
      '@angular/material': 'npm:@angular/material.umd.js',
      '@angular/flex-layout': 'npm:@angular/flex-layout.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      'hammerjs': 'npm:hammerjs/hammer.js'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        main: './main.js',
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      }
    }
  });
})(this);
