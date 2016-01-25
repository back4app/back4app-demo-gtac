//
// Created by davimacedo on 25/01/16.
//

(function () {
    'use strict';

    angular
        .module('app')
        .factory('projectsService', projectsService);

    projectsService.$inject = [
        'projectRepository'
    ];

    function projectsService(projectRepository) {
        var vm = {};

        vm.projects = [];

        vm.loadProjects = loadProjects;
        vm.createProject = createProject;

        vm.loadProjects();

        return vm;

        function loadProjects() {
            projectRepository
                .list()
                .then(function (projects) {
                    vm.projects = projects.data.results;
                });
        }

        function createProject(newProjectName) {
            projectRepository
                .create(newProjectName)
                .then(function () {
                    vm.loadProjects();
                });
        }
    }
})();
