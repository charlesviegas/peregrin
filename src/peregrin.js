angular.module('peregrin',[])

    .service('peService', function () {

        var that = this;
        var allowedAuths = [];

        // Recupera a session da variavel global elrond

        if (elrond && elrond.session) {
            elrond.session.authorities.forEach(function (auth) {
                allowedAuths.push(auth.authority);
            });
        }

        that.hasAuthorities = function (requiredAuths) {
            var _hasauth = false, _requiredAuths = requiredAuths;
            if (!_requiredAuths) {
                return true;
            }
            if (typeof _requiredAuths === 'string') {
                _requiredAuths = _requiredAuths.split(',');
            }
            _requiredAuths.forEach(function (required) {
                allowedAuths.forEach(function (allowed) {
                    if (allowed === required) {
                        _hasauth = true;
                    }
                });
            });
            return _hasauth;
        };

        return that;
    })

    .directive('peAuthorities', ['peService', function (peService) {

        return {

            restrict: 'A',

            link: function (scope, element, attrs) {

                if (!peService.hasAuthorities(attrs.peAuthorities)) {
                    element.remove();
                }
            }

        };
    }])

    .run(['$rootScope', 'peService', function ($rootScope, peService) {

        $rootScope.$on('$stateChangeStart', function (event, toState) {

            if (!peService.hasAuthorities(toState.peAuthorities)) {
                event.preventDefault();
                alert('Desculpe, mas você não possui permissão para acessar esta área.');
            }

        });

    }]);

