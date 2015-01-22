/**
 * ng-plus - camera.js
 * Copyright(c) 2014 mdemo(https://github.com/demohi)
 * MIT Licensed
 */

'use strict';
angular.module('ngPlus.camera', [])

    .factory('$camera', ['$q', function ($q) {
        return {
            captureImage: function (options) {
                var q = $q.defer();
                var cmr = {};

                if (!plus.camera) {
                    q.resolve(null);
                    return q.promise;
                } else {
                    cmr = plus.camera.getCamera()
                }

                cmr.captureImage(function (path) {
                    q.resolve(path);
                }, function (err) {
                    q.reject(err);
                }, options);

                return q.promise;
            }
        }
    }]);