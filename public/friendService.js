angular.module('userProfiles')
.service('friendService', function( $http ) {
  
    
    this.login = function( user ) {
      /* FIX ME */
      return $http.post('/api/login', { "name": user.name, "password": user.password });
    };

    this.getFriends = function() {
    	/* FIX ME */
      return $http.get('/api/profiles');
    };
  
});
