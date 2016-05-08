(function () {
    'use strict';

    angular.module('resumeApp', ['ngResource'])

        .factory('ResumeData', [
            '$resource',
            function ($resource) {
                return $resource('/data');
            }
        ])

        .directive('backToTop', function () {
            return {
                restrict: 'E',
                replace: true,
                template: '<a href="#top" class="back-to-top">Back to top</a>'
            }
        })

        .controller('ResumeController', [
            '$scope',
            'ResumeData',
            function ($scope, ResumeData) {
                ResumeData.get({}, function (data) {
                    $scope.data = data;
                });
            }
        ]);

}());
