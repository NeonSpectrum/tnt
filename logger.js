module.exports = function(db) {
  return {
    create: function(message) {
      db.collection("log").insert({
        message: message
      }, function(err, item) {});
    }
  };
}