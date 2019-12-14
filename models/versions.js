var Versions = {
  matches: function(payload, key, operator, value) {
    if (!key || !operator || !value) {
      return true;
    }
    let currVal = payload[key];
    if (!currVal) {
      return false;
    }
    switch (operator) {
      case "equals":
        return value == currVal;
      case "contains":
        return value.includes(currVal);
    }
  },
  match: function(payload, record) {
    return (
      Versions.matches(payload, record.attribute1, record.operator1, record.value1) &&
      Versions.matches(payload, record.attribute2, record.operator2, record.value2)
    );
  },
  get: function(input, callback) {
    return db.query(
      "select * from versions where name=? and enabled=1 order by level",
      [input.name],
      function(err, res) {
        if (!res) {
          throw new Error("No records found");
        }
        let matchedRecord;
        res.forEach(r => {
          if (Versions.match(input, r)) {
            matchedRecord = r;
          } else {
            console.log("Skipped ::: " + r.id);
          }
        });
        callback(err, {
          value: matchedRecord.value
        });
      }
    );
  },
  list: function(filter, callback) {
    return db.query(
      "select * from versions where name=?",
      [filter.name],
      callback
    );
  },
  create: function(version, callback) {
    return db.query(
      "insert into versions(name, value, level, attribute1, operator1, value1, attribute2, operator2, value2) values (?, ?, ?,?, ?, ?,?, ?, ?)",
      [
        version.name,
        version.value,
        version.level,
        version.attribute1,
        version.operator1,
        version.value1,
        version.attribute2,
        version.operator2,
        version.value2
      ],
      callback
    );
  }
};

module.exports = Versions;
