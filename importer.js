var xlsx = require("xlsx");
module.exports = function(db) {
  return {
    questionnaire: function(file) {
      var workbook = xlsx.readFile(file);
      var sheet_name_list = workbook.SheetNames;
      var xlData = xlsx.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
      for (var i = 0; i < xlData.length; i++) {
        xlData[i].released = false;
        xlData[i].timer = 0;
        db.collection("questionnaire").insert(xlData[i]);
      }
    }
  };
}