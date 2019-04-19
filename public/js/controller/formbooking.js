social.controller("booking", function($rootScope,$scope, $http,$mdpTimePicker) {       
	 var myDate = new Date();
	 $scope.time = {
		twelve: new Date(),
		twentyfour: new Date()
	  };
  
	  $scope.message = {
		hour: 'Hour is required',
		minute: 'Minute is required',
		meridiem: 'Meridiem is required'
	  }
	 $scope.type=1;
	 $scope.cab={};
	 $scope.cab.driveType=0;
	 $scope.cab.pickLocation='New Delhi, Delhi, India';
	 $scope.cab.pickLocationLat='28.68627380000001';
	 $scope.cab.pickLocationLan='77.22178310000004';
	 $scope.cab.pickdate=new Date(
		myDate.getFullYear(),
		myDate.getMonth(),
		myDate.getDate()
	  );
	 $scope.cab.picktime=new Date();
	 $scope.cab.returnDate=new Date(
		myDate.getFullYear(),
		myDate.getMonth(),
		myDate.getDate()
	  );
	 $scope.cab.way=0;
	 $scope.cab.dropLocation=''
	 $scope.cab.dropLocationLat=''
	 $scope.cab.dropLocationLan=''
	 $scope.cab.minDate=new Date(
		myDate.getFullYear(),
		myDate.getMonth(),
		myDate.getDate()
	  );

	  $scope.cab.rminDate=new Date(
		myDate.getFullYear(),
		myDate.getMonth(),
		myDate.getDate()
	  );
	  $scope.cab.rminDate= $scope.cab.pickdate;
	  $scope.cab.package=0;


	  $scope.coach={};
	  $scope.coach.driveType=0;
	  $scope.coach.pickLocation='New Delhi, Delhi, India';
	  $scope.coach.pickLocationLat='28.68627380000001';
	  $scope.coach.pickLocationLan='77.22178310000004';
	  $scope.coach.pickdate=new Date(
		 myDate.getFullYear(),
		 myDate.getMonth(),
		 myDate.getDate()
	   );
	  $scope.coach.picktime=new Date();
	  $scope.coach.returnDate=new Date(
		 myDate.getFullYear(),
		 myDate.getMonth(),
		 myDate.getDate()
	   );
	  $scope.coach.way=0;
	  $scope.coach.dropLocation=''
	  $scope.coach.dropLocationLat=''
	  $scope.coach.dropLocationLan=''
	  $scope.coach.minDate=new Date(
		 myDate.getFullYear(),
		 myDate.getMonth(),
		 myDate.getDate()
	   );
 
	   $scope.coach.rminDate=new Date(
		 myDate.getFullYear(),
		 myDate.getMonth(),
		 myDate.getDate()
	   );
	   $scope.coach.rminDate= $scope.coach.pickdate;
	   $scope.coach.package=0;


	 $scope.self={};
	 $scope.self.location='New Delhi, Delhi, India'
	 $scope.self.locationLat='28.68627380000001'
	 $scope.self.locationLan='77.22178310000004'
	 $scope.self.pickdate=new Date(
		myDate.getFullYear(),
		myDate.getMonth(),
		myDate.getDate()
	  );
	 $scope.self.picktime=new Date();
	 $scope.self.dropdate=new Date(
		myDate.getFullYear(),
		myDate.getMonth(),
		myDate.getDate()
	  );
	 $scope.self.droptime=new Date();
	
	 $scope.setCabWay=function(id,caboneway){
		$scope.cab.way=id;
		$('.settoggle button').removeClass('active');
		$('#'+caboneway).addClass('active');
	 }

	 $scope.setcoachWay=function(id,caboneway){
		$scope.coach.way=id;
		$('.settogglec button').removeClass('active');
		$('#'+caboneway).addClass('active');
	 }
	 
})


function initialize() {
	   var options = {
            types: ['(cities)'],
            componentRestrictions: {country: "ind"}
        };
        var inputs = document.getElementsByClassName('querymap');
		var autocompletes = [];

		for (var i = 0; i < inputs.length; i++) {
			$('#'+inputs[i].id).attr('placeHolder','');
		  var autocomplete = new google.maps.places.Autocomplete(inputs[i], options);
		  autocomplete.inputId = inputs[i].id;
		  autocomplete.addListener('place_changed', fillIn);
		  autocompletes.push(autocomplete);
		} 
	}
	
	function fillIn(){		
		var place = this.getPlace();
            if (!place.geometry) {
                return;
            }
                var address = place.formatted_address;
                var latitude = place.geometry.location.lat();
                var longitude = place.geometry.location.lng();
               
                $('#'+this.inputId).next().next().val(latitude);
                $('#'+this.inputId).prev().val(longitude);
	}


	google.maps.event.addDomListener(window, 'load', initialize);

	$('.btn-toggle').click(function() {
		//$(this).find('.btn').toggleClass('active');  
		if ($(this).find('.btn-success').length>0) {
			$(this).find('.btn').toggleClass('btn-success');
		}
		if ($(this).find('.btn-default').length>0) {
			$(this).find('.btn').toggleClass('btn-default');
		}
	})  