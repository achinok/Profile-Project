"use strict";
{

    let pro = {
        templateUrl:"profile.html",

        controller: function(userService){
            let vm = this;
            // vm.name = "Palpatine";
            // vm.contact = "IamtheSenate@emperor.com";
            // vm.bio = "Hey I am shev, I come from Star Wars";

            vm.user = userService.getUser();  // user from new index
            vm.update = function(){
                userService.setUser(vm.user);
            }

        }

    }



    pro.$inject = ["userService"];
    //importing user services data
    //displays doesn't alter

    angular
    .module("profile")
    .component("pro", pro)
}