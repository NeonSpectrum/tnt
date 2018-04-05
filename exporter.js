var pdf = require('html-pdf');
var path = require('path');
module.exports = function(db) {
  return {
    result: function(callback) {
      db.collection("answersheet").find().sort({
        college: 1,
        question_number: 1
      }).toArray(function(err, result) {
        if (err) throw err;
        var college = result.length == 0 ? null : result[0].college;
        var colleges = [],
          questions = []
        questions[0] = 0,
          score = [];
        for (var i = 0, j = 0; i < result.length; i++) {
          if (j == 0) {
            score[j] = [];
          }
          if (college != result[i].college) {
            college = result[i].college;
            j++;
            score[j] = [];
            questions[j] = 0;
          }
          colleges[j] = college;
          questions[j]++;
          score[j].push(parseInt(result[i].score));
        }
        var table = `
          <table width="100%" border="1" cellspacing="0">
            <thead>
              <th></th>
              <th>` + colleges.join("</th><th>") + `</th>
            </thead>
            <tbody>
        `;
        maxquestions = questions.reduce(function(x, y) {
          return x > y ? x : y;
        });
        for (var i = 1; i <= maxquestions; i++) {
          table += `
            <tr>
              <td>Question Number #` + i + `</td>
          `;
          for (var j = 0; j < score.length; j++) {
            table += "<td>" + (score[j][i - 1] == undefined ? "N/A" : score[j][i - 1]) + "</td>";
          }
          table += `
            </tr>
          `;
        }
        table += `
            <tfoot>
              <th>Total:</th>
          `;
        for (var j = 0; j < score.length; j++) {
          var total = score[j].reduce(function(total, value) {
            return total += parseInt(value);
          })
          table += "<th>" + total + "</th>";
        }
        table += "</tfoot></tbody></table>";
        var tntlogo = path.join('file:///', __dirname, '/public/img/logo.png');
        var rndlogo = path.join('file:///', __dirname, '/public/img/rnd.png');
        var uelogo = path.join('file:///', __dirname, '/public/img/ue_thumb.png');
        var date = new Date();
        var html = `
          <html>
            <head>
              <style>
                body{
                  font-family: Verdana
                }
                th{
                  background-color:black;
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
                <img src="` + uelogo + `" height="100px">
                <img src="` + rndlogo + `" height="90px">
                <br/><br/>
                <span style="font-size:35px;font-weight:bold">TAGISAN NG TALINO ` + date.getFullYear() + `</span><br/><span style="font-size:25px">SCORE RESULT</span>
              </center>
              <br/>
              ` + table + `
            </body>
          </html>
        `;
        pdf.create(html, {
          "format": 'Letter',
          "orientation": "landscape"
        }).toBuffer(function(err, buffer) {
          if (err) return console.log(err);
          callback(buffer);
        });
      });
    }
  };
}