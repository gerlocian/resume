(function () {
    'use strict';

    angular.module('resumeApp', ['ngResource'])

        .factory('ResumeData', [
            '$resource',
            function ($resource) {
                return $resource('/data');
            }
        ])

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
