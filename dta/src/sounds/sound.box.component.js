class SoundBoxController {
    constructor(){}
     $onInit(){
         //this.soundDefault={sound:''};
     }
     $onChanges(changes) {
        if (changes.sound) {
            this.sound = angular.copy(changes.sound.currentValue);
        }
    }
     save(sound){
          this.add({
            $event: sound
        });
     }
}

export const SoundBox = {
    bindings:{
        sound:'<',
        add:'&'
    },
    template: require('./sound.box.component.html'),
    controller: SoundBoxController
}