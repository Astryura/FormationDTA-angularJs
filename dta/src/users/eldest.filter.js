export function Eldest() {
    return (tab) => {
            if(tab instanceof Array || tab) {
               let ageMax = tab.reduce((accu , user) => {
                    if(accu.age < user.age) return user;
                    return accu;
                }, {name:"",age:0} );
                return ageMax.name;
            }
    }
}