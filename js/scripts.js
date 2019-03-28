$(document).ready(function() {
  //$("#gameReload").click(function(event) {
    //event.preventDefault();
    var p1Score = 0;
    var p2Score = 0;
    var roundScore = 0;
    var currentRoll = 1;

    //p1 buttons -------------------------------------------
    $("#p1Roll").click(function() {
      currentRoll = Math.floor(Math.random() * 6) + 1;
      console.log(currentRoll);
      $("#p1Dice").fadeOut(300).removeClass("hide");
      setTimeout(function(){
      $("#p1Dice").empty().append('<img src="img/die_face_' + currentRoll + '.png">').fadeIn(300);
      }, 300);
      roundScore += currentRoll;
      console.log("score", roundScore);
      setTimeout(function(){
      $("#roundScore").empty().append(roundScore).fadeIn(300);
      }, 300);
      if (currentRoll === 1) {
        roundScore = 0;
        $("#roundScore").empty().fadeOut(300);
        $("#p1Roll").prop("disabled", true);
        $("#p1Pass").prop("disabled", true);
        $("#p2Roll").prop("disabled", false);
        $("#p2Pass").prop("disabled", false);
      }
    });
    $("#p1Pass").click(function() {
      $("#p1Roll").prop("disabled", true);
      $("#p1Pass").prop("disabled", true);
      $("#p2Roll").prop("disabled", false);
      $("#p2Pass").prop("disabled", false);
      p1Score += roundScore;
      console.log("p1score", p1Score);
      roundScore = 0;
      $("#roundScore").empty();
      $("#p1Score").empty().append(p1Score);
      if (p1Score >= 100) {
        $("#roundScore").empty().append("<h2>Player 1 WINS!</h2>");
      }
    });

    //p2 buttons -------------------------------------------
    $("#p2Roll").click(function() {
      currentRoll = Math.floor(Math.random() * 6) + 1;
      $("#p2Dice").fadeOut(300).removeClass("hide");
      setTimeout(function(){
      $("#p2Dice").empty().append('<img src="img/die_face_' + currentRoll + '.png">').fadeIn(300);
    }, 300);
      console.log(currentRoll);
      roundScore += currentRoll;
      console.log("score", roundScore);
      setTimeout(function(){
      $("#roundScore").empty().append(roundScore).fadeIn(300);
      }, 300);
      if (currentRoll === 1) {
        // $("#p2Dice").empty();
        roundScore = 0;
        $("#roundScore").empty().fadeOut(300);
        $("#p2Roll").prop("disabled", true);
        $("#p2Pass").prop("disabled", true);
        $("#p1Roll").prop("disabled", false);
        $("#p1Pass").prop("disabled", false);
      }
    });
    $("#p2Pass").click(function() {
      $("#p2Roll").prop("disabled", true);
      $("#p2Pass").prop("disabled", true);
      $("#p1Roll").prop("disabled", false);
      $("#p1Pass").prop("disabled", false);
      p2Score += roundScore;
      console.log("p2score", p2Score);
      roundScore = 0;
      $("#roundScore").empty();
      $("#p2Score").empty().append(p2Score);
      if (p2Score >= 100) {
        $("#roundScore").empty().append("<h2>Player 2 WINS!</h2>");
      }
    });


  });
//});
