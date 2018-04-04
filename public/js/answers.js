function isItemInObj(obj, index, item) {
  var rtn = "-";
  if (obj.length > 0) {
    for (var i = 0; i < obj.length; i++) {
      if (obj[i].question_number == index && obj[i].college == item) {
        rtn = obj[i].answer;
        break;
      }
    }
  }
  return rtn;
}
$(document).ready(function() {
  $(".colleges,.campus").show();
  var socket = io.connect();
  socket.on('update_answersheet', function(data) {
    var element = '';
    $('#answersheet-table > tbody').html('');
    for (var h = 1; h <= data.rows.length; h++) {
      element += '<tr>';
      element += '<td class="align-center" width="10%">Question #' + h + '</td>';
      element += '<td class="align-center" width="9%">' + isItemInObj(data.answersheet, h, 'CAS - Manila') + '</td>';
      element += '<td class="align-center" width="9%">' + isItemInObj(data.answersheet, h, 'CBA - Manila') + '</td>';
      element += '<td class="align-center" width="9%">' + isItemInObj(data.answersheet, h, 'CCSS - Manila') + '</td>';
      element += '<td class="align-center" width="9%">' + isItemInObj(data.answersheet, h, 'CDent - Manila') + '</td>';
      element += '<td class="align-center" width="9%">' + isItemInObj(data.answersheet, h, 'CEduc - Manila') + '</td>';
      element += '<td class="align-center" width="9%">' + isItemInObj(data.answersheet, h, 'CEng - Manila') + '</td>';
      element += '<td class="align-center" width="9%">' + isItemInObj(data.answersheet, h, 'CAS - Caloocan') + '</td>';
      element += '<td class="align-center" width="9%">' + isItemInObj(data.answersheet, h, 'CBA - Caloocan') + '</td>';
      element += '<td class="align-center" width="9%">' + isItemInObj(data.answersheet, h, 'CEng - Caloocan') + '</td>';
      element += '<td class="align-center" width="9%">' + isItemInObj(data.answersheet, h, 'CFAD - Caloocan') + '</td>';
      element += '</tr>';
    }
    $('#answersheet-table > tbody').html(element);
    $('#asdasd').scrollTop(9999);
  });
});