$(function() {

  $.ajax({
   url: 'https://www.codeschool.com/users/collin_p.json',
   dataType: 'jsonp',
   success: function(response) {
     // handle response
   }
 });

});
