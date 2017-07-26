var question1 = "some random question, give me a question";
var question2 = "AnotherQuestionnnnnnnnnn"
var question3 = "third question"
var question4 = "some random question, give me a question 4";
var question5 = "AnotherQuestionnnnnnnnnn 5 "
var question6 = "not third question 6"
var question7 = "some random question, give me a question 7";
var question8 = "AnotherQuestionnnnnnnnnn 8"
var question9 = "notthird question 9"
var question10 = "some random question, give me a question 10";
var question11 = "AnotherQuestionnnnnnnnnn 11"
var question12 = "not third question 12"
var question13 = "some random question, give me a question 13";
var question14 = "AnotherQuestionnnnnnnnnn 14"
var question15 = "not third question 15"
var currentQuestion = "Question 1"

$(document).ready(function(){

  $(".nav li").click( function (e) {

    $("#previous-button").prop('disabled', false);
    $('.scroll-area li').removeClass('active');
    var $this = $(this);
    $(this).toggleClass("active");
    e.preventDefault();

    console.log($this);
    var questionNumber = $(this).children('a').html();
    console.log(questionNumber);

    $("#question-number").text(questionNumber);
    currentQuestion = questionNumber;


  })

  $("#next-button").click( function() {
    console.log('hello')

    $("#previous-button").prop('disabled', false);
    var matches = currentQuestion.match(/Question (\d+)/);

    var number = +matches[1] + +1;
    var nextQuestion = "Question " + number;
    $("#question-number").text(nextQuestion);
    currentQuestion = nextQuestion;
    console.log('clicked')
    console.log(number)
    $("#q" + number).addClass("active")
    $("#comment")
  })

  $("#previous-button").click( function() {

    var matches = currentQuestion.match(/Question (\d+)/);
    console.log(matches[1]);
    if (+matches[1] >=2) {
      var number = +matches[1] - +1;
      var previousQuestion = "Question " + number;
      $("#question-number").text(previousQuestion);
      currentQuestion = previousQuestion;

      if (matches[1] == 2) {
        $('#previous-button').prop('disabled', true);
      }
    }

  })


})
