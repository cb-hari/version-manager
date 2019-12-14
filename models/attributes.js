var Attributes = {
  getAll: function(callback) {
    return db.query("select * from attributes", callback);
  },
  create: function(attribute, callback) {
    return db.query(
      "insert into attributes(name, type, meta) values (?, ?, ?)",
      [attribute.name, attribute.type, attribute.meta],
      callback
    );
  }
};

module.exports = Attributes;
