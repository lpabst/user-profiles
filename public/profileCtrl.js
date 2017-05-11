angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {

	$scope.getFriends = function(){
		friendService.getFriends().then(function(response){
			$scope.currentUser = response.data.currentUser;
			$scope.friends = response.data.friends;
		})
	}

	$scope.getFriends();



	// FIX ME - assign values to $scope.currentUser and $scope.friends
});