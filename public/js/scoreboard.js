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

function isArrayContains(arr, str) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(str) > -1) {
      return true;
    }
  }
  return false;
}
$(document).ready(function() {
  var socket = io.connect();
  var connected = [];
  socket.on('update_scoreboard_status', function(connectedClients) {
    connected = connectedClients;
    $(".campus,.colleges,.total,td.college-score").css("display", "none");
    if (isArrayContains(connectedClients, "Manila")) {
      $("#title-manila").show();
    }
    if (isArrayContains(connectedClients, "Caloocan")) {
      $("#title-caloocan").show();
    }
    var manila = 0,
      caloocan = 0;
    for (var i = 0; i < connectedClients.length; i++) {
      $("th#" + connectedClients[i].replace(/ /g, "")).show();
      $("[data-var-abbr='" + connectedClients[i] + "']").show();
      $("td.college-score#" + connectedClients[i].replace(/ /g, "")).show();
      $(".colleges,.total").css("width", 90 / parseInt(connectedClients.length) + "%")
      if (connectedClients[i].indexOf("Manila") > -1) {
        manila++;
      } else if (connectedClients[i].indexOf("Caloocan") > -1) {
        caloocan++;
      }
    }
    $("#title-manila").attr("colspan", manila);
    $("#title-caloocan").attr("colspan", caloocan);
  });
  socket.on('update_scoreboard', function(data) {
    var element = '';
    $('#scoreboard-table > tbody').html('');
    for (var h = 1; h <= data.rows.length; h++) {
      element += '<tr>';
      element += '<td class="align-center" width="10%">Question #' + h + '</td>';
      element += '<td class="align-center college-score" id="CAS-Manila">' + isItemInObj(data.answersheet, h, 'CAS - Manila') + '</td>';
      element += '<td class="align-center college-score" id="CBA-Manila">' + isItemInObj(data.answersheet, h, 'CBA - Manila') + '</td>';
      element += '<td class="align-center college-score" id="CCSS-Manila">' + isItemInObj(data.answersheet, h, 'CCSS - Manila') + '</td>';
      element += '<td class="align-center college-score" id="CDent-Manila">' + isItemInObj(data.answersheet, h, 'CDent - Manila') + '</td>';
      element += '<td class="align-center college-score" id="CEduc-Manila">' + isItemInObj(data.answersheet, h, 'CEduc - Manila') + '</td>';
      element += '<td class="align-center college-score" id="CEng-Manila">' + isItemInObj(data.answersheet, h, 'CEng - Manila') + '</td>';
      element += '<td class="align-center college-score" id="CAS-Caloocan">' + isItemInObj(data.answersheet, h, 'CAS - Caloocan') + '</td>';
      element += '<td class="align-center college-score" id="CBA-Caloocan">' + isItemInObj(data.answersheet, h, 'CBA - Caloocan') + '</td>';
      element += '<td class="align-center college-score" id="CEng-Caloocan">' + isItemInObj(data.answersheet, h, 'CEng - Caloocan') + '</td>';
      element += '<td class="align-center college-score" id="CFAD-Caloocan">' + isItemInObj(data.answersheet, h, 'CFAD - Caloocan') + '</td>';
      element += '</tr>';
    }
    $('#scoreboard-table > tbody').html(element);
    $("td.college-score").css("display", "none");
    for (var i = 0; i < connected.length; i++) {
      $("td.college-score#" + connected[i].replace(/ /g, "")).show();
    }
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