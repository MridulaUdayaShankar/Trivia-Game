$(document).ready(function() {
  $("#start").on("click", start());
  
  var time = 0;
  newQuestion();
  updateScore();
  function reset() {
    time = 0;
    $("#display").text("00:00");
  }

  function start() {
    intervalId = setInterval(count, 3000);
  }

  function stop() {
    clearInterval(intervalId);
  }

  function count() {
    time++;
    var converted = timeConverter(time);
    $("#display").text(converted);
  }

  function timeConverter(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - minutes * 60;

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    } else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }

  var questions = {};
  var score = 0;
  // Variable to hold the index of current question.
  var questionIndex = 0;

  function newQuestion() {
    // If there are still more questions, render the next one.
    if (questionIndex <= (questions.length - 1)) {
      document.querySelector("#question").innerHTML = questions[questionIndex].q;
    }
    // If there aren't, render the end game screen.
    else {
      document.querySelector("#question").innerHTML = "Game Over!";
      document.querySelector("#score").innerHTML = "Final Score: " + score + " out of " + questions.length;
    }
  }

  // Function that updates the score...
  function updateScore() {
    document.querySelector("#score").innerHTML = "Score: " + score;
  }

  

  // When the user presses a key, it will run the following function...
  

    // If there are no more questions, stop the function.
    if (questionIndex === questions.length) {
      return;
    }
        score++;
        updateScore();
      

      // Increment the questionIndex variable and call the renderQuestion function.
      questionIndex++;
     newQuestion();

    })

    

});
