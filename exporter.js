var pdf = require('html-pdf');
var path = require('path');
module.exports = function() {
  return {
    result: function(db, callback) {
      db.collection("answersheet").find().sort({
        college: 1,
        question_number: 1
      }).toArray(function(err, result) {
        if (err) throw err;
        var college = "",
          score = 0;
        var table = '<table width="100%" border="1" cellspacing="0">';
        for (var i = 0; result.length != 0 && i <= result.length; i++) {
          if (i == result.length || college != result[i].college) {
            if (i != 0) {
              table += `
                <tr style="background-color:rgb(255,255,204)">
                  <td width="50%">Total:</td>
                  <td width="50%">` + score + `</td>
                </tr>
              </tbody>
              `;
              score = 0;
              if (i == result.length) {
                break;
              }
            }
            table += `
              <thead>
                <th colspan="2">` + result[i].college + `</th>
              </thead>
              <tbody>
            `;
            college = result[i].college;
          }
          table += `
                <tr>
                  <td width="50%">Question ` + result[i].question_number + `:</td>
                  <td width="50%">` + result[i].score + `</td>
                </tr>
              `;
          score += parseInt(result[i].score);
        }
        table += "</table>";
        var tntlogo = path.join('file:///', __dirname, '/public/img/logo.png');
        var rndlogo = path.join('file:///', __dirname, '/public/img/rnd.png');
        var html = `
          <html>
            <head>
              <style>
                body{
                  font-family: Tahoma
                }
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
                <img src="` + tntlogo + `" height="100px">
                <span style="font-size: 35px;vertical-align:top;line-height:100px;margin:0 10px;">Tagisan ng Talino Score Result</span>
                <img src="` + rndlogo + `" height="100px">
              </center>
              <br/>
              ` + table + `
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