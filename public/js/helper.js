$(document).ready(function() {
  var socket = io.connect();
  var clientAbbr = $('meta[name="client-abbr"]').attr('content');
  $(".btnCommand").click(function() {
    socket.emit("send_notification", {
      college: clientAbbr,
      message: $(this).text()
    })
  });
});