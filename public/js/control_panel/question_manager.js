$(document).ready(function() {
  var socket = io.connect();
  socket.emit('admin_reload_available_questions', true);
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
      element += '<td>' + data[i].timer + '</td>';
      element += '</tr>';
    }
    $('#questions-table > tbody').html(element);
  });
});