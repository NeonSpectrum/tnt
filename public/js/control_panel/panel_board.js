$(document).ready(function() {
  var socket = io.connect()
  var questionNumber = 1
  var questionDifficulty = null
  var kayangkayaTime = 10
  var isipisipTime = 15
  var currentQuestion = ''
  socket.emit('admin_show_total_score')
  socket.emit('admin_reload_available_questions')
  socket.emit('get_current_question')
  socket.emit('get_logs')
  socket.emit('get_current_step')
  socket.on('set_logs', function(data) {
    for (var i = 0; i < data.length; i++) {
      $('.eventlog-body').prepend(
        "<li><span style='color:#317ba5'>" +
          data[i].timestamp +
          "</span><div style='margin-left:2em;text-align:justify'>" +
          data[i].message +
          '</div></li>'
      )
    }
  })
  socket.on('notification', function(data) {
    $('.list-box-item#' + data.college.replace(/ /g, '')).removeAttr('data-balloon-visible')
    $('.list-box-item#' + data.college.replace(/ /g, '')).attr('data-balloon', data.message)
    setTimeout(function() {
      $('.list-box-item#' + data.college.replace(/ /g, '')).attr('data-balloon-visible', '')
    }, 500)
  })
  socket.on('flash_modal', function(data) {
    setModalContent('modal', data.header, data.message)
    openModal('modal')
    setTimeout(function() {
      closeModal('modal')
      if (data.update) {
        socket.emit('get_current_step')
      }
    }, 2000)
  })
  socket.on('update_colleges_list', function(data) {
    $('.list-box-item').css('background-color', '')
    $.each(data, function(index, value) {
      $('.list-box-item#' + value.replace(/ /g, '')).css('background-color', 'white')
    })
  })
  socket.on('update_question_table', function(data) {
    var element = ''
    $('#row-count').text(data.length)
    $('#questions-table > tbody').html('')
    for (var i = 0; i < data.length; i++) {
      element += '<tr>'
      element += '<td>' + data[i]._id + '</td>'
      element += '<td>' + data[i].category + '</td>'
      element += '<td>' + data[i].difficulty + '</td>'
      element += '<td>' + data[i].question + '</td>'
      element += '<td>' + data[i].choice_a + '</td>'
      element += '<td>' + data[i].choice_b + '</td>'
      element += '<td>' + data[i].choice_c + '</td>'
      element += '<td>' + data[i].choice_d + '</td>'
      element += '<td>' + data[i].correct_answer + '</td>'
      element += '<td>' + data[i].released + '</td>'
      element += '</tr>'
    }
    $('#questions-table > tbody').html(element)
  })
  onDataButtonClick('nullify-question-button', function() {
    var qn = prompt('Enter Question Number:', '')
    if (qn) {
      socket.emit('admin_nullify_question', qn)
    } else {
      alert('Nothing to nullify.')
    }
  })
  onDataButtonClick('randomize-difficulty-picker-button', function() {
    socket.emit('admin_request_difficulty_picker', true)
  })
  onDataButtonClick('request-question-difficulty-button', function() {
    socket.emit('admin_request_question_difficulty', true)
  })
  onDataButtonClick('set-question-difficulty-button', function() {
    if ($('#set-difficulty-field').val() == '') {
      $('#set-difficulty-field').focus()
    } else {
      socket.emit('admin_set_question_difficulty_button', $('#set-difficulty-field').val())
    }
  })
  onDataButtonClick('broadcast-question-button', function() {
    var qn = prompt('Enter Question Number:', questionNumber)
    socket.emit('admin_broadcast_question', {
      questionNumber: qn
    })
    questionNumber = parseInt(qn) + 1
    if (questionDifficulty == 'kayangkaya') {
      socket.emit('admin_set_timer', {
        minutes: 0,
        seconds: kayangkayaTime
      })
    } else if (questionDifficulty == 'isipisip') {
      socket.emit('admin_set_timer', {
        minutes: 0,
        seconds: isipisipTime
      })
    }
  })
  socket.on('broadcast_question', function(data) {
    // questionID = data.questions[0]._id;
    // if (data.questions[0].difficulty == 'earthshaking') {
    //   $('#client-question-difficulty').html('Earth-Shaking [' + data.questions[0].category + ']');
    // } else if (data.questions[0].difficulty == 'mindblowing') {
    //   $('#client-question-difficulty').html('Mind-Blowing [' + data.questions[0].category + ']');
    // } else if (data.questions[0].difficulty == 'kayangkaya') {
    //   $('#client-question-difficulty').html('Kayang-Kaya [' + data.questions[0].category + ']');
    // } else if (data.questions[0].difficulty == 'isipisip') {
    //   $('#client-question-difficulty').html('Isip-Isip [' + data.questions[0].category + ']');
    // }
    // questionNumber = data.questionNumber;
    // correctAnswer = data.questions[0].correct_answer;
    // questionDifficulty = data.questions[0].difficulty;
    // choiceA = data.questions[0].choice_a;
    // choiceB = data.questions[0].choice_b;
    // choiceC = data.questions[0].choice_c;
    // choiceD = data.questions[0].choice_d;
    $('#client-question-number').html(data.questionNumber)
    $('#client-question').html((currentQuestion = data.questions[0].question))
  })
  socket.on('show_total_score', function(data) {
    for (var i = 0; i < data.college.length; i++) {
      $('.list-box-item#' + data.college[i].replace(/ /g, '') + ' span').text(data.total_score[i])
    }
  })
  onDataButtonClick('broadcast-correct-answer-button', function() {
    socket.emit('admin_broadcast_correct_answer', true)
  })
  onDataButtonClick('refresh-scoreboard-button', function() {
    socket.emit('admin_update_scoreboard', true)
    socket.emit('admin_show_total_score')
  })
  onDataButtonClick('refresh-client-button', function() {
    socket.emit('admin_refresh_client', true)
  })
  onDataButtonClick('reload-available-questions-button', function() {
    socket.emit('admin_reload_available_questions', true)
  })
  onDataButtonClick('set-timer-button', function() {
    socket.emit('admin_set_timer', {
      minutes: $('input#game-minutes').val(),
      seconds: $('input#game-seconds').val()
    })
  })
  onDataButtonClick('start-timer-button', function() {
    socket.emit('admin_start_timer', true)
  })
  onDataButtonClick('stop-timer-button', function() {
    socket.emit('admin_stop_timer', true)
  })
  onDataButtonClick('populate-questionnaire-button', function() {
    if (
      confirm(
        'Please make sure you have reset the questionnaire before populating it. Doing so without resetting it may result to duplication of questions.\n\nAre you sure you want to populate questionnaire?'
      )
    ) {
      socket.emit('admin_populate_questionnaire', true)
      location.reload()
    }
  })
  onDataButtonClick('reset-questionnaire-button', function() {
    if (
      confirm(
        'Resetting questionnaire will remove all questions from the database. Please make sure you have made some backups of the questionnaire beforehand.\n\nAre you sure you want to reset questionnaire?'
      )
    ) {
      socket.emit('admin_reset_questionnaire', true)
      location.reload()
    }
  })
  onDataButtonClick('reset-answersheet-button', function() {
    if (
      confirm(
        'Resetting answersheet will remove all answers from the database. Please make sure you have made some backups of the questionnaire beforehand.\n\nAre you sure you want to reset questionnaire?'
      )
    ) {
      socket.emit('admin_reset_answersheet', true)
      location.reload()
    }
  })
  onDataButtonClick('reset-scoreboard-button', function() {
    if (
      confirm(
        'Resetting scoreboard will reset all scores to 0. Please make sure you have made some backups of the scoreboard beforehand.\n\nAre you sure you want to reset scoreboard?'
      )
    ) {
      socket.emit('admin_reset_scoreboard', true)
      location.reload()
    }
  })
  keyboardJS.on('alt + q', function() {
    $('[data-button=reset-scoreboard-button]').click()
  })
  keyboardJS.on('alt + p', function() {
    $('[data-button=randomize-difficulty-picker-button]').click()
  })
  keyboardJS.on('alt + r', function() {
    $('[data-button=refresh-scoreboard-button]').click()
  })
  keyboardJS.on('alt + a', function() {
    $('[data-button=set-timer-button]').click()
  })
  keyboardJS.on('alt + s', function() {
    $('[data-button=start-timer-button]').click()
  })
  keyboardJS.on('alt + d', function() {
    $('[data-button=stop-timer-button]').click()
  })
  keyboardJS.on('alt + c', function() {
    $('[data-button=broadcast-correct-answer-button]').click()
  })
  socket.on('ping', function(data) {
    console.log(data)
    if (data != undefined) {
      for (var i = 0; i < Object.keys(data).length; i++) {
        $('.list-box-item#' + Object.keys(data)[i].replace(/ /g, '')).attr(
          'data-balloon',
          data[Object.keys(data)[i]].ping <= 0 ? 'N/A' : data[Object.keys(data)[i]].ping + 'ms'
        )
      }
    }
  })
  $('#ping-check').change(function() {
    if ($(this).prop('checked')) {
      $('.list-box-item').attr('data-balloon-visible', '')
    } else {
      $('.list-box-item').removeAttr('data-balloon-visible')
    }
  })
  $('.list-box-item').click(function() {
    var college = $(this)
      .attr('id')
      .replace('-', ' - ')
    socket.emit('get_ping', college)
  })
  var pinginterval = null
  $('#btnStartPing').click(function() {
    $(this).prop('disabled', true)
    $('#btnStopPing').prop('disabled', false)
    socket.emit('get_ping', 'all')
    pinginterval = setInterval(function() {
      socket.emit('get_ping', 'all')
    }, parseInt($('#ping-interval').val()) * 1000)
    $('#ping-check')
      .prop('checked', true)
      .trigger('change')
    console.log('Ping Interval will run every ' + $('#ping-interval').val() + ' seconds.')
  })
  $('#btnStopPing').click(function() {
    $(this).prop('disabled', true)
    $('#btnStartPing').prop('disabled', false)
    clearInterval(pinginterval)
    pinginterval = null
    $('#ping-check')
      .prop('checked', false)
      .trigger('change')
    console.log('Ping Interval stopped')
  })
  socket.on('set_current_step', function(step) {
    $('[data-button=randomize-difficulty-picker-button]').prop('disabled', true)
    $('[data-button=broadcast-question-button]').prop('disabled', true)
    $('[data-button=set-timer-button]').prop('disabled', true)
    $('[data-button=start-timer-button]').prop('disabled', true)
    $('[data-button=stop-timer-button]').prop('disabled', true)
    $('[data-button=broadcast-correct-answer-button]').prop('disabled', true)
    switch (parseInt(step)) {
      case 1:
        $('[data-button=randomize-difficulty-picker-button]').prop('disabled', false)
        if (currentQuestion) {
          $('[data-button=broadcast-correct-answer-button]').prop('disabled', false)
        }
        break
      case 2:
        $('[data-button=broadcast-question-button').prop('disabled', false)
        break
      case 3:
        $('[data-button=set-timer-button]').prop('disabled', false)
        $('[data-button=start-timer-button]').prop('disabled', false)
        $('[data-button=stop-timer-button]').prop('disabled', false)
        break
      case 4:
        $('[data-button=broadcast-correct-answer-button]').prop('disabled', false)
        break
    }
  })
})
