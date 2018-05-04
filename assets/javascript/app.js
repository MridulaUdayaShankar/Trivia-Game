$(document).ready(function() {
  var questionsList = [
    {
      q: "1. What is the capital of New Zealand?",
      a: "Wellington",
      options: ["Wellington", "Auckland", "Hamilton", "New Plymouth"]
    },
    {
      q: "2. Christiana is the former name of which European city?",
      a: "Oslo",
      options: ["Paris", "Berlin", "Moscow", "Oslo"]
    },
    {
      q: "3. Dushanbe is the capital of which Central Asian republic?",
      a: " Tajikistan",
      options: ["Kazakhstan", "Turkmenistan", "Tajikistan", "Kyrgyzstan"]
    },
    {
      q: "4. Michael Bloomberg is the mayor of which US city?",
      a: "New York",
      options: ["California", "Texas", "New York", "Florida"]
    },
    {
      q: "5. In which European city would you find the Spanish Riding School?",
      a: "Vienna",
      options: ["Italy", "Vienna", "Paris", "Oslo"]
    },
    {
      q: "6. Until 1868, which city was the capital of Japan?",
      a: "Kyoto",
      options: ["Kyoto", "Kashiwabara Yamato", "Nagaoka-kyō", "Kashihara Nara"]
    },
    {
      q: "7. Which US city hosted the 1904 Summer olympic Games?",
      a: "St Louis",
      options: ["Los Angeles", "San Francisco", "St Louis", "New Jersey"]
    },
    {
      q:
        "8. Which Canadian city is home to the ice hockey team the Maple Leafs?",
      a: "Toronto",
      options: ["Montreal", "Kingston", "Charlottetown", "Toronto"]
    },
    {
      q: "9. St Paul's is a suburb of which UK city?",
      a: "Bristol",
      options: ["Bristol", "Manchester", "Birmingham", "Glasgow"]
    },
    {
      q: "10. In 1998, Kazakhstan moved its capital from Almaty to which city?",
      a: "Astana",
      options: ["Almaty", "Astana", "Turkistan", "Tashkent"]
    }
  ];

  var index = 0;
  var questionIndex = 0;
  var maxQuestions = questionsList.length;
  

  function renderQuestion (index) {
    var currentQuestion = questionsList[index];
    console.log('currentQuestion', currentQuestion);
    var qContainer = $('#question');
    qContainer.append($('<p>').html(currentQuestion.q));

    currentQuestion.options.forEach(function(o) {
        $('<span>').html(o).appendTo(qContainer);
    });
  }

    $("#start").on("click", function(){

  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  
  // Our stopwatch object
  var stopwatch = {
  
    time: 0,
  
    reset: function() {
  
      stopwatch.time = 0;
  
      // DONE: Change the "display" div to "00:00."
      $("#display").text("00:00");
  
    },
    start: function() {
  
      // DONE: Use setInterval to start the count here and set the clock to running.
      if (!clockRunning) {
        intervalId = setInterval(stopwatch.count, 1000);
        clockRunning = true;
      }
    renderQuestion();

    },
    stop: function() {
  
      // DONE: Use clearInterval to stop the count here and set the clock to not be running.
      clearInterval(intervalId);
      clockRunning = false;
    },
    count: function() {
  
      // DONE: increment time by 1, remember we cant use "this" here.
      stopwatch.time++;
  
      // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
      //       and save the result in a variable.
      var converted = stopwatch.timeConverter(stopwatch.time);
      console.log(converted);
  
      // DONE: Use the variable we just created to show the converted time in the "display" div.
      $("#display").text(converted);
    },
    timeConverter: function(t) {
  
      var minutes = Math.floor(t / 60);
      var seconds = t - (minutes * 60);
  
      if (seconds < 10) {
        seconds = "0" + seconds;
      }
  
      if (minutes === 0) {
        minutes = "00";
      }
      else if (minutes < 10) {
        minutes = "0" + minutes;
      }
  
      return minutes + ":" + seconds;
    }
  };
    });

});
