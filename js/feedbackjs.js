var currentQuestion = "Question 1";
var answers = {};
answers[0] = "";
var question14="How many areas is the sqaure divided into and what are the characteristics of each area? <hr />"
var question15="when was the sqaure built and what is the significance of the square? <hr />"


$(document).ready(function() {

  var storedAnswers = JSON.parse(sessionStorage.getItem("answers"));
  if (storedAnswers != null && storedAnswers != undefined) {
    console.log("in")
    $("#answer").val(storedAnswers[1]);
  } else {
    for (var i = 0; i <=13; i++) {
      answers[i] = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent odio elit, venenatis quis dapibus a, iaculis sit amet arcu. Mauris sodales odio et risus dapibus, ut euismod libero blandit. Sed iaculis quis nisl nec vehicula. Cras pretium varius libero vitae semper. Praesent convallis nibh mauris, nec sollicitudin leo pulvinar non. In et urna blandit, cursus leo in, ullamcorper sapien. Proin euismod orci sit amet venenatis pulvinar. Nam volutpat, ligula sit amet mollis rutrum, purus neque eleifend nibh, quis laoreet sapien tellus nec nulla. Vivamus sit amet tellus orci. Donec quis lacus et augue ornare molestie. Curabitur accumsan, lorem eget vehicula gravida, metus velit porta turpis, id pretium diam mauris commodo ligula.";
    }
    answers[1] = "The square is made up of two different areas. The first has a trapezoid shape, marked off by two straight closed and convergent arms on each side of the church square. The second area is elliptical and is surrounded by the two hemicycles of a four-row colonnade, because, as Bernini said, “considering that Saint Peter’s is almost the matrix of all the churches, its portico had to give an open-armed, maternal welcome to all Catholics, confirming their faith; to heretics, reconciling them with the Church; and to the infidels, enlightening them about the true faith."
    answers[14] = "";
    answers[15] = "";
    sessionStorage.setItem("answers", JSON.stringify(answers));

  }




  <!-- Menu toggle script -->
  $("#menu-toggle").click( function(e){
    e.preventDefault();
    $("#wrapper").toggleClass("menuDisplayed");

     $(this).find('span').toggleClass('glyphicon glyphicon-menu-hamburger').toggleClass('glyphicon glyphicon-remove');
  });


  $(".carousel").carousel ({
    interval:false
  });

  $(".sidebar-nav li").click( function (e) {

    $("#previous-button").prop('disabled', false);
    $('.sidebar-nav li').removeClass('active');

    $(this).toggleClass("active");
    e.preventDefault();

    var questionNumber = $(this).children('a').html();

    if (questionNumber != "Question 1" || questionNumber != "Question 15") {
      $('#next-button').prop('disabled', false);
    }

    if (questionNumber == "Question 1") {
      $("#previous-button").prop('disabled', true);
    } else if (questionNumber == "Question 15") {
      $("#next-button").prop('disabled', true);
    }
    if (questionNumber == "Question 14") {
      $(".question").html(question14);
    } else if (questionNumber == "Question 15") {
      $(".question").html(question15);
    } else {
      $(".question").html("hasellus accumsan ullamcorper metus vitae blandit. Curabitur tincidunt mauris in vehicula porttitor. Integer lacus est, molestie sit amet odio ut, vestibulum gravida nibh.<hr/>");
    }

    $("#question-number").text(questionNumber);


    var goToQuestionMatch = questionNumber.match(/Question (\d+)/);
    var nowQuestionMatch = currentQuestion.match(/Question (\d+)/);
    var goToQuestion = goToQuestionMatch[1];
    var nowQuestion = nowQuestionMatch[1];
    console.log($("#answer").val());
    var storedAnswers = JSON.parse(sessionStorage.getItem("answers"));
    storedAnswers[nowQuestion] = $("#answer").val();
    sessionStorage.setItem("answers", JSON.stringify(storedAnswers));
    $("#answer").val('');
    console.log(storedAnswers[goToQuestion]);
    $("#answer").val(storedAnswers[goToQuestion]);

    currentQuestion = questionNumber;

  })

  $("#next-button").click( function() {

    $("#previous-button").prop('disabled', false);
    var matches = currentQuestion.match(/Question (\d+)/);
    var noBeforeButton = matches[1];
    var number = +matches[1] + +1;
    var nextQuestion = "Question " + number;
    $("#question-number").text(nextQuestion);
    currentQuestion = nextQuestion;
    $(".sidebar-nav li").removeClass("active")
    console.log(number)
    $("#q" + number).addClass("active");

    if (matches[1] == 14) {
      $('#next-button').prop('disabled', true);
    }

    var storedAnswers = JSON.parse(sessionStorage.getItem("answers"));

    storedAnswers[noBeforeButton] = $("#answer").val();
    sessionStorage.setItem("answers", JSON.stringify(storedAnswers));
    $("#answer").val('');

    var storedAnswers = JSON.parse(sessionStorage.getItem("answers"));

    $("#answer").val(storedAnswers[number]);

    if (number == 14) {
      $(".question").html(question14);
    } else if (number == 15) {
      $(".question").html(question15);
    } else {
      $(".question").html("hasellus accumsan ullamcorper metus vitae blandit. Curabitur tincidunt mauris in vehicula porttitor. Integer lacus est, molestie sit amet odio ut, vestibulum gravida nibh.<hr/>");
    }


  })

  $("#previous-button").click( function() {

    var matches = currentQuestion.match(/Question (\d+)/);

    if (matches[1] != 14) {
      $('#next-button').prop('disabled', false);
    }
    console.log(matches[1]);

      var number = +matches[1] - +1;
      $(".sidebar-nav li").removeClass("active");
      console.log(number)
      $("#q" + number).addClass("active");
      if (+matches[1] >=2) {
        var previousQuestion = "Question " + number;
        $("#question-number").text(previousQuestion);
        currentQuestion = previousQuestion;

        if (matches[1] == 2) {
          $('#previous-button').prop('disabled', true);
        }
      }

    var storedAnswers = JSON.parse(sessionStorage.getItem("answers"));
    storedAnswers[matches[1]] = $("#answer").val();
    sessionStorage.setItem("answers", JSON.stringify(storedAnswers));
    $("#answer").val('');


    var previousQuestion = +matches[1] - +1;
    $("#answer").val(storedAnswers[previousQuestion]);

    if (number == 14) {
      $(".question").html(question14);
    } else if (number == 15) {
      $(".question").html(question15);
    } else {
      $(".question").html("hasellus accumsan ullamcorper metus vitae blandit. Curabitur tincidunt mauris in vehicula porttitor. Integer lacus est, molestie sit amet odio ut, vestibulum gravida nibh.<hr/>");
    }


  })

  $("#submit-button").click(function(){
    var storedAnswers = JSON.parse(sessionStorage.getItem("answers"));
    var matches = currentQuestion.match(/Question (\d+)/);

    storedAnswers[matches[1]] = $("#answer").val();
    sessionStorage.setItem("answers", JSON.stringify(storedAnswers));

    var answeredQuestions = 0;
    for (var i = 1; i <=15; i++) {
      if (storedAnswers[i] != "") {
        answeredQuestions++;
      }
    }

    var attempted = Math.round((answeredQuestions/15)*100);
    sessionStorage.setItem("attempted",attempted);

    $(".percent").html( attempted + "%");

  })

  $('#yes-save').click(function(){

    var storedAnswers = JSON.parse(sessionStorage.getItem("answers"));
    var matches = currentQuestion.match(/Question (\d+)/);

    storedAnswers[matches[1]] = $("#answer").val();
    sessionStorage.setItem("answers", JSON.stringify(storedAnswers));

    var answeredQuestions = 0;
    for (var i = 1; i <=15; i++) {
      if (storedAnswers[i] != "") {
        answeredQuestions++;
      }
    }
    var attempted = Math.round((answeredQuestions/15)*100);
    sessionStorage.setItem("attempted",attempted);
    window.open("Index.html","_self");
    sessionStorage.setItem("saved", "true");
  });

  $("#yes-submit").click(function(){
    window.open("Index.html","_self");
    sessionStorage.setItem("saved", "submitted");
    sessionStorage.setItem("disablebtns", "true");

  })

  $("#yes-quit").click(function(){
    window.open("Index.html","_self");
  })

})
