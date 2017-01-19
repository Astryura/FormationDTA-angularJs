export function ExclamationFilter(){
    return (input, nb = 1) => {
        if(typeof input !== 'string') return '';
        let exc = "";
        for(var i=0;i<nb;i++){
            exc += "!";
        }
        return input + exc; // exc = "!".repeat(nb)
    }
}