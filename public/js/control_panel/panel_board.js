$(document).ready(function() {
  var socket = io.connect();
  var questionNumber = 1;
  socket.emit('admin_reload_available_questions', true);
  socket.on('flash_modal', function(data) {
    setModalContent('modal', data.header, data.message);
    openModal('modal');
    setTimeout(function() {
      closeModal('modal');
    }, 2000);
  });
  socket.on('update_colleges_list', function(data) {
    $('#attendance-list').html('');
    $.each(data, function(index, value) {
      $('#attendance-list').append('<div class="list-box-item">' + value + '</div>');
    });
  });
  socket.on('update_question_table', function(data) {
    var element = '';
    $('#row-count').text(data.length);
    $('#questions-table > tbody').html('');
    for (var i = 0; i < data.length; i++) {
      element += '<tr>';
      element += '<td>' + data[i]._id + '</td>';
      element += '<td>' + data[i].category + '</td>';
      element += '<td>' + data[i].difficulty + '</td>';
      element += '<td>' + data[i].question + '</td>';
      element += '<td>' + data[i].choice_a + '</td>';
      element += '<td>' + data[i].choice_b + '</td>';
      element += '<td>' + data[i].choice_c + '</td>';
      element += '<td>' + data[i].choice_d + '</td>';
      element += '<td>' + data[i].correct_answer + '</td>';
      element += '<td>' + data[i].released + '</td>';
      element += '</tr>';
    }
    $('#questions-table > tbody').html(element);
  });
  onDataButtonClick('nullify-question-button', function() {
    var qn = prompt('Enter Question Number:', '');
    if (qn != '') {
      socket.emit('admin_nullify_question', qn);
    } else {
      alert('Nothing to nullify.');
    }
  });
  onDataButtonClick('randomize-difficulty-picker-button', function() {
    socket.emit('admin_request_difficulty_picker', true);
  });
  onDataButtonClick('request-question-difficulty-button', function() {
    socket.emit('admin_request_question_difficulty', true);
  });
  onDataButtonClick('set-question-difficulty-button', function() {
    if ($('#set-difficulty-field').val() == '') {
      $('#set-difficulty-field').focus();
    } else {
      socket.emit('admin_set_question_difficulty_button', $('#set-difficulty-field').val());
    }
  });
  onDataButtonClick('broadcast-question-button', function() {
    var qn = prompt('Enter Question Number:', questionNumber);
    socket.emit('admin_broadcast_question', {
      questionNumber: qn
    });
    questionNumber = parseInt(qn) + 1;
  });
  onDataButtonClick('broadcast-correct-answer-button', function() {
    socket.emit('admin_broadcast_correct_answer', true);
  });
  onDataButtonClick('refresh-scoreboard-button', function() {
    socket.emit('admin_update_scoreboard', true);
  });
  onDataButtonClick('refresh-client-button', function() {
    socket.emit('admin_refresh_client', true);
  });
  onDataButtonClick('reload-available-questions-button', function() {
    socket.emit('admin_reload_available_questions', true);
  });
  onDataButtonClick('set-timer-button', function() {
    socket.emit('admin_set_timer', {
      minutes: $('input#game-minutes').val(),
      seconds: $('input#game-seconds').val()
    });
  });
  onDataButtonClick('start-timer-button', function() {
    socket.emit('admin_start_timer', true);
  });
  onDataButtonClick('stop-timer-button', function() {
    socket.emit('admin_stop_timer', true);
  });
  onDataButtonClick('populate-questionnaire-button', function() {
    if (confirm('Please make sure you have reset the questionnaire before populating it. Doing so without resetting it may result to duplication of questions.\n\nAre you sure you want to populate questionnaire?')) {
      socket.emit('admin_populate_questionnaire', true);
      location.reload();
    }
  });
  onDataButtonClick('reset-questionnaire-button', function() {
    if (confirm('Resetting questionnaire will remove all questions from the database. Please make sure you have made some backups of the questionnaire beforehand.\n\nAre you sure you want to reset questionnaire?')) {
      socket.emit('admin_reset_questionnaire', true);
      location.reload();
    }
  });
  onDataButtonClick('reset-scoreboard-button', function() {
    if (confirm('Resetting scoreboard will reset all scores to 0. Please make sure you have made some backups of the scoreboard beforehand.\n\nAre you sure you want to reset scoreboard?')) {
      socket.emit('admin_reset_scoreboard', true);
      location.reload();
    }
  });
  $("#btnUploadExcel").click(function() {
    $("input[name=excelfile]").click();
  });
  $("input[name=excelfile]").change(function() {
    if ($(this).val().indexOf(".xlsx") == -1) {
      alert("Please enter a valid excel file!");
    } else if (confirm("This will clear all questionnaires and import the file.\nAre you sure you want to proceed?")) {
      var formData = new FormData();
      formData.append('file', $(this).prop('files')[0]);
      $.ajax({
        type: 'POST',
        url: "/importexcel",
        data: formData,
        processData: false,
        contentType: false,
        success: function(response) {
          if (response == "ok") {
            alert("Imported Successfully!");
            location.reload();
          } else {
            alert("There was an error uploading the file!");
          }
        }
      });
    }
  });
});