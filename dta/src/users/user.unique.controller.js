export class UserUniquecontroller{
    constructor($routeParams,UsersService,$location){
        this.service = UsersService;
        this.$location = $location;
        this.service.getUser($routeParams.id)
            .then(user => this.user = user);
        
    }
    save($event){
        this.service.saveUser(angular.copy($event))
            .then(() => this.$location.path('/users'));
    }
    
}