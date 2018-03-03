

$(document).on('click', '.plusMinusIcon', function() {

  var locationType = $(this).data("locationtype");
  var locationId = $(this).data("locationid");

  var currentUserId = $('#tilesContent').data("userid");


  var queryURL = window.location.origin + '/add/' + locationType + '/' + currentUserId + '/' + locationId;

  $.ajax({url: queryURL, method: 'GET'}).done(function(response){
   
    window.location.reload();
  })

});
