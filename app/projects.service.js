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
        vm.selectedProject = null;

        vm.loadProjects = loadProjects;
        vm.createProject = createProject;
        vm.deleteProject = deleteProject;
        vm.selectProject = selectProject;
        vm.saveProject = saveProject;

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

        function deleteProject(projectId) {
            projectRepository
                .del(projectId)
                .then(function () {
                    vm.loadProjects();
                });
        }

        function selectProject(projectId) {
            if(projectId) {
                projectRepository
                    .get(projectId)
                    .then(function (project) {
                        if (project.data) {
                            vm.selectedProject = project.data;
                        } else {
                            vm.selectedProject = null;
                        }
                    });
            } else {
                vm.selectedProject = null;
            }
        }

        function saveProject(project) {
            projectRepository
                .put(project)
                .then(function () {
                    vm.loadProjects();
                });
        }
    }
})();
