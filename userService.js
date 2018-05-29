"use strict"
{
    function userService(){
    let user ={
        name: "Grant Chirpus",
        contact: "grantchirpus@aol.com",
        bio: "I am filled with all your favorite candy"

    }


    const getUser = function(){
        return user;
    };

    const setUser = function(newUser){
        user = newUser;
    };

    return {
        getUser,
        setUser
    }
    }
  // factory with service
  // services keep there data, components data is temporary, this data keeps existing until page shut down


angular
.module("profile")
.factory("userService", userService)
}