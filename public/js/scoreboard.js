function isItemInObj(obj, index, item) {
  var rtn = 0;
  if (obj.length > 0) {
    var i = 0;
    while (i < obj.length) {
      if (obj[i].question_number == index && obj[i].college == item) {
        rtn = obj[i]['score'];
        break;
      }
      i++;
    }
  }
  return rtn;
}
$(document).ready(function() {
  var socket = io.connect();
  socket.on('update_scoreboard_status', function(connectedClients) {
    $(".online").each(function() {
      $(this).removeClass("online").addClass("offline");
    });
    for (var i = 0; i < connectedClients.length; i++) {
      $("th#" + connectedClients[i].replace(/ /g, "")).removeClass("offline").addClass("online");
      $("[data-var-abbr='" + connectedClients[i] + "']").removeClass("offline").addClass("online");
    }
  });
  socket.on('update_scoreboard', function(data) {
    var element = '';
    $('#scoreboard-table > tbody').html('');
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
    $('#scoreboard-table > tbody').html(element);
    $('#asdasd').scrollTop(9999);
    $('.stt').each(function(index, value) {
      var j = 0;
      while (j < data.scoreboard.length) {
        if (data.scoreboard[j].college == $(this).data('var-abbr')) {
          $(this).text(data.scoreboard[j].total_score);
          break;
        }
        j++;
      }
    });
  });
});