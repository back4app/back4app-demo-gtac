//
// Created by davimacedo on 25/01/16.
//

(function () {
    'use strict';

    angular
        .module('app')
        .controller('projectsController', projectsController);

    projectsController.$inject = [
        '$scope',
        'projectsService'
    ];

    function projectsController($scope, projectsService) {
        var vc = $scope.vc = this;

        var vm = vc.vm = $scope.vm = projectsService;

        vc.createProject = createProject;
        vc.deleteProject = deleteProject;
        vc.saveSelectedProject = saveSelectedProject;

        function createProject() {
            var newProjectName = prompt('Please, type the project name')
            if (newProjectName) {
                vm.createProject(newProjectName);
            }
        }

        function deleteProject(project) {
            if (confirm('Please, confirm that you want to delete the project "' + project.title + '"')) {
                vm.deleteProject(project.id);
            }
        }

        function saveSelectedProject() {
            if (confirm('Please, confirm that you want to save the project "' + vm.selectedProject.title + '"')) {
                vm.saveProject(vm.selectedProject);
            }
        }
    }
})();
