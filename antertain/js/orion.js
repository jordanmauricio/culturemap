$(document).ready(function(){
	$.ajax({
		url: "http://178.21.117.113:1026/v1/contextEntities/enschede-P5",
        type: "GET",
        //dataType: "json",
    }).done( function( response ){ 
    	var response = response; response
        console.log(response);      
    }); 
});


