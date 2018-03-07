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
  $("#btnUploadExcel").click(function() {
    if (confirm("This will clear all questionnaires and import the file.\nAre you sure you want to proceed?")) {
      $("input[name=excelfile]").click();
    }
  });
  $("input[name=excelfile]").change(function() {
    if ($(this).val().indexOf(".xlsx") == -1) {
      alert("Please enter a valid excel file!");
    } else {
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