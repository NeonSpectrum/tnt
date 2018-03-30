$(document).ready(function() {
  var socket = io.connect();
  socket.emit('admin_reload_available_questions', true);
  if (urlParams['id']) {
    socket.emit('admin_request_input', urlParams['id']);
  }
  socket.on('update_question_table', function(data) {
    var element = '';
    $('#row-count').text(data.length);
    $('#questions-table > tbody').html('');
    for (var i = 0; i < data.length; i++) {
      element += '<tr id="' + data[i]._id + '">';
      // element += '<td>' + data[i]._id + '</td>';
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
      element += '<td>';
      element += '<button class="icon-button" onclick="location.href=\'/question_manager/edit?id=' + data[i]._id + '\'"><span class="fa fa-pencil"></span></button>&nbsp;';
      if (data[i].enabled == true) {
        element += '<button class="icon-button btnDisable"><span class="fa fa-times"></span></button>';
      } else {
        element += '<button class="icon-button btnEnable"><span class="fa fa-check"></span></button>';
      }
      element += '</td>';
      element += '</tr>';
    }
    $('#questions-table > tbody').html(element);
    $("button.btnDisable").click(function() {
      if (confirm("Are you sure do you want to disable this question?")) {
        $.ajax({
          type: 'POST',
          url: '/question_manager/edit',
          data: {
            mode: "disable",
            id: $(this).closest("tr").attr("id")
          },
          success: function(response) {
            if (response == "ok") {
              alert("Disabled Successfully!");
              location.reload();
            } else {
              alert(response);
            }
          }
        });
      }
    });
    $("button.btnEnable").click(function() {
      if (confirm("Are you sure do you want to enable this question?")) {
        $.ajax({
          type: 'POST',
          url: '/question_manager/edit',
          data: {
            mode: "enable",
            id: $(this).closest("tr").attr("id")
          },
          success: function(response) {
            if (response == "ok") {
              alert("Enabled Successfully!");
              location.reload();
            } else {
              alert(response);
            }
          }
        });
      }
    });
  });
  socket.on("supply_input_edit_question", function(data) {
    for (var i = 0; i < data.length; i++) {
      $("input[name=question]").val(data[i].question);
      $("select[name=difficulty]").val(data[i].difficulty);
      $("select[name=category]").val(data[i].category);
      $("select[name=correctAnswer]").val(data[i].correct_answer);
      $("input[name=optionA]").val(data[i].choice_a);
      $("input[name=optionB]").val(data[i].choice_b);
      $("input[name=optionC]").val(data[i].choice_c);
      $("input[name=optionD]").val(data[i].choice_d);
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