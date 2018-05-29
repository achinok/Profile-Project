"use strict";
{

    let edit = {
        templateUrl:"edit.html",

        controller: function(userService){
            let vm = this;
            // vm.name = "Palpatine";
            // vm.contact = "IamtheSenate@emperor.com";
            // vm.bio = "Hey I am shev, I come from Star Wars";
            vm.user = userService.getUser();
            vm.update = function() {
                userService.setUser(vm.user);
                // console.log(vm.name);
                // console.log(vm.contact);
                // console.log(vm.bio);
            }
        }
    }



    edit.$inject = ["userService"];

    angular
    .module("profile")
    .component("edit", edit)
}