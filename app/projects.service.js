//
// Created by davimacedo on 25/01/16.
//

(function () {
    'use strict';

    angular
        .module('app')
        .factory('projectsService', projectsService);

    projectsService.$inject = [
        'projectRepository',
        'issueRepository',
        'bugRepository'
    ];

    function projectsService(projectRepository) {
        var vm = {};

        return vm;
    }
})();
