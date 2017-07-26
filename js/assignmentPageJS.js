$(document).ready(function(){

  var saved = sessionStorage.getItem("saved");
  var disable = sessionStorage.getItem("disablebtns");
  if(saved == "true") {
    sessionStorage.setItem("saved","false");
    console.log("saved and quitted");
    $("#snackbar").addClass("show");

    var attempted= sessionStorage.getItem("attempted");
    console.log(attempted);
    $(".attempted").html("Attempted: " + attempted + "%");

    setTimeout(function(){
      $("#snackbar").toggleClass("show");
    }, 2500);

  } else if (disable == "true") {

    $(".attempted").html("Submitted");
    $("#toQuestion").prop('disabled', true);
    $("#yourFeedback").prop('disabled', false);
    $("#giveFeedback").prop('disabled', false);

    if (saved == "submitted") {
      sessionStorage.setItem("saved", "false");
      $("#submitted").addClass("show");

      setTimeout(function(){
        $("#submitted").toggleClass("show");
      }, 2500);


    }

  }

  $('#toQuestion').click(function(){
    console.log("hi");
    window.open("Questions.html","_self");
  })

  $("#yourFeedback").click(function(){
    window.open("Feedback.html", "_self");
    sessionStorage.setItem("feedback","true");
  })
})
