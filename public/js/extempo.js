function padZeros(number, length) {
  var output = number.toString();
  while (output.length < length) {
    output = '0' + output;
  }
  return output;
}
$(document).ready(function() {
  var socket = io.connect();
  var timerIntval = null;
  socket.on('set_timer', function(data) {
    $('#client-game-time > #min').text(padZeros(data.minutes, 2));
    $('#client-game-time > #sec').text(padZeros(data.seconds, 2));
  });
  socket.on('start_timer', function(data) {
    $('#client-choice-a').attr('disabled', false);
    $('#client-choice-b').attr('disabled', false);
    $('#client-choice-c').attr('disabled', false);
    $('#client-choice-d').attr('disabled', false);
    var min = parseInt($('#min').text());
    var sec = parseInt($('#sec').text());
    var audioElement;
    choice = '';
    timerIntval = setInterval(function() {
      if (sec == 0 && min == 0) {
        clearInterval(timerIntval);
        audioElement.stop();
        $('#client-choice-a').attr('disabled', true);
        $('#client-choice-b').attr('disabled', true);
        $('#client-choice-c').attr('disabled', true);
        $('#client-choice-d').attr('disabled', true);
        if (choice == '') {
          score = 0;
        } else {
          if (choice == correctAnswer) {
            if (questionDifficulty == 'earthshaking') {
              score = 15;
            } else if (questionDifficulty == 'mindblowing') {
              score = 10;
            }
          } else {
            score = 0;
          }
        }
      } else {
        if (sec == 1) {
          audioElement = new Audio('../sounds/school_bell.wav');
          audioElement.play();
        } else if (sec >= 2 && sec <= 6) {
          audioElement = new Audio('../sounds/clock_buzzing.wav');
          audioElement.play();
        } else {
          audioElement = new Audio('../sounds/clock_beating.wav');
          audioElement.play();
        }
        sec--;
        if (min > 0 && sec == -1) {
          sec = 59;
          min--;
        }
        if (sec <= 9) {
          $('#sec').text('0' + sec);
        } else {
          $('#sec').text(sec);
        }
        if (min <= 9) {
          $('#min').text('0' + min);
        } else {
          $('#min').text(min);
        }
      }
      console.log(timerIntval);
    }, 1000);
  });
  socket.on('stop_timer', function(data) {
    clearInterval(timerIntval);
    $('#client-choice-a').attr('disabled', true);
    $('#client-choice-b').attr('disabled', true);
    $('#client-choice-c').attr('disabled', true);
    $('#client-choice-d').attr('disabled', true);
  });
});