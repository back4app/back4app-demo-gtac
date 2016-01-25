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

        function createProject() {
            var newProjectName = prompt('Please, type the project name')
            if (newProjectName) {
                vm.createProject(newProjectName);
            }
        }
    }
})();
