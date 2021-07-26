$(document).ready(function(){
    $(".design").click(function() {
      $("#hidden").toggle("slow");
    });
});
$(document).ready(function(){
    $(".development").click(function() {
      $("#hidden1").toggle("slow");
    });
});
$(document).ready(function(){
    $(".product").click(function() {
      $("#hidden2").toggle("slow");
    });
});
$(document).ready(function(){
  $("#work1").mouseover(function(){
    $("#overlay").show();
  }).mouseout(function(){
    $("#overlay").hide();
  });
});
$(document).ready(function(){
  $("#work2").mouseover(function(){
    $("#overlay2").show();
  }).mouseout(function(){
    $("#overlay2").hide();
  });
});
$(document).ready(function(){
  $("#work3").mouseover(function(){
    $("#overlay3").show();
  }).mouseout(function(){
    $("#overlay3").hide();
  });
});
$(document).ready(function(){
  $("#work4").mouseover(function(){
    $("#overlay4").show();
  }).mouseout(function(){
    $("#overlay4").hide();
  });
});

$(document).ready(function(){
  $("#work5").mouseover(function(){
    $("#overlay5").show();
  }).mouseout(function(){
    $("#overlay5").hide();
  });
  $("#work6").mouseover(function(){
    $("#overlay6").show();
  }).mouseout(function(){
    $("#overlay6").hide();
  });
  $("#work7").mouseover(function(){
    $("#overlay7").show();
  }).mouseout(function(){
    $("#overlay7").hide();
  });
  $("#work8").mouseover(function(){
    $("#overlay8").show();
  }).mouseout(function(){
    $("#overlay8").hide();
  });
});
$("form#myForm").on('submit',function(event){
  event.preventDefault();
  var name = $("input#name").val();
  var email = $("input#email").val();
  var message = $("textarea#message").val();
  console.log(name)

  if ($("input#name").val() && $("input#email").val() ) {
      alert ("Hello " + name + ", we are glad to receive your response and will act on the information. Thank you for your ");
  }
 else{
   alert("Please check your credentials and send back your message. We value you")
 }
});