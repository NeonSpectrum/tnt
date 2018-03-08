var pdf = require('html-pdf');
var path = require('path');
module.exports = function() {
  return {
    result: function(db, callback) {
      db.collection("scoreboard").find({}).toArray(function(err, result) {
        if (err) throw err;
        var table = "";
        for (var i = 0; i < result.length; i++) {
          table += "<tr><td>" + result[i].college + "</td><td>" + result[i].total_score + "</td></tr>";
        }
        var img = path.join('file:///', __dirname, '/public/img/logo.png');
        var html = `
          <html>
            <head>
              <style>
                th{
                  background-color:gray;
                  color:white;
                }
                td{
                  text-align:center;
                }
              </style>
            </head>
            <body style="margin:2em">
              <center>
                <img src="` + img + `" height="100px">
                <span style="font-size: 40px;vertical-align: top;line-height: 100px;margin-left: 10px;">Tagisan ng Talino Score Result</span>
              </center>
              <br/>
              <table width="100%" border="1" cellspacing="0">
                <thead>
                  <th>College</th>
                  <th>Total Score</th>
                </thead>
                <tbody>` + table + `</tbody>
              </table>
            </body>
          </html>
        `;
        pdf.create(html, {
          "format": 'Letter'
        }).toBuffer(function(err, buffer) {
          if (err) return console.log(err);
          callback(buffer);
        });
      });
    }
  };
}