



$(document).ready(function() {
  //$("#gameReload").click(function(event) {
    //event.preventDefault();
    var p1Score = 0;
    var p2Score = 0;
    var roundScore = 0;
    var currentRoll = 1;

    //p1 buttons
    $("#p1Roll").click(function() {
      currentRoll = Math.floor(Math.random() * 6) + 1;
      console.log(currentRoll);
      roundScore += currentRoll;
      console.log("score", roundScore);
      if (currentRoll === 1) {
        roundScore = 0;
        //console.log("roundscore", roundScore);
        // $("#p1Roll").addClass("disabled");
        // $("#p1Pass").addClass("disabled");
        // $("#p2Roll").removeClass("disabled");
        // $("#p2Pass").removeClass("disabled");
        $("#p1Roll").prop("disabled", true);
        $("#p1Pass").prop("disabled", true);
        $("#p2Roll").prop("disabled", false);
        $("#p2Pass").prop("disabled", false);
      }
    });
    $("#p1Pass").click(function() {
      // $("#p1Roll").addClass("disabled");
      // $("#p1Pass").addClass("disabled");
      // $("#p2Roll").removeClass("disabled");
      // $("#p2Pass").removeClass("disabled");
      $("#p1Roll").prop("disabled", true);
      $("#p1Pass").prop("disabled", true);
      $("#p2Roll").prop("disabled", false);
      $("#p2Pass").prop("disabled", false);
      p1Score += roundScore;
      console.log("p1score", p1Score);
      roundScore = 0;
    });

    //p2 buttons
    $("#p2Roll").click(function() {
      currentRoll = Math.floor(Math.random() * 6) + 1;
      console.log(currentRoll);
      roundScore += currentRoll;
      console.log("score", roundScore);
      if (currentRoll === 1) {
        roundScore = 0;
        //console.log("roundscore", roundScore);
        // $("#p2Roll").addClass("disabled");
        // $("#p2Pass").addClass("disabled");
        // $("#p1Roll").removeClass("disabled");
        // $("#p1Pass").removeClass("disabled");
        $("#p2Roll").prop("disabled", true);
        $("#p2Pass").prop("disabled", true);
        $("#p1Roll").prop("disabled", false);
        $("#p1Pass").prop("disabled", false);
      }
    });
    $("#p2Pass").click(function() {
      // $("#p2Roll").addClass("disabled");
      // $("#p2Pass").addClass("disabled");
      // $("#p1Roll").removeClass("disabled");
      // $("#p1Pass").removeClass("disabled");
      $("#p2Roll").prop("disabled", true);
      $("#p2Pass").prop("disabled", true);
      $("#p1Roll").prop("disabled", false);
      $("#p1Pass").prop("disabled", false);
      p2Score += roundScore;
      console.log("p2score", p2Score);
      roundScore = 0;
    });


  });
//});
