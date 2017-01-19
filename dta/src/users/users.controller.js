export class UsersController {
    constructor(UsersService, Version,$timeout){
        this.service = UsersService;
        this.service.getUsers().then(users => this.users = users);
        this.predicat = 'name';
        this.reverse = false;
        this.version = Version;
        this.$timeout = $timeout;
        this.undo = {};
    }
    sort(predicat) {
        if (this.predicat === predicat) {
            this.reverse = !this.reverse;
        }else{
            this.reverse = false;
        }
        this.predicat = predicat;
    }
    supUser(user){
        user.css={annul:true}
        this.undo[user.id] = this.$timeout(5000);
        this.undo[user.id].then(() => {
                this.service.deleteUser(user.id);
                this.users = this.users.filter(use => use.id !== user.id);
                console.log('supprimé');    
                delete this.undo[user.id];          
            },() => { 
                user.css={annul:false}
                delete this.undo[user.id];
                console.log('annul'); 
            })
    }
    annul(user){
        this.$timeout.cancel(this.undo[user.id]);
    }
    deactivate(){
         console.log('deactivate');
    }
}