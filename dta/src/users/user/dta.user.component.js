class DtaUserController{
    constructor(){}  
   $onChanges(changes) {
        if (changes.user) {
            this.user = angular.copy(changes.user.currentValue);
        }
    }
    save(form, user){
        if(form.$invalid) return;
        this.onSubmit({
            $event: user
        });
    }  
}
export const DtaUser = {
    bindings: {
       user: '<',
       onSubmit: '&'
    },
    template: require('./dta.user.component.html'),
    controller: DtaUserController
};