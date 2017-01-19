import css from './sound.component.css';
class SoundController{
    constructor ($scope) {
        this.$scope = $scope;
    }
    $onInit(){
       this.audio.loop=false;
    }
     $onChanges(changes) {
        if (changes.id) {
            this.id = angular.copy(changes.id.currentValue);
        }
         if (changes.sound && changes.sound.currentValue) {
            this.audio = new Audio(changes.sound.currentValue);
            this.title = changes.sound.currentValue.split('/').pop();
            this.audio.onended = () => this.$scope.$apply();
        }
    }
    playSound(){
         if (this.audio.paused) this.audio.play();
        else {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
    }
    sup(id){
        this.onSup({
            $event: id
        });
    }
}
export const SoundButton = {
    bindings: {
        sound: '<',
        id:'<',
        onSup: '&'
    },
    template: require('./sound.component.html'),
    controller: SoundController
};