import angular from 'angular';
import ngRoute from 'angular-route';
import {SoundButton} from './sound/sound.component';
import {SoundBox} from './sound.box.component';

const api='http://localhost:3000/sounds'

export default angular.module("sounds",[ngRoute])
.config(function($routeProvider) {
    $routeProvider
      .when("/sounds", {
        template: require('./sounds.html'),
        controller: class SoundController{
            constructor($http){
                this.$http=$http;
                this.$http.get(api)
                .then(response => this.sounds = response.data);
                this.soundDefault={sound:' '};
            }
            save(sound){
                var s = this.sounds.find(son => son.sound === sound.sound)
                if(s){
                    console.log(s)
                    this.soundDefault={sound:'existe déjà'};
                }else{
                this.$http.post(api, sound)
                .then(success => this.sounds.push(success.data));
                this.soundDefault={sound:' '};
            }
            }
            sup(id){
                this.$http.delete(`${ api }/${ id }`)
                this.sounds = this.sounds.filter(son=>son.id !== id);
            }
        },
        controllerAs: 'ctrl'
      })
})
.component("soundButton",SoundButton)
.component("soundBox",SoundBox)
.name;