CREATE TABLE IF NOT EXISTS attributes (
    name varchar(100) NOT NULL,
    type varchar(100) NOT NULL,
    meta text,
    PRIMARY KEY (name)
);

CREATE TABLE IF NOT EXISTS versions (
	id bigint(19) NOT NULL AUTO_INCREMENT,
	name varchar(250) NOT NULL,
  value text NOT NULL,
  level int(11) NOT NULL DEFAULT '0',
  status tinyint(1) NOT NULL DEFAULT '1',
  rule1 varchar(250) DEFAULT NULL,
  operator1 varchar(100),
  value1 text,
  rule2 varchar(250) DEFAULT NULL,
  operator2 varchar(100),
  value2 text,
  valid_from timestamp NULL DEFAULT NULL,
  valid_to timestamp NULL DEFAULT NULL,
  modified_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  comment text,
	PRIMARY KEY (id),
	UNIQUE KEY `uk_name_level_status` (`name`,`level`,`status`)
);