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
        var college = result.length == 0 ? null : result[0].college;
        var colleges = [],
          questions = 0,
          score = [];
        score[0] = [];
        for (var i = 0, j = 0; i < result.length; i++) {
          if (college != result[i].college) {
            college = result[i].college;
            j++;
            score[j] = [];
            questions = 0;
          }
          colleges[j] = college;
          questions++;
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
        for (var i = 1; i <= questions; i++) {
          table += `
            <tr>
              <td>Question Number #` + i + `</td>
          `;
          for (var j = 0; j < score.length; j++) {
            table += "<td>" + score[j][i - 1] + "</td>";
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