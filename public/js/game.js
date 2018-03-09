function padZeros(number, length) {
  var output = number.toString();
  while (output.length < length) {
    output = '0' + output;
  }
  return output;
}
$(document).ready(function() {
  var socket = io.connect();
  var clientAbbr = $('meta[name="client-abbr"]').attr('content');
  var choice = '';
  var score = 0;
  var timerIntval = null;
  var questionID = null;
  var correctAnswer = null;
  var questionNumber = null;
  var questionDifficulty = null;
  var choiceA = null;
  var choiceB = null;
  var choiceC = null;
  var choiceD = null;
  socket.on('flash_modal', function(data) {
    setModalContent('modal', data.header, data.message);
    if (data.college == clientAbbr) {
      openModal('difficulty-picker');
    } else {
      openModal('modal');
      setTimeout(function() {
        closeModal('modal');
      }, 5000);
    }
  });
  socket.on('update_scoreboard', function(data) {
    var j = 0;
    while (j < data.scoreboard.length) {
      if (data.scoreboard[j].college == clientAbbr) {
        $('#client-college-score').text(data.scoreboard[j].total_score);
        break;
      }
      j++;
    }
  });
  socket.on('request_check_login', function(data) {
    socket.emit('client_login', clientAbbr);
  });
  socket.on('request_question_difficulty', function(data) {
    if (data == clientAbbr) {
      openModal('difficulty-picker');
    }
  });
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
    choice = '';
    timerIntval = setInterval(function() {
      if (sec == 0 && min == 0) {
        clearInterval(timerIntval);
        $('#client-choice-a').attr('disabled', true);
        $('#client-choice-b').attr('disabled', true);
        $('#client-choice-c').attr('disabled', true);
        $('#client-choice-d').attr('disabled', true);
        if (choice == '') {
          score = 0;
        } else {
          if (choice == correctAnswer) {
            if (questionDifficulty == 'earthshaking') {
              score = 10;
            } else if (questionDifficulty == 'mindblowing') {
              score = 15;
            } else if (questionDifficulty == 'kayangkaya') {
              score = 10;
            } else if (questionDifficulty == 'isipisip') {
              score = 15;
            }
          } else {
            score = 0;
          }
        }
      } else {
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
  socket.on('refresh_client', function(data) {
    location.reload();
  });
  socket.on('broadcast_question', function(data) {
    questionID = data.questions[0]._id;
    $('#client-choice-a').removeClass('selected').attr('disabled', true);
    $('#client-choice-b').removeClass('selected').attr('disabled', true);
    $('#client-choice-c').removeClass('selected').attr('disabled', true);
    $('#client-choice-d').removeClass('selected').attr('disabled', true);
    if (data.questions[0].difficulty == 'earthshaking') {
      $('#client-question-difficulty').html('Earth-Shaking [' + data.questions[0].category + ']');
    } else if (data.questions[0].difficulty == 'mindblowing') {
      $('#client-question-difficulty').html('Mind-Blowing [' + data.questions[0].category + ']');
    } else if (data.questions[0].difficulty == 'kayangkaya') {
      $('#client-question-difficulty').html('Kayang-Kaya [' + data.questions[0].category + ']');
    } else if (data.questions[0].difficulty == 'isipisip') {
      $('#client-question-difficulty').html('Isip-Isip [' + data.questions[0].category + ']');
    }
    questionNumber = data.questionNumber;
    correctAnswer = data.questions[0].correct_answer;
    questionDifficulty = data.questions[0].difficulty;
    choiceA = data.questions[0].choice_a;
    choiceB = data.questions[0].choice_b;
    choiceC = data.questions[0].choice_c;
    choiceD = data.questions[0].choice_d;
    $('#client-question-number').html(data.questionNumber);
    $('#client-question').html(data.questions[0].question);
    $('#client-choice-a > .block-body').html(data.questions[0].choice_a);
    $('#client-choice-b > .block-body').html(data.questions[0].choice_b);
    $('#client-choice-c > .block-body').html(data.questions[0].choice_c);
    $('#client-choice-d > .block-body').html(data.questions[0].choice_d);
  });
  socket.on('broadcast_correct_answer', function(data) {
    var ca = '';
    $('#client-choice-a > .block-body').attr('disabled', true);
    $('#client-choice-b > .block-body').attr('disabled', true);
    $('#client-choice-c > .block-body').attr('disabled', true);
    $('#client-choice-d > .block-body').attr('disabled', true);
    switch (correctAnswer) {
      case 'A':
        ca = 'A.) ' + choiceA;
        break;
      case 'B':
        ca = 'B.) ' + choiceB;
        break;
      case 'C':
        ca = 'C.) ' + choiceC;
        break;
      case 'D':
        ca = 'D.) ' + choiceD;
        break;
    }
    setModalContent('modal', 'Correct Answer', '<div class="text-center">' + ca + '</div>');
    openModal('modal');
    socket.emit('client_score', {
      college: clientAbbr,
      question_number: questionNumber,
      question_id: questionID,
      score: score
    });
    setTimeout(function() {
      closeModal('modal');
    }, 4000);
    return false;
  });
  onDataButtonClick('kayangkaya-button', function() {
    socket.emit('client_request_question_difficulty', 'kayangkaya');
    closeModal('difficulty-picker');
  });
  onDataButtonClick('isipisip-button', function() {
    socket.emit('client_request_question_difficulty', 'isipisip');
    closeModal('difficulty-picker');
  });
  $('.choice').click(function() {
    choice = $(this).data('choice-letter');
    $('.choice').removeClass('selected');
    $(this).addClass('selected');
  });
  $("#logout-button").click(function() {
    socket.emit("client_logout", clientAbbr);
  });
});