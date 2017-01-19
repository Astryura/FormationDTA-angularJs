const api = 'http://localhost:3000/users';

export class UsersService {
    constructor($http, $timeout,$q) {
        this.$http = $http;
        this.$timeout = $timeout;
        this.$q=$q;
    }
    getUser(id) {
        if(id){
            return this.$http.get(`${ api }/${ id }`)
                    .then(response => response.data);
        }else{
            return this.$q.resolve({name:' ' , age:18});
        }
    }
    getUsers() {
        return this.$http.get(api)
            .then(response => response.data);
    }
    saveUser(user){
        if(user.id) {
            return this.updateUser(user);
        }else{
            return this.addUser(user);
        }

    }
    addUser(user) {
        return this.$http.post(api, user)
        .then(success => success.data)
        .catch(err => {
            console.log(err);
            throw err;
        })
    }
    updateUser(user){
        return this.$http.put(`${ api }/${ user.id }`, user)
            .then(success => success.data)
            .catch(err => {
                console.log(err);
                throw err;
            })
    }
    deleteUser(id){
        return this.$timeout(2000)
            .then(() => this.$http.delete(`${ api }/${ id }`) 
            .then(success => success.data)
            .catch(err => {
                console.log(err);
                throw err;
            })
        )
    }
}