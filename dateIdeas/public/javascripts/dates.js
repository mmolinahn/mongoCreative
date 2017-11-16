$(document).ready(function(){
  $("#postDate").click(function(){
      var myobj = {Budget:$("#Budget").val(),Activity:$("#Activity").val()};
      jobj = JSON.stringify(myobj);
      var url = "date";
   $.ajax({
   url:url,
   type: "POST",
   data: jobj,
   contentType: "application/json; charset=utf-8",
   success: function(data,textStatus) {
    $("#done").html(textStatus);
   }
  })
  });

 $("#getDate").click(function() {
    $.getJSON('date', function(data) {
      var everything = "<h2>Random Date Idea</h2>";
      everything += "<ul>";
      for(var Dates in data) {
       // com = data[Dates];
      //  everything += "<li> Budget: " + com.Budget + ",  Activity: " + com.Activity + "</li>";
      }
//	  var i = Math.floor(Math.random() * 140 );
	var rand = Math.floor(Math.random() * data.length + 5);
	everything += "<li> Budget: " + data[rand].Budget + ",  Activity: " + data[rand].Activity + "</li>";
      everything += "</ul>";
      $("#datesText").html(everything);
    })
  });
});
