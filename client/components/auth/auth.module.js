'use strict';

angular.module('ngRexelApp.auth', [
  'ngRexelApp.constants',
  'ngRexelApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
