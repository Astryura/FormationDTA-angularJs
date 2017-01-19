import angular from 'angular';
import ngRoute from 'angular-route';
import rating from 'angular-ui-bootstrap/src/rating';
import {Eldest} from './eldest.filter';
import {UsersController} from './users.controller';
import {UserUniquecontroller} from './user.unique.controller';
import {UsersService} from './users.service';
import { DtaGravatar } from './dta-gravatar/dta.gravatar.component';
import { DtaUser } from './user/dta.user.component';


export default angular.module("users",[ngRoute,rating])
.controller("UsersController", UsersController)
.controller('UserUniqueController',UserUniquecontroller)
.service('UsersService', UsersService)
.filter("eldest", Eldest)
.config(function($routeProvider) {
    $routeProvider
      .when('/users',{
        template: require('./users.html'),
        controller: 'UsersController',
        controllerAs: 'ctrl'
      })
      .when('/user/:id?',{
        template: require('./user.html'),
        controller: 'UserUniqueController',
        controllerAs: 'ctrl'
      })
})
.directive("major", function() {
  return {
    require: "ngModel",
    link: function(scope, element, attrs, ngModelCtrl) {
      ngModelCtrl.$validators.major = function(value) {
        return value >= 18;
      };
    }
  }
})
.component('dtaGravatar',DtaGravatar)
.component('dtaUser',DtaUser)
.name;