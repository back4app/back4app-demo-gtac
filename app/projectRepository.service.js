//
// Created by davimacedo on 25/01/16.
//

(function () {
    'use strict';

    angular
        .module('app')
        .config(function($httpProvider){
            delete $httpProvider.defaults.headers.common['X-Requested-With'];
        })
        .service('projectRepository', projectRepository);

    projectRepository.$inject = [
        '$http'
    ];

    function projectRepository($http) {
        this.$http = $http;
    }
})();