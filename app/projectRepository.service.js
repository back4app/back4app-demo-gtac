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
        '$http',
        'issueRepository',
        'bugRepository'
    ];

    function projectRepository($http) {
        this.$http = $http;
    }

    projectRepository.prototype.list = list;
    projectRepository.prototype.create = create;

    function list() {
        var appID = 'davimacedo';
        var accessToken = 'SlZHIfRLP5hMbqu020NkB66fZRFD4usUKxze09lj';
        var url = 'https://api.back4app.com/entities/Project/';

        return this.$http({
            url: url,
            method: 'GET',
            headers: {"X-Application-ID": appID,
                "X-Access-Token": accessToken},
            dataType: 'json'
        });
    }

    function create(name) {
        var appID = 'davimacedo';
        var accessToken = 'SlZHIfRLP5hMbqu020NkB66fZRFD4usUKxze09lj';
        var url = 'https://api.back4app.com/entities/Project/';

        return this.$http({
            url: url,
            method: 'POST',
            headers: {"X-Application-ID": appID,
                "X-Access-Token": accessToken},
            dataType: 'json',
            data: JSON.stringify({
                'title': name
            }),
            contentType: 'application/json; charset=utf-8'
        });
    }
})();