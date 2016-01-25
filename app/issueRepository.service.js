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
        .service('issueRepository', issueRepository);

    issueRepository.$inject = [
        '$http'
    ];

    function issueRepository($http) {
        this.$http = $http;
    }
})();